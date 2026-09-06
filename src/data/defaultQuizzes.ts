import type { QuizSet } from '../types/quiz';
import { gcpPdeMasterQuizSet } from './gcpPdeQuizzes';

export const defaultQuizSets: QuizSet[] = [
  gcpPdeMasterQuizSet,
  {
    id: 'sample_cbt_1',
    title: 'Computer Science & Software Engineering Core',
    description: 'Test your understanding of data structures, web architecture, and core CS principles.',
    category: 'Computer Science',
    tags: ['CS', 'Data Structures', 'Algorithms', 'Web Architecture'],
    color: '#6366f1',
    timeLimitMinutes: 10,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    questions: [
      {
        id: 'cs_q1',
        type: 'single',
        prompt: 'What is the time complexity of searching an element in a balanced Binary Search Tree (BST)?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
        correctAnswers: [2],
        explanation: 'In a balanced BST, each step cuts the remaining search space in half, resulting in O(log n) time complexity.',
        hint: 'Think about binary search algorithm performance.',
        points: 1
      },
      {
        id: 'cs_q2',
        type: 'multiple',
        prompt: 'Which of the following are ACID properties in database transactions? (Select all that apply)',
        options: ['Atomicity', 'Consistency', 'Isolation', 'Durability', 'Availability'],
        correctAnswers: [0, 1, 2, 3],
        explanation: 'ACID stands for Atomicity, Consistency, Isolation, and Durability. Availability is part of the CAP theorem.',
        hint: 'ACID is a 4-letter acronym for transaction guarantees.',
        points: 2
      },
      {
        id: 'cs_q3',
        type: 'true-false',
        prompt: 'HTTP/2 supports multiplexing multiple requests over a single TCP connection.',
        options: ['True', 'False'],
        correctAnswers: ['true'],
        explanation: 'HTTP/2 introduced header compression and stream multiplexing over one single TCP connection to eliminate head-of-line blocking.',
        points: 1
      },
      {
        id: 'cs_q4',
        type: 'fill-blank',
        prompt: 'What keyword in JavaScript is used to declare a variable that cannot be reassigned?',
        correctAnswers: ['const'],
        explanation: '`const` creates a read-only reference to a value within block scope.',
        hint: 'Short for constant.',
        points: 1
      },
      {
        id: 'cs_q5',
        type: 'flashcard',
        prompt: 'What is the difference between Process and Thread?',
        correctAnswers: ['Process has its own isolated memory space. Threads share memory within the parent process.'],
        explanation: 'Processes are independent execution units with separate address spaces, whereas threads share code, data, and OS resources of their parent process.',
        points: 1
      }
    ]
  },
  {
    id: 'sample_cbt_2',
    title: 'Cloud & Infrastructure Concepts',
    description: 'Essential cloud computing fundamentals, virtualization, containerization, and DevOps practice.',
    category: 'Cloud Computing',
    tags: ['Cloud', 'DevOps', 'Docker', 'Kubernetes'],
    color: '#06b6d4',
    timeLimitMinutes: 15,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    questions: [
      {
        id: 'cloud_q1',
        type: 'single',
        prompt: 'Which AWS service provides scalable object storage for photos, videos, and static files?',
        options: ['Amazon EC2', 'Amazon S3', 'Amazon EBS', 'Amazon DynamoDB'],
        correctAnswers: [1],
        explanation: 'Amazon Simple Storage Service (Amazon S3) is object storage built to store and retrieve any amount of data from anywhere.',
        points: 1
      },
      {
        id: 'cloud_q2',
        type: 'true-false',
        prompt: 'Containers share the host operating system kernel, whereas Virtual Machines include a full guest OS.',
        options: ['True', 'False'],
        correctAnswers: ['true'],
        explanation: 'Docker containers leverage Linux namespaces and cgroups to share the host kernel, making them much lighter than VM hypervisors.',
        points: 1
      },
      {
        id: 'cloud_q3',
        type: 'single',
        prompt: 'In Kubernetes, what is the smallest deployable computing unit that can be created and managed?',
        options: ['Node', 'Pod', 'Service', 'Container'],
        correctAnswers: [1],
        explanation: 'A Pod is the smallest execution unit in Kubernetes, containing one or more co-located containers.',
        points: 1
      }
    ]
  },
  {
    id: 'sample_cbt_3',
    title: 'Active Recall: Memory & Study Mastery Flashcards',
    description: 'Learn proven scientific learning techniques using active recall and spaced repetition.',
    category: 'Learning Skills',
    tags: ['Active Recall', 'Spaced Repetition', 'Memory'],
    color: '#ec4899',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    questions: [
      {
        id: 'mem_q1',
        type: 'flashcard',
        prompt: 'What is the "Feynman Technique"?',
        correctAnswers: ['Explaining a concept in simple terms as if teaching a child to identify gaps in your understanding.'],
        explanation: 'Step 1: Choose a concept. Step 2: Teach it to a toddler/layman. Step 3: Identify knowledge gaps. Step 4: Review and simplify.',
        points: 1
      },
      {
        id: 'mem_q2',
        type: 'flashcard',
        prompt: 'What is the "Leitner System"?',
        correctAnswers: ['A spaced-repetition method using flashcard boxes reviewed at expanding time intervals based on mastery.'],
        explanation: 'Correct cards move to the next box (reviewed less often), while incorrect cards move back to Box 1 (reviewed daily).',
        points: 1
      },
      {
        id: 'mem_q3',
        type: 'single',
        prompt: 'Which study method produces the highest long-term retention rate?',
        options: ['Rereading textbook chapters', 'Highlighting text with colorful markers', 'Self-testing / Active recall practice', 'Listening to background lectures'],
        correctAnswers: [2],
        explanation: 'Cognitive science consistently shows active testing/retrieval practice produces far higher retention than passive rereading or highlighting.',
        points: 1
      }
    ]
  }
];
