import zipfile
import xml.etree.ElementTree as ET
import csv
import json
import re

def parse_docx(docx_path):
    zip_ref = zipfile.ZipFile(docx_path)
    tree = ET.fromstring(zip_ref.read('word/document.xml'))
    
    paragraphs = []
    for p in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
        text = ''.join(p.itertext()).strip()
        if text:
            paragraphs.append(text)
            
    return paragraphs

def process_paragraphs(paragraphs):
    questions = []
    current_q = None
    current_batch = "Batch 1"
    
    for p in paragraphs:
        # Check for batch header
        batch_match = re.search(r'(Batch\s+\d+)', p, re.IGNORECASE)
        if batch_match and ("Questions" in p or "questions" in p):
            current_batch = batch_match.group(1).title()

        # Check for question start
        q_match = re.match(r'^(\d+)\.\s+(.*)', p)
        if q_match:
            if current_q:
                questions.append(current_q)
            q_num = int(q_match.group(1))
            prompt = q_match.group(2)
            current_q = {
                'id': f'gcp_pde_{q_num}',
                'batch': current_batch,
                'prompt': prompt,
                'options': [],
                'correct_letters': [],
                'explanation': '',
                'hint': ''
            }
            continue

        if not current_q:
            continue

        # Check for option start
        opt_match = re.match(r'^([A-E])[\.\)]\s*(.*)', p)
        if opt_match:
            letter = opt_match.group(1).upper()
            opt_text = opt_match.group(2).strip()
            
            is_starred = False
            if '★' in opt_text or '*' in opt_text:
                is_starred = True
                opt_text = re.sub(r'[\s★\*]+$', '', opt_text).strip()

            current_q['options'].append(opt_text)
            if is_starred:
                current_q['correct_letters'].append(letter)
            continue

        # Check for "Correct answer:" line
        ans_match = re.match(r'^Correct\s+answer:\s*(.*)', p, re.IGNORECASE)
        if ans_match:
            ans_str = ans_match.group(1).strip()
            found_letters = re.findall(r'\b([A-E])\b', ans_str.upper())
            for ltr in found_letters:
                if ltr not in current_q['correct_letters']:
                    current_q['correct_letters'].append(ltr)
            continue

        # Check for Explanation line
        exp_match = re.match(r'^Explanation:\s*(.*)', p, re.IGNORECASE)
        if exp_match:
            current_q['explanation'] = exp_match.group(1).strip()
            continue

        if current_q and len(current_q['options']) == 0 and not p.startswith('Correct answer:'):
            current_q['prompt'] += ' ' + p
        elif current_q and len(current_q['options']) > 0 and not p.startswith('Correct answer:'):
            if current_q['explanation']:
                current_q['explanation'] += ' ' + p
            elif not p.startswith('Batch'):
                current_q['explanation'] = p

    if current_q:
        questions.append(current_q)

    return questions

def convert_to_cbt_format(questions):
    cbt_questions = []
    for q in questions:
        options = q['options']
        correct_letters = q['correct_letters']
        
        correct_indices = []
        for ltr in correct_letters:
            idx = ord(ltr) - 65
            if 0 <= idx < len(options):
                correct_indices.append(idx)
                
        if len(correct_indices) == 0 and len(options) > 0:
            correct_indices = [0]

        q_type = 'multiple' if len(correct_indices) > 1 else 'single'

        cbt_questions.append({
            'id': q['id'],
            'batch': q['batch'],
            'type': q_type,
            'prompt': q['prompt'],
            'options': options,
            'correctAnswers': correct_indices,
            'explanation': q['explanation'] or f"Correct Answer: {', '.join(correct_letters)}",
            'hint': f"Select {len(correct_indices)} option(s).",
            'points': 1
        })
    return cbt_questions

if __name__ == '__main__':
    paragraphs = parse_docx('/Users/mot/Documents/git/cbt-quiz-app/GCP_PDE_Practice_QA.docx')
    parsed_questions = process_paragraphs(paragraphs)
    cbt_questions = convert_to_cbt_format(parsed_questions)

    print(f"Successfully extracted {len(cbt_questions)} questions!")

    # Master Quiz Set
    master_quiz_set = {
        'id': 'gcp_pde_master',
        'title': 'Google Cloud Professional Data Engineer (Full Master Bank)',
        'description': f'Complete exam question bank containing all {len(cbt_questions)} practice questions. Supports custom batch splitting (e.g. 50q) or full exam mode.',
        'category': 'GCP Certification',
        'tags': ['GCP', 'Data Engineer', 'Master Bank', 'Certification'],
        'color': '#6366f1',
        'timeLimitMinutes': 120,
        'createdAt': '2026-09-06T00:00:00.000Z',
        'updatedAt': '2026-09-06T00:00:00.000Z',
        'questions': cbt_questions
    }

    # Save master TS file
    ts_path = '/Users/mot/Documents/git/cbt-quiz-app/src/data/gcpPdeQuizzes.ts'
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write("import type { QuizSet } from '../types/quiz';\n\n")
        f.write(f"export const gcpPdeMasterQuizSet: QuizSet = {json.dumps(master_quiz_set, indent=2)};\n")

    print(f"Generated single master quiz set at {ts_path}")
