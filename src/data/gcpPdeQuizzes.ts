import type { QuizSet } from '../types/quiz';

export const gcpPdeMasterQuizSet: QuizSet = {
  "id": "gcp_pde_master",
  "title": "Google Cloud Professional Data Engineer (Full Master Bank)",
  "description": "Complete exam question bank containing all 481 practice questions. Supports custom batch splitting (e.g. 50q) or full exam mode.",
  "category": "GCP Certification",
  "tags": [
    "GCP",
    "Data Engineer",
    "Master Bank",
    "Certification"
  ],
  "color": "#6366f1",
  "timeLimitMinutes": 120,
  "createdAt": "2026-09-06T00:00:00.000Z",
  "updatedAt": "2026-09-06T00:00:00.000Z",
  "questions": [
    {
      "id": "gcp_pde_1",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You use a dataset in BigQuery for analysis. You want to provide third-party companies with access to the same dataset. You need to keep the costs of data sharing low and ensure that the data is current. Which solution should you choose?",
      "options": [
        "Create an authorized view on the BigQuery table to control data access, and provide third-party companies with access to that view.",
        "Use Cloud Scheduler to export the data on a regular basis to Cloud Storage, and provide third- party companies with access to the bucket.",
        "Create a separate dataset in BigQuery that contains the relevant data to share, and provide third- party companies with access to the new dataset.",
        "Create a Cloud Dataflow job that reads the data in frequent time intervals, and writes it to the relevant BigQuery dataset or Cloud Storage bucket for third-party companies to use."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_2",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A shipping company has live package-tracking data that is sent to an Apache Kafka stream in real time. This is then loaded into BigQuery. Analysts in your company want to query the tracking data in BigQuery to analyze geospatial trends in the lifecycle of a package. The table was originally created with ingest-date partitioning. Over time, the query processing time has increased. You need to implement a change that would improve query performance in BigQuery. What should you do?",
      "options": [
        "Implement clustering in BigQuery on the ingest date column.",
        "Implement clustering in BigQuery on the package-tracking ID column.",
        "Tier older data onto Cloud Storage files, and leverage extended tables.",
        "Re-create the table using data partitioning on the package delivery date."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_3",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You have historical data covering the last three years in BigQuery and a data pipeline that delivers new data to BigQuery daily. You have noticed that when the Data Science team runs a query filtered on a date column and limited to 3090 days of data, the query scans the entire table. You also noticed that your bill is increasing more quickly than you expected. You want to resolve the issue as cost-effectively as possible while maintaining the ability to conduct SQL queries. What should you do?",
      "options": [
        "Re-create the tables using DDL. Partition the tables by a column containing a TIMESTAMP or DATE Type.",
        "Recommend that the Data Science team export the table to a CSV file on Cloud Storage and use Cloud Datalab to explore the data by reading the files directly.",
        "Modify your pipeline to maintain the last 3090 days of data in one table and the longer history in a different table to minimize full table scans over the entire history.",
        "Write an Apache Beam pipeline that creates a BigQuery table per day. Recommend that the Data Science team use wildcards on the table name suffixes to select the data they need."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_4",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You want to automate execution of a multi-step data pipeline running on Google Cloud. The pipeline includes Cloud Dataproc and Cloud Dataflow jobs that have multiple dependencies on each other. You want to use managed services where possible, and the pipeline will run every day. Which tool should you use?",
      "options": [
        "cron",
        "Cloud Composer",
        "Cloud Scheduler",
        "Workflow Templates on Cloud Dataproc"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_5",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You work for a shipping company that uses handheld scanners to read shipping labels. Your company has strict data privacy standards that require scanners to only transmit recipients' personally identifiable information (PII) to analytics systems, which violates user privacy rules. You want to quickly build a scalable solution using cloud-native managed services to prevent exposure of PII to the analytics systems. What should you do?",
      "options": [
        "Create an authorized view in BigQuery to restrict access to tables with sensitive data.",
        "Install a third-party data validation tool on Compute Engine virtual machines to check the incoming data for sensitive information.",
        "Use Stackdriver logging to analyze the data passed through the total pipeline to identify transactions that may contain sensitive information.",
        "Build a Cloud Function that reads the topics and makes a call to the Cloud Data Loss Prevention API. Use the tagging and confidence levels to either pass or quarantine the data in a bucket for review."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_6",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You are working as a lead data engineer, The team is working on a classification model and has already validated steps related to model development, performance, quality, and infrastructure. The governance team was asked to visually analyze the model\u2018s predictive behavior to understand the importance of different data features. How should you fulfill the governance team requirement before the production deployment?",
      "options": [
        "Share the used notebooks during the model development phase that contains all the details already processed.",
        "Use what-if analysis tool to understand the importance of data features and visualize the model across subsets of input data",
        "Extract Model performance metrics from Cloud Logging already generated from previous runs during the development phase. Use Data studio for visualization.",
        "Use weight-and-biases tool to understand the importance of data features and visualize the model across subsets of input data"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_7",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You designed a database for patient records as a pilot project to cover a few hundred patients in three clinics. Your design used a single database table to represent all patients and their visits, and you used self-joins to generate reports. The server resource utilization was at 50%. Since then, the scope of the project has expanded. The database must now store 100 times more patient records. You can no longer run the reports, because they either take too long or they encounter errors with insufficient compute resources. How should you adjust the database design?",
      "options": [
        "Add capacity (memory and disk space) to the database server by the order of 200.",
        "Shard the tables into smaller ones based on date ranges, and only generate reports with prespecified date ranges.",
        "Normalize the master patient-record table into the patient table and the visits table, and create other necessary tables to avoid self-join.",
        "Partition the table into smaller tables, with one for each clinic. Run queries against the smaller table pairs, and use unions for consolidated reports."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_8",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "AdMediaPlus is an Advertising agency that manages ad campaigns and analytics for their customers. They have a requirement to analyze Youtube channel reports and Youtube Content Owner reports using ANSI SQL. What is the straightforward approach that fits this requirement?",
      "options": [
        "Use DataTransferService to load the data into BigQuery, Make Analysis via SQL",
        "Export Data from Youtube channel analytics, use Cloud storage for storage and Dataflow for analysis.",
        "Export Data from Youtube channel analytics in CSV format, use Cloud Storage for storage then load it into BigQuery to make analysis via SQL.",
        "Use DataTransferService to load the data into Cloud Storage, then load it into BigQuery to make analysis via SQL"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_9",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You create an important report for your large team in Google Data Studio 360. The report uses Google BigQuery as its data source. You notice that visualizations are not showing data that is less than 1 hour old. What should you do?",
      "options": [
        "Disable caching by editing the report settings.",
        "Disable caching in BigQuery by editing table details.",
        "Refresh your browser tab showing the visualizations.",
        "Clear your browser history for the past hour then reload the tab showing the virtualizations."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_10",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You have been asked as a Data Engineer to build a pipeline that processes 20G of scanned documents stored as images in Cloud Storage. The pipeline should run monthly to analyze and extract entities from each document and export it to several internal applications. You need to ensure the accuracy of data extracted by humans by reviewing, validating, and correcting it when necessary. You want to minimize development time. How should you implement the pipeline that fits the requirement above?",
      "options": [
        "Build an NLP model for Entity recognition in AI platform, and use batch prediction features to make monthly predictions. Export the results in CSV format to be reviewed by a specialized team then upload them to PubSub",
        "Use DocumentAI with batch_process_documents function and Human-in-the-Loop feature to extract entity and validate the output with the built-in workflow, extract the outputs to PubSub",
        "Use Transfer Learning to fine-tune Bert model, deploy an Endpoint to AI Platform, run it monthly, and export the results to pubsub",
        "Use DocumentAI with process_documents function and Human-in-the-Loop feature to extract entity and validate the output with the built-in workflow, extract the outputs to PubSub"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_11",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "An external customer provides you with a daily dump of data from their database. The data flows into Google Cloud Storage GCS as comma-separated values (CSV) files. You want to analyze this data in Google BigQuery, but the data could have rows that are formatted incorrectly or corrupted. How should you build this pipeline?",
      "options": [
        "Use federated data sources, and check data in the SQL query.",
        "Enable BigQuery monitoring in Google Stackdriver and create an alert.",
        "Import the data into BigQuery using the gcloud CLI and set max_bad_records to 0.",
        "Run a Google Cloud Dataflow batch pipeline to import the data into BigQuery, and push errors to another dead-letter table for analysis."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_12",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "Suppose you have a dataset of images that are each labeled as to whether or not they contain a human face. To create a neural network that recognizes human faces in images using this labeled dataset, what approach would likely be the most effective?",
      "options": [
        "Use feature engineering to add features for eyes, noses, and mouths to the input data.",
        "Build a neural network with an input layer of pixels, a hidden layer, and an output layer with two categories.",
        "Use K-means Clustering to detect faces in the pixels.",
        "Use deep learning by creating a neural network with multiple hidden layers to automatically detect features of faces."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_13",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "Your weather app queries a database every 15 minutes to get the current temperature. The frontend is powered by Google App Engine and server millions of users. How should you design the frontend to respond to a database failure?",
      "options": [
        "Issue a command to restart the database servers.",
        "Retry the query with exponential backoff, up to a cap of 15 minutes.",
        "Retry the query every second until it comes back online to minimize staleness of data.",
        "Reduce the query frequency to once every hour until the database comes back online."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_14",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "BigAnalytics company is using Dataflow for their data pipelines. the dataflow jobs are scheduled on daily basis at 1am and read parquet files from GCS, apply necessary transformations then store the data into BigQuery. You noticed that there is late arrival data are appended to the original files after the daily execution finished. What should you do to process late arrival data as soon as it\u2019s written on parquet files that guarantee operational efficiency?",
      "options": [
        "Use Cloud function to trigger the dataflow job once the parquet files are modified",
        "Use Cloud Composer with file sensor operator to detect if file changed then trigger the dataflow job",
        "Use Cloud scheduler to run dataflow job twice per day at fixed intervals",
        "Use Window functions of Cloud Dataflow to handle late arrival data"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_15",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You are creating a model to predict housing prices. Due to budget constraints, you must run it on a single resource-constrained virtual machine. Which learning algorithm should you use?",
      "options": [
        "Linear regression",
        "Logistic classification",
        "Recurrent neural network",
        "Feedforward neural network"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_16",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "What are 3 techniques you can use to reduce overfitting in a neural network? (Select 3 answers)",
      "options": [
        "Add a dropout layer",
        "Apply L1 regularization",
        "Reduce the number of features",
        "Apply zero-padding"
      ],
      "correctAnswers": [
        0,
        1,
        2
      ],
      "explanation": "Correct Answer: A, B, C",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_17",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You are building new real-time data warehouse for your company and will use Google BigQuery streaming inserts. There is no guarantee that data will only be sent in once but you do have a unique ID for each row of data and an event timestamp. You want to ensure that duplicates are not included while interactively querying data. Which query type should you use?",
      "options": [
        "Include ORDER BY DESK on timestamp column and LIMIT to 1.",
        "Use GROUP BY on the unique ID column and timestamp column and SUM on the values.",
        "Use the LAG window function with PARTITION by unique ID along with WHERE LAG IS NOT NULL.",
        "Use the ROW_NUMBER window function with PARTITION by unique ID along with WHERE row equals 1."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_18",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "What is the HBase Shell for Cloud Bigtable?",
      "options": [
        "The HBase shell is a command-line tool that performs only user account management functions to grant access to Cloud Bigtable instances.",
        "The HBase shell is a GUI based interface that performs administrative tasks, such as creating and deleting tables.",
        "The HBase shell is a hypervisor based shell that performs administrative tasks, such as creating and deleting new virtualized instances.",
        "The HBase shell is a command-line tool that performs administrative tasks, such as creating and deleting tables."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_19",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "Your company is using WILDCARD tables to query data across multiple tables with similar names. The SQL statement is currently failing with the following error: Which table name will make the SQL statement work correctly?",
      "options": [
        "'bigquery-public-data.noaa_gsod.gsod'",
        "bigquery-public-data.noaa_gsod.gsod",
        "'bigquery-public-data.noaa_gsod.gsod'",
        "'bigquery-public-data.noaa_gsod.gsod*`"
      ],
      "correctAnswers": [
        1,
        2,
        3
      ],
      "explanation": "Correct Answer: B, C, D",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_20",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You are working as a Data Engineer for a supply chain company. The company is using a Cloud Composer to run hundreds of DAGs. Following a security audit, you have been asked to change the current composer environment configuration from public to private IP nodes for the GKE cluster used by Cloud Composer. You noticed after making such a change that some of the CI/CD stages to update Cloud Composer variables using \u201cgcloud composer environments update\u201d are failing. What\u2019s the most likely reason for the failing task of updating the Cloud Composer variables?",
      "options": [
        "After changing the IP configuration the Composer Environment is recreated with a new name necessarily different from the initial one, thus the gcloud composer environments update command needs to be updated with the new name.",
        "When using private IP configuration, the GKE control plane is not any more accessible to the CI/CD machine you need to update the field of Master authorized network",
        "The gcloud composer environments update command is not anymore usable for Environments with private IPs, Use the Python SDK instead to update the environment",
        "Ingress rules on firewall configuration are missing to allow the Traffic from the CI/CD machine as the source."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_21",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "Your company is in a highly regulated industry. One of your requirements is to ensure individual users have access only to the minimum amount of information required to do their jobs. You want to enforce this requirement with Google BigQuery. Which three approaches can you take? (Choose three.)",
      "options": [
        "Disable writes to certain tables.",
        "Restrict access to tables by role.",
        "Ensure that the data is encrypted at all times.",
        "Restrict BigQuery API access to approved users.",
        "Segregate data across multiple tables or databases.",
        "Use Google Stackdriver Audit Logging to determine policy violations."
      ],
      "correctAnswers": [
        1,
        3,
        5
      ],
      "explanation": "Correct answers: B, D, and F. Restricting access to tables by role, restricting BigQuery API access to approved users, and using Cloud (Stackdriver) Audit Logging to monitor policy violations enforce the principle of least privilege and regulatory compliance.",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_22",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You have been asked to ingest data from a new data source that resides in BigQuery, to rename different columns before storing it in the target dataset/table incrementally for weekly execution. The target solution needs to be easy and quick to set up. Your current project is already using the following GCP products: Cloud Composer, Dataflow, and Dataproc. What should you do?",
      "options": [
        "Use Dataflow to data ingestion and column renaming, Cloud composer to orchestrate the weekly job.",
        "Use BigQuery Operators inside and Airflow DAG to ingest and rename columns. Schedule the DAG on a weekly basis",
        "Use BigQuery Operators to ingest the data, store it in GCS the trigger Dataproc for column renaming, and store the output in BigQuery. Use Cloud Composer for orchestration and scheduling.",
        "Use Dataflow to ingest the data in a BigQuery staging table, Dataproc job for column renaming, and Cloud composer for orchestration."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_23",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You are designing a basket abandonment system for an ecommerce company. The system will send a message to a user based on these rules: \u2711 No interaction by the user on the site for 1 hour Has added more than $30 worth of products to the basket \u2711 Has not completed a transaction You use Google Cloud Dataflow to process the data and decide if a message should be sent. How should you design the pipeline?",
      "options": [
        "Use a fixed-time window with a duration of 60 minutes.",
        "Use a sliding time window with a duration of 60 minutes.",
        "Use a session window with a gap time duration of 60 minutes.",
        "Use a global window with a time based trigger with a delay of 60 minutes."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_24",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You are working as a Data Engineer in an Analytics startup that manages a Cloud Composer cluster. You deployed a DAG that contains a BigQueryOperator that connect to GoogleAnalytics dataset to collect yesterday\u2019s data from intraday tables suffixed by the date. The DAG is scheduled daily at 2AM. the execution history shows the following error appeared randomly at some days then cause the DAG failure. Table does not exist. You would like to avoid DAG failure and process the data once available What should you do?",
      "options": [
        "Schedule the DAG at different timeframe to avoid the DAG failure",
        "Add BigQuerySensor Operator as an additional task to poll for the data availability and process it once ready. This will avoid any DAG failure related to the unavailable data",
        "On the DAG default args, add retry_delay, set to 1hour to avoid the dag failure.",
        "Add a BigQueryOperator as an additional task to check the Metadata for the required table availability and process it once ready. This will avoid any DAG failure related to the unavailable data"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_25",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "Your company handles data processing for a number of different clients. Each client prefers to use their own suite of analytics tools, with some allowing direct query access via Google BigQuery. You need to secure the data so that clients cannot see each other's data. You want to ensure appropriate access to the data. Which three steps should you take? (Choose three.)",
      "options": [
        "Load data into different partitions.",
        "Load data into a different dataset for each client.",
        "Put each client's BigQuery dataset into a different table.",
        "Restrict a client's dataset to approved users.",
        "Only allow a service account to access the datasets.",
        "Use the appropriate identity and access management (IAM) roles for each client's users."
      ],
      "correctAnswers": [
        1,
        3,
        5
      ],
      "explanation": "Correct answers: B, D, and F. Loading data into separate datasets per client, restricting each dataset to approved users, and assigning appropriate IAM roles ensure full tenant data isolation.",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_26",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You have the following SQL query : WITH Items AS (SELECT [\"coffee\", \"tea\", \"milk\"] AS item_array) SELECT item_array, item_array[OFFSET(1)] AS item_offset_1, item_array[OFFSET(2)] AS item_offset_2, item_array[___________(3)] AS item_offset_3, FROM Items What is the missing expression that will lead to the following output?",
      "options": [
        "OFFSET",
        "IF_OFFSET",
        "SAFE_OFFSET",
        "NO_OFFSET"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_27",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You want to process payment transactions in a point-of-sale application that will run on Google Cloud Platform. Your user base could grow exponentially, but you do not want to manage infrastructure scaling. Which Google database service should you use?",
      "options": [
        "Cloud SQL",
        "BigQuery",
        "Cloud Bigtable",
        "Cloud Datastore"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_28",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "Your company is planning to use Bigtable as part of their production workloads and you have been asked to design the target schema, tables, columns, and rows. High throughput volume is expected once in a production environment. What are the main principles to take into consideration for the schema design it? Select two choices.",
      "options": [
        "Do not store less than 5 MB per column",
        "Store datasets with similar schema in the same table",
        "Use few large tables versus too many small tables",
        "Design the row key in the form timestamp#id to improve performances"
      ],
      "correctAnswers": [
        1,
        2
      ],
      "explanation": "Correct Answer: B, C",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_29",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "You want to use a database of information about tissue samples to classify future tissue samples as either normal or mutated. You are evaluating an unsupervised anomaly detection method for classifying the tissue samples. Which two characteristic support this method? (Choose two.)",
      "options": [
        "There are very few occurrences of mutations relative to normal samples.",
        "There are roughly equal occurrences of both normal and mutated samples in the database.",
        "You expect future mutations to have different features from the mutated samples in the database.",
        "You expect future mutations to have similar features to the mutated samples in the database.",
        "You already have labels for which samples are mutated and which are normal in the database."
      ],
      "correctAnswers": [
        0,
        2
      ],
      "explanation": "Correct Answer: A, C",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_30",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "Your company is migrating its structured data currently on-premises to google cloud. you have been asked to design the appropriate storage to run large analytical workloads with minimum latency that doesn\u2019t exceed milliseconds. What is the appropriate storage to choose?",
      "options": [
        "Cloud Spanner",
        "BigQuery",
        "BigTable",
        "Cloud Storage"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_31",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You need to store and analyze social media postings in Google BigQuery at a rate of 10,000 messages per minute in near real-time. Initially, design the application to use streaming inserts for individual postings. Your application also performs data aggregations right after the streaming inserts. You discover that the queries after streaming inserts do not exhibit strong consistency, and reports from the queries might miss in-flight data. How can you adjust your application design?",
      "options": [
        "Re-write the application to load accumulated data every 2 minutes.",
        "Convert the streaming insert code to batch load for individual messages.",
        "Load the original message to Google Cloud SQL, and export the table every hour to BigQuery via streaming inserts.",
        "Estimate the average latency for data availability after streaming inserts, and always run queries after waiting twice as long."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_32",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "When using Cloud Dataproc clusters, you can access the YARN web interface by configuring a browser to connect through a ____ proxy.",
      "options": [
        "VPN",
        "HTTPS",
        "HTTP",
        "SOCKS"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_33",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "Your startup has never implemented a formal security policy. Currently, everyone in the company has access to the datasets stored in Google BigQuery. Teams have freedom to use the service as they see fit, and they have not documented their use cases. You have been asked to secure the data warehouse. You need to discover what everyone is doing. What should you do first?",
      "options": [
        "Use Google Stackdriver Audit Logs to review data access.",
        "Get the identity and access management IIAM) policy of each table",
        "Use Stackdriver Monitoring to see the usage of BigQuery query slots.",
        "Use the Google Cloud Billing API to see what account the warehouse is being billed to."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_34",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You are working for a consulting company that offers BigQuery optimization services. One of the company\u2019s customers is using a very large table to store orders containing fields, customer_id, order_id,order_date, amount, and using several queries based on order_date and customer_id filters. The Queries execution time is increasing over time. What should you do to enhance the query execution time on BigQuery?",
      "options": [
        "Add partitioning to table orders based on order_date as the low-cardinality field. add clustering based on order_id field as a high cardinality field",
        "Add clustering to table orders based on order_date as a low-cardinality field. add partitioning based on customer_id field as a high cardinality field",
        "Add partitioning to table orders based on order_id as the low-cardinality field. add clustering based on customer_id field as a high cardinality field",
        "Add partitioning to table orders based on order_date as the low-cardinality field. add clustering based on customer_id field as a high cardinality field"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_35",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "Your company is migrating their 30-node Apache Hadoop cluster to the cloud. They want to re-use Hadoop jobs they have already created and minimize the management of the cluster as much as possible. They also want to be able to persist data beyond the life of the cluster. What should you do?",
      "options": [
        "Create a Google Cloud Dataflow job to process the data.",
        "Create a Google Cloud Dataproc cluster that uses persistent disks for HDFS.",
        "Create a Hadoop cluster on Google Compute Engine that uses persistent disks.",
        "Create a Cloud Dataproc cluster that uses the Google Cloud Storage connector.",
        "Create a Hadoop cluster on Google Compute Engine that uses Local SSD disks."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_36",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "Your company is using Google Cloud AI Platform(Vertex AI) to fine tune its classification model built to serve monthly predictions for the CRM team. The predictions to send to the CRM team are scores and tabular data for each customer. You have been asked to industrialize the ML Model and push it into the production environment. Your Company is already using Cloud Dataflow, Cloud Composer, Cloud Dataproc What is the most cost-effective solution that guarantees production industrialization, async delivery to the CRM, and backfilling when needed?",
      "options": [
        "Use Kube Flow to implement the production-level prediction pipeline, store results in BigQuery. Use Cloud Composer DAG to push scores to PubSub, Schedule it monthly",
        "Use Kube Flow to implement the production-level prediction pipeline, store results in BigQuery. Use Cloud function to send the scores to PubSub",
        "Use Cloud Composer to automate a DAG for batch prediction using AI Platform(Vertex AI), then push the predictions to PubSub. Schedule the pipeline monthly.",
        "Use Cloud Dataproc to generate predictions with spark ML, store results in BigQuery. Use Cloud Composer DAG to push scores to PubSub, Schedule it monthly"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_37",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "Business owners at your company have given you a database of bank transactions. Each row contains the user ID, transaction type, transaction location, and transaction amount. They ask you to investigate what type of machine learning can be applied to the data. Which three machine learning applications can you use? (Choose three.)",
      "options": [
        "Supervised learning to determine which transactions are most likely to be fraudulent.",
        "Unsupervised learning to determine which transactions are most likely to be fraudulent.",
        "Clustering to divide the transactions into N categories based on feature similarity.",
        "Supervised learning to predict the location of a transaction.",
        "Reinforcement learning to predict the location of a transaction.",
        "Unsupervised learning to predict the location of a transaction."
      ],
      "correctAnswers": [
        0,
        1,
        2
      ],
      "explanation": "Correct answers: A, B, and C. Supervised learning can identify known fraud patterns, unsupervised anomaly detection can flag novel fraudulent behavior, and clustering groups transactions by similarity.",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_38",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "Which of these statements about BigQuery caching is true?",
      "options": [
        "BigQuery caches query results for 48 hours.",
        "Query results are cached even if you specify a destination table.",
        "There is no charge for a query that retrieves its results from cache.",
        "By default, a query's results are not cached."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_39",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "Your company's on-premises Apache Hadoop servers are approaching end-of-life, and IT has decided to migrate the cluster to Google Cloud Dataproc. A like-for- like migration of the cluster would require 50 TB of Google Persistent Disk per node. The CIO is concerned about the cost of using that much block storage. You want to minimize the storage cost of the migration. What should you do?",
      "options": [
        "Put the data into Google Cloud Storage.",
        "Use preemptible virtual machines (VMs) for the Cloud Dataproc cluster.",
        "Tune the Cloud Dataproc cluster so that there is just enough disk for all data.",
        "Migrate some of the cold data into Google Cloud Storage, and keep only the hot data in Persistent Disk."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_40",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "Your company launched an image recognition app a few months ago. Users are complaining about wrong classifications for some categories. The application is backed by a custom ML model developed using sci-kit learn and deployed on the AI Platform, the observed metrics show an increased latency when making predictions for two weeks. You have been asked to solve this issue permanently while minimizing the time to market to release a new version while writing a minimum of code. What should you do?",
      "options": [
        "Replace the current model with AutoML for image Classification",
        "Troubleshoot the current model, check for any labeling issue on the training dataset and change the classes accordingly in the model code",
        "Replace the current model with the Built-in Image Classifier on AI Platform",
        "Replace the current model with a Tensorflow model for image"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_41",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You work for a car manufacturer and have set up a data pipeline using Google Cloud Pub/Sub to capture anomalous sensor events. You are using a push subscription in Cloud Pub/Sub that calls a custom HTTPS endpoint that you have created to take action of these anomalous events as they occur. Your custom HTTPS endpoint keeps getting an inordinate amount of duplicate messages. What is the most likely cause of these duplicate messages?",
      "options": [
        "The message body for the sensor event is too large.",
        "Your custom endpoint has an out-of-date SSL certificate.",
        "The Cloud Pub/Sub topic has too many messages published to it.",
        "Your custom endpoint is not acknowledging messages within the acknowledgement deadline."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_42",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You are working as a Data Engineer and you were given 100G of ORC data format files stored in Google Cloud Storage. You have been asked to make an SQL ad hoc analysis and share the results with the business team. The same ORC data will be reused for churn prediction use cases with BigQueryML in a few days and query performance is a top priority. How should you perform the analysis while taking into consideration the future use of the same Data?",
      "options": [
        "Keep the data in Cloud Storage, Use federated queries from the BigQuery console to perform the ad-hoc analysis. reuse the same queries for the future use cases",
        "Load the ORC data in BigQuery native storage, perform the ad-hoc analysis. reuse the same queries for future use cases.",
        "Keep the data in Cloud Storage, perform the analysis using Dataproc via a specific Spark Job to develop. reuse the same job for future use cases",
        "Use Cloud Dataflow to convert the files from ORC to AVRO, Load the AVRO files into Bigquery to perform the ad-hoc SQL analysis. reuse the same queries for the future use cases"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_43",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "Your company uses a proprietary system to send inventory data every 6 hours to a data ingestion service in the cloud. Transmitted data includes a payload of several fields and the timestamp of the transmission. If there are any concerns about a transmission, the system re-transmits the data. How should you deduplicate the data most efficiency?",
      "options": [
        "Assign global unique identifiers (GUID) to each data entry.",
        "Compute the hash value of each data entry, and compare it with all historical data.",
        "Store each data entry as the primary key in a separate database and apply an index.",
        "Maintain a database table to store the hash value and other metadata for each data entry."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_44",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You are planning to use the Beam SDK to read customer data from a BigQuery table. Although the table has numerous columns, you only need to read the first two columns. Which method would be the most efficient?",
      "options": [
        "ParDo",
        "BigQueryIO.Read.fromquery",
        "BigQueryIO.Read.from",
        "TextIO.Read.withMatchConfiguration"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_45",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "Your company has hired a new data scientist who wants to perform complicated analyses across very large datasets stored in Google Cloud Storage and in a Cassandra cluster on Google Compute Engine. The scientist primarily wants to create labelled data sets for machine learning projects, along with some visualization tasks. She reports that her laptop is not powerful enough to perform her tasks and it is slowing her down. You want to help her perform her tasks. What should you do?",
      "options": [
        "Run a local version of Jupiter on the laptop.",
        "Grant the user access to Google Cloud Shell.",
        "Host a visualization tool on a VM on Google Compute Engine.",
        "Deploy Google Cloud Datalab to a virtual machine (VM) on Google Compute Engine."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_46",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You are working in an e-commerce startup and you have been asked to rapidly experiment with the outcome of the recommendations algorithm given historical customer behavior, transactions, and product ratings already stored in BigQuery as a potential future feature of the product you are working on to recommend personalized customer experiences. How should you build and make batch recommendations on the current customer base as quickly as possible with minimal development?",
      "options": [
        "Create Matrix factorization model using BigQueryML, Use ml.predict for inference",
        "Use VertexAI Workbench to create a jupyter Notebook with GPU support, Use AutoKeras to create the model and the predictions.",
        "Use AutoML via the console UI to create the model and predictions from data in BigQuery",
        "Create Matrix factorization model using BigQueryML, Use ml.recommend for inference"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_47",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You are deploying 10,000 new Internet of Things devices to collect temperature data in your warehouses globally. You need to process, store and analyze these very large datasets in real time. What should you do?",
      "options": [
        "Send the data to Google Cloud Datastore and then export to BigQuery.",
        "Send the data to Google Cloud Pub/Sub, stream Cloud Pub/Sub to Google Cloud Dataflow, and store the data in Google BigQuery.",
        "Send the data to Cloud Storage and then spin up an Apache Hadoop cluster as needed in Google Cloud Dataproc whenever analysis is required.",
        "Export logs in batch to Google Cloud Storage and then spin up a Google Cloud SQL instance, import the data from Cloud Storage, and run an analysis as needed."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_48",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "Your company has historic tabular data about customer transactions, orders, and payments tables stored in BigQuery, partitioned and clustered. The company uses BigQuery for most of its analytics workloads and uses the on-demand pricing model. BigQuery monthly bill is increasing and the management asked to check the possibilities to enhance and optimize those costs. How should you reduce the monthly bill on BigQuery? (Choose 2 answers)",
      "options": [
        "Move to flat pricing",
        "Read-only data you need to reduce the amount of processed data and used slots",
        "Offload part of the data to Google Cloud Storage since storage costs are much less than Bigquery",
        "Activate BigQuery cache on the project and organization level"
      ],
      "correctAnswers": [
        0,
        1
      ],
      "explanation": "Correct Answer: A, B",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_49",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "You have spent a few days loading data from comma-separated values (CSV) files into the Google BigQuery table CLICK_STREAM. The column DT stores the epoch time of click events. For convenience, you chose a simple schema where every field is treated as the STRING type. Now, you want to compute web session durations of users who visit your site, and you want to change its data type to the TIMESTAMP. You want to minimize the migration effort without making future queries computationally expensive. What should you do?",
      "options": [
        "Delete the table CLICK_STREAM, and then re-create it such that the column DT is of the TIMESTAMP type. Reload the data.",
        "Add a column TS of the TIMESTAMP type to the table CLICK_STREAM, and populate the numeric values from the column TS for each row. Reference the column TS instead of the column DT from now on.",
        "Create a view CLICK_STREAM_V, where strings from the column DT are cast into TIMESTAMP values. Reference the view CLICK_STREAM_V instead of the table CLICK_STREAM from now on.",
        "Add two columns to the table CLICK STREAM: TS of the TIMESTAMP type and IS_NEW of the BOOLEAN type. Reload all data in append mode. For each appended row, set the value of IS_NEW to true. For future queries, reference the column TS instead of the column DT, with the WHERE clause ensuring that the value of IS_NEW must be true.",
        "Construct a query to return every row of the table CLICK_STREAM, while using the built-in function to cast strings from the column DT into TIMESTAMP values. Run the query into a destination table NEW_CLICK_STREAM, in which the column TS is the TIMESTAMP type. Reference the table NEW_CLICK_STREAM instead of the table CLICK_STREAM from now on. In the future, new data is loaded into the table NEW_CLICK_STREAM."
      ],
      "correctAnswers": [
        4
      ],
      "explanation": "Correct Answer: E",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_50",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "Your company has historic tabular data about customer transactions, orders and payments stored in BigQuery. The company wants to add a customer segmentation module and populate the results back to BigQuery and PubSub to be consumed by the CRM. The segmentation process is rule-based according to given business inputs that can be processed via SQL. Your company is already using Cloud Dataflow, Cloud Composer, Cloud Dataproc How should you implement such a solution with minimal development and operational effort?",
      "options": [
        "Use Kube Flow to implement the production-level segmentation pipeline, store results in BigQuery. Use Cloud Composer DAG to push scores to PubSub",
        "Use Kube Flow to implement the production-level prediction pipeline, store results in BigQuery. Use Cloud function to send the scores to PubSub",
        "Use the existing Cloud Composer to automate a DAG with BigQueryOperator that implements the business given rules, store the results in a BigQuery table and push them to PubSub on the same DAG.",
        "Use Cloud Dataproc to process the business rules for segmentation with spark ML, store results in BigQuery. Use Cloud Composer DAG to push scores to PubSub"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "50 questions in this batch.",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_51",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You want to use Google Stackdriver Logging to monitor Google BigQuery usage. You need an instant notification to be sent to your monitoring tool when new data is appended to a certain table using an insert job, but you do not want to receive notifications for other tables. What should you do?",
      "options": [
        "Make a call to the Stackdriver API to list all logs, and apply an advanced filter.",
        "In the Stackdriver logging admin interface, and enable a log sink export to BigQuery.",
        "In the Stackdriver logging admin interface, enable a log sink export to Google Cloud Pub/Sub, and subscribe to the topic from your monitoring tool.",
        "Using the Stackdriver API, create a project sink with advanced log filter to export to Pub/Sub, and subscribe to the topic from your monitoring tool."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_52",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Which methods can be used to reduce the number of rows processed by BigQuery?",
      "options": [
        "Putting data in partitions; using the LIMIT clause",
        "Splitting tables into multiple tables; using the LIMIT clause",
        "Splitting tables into multiple tables; putting data in partitions; using the LIMIT clause",
        "Splitting tables into multiple tables; putting data in partitions"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_53",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are working on a sensitive project involving private user data. You have set up a project on Google Cloud Platform to house your work internally. An external consultant is going to assist with coding a complex transformation in a Google Cloud Dataflow pipeline for your project. How should you maintain users' privacy?",
      "options": [
        "Grant the consultant the Viewer role on the project.",
        "Grant the consultant the Cloud Dataflow Developer role on the project.",
        "Create a service account and allow the consultant to log on with it.",
        "Create an anonymized sample of the data for the consultant to work with in a different project."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_54",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Which layer of a convolutional neural network is normally used to perform downsampling or dimensionality reduction?",
      "options": [
        "Dropout layer",
        "Pooling layer",
        "Convolutional layer",
        "Logits layer"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_55",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are building a model to predict whether or not it will rain on a given day. You have thousands of input features and want to see if you can improve training speed by removing some features while having a minimum effect on model accuracy. What can you do?",
      "options": [
        "Eliminate features that are highly correlated to the output labels.",
        "Combine highly co-dependent features into one representative feature.",
        "Instead of feeding in each feature individually, average their values in batches of 3.",
        "Remove the features that have null values for more than 50% of the training records."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_56",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are working as a Data Engineer at a large company relying on BigQuery as a Datawarehouse. You executed the SQL query #standardSQL SELECT COUNT(*) AS rows FROM `bigquery-public-data.samples.shakespeare`; and you received the following error Syntax error: Unexpected keyword ROWS at [3:15] How to solve this issue while keeping the same alias name for the count(*) statement?",
      "options": [
        "escape the alias rows using backticks",
        "escape the alias rows using square brackets",
        "rename the alias rows using AS statement",
        "rows is reserved keyword in standard SQL, could not be used"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_57",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Your company is performing data preprocessing for a learning algorithm in Google Cloud Dataflow. Numerous data logs are being are being generated during this step, and the team wants to analyze them. Due to the dynamic nature of the campaign, the data is growing exponentially every hour. The data scientists have written the following code to read the data for a new key features in the logs. You want to improve the performance of this data read. What should you do?",
      "options": [
        "Specify the TableReference object in the code.",
        "Use .fromQuery operation to read specific fields from the table.",
        "Use of both the Google BigQuery TableSchema and TableFieldSchema classes.",
        "Call a transform that returns TableRow objects, where each element in the PCollection represents a single row in the table."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_58",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Your Company is managing a supply chain product globally accessible. The company has several partners across different countries that need to access BigQuery country-specific tables for historic data analysis for each country. What should you do to guarantee that each partner access only their specific tables on BigQuery without altering the data?",
      "options": [
        "Create a single dataset for all the countries, grant the role roles/bigquery.metadataViewer at table table-level for each country-specific tables for each partner",
        "Create a single dataset for all the countries, grant the role roles/bigquery.dataViewer at table table-level for each country specific tables for each partner",
        "Create a single dataset for all the countries, grant the role roles/bigquery.dataOwner at table table-level for each country specific tables for each partner",
        "Create a single dataset for all the countries, grant the role roles/bigquery.dataEditor at table table-level for each country specific tables for each partner"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_59",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Your company is streaming real-time sensor data from their factory floor into Bigtable and they have noticed extremely poor performance. How should the row key be redesigned to improve Bigtable performance on queries that populate real-time dashboards?",
      "options": [
        "Use a row key of the form <timestamp>.",
        "Use a row key of the form <sensorid>.",
        "Use a row key of the form <timestamp>#<sensorid>.",
        "Use a row key of the form >#<sensorid>#<timestamp>."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_60",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are working as a Data Engineer for a supply chain startup. you were given access to a data source containing location data in a GeoJson format and have been asked to store and analyze those data using SQL. What is the appropriate Google Cloud Storage service to perform SQL analysis?",
      "options": [
        "Store GeoJson in BigQuery and use standard SQL for analysis",
        "Store GeoJson in Cloud Storage, Build dataflow job to process the analysis",
        "Store GeoJson in CloudSQL and use standard SQL for analysis",
        "Store GeoJson is Cloud Storage, Use Dataproc for analysis"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_61",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Your company's customer and order databases are often under heavy load. This makes performing analytics against them difficult without harming operations. The databases are in a MySQL cluster, with nightly backups taken using mysqldump. You want to perform analytics with minimal impact on operations. What should you do?",
      "options": [
        "Add a node to the MySQL cluster and build an OLAP cube there.",
        "Use an ETL tool to load the data from MySQL into Google BigQuery.",
        "Connect an on-premises Apache Hadoop cluster to MySQL and perform ETL.",
        "Mount the backups to Google Cloud SQL, and then process the data using Google Cloud Dataproc."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_62",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are working for a Data Analytics company that has several cloud composer DAGs for batch prediction jobs launched on AI Platform on a daily schedule. You need to monitor those jobs' behavior for errors raised once launched on the AI platform, and then notify the team if they fail. The company prefers managed service usage with minimum development effort and infrastructure management. How should you set up the alerting using native GCP functionalities?",
      "options": [
        "Set up alerting policy on Cloud Logging for already exported logs there with the corresponding filters.",
        "Create a logging sink that will export Cloud logging to a BigQuery table. Create a DAG on Cloud composer to fetch corresponding alerts and send them by email.",
        "Create a logging sink that will export Cloud logging to a BigQuery table. set up App Engine to read that information and send notification emails",
        "Set up email_on_failure to True for the Cloud composer DAG running the daily prediction. an email is sent if any DAG\u2019s task fails."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_63",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You have Google Cloud Dataflow streaming pipeline running with a Google Cloud Pub/Sub subscription as the source. You need to make an update to the code that will make the new Cloud Dataflow pipeline incompatible with the current version. You do not want to lose any data when making this update. What should you do?",
      "options": [
        "Update the current pipeline and use the drain flag.",
        "Update the current pipeline and provide the transform mapping JSON object.",
        "Create a new pipeline that has the same Cloud Pub/Sub subscription and cancel the old pipeline.",
        "Create a new pipeline that has a new Cloud Pub/Sub subscription and cancel the old pipeline."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_64",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are working as a Data Engineer at a Gaming startup that launched recently a new game called \u201cMeetTheWorld\u201d. You have been asked to make a real-time query of active gamers' counts every minute using SQL and store the results in BigQuery. MeetTheWorld game is using CloudSQL as a backed and a pubsub stream for every subscriber that connects and disconnects from the game. The Startup is already using Cloud Composer, Cloud Dataflow, and Bigquery for their tech stack How should you implement the requirement?",
      "options": [
        "Create a DAG on Cloud Composer with PubSub Operator that will fetch active gamers and BigQuery Operator to store results into BigQuery. Schedule the DAG every minute",
        "Create a Dataflow SQL job to count active gamers from the pubsub stream every minute, use BigQueryIO to store the results in Bigquery",
        "Create a DAG on Cloud Composer with a Cloud SQL Operator to retrieve active gamers count and BigQuery Operator to store the results into BigQuery",
        "Create a Dataflow SQL job to count active gamers from the CloudSQL backend every minute, use BigQueryIO to store the results in Bigquery"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_65",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Your company is running their first dynamic campaign, serving different offers by analyzing real-time data during the holiday season. The data scientists are collecting terabytes of data that rapidly grows every hour during their 30-day campaign. They are using Google Cloud Dataflow to preprocess the data and collect the feature (signals) data that is needed for the machine learning model in Google Cloud Bigtable. The team is observing suboptimal performance with reads and writes of their initial load of 10 TB of data. They want to improve this performance while minimizing cost. What should they do?",
      "options": [
        "Redefine the schema by evenly distributing reads and writes across the row space of the table.",
        "The performance issue should be resolved over time as the site of the BigDate cluster is increased.",
        "Redesign the schema to use a single row key to identify values that need to be updated frequently in the cluster.",
        "Redesign the schema to use row keys based on numeric IDs that increase sequentially per user viewing the offers."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_66",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Your software uses a simple JSON format for all messages. These messages are published to Google Cloud Pub/Sub, then processed with Google Cloud Dataflow to create a real-time dashboard for the CFO. During testing, you notice that some messages are missing in the dashboard. You check the logs, and all messages are being published to Cloud Pub/Sub successfully. What should you do next?",
      "options": [
        "Check the dashboard application to see if it is not displaying correctly.",
        "Run a fixed dataset through the Cloud Dataflow pipeline and analyze the output.",
        "Use Google Stackdriver Monitoring on Cloud Pub/Sub to find the missing messages.",
        "Switch Cloud Dataflow to pull messages from Cloud Pub/Sub instead of Cloud Pub/Sub pushing messages to Cloud Dataflow."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_67",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Your company has recently grown rapidly and now ingesting data at a significantly higher rate than it was previously. You manage the daily batch MapReduce analytics jobs in Apache Hadoop. However, the recent increase in data has meant the batch jobs are falling behind. You were asked to recommend ways the development team could increase the responsiveness of the analytics without increasing costs. What should you recommend they do?",
      "options": [
        "Rewrite the job in Pig.",
        "Rewrite the job in Apache Spark.",
        "Increase the size of the Hadoop cluster.",
        "Decrease the size of the Hadoop cluster but also rewrite the job in Hive."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_68",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You work for a large fast food restaurant chain with over 400,000 employees. You store employee information in Google BigQuery in a Users table consisting of a FirstName field and a LastName field. A member of IT is building an application and asks you to modify the schema and data in BigQuery so the application can query a FullName field consisting of the value of the FirstName field concatenated with a space, followed by the value of the LastName field for each employee. How can you make that data available while minimizing cost?",
      "options": [
        "Create a view in BigQuery that concatenates the FirstName and LastName field values to produce the FullName.",
        "Add a new column called FullName to the Users table. Run an UPDATE statement that updates the FullName column for each user with the concatenation of the FirstName and LastName values.",
        "Create a Google Cloud Dataflow job that queries BigQuery for the entire Users table, concatenates the FirstName value and LastName value for each user, and loads the proper values for FirstName, LastName, and FullName into a new table in BigQuery.",
        "Use BigQuery to export the data for the table to a CSV file. Create a Google Cloud Dataproc job to process the CSV file and output a new CSV file containing the proper values for FirstName, LastName and FullName. Run a BigQuery load job to load the new CSV file into BigQuery."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_69",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "Which row keys are likely to cause a disproportionate number of reads and/or writes on a particular node in a Bigtable cluster? (Choose 2 answers)",
      "options": [
        "A timestamp followed by a stock symbol",
        "A stock symbol followed by a timestamp",
        "A sequential numeric ID",
        "A non-sequential numeric ID"
      ],
      "correctAnswers": [
        0,
        2
      ],
      "explanation": "Correct Answer: A, C",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_70",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You work for a manufacturing plant that batches application log files together into a single log file once a day at 2:00 AM. You have written a Google Cloud Dataflow job to process that log file. You need to make sure the log file in processed once per day as inexpensively as possible. What should you do?",
      "options": [
        "Change the processing job to use Google Cloud Dataproc instead.",
        "Manually start the Cloud Dataflow job each morning when you get into the office.",
        "Create a cron job with Google App Engine Cron Service to run the Cloud Dataflow job.",
        "Configure the Cloud Dataflow job as a streaming job so that it processes the log data immediately."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_71",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You work for an economic consulting firm that helps companies identify economic trends as they happen. As part of your analysis, you use Google BigQuery to correlate customer data with the average prices of the 100 most common goods sold, including bread, gasoline, milk, and others. The average prices of these goods are updated every 30 minutes. You want to make sure this data stays up to date so you can combine it with other data in BigQuery as cheaply as possible. What should you do?",
      "options": [
        "Load the data every 30 minutes into a new partitioned table in BigQuery.",
        "Store and update the data in a regional Google Cloud Storage bucket and create a federated data source in BigQuery",
        "Store the data in Google Cloud Datastore. Use Google Cloud Dataflow to query BigQuery and combine the data programmatically with the data stored in Cloud Datastore",
        "Store the data in a file in a regional Google Cloud Storage bucket. Use Cloud Dataflow to query BigQuery and combine the data programmatically with the data stored in Google Cloud Storage."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_72",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are designing the database schema for a machine learning-based food ordering service that will predict what users want to eat. Here is some of the information you need to store: \u2711 The user profile: What the user likes and doesn't like to eat \u2711 The user account information: Name, address, preferred meal times \u2711 The order information: When orders are made, from where, to whom The database will be used to store all the transactional data of the product. You want to optimize the data schema. Which Google Cloud Platform product should you use?",
      "options": [
        "BigQuery",
        "Cloud SQL",
        "Cloud Bigtable",
        "Cloud Datastore"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_73",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Your company is loading comma-separated values (CSV) files into Google BigQuery. The data is fully imported successfully; however, the imported data is not matching byte-to-byte to the source file. What is the most likely cause of this problem?",
      "options": [
        "The CSV data loaded in BigQuery is not flagged as CSV.",
        "The CSV data has invalid rows that were skipped on import.",
        "The CSV data loaded in BigQuery is not using BigQuery's default encoding.",
        "The CSV data has not gone through an ETL phase before loading into BigQuery."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_74",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "Your company produces 20,000 files every hour. Each data file is formatted as a comma separated values (CSV) file that is less than 4 KB. All files must be ingested on Google Cloud Platform before they can be processed. Your company site has a 200 ms latency to Google Cloud, and your Internet connection bandwidth is limited as 50 Mbps. You currently deploy a secure FTP (SFTP) server on a virtual machine in Google Compute Engine as the data ingestion point. A local SFTP client runs on a dedicated machine to transmit the CSV files as is. The goal is to make reports with data from the previous day available to the executives by 10:00 a.m. each day. This design is barely able to keep up with the current volume, even though the bandwidth utilization is rather low. You are told that due to seasonality, your company expects the number of files to double for the next three months. Which two actions should you take? (Choose two.)",
      "options": [
        "Introduce data compression for each file to increase the rate file of file transfer.",
        "Contact your internet service provider (ISP) to increase your maximum bandwidth to at least 100 Mbps.",
        "Redesign the data ingestion process to use gsutil tool to send the CSV files to a storage bucket in parallel.",
        "Assemble 1,000 files into a tape archive (TAR) file. Transmit the TAR files instead, and disassemble the CSV files in the cloud upon receiving them.",
        "Create an S3-compatible storage endpoint in your network, and use Google Cloud Storage Transfer Service to transfer on-premises data to the designated storage bucket."
      ],
      "correctAnswers": [
        2,
        3
      ],
      "explanation": "Correct Answer: C, D",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_75",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are using SaaS services to collect data from various sources in JSON format to produce a competitive intelligence report on a monthly schedule and planned to be real-time in the near future. The Data processing stage needs to store outputs in BigQuery. Select the best architecture choice that requires minimum operational and infrastructure maintenance involvement.",
      "options": [
        "Use Cloud Storage as landing for JSON files, Dataproc for data processing, BigQuery for Analysis, Cloud Composer to orchestrate the pipeline on monthly basis, and Data Studio for visualizations",
        "Use Cloud Storage as landing for JSON files, Dataflow for data processing, and BigQueryIO to store the output in BigQuery for analysis and Data studio for visualizations",
        "Use Bigtable to store JSON files, Dataflow for data processing and BigQueryIO to store the output in BigQuery for analysis and Data studio for visualizations",
        "Use Cloud Storage as landing for JSON files, Cloud Function to be triggered for data processing, store the output in BigQuery for analysis, and Data studio for visualizations"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_76",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "You are choosing a NoSQL database to handle telemetry data submitted from millions of Internet-of-Things (IoT) devices. The volume of data is growing at 100 TB per year, and each data entry has about 100 attributes. The data processing pipeline does not require atomicity, consistency, isolation, and durability (ACID). However, high availability and low latency are required. You need to analyze the data by querying against individual fields. Which three databases meet your requirements? (Choose three.)",
      "options": [
        "Redis",
        "HBase",
        "MySQL",
        "MongoDB",
        "Cassandra",
        "HDFS with Hive"
      ],
      "correctAnswers": [
        1,
        3,
        4
      ],
      "explanation": "Correct answers: B, D, and E. HBase, MongoDB, and Cassandra are horizontally scalable distributed NoSQL databases supporting low latency and attribute-level querying without requiring ACID guarantees.",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_77",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "You are training a spam classifier. You notice that you are overfitting the training data. Which three actions can you take to resolve this problem? (Choose three.)",
      "options": [
        "Get more training examples",
        "Reduce the number of training examples",
        "Use a smaller set of features",
        "Use a larger set of features",
        "Increase the regularization parameters",
        "Decrease the regularization parameters"
      ],
      "correctAnswers": [
        0,
        2,
        4
      ],
      "explanation": "Correct answers: A, C, and E. Overfitting can be addressed by acquiring more training data, reducing model complexity through a smaller set of features, and increasing regularization parameters to penalize large weights.",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_78",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are implementing security best practices on your data pipeline. Currently, you are manually executing jobs as the Project Owner. You want to automate these jobs by taking nightly batch files containing non-public information from Google Cloud Storage, processing them with a Spark Scala job on a Google Cloud Dataproc cluster, and depositing the results into Google BigQuery. How should you securely run this workload?",
      "options": [
        "Restrict the Google Cloud Storage bucket so only you can see the files",
        "Grant the Project Owner role to a service account, and run the job with it",
        "Use a service account with the ability to read the batch files and to write to BigQuery",
        "Use a user account with the Project Viewer role on the Cloud Dataproc cluster to read the batch files and write to BigQuery"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_79",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are using Google BigQuery as your data warehouse. Your users report that the following simple query is running very slowly, no matter when they run the query: SELECT country, state, city FROM [myproject:mydataset.mytable] GROUP BY country You check the query plan for the query and see the following output in the Read section of Stage:1: What is the most likely cause of the delay for this query?",
      "options": [
        "Users are running too many concurrent queries in the system",
        "The [myproject:mydataset.mytable] table has too many partitions",
        "Either the state or the city columns in the [myproject:mydataset.mytable] table have too many NULL values",
        "Most rows in the [myproject:mydataset.mytable] table have the same value in the country column, causing data skew"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_80",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are managing a team of Data Engineers, Data Scientists and Data Analysts. The team is using Vertex AI Worbench- managed notebooks for Ad hoc analysis according to each requirement with access to BigQuery and GCS. The existing notebooks are created using the project default service account and accessible for everyone which causes security issues. How should you reorganize / set up the notebook management on Vertex AI Workbench?",
      "options": [
        "Create user-managed notebooks with single-user access to JupyterLab, keep the default service account",
        "Keep the current notebooks, replace the default service account with a new one having limited access",
        "Create user-managed notebooks with single-user access to JupyterLab, replace the default service account with a new one having limited access",
        "Create user-managed notebooks with single-user access to JupyterLab, No additional service account is needed"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_81",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Your globally distributed auction application allows users to bid on items. Occasionally, users place identical bids at nearly identical times, and different application servers process those bids. Each bid event contains the item, amount, user, and timestamp. You want to collate those bid events into a single location in real time to determine which user bid first. What should you do?",
      "options": [
        "Create a file on a shared file and have the application servers write all bid events to that file. Process the file with Apache Hadoop to identify which user bid first.",
        "Have each application server write the bid events to Cloud Pub/Sub as they occur. Push the events from Cloud Pub/Sub to a custom endpoint that writes the bid event information into Cloud SQL.",
        "Set up a MySQL database for each application server to write bid events into. Periodically query each of those distributed MySQL databases and update a master MySQL database with bid event information.",
        "Have each application server write the bid events to Google Cloud Pub/Sub as they occur. Use a pull subscription to pull the bid events using Google Cloud Dataflow. Give the bid for each item to the user in the bid event that is processed first."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_82",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "Your organization has been collecting and analyzing data in Google BigQuery for 6 months. The majority of the data analyzed is placed in a time-partitioned table named events_partitioned. To reduce the cost of queries, your organization created a view called events, which queries only the last 14 days of data. The view is described in legacy SQL. Next month, existing applications will be connecting to BigQuery to read the events data via an ODBC connection. You need to ensure the applications can connect. Which two actions should you take? (Choose two.)",
      "options": [
        "Create a new view over events using standard SQL",
        "Create a new partitioned table using a standard SQL query",
        "Create a new view over events_partitioned using standard SQL",
        "Create a service account for the ODBC connection to use for authentication",
        "Create a Google Cloud Identity and Access Management (Cloud IAM) role for the ODBC connection and shared events"
      ],
      "correctAnswers": [
        2,
        3
      ],
      "explanation": "Correct Answer: C, D",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_83",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You have enabled the free integration between Firebase Analytics and Google BigQuery. Firebase now automatically creates a new table daily in BigQuery in the format app_events_YYYYMMDD. You want to query all of the tables for the past 30 days in legacy SQL. What should you do?",
      "options": [
        "Use the TABLE_DATE_RANGE function",
        "Use the WHERE_PARTITIONTIME pseudo column",
        "Use WHERE date BETWEEN YYYY-MM-DD AND YYYY-MM-DD",
        "Use SELECT IF.(date >= YYYY-MM-DD AND date <= YYYY-MM-DD"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_84",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Your company is currently setting up data pipelines for their campaign. For all the Google Cloud Pub/Sub streaming data, one of the important business requirements is to be able to periodically identify the inputs and their timings during their campaign. Engineers have decided to use windowing and transformation in Google Cloud Dataflow for this purpose. However, when testing this feature, they find that the Cloud Dataflow job fails for the all streaming insert. What is the most likely cause of this problem?",
      "options": [
        "They have not assigned the timestamp, which causes the job to fail",
        "They have not set the triggers to accommodate the data coming in late, which causes the job to fail",
        "They have not applied a global windowing function, which causes the job to fail when the pipeline is created",
        "They have not applied a non-global windowing function, which causes the job to fail when the pipeline is created"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_85",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You architect a system to analyze seismic data. Your extract, transform, and load (ETL) process runs as a series of MapReduce jobs on an Apache Hadoop cluster. The ETL process takes days to process a data set because some steps are computationally expensive. Then you discover that a sensor calibration step has been omitted. How should you change your ETL process to carry out sensor calibration systematically in the future?",
      "options": [
        "Modify the transformMapReduce jobs to apply sensor calibration before they do anything else.",
        "Introduce a new MapReduce job to apply sensor calibration to raw data, and ensure all other MapReduce jobs are chained after this.",
        "Add sensor calibration data to the output of the ETL process, and document that all users need to apply sensor calibration themselves.",
        "Develop an algorithm through simulation to predict variance of data output from the last MapReduce job based on calibration factors, and apply the correction to all data."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_86",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "Which two of these statements about convolutional layers are true? (Select 2 answers)",
      "options": [
        "A convolutional layer runs input data through multiple filters",
        "Convolution selects the maximum value from a group of pixels",
        "A convolutional layer is a type of fully connected layer",
        "The purpose of a convolutional layer is feature detection"
      ],
      "correctAnswers": [
        0,
        3
      ],
      "explanation": "Correct Answer: A, D",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_87",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "An online retailer has built their current application on Google App Engine. A new initiative at the company mandates that they extend their application to allow their customers to transact directly via the application. They need to manage their shopping transactions and analyze combined data from multiple datasets using a business intelligence (BI) tool. They want to use only a single database for this purpose. Which Google Cloud database should they choose?",
      "options": [
        "BigQuery",
        "Cloud SQL",
        "Cloud BigTable",
        "Cloud Datastore"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_88",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You launched a new gaming app almost three years ago. You have been uploading log files from the previous day to a separate Google BigQuery table with the table name format LOGS_yyyymmdd. You have been using table wildcard functions to generate daily and monthly reports for all time ranges. Recently, you discovered that some queries that cover long date ranges are exceeding the limit of 1,000 tables and failing. How can you resolve this issue?",
      "options": [
        "Convert all daily log tables into date-partitioned tables",
        "Convert the sharded tables into a single partitioned table",
        "Enable query caching so you can cache data from previous months",
        "Create separate views to cover each month, and query from these views"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_89",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Your analytics team wants to build a simple statistical model to determine which customers are most likely to work with your company again, based on a few different metrics. They want to run the model on Apache Spark, using data housed in Google Cloud Storage, and you have recommended using Google Cloud Dataproc to execute this job. Testing has shown that this workload can run in approximately 30 minutes on a 15-node cluster, outputting the results into Google BigQuery. The plan is to run this workload weekly. How should you optimize the cluster for cost?",
      "options": [
        "Migrate the workload to Google Cloud Dataflow",
        "Use pre-emptible virtual machines (VMs) for the cluster",
        "Use a higher-memory node so that the job runs faster",
        "Use SSDs on the worker nodes so that the job can run faster"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_90",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Which TensorFlow function can you use to configure a categorical column if you don't know all of the possible values for that column?",
      "options": [
        "categorical_column_with_hash_bucket",
        "categorical_column_with_vocabulary_list",
        "sparse_column_with_keys",
        "categorical_column_with_unknown_values"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_91",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Your company receives both batch- and stream-based event data. You want to process the data using Google Cloud Dataflow over a predictable time period. However, you realize that in some instances data can arrive late or out of order. How should you design your Cloud Dataflow pipeline to handle data that is late or out of order?",
      "options": [
        "Set a single global window to capture all the data.",
        "Set sliding windows to capture all the lagged data.",
        "Use watermarks and timestamps to capture the lagged data.",
        "Ensure every datasource type (stream or batch) has a timestamp, and use the timestamps to define the logic for lagged data."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_92",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You have some data, which is shown in the graphic below. The two dimensions are X and Y, and the shade of each dot represents what class it is. You want to classify this data accurately using a linear algorithm. To do this you need to add a synthetic feature. What should the value of that feature be?",
      "options": [
        "X2+Y2",
        "X2",
        "Y2",
        "cos(X)"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_93",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are integrating one of your internal IT applications and Google BigQuery, so users can query BigQuery from the application's interface. You do not want individual users to authenticate to BigQuery and you do not want to give them access to the dataset. You need to securely access BigQuery from your IT application. What should you do?",
      "options": [
        "Create groups for your users and give those groups access to the dataset",
        "Integrate with a single sign-on (SSO) platform, and pass each user's credentials along with the query request",
        "Create a service account and grant dataset access to that account. Use the service account's private key to access the dataset",
        "Create a dummy user and grant dataset access to that user. Store the username and password for that user in a file on the files system, and use those credentials to access the BigQuery dataset"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_94",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are building a data pipeline on Google Cloud. You need to prepare data using a casual method for a machine- learning process. You want to support a logistic regression model. You also need to monitor and adjust for null values, which must remain real-valued and cannot be removed. What should you do?",
      "options": [
        "Use Cloud Dataprep to find null values in sample source data. Convert all nulls to 'none' using a Cloud Dataproc job.",
        "Use Cloud Dataprep to find null values in sample source data. Convert all nulls to 0 using a Cloud Dataprep job.",
        "Use Cloud Dataflow to find null values in sample source data. Convert all nulls to 'none' using a Cloud Dataprep job.",
        "Use Cloud Dataflow to find null values in sample source data. Convert all nulls to 0 using a custom script."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_95",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are working as a Data Engineer in an Analytics startup that manages a Cloud Composer cluster. You deployed a DAG that contains a bash operator that executes gcloud sql export csv commands to export data from a Cloud SQL to Cloud Storage. The DAG execution shows the following logs of the BashOperator task. ERROR: (gcloud.sql.export.csv) HTTPError 403: The service account does not have the required permissions for the bucket. The Cloud Composer Service account already has an editor role on CloudSQL and StorageObjectAdmin role on Cloud Storage What should you do to solve the issue?",
      "options": [
        "Add Storage admin role to the Cloud Composer Service Account",
        "Add Cloud SQL admin role to the Cloud Composer Service Account",
        "Add StorageObjectAdmin to the Cloud SQL Service Agent",
        "Assign the Cloud Composer Service Account as the default Cloud SQL Service Agent"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_96",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You set up a streaming data insert into a Redis cluster via a Kafka cluster. Both clusters are running on Compute Engine instances. You need to encrypt data at rest with encryption keys that you can create, rotate, and destroy as needed. What should you do?",
      "options": [
        "Create a dedicated service account, and use encryption at rest to reference your data stored in your Compute Engine cluster instances as part of your API service calls.",
        "Create encryption keys in Cloud Key Management Service. Use those keys to encrypt your data in all of the Compute Engine cluster instances.",
        "Create encryption keys locally. Upload your encryption keys to Cloud Key Management Service. Use those keys to encrypt your data in all of the Compute Engine cluster instances.",
        "Create encryption keys in Cloud Key Management Service. Reference those keys in your API service calls when accessing the data in your Compute Engine cluster instances."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_97",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are developing an application that uses a recommendation engine on Google Cloud. Your solution should display new videos to customers based on past views. Your solution needs to generate labels for the entities in videos that the customer has viewed. Your design must be able to provide very fast filtering suggestions based on data from other customer preferences on several TB of data. What should you do?",
      "options": [
        "Build and train a complex classification model with Spark MLlib to generate labels and filter the results. Deploy the models using Cloud Dataproc. Call the model from your application.",
        "Build and train a classification model with Spark MLlib to generate labels. Build and train a second classification model with Spark MLlib to filter results to match customer preferences. Deploy the models using Cloud Dataproc. Call the models from your application.",
        "Build an application that calls the Cloud Video Intelligence API to generate labels. Store data in Cloud Bigtable, and filter the predicted labels to match the user's viewing history to generate preferences.",
        "Build an application that calls the Cloud Video Intelligence API to generate labels. Store data in Cloud SQL, and join and filter the predicted labels to match the user's viewing history to generate preferences."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_98",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are selecting services to write and transform JSON messages from Cloud Pub/Sub to BigQuery for a data pipeline on Google Cloud. You want to minimize service costs. You also want to monitor and accommodate input data volume that will vary in size with minimal manual intervention. What should you do?",
      "options": [
        "Use Cloud Dataproc to run your transformations. Monitor CPU utilization for the cluster. Resize the number of worker nodes in your cluster via the command line.",
        "Use Cloud Dataproc to run your transformations. Use the diagnose command to generate an operational output archive. Locate the bottleneck and adjust cluster resources.",
        "Use Cloud Dataflow to run your transformations. Monitor the job system lag with Stackdriver. Use the default autoscaling setting for worker instances.",
        "Use Cloud Dataflow to run your transformations. Monitor the total execution time for a sampling of jobs. Configure the job to use non-default Compute Engine machine types when needed."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_99",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Your infrastructure includes a set of YouTube channels. You have been tasked with creating a process for sending the YouTube channel data to Google Cloud for analysis. You want to design a solution that allows your world-wide marketing teams to perform ANSI SQL and other types of analysis on up-to-date YouTube channels log data. How should you set up the log data transfer into Google Cloud?",
      "options": [
        "Use Storage Transfer Service to transfer the offsite backup files to a Cloud Storage Multi- Regional storage bucket as a final destination.",
        "Use Storage Transfer Service to transfer the offsite backup files to a Cloud Storage Regional bucket as a final destination.",
        "Use BigQuery Data Transfer Service to transfer the offsite backup files to a Cloud Storage Multi-Regional storage bucket as a final destination.",
        "Use BigQuery Data Transfer Service to transfer the offsite backup files to a Cloud Storage Regional storage bucket as a final destination."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_100",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "BigAnalytics company is using BigQuery API as part of their applications. The BigQuery UI console is also widely used by different teams. You have been asked to review the capacity requirements for your company\u2019s BigQuery usage to avoid overspending per day. What should you do?",
      "options": [
        "Deploy a cloud function that fetches metadata for BigQuery Jobs on a daily basis to calculate the total usage. disable the API once the limit reached",
        "Use quotas to cap consumption, set maximum query usage per day for BigQuery",
        "Use BigQuery Audit Logs to track BigQuery usage and set up alarms for specific thresholds.",
        "Create a Logging Sink for Audit logs into BigQuery. Deploy a cloud function that fetches consumption data and disables the API once the limit is reached."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "50 questions in this batch.",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_101",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You are designing storage for very large text files for a data pipeline on Google Cloud. You want to support ANSI SQL queries. You also want to support compression and parallel load from the input locations using Google recommended practices. What should you do?",
      "options": [
        "Transform text files to compressed Avro using Cloud Dataflow. Use BigQuery for storage and query.",
        "Transform text files to compressed Avro using Cloud Dataflow. Use Cloud Storage and BigQuery permanent linked tables for query.",
        "Compress text files to gzip using the Grid Computing Tools. Use BigQuery for storage and query.",
        "Compress text files to gzip using the Grid Computing Tools. Use Cloud Storage, and then import into Cloud Bigtable for query."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_102",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You are developing an application on Google Cloud that will automatically generate subject labels for users' blog posts. You are under competitive pressure to add this feature quickly, and you have no additional developer resources. No one on your team has experience with machine learning. What should you do?",
      "options": [
        "Call the Cloud Natural Language API from your application. Process the generated Entity Analysis as labels.",
        "Call the Cloud Natural Language API from your application. Process the generated Sentiment Analysis as labels.",
        "Build and train a text classification model using TensorFlow. Deploy the model using Cloud Machine Learning Engine. Call the model from your application and process the results as labels.",
        "Build and train a text classification model using TensorFlow. Deploy the model using a Kubernetes Engine cluster. Call the model from your application and process the results as labels."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_103",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You are designing storage for 20 TB of text files as part of deploying a data pipeline on Google Cloud. Your input data is in CSV format. You want to minimize the cost of querying aggregate values for multiple users who will query the data in Cloud Storage with multiple engines. Which storage service and schema design should you use?",
      "options": [
        "Use Cloud Bigtable for storage. Install the HBase shell on a Compute Engine instance to query the Cloud Bigtable data.",
        "Use Cloud Bigtable for storage. Link as permanent tables in BigQuery for query.",
        "Use Cloud Storage for storage. Link as permanent tables in BigQuery for query.",
        "Use Cloud Storage for storage. Link as temporary tables in BigQuery for query."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_104",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Your company has a multi-year 10T backup of data in parquet format stored in Cloud Storage. you have been asked to develop a dataflow job and apply transformations on that data then store the output in BigQuery. You have an input collection with few elements, the ParDo produces an output with hundreds of times as many elements followed by another ParDo You want to prevent fusion optimization used by dataflow to avoid incorrectly performed optimizations What should you do to prevent such a fusion?",
      "options": [
        "insert a GroupByKey and ungroup after your first ParDo. The Dataflow service never fuses ParDo operations across an aggregation",
        "Disable fuse optimization during the job launch using \u2013no_fuse argument",
        "Use a single ParDo Operation followed by PCollection",
        "insert a DoFn after your first ParDo. The Dataflow service never fuses ParDo operations across an aggregation"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_105",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You are designing storage for two relational tables that are part of a 10-TB database on Google Cloud. You want to support transactions that scale horizontally. You also want to optimize data for range queries on non-key columns. What should you do?",
      "options": [
        "Use Cloud SQL for storage. Add secondary indexes to support query patterns.",
        "Use Cloud SQL for storage. Use Cloud Dataflow to transform data to support query patterns.",
        "Use Cloud Spanner for storage. Add secondary indexes to support query patterns.",
        "Use Cloud Spanner for storage. Use Cloud Dataflow to transform data to support query patterns."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_106",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Your financial services company is moving to cloud technology and wants to store 50 TB of financial time-series data in the cloud. This data is updated frequently and new data will be streaming in all the time. Your company also wants to move their existing Apache Hadoop jobs to the cloud to get insights into this data. Which product should they use to store the data?",
      "options": [
        "Cloud Bigtable",
        "Google BigQuery",
        "Google Cloud Storage",
        "Google Cloud Datastore"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_107",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "An organization maintains a Google BigQuery dataset that contains tables with user-level data. They want to expose aggregates of this data to other Google Cloud projects, while still controlling access to the user-level data. Additionally, they need to minimize their overall storage cost and ensure the analysis cost for other projects is assigned to those projects. What should they do?",
      "options": [
        "Create and share an authorized view that provides the aggregate results.",
        "Create and share a new dataset and view that provides the aggregate results.",
        "Create and share a new dataset and table that contains the aggregate results.",
        "Create dataViewer Identity and Access Management (IAM) roles on the dataset to enable sharing."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_108",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Government regulations in your industry mandate that you have to maintain an auditable record of access to certain types of data. Assuming that all expiring logs will be archived correctly, where should you store data that is subject to that mandate?",
      "options": [
        "Encrypted on Cloud Storage with user-supplied encryption keys. A separate decryption key will be given to each authorized user.",
        "In a BigQuery dataset that is viewable only by authorized personnel, with the Data Access log used to provide the auditability.",
        "In Cloud SQL, with separate database user names to each user. The Cloud SQL Admin activity logs will be used to provide the auditability.",
        "In a bucket on Cloud Storage that is accessible only by an AppEngine service that collects user information and logs the access before providing a link to the bucket."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_109",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Which Cloud Dataflow Beam feature should you use to aggregate data in an unbounded data source every hour based on the time when the data entered the pipeline?",
      "options": [
        "An event time trigger",
        "A processing time trigger",
        "An hourly watermark",
        "The withAllowedLateness method"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_110",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Your neural network model is taking days to train. You want to increase the training speed. What can you do?",
      "options": [
        "Subsample your test dataset.",
        "Subsample your training dataset.",
        "Increase the number of input features to your model.",
        "Increase the number of layers in your neural network."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_111",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You are responsible for writing your company's ETL pipelines to run on an Apache Hadoop cluster. The pipeline will require some checkpointing and splitting pipelines. Which method should you use to write the pipelines?",
      "options": [
        "PigLatin using Pig",
        "HiveQL using Hive",
        "Java using MapReduce",
        "Python using MapReduce"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_112",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Your company maintains a hybrid deployment with GCP, where analytics are performed on your anonymized customer data. The data are imported to Cloud Storage from your data center through parallel uploads to a data transfer server running on GCP. Management informs you that the daily transfers take too long and have asked you to fix the problem. You want to maximize transfer speeds. Which action should you take?",
      "options": [
        "Increase the CPU size on your server.",
        "Increase the size of the Google Persistent Disk on your server.",
        "Increase your network bandwidth from your datacenter to GCP.",
        "Increase your network bandwidth from Compute Engine to Cloud Storage."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_113",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You are working as a Data Engineer at a large company with several departments. The company has a Datawarehouse on BigQuery. You are managing a Cloud Composer instance that contains several data ingestion and batch predictions jobs using the default project service account from data warehouse data. You have been asked to isolate all tasks using BigQuery Operators across different DAGs accessing data lake by using a separate service account with fine-grained roles. What should you do?",
      "options": [
        "Create the new service account with fine-grained roles, generate the service account JSON key and create a new Cloud composer connection. specify the connection to use on each DAG task using BigQuery Operator.",
        "Modify the current service account with required fine-grained roles. create a new Cloud composer connection. specify the connection to use on each DAG task using BigQuery Operator",
        "Create the new service account with fine-grained roles, generate the service account JSON key. Modify the default connection to use the new service account. specify the connection to use on each DAG task using BigQuery Operator.",
        "Modify the current service account with required fine-grained roles. keep the current DAGs setup with default connection"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_114",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "After migrating ETL jobs to run on BigQuery, you need to verify that the output of the migrated jobs is the same as the output of the original. You've loaded a table containing the output of the original job and want to compare the contents with output from the migrated job to show that they are identical. The tables do not contain a primary key column that would enable you to join them together for comparison. What should you do?",
      "options": [
        "Select random samples from the tables using the RAND() function and compare the samples.",
        "Select random samples from the tables using the HASH() function and compare the samples.",
        "Use a Dataproc cluster and the BigQuery Hadoop connector to read the data from each table and calculate a hash from non-timestamp columns of the table after sorting. Compare the hashes of each table.",
        "Create stratified random samples using the OVER() function and compare equivalent samples from each table."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_115",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You are a head of BI at a large enterprise company with multiple business units that each have different priorities and budgets. You use on-demand pricing for BigQuery with a quota of 2K concurrent on-demand slots per project. Users at your organization sometimes don't get slots to execute their query and you need to correct this. You'd like to avoid introducing new projects to your account. What should you do?",
      "options": [
        "Convert your batch BQ queries into interactive BQ queries.",
        "Create an additional project to overcome the 2K on-demand per-project quota.",
        "Switch to flat-rate pricing and establish a hierarchical priority model for your projects.",
        "Increase the amount of concurrent slots per project at the Quotas page at the Cloud Console."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_116",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You have an Apache Kafka cluster on-prem with topics containing web application logs. You need to replicate the data to Google Cloud for analysis in BigQuery and Cloud Storage. The preferred replication method is mirroring to avoid deployment of Kafka Connect plugins. What should you do?",
      "options": [
        "Deploy a Kafka cluster on GCE VM Instances. Configure your on-prem cluster to mirror your topics to the cluster running in GCE. Use a Dataproc cluster or Dataflow job to read from Kafka and write to GCS.",
        "Deploy a Kafka cluster on GCE VM Instances with the Pub/Sub Kafka connector configured as a Sink connector. Use a Dataproc cluster or Dataflow job to read from Kafka and write to GCS.",
        "Deploy the Pub/Sub Kafka connector to your on-prem Kafka cluster and configure Pub/Sub as a Source connector. Use a Dataflow job to read from Pub/Sub and write to GCS.",
        "Deploy the Pub/Sub Kafka connector to your on-prem Kafka cluster and configure Pub/Sub as a Sink connector. Use a Dataflow job to read from Pub/Sub and write to GCS."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_117",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You can customize the software on Dataproc cluster instances in each of the following ways except which one?",
      "options": [
        "Log in to the master node and make changes from there",
        "Modify configuration files using cluster properties",
        "Set initialization actions",
        "Configure the cluster using Cloud Deployment Manager"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_118",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You've migrated a Hadoop job from an on-prem cluster to dataproc and GCS. Your Spark job is a complicated analytical workload that consists of many shuffling operations and initial data are parquet files (on average 200-400 MB size each). You see some degradation in performance after the migration to Dataproc, so you'd like to optimize for it. You need to keep in mind that your organization is very cost-sensitive, so you'd like to continue using Dataproc on preemptibles (with 2 non-preemptible workers only) for this workload. What should you do?",
      "options": [
        "Increase the size of your parquet files to ensure them to be 1 GB minimum.",
        "Switch to TFRecords formats (appr. 200MB per file) instead of parquet files.",
        "Switch from HDDs to SSDs, copy initial data from GCS to HDFS, run the Spark job and copy results back to GCS.",
        "Switch from HDDs to SSDs, override the preemptible VMs configuration to increase the boot disk size."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_119",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Your team is responsible for developing and maintaining ETLs in your company. One of your Dataflow jobs is failing because of some errors in the input data, and you need to improve reliability of the pipeline (incl. being able to reprocess all failing data). What should you do?",
      "options": [
        "Add a filtering step to skip these types of errors in the future, extract erroneous rows from logs.",
        "Add a try catch block to your DoFn that transforms the data, extract erroneous rows from logs.",
        "Add a try catch block to your DoFn that transforms the data, write erroneous rows to Pub/Sub PubSub directly from the DoFn.",
        "Add a try catch block to your DoFn that transforms the data, use a sideOutput to create a PCollection that can be stored to Pub/Sub later."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_120",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You work as an Analytics Engineer for a supply chain company and you have been asked to analyze the product delivery duration for the last month. The data is already stored in BigQuery and the estimated size for the last month is less than 1GB. You want to analyze such data with a pandas dataframe in a Vertex AI workbench. How should you query the BigQuery table and process the data while minimizing the written code?",
      "options": [
        "Use Vertex AI Notebooks' BigQuery cell magic to query the data, and ingest the results as a pandas dataframe.",
        "Use BigQuery Python API to query the data from BigQuery table, save it to CSV file in the Notebook\u2019s native storage instance, Use pandas.read_csv to ingest the file as a pandas dataframe.",
        "Use the bq extract command to export the table as a CSV file to Cloud Storage from the notebook\u2019s bash cell, then use gsutil cp to copy the data into the notebook. Use pandas.read_csv to ingest the file as a pandas dataframe.",
        "Download the BigQuery table as a CSV file, upload it to the Vertex AI workbench notebook instance. Use pandas.read_csv to ingest the file as a pandas dataframe."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_121",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You're training a model to predict housing prices based on an available dataset with real estate properties. Your plan is to train a fully connected neural net, and you've discovered that the dataset contains latitude and longitude of the property. Real estate professionals have told you that the location of the property is highly influential on price, so you'd like to engineer a feature that incorporates this physical dependency. What should you do?",
      "options": [
        "Provide latitude and longitude as input vectors to your neural net.",
        "Create a numeric column from a feature cross of latitude and longitude.",
        "Create a feature cross of latitude and longitude, bucketize it at the minute level and use L1 regularization during optimization.",
        "Create a feature cross of latitude and longitude, bucketize it at the minute level and use L2 regularization during optimization."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_122",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You are working as a lead data engineer, The team is working on a classification model and has already tested features and data, model development, performance, quality, and infrastructure in dev environment. you are asked to check if the production requirements are fulfilled in the Model deployment phase. What is the next action to take before confirming the production readiness? Choose two.",
      "options": [
        "Test in a staging environment that you can roll back to a previous serving model version quickly and safely, Verify that the model artifact can be loaded and invoked successfully with its runtime dependencies.",
        "Track key inputs and output artifacts of the pipeline steps, like dataset statistics, dataset anomalies (if any), transformed data and schemas, model checkpoints, and model evaluation results.",
        "Canary-test the newly deployed model version on a small stream of live serving data",
        "Make sure that the test data split is representative of the data as a whole to account for varying data patterns."
      ],
      "correctAnswers": [
        0,
        2
      ],
      "explanation": "Correct Answer: A, C",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_123",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You are deploying MariaDB SQL databases on GCE VM Instances and need to configure monitoring and alerting. You want to collect metrics including network connections, disk IO and replication status from MariaDB with minimal development effort and use StackDriver for dashboards and alerts. What should you do?",
      "options": [
        "Install the OpenCensus Agent and create a custom metric collection application with a StackDriver exporter.",
        "Place the MariaDB instances in an Instance Group with a Health Check.",
        "Install the StackDriver Logging Agent and configure fluentd in_tail plugin to read MariaDB logs.",
        "Install the StackDriver Agent and configure the MySQL plugin."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_124",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You work for a bank. You have a labelled dataset that contains information on already granted loan application and whether these applications have been defaulted. You have been asked to train a model to predict default rates for credit applicants. What should you do?",
      "options": [
        "Increase the size of the dataset by collecting additional data.",
        "Train a linear regression to predict a credit default risk score.",
        "Remove the bias from the data and collect applications that have been declined loans.",
        "Match loan applicants with their social profiles to enable feature engineering."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_125",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You are working as a Data Engineer at a Gaming startup that launched recently a new social game called \u201cMeetTheWorld\u201d where players interact with each other in real-time. You have a Cloud Dataflow configured with a fixed window of 30 minutes. You noticed that for many players, the streamed interactions do not cover their total interaction during the playing session. What should you do to stream the full player interaction without exceptions?",
      "options": [
        "Increase the fixed window to 60 minutes to be able to stream all the interactions and cover late arrival ones.",
        "Change the fixed window to the sliding window and keep the duration to 30 minutes",
        "Change the fixed window to the session window and keep the duration of 30 minutes",
        "Change the fixed window to the Tumbling window and keep the duration of 30 minutes"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_126",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You need to migrate a 2TB relational database to Google Cloud Platform. You do not have the resources to significantly refactor the application that uses this database and cost to operate is of primary concern. Which service do you select for storing and serving your data?",
      "options": [
        "Cloud Spanner",
        "Cloud Bigtable",
        "Cloud Firestore",
        "Cloud SQL"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_127",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You're using Bigtable for a real-time application, and you have a heavy load that is a mix of read and writes. You've recently identified an additional use case and need to perform hourly an analytical job to calculate certain statistics across the whole database. You need to ensure both the reliability of your production application as well as the analytical workload. What should you do?",
      "options": [
        "Export Bigtable dump to GCS and run your analytical job on top of the exported files.",
        "Add a second cluster to an existing instance with a multi-cluster routing, use live-traffic app profile for your regular workload and batch-analytics profile for the analytics workload.",
        "Add a second cluster to an existing instance with a single-cluster routing, use live-traffic app profile for your regular workload and batch-analytics profile for the analytics workload.",
        "Increase the size of your existing cluster twice and execute your analytics workload on your new resized cluster."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_128",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You are designing an Apache Beam pipeline to enrich data from Cloud Pub/Sub with static reference data from BigQuery. The reference data is small enough to fit in memory on a single worker. The pipeline should write enriched results to BigQuery for analysis. Which job type and transforms should this pipeline use?",
      "options": [
        "Batch job, PubSubIO, side-inputs",
        "Streaming job, PubSubIO, JdbcIO, side-outputs",
        "Streaming job, PubSubIO, BigQueryIO, side-inputs",
        "Streaming job, PubSubIO, BigQueryIO, side-outputs"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_129",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You have a data pipeline that writes data to Cloud Bigtable using well-designed row keys. You want to monitor your pipeline to determine when to increase the size of your Cloud Bigtable cluster. Which two actions can you take to accomplish this? (Choose two.)",
      "options": [
        "Review Key Visualizer metrics. Increase the size of the Cloud Bigtable cluster when the Read pressure index is above 100.",
        "Review Key Visualizer metrics. Increase the size of the Cloud Bigtable cluster when the Write pressure index is above 100.",
        "Monitor the latency of write operations. Increase the size of the Cloud Bigtable cluster when there is a sustained increase in write latency.",
        "Monitor storage utilization. Increase the size of the Cloud Bigtable cluster when utilization increases above 70% of max capacity.",
        "Monitor latency of read operations. Increase the size of the Cloud Bigtable cluster of read operations take longer than 100 ms."
      ],
      "correctAnswers": [
        2,
        3
      ],
      "explanation": "Correct Answer: C, D",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_130",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You want to analyze hundreds of thousands of social media posts daily at the lowest cost and with the fewest steps. You have the following requirements: \u2711 You will batch-load the posts once per day and run them through the Cloud Natural Language API. \u2711 You will extract topics and sentiment from the posts. \u2711 You must store the raw posts for archiving and reprocessing. \u2711 You will create dashboards to be shared with people both inside and outside your organization. You need to store both the data extracted from the API to perform analysis as well as the raw social media posts for historical archiving. What should you do?",
      "options": [
        "Store the social media posts and the data extracted from the API in BigQuery.",
        "Store the social media posts and the data extracted from the API in Cloud SQL.",
        "Store the raw social media posts in Cloud Storage, and write the data extracted from the API into BigQuery.",
        "Feed to social media posts into the API directly from the source, and write the extracted data from the API into BigQuery."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_131",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You store historic data in Cloud Storage. You need to perform analytics on the historic data. You want to use a solution to detect invalid data entries and perform data transformations that will not require programming or knowledge of SQL. What should you do?",
      "options": [
        "Use Cloud Dataflow with Beam to detect errors and perform transformations.",
        "Use Cloud Dataprep with recipes to detect errors and perform transformations.",
        "Use Cloud Dataproc with a Hadoop job to detect errors and perform transformations.",
        "Use federated tables in BigQuery with queries to detect errors and perform transformations."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_132",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Your company needs to upload their historic data to Cloud Storage. The security rules don't allow access from external IPs to their on-premises resources. After an initial upload, they will add new data from existing on-premises applications every day. What should they do?",
      "options": [
        "Execute gsutil rsync from the on-premises servers.",
        "Use Dataflow and write the data to Cloud Storage.",
        "Write a job template in Dataproc to perform the data transfer.",
        "Install an FTP server on a Compute Engine VM to receive the files and move them to Cloud Storage."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_133",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You have a query that filters a BigQuery table using a WHERE clause on timestamp and ID columns. By using bq query `\"-dry_run you learn that the query triggers a full scan of the table, even though the filter on timestamp and ID select a tiny fraction of the overall data. You want to reduce the amount of data scanned by BigQuery with minimal changes to existing SQL queries. What should you do?",
      "options": [
        "Create a separate table for each ID.",
        "Use the LIMIT keyword to reduce the number of rows returned.",
        "Recreate the table with a partitioning column and clustering column.",
        "Use the bq query --maximum_bytes_billed flag to restrict the number of bytes billed."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_134",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You have a requirement to insert minute-resolution data from 50,000 sensors into a BigQuery table. You expect significant growth in data volume and need the data to be available within 1 minute of ingestion for real-time analysis of aggregated trends. What should you do?",
      "options": [
        "Use bq load to load a batch of sensor data every 60 seconds.",
        "Use a Cloud Dataflow pipeline to stream data into the BigQuery table.",
        "Use the INSERT statement to insert a batch of data every 60 seconds.",
        "Use the MERGE statement to apply updates in batch every 60 seconds."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_135",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Flowlogistic's management has determined that the current Apache Kafka servers cannot handle the data volume for their real-time inventory tracking system. You need to build a new system on Google Cloud Platform (GCP) that will feed the proprietary tracking software. The system must be able to ingest data from a variety of global sources, process and query in real-time, and store the data reliably. (Case Study 1) Which combination of GCP products should you choose?",
      "options": [
        "Cloud Pub/Sub, Cloud Dataflow, and Cloud Storage",
        "Cloud Pub/Sub, Cloud Dataflow, and Local SSD",
        "Cloud Pub/Sub, Cloud SQL, and Cloud Storage",
        "Cloud Load Balancing, Cloud Dataflow, and Cloud Storage"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_136",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Flowlogistic's CEO wants to gain rapid insight into their customer base so his sales team can be better informed in the field. This team is not very technical, so they've purchased a visualization tool to simplify the creation of BigQuery reports. However, they've been overwhelmed by all the data in the table, and are spending a lot of money on queries trying to find the data they need. You want to solve their problem in the most cost-effective way. What should you do? (Case Study 1)",
      "options": [
        "Export the data into a Google Sheet for virtualization.",
        "Create an additional table with only the necessary columns.",
        "Create a view on the table to present to the virtualization tool.",
        "Create identity and access management (IAM) roles on the appropriate columns, so only they appear in a query."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_137",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Flowlogistic is rolling out their real-time inventory tracking system. The tracking devices will all send package-tracking messages, which will now go to a single Google Cloud Pub/Sub topic instead of the Apache Kafka cluster. A subscriber application will then process the messages for real-time reporting and store them in Google BigQuery for historical analysis. You want to ensure the package data can be analyzed over time. (Case Study 1) Which approach should you take?",
      "options": [
        "Attach the timestamp on each message in the Cloud Pub/Sub subscriber application as they are received.",
        "Attach the timestamp and Package ID on the outbound message from each publisher device as they are sent to Clod Pub/Sub.",
        "Use the NOW () function in BigQuery to record the event's time.",
        "Use the automatically generated timestamp from Cloud Pub/Sub to order the data."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_138",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Flowlogistic wants to use Google BigQuery as their primary analysis system, but they still have Apache Hadoop and Spark workloads that they cannot move to BigQuery. Flowlogistic does not know how to store the data that is common to both workloads. (Case Study 1) What should they do?",
      "options": [
        "Store the common data in BigQuery as partitioned tables.",
        "Store the common data in BigQuery and expose authorized views.",
        "Store the common data encoded as Avro in Google Cloud Storage.",
        "Store he common data in the HDFS storage for a Google Cloud Dataproc cluster."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_139",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "MJTelco's Google Cloud Dataflow pipeline is now ready to start receiving data from the 50,000 installations. You want to allow Cloud Dataflow to scale its compute power up as required. (Case Study 2) Which Cloud Dataflow pipeline configuration setting should you update?",
      "options": [
        "The zone",
        "The number of workers",
        "The disk size per worker",
        "The maximum number of workers"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_140",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "MJTelco needs you to create a schema in Google Bigtable that will allow for the historical analysis of the last 2 years of records. Each record that comes in is sent every 15 minutes, and contains a unique identifier of the device and a data record. The most common query is for all the data for a given device for a given day. Which schema should you use? (Case Study 2)",
      "options": [
        "Rowkey: date#device_idColumn data: data_point",
        "Rowkey: dateColumn data: device_id, data_point",
        "Rowkey: device_idColumn data: date, data_point",
        "Rowkey: data_pointColumn data: device_id, date",
        "Rowkey: date#data_pointColumn data: device_id"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_141",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You create a new report for your large team in Google Data Studio 360. The report uses Google BigQuery as its data source. It is company policy to ensure employees can view only the data associated with their region, so you create and populate a table for each region. You need to enforce the regional access policy to the data. (Case Study 2) Which two actions should you take? (Choose two.)",
      "options": [
        "Ensure all the tables are included in global dataset.",
        "Ensure each table is included in a dataset for a region.",
        "Adjust the settings for each table to allow a related region-based security group view access.",
        "Adjust the settings for each view to allow a related region-based security group view access.",
        "Adjust the settings for each dataset to allow a related region-based security group view access."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: B, D",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_142",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Given the record streams MJTelco is interested in ingesting per day, they are concerned about the cost of Google BigQuery increasing. MJTelco asks you to provide a design solution. They require a single large data table called tracking_table. Additionally, they want to minimize the cost of daily queries while performing fine-grained analysis of each day's events. They also want to use streaming ingestion. (Case Study 2) What should you do?",
      "options": [
        "Create a table called tracking_table and include a DATE column.",
        "Create a partitioned table called tracking_table and include a TIMESTAMP column.",
        "Create sharded tables for each day following the pattern tracking_table_YYYYMMDD.",
        "Create a table called tracking_table with a TIMESTAMP column to represent the day."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_143",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You need to compose visualization for operations teams with the following requirements: Telemetry must include data from all 50,000 installations for the most recent 6 weeks (sampling once every minute) The report must not be more than 3 hours delayed from live data. The actionable report should only show suboptimal links. Most suboptimal links should be sorted to the top. Suboptimal links can be grouped and filtered by regional geography. User response time to load the report must be <5 seconds. You create a data source to store the last 6 weeks of data, and create visualizations that allow viewers to see multiple date ranges, distinct geographic regions, and unique installation types. You always show the latest data without any changes to your visualizations. You want to avoid creating and updating new visualizations each month. What should you do? (Case Study 2)",
      "options": [
        "Look through the current data and compose a series of charts and tables, one for each possible combination of criteria.",
        "Look through the current data and compose a small set of generalized charts and tables bound to criteria filters that allow value selection.",
        "Export the data to a spreadsheet, compose a series of charts and tables, one for each possible combination of criteria, and spread them across multiple tabs.",
        "Load the data into relational database tables, write a Google App Engine application that queries all rows, summarizes the data across each criteria, and then renders results using the Google Charts and visualization API."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_144",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You need to compose visualizations for operations teams with the following requirements: (Case Study 2) Which approach meets the requirements?",
      "options": [
        "Load the data into Google Sheets, use formulas to calculate a metric, and use filters/sorting to show only suboptimal links in a table.",
        "Load the data into Google BigQuery tables, write Google Apps Script that queries the data, calculates the metric, and shows only suboptimal rows in a table in Google Sheets.",
        "Load the data into Google Cloud Datastore tables, write a Google App Engine Application that queries all rows, applies a function to derive the metric, and then renders results in a table using the Google charts and visualization API.",
        "Load the data into Google BigQuery tables, write a Google Data Studio 360 report that connects to your data, calculates a metric, and then uses a filter expression to show only suboptimal rows in a table."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_145",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "MJTelco is building a custom interface to share data. They have these requirements: (Case Study 2) They need to do aggregations over their petabyte-scale datasets. They need to scan specific time range rows with a very fast response time (milliseconds). Which combination of Google Cloud Platform products should you recommend?",
      "options": [
        "Cloud Datastore and Cloud Bigtable",
        "Cloud Bigtable and Cloud SQL",
        "BigQuery and Cloud Bigtable",
        "BigQuery and Cloud Storage"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_146",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "(question text unavailable)",
      "options": [
        "Option A",
        "Option",
        "Option C",
        "Option D"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_147",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Which of these operations can you perform from the BigQuery Web UI?",
      "options": [
        "Upload a file in SQL format.",
        "Load data with nested and repeated fields.",
        "Upload a 20 MB file.",
        "Upload multiple files using a wildcard."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_148",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "What are two of the characteristics of using online prediction rather than batch prediction?",
      "options": [
        "It is optimized to handle a high volume of data instances in a job and to run more complex models.",
        "Predictions are returned in the response message.",
        "Predictions are written to output files in a Cloud Storage location that you specify.",
        "It is optimized to minimize the latency of serving predictions."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: B, D",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_149",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "The CUSTOM tier for Cloud Machine Learning Engine allows you to specify the number of which types of cluster nodes?",
      "options": [
        "Workers",
        "Masters, workers, and parameter servers",
        "Workers and parameter servers",
        "Parameter servers"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_150",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Cloud Bigtable is Google's ______ Big Data database service.",
      "options": [
        "Relational",
        "mySQL",
        "NoSQL",
        "SQL Server"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "50 questions in this batch.",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_151",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "When you store data in Cloud Bigtable, what is the recommended minimum amount of stored data?",
      "options": [
        "500 TB",
        "1 GB",
        "1 TB",
        "500 GB"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_152",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which of the following IAM roles does your Compute Engine account require to be able to run pipeline jobs?",
      "options": [
        "dataflow.worker",
        "dataflow.compute",
        "dataflow.developer",
        "dataflow.viewer"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_153",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "The YARN ResourceManager and the HDFS NameNode interfaces are available on a Cloud Dataproc cluster ____.",
      "options": [
        "application node",
        "conditional node",
        "master node",
        "worker node"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_154",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Cloud Bigtable is a recommended option for storing very large amounts of ____________________________?",
      "options": [
        "multi-keyed data with very high latency",
        "multi-keyed data with very low latency",
        "single-keyed data with very low latency",
        "single-keyed data with very high latency"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_155",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "By default, which of the following windowing behavior does Dataflow apply to unbounded data sets?",
      "options": [
        "Windows at every 100 MB of data",
        "Single, Global Window",
        "Windows at every 1 minute",
        "Windows at every 10 minutes"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_156",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "Which of these rules apply when you add preemptible workers to a Dataproc cluster (select 2 answers)?",
      "options": [
        "Preemptible workers cannot use persistent disk.",
        "Preemptible workers cannot store data.",
        "If a preemptible worker is reclaimed, then a replacement worker must be added manually.",
        "A Dataproc cluster cannot have only preemptible workers."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: B, D",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_157",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "All Google Cloud Bigtable client requests go through a front-end server ______ they are sent to a Cloud Bigtable node.",
      "options": [
        "before",
        "after",
        "only if",
        "once"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_158",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "When a Cloud Bigtable node fails, ____ is lost.",
      "options": [
        "all data",
        "no data",
        "the last transaction",
        "the time dimension"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_159",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which role must be assigned to a service account used by the virtual machines in a Dataproc cluster so they can execute jobs?",
      "options": [
        "Dataproc Worker",
        "Dataproc Viewer",
        "Dataproc Runner",
        "Dataproc Editor"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_160",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which is not a valid reason for poor Cloud Bigtable performance?",
      "options": [
        "The workload isn't appropriate for Cloud Bigtable.",
        "The table's schema is not designed correctly.",
        "The Cloud Bigtable cluster has too many nodes.",
        "There are issues with the network connection."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_161",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "Which of the following job types are supported by Cloud Dataproc (select 3 answers)?",
      "options": [
        "Hive",
        "Pig",
        "YARN",
        "Spark"
      ],
      "correctAnswers": [
        0,
        1,
        3
      ],
      "explanation": "Correct Answer: A, B, D",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_162",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "Which of the following statements about the Wide & Deep Learning model are true? (Select 2 answers.)",
      "options": [
        "The wide model is used for memorization, while the deep model is used for generalization.",
        "A good use for the wide and deep model is a recommender system.",
        "The wide model is used for generalization, while the deep model is used for memorization.",
        "A good use for the wide and deep model is a small-scale linear regression problem."
      ],
      "correctAnswers": [
        0,
        1
      ],
      "explanation": "Correct Answer: A, B",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_163",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "When creating a new Cloud Dataproc cluster with the projects.regions.clusters.create operation, these four values are required: project, region, name, and ____.",
      "options": [
        "zone",
        "node",
        "label",
        "type"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_164",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "You want to use a BigQuery table as a data sink. In which writing mode(s) can you use BigQuery as a sink?",
      "options": [
        "Both batch and streaming",
        "BigQuery cannot be used as a sink",
        "Only batch",
        "Only streaming"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_165",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "If you want to create a machine learning model that predicts the price of a particular stock based on its recent price history, what type of estimator should you use?",
      "options": [
        "Unsupervised learning",
        "Regressor",
        "Classifier",
        "Clustering estimator"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_166",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "To run a TensorFlow training job on your own computer using Cloud Machine Learning Engine, what would your command start with?",
      "options": [
        "gcloud ml-engine local train",
        "gcloud ml-engine jobs submit training",
        "gcloud ml-engine jobs submit training local",
        "You can't run a TensorFlow program on your own computer using Cloud ML Engine ."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_167",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "When you design a Google Cloud Bigtable schema it is recommended that you _________.",
      "options": [
        "Avoid schema designs that are based on NoSQL concepts",
        "Create schema designs that are based on a relational database design",
        "Avoid schema designs that require atomicity across rows",
        "Create schema designs that require atomicity across rows"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_168",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "The _________ for Cloud Bigtable makes it possible to use Cloud Bigtable in a Cloud Dataflow pipeline.",
      "options": [
        "Cloud Dataflow connector",
        "DataFlow SDK",
        "BiqQuery API",
        "BigQuery Data Transfer Service"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_169",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "For the best possible performance, what is the recommended zone for your Compute Engine instance and Cloud Bigtable instance?",
      "options": [
        "Have the Compute Engine instance in the furthest zone from the Cloud Bigtable instance.",
        "Have both the Compute Engine instance and the Cloud Bigtable instance to be in different zones.",
        "Have both the Compute Engine instance and the Cloud Bigtable instance to be in the same zone.",
        "Have the Cloud Bigtable instance to be in the same zone as all of the consumers of your data."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_170",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Why do you need to split a machine learning dataset into training data and test data?",
      "options": [
        "So you can try two different sets of features",
        "To make sure your model is generalized for more than just the training data",
        "To allow you to create unit tests in your code",
        "So you can use one dataset for a wide model and one for a deep model"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_171",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which of the following is not possible using primitive roles?",
      "options": [
        "Give a user viewer access to BigQuery and owner access to Google Compute Engine instances.",
        "Give UserA owner access and UserB editor access for all datasets in a project.",
        "Give a user access to view all datasets in a project, but not run queries on them.",
        "Give GroupA owner access and GroupB editor access for all datasets in a project."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_172",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Scaling a Cloud Dataproc cluster typically involves ____.",
      "options": [
        "increasing or decreasing the number of worker nodes",
        "increasing or decreasing the number of master nodes",
        "moving memory to run more applications on a single node",
        "deleting applications from unused nodes periodically"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_173",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which SQL keyword can be used to reduce the number of columns processed by BigQuery?",
      "options": [
        "BETWEEN",
        "WHERE",
        "SELECT",
        "LIMIT"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_174",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which of these statements about exporting data from BigQuery is false?",
      "options": [
        "To export more than 1 GB of data, you need to put a wildcard in the destination filename.",
        "The only supported export destination is Google Cloud Storage.",
        "Data can only be exported in JSON or Avro format.",
        "The only compression option available is GZIP."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_175",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which of these sources can you not load data into BigQuery from?",
      "options": [
        "File upload",
        "Google Drive",
        "Google Cloud Storage",
        "Google Cloud SQL"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_176",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which Java SDK class can you use to run your Dataflow programs locally?",
      "options": [
        "LocalRunner",
        "DirectPipelineRunner",
        "MachineRunner",
        "LocalPipelineRunner"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_177",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "You are developing a software application using Google's Dataflow SDK, and want to use conditional, for loops and other complex programming structures to create a branching pipeline. Which component will be used for the data processing operation?",
      "options": [
        "PCollection",
        "Transform",
        "Pipeline",
        "Sink API"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_178",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which is the preferred method to use to avoid hotspotting in time series data in Bigtable?",
      "options": [
        "Field promotion",
        "Randomization",
        "Salting",
        "Hashing"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_179",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "You have a job that you want to cancel. It is a streaming pipeline, and you want to ensure that any data that is in- flight is processed and written to the output. Which of the following commands can you use on the Dataflow monitoring console to stop the pipeline job?",
      "options": [
        "Cancel",
        "Drain",
        "Stop",
        "Finish"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_180",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "When running a pipeline that has a BigQuery source, on your local machine, you continue to get permission denied errors. What could be the reason for that?",
      "options": [
        "Your gcloud does not have access to the BigQuery resources",
        "BigQuery cannot be accessed from local machines",
        "You are missing gcloud on your machine",
        "Pipelines cannot be run locally"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_181",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which of the following is NOT true about Dataflow pipelines?",
      "options": [
        "Dataflow pipelines are tied to Dataflow, and cannot be run on any other runner",
        "Dataflow pipelines can consume data from other Google Cloud services",
        "Dataflow pipelines can be programmed in Java",
        "Dataflow pipelines use a unified programming model, so can work both with streaming and batch data sources"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_182",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which action can a Cloud Dataproc Viewer perform?",
      "options": [
        "Submit a job.",
        "Create a cluster.",
        "Delete a cluster.",
        "List the jobs."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_183",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "How would you query specific partitions in a BigQuery table?",
      "options": [
        "Use the DAY column in the WHERE clause",
        "Use the EXTRACT(DAY) clause",
        "Use the __PARTITIONTIME pseudo-column in the WHERE clause",
        "Use DATE BETWEEN in the WHERE clause"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_184",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "If a dataset contains rows with individual people and columns for year of birth, country, and income, how many of the columns are continuous and how many are categorical?",
      "options": [
        "1 continuous and 2 categorical",
        "3 categorical",
        "3 continuous",
        "2 continuous and 1 categorical"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_185",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "What are the minimum permissions needed for a service account used with Google Dataproc?",
      "options": [
        "Execute to Google Cloud Storage; write to Google Cloud Logging",
        "Write to Google Cloud Storage; read to Google Cloud Logging",
        "Execute to Google Cloud Storage; execute to Google Cloud Logging",
        "Read and write to Google Cloud Storage; write to Google Cloud Logging"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_186",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Dataproc clusters contain many configuration files. To update these files, you will need to use the --properties option. The format for the option is: file_prefix:property=_____.",
      "options": [
        "details",
        "value",
        "null",
        "id"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_187",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "You are planning to use Google's Dataflow SDK to analyze customer data such as displayed below. Your project requirement is to extract only the customer name from the data source and then write to an output PCollection. Tom,555 X street Tim,553 Y street Sam, 111 Z street Which operation is best suited for the above data processing requirement?",
      "options": [
        "ParDo",
        "Sink API",
        "Source API",
        "Data extraction"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_188",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "Which of these are examples of a value in a sparse vector? (Select 2 answers.)",
      "options": [
        "[0, 5, 0, 0, 0, 0]",
        "[0, 0, 0, 1, 0, 0, 1]",
        "[0, 1]",
        "[1, 0, 0, 0, 0, 0, 0]"
      ],
      "correctAnswers": [
        2,
        3
      ],
      "explanation": "Correct Answer: C, D",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_189",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which software libraries are supported by Cloud Machine Learning Engine?",
      "options": [
        "Theano and TensorFlow",
        "Theano and Torch",
        "TensorFlow",
        "TensorFlow and Torch"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_190",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which of the following statements about Legacy SQL and Standard SQL is not true?",
      "options": [
        "Standard SQL is the preferred query language for BigQuery.",
        "If you write a query in Legacy SQL, it might generate an error if you try to run it with Standard SQL.",
        "One difference between the two query languages is how you specify fully-qualified table names (i.e. table names that include their associated project name).",
        "You need to set a query language for each dataset and the default is Standard SQL."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_191",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which of these is not a supported method of putting data into a partitioned table?",
      "options": [
        "If you have existing data in a separate file for each day, then create a partitioned table and upload each file into the appropriate partition.",
        "Run a query to get the records for a specific day from an existing table and for the destination table, specify a partitioned table ending with the day in the format \"$YYYYMMDD\".",
        "Create a partitioned table and stream new records to it every day.",
        "Use ORDER BY to put a table's rows into chronological order and then change the table's type to \"Partitioned\"."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_192",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Suppose you have a table that includes a nested column called \"city\" inside a column called \"person\", but when you try to submit the following query in BigQuery, it gives you an error. SELECT person FROM `project1.example.table1` WHERE city = \"London\" How would you correct the error?",
      "options": [
        "Add \", UNNEST(person)\" before the WHERE clause.",
        "Change \"person\" to \"person.city\".",
        "Change \"person\" to \"city.person\".",
        "Add \", UNNEST(city)\" before the WHERE clause."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_193",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which Google Cloud Platform service is an alternative to Hadoop with Hive?",
      "options": [
        "Cloud Dataflow",
        "Cloud Bigtable",
        "BigQuery",
        "Cloud Datastore"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_194",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "What are all of the BigQuery operations that Google charges for?",
      "options": [
        "Storage, queries, and streaming inserts",
        "Storage, queries, and loading data from a file",
        "Storage, queries, and exporting data",
        "Queries and streaming inserts"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_195",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "In order to securely transfer web traffic data from your computer's web browser to the Cloud Dataproc cluster you should use a(n) _____.",
      "options": [
        "VPN connection",
        "Special browser",
        "SSH tunnel",
        "FTP connection"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_196",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which of the following is NOT one of the three main types of triggers that Dataflow supports?",
      "options": [
        "Trigger based on element size in bytes",
        "Trigger that is a combination of other triggers",
        "Trigger based on element count",
        "Trigger based on time"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_197",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Does Dataflow process batch data pipelines or streaming data pipelines?",
      "options": [
        "Only Batch Data Pipelines",
        "Both Batch and Streaming Data Pipelines",
        "Only Streaming Data Pipelines",
        "None of the above"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_198",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "Which of the following is not true about Dataflow pipelines?",
      "options": [
        "Pipelines are a set of operations",
        "Pipelines represent a data processing job",
        "Pipelines represent a directed graph of steps",
        "Pipelines can share data between instances"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_199",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "What are two of the benefits of using denormalized data structures in BigQuery?",
      "options": [
        "Reduces the amount of data processed, reduces the amount of storage required",
        "Increases query speed, makes queries simpler",
        "Reduces the amount of storage required, increases query speed",
        "Reduces the amount of data processed, increases query speed"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_200",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "Which of the following are examples of hyperparameters? (Select 2 answers.)",
      "options": [
        "Number of hidden layers",
        "Number of nodes in each hidden layer",
        "Biases",
        "Weights"
      ],
      "correctAnswers": [
        0,
        1
      ],
      "explanation": "50 questions in this batch.",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_201",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "What are two methods that can be used to denormalize tables in BigQuery?",
      "options": [
        "1) Split table into multiple tables; 2) Use a partitioned table",
        "1) Join tables into one table; 2) Use nested repeated fields",
        "1) Use a partitioned table; 2) Join tables into one table",
        "1) Use nested repeated fields; 2) Use a partitioned table"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_202",
      "batch": "Batch 5",
      "type": "multiple",
      "prompt": "Which of these numbers are adjusted by a neural network as it learns from a training dataset (select 2 answers)?",
      "options": [
        "Weights",
        "Biases",
        "Continuous features",
        "Input values"
      ],
      "correctAnswers": [
        0,
        1
      ],
      "explanation": "Correct Answer: A, B",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_203",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "Google Cloud Bigtable indexes a single value in each row. This value is called the _______.",
      "options": [
        "primary key",
        "unique key",
        "row key",
        "master key"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_204",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "Cloud Dataproc charges you only for what you really use with _____ billing.",
      "options": [
        "month-by-month",
        "minute-by-minute",
        "week-by-week",
        "hour-by-hour"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_205",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "What is the recommended action to do in order to switch between SSD and HDD storage for your Google Cloud Bigtable instance?",
      "options": [
        "create a third instance and sync the data from the two storage types via batch jobs",
        "export the data from the existing instance and import the data into a new instance",
        "run parallel instances where one is HDD and the other is SDD",
        "the selection is final and you must resume using the same storage type"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_206",
      "batch": "Batch 5",
      "type": "multiple",
      "prompt": "Which row keys are likely to cause a disproportionate number of reads and/or writes on a particular node in a Bigtable cluster (select 2 answers)?",
      "options": [
        "A sequential numeric ID",
        "A timestamp followed by a stock symbol",
        "A non-sequential numeric ID",
        "A stock symbol followed by a timestamp"
      ],
      "correctAnswers": [
        0,
        1
      ],
      "explanation": "Correct Answer: A, B",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_207",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "Which of these is NOT a way to customize the software on Dataproc cluster instances?",
      "options": [
        "Set initialization actions",
        "Modify configuration files using cluster properties",
        "Configure the cluster using Cloud Deployment Manager",
        "Log into the master node and make changes from there"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_208",
      "batch": "Batch 5",
      "type": "multiple",
      "prompt": "Which of the following are feature engineering techniques? (Select 2 answers)",
      "options": [
        "Hidden feature layers",
        "Feature prioritization",
        "Crossed feature columns",
        "Bucketization of a continuous feature"
      ],
      "correctAnswers": [
        2,
        3
      ],
      "explanation": "Correct Answer: C, D",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_209",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "How can you get a neural network to learn about relationships between categories in a categorical feature?",
      "options": [
        "Create a multi-hot column",
        "Create a one-hot column",
        "Create a hash bucket",
        "Create an embedding column"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_210",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "To give a user read permission for only the first three columns of a table, which access control method would you use?",
      "options": [
        "Primitive role",
        "Predefined role",
        "Authorized view",
        "It's not possible to give access to only the first three columns of a table."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_211",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "Which of the following is NOT a valid use case to select HDD (hard disk drives) as the storage for Google Cloud Bigtable?",
      "options": [
        "You expect to store at least 10 TB of data.",
        "You will mostly run batch workloads with scans and writes, rather than frequently executing random reads of a small number of rows.",
        "You need to integrate with Google BigQuery.",
        "You will not use the data to back a user-facing or latency-sensitive application."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_212",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "Cloud Dataproc is a managed Apache Hadoop and Apache _____ service.",
      "options": [
        "Blaze",
        "Spark",
        "Fire",
        "Ignite"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_213",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "The Dataflow SDKs have been recently transitioned into which Apache service?",
      "options": [
        "Apache Spark",
        "Apache Hadoop",
        "Apache Kafka",
        "Apache Beam"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_214",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "What is the general recommendation when designing your row keys for a Cloud Bigtable schema?",
      "options": [
        "Include multiple time series values within the row key",
        "Keep the row keep as an 8 bit integer",
        "Keep your row key reasonably short",
        "Keep your row key as long as the field permits"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_215",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "Which of the following statements is NOT true regarding Bigtable access roles?",
      "options": [
        "Using IAM roles, you cannot give a user access to only one table in a project, rather than all tables in a project.",
        "To give a user access to only one table in a project, grant the user the Bigtable Editor role for that table.",
        "You can configure access control only at the project level.",
        "To give a user access to only one table in a project, you must configure access through your application."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_216",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "If you're running a performance test that depends upon Cloud Bigtable, all the choices except one below are recommended steps. Which is NOT a recommended step to follow?",
      "options": [
        "Do not use a production instance.",
        "Run your test for at least 10 minutes.",
        "Before you test, run a heavy pre-test for several minutes.",
        "Use at least 300 GB of data."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_217",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You operate a logistics company, and you want to improve event delivery reliability for vehicle-based sensors. You operate small data centers around the world to capture these events, but leased lines that provide connectivity from your event collection infrastructure to your event processing infrastructure are unreliable, with unpredictable latency. You want to address this issue in the most cost-effective way. What should you do?",
      "options": [
        "Deploy small Kafka clusters in your data centers to buffer events.",
        "Have the data acquisition devices publish data to Cloud Pub/Sub.",
        "Establish a Cloud Interconnect between all remote data centers and Google.",
        "Write a Cloud Dataflow pipeline that aggregates all data in session windows."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_218",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "The marketing team at your organization provides regular updates of a segment of your customer dataset. The marketing team has given you a CSV with 1 million records that must be updated in BigQuery. When you use the UPDATE statement in BigQuery, you receive a quotaExceeded error. What should you do?",
      "options": [
        "Reduce the number of records updated each day to stay within the BigQuery UPDATE DML statement limit.",
        "Increase the BigQuery UPDATE DML statement limit in the Quota management section of the Google Cloud Platform Console.",
        "Split the source CSV file into smaller CSV files in Cloud Storage to reduce the number of BigQuery UPDATE DML statements per BigQuery job.",
        "Import the new records from the CSV file into a new BigQuery table. Create a BigQuery job that merges the new records with the existing records and writes the results to a new BigQuery table."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_219",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You work on a regression problem in a natural language processing domain, and you have 100M labeled exmaples in your dataset. You have randomly shuffled your data and split your dataset into train and test samples (in a 90/10 ratio). After you trained the neural network and evaluated your model on a test set, you discover that the root-mean- squared error (RMSE) of your model is twice as high on the train set as on the test set. How should you improve the performance of your model?",
      "options": [
        "Increase the share of the test sample in the train-test split.",
        "Try to collect more data and increase the size of your dataset.",
        "Try out regularization techniques (e.g., dropout of batch normalization) to avoid overfitting.",
        "Increase the complexity of your model by, e.g., introducing an additional layer or increase sizing the size of vocabularies or n-grams used."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_220",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You need to create a near real-time inventory dashboard that reads the main inventory tables in your BigQuery data warehouse. Historical inventory data is stored as inventory balances by item and location. You have several thousand updates to inventory every hour. You want to maximize performance of the dashboard and ensure that the data is accurate. What should you do?",
      "options": [
        "Leverage BigQuery UPDATE statements to update the inventory balances as they are changing.",
        "Partition the inventory balance table by item to reduce the amount of data scanned with each inventory update.",
        "Use the BigQuery streaming the stream changes into a daily inventory movement table. Calculate balances in a view that joins it to the historical inventory balance table. Update the inventory balance table nightly.",
        "Use the BigQuery bulk loader to batch load inventory changes into a daily inventory movement table. Calculate balances in a view that joins it to the historical inventory balance table. Update the inventory balance table nightly."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_221",
      "batch": "Batch 5",
      "type": "multiple",
      "prompt": "You have Cloud Functions written in Node.js that pull messages from Cloud Pub/Sub and send the data to BigQuery. You observe that the message processing rate on the Pub/Sub topic is orders of magnitude higher than anticipated, but there is no error logged in Stackdriver Log Viewer. What are the two most likely causes of this problem? Choose 2 answers.",
      "options": [
        "Publisher throughput quota is too small.",
        "Total outstanding messages exceed the 10-MB maximum.",
        "Error handling in the subscriber code is not handling run-time errors properly.",
        "The subscriber code cannot keep up with the messages.",
        "The subscriber code does not acknowledge the messages that it pulls."
      ],
      "correctAnswers": [
        2,
        3
      ],
      "explanation": "Correct Answer: C, D",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_222",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "Your team is responsible for developing and maintaining ETLs in your company. One of your Dataflow jobs is failing because of some errors in the input data, and you need to improve reliability of the pipeline (incl. being able to reprocess all failing data). What should you do?",
      "options": [
        "Add a filtering step to skip these types of errors in the future, extract erroneous rows from logs.",
        "Add a try... catch block to your DoFn that transforms the data, extract erroneous rows from logs.",
        "Add a try... catch block to your DoFn that transforms the data, write erroneous rows to PubSub directly from the DoFn.",
        "Add a try... catch block to your DoFn that transforms the data, use a sideOutput to create a PCollection that can be stored to PubSub later."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_223",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "Your company is migrating its on-premises data warehousing solution to BigQuery. The existing data warehouse uses trigger-based change data capture (CDC) to apply daily updates from transactional database sources Your company wants to use BigQuery to improve its handling of CDC and to optimize the performance of the data warehouse Source system changes must be available for query m near-real time using tog-based CDC streams You need to ensure that changes in the BigQuery reporting table are available with minimal latency and reduced overhead. What should you do? Choose 2 answers Perform a DML INSERT UPDATE, or DELETE to replicate each CDC record in the reporting table m real time.",
      "options": [
        "Periodically DELETE outdated records from the reporting table Periodically use a DML MERGE to simultaneously perform DML INSERT. UPDATE, and DELETE operations in the reporting table",
        "Insert each new CDC record and corresponding operation type into a staging table in real time",
        "Insert each new CDC record and corresponding operation type into the reporting table in real time and use a materialized view to expose only the current version of each unique record."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B, D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_224",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "(question text unavailable)",
      "options": [
        "Create a Memorystore instance with a high availability (HA) configuration",
        "Write votes to a Pub Sub tope and have Cloud Functions subscribe to it and write voles to BigQuery",
        "Write votes to a Pub/Sub tope and toad into both Bigtable and BigQuery via a Dataflow pipeline Query Bigtable for real-time results and BigQuery for later analysis Shutdown the Bigtable instance when voting concludes D Create a Cloud SQL for PostgreSQL database with high availability (HA) configuration and multiple read replicas"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_225",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You want to rebuild your batch pipeline for structured data on Google Cloud You are using PySpark to conduct data transformations at scale, but your pipelines are taking over twelve hours to run To expedite development and pipeline run time, you want to use a serverless tool and SQL syntax You have already moved your raw data into Cloud Storage How should you build the pipeline on Google Cloud while meeting speed and processing requirements?",
      "options": [
        "Convert your PySpark commands into SparkSQL queries to transform the data; and then run your pipeline on Dataproc to write the data into BigQuery",
        "Ingest your data into Cloud SQL, convert your PySpark commands into SparkSQL queries to transform the data, and then use federated queries from BigQuery for machine learning.",
        "Ingest your data into BigQuery from Cloud Storage, convert your PySpark commands into BigQuery SQL queries to transform the data, and then write the transformations to a new table",
        "Use Apache Beam Python SDK to build the transformation pipelines, and write the data into BigQuery"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_226",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You are operating a streaming Cloud Dataflow pipeline. Your engineers have a new version of the pipeline with a different windowing algorithm and triggering strategy. You want to update the running pipeline with the new version. You want to ensure that no data is lost during the update. What should you do?",
      "options": [
        "Update the Cloud Dataflow pipeline inflight by passing the --update option with the -- jobName set to the existing job name",
        "Update the Cloud Dataflow pipeline inflight by passing the --update option with the -- jobName set to a new unique job name",
        "Stop the Cloud Dataflow pipeline with the Cancel option. Create a new Cloud Dataflow job with the updated code",
        "Stop the Cloud Dataflow pipeline with the Drain option. Create a new Cloud Dataflow job with the updated code"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_227",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You are working on a linear regression model on BigQuery ML to predict a customer's likelihood of purchasing your company's products. Your model uses a city name variable as a key predictive component in order to train and serve the model your data must be organized in columns. You want to prepare your data using the least amount of coding while maintaining the predictable variables. What should you do?",
      "options": [
        "Use SQL in BigQuery to transform the stale column using a one-hot encoding method, and make each city a column with binary values.",
        "Create a new view with BigQuery that does not include a column which city information.",
        "Cloud Data Fusion to assign each city to a region that is labeled as 1, 2 3, 4, or 5, and then use that number to represent the city in the model.",
        "Use TensorFlow to create a categorical variable with a vocabulary list. Create the vocabulary file and upload that as part of your model to BigQuery ML."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_228",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You are migrating your data warehouse to BigQuery. You have migrated all of your data into tables in a dataset. Multiple users from your organization will be using the data. They should only see certain tables based on their team membership. How should you set user permissions?",
      "options": [
        "Assign the users/groups data viewer access at the table level for each table",
        "Create SQL views for each team in the same dataset in which the data resides, and assign the users/groups data viewer access to the SQL views",
        "Create authorized views for each team in the same dataset in which the data resides, and assign the users/groups data viewer access to the authorized views",
        "Create authorized views for each team in datasets created for each team. Assign the authorized views data viewer access to the dataset in which the data resides. Assign the users/groups data viewer access to the datasets in which the authorized views reside"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_229",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "Your United States-based company has created an application for assessing and responding to user actions. The primary table's data volume grows by 250,000 records per second. Many third parties use your application's APIs to build the functionality into their own frontend applications. Your application's APIs should comply with the following requirements: Single global endpoint ANSI SQL support Consistent access to the most up-to-date data What should you do?",
      "options": [
        "Implement BigQuery with no region selected for storage or processing.",
        "Implement Cloud Spanner with the leader in North America and read-only replicas in Asia and Europe.",
        "Implement Cloud SQL for PostgreSQL with the master in Norht America and read replicas in Asia and Europe.",
        "Implement Cloud Bigtable with the primary cluster in North America and secondary clusters in Asia and Europe."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_230",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A data scientist has created a BigQuery ML model and asks you to create an ML pipeline to serve predictions. You have a REST API application with the requirement to serve predictions for an individual user ID with latency under 100 milliseconds. You use the following query to generate predictions: SELECT predicted_label, user_id FROM ML.PREDICT (MODEL `dataset.model', table user_features). How should you create the ML pipeline?",
      "options": [
        "Add a WHERE clause to the query, and grant the BigQuery Data Viewer role to the application service account.",
        "Create an Authorized View with the provided query. Share the dataset that contains the view with the application service account.",
        "Create a Cloud Dataflow pipeline using BigQueryIO to read results from the query. Grant the Dataflow Worker role to the application service account.",
        "Create a Cloud Dataflow pipeline using BigQueryIO to read predictions for all users from the query. Write the results to Cloud Bigtable using BigtableIO. Grant the Bigtable Reader role to the application service account so that the application can read predictions for individual users from Cloud Bigtable."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_231",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "The data analyst team at your company uses BigQuery for ad-hoc queries and scheduled SQL pipelines in a Google Cloud project with a slot reservation of 2000 slots. However, with the recent introduction of hundreds of new non time-sensitive SQL pipelines, the team is encountering frequent quota errors. You examine the logs and notice that approximately 1500 queries are being triggered concurrently during peak time. You need to resolve the concurrency issue. What should you do?",
      "options": [
        "Increase the slot capacity of the project with baseline as 0 and maximum reservation size as 3000.",
        "Update SQL pipelines to run as a batch query, and run ad-hoc queries as interactive query jobs.",
        "Increase the slot capacity of the project with baseline as 2000 and maximum reservation size as 3000.",
        "Update SQL pipelines and ad-hoc queries to run as interactive query jobs."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_232",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You want to automate execution of a multi-step data pipeline running on Google Cloud. The pipeline includes Dataproc and Dataflow jobs that have multiple dependencies on each other. You want to use managed services where possible, and the pipeline will run every day. Which tool should you use?",
      "options": [
        "cron",
        "Cloud Composer",
        "Cloud Scheduler",
        "Workflow Templates on Dataproc"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_233",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "An aerospace company uses a proprietary data format to store its flight data. You need to connect this new data source to BigQuery and stream the data into BigQuery. You want to efficiently import the data into BigQuery while consuming as few resources as possible. What should you do?",
      "options": [
        "Write a shell script that triggers a Cloud Function that performs periodic ETL batch jobs on the new data source.",
        "Use a standard Dataflow pipeline to store the raw data in BigQuery, and then transform the format later when the data is used.",
        "Use Apache Hive to write a Dataproc job that streams the data into BigQuery in CSV format.",
        "Use an Apache Beam custom connector to write a Dataflow pipeline that streams the data into BigQuery in Avro format."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_234",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You are managing a Cloud Dataproc cluster. You need to make a job run faster while minimizing costs, without losing work in progress on your clusters. What should you do?",
      "options": [
        "Increase the cluster size with more non-preemptible workers.",
        "Increase the cluster size with preemptible worker nodes, and configure them to forcefully decommission.",
        "Increase the cluster size with preemptible worker nodes, and use Cloud Stackdriver to trigger a script to preserve work.",
        "Increase the cluster size with preemptible worker nodes, and configure them to use graceful decommissioning."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_235",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You want to store your team\u2019s shared tables in a single dataset to make data easily accessible to various analysts. You want to make this data readable but unmodifiable by analysts. At the same time, you want to provide the analysts with individual workspaces in the same project, where they can create and store tables for their own use, without the tables being accessible by other analysts. What should you do?",
      "options": [
        "Give analysts the BigQuery Data Viewer role at the project level. Create one other dataset, and give the analysts the BigQuery Data Editor role on that dataset.",
        "Give analysts the BigQuery Data Viewer role at the project level. Create a dataset for each analyst, and give each analyst the BigQuery Data Editor role at the project level.",
        "Give analysts the BigQuery Data Viewer role on the shared dataset. Create a dataset for each analyst, and give each analyst the BigQuery Data Editor role at the dataset level for their assigned dataset.",
        "Give analysts the BigQuery Data Viewer role on the shared dataset. Create one other dataset and give the analysts the BigQuery Data Editor role on that dataset."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_236",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "Your organization has two Google Cloud projects, project A and project B. In project A, you have a Pub/Sub topic that receives data from confidential sources. Only the resources in project A should be able to access the data in that topic. You want to ensure that project B and any future project cannot access data in the project A topic. What should you do?",
      "options": [
        "Add firewall rules in project A so only traffic from the VPC in project A is permitted.",
        "Configure VPC Service Controls in the organization with a perimeter around project A.",
        "Use Identity and Access Management conditions to ensure that only users and service accounts in project A. can access resources in project A.",
        "Configure VPC Service Controls in the organization with a perimeter around the VPC of project A."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_237",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You are running a streaming pipeline with Dataflow and are using hopping windows to group the data as the data arrives. You noticed that some data is arriving late but is not being marked as late data, which is resulting in inaccurate aggregations downstream. You need to find a solution that allows you to capture the late data in the appropriate window. What should you do?",
      "options": [
        "Use watermarks to define the expected data arrival window. Allow late data as it arrives.",
        "Change your windowing function to tumbling windows to avoid overlapping window periods.",
        "Change your windowing function to session windows to define your windows based on certain activity.",
        "Expand your hopping window so that the late data has more time to arrive within the grouping."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_238",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You are collecting IoT sensor data from millions of devices across the world and storing the data in BigQuery. Your access pattern is based on recent data, filtered by location_id and device_version with the following query: You want to optimize your queries for cost and performance. How should you structure your data?",
      "options": [
        "Partition table data by create_date, location_id, and device_version.",
        "Partition table data by create_date, cluster table data by location_id, and device_version.",
        "Cluster table data by create_date, location_id, and device_version.",
        "Cluster table data by create_date, partition by location_id, and device_version."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_239",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You have a BigQuery table that contains customer data, including sensitive information such as names and addresses. You need to share the customer data with your data analytics and consumer support teams securely. The data analytics team needs to access the data of all the customers, but must not be able to access the sensitive data. The consumer support team needs access to all data columns, but must not be able to access customers that no longer have active contracts. You enforced these requirements by using an authorized dataset and policy tags. After implementing these steps, the data analytics team reports that they still have access to the sensitive columns. You need to ensure that the data analytics team does not have access to restricted data. What should you do? (Choose two.)",
      "options": [
        "Create two separate authorized datasets; one for the data analytics team and another for the consumer support team.",
        "Ensure that the data analytics team members do not have the Data Catalog Fine-Grained Reader role for the policy tags.",
        "Replace the authorized dataset with an authorized view. Use row-level security and apply filter_expression to limit data access.",
        "Remove the bigquery.dataViewer role from the data analytics team on the authorized datasets.",
        "Enforce access control in the policy tag taxonomy."
      ],
      "correctAnswers": [
        4
      ],
      "explanation": "Correct Answer: E",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_240",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You used Dataprep to create a recipe on a sample of data in a BigQuery table. You want to reuse this recipe on a daily upload of data with the same schema, after the load job with variable execution time completes. What should you do?",
      "options": [
        "Create a cron schedule in Dataprep.",
        "Create an App Engine cron job to schedule the execution of the Dataprep job.",
        "Export the recipe as a Dataprep template, and create a job in Cloud Scheduler.",
        "Export the Dataprep job as a Dataflow template, and incorporate it into a Composer job."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_241",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "Your company currently runs a large on-premises cluster using Spark, Hive, and HDFS in a colocation facility. The cluster is designed to accommodate peak usage on the system; however, many jobs are batch in nature, and usage of the cluster fluctuates quite dramatically. Your company is eager to move to the cloud to reduce the overhead associated with on-premises infrastructure and maintenance and to benefit from the cost savings. They are also hoping to modernize their existing infrastructure to use more serverless offerings in order to take advantage of the cloud. Because of the timing of their contract renewal with the colocation facility, they have only 2 months for their initial migration. How would you recommend they approach their upcoming migration strategy so they can maximize their cost savings in the cloud while still executing the migration in time?",
      "options": [
        "Migrate the workloads to Dataproc plus HDFS; modernize later.",
        "Migrate the workloads to Dataproc plus Cloud Storage; modernize later.",
        "Migrate the Spark workload to Dataproc plus HDFS, and modernize the Hive workload for BigQuery.",
        "Modernize the Spark workload for Dataflow and the Hive workload for BigQuery."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_242",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You are using BigQuery with a multi-region dataset that includes a table with the daily sales volumes. This table is updated multiple times per day. You need to protect your sales table in case of regional failures with a recovery point objective (RPO) of less than 24 hours, while keeping costs to a minimum. What should you do?",
      "options": [
        "Schedule a daily export of the table to a Cloud Storage dual or multi-region bucket.",
        "Schedule a daily copy of the dataset to a backup region.",
        "Schedule a daily BigQuery snapshot of the table.",
        "Modify ETL job to load the data into both the current and another backup region."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_243",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You work for an advertising company, and you've developed a Spark ML model to predict click-through rates at advertisement blocks. You've been developing everything at your on-premises data center, and now your company is migrating to Google Cloud. Your data center will be closing soon, so a rapid lift-and-shift migration is necessary. However, the data you've been using will be migrated to migrated to BigQuery. You periodically retrain your Spark ML models, so you need to migrate existing training pipelines to Google Cloud. What should you do?",
      "options": [
        "Use Vertex AI for training existing Spark ML models",
        "Rewrite your models on TensorFlow, and start using Vertex AI",
        "Use Dataproc for training existing Spark ML models, but start reading data directly from BigQuery",
        "Spin up a Spark cluster on Compute Engine, and train Spark ML models on the data exported from BigQuery"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_244",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You recently deployed several data processing jobs into your Cloud Composer 2 environment. You notice that some tasks are failing in Apache Airflow. On the monitoring dashboard, you see an increase in the total workers memory usage, and there were worker pod evictions. You need to resolve these errors. What should you do? (Choose two.)",
      "options": [
        "Increase the directed acyclic graph (DAG) file parsing interval.",
        "Increase the Cloud Composer 2 environment size from medium to large.",
        "Increase the maximum number of workers and reduce worker concurrency.",
        "Increase the memory available to the Airflow workers.",
        "Increase the memory available to the Airflow triggerer."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_245",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You issue a new batch job to Dataflow. The job starts successfully, processes a few elements, and then suddenly fails and shuts down. You navigate to the Dataflow monitoring interface where you find errors related to a particular DoFn in your pipeline. What is the most likely cause of the errors?",
      "options": [
        "Job validation",
        "Exceptions in worker code",
        "Graph or pipeline construction",
        "Insufficient permissions"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_246",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You are building a new data pipeline to share data between two different types of applications: jobs generators and job runners. Your solution must scale to accommodate increases in usage and must accommodate the addition of new applications without negatively affecting the performance of existing ones. What should you do?",
      "options": [
        "Create an API using App Engine to receive and send messages to the applications",
        "Use a Cloud Pub/Sub topic to publish jobs, and use subscriptions to execute them",
        "Create a table on Cloud SQL, and insert and delete rows with the job information",
        "Create a table on Cloud Spanner, and insert and delete rows with the job information"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_247",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You have an Oracle database deployed in a VM as part of a Virtual Private Cloud (VPC) network. You want to replicate and continuously synchronize 50 tables to BigQuery. You want to minimize the need to manage infrastructure. What should you do?",
      "options": [
        "Deploy Apache Kafka in the same VPC network, use Kafka Connect Oracle Change Data Capture (CDC), and Dataflow to stream the Kafka topic to BigQuery.",
        "Create a Pub/Sub subscription to write to BigQuery directly. Deploy the Debezium Oracle connector to capture changes in the Oracle database, and sink to the Pub/Sub topic.",
        "Deploy Apache Kafka in the same VPC network, use Kafka Connect Oracle change data capture (CDC), and the Kafka Connect Google BigQuery Sink Connector.",
        "Create a Datastream service from Oracle to BigQuery, use a private connectivity configuration to the same VPC network, and a connection profile to BigQuery."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_248",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "Different teams in your organization store customer and performance data in BigQuery. Each team needs to keep full control of their collected data, be able to query data within their projects, and be able to exchange their data with other teams. You need to implement an organization-wide solution, while minimizing operational tasks and costs. What should you do?",
      "options": [
        "Ask each team to create authorized views of their data. Grant the biquery.jobUser role to each team.",
        "Create a BigQuery scheduled query to replicate all customer data into team projects.",
        "Ask each team to publish their data in Analytics Hub. Direct the other teams to subscribe to them.",
        "Enable each team to create materialized views of the data they need to access in their projects."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_249",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "You are designing a messaging system by using Pub/Sub to process clickstream data with an event-driven consumer app that relies on a push subscription. You need to configure the messaging system that is reliable enough to handle temporary downtime of the consumer app. You also need the messaging system to store the input messages that cannot be consumed by the subscriber. The system needs to retry failed messages gradually, avoiding overloading the consumer app, and store the failed messages after a maximum of 10 retries in a topic. How should you configure the Pub/Sub subscription?",
      "options": [
        "Increase the acknowledgement deadline to 10 minutes.",
        "Use immediate redelivery as the subscription retry policy, and configure dead lettering to a different topic with maximum delivery attempts set to 10.",
        "Use exponential backoff as the subscription retry policy, and configure dead lettering to the same source topic with maximum delivery attempts set to 10.",
        "Use exponential backoff as the subscription retry policy, and configure dead lettering to a different topic with maximum delivery attempts set to 10."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_250",
      "batch": "Batch 5",
      "type": "multiple",
      "prompt": "You are running a pipeline in Dataflow that receives messages from a Pub/Sub topic and writes the results to a BigQuery dataset in the EU. Currently, your pipeline is located in europe-west4 and has a maximum of 3 workers, instance type n1-standard-1. You notice that during peak periods, your pipeline is struggling to process records in a timely fashion, when all 3 workers are at maximum CPU utilization. Which two actions can you take to increase performance of your pipeline? (Choose two.)",
      "options": [
        "Increase the number of max workers",
        "Use a larger instance type for your Dataflow workers",
        "Change the zone of your Dataflow pipeline to run in us-central1",
        "Create a temporary table in Bigtable that will act as a buffer for new data. Create a new step in your pipeline to write to this table first, and then create a new pipeline to write from Bigtable to BigQuery",
        "Create a temporary table in Cloud Spanner that will act as a buffer for new data. Create a new step in your pipeline to write to this table first, and then create a new pipeline to write from Cloud Spanner to BigQuery"
      ],
      "correctAnswers": [
        0,
        1
      ],
      "explanation": "50 questions in this batch.",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_251",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are developing an Apache Beam pipeline to extract data from a Cloud SQL instance by using JdbcIO. You have two projects running in Google Cloud. The pipeline will be deployed and executed on Dataflow in Project A. The Cloud SQL. instance is running in Project B and does not have a public IP address. After deploying the pipeline, you noticed that the pipeline failed to extract data from the Cloud SQL instance due to connection failure. You verified that VPC Service Controls and shared VPC are not in use in these projects. You want to resolve this error while ensuring that the data does not go through the public internet. What should you do?",
      "options": [
        "Set up VPC Network Peering between Project A and Project B. Add a firewall rule to allow the peered subnet range to access all instances on the network.",
        "Turn off the external IP addresses on the Dataflow worker. Enable Cloud NAT in Project A.",
        "Add the external IP addresses of the Dataflow worker as authorized networks in the Cloud SQL instance.",
        "Set up VPC Network Peering between Project A and Project B. Create a Compute Engine instance without external IP address in Project B on the peered subnet to serve as a proxy server to the Cloud SQL database."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_252",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You need to choose a database to store time series CPU and memory usage for millions of computers. You need to store this data in one-second interval samples. Analysts will be performing real-time, ad hoc analytics against the database. You want to avoid being charged for every query executed and ensure that the schema design will allow for future growth of the dataset. Which database and data model should you choose?",
      "options": [
        "Create a table in BigQuery, and append the new samples for CPU and memory to the table",
        "Create a wide table in BigQuery, create a column for the sample value at each second, and update the row with the interval for each second",
        "Create a narrow table in Bigtable with a row key that combines the Computer Engine computer identifier with the sample time at each second",
        "Create a wide table in Bigtable with a row key that combines the computer identifier with the sample time at each minute, and combine the values for each second as column data."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_253",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are migrating your data warehouse to Google Cloud and decommissioning your on-premises data center. Because this is a priority for your company, you know that bandwidth will be made available for the initial data load to the cloud. The files being transferred are not large in number, but each file is 90 GB. Additionally, you want your transactional systems to continually update the warehouse on Google Cloud in real time. What tools should you use to migrate the data and ensure that it continues to write to your warehouse?",
      "options": [
        "Storage Transfer Service for the migration; Pub/Sub and Cloud Data Fusion for the real-time updates",
        "BigQuery Data Transfer Service for the migration; Pub/Sub and Dataproc for the real-time updates",
        "gsutil for the migration; Pub/Sub and Dataflow for the real-time updates",
        "gsutil for both the migration and the real-time updates"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_254",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You work for a mid-sized enterprise that needs to move its operational system transaction data from an on- premises database to GCP. The database is about 20 TB in size. Which database should you choose?",
      "options": [
        "Cloud SQL",
        "Cloud Bigtable",
        "Cloud Spanner",
        "Cloud Datastore"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_255",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "Your company is selecting a system to centralize data ingestion and delivery. You are considering messaging and data integration systems to address the requirements. The key requirements are: \u2711 The ability to seek to a particular offset in a topic, possibly back to the start of all data ever captured \u2711 Support for publish/subscribe semantics on hundreds of topics Retain per-key ordering - Which system should you choose?",
      "options": [
        "Apache Kafka",
        "Cloud Storage",
        "Dataflow",
        "Firebase Cloud Messaging"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_256",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You need to give new website users a globally unique identifier (GUID) using a service that takes in data points and returns a GUID. This data is sourced from both internal and external systems via HTTP calls that you will make via microservices within your pipeline. There will be tens of thousands of messages per second and that can be multi- threaded. and you worry about the backpressure on the system. How should you design your pipeline to minimize that backpressure?",
      "options": [
        "Call out to the service via HTTP.",
        "Create the pipeline statically in the class definition.",
        "Create a new object in the startBundle method of DoFn.",
        "Batch the job into ten-second increments."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_257",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You want to build a managed Hadoop system as your data lake. The data transformation process is composed of a series of Hadoop jobs executed in sequence. To accomplish the design of separating storage from compute, you decided to use the Cloud Storage connector to store all input data, output data, and intermediary data. However, you noticed that one Hadoop job runs very slowly with Cloud Dataproc, when compared with the on-premises bare-metal Hadoop environment (8-core nodes with 100-GB RAM). Analysis shows that this particular Hadoop job is disk I/O intensive. You want to resolve the issue. What should you do?",
      "options": [
        "Allocate sufficient memory to the Hadoop cluster, so that the intermediary data of that particular Hadoop job can be held in memory",
        "Allocate sufficient persistent disk space to the Hadoop cluster, and store the intermediate data of that particular Hadoop job on native HDFS",
        "Allocate more CPU cores of the virtual machine instances of the Hadoop cluster so that the networking bandwidth for each instance can scale up",
        "Allocate additional network interface card (NIC), and configure link aggregation in the operating system to use the combined throughput when working with Cloud Storage"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_258",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are deploying a new storage system for your mobile application, which is a media streaming service. You decide the best fit is Google Cloud Datastore. You have entities with multiple properties, some of which can take on multiple values. For example, in the entity 'Movie' the property 'actors' and the property 'tags' have multiple values but the property 'date released' does not. A typical query would ask for all movies with actor=<actorname> ordered by date_released or all movies with tag=Comedy ordered by date_released. How should you avoid a combinatorial explosion in the number of indexes?",
      "options": [
        "Manually configure the index in your index config as follows:",
        "Manually configure the index in your index config as follows:",
        "Set the following in your entity options: exclude_from_indexes = 'actors, tags'",
        "Set the following in your entity options: exclude_from_indexes = 'date_published'"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_259",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You need to set access to BigQuery for different departments within your company. Your solution should comply with the following requirements: \u2711 Each department should have access only to their data. \u2711 Each department will have one or more leads who need to be able to create and update tables and provide them to their team. \u2711 Each department has data analysts who need to be able to query but not modify data. How should you set access to the data in BigQuery?",
      "options": [
        "Create a dataset for each department. Assign the department leads the role of OWNER, and assign the data analysts the role of WRITER on their dataset.",
        "Create a dataset for each department. Assign the department leads the role of WRITER, and assign the data analysts the role of READER on their dataset.",
        "Create a table for each department. Assign the department leads the role of Owner, and assign the data analysts the role of Editor on the project the table is in.",
        "Create a table for each department. Assign the department leads the role of Editor, and assign the data analysts the role of Viewer on the project the table is in."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_260",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are using BigQuery and Data Studio to design a customer-facing dashboard that displays large quantities of aggregated data. You expect a high volume of concurrent users. You need to optimize the dashboard to provide quick visualizations with minimal latency. What should you do?",
      "options": [
        "Use BigQuery BI Engine with materialized views.",
        "Use BigQuery BI Engine with logical views.",
        "Use BigQuery BI Engine with streaming data.",
        "Use BigQuery BI Engine with authorized views."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_261",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are a retailer that wants to integrate your online sales capabilities with different in- home assistants, such as Google Home. You need to interpret customer voice commands and issue an order to the backend systems. Which solutions should you choose?",
      "options": [
        "Speech-to-Text API",
        "Cloud Natural Language API",
        "Dialogflow Enterprise Edition",
        "AutoML Natural Language"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_262",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are updating the code for a subscriber to a Pub/Sub feed. You are concerned that upon deployment the subscriber may erroneously acknowledge messages, leading to message loss. Your subscriber is not set up to retain acknowledged messages. What should you do to ensure that you can recover from errors after deployment?",
      "options": [
        "Set up the Pub/Sub emulator on your local machine. Validate the behavior of your new subscriber logic before deploying it to production.",
        "Create a Pub/Sub snapshot before deploying new subscriber code. Use a Seek operation to re-deliver messages that became available after the snapshot was created.",
        "Use Cloud Build for your deployment. If an error occurs after deployment, use a Seek operation to locate a timestamp logged by Cloud Build at the start of the deployment.",
        "Enable dead-lettering on the Pub/Sub topic to capture messages that aren't successfully acknowledged. If an error occurs after deployment, re-deliver any messages captured by the dead-letter queue."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_263",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You currently have a single on-premises Kafka cluster in a data center in the us-east region that is responsible for ingesting messages from IoT devices globally. Because large parts of globe have poor internet connectivity, messages sometimes batch at the edge, come in all at once, and cause a spike in load on your Kafka cluster. This is becoming difficult to manage and prohibitively expensive. What is the Google-recommended cloud native architecture for this scenario?",
      "options": [
        "Edge TPUs as sensor devices for storing and transmitting the messages.",
        "Cloud Dataflow connected to the Kafka cluster to scale the processing of incoming messages.",
        "An IoT gateway connected to Cloud Pub/Sub, with Cloud Dataflow to read and process the messages from Cloud Pub/Sub.",
        "A Kafka cluster virtualized on Compute Engine in us-east with Cloud Load Balancing to connect to the devices around the world."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_264",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "Dataproc clusters contain many configuration files. To update these files, you will need to use the --properties option. The format for the option is: file_prefix:property= .",
      "options": [
        "details",
        "value",
        "null",
        "id"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_265",
      "batch": "Batch 6",
      "type": "multiple",
      "prompt": "You want to migrate an on-premises Hadoop system to Cloud Dataproc. Hive is the primary tool in use, and the data format is Optimized Row Columnar (ORC). All ORC files have been successfully copied to a Cloud Storage bucket. You need to replicate some data to the cluster's local Hadoop Distributed File System (HDFS) to maximize performance. What are two ways to start using Hive in Cloud Dataproc? (Choose two.)",
      "options": [
        "Run the gsutil utility to transfer all ORC files from the Cloud Storage bucket to HDFS. Mount the Hive tables locally.",
        "Run the gsutil utility to transfer all ORC files from the Cloud Storage bucket to any node of the Dataproc cluster. Mount the Hive tables locally.",
        "Run the gsutil utility to transfer all ORC files from the Cloud Storage bucket to the master node of the Dataproc cluster. Then run the Hadoop utility to copy them do HDFS. Mount the Hive tables from HDFS.",
        "Leverage Cloud Storage connector for Hadoop to mount the ORC files as external Hive tables. Replicate external Hive tables to the native ones.",
        "Load the ORC files into BigQuery. Leverage BigQuery connector for Hadoop to mount the BigQuery tables as external Hive tables. Replicate external Hive tables to the native ones."
      ],
      "correctAnswers": [
        2,
        3
      ],
      "explanation": "Correct Answer: C, D",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_266",
      "batch": "Batch 6",
      "type": "multiple",
      "prompt": "As your organization expands its usage of GCP, many teams have started to create their own projects. Projects are further multiplied to accommodate different stages of deployments and target audiences. Each project requires unique access control configurations. The central IT team needs to have access to all projects. Furthermore, data from Cloud Storage buckets and BigQuery datasets must be shared for use in other projects in an ad hoc way. You want to simplify access control management by minimizing the number of policies. Which two steps should you take? (Choose two.)",
      "options": [
        "Use Cloud Deployment Manager to automate access provision.",
        "Introduce resource hierarchy to leverage access control policy inheritance.",
        "Create distinct groups for various teams, and specify groups in Cloud IAM policies.",
        "Only use service accounts when sharing data for Cloud Storage buckets and BigQuery datasets.",
        "For each Cloud Storage bucket or BigQuery dataset, decide which projects need access. Find all the active members who have access to these projects, and create a Cloud IAM policy to grant access to all these users."
      ],
      "correctAnswers": [
        1,
        2
      ],
      "explanation": "Correct Answer: B, C",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_267",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are migrating an application that tracks library books and information about each book, such as author or year published, from an on-premises data warehouse to BigQuery. In your current relational database, the author information is kept in a separate table and joined to the book information on a common key. Based on Google's recommended practice for schema design, how would you structure the data to ensure optimal speed of queries about the author of each book that has been borrowed?",
      "options": [
        "Keep the schema the same, maintain the different tables for the book and each of the attributes, and query as you are doing today.",
        "Create a table that is wide and includes a column for each attribute, including the author's first name, last name, date of birth, etc.",
        "Create a table that includes information about the books and authors, but nest the author fields inside the author column.",
        "Keep the schema the same, create a view that joins all of the tables, and always query the view."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_268",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "Government regulations in the banking industry mandate the protection of clients' personally identifiable information (PII). Your company requires PII to be access controlled, encrypted, and compliant with major data protection standards. In addition to using Cloud Data Loss Prevention (Cloud DLP), you want to follow Google-recommended practices and use service accounts to control access to PII. What should you do?",
      "options": [
        "Assign the required Identity and Access Management (IAM) roles to every employee, and create a single service account to access project resources.",
        "Use one service account to access a Cloud SQL database, and use separate service accounts for each human user.",
        "Use Cloud Storage to comply with major data protection standards. Use one service account shared by all users.",
        "Use Cloud Storage to comply with major data protection standards. Use multiple service accounts attached to IAM groups to grant the appropriate access to each group."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_269",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "When you design a Google Cloud Bigtable schema it is recommended that you .",
      "options": [
        "Avoid schema designs that are based on NoSQL concepts",
        "Create schema designs that are based on a relational database design",
        "Avoid schema designs that require atomicity across rows",
        "Create schema designs that require atomicity across rows"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_270",
      "batch": "Batch 6",
      "type": "multiple",
      "prompt": "You have a data pipeline with a Cloud Dataflow job that aggregates and writes time series metrics to Cloud Bigtable. This data feeds a dashboard used by thousands of users across the organization. You need to support additional concurrent users and reduce the amount of time required to write the data. Which two actions should you take? (Choose two.)",
      "options": [
        "Increase the maximum number of Cloud Dataflow workers by setting maxNumWorkers in PipelineOptions",
        "Configure your Cloud Dataflow pipeline to use local execution",
        "Modify your Cloud Dataflow pipeline to use the Flatten transform before writing to Cloud Bigtable",
        "Increase the number of nodes in the Cloud Bigtable cluster",
        "Modify your Cloud Dataflow pipeline to use the CoGroupByKey transform before writing to Cloud Bigtable"
      ],
      "correctAnswers": [
        0,
        3
      ],
      "explanation": "Correct Answer: A, D",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_280",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You have two projects where you run BigQuery jobs: * One project runs production jobs that have strict completion time SLAs. These are high priority jobs that must have the required compute resources available when needed. These jobs generally never go below a 300 slot utilization, but occasionally spike up an additional 500 slots. * The other project is for users to run ad-hoc analytical queries. This project generally never uses more than 200 slots at a time. You want these ad-hoc queries to be billed based on how much data users scan rather than by slot capacity. You need to ensure that both projects have the appropriate compute resources available. What should you do?",
      "options": [
        "Create a single Enterprise Edition reservation for both projects. Set a baseline of 300 slots. Enable autoscaling up to 700 slots.",
        "Create two Enterprise Edition reservations, one for each of the projects. For the SLA project, set a baseline of 800 slots. For the ad-hocproject, enable autoscaling up to 200 slots.",
        "Create two Enterprise Edition reservations, one for each of the projects. For the SLA project, set a baseline of 300 slots and enableautoscaling up to 500 slots. For the ad-hoc project, set a reservation baseline of 0 slots and set the ignore_idle_slot3 flag to False.",
        "Create two reservations, one for each of the projects. For the SLA project, use an Enterprise Edition with a baseline of 300 slots and enable autoscaling up to 500 slots. For the ad-hoc project, configure on- demand billing."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_281",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are building an ELT solution in BigQuery by using Dataform. You need to perform uniqueness and null value checks on your final tables. What should you do to efficiently integrate these checks into your pipeline?",
      "options": [
        "Build BigQuery user-defined functions (UDFs).",
        "Create Dataplex data quality tasks.",
        "Build Dataform assertions into your code",
        "Write a Spark-based stored procedure."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_282",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You store and analyze your relational data in BigQuery on Google Cloud with all data that resides in US regions. You also have a variety of object stores across Microsoft Azure and Amazon Web Services (AWS), also in US regions. You want to query all your data in BigQuery daily with as little movement of data as possible. What should you do?",
      "options": [
        "Use the BigQuery Omni functionality and BigLake tables to query files in Azure and AWS.",
        "Use BigQuery Data Transfer Service to load files from Azure and AWS into BigQuery.",
        "Load files from AWS and Azure to Cloud Storage with Cloud Shell gautil rsync arguments.",
        "Create a Dataflow pipeline to ingest files from Azure and AWS to BigQuery."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_283",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are configuring networking for a Dataflow job. The data pipeline uses custom container images with the libraries that are required for the transformation logic preinstalled. The data pipeline reads the data from Cloud Storage and writes the data to BigQuery. You need to ensure cost-effective and secure communication between the pipeline and Google APIs and services. What should you do?",
      "options": [
        "Enable Cloud NAT to provide outbound internet connectivity while enforcing firewall rules.",
        "Leave external IP addresses assigned to worker VMs while enforcing firewall rules.",
        "Disable external IP addresses from worker VMs and enable Private Google Access.",
        "Disable external IP addresses and establish a Private Service Connect endpoint IP address."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_284",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You work for a large real estate firm and are preparing 6 TB of home sales data lo be used for machine learning You will use SOL to transform the data and use BigQuery ML lo create a machine learning model. You plan to use the model for predictions against a raw dataset that has not been transformed. How should you set up your workflow in order to prevent skew at prediction time?",
      "options": [
        "Preprocess all data using Dataflow. At prediction time, use BigOuery\"s ML. EVALUATE clause without specifying any further transformations on the input data.",
        "Use a BigOuery to define your preprocessing logic. When creating your model, use the view as your model training data. At prediction lime, use BigQuery's ML EVALUATE clause without specifying any transformations on the raw input data.",
        "When creating your model, use BigQuerys TRANSFORM clause to define preprocessing stops. At prediction time, use BigQuery\"s ML. EVALUATE clause without specifying any transformations on the raw input data.",
        "When creating your model, use BigQuery's TRANSFORM clause to define preprocessing steps Before requesting predictions, use a saved query to transform your raw input data, and then use ML. EVALUATE"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_285",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You operate a database that stores stock trades and an application that retrieves average stock price for a given company over an adjustable window of time. The data is stored in Cloud Bigtable where the datetime of the stock trade is the beginning of the row key. Your application has thousands of concurrent users, and you notice that performance is starting to degrade as more stocks are added. What should you do to improve the performance of your application?",
      "options": [
        "Change the data pipeline to use BigQuery for storing stock trades, and update your application.",
        "Change the row key syntax in your Cloud Bigtable table to begin with the stock symbol.",
        "Use Cloud Dataflow to write summary of each day's stock trades to an Avro file on Cloud Storage. Update your application to read from Cloud Storage and Cloud Bigtable to compute the responses.",
        "Change the row key syntax in your Cloud Bigtable table to begin with a random number per second."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_286",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You've migrated a Hadoop job from an on-premises cluster to Dataproc and Good Storage. Your Spark job is a complex analytical workload fiat consists of many shuffling operations, and initial data are parquet toes (on average 200-400 MB size each) You see some degradation in performance after the migration to Dataproc so you'd like to optimize for it. Your organization is very cost-sensitive so you'd Idee to continue using Dataproc on preemptibles (with 2 non-preemptibles workers only) for this workload. What should you do?",
      "options": [
        "Increase the see of your parquet files to ensure them to be 1 GB minimum",
        "Switch from HDDs to SSDs. copy initial data from Cloud Storage to Hadoop Distributed File System (HDFS) run the Spark job and copy results back to Cloud Storage",
        "Switch to TFRecords format (appr 200 MB per We) instead of parquet files",
        "Switch from HODs to SSDs override the preemptible VMs configuration to increase the boot disk size"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_287",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You have data located in BigQuery that is used to generate reports for your company. You have noticed some weekly executive report fields do not correspond to format according to company standards for example, report errors include different telephone formats and different country code identifiers. This is a frequent issue, so you need to create a recurring job to normalize the data. You want a quick solution that requires no coding What should you do?",
      "options": [
        "Use BigQuery and GoogleSQL to normalize the data, and schedule recurring quenes in BigQuery.",
        "Use Cloud Data Fusion and Wrangler to normalize the data, and set up a recurring job.",
        "Use Dataflow SQL to create a job that normalizes the data, and that after the first run of the job, schedule the pipeline to execute recurrently.",
        "Create a Spark job and submit it to Dataproc Serverless."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_288",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "Your company has a hybrid cloud initiative. You have a complex data pipeline that moves data between cloud provider services and leverages services from each of the cloud providers. Which cloud- native service should you use to orchestrate the entire pipeline?",
      "options": [
        "Cloud Dataflow",
        "Cloud Composer",
        "Cloud Dataprep",
        "Cloud Dataproc"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_289",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "Your organization stores employee information in a BigQuery dataset. Your human resources (HR) admin team requires full access to the data, but the HR analyst team needs to conduct salary analysis without being able to access personally identifiable information (PII). You want to ensure that users have the correct level of access for their role managed through Dataplex, while reducing data duplication. What should you do?",
      "options": [
        "Create a new dataset and use Cloud Data Loss Prevention (Cloud DLP) to mask PII in the BigQuery table.",
        "Create an authorized view to limit data access based on a user role.",
        "Create and assign policy tags based on user role to the PII columns in BigQuery.",
        "Create a new dataset for salary analysis and use data masking to obfuscate all fields related to an individual."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_290",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You currently use a SQL-based tool to visualize your data stored in BigQuery The data visualizations require the use of outer joins and analytic functions. Visualizations must be based on data that is no less than 4 hours old. Business users are complaining that the visualizations are too slow to generate. You want to improve the performance of the visualization queries while minimizing the maintenance overhead of the data preparation pipeline. What should you do?",
      "options": [
        "Create views for the visualization queries. Reference the views in the data visualization tool.",
        "Create a Cloud Function instance to export the visualization query results as parquet files to a Cloud Storage bucket. Use Cloud Schedulerto trigger the Cloud Function every 4 hours. Reference the parquet files in the data visualization tool.",
        "Create materialized views for the visualization queries. Use the incremental updates capability of BigQuery materialized views to handlechanged data automatically. Reference the materialized views in the data visualization tool.",
        "Create materialized views with the allow_non_incremental_definition option set to true for the visualization queries. Specify the max_3taleness parameter to 4 hours and the enable_refresh parameter to true. Reference the materialized views in the data visualization tool."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_291",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are migrating a large number of files from a public HTTPS endpoint to Cloud Storage. The files are protected from unauthorized access using signed URLs. You created a TSV file that contains the list of object URLs and started a transfer job by using Storage Transfer Service. You notice that the job has run for a long time and eventually failed Checking the logs of the transfer job reveals that the job was running fine until one point, and then it failed due to HTTP 403 errors on the remaining files You verified that there were no changes to the source system You need to fix the problem to resume the migration process. What should you do?",
      "options": [
        "Set up Cloud Storage FUSE, and mount the Cloud Storage bucket on a Compute Engine Instance Remove the completed files from the TSV file Use a shell script to iterate through the TSV file and download the remaining URLs to the FUSE mount point.",
        "Create a new TSV file for the remaining files by generating signed URLs with a longer validity period.Split the TSV file into multiple smaller files and submit them as separate Storage Transfer Service jobs in parallel.",
        "Renew the TLS certificate of the HTTPS endpoint Remove the completed files from the TSV file and rerun the Storage Transfer Service job.",
        "Update the file checksums in the TSV file from using MD5 to SHA256. Remove the completed files from the TSV file and rerun the Storage Transfer Service job."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_292",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are running a Dataflow streaming pipeline, with Streaming Engine and Horizontal Autoscaling enabled. You have set the maximum number of workers to 1000. The input of your pipeline is Pub/Sub messages with notifications from Cloud Storage One of the pipeline transforms reads CSV files and emits an element for every CSV line. The Job performance is low. the pipeline is using only 10 workers, and you notice that the autoscaler is not spinning up additional workers. What should you do to improve performance?",
      "options": [
        "Use Dataflow Prime, and enable Right Fitting to increase the worker resources.",
        "Enable Vertical Autoscaling to let the pipeline use larger workers.",
        "Change the pipeline code, and introduce a Reshuffle step to prevent fusion.",
        "Update the job to increase the maximum number of workers."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_293",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You use a dataset in BigQuery for analysis. You want to provide third-party companies with access to the same dataset. You need to keep the costs of data sharing low and ensure that the data is current. What should you do?",
      "options": [
        "Create a Dataflow job that reads the data in frequent time intervals and writes it to the relevant BigQuery dataset or Cloud Storage bucket for third-party companies to use.",
        "Use Analytics Hub to control data access, and provide third party companies with access to the dataset",
        "Use Cloud Scheduler to export the data on a regular basis to Cloud Storage, and provide third-party companies with access to the bucket.",
        "Create a separate dataset in BigQuery that contains the relevant data to share, and provide third-party companies with access to the new dataset."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_294",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A TensorFlow machine learning model on Compute Engine virtual machines (n2-standard -32) takes two days to complete framing. The model has custom TensorFlow operations that must run partially on a CPU You want to reduce the training time in a cost-effective manner. What should you do?",
      "options": [
        "Train the model using a VM with a GPU hardware accelerator",
        "Change the VM type to e2 standard-32",
        "Change the VM type to n2-highmem-32",
        "Train the model using a VM with a TPU hardware accelerator"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_295",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are administering shared BigQuery datasets that contain views used by multiple teams in your organization. The marketing team is concerned about the variability of their monthly BigQuery analytics spend using the on-demand billing model. You need to help the marketing team establish a consistent BigQuery analytics spend each month. What should you do?",
      "options": [
        "Establish a BigQuery quota for the marketing team, and limit the maximum number of bytes scanned each day.",
        "Create a BigQuery Standard pay-as-you go reservation with a baseline of 0 slots and autoscaling set to 500 for the marketing team, and bill them back accordingly.",
        "Create a BigQuery Enterprise reservation with a baseline of 250 slots and autoscaling set to 500 for the marketing team, and bill them back accordingly.",
        "Create a BigQuery reservation with a baseline of 500 slots with no autoscaling for the marketing team, and bill them back accordingly."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_296",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are using Workflows to call an API that returns a 1 KB JSON response, apply some complex business logic on this response, wait for the logic to complete, and then perform a load from a Cloud Storage file to BigQuery. The Workflows standard library does not have sufficient capabilities to perform your complex logic, and you want to use Python's standard library instead. You want to optimize your workflow for simplicity and speed of execution. What should you do?",
      "options": [
        "Invoke a subworkflow in Workflows to apply the logic on your JSON file.",
        "Create a Cloud Composer environment and run the logic in Cloud Composer.",
        "Invoke a Cloud Function instance that uses Python to apply the logic on your JSON file.",
        "Create a Dataproc cluster, and use PySpark to apply the logic on your JSON file."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_297",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are architecting a data transformation solution for BigQuery. Your developers are proficient with SOL and want to use the ELT development technique. In addition, your developers need an intuitive coding environment and the ability to manage SQL as code. You need to identify a solution for your developers to build these pipelines. What should you do?",
      "options": [
        "Use Dataform to build, manage, and schedule SQL pipelines.",
        "Use Cloud Composer to load data and run SQL pipelines by using the BigQuery job operators.",
        "Use Data Fusion to build and execute ETL pipelines",
        "Use Dataflow jobs to read data from Pub/Sub, transform the data, and load the data to BigQuery."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_298",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are testing a Dataflow pipeline to ingest and transform text files. The files are compressed gzip, errors are written to a dead-letter queue, and you are using Sidelnputs to join data You noticed that the pipeline is taking longer to complete than expected, what should you do to expedite the Dataflow job?",
      "options": [
        "Reduce the batch size",
        "Use CoGroupByKey instead of the Sidelnput",
        "Switch to compressed Avro files",
        "Retry records that throw an error"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_299",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You need to modernize your existing on-premises data strategy. Your organization currently uses. * Apache Hadoop clusters for processing multiple large data sets, including on-premises Hadoop Distributed File System (HDFS) for data replication. * Apache Airflow to orchestrate hundreds of ETL pipelines with thousands of job steps. You need to set up a new architecture in Google Cloud that can handle your Hadoop workloads and requires minimal changes to your existing orchestration processes. What should you do?",
      "options": [
        "Use Dataproc to migrate your Hadoop clusters to Google Cloud, and Cloud Storage to handle any HDFS use cases. Use Cloud Data Fusion to visually design and deploy your ETL pipelines.",
        "Use Dataproc to migrate Hadoop clusters to Google Cloud, and Cloud Storage to handle any HDFS use cases Convert your ETL pipelines to Dataflow.",
        "Use Bigtable for your large workloads, with connections to Cloud Storage to handle any HDFS use cases Orchestrate your pipelines with Cloud Composer.",
        "Use Dataproc to migrate Hadoop clusters to Google Cloud, and Cloud Storage to handle any HDFS use cases.Orchestrate your pipelines with Cloud Composer.."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_300",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are designing a pipeline that publishes application events to a Pub/Sub topic. You need to aggregate events across hourly intervals before loading the results to BigQuery for analysis. Your solution must be scalable so it can process and load large volumes of events to BigQuery. What should you do?",
      "options": [
        "Schedule a Cloud Function to run hourly, pulling all avertable messages from the Pub/Sub topic and performing the necessary aggregations",
        "Create a streaming Dataflow job to continually read from the Pub/Sub topic and perform the necessary aggregations using tumbling windows",
        "Schedule a batch Dataflow job to run hourly, pulling all available messages from the Pub-Sub topic and performing the necessary aggregations",
        "Create a Cloud Function to perform the necessary data processing that executes using the Pub/Sub trigger every time a new message is published to the topic."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_301",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are migrating a table to BigQuery and are deeding on the data model. Your table stores information related to purchases made across several store locations and includes information like the time of the transaction, items purchased, the store ID and the city and state in which the store is located You frequently query this table to see how many of each item were sold over the past 30 days and to look at purchasing trends by state city and individual store. You want to model this table to minimize query time and cost. What should you do?",
      "options": [
        "Partition by transaction tome cluster by store ID first, then city, then stale",
        "Partition by transaction time; cluster by state first, then city then store ID",
        "Top-level cluster by stale first, then city then store",
        "Top-level cluster by store ID first, then city then state."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_302",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You work for a large financial institution that is planning to use Dialogflow to create a chatbot for the company's mobile app You have reviewed old chat logs and lagged each conversation for intent based on each customer's stated intention for contacting customer service About 70% of customer requests are simple requests that are solved within 10 intents The remaining 30% of inquiries require much longer, more complicated requests Which intents should you automate first?",
      "options": [
        "Automate a blend of the shortest and longest intents to be representative of all intents",
        "Automate intents in places where common words such as \"payment\" appear only once so the software isn't confused",
        "Automate the 10 intents that cover 70% of the requests so that live agents can handle more complicated requests",
        "Automate the more complicated requests first because those require more of the agents' time"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_303",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "Your startup has a web application that currently serves customers out of a single region in Asia. You are targeting funding that will allow your startup lo serve customers globally. Your current goal is to optimize for cost, and your post-funding goat is to optimize for global presence and performance. You must use a native JDBC driver. What should you do?",
      "options": [
        "Use a Cloud SQL for PostgreSQL zonal instance first and Bigtable with US. Europe, and Asia after securing funding.",
        "Use a Cloud SQL for PostgreSQL highly available instance first, and bagtable with US. Europe, and Asiareplication alter securing funding",
        "Use a Cloud SOL for PostgreSQL zonal instance first, and Cloud SOL for PostgreSQL with highly available configuration after securing funding.",
        "Use Cloud Spanner to configure a single region instance initially. and then configure multi-region C oud Spanner instances after securing funding."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_304",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You are building a new application that you need to collect data from in a scalable way. Data arrives continuously from the application throughout the day, and you expect to generate approximately 150 GB of JSON data per day by the end of the year. Your requirements are: Decoupling producer from consumer Space and cost-efficient storage of the raw ingested data, which is to be stored indefinitely Near real-time SQL query Maintain at least 2 years of historical data, which will be queried with SQ Which pipeline should you use to meet these requirements?",
      "options": [
        "Create an application that publishes events to Cloud Pub/Sub, and create Spark jobs on Cloud Dataproc to convert the JSON data to Avro format, stored on HDFS on Persistent Disk.",
        "Create an application that writes to a Cloud SQL database to store the data. Set up periodic exports of the database to write to Cloud Storage and load into BigQuery.",
        "Create an application that provides an API. Write a tool to poll the API and write data to Cloud Storage as gzipped JSON files.",
        "Create an application that publishes events to Cloud Pub/Sub, and create a Cloud Dataflow pipeline that transforms the JSON event payloads to Avro, writing the data to Cloud Storage and BigQuery."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_305",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "An online brokerage company requires a high volume trade processing architecture. You need to create a secure queuing system that triggers jobs. The jobs will run in Google Cloud and cat thecompany's Python API to execute trades. You need to efficiently implement a solution. What should you do?",
      "options": [
        "Use Cloud Composer to subscribe to a Pub/Sub tope and can the Python API.",
        "Write an application that makes a queue in a NoSQL database",
        "Write an application hosted on a Compute Engine instance that makes a push subscription to the Pub /Sub topic",
        "Use a Pub/Sub push subscription to trigger a Cloud Function to pass the data to tie Python API."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_306",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You need to choose a database for a new project that has the following requirements: Fully managed Able to automatically scale up Transactionally consistent Able to scale up to 6 TB Able to be queried using SQL Which database do you choose?",
      "options": [
        "Cloud Spanner",
        "Cloud SQL",
        "Cloud Bigtable",
        "Cloud Datastore"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_307",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You designed a data warehouse in BigQuery to analyze sales data. You want a self-serving, low- maintenance, and cost-effective solution to share the sales dataset to other business units in your organization. What should you do?",
      "options": [
        "Enable the other business units' projects to access the authorized views of the sales dataset.",
        "Create and share views with the users in the other business units.",
        "Create an Analytics Hub private exchange, and publish the sales dataset.",
        "Use the BigQuery Data Transfer Service to create a schedule that copies the sales dataset to the other business units' projects."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_308",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "You need to create a new transaction table in Cloud Spanner that stores product sales dat You are deciding what to use as a primary key. From a performance perspective, which strategy should you choose?",
      "options": [
        "The current epoch time",
        "A concatenation of the product name and the current epoch time",
        "A random universally unique identifier number (version 4 UUID)",
        "The original order identification number from the sales system, which is a monotonically increasing integer"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_309",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "Data Analysts in your company have the Cloud IAM Owner role assigned to them in their projects to allow them to work with multiple GCP products in their projects. Your organization requires that all BigQuery data access logs be retained for 6 months. You need to ensure that only audit personnel in your company can access the data access logs for all projects. What should you do?",
      "options": [
        "Enable data access logs in each Data Analyst's project. Restrict access to Stackdriver Logging via Cloud IAM roles.",
        "Export the data access logs via a project-level export sink to a Cloud Storage bucket in the Data Analysts' projects. Restrict access to the Cloud Storage bucket.",
        "Export the data access logs via a project-level export sink to a Cloud Storage bucket in a newly created projects for audit logs. Restrict access to the project with the exported logs.",
        "Export the data access logs via an aggregated export sink to a Cloud Storage bucket in a newly created project for audit logs. Restrict access to the project that contains the exported logs."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "50 questions in this batch.",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_310",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "Each analytics team in your organization is running BigQuery jobs in their own projects. You want to enable each team to monitor slot usage within their projects. What should you do?",
      "options": [
        "Create a Stackdriver Monitoring dashboard based on the BigQuery metric query/scanned_bytes",
        "Create a Stackdriver Monitoring dashboard based on the BigQuery metric slots/allocated_for_project",
        "Create a log export for each project, capture the BigQuery job execution logs, create a custom metric based on the totalSlotMs, and create a Stackdriver Monitoring dashboard based on the custom metric",
        "Create an aggregated log export at the organization level, capture the BigQuery job execution logs, create a custom metric based on the totalSlotMs, and create a Stackdriver Monitoring dashboard based on the custom metric"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_311",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are operating a streaming Cloud Dataflow pipeline. Your engineers have a new version of the pipeline with a different windowing algorithm and triggering strategy. You want to update the running pipeline with the new version. You want to ensure that no data is lost during the update. What should you do?",
      "options": [
        "Update the Cloud Dataflow pipeline inflight by passing the --update option with the --jobName set to the existing job name",
        "Update the Cloud Dataflow pipeline inflight by passing the --update option with the --jobName set to a new unique job name",
        "Stop the Cloud Dataflow pipeline with the Cancel option. Create a new Cloud Dataflow job with the updated code",
        "Stop the Cloud Dataflow pipeline with the Drain option. Create a new Cloud Dataflow job with the updated code"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_312",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You need to move 2 PB of historical data from an on-premises storage appliance to Cloud Storage within six months, and your outbound network capacity is constrained to 20 Mb/sec. How should you migrate this data to Cloud Storage?",
      "options": [
        "Use Transfer Appliance to copy the data to Cloud Storage",
        "Use gsutil cp J to compress the content being uploaded to Cloud Storage",
        "Create a private URL for the historical data, and then use Storage Transfer Service to copy the data to Cloud Storage",
        "Use trickle or ionice along with gsutil cp to limit the amount of bandwidth gsutil utilizes to less than 20 Mb/sec so it does not interfere with the production traffic"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_313",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You have several Spark jobs that run on a Cloud Dataproc cluster on a schedule. Some of the jobs run in sequence, and some of the jobs run concurrently. You need to automate this process. What should you do?",
      "options": [
        "Create a Cloud Dataproc Workflow Template",
        "Create an initialization action to execute the jobs",
        "Create a Directed Acyclic Graph in Cloud Composer",
        "Create a Bash script that uses the Cloud SDK to create a cluster, execute jobs, and then tear down the cluster"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_314",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You have a Standard Tier Memorystore for Redis instance deployed in a production environment. You need to simulate a Redis instance failover in the most accurate disaster recovery situation, and ensure that the failover has no impact on production data. What should you do?",
      "options": [
        "Initiate a manual failover by using the limited-data-loss data protection mode to the Memorystore for Redis instance in theproduction environment.",
        "Create a Standard Tier Memorystore for Redis instance in a development environment. Initiate a manual failover by using the force-data-loss data protection mode.",
        "Create a Standard Tier Memorystore for Redis instance in the development environment. Initiate a manual failover by using the limited-data-loss data protection mode.",
        "Increase one replica to Redis instance in production environment. Initiate a manual failover by using the force-data-loss dataprotection mode."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_315",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are designing a real-time system for a ride hailing app that identifies areas with high demand for rides to effectively reroute available drivers to meet the demand. The system ingests data from multiple sources to Pub /Sub. processes the data, and stores the results for visualization and analysis in real-time dashboards. The data sources include driver location updates every 5 seconds and app-based booking events from riders. The data processing involves real-time aggregation of supply and demand data for the last 30 seconds, every 2 seconds, and storing the results in a low-latency system for visualization. What should you do?",
      "options": [
        "Group the data by using a tumbling window in a Dataflow pipeline, and write the aggregated data to Memorystore",
        "Group the data by using a hopping window in a Dataflow pipeline, and write the aggregated data to Memorystore",
        "Group the data by using a hopping window in a Dataflow pipeline, and write the aggregated data to BigQuery.",
        "Group the data by using a session window in a Dataflow pipeline, and write the aggregated data to BigQuery."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_316",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You need to analyze user clickstream data to personalize content recommendations. The data arrives continuously and needs to be processed with low latency, including transformations such as sessionization (grouping clicks by user within a time window) and aggregation of user activity. You need to identify a scalable solution to handle millions of events each second and be resilient to late-arriving data. What should you do?",
      "options": [
        "Use Cloud Storage for ingestion, Dataproc with Apache Spark for batch processing, and BigQuery for storage and analytics.",
        "Use Cloud Data Fusion for ingestion and transformation, and Cloud SQL for storage and analytics.",
        "Use Pub/Sub for ingestion, Dataflow with Apache Beam for processing, and BigQuery for storage and analytics.",
        "Use Firebase Realtime Database for ingestion and storage, and Cloud Run functions for processing and analytics."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_317",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You want to encrypt the customer data stored in BigQuery. You need to implement for-user crypto-deletion on data stored in your tables. You want to adopt native features in Google Cloud to avoid custom solutions. What should you do?",
      "options": [
        "Create a customer-managed encryption key (CMEK) in Cloud KMS. Associate the key to the table while creating the table.",
        "Create a customer-managed encryption key (CMEK) in Cloud KMS. Use the key to encrypt data before storing in BigQuery.",
        "Implement Authenticated Encryption with Associated Data (AEAD) BigQuery functions while storing your data in BigQuery.",
        "Encrypt your data during ingestion by using a cryptographic library supported by your ETL pipeline."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_318",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You need to compose visualization for operations teams with the following requirements: Telemetry must include data from all 50,000 installations for the most recent 6 weeks (sampling once every minute) The report must not be more than 3 hours delayed from live data. The actionable report should only show suboptimal links. Most suboptimal links should be sorted to the top. Suboptimal links can be grouped and filtered by regional geography. User response time to load the report must be <5 seconds. You create a data source to store the last 6 weeks of data, and create visualizations that allow viewers to see multiple date ranges, distinct geographic regions, and unique installation types. You always show the latest data without any changes to your visualizations. You want to avoid creating and updating new visualizations each month. What should you do?",
      "options": [
        "Export the data to a spreadsheet, compose a series of charts and tables, one for each possiblecombination of criteria, and spread them across multiple tabs.",
        "Look through the current data and compose a series of charts and tables, one for each possiblecombination of criteria.",
        "Look through the current data and compose a small set of generalized charts and tables bound to criteria filters that allow value selection.",
        "Load the data into relational database tables, write a Google App Engine application that queries all rows, summarizes the data across each criteria, and then renders results using the Google Charts and visualization API."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_319",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You have 100 GB of data stored in a BigQuery table. This data is outdated and will only be accessed one or two times a year for analytics with SQL. For backup purposes, you want to store this data to be immutable for 3 years. You want to minimize storage costs. What should you do?",
      "options": [
        "1 Perform a BigQuery export to a Cloud Storage bucket with archive storage class.2 Set a locked retention policy on the bucket.3. Create a BigQuery external table on the exported files.",
        "1 Create a BigQuery table clone.2. Query the clone when you need to perform analytics.",
        "1 Create a BigQuery table snapshot.2 Restore the snapshot when you need to perform analytics.",
        "1. Perform a BigQuery export to a Cloud Storage bucket with archive storage class.2 Enable versionmg on the bucket.3. Create a BigQuery external table on the exported files."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_320",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You manage your company's BigQuery data warehouse. You need to implement a solution that enables the data science team to modify data for experiments without affecting the original tables, while minimizing additional storage costs. What should you do?",
      "options": [
        "Create table clones of all the tables for the data science team to use.",
        "Set up authorized views in a shared dataset that reference the original tables.",
        "Create snapshots of all the tables and restore them for the data science team to use.",
        "Create a separate dataset with full copies of all the tables for each member of the data science team."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_321",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are planning to use Cloud Storage as pad of your data lake solution. The Cloud Storage bucket will contain objects ingested from external systems. Each object will be ingested once, and the access patterns of individual objects will be random. You want to minimize the cost of storing and retrieving these objects. You want to ensure that any cost optimization efforts are transparent to the users and applications. What should you do?",
      "options": [
        "Create a Cloud Storage bucket with an Object Lifecycle Management policy to transition objects from Standard to Coldline storage class if an object age reaches 30 days.",
        "Create two Cloud Storage buckets. Use the Standard storage class for the first bucket, and use the Coldline storage class for the second bucket. Migrate objects from the first bucket to the second bucket after 30 days.",
        "Create a Cloud Storage bucket with Autoclass enabled.",
        "Create a Cloud Storage bucket with an Object Lifecycle Management policy to transition objects from Standard to Coldline storage class if an object is not live."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_322",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You currently have transactional data stored on-premises in a PostgreSQL database. To modernize your data environment, you want to run transactional workloads and support analytics needs with a single database. You need to move to Google Cloud without changing database management systems, and minimize cost and complexity. What should you do?",
      "options": [
        "Migrate your workloads to AlloyDB for PostgreSQL.",
        "Migrate your PostgreSQL database to Cloud SQL for PostgreSQL.",
        "Migrate to BigQuery to optimize analytics.",
        "Migrate and modernize your database with Cloud Spanner."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_323",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You work for a large ecommerce company. You store your customers order data in Bigtable. You have a garbage collection policy set to delete the data after 30 days and the number of versions is set to 1. When the data analysts run a query to report total customer spending, the analysts sometimes see customer data that is older than 30 days. You need to ensure that the analysts do not see customer data older than 30 days while minimizing cost and overhead. What should you do?",
      "options": [
        "Use a timestamp range filter in the query to fetch the customer's data for a specific range.",
        "Set the expiring values of the column families to 29 days and keep the number of versions to 1.",
        "Schedule a job daily to scan the data in the table and delete data older than 30 days.",
        "Set the expiring values of the column families to 30 days and set the number of versions to 2."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_324",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are creating a new pipeline in Google Cloud to stream IoT data from Cloud Pub/Sub through Cloud Dataflow to BigQuery. While previewing the data, you notice that roughly 2% of the data appears to be corrupt. You need to modify the Cloud Dataflow pipeline to filter out this corrupt data. What should you do?",
      "options": [
        "Add a GroupByKey transform in Cloud Dataflow to group all of the valid data together and discard the rest.",
        "Add a Partition transform in Cloud Dataflow to separate valid data from corrupt data.",
        "Add a ParDo transform in Cloud Dataflow to discard corrupt elements.",
        "Add a SideInput that returns a Boolean if the element is corrupt."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_325",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "The Development and External teams nave the project viewer Identity and Access Management (1AM) role m a folder named Visualization. You want the Development Team to be able to read data from both Cloud Storage and BigQuery, but the External Team should only be able to read data from BigQuery. What should you do?",
      "options": [
        "Remove Cloud Storage IAM permissions to the External Team on the acme-raw-data project",
        "Create a VPC Service Controls perimeter containing both protects and Cloud Storage as a restricted API. Add the Development Team users to the perimeter's Access Level",
        "Create a VPC Service Controls perimeter containing both protects and BigQuery as a restricted API Add the External Team users to the perimeter s Access Level",
        "Create Virtual Private Cloud (VPC) firewall rules on the acme-raw-data protect that deny all Ingress traffic from the External Team CIDR range"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_326",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are designing the architecture of your application to store data in Cloud Storage. Your application consists of pipelines that read data from a Cloud Storage bucket that contains raw data, and write the data to a second bucket after processing. You want to design an architecture with Cloud Storage resources that are capable of being resilient if a Google Cloud regional failure occurs. You want to minimize the recovery point objective (RPO) if a failure occurs, with no impact on applications that use the stored data. What should you do?",
      "options": [
        "Adopt a dual-region Cloud Storage bucket, and enable turbo replication in your architecture.",
        "Adopt two regional Cloud Storage buckets, and update your application to write the output on both buckets.",
        "Adopt two regional Cloud Storage buckets, and create a daily task to copy from one bucket to the other.",
        "Adopt multi-regional Cloud Storage buckets in your architecture."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_327",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You have a BigQuery dataset named \"customers\". All tables will be tagged by using a Data Catalog tag template named \"gdpr\". The template contains one mandatory field, \"has sensitive data~. with a boolean value. All employees must be able to do a simple search and find tables in the dataset that have either true or false in the \"has sensitive data\" field. However, only the Human Resources (HR) group should be able to see the data inside the tables for which \"hass-ensitive-data\" is true. You give the all employees group the bigquery. metadataViewer and bigquery.connectionUser roles on the dataset. You want to minimize configuration overhead. What should you do next?",
      "options": [
        "Create the \"gdpr\" tag template with public visibility. Assign the bigquery. dataViewer role to the HR group on the tables that containsensitive data.",
        "Create the \"gdpr\" tag template with public visibility. Assign the datacatalog. tagTemplateViewer role on this tag to the all employees.group, and assign the bijquery.dataViewer role to the HR group on the tables that contain sensitive data.",
        "Create the ~gdpr\" tag template with private visibility. Assign the datacatalog. tagTemplateViewer role on this tag to the all employeesgroup, and assign the bigquery.dataViewer role to the HR group on the tables that contain sensitive data.",
        "Create the \"gdpr\" tag template with private visibility. Assign the bigquery -dataViewer role to the HR group on the tables that contain sensitive data."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_328",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are planning to migrate your current on-premises Apache Hadoop deployment to the cloud. You need to ensure that the deployment is as fault-tolerant and cost-effective as possible for long- running batch jobs. You want to use a managed service. What should you do?",
      "options": [
        "Deploy a Cloud Dataproc cluster. Use a standard persistent disk and 50% preemptible workers. Store data in Cloud Storage, and change references in scripts from hdfs:// to gs://",
        "Install Hadoop and Spark on a 10-node Compute Engine instance group with standard instances. Install the Cloud Storage connector, and store the data in Cloud Storage. Change references in scripts from hdfs:// to gs://",
        "Install Hadoop and Spark on a 10-node Compute Engine instance group with preemptible instances.Store data in HDFS. Change references in scripts from hdfs:// to gs://",
        "Deploy a Cloud Dataproc cluster. Use an SSD persistent disk and 50% preemptible workers. Store data in Cloud Storage, and change references in scripts from hdfs:// to gs://"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_329",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You want to migrate an Apache Spark 3 batch job from on-premises to Google Cloud. You need to minimally change the job so that the job reads from Cloud Storage and writes the result to BigQuery. Your job is optimized for Spark, where each executor has 8 vCPU and 16 GB memory, and you want to be able to choose similar settings. You want to minimize installation and management effort to run your job. What should you do?",
      "options": [
        "Execute the job as part of a deployment in a new Google Kubernetes Engine cluster.",
        "Execute as a Dataproc Serverless job.",
        "Execute the job in a new Dataproc cluster.",
        "Execute the job from a new Compute Engine VM."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_330",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You receive data files in CSV format monthly from a third party. You need to cleanse this data, but every third month the schema of the files changes. Your requirements for implementing these transformations include: Executing the transformations on a schedule Enabling non-developer analysts to modify transformations Providing a graphical tool for designing transformations What should you do?",
      "options": [
        "Help the analysts write a Cloud Dataflow pipeline in Python to perform the transformation. The Python code should be stored in a revision control system and modified as the incoming data's schema changes",
        "Use Cloud Dataprep to build and maintain the transformation recipes, and execute them on a scheduled basis",
        "Use Apache Spark on Cloud Dataproc to infer the schema of the CSV file before creating a Dataframe.Then implement the transformations in Spark SQL before writing the data out to Cloud Storage and loading into BigQuery",
        "Load each month's CSV data into BigQuery, and write a SQL query to transform the data to a standard schema. Merge the transformed tables together with a SQL query"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_331",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are developing a model to identify the factors that lead to sales conversions for your customers. You have completed processing your data. You want to continue through the model development lifecycle. What should you do next?",
      "options": [
        "Delineate what data will be used for testing and what will be used for training the model.",
        "Test and evaluate your model on your curated data to determine how well the model performs.",
        "Use your model to run predictions on fresh customer input data.",
        "Monitor your model performance, and make any adjustments needed."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_332",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are designing a data mesh on Google Cloud with multiple distinct data engineering teams building data products. The typical data curation design pattern consists of landing files in Cloud Storage, transforming raw data in Cloud Storage and BigQuery datasets. and storing the final curated data product in BigQuery datasets You need to configure Dataplex to ensure that each team can access only the assets needed to build their data products. You also need to ensure that teams can easily share the curated data product. What should you do?",
      "options": [
        "1 Create a Dataplex virtual lake for each data product, and create multiple zones for landing, raw. and curated data. 2. Provide the data engineering teams with full access to the virtual lake assigned to their data product.",
        "1 Create a single Dataplex virtual lake and create a single zone to contain landing, raw. and curated data. 2 Build separate assets for each data product within the zone.3. Assign permissions to the data engineering teams at the zone level.",
        "1 Create a Dataplex virtual lake for each data product, and create a single zone to contain landing, raw, and curated data.2. Provide the data engineering teams with full access to the virtual lake assigned to their data product.",
        "1 Create a single Dataplex virtual lake and create a single zone to contain landing, raw. and curated data. 2 Provide each data engineering team access to the virtual lake."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_333",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You have a data stored in BigQuery. The data in the BigQuery dataset must be highly available. You need to define a storage, backup, and recovery strategy of this data that minimizes cost. How should you configure the BigQuery table?",
      "options": [
        "Set the BigQuery dataset to be regional. In the event of an emergency, use a point-in-time snapshot to recover the data.",
        "Set the BigQuery dataset to be regional. Create a scheduled query to make copies of the data to tables suffixed with the time of the backup. In the event of an emergency, use the backup copy of the table.",
        "Set the BigQuery dataset to be multi-regional. In the event of an emergency, use a point-in-time snapshot to recover the data.",
        "Set the BigQuery dataset to be multi-regional. Create a scheduled query to make copies of the data to tables suffixed with the time of the backup. In the event of an emergency, use the backup copy of the table."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_334",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "Your platform on your on-premises environment generates 100 GB of data daily, composed of millions of structured JSON text files. Your on-premises environment cannot be accessed from the public internet. You want to use Google Cloud products to query and explore the platform data. What should you do?",
      "options": [
        "Use Cloud Scheduler to copy data daily from your on-premises environment to Cloud Storage. Use the BigQuery Data Transfer Service to import data into BigQuery.",
        "Use a Transfer Appliance to copy data from your on-premises environment to Cloud Storage. Use the BigQuery Data Transfer Service to import data into BigQuery.",
        "Use Transfer Service for on-premises data to copy data from your on-premises environment to Cloud Storage. Use the BigQuery Data Transfer Service to import data into BigQuery.",
        "Use the BigQuery Data Transfer Service dataset copy to transfer all data into BigQuery."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_335",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You need to migrate a Redis database from an on-premises data center to a Memorystore for Redis instance. You want to follow Google-recommended practices and perform the migration for minimal cost, time and effort. What should you do?",
      "options": [
        "Make an RDB backup of the Redis database, use the gsutil utility to copy the RDB file into a Cloud Storage bucket, and then import the RDB file into the Memorystore for Redis instance.",
        "Make a secondary instance of the Redis database on a Compute Engine instance and then perform a live cutover.",
        "Create a Dataflow job to read the Redis database from the on-premises data center and write the data to a Memorystore for Redis instance.",
        "Write a shell script to migrate the Redis data and create a new Memorystore for Redis instance."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_336",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You use BigQuery as your centralized analytics platform. New data is loaded every day, and an ETL pipeline modifies the original data and prepares it for the final users. This ETL pipeline is regularly modified and can generate errors, but sometimes the errors are detected only after 2 weeks. You need to provide a method to recover from these errors, and your backups should be optimized for storage costs. How should you organize your data in BigQuery and store your backups?",
      "options": [
        "Organize your data in a single table, export, and compress and store the BigQuery data in Cloud Storage.",
        "Organize your data in separate tables for each month, and export, compress, and store the data in Cloud Storage.",
        "Organize your data in separate tables for each month, and duplicate your data on a separate dataset in BigQuery.",
        "Organize your data in separate tables for each month, and use snapshot decorators to restore the table to a time prior to the corruption."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_337",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You have a data processing application that runs on Google Kubernetes Engine (GKE). Containers need to be launched with their latest available configurations from a container registry. Your GKE nodes need to have GPUs, local SSDs, and 8 Gbps bandwidth. You want to efficiently provision the data processing infrastructure and manage the deployment process. What should you do?",
      "options": [
        "Use Compute Engine startup scripts to pull container images, and use gcloud commands to provision the infrastructure.",
        "Use Cloud Build to schedule a job using Terraform build to provision the infrastructure and launch with the most current container images.",
        "Use GKE to autoscale containers, and use gcloud commands to provision the infrastructure.",
        "Use Dataflow to provision the data pipeline, and use Cloud Scheduler to run the job."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_338",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are developing a new deep learning model that predicts a customer's likelihood to buy on your ecommerce site. After running an evaluation of the model against both the original training data and new test data, you find that your model is overfitting the data. You want to improve the accuracy of the model when predicting new data. What should you do?",
      "options": [
        "Increase the size of the training dataset, and increase the number of input features.",
        "Increase the size of the training dataset, and decrease the number of input features.",
        "Reduce the size of the training dataset, and increase the number of input features.",
        "Reduce the size of the training dataset, and decrease the number of input features."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_339",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "Your company operates in three domains: airlines, hotels, and ride-hailing services. Each domain has two teams: analytics and data science, which create data assets in BigQuery with the help of a central data platform team. However, as each domain is evolving rapidly, the central data platform team is becoming a bottleneck. This is causing delays in deriving insights from data, and resulting in stale data when pipelines are not kept up to date. You need to design a data mesh architecture by using Dataplex to eliminate the bottleneck. What should you do?",
      "options": [
        "1. Create one lake for each team. Inside each lake, create one zone for each domain. 2. Attach each of the BigQuery datasets created by the individual teams as assets to the respective zone. 3. Have the central data platform team manage all zones\u2019 data assets.",
        "1. Create one lake for each team. Inside each lake, create one zone for each domain. 2. Attach each of the BigQuery datasets created by the individual teams as assets to the respective zone. 3. Direct each domain to manage their own zone\u2019s data assets.",
        "1. Create one lake for each domain. Inside each lake, create one zone for each team. 2. Attach each of the BigQuery datasets created by the individual teams as assets to the respective zone. 3. Direct each domain to manage their own lake\u2019s data assets.",
        "1. Create one lake for each domain. Inside each lake, create one zone for each team. 2. Attach each of the BigQuery datasets created by the individual teams as assets to the respective zone. 3. Have the central data platform team manage all lakes\u2019 data assets."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_340",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You have a BigQuery table that ingests data directly from a Pub/Sub subscription. The ingested data is encrypted with a Google-managed encryption key. You need to meet a new organization policy that requires you to use keys from a centralized Cloud Key Management Service (Cloud KMS) project to encrypt data at rest. What should you do?",
      "options": [
        "Use Cloud KMS encryption key with Dataflow to ingest the existing Pub/Sub subscription to the existing BigQuery table.",
        "Create a new BigQuery table by using customer-managed encryption keys (CMEK), and migrate the data from the old BigQuery table.",
        "Create a new Pub/Sub topic with CMEK and use the existing BigQuery table by using Google-managed encryption key.",
        "Create a new BigQuery table and Pub/Sub topic by using customer-managed encryption keys (CMEK), and migrate the data from the old BigQuery table."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_341",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You work for a financial institution that lets customers register online. As new customers register, their user data is sent to Pub/Sub before being ingested into BigQuery. For security reasons, you decide to redact your customers' Government issued Identification Number while allowing customer service representatives to view the original values when necessary. What should you do?",
      "options": [
        "Use BigQuery's built-in AEAD encryption to encrypt the SSN column. Save the keys to a new table that is only viewable by permissioned users.",
        "Use BigQuery column-level security. Set the table permissions so that only members of the Customer Service user group can see the SSN column.",
        "Before loading the data into BigQuery, use Cloud Data Loss Prevention (DLP) to replace input values with a cryptographic hash.",
        "Before loading the data into BigQuery, use Cloud Data Loss Prevention (DLP) to replace input values with a cryptographic format-preserving encryption token."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_342",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You have a table that contains millions of rows of sales data, partitioned by date. Various applications and users query this data many times a minute. The query requires aggregating values by using AVG, MAX, and SUM, and does not require joining to other tables. The required aggregations are only computed over the past year of data, though you need to retain full historical data in the base tables. You want to ensure that the query results always include the latest data from the tables, while also reducing computation cost, maintenance overhead, and duration. What should you do?",
      "options": [
        "Create a materialized view to aggregate the base table data. Include a filter clause to specify the last one year of partitions.",
        "Create a materialized view to aggregate the base table data. Configure a partition expiration on the base table to retain only the last one year of partitions.",
        "Create a view to aggregate the base table data. Include a filter clause to specify the last year of partitions.",
        "Create a new table that aggregates the base table data. Include a filter clause to specify the last year of partitions. Set up a scheduled query to recreate the new table every hour."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_343",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You decided to use Cloud Datastore to ingest vehicle telemetry data in real time. You want to build a storage system that will account for the long-term data growth, while keeping the costs low. You also want to create snapshots of the data periodically, so that you can make a point-in-time (PIT) recovery, or clone a copy of the data for Cloud Datastore in a different environment. You want to archive these snapshots for a long time. Which two methods can accomplish this? (Choose two.)",
      "options": [
        "Use managed export, and store the data in a Cloud Storage bucket using Nearline or Coldline class.",
        "Use managed export, and then import to Cloud Datastore in a separate project under a unique namespace reserved for that export.",
        "Use managed export, and then import the data into a BigQuery table created just for that export, and delete temporary export files.",
        "Write an application that uses Cloud Datastore client libraries to read all the entities. Treat each entity as a BigQuery table row via BigQuery streaming insert. Assign an export timestamp for each export, and attach it as an extra column for each row. Make sure that the BigQuery table is partitioned using the export timestamp column.",
        "Write an application that uses Cloud Datastore client libraries to read all the entities. Format the exported data into a JSON file. Apply compression before storing the data in Cloud Source Repositories."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_344",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are migrating a table to BigQuery and are deciding on the data model. Your table stores information related to purchases made across several store locations and includes information like the time of the transaction, items purchased, the store ID, and the city and state in which the store is located. You frequently query this table to see how many of each item were sold over the past 30 days and to look at purchasing trends by state, city, and individual store. How would you model this table for the best query performance?",
      "options": [
        "Partition by transaction time; cluster by state first, then city, then store ID.",
        "Partition by transaction time; cluster by store ID first, then city, then state.",
        "Top-level cluster by state first, then city, then store ID.",
        "Top-level cluster by store ID first, then city, then state."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_345",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "(question text unavailable)",
      "options": [
        "1. Create a metrics column in the sensors table. 2. Set RECORD type and REPEATED mode for the metrics column. 3. Use an UPDATE statement every 30 seconds to add new metrics.",
        "1. Create a metrics column in the sensors table. 2. Set RECORD type and REPEATED mode for the metrics column. 3. Use an INSERT statement every 30 seconds to add new metrics.",
        "1. Create a metrics table partitioned by timestamp. 2. Create a sensorId column in the metrics table, that points to the id column in the sensors table. 3. Use an INSERT statement every 30 seconds to append new metrics to the metrics table. 4. Join the two tables, if needed, when running the analytical query.",
        "1. Create a metrics table partitioned by timestamp. 2. Create a sensorId column in the metrics table, which points to the id column in the sensors table. 3. Use an UPDATE statement every 30 seconds to append new metrics to the metrics table. 4. Join the two tables, if needed, when running the analytical query."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_346",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You have developed three data processing jobs. One executes a Cloud Dataflow pipeline that transforms data uploaded to Cloud Storage and writes results to BigQuery. The second ingests data from on-premises servers and uploads it to Cloud Storage. The third is a Cloud Dataflow pipeline that gets information from third-party data providers and uploads the information to Cloud Storage. You need to be able to schedule and monitor the execution of these three workflows and manually execute them when needed. What should you do?",
      "options": [
        "Create a Direct Acyclic Graph in Cloud Composer to schedule and monitor the jobs.",
        "Use Stackdriver Monitoring and set up an alert with a Webhook notification to trigger the jobs.",
        "Develop an App Engine application to schedule and request the status of the jobs using GCP API calls.",
        "Set up cron jobs in a Compute Engine instance to schedule and monitor the pipelines using GCP API calls."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_347",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A TensorFlow machine learning model on Compute Engine virtual machines (n2-standard-32) takes two days to complete training. The model has custom TensorFlow operations that must run partially on a CPU. You want to reduce the training time in a cost-effective manner. What should you do?",
      "options": [
        "Change the VM type to n2-highmem-32.",
        "Change the VM type to e2-standard-32.",
        "Train the model using a VM with a GPU hardware accelerator.",
        "Train the model using a VM with a TPU hardware accelerator."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_348",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You migrated your on-premises Apache Hadoop Distributed File System (HDFS) data lake to Cloud Storage. The data scientist team needs to process the data by using Apache Spark and SQL. Security policies need to be enforced at the column level. You need a cost-effective solution that can scale into a data mesh. What should you do?",
      "options": [
        "1. Deploy a long-living Dataproc cluster with Apache Hive and Ranger enabled. 2. Configure Ranger for column level security. 3. Process with Dataproc Spark or Hive SQL.",
        "1. Define a BigLake table. 2. Create a taxonomy of policy tags in Data Catalog. 3. Add policy tags to columns. 4. Process with the Spark-BigQuery connector or BigQuery SQL.",
        "1. Load the data to BigQuery tables. 2. Create a taxonomy of policy tags in Data Catalog. 3. Add policy tags to columns. 4. Process with the Spark-BigQuery connector or BigQuery SQL.",
        "1. Apply an Identity and Access Management (IAM) policy at the file level in Cloud Storage. 2. Define a BigQuery external table for SQL processing. 3. Use Dataproc Spark to process the Cloud Storage files."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_349",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are a BigQuery admin supporting a team of data consumers who run ad hoc queries and downstream reporting in tools such as Looker. All data and users are combined under a single organizational project. You recently noticed some slowness in query results and want to troubleshoot where the slowdowns are occurring. You think that there might be some job queuing or slot contention occurring as users run jobs, which slows down access to results. You need to investigate the query job information and determine where performance is being affected. What should you do?",
      "options": [
        "Use slot reservations for your project to ensure that you have enough query processing capacity and are able to allocate available slots to the slower queries.",
        "Use Cloud Monitoring to view BigQuery metrics and set up alerts that let you know when a certain percentage of slots were used.",
        "Use available administrative resource charts to determine how slots are being used and how jobs are performing over time. Run a query on the INFORMATION_SCHEMA to review query performance.",
        "Use Cloud Logging to determine if any users or downstream consumers are changing or deleting access grants on tagged resources."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_350",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You have a petabyte of analytics data and need to design a storage and processing platform for it. You must be able to perform data warehouse-style analytics on the data in Google Cloud and expose the dataset as files for batch analysis tools in other cloud providers. What should you do?",
      "options": [
        "Store and process the entire dataset in BigQuery.",
        "Store and process the entire dataset in Bigtable.",
        "Store the full dataset in BigQuery, and store a compressed copy of the data in a Cloud Storage bucket.",
        "Store the warm data as files in Cloud Storage, and store the active data in BigQuery. Keep this ratio as 80% warm and 20% active."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_351",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are testing a Dataflow pipeline to ingest and transform text files. The files are compressed gzip, errors are written to a dead-letter queue, and you are using SideInputs to join data. You noticed that the pipeline is taking longer to complete than expected; what should you do to expedite the Dataflow job?",
      "options": [
        "Switch to compressed Avro files.",
        "Reduce the batch size.",
        "Retry records that throw an error.",
        "Use CoGroupByKey instead of the SideInput."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_352",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are creating a data model in BigQuery that will hold retail transaction data. Your two largest tables, sales_transaction_header and sales_transaction_line, have a tightly coupled immutable relationship. These tables are rarely modified after load and are frequently joined when queried. You need to model the sales_transaction_header and sales_transaction_line tables to improve the performance of data analytics queries. What should you do?",
      "options": [
        "Create a sales_transaction table that holds the sales_transaction_header information as rows and the sales_transaction_line rows as nested and repeated fields.",
        "Create a sales_transaction table that holds the sales_transaction_header and sales_transaction_line information as rows, duplicating the sales_transaction_header data for each line.",
        "Create a sales_transaction table that stores the sales_transaction_header and sales_transaction_line data as a JSON data type.",
        "Create separate sales_transaction_header and sales_transaction_line tables and, when querying, specify the sales_transaction_line first in the WHERE clause."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_353",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "Your organization uses a multi-cloud data storage strategy, storing data in Cloud Storage, and data in Amazon Web Services\u2019 (AWS) S3 storage buckets. All data resides in US regions. You want to query up-to-date data by using BigQuery, regardless of which cloud the data is stored in. You need to allow users to query the tables from BigQuery without giving direct access to the data in the storage buckets. What should you do?",
      "options": [
        "Setup a BigQuery Omni connection to the AWS S3 bucket data. Create BigLake tables over the Cloud Storage and S3 data and query the data using BigQuery directly.",
        "Set up a BigQuery Omni connection to the AWS S3 bucket data. Create external tables over the Cloud Storage and S3 data and query the data using BigQuery directly.",
        "Use the Storage Transfer Service to copy data from the AWS S3 buckets to Cloud Storage buckets. Create BigLake tables over the Cloud Storage data and query the data using BigQuery directly.",
        "Use the Storage Transfer Service to copy data from the AWS S3 buckets to Cloud Storage buckets. Create external tables over the Cloud Storage data and query the data using BigQuery directly."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_354",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are preparing an organization-wide dataset. You need to preprocess customer data stored in a restricted bucket in Cloud Storage. The data will be used to create consumer analyses. You need to comply with data privacy requirements. What should you do?",
      "options": [
        "Use Dataflow and the Cloud Data Loss Prevention API to mask sensitive data. Write the processed data in BigQuery.",
        "Use customer-managed encryption keys (CMEK) to directly encrypt the data in Cloud Storage. Use federated queries from BigQuery. Share the encryption key by following the principle of least privilege.",
        "Use the Cloud Data Loss Prevention API and Dataflow to detect and remove sensitive fields from the data in Cloud Storage. Write the filtered data in BigQuery.",
        "Use Dataflow and Cloud KMS to encrypt sensitive fields and write the encrypted data in BigQuery. Share the encryption key by following the principle of least privilege."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_355",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are managing a Dataplex environment with raw and curated zones. A data engineering team is uploading JSON and CSV files to a bucket asset in the curated zone but the files are not being automatically discovered by Dataplex. What should you do to ensure that the files are discovered by Dataplex?",
      "options": [
        "Move the JSON and CSV files to the raw zone.",
        "Enable auto-discovery of files for the curated zone.",
        "Use the bg command-line tool to load the JSON and CSV files into BigQuery tables.",
        "Grant object level access to the CSV and JSON files in Cloud Storage."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_356",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are loading CSV files from Cloud Storage to BigQuery. The files have known data quality issues, including mismatched data types, such as STRINGs and INT64s in the same column, and inconsistent formatting of values such as phone numbers or addresses. You need to create the data pipeline to maintain data quality and perform the required cleansing and transformation. What should you do?",
      "options": [
        "Use Data Fusion to transform the data before loading it into BigQuery.",
        "Use Data Fusion to convert the CSV files to a self-describing data format, such as AVRO, before loading the data to BigQuery.",
        "Load the CSV files into a staging table with the desired schema, perform the transformations with SQL, and then write the results to the final destination table.",
        "Create a table with the desired schema, load the CSV files into the table, and perform the transformations in place using SQL."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_357",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "Your organization's data assets are stored in BigQuery, Pub/Sub, and a PostgreSQL instance running on Compute Engine. Because there are multiple domains and diverse teams using the data, teams in your organization are unable to discover existing data assets. You need to design a solution to improve data discoverability while keeping development and configuration efforts to a minimum. What should you do?",
      "options": [
        "Use Data Catalog to automatically catalog BigQuery datasets. Use Data Catalog APIs to manually catalog Pub/Sub topics and PostgreSQL tables.",
        "Use Data Catalog to automatically catalog BigQuery datasets and Pub/Sub topics. Use Data Catalog APIs to manually catalog PostgreSQL tables.",
        "Use Data Catalog to automatically catalog BigQuery datasets and Pub/Sub topics. Use custom connectors to manually catalog PostgreSQL tables.",
        "Use customer connectors to manually catalog BigQuery datasets, Pub/Sub topics, and PostgreSQL tables."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_358",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "You are administering a BigQuery dataset that uses a customer-managed encryption key (CMEK). You need to share the dataset with a partner organization that does not have access to your CMEK. What should you do?",
      "options": [
        "Provide the partner organization a copy of your CMEKs to decrypt the data.",
        "Export the tables to parquet files to a Cloud Storage bucket and grant the storageinsights.viewer role on the bucket to the partner organization.",
        "Copy the tables you need to share to a dataset without CMEKs. Create an Analytics Hub listing for this dataset.",
        "Create an authorized view that contains the CMEK to decrypt the data when accessed."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_359",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "(question text unavailable)",
      "options": [
        "1. Create two regional Cloud Storage buckets, one in the us-central1 region and one in the us-south1 region. 2. Have the upstream process write data to the us-central1 bucket. Use the Storage Transfer Service to copy data hourly from the us-central1 bucket to the us-south1 bucket. 3. Run the Dataproc cluster in a zone in the us-central1 region, reading from the bucket in that region. 4. In case of regional failure, redeploy your Dataproc clusters to the us-south1 region and read from the bucket in that region instead.",
        "1. Create a Cloud Storage bucket in the US multi-region. 2. Run the Dataproc cluster in a zone in the us-central1 region, reading data from the US multi-region bucket. 3. In case of a regional failure, redeploy the Dataproc cluster to the us-central2 region and continue reading from the same bucket.",
        "1. Create a dual-region Cloud Storage bucket in the us-central1 and us-south1 regions. 2. Enable turbo replication. 3. Run the Dataproc cluster in a zone in the us-central1 region, reading from the bucket in the us-south1 region. 4. In case of a regional failure, redeploy your Dataproc cluster to the us-south1 region and continue reading from the same bucket.",
        "1. Create a dual-region Cloud Storage bucket in the us-central1 and us-south1 regions. 2. Enable turbo replication. 3. Run the Dataproc cluster in a zone in the us-central1 region, reading from the bucket in the same region. 4. In case of a regional failure, redeploy the Dataproc clusters to the us-south1 region and read from the same bucket."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "50 questions in this batch.",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_360",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are preparing data that your machine learning team will use to train a model using BigQueryML. They want to predict the price per square foot of real estate. The training data has a column for the price and a column for the number of square feet. Another feature column called \u2018feature1\u2019 contains null values due to missing data. You want to replace the nulls with zeros to keep more data points. Which query should you use?",
      "options": [
        "(option text not available in source PDF)",
        "(option text not available in source PDF)",
        "(option text not available in source PDF)",
        "(option text not available in source PDF)"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_361",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You have important legal hold documents in a Cloud Storage bucket. You need to ensure that these documents are not deleted or modified. What should you do?",
      "options": [
        "Set a retention policy. Lock the retention policy.",
        "Set a retention policy. Set the default storage class to Archive for long-term digital preservation.",
        "Enable the Object Versioning feature. Add a lifecycle rule.",
        "Enable the Object Versioning feature. Create a copy in a bucket in a different region."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_362",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are implementing workflow pipeline scheduling using open source-based tools and Google Kubernetes Engine (GKE). You want to use a Google managed service to simplify and automate the task. You also want to accommodate Shared VPC networking considerations. What should you do?",
      "options": [
        "Use Dataflow for your workflow pipelines. Use Cloud Run triggers for scheduling.",
        "Use Dataflow for your workflow pipelines. Use shell scripts to schedule workflows.",
        "Use Cloud Composer in a Shared VPC configuration. Place the Cloud Composer resources in the host project.",
        "Use Cloud Composer in a Shared VPC configuration. Place the Cloud Composer resources in the service project."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_363",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You work for an airline and you need to store weather data in a BigQuery table. Weather data will be used as input to a machine learning model. The model only uses the last 30 days of weather data. You want to avoid storing unnecessary data and minimize costs. What should you do?",
      "options": [
        "Create a BigQuery table where each record has an ingestion timestamp. Run a scheduled query to delete all the rows with an ingestion timestamp older than 30 days.",
        "Create a BigQuery table partitioned by datetime value of the weather date. Set up partition expiration to 30 days.",
        "Create a BigQuery table partitioned by ingestion time. Set up partition expiration to 30 days.",
        "Create a BigQuery table with a datetime column for the day the weather data refers to. Run a scheduled query to delete rows with a datetime value older than 30 days."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_364",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "Your company wants to be able to retrieve large result sets of medical information from your current system, which has over 10 TBs in the database, and store the data in new tables for further query. The database must have a low-maintenance architecture and be accessible via SQL. You need to implement a cost-effective solution that can support data analytics for large result sets. What should you do?",
      "options": [
        "Use Cloud SQL, but first organize the data into tables. Use JOIN in queries to retrieve data.",
        "Use BigQuery as a data warehouse. Set output destinations for caching large queries.",
        "Use a MySQL cluster installed on a Compute Engine managed instance group for scalability.",
        "Use Cloud Spanner to replicate the data across regions. Normalize the data in a series of tables."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_365",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are building a report-only data warehouse where the data is streamed into BigQuery via the streaming API. Following Google's best practices, you have both a staging and a production table for the data. How should you design your data loading to ensure that there is only one master dataset without affecting performance on either the ingestion or reporting pieces?",
      "options": [
        "Have a staging table that is an append-only model, and then update the production table every three hours with the changes written to staging.",
        "Have a staging table that is an append-only model, and then update the production table every ninety minutes with the changes written to staging.",
        "Have a staging table that moves the staged data over to the production table and deletes the contents of the staging table every three hours.",
        "Have a staging table that moves the staged data over to the production table and deletes the contents of the staging table every thirty minutes."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_366",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "An online brokerage company requires a high volume trade processing architecture. You need to create a secure queuing system that triggers jobs. The jobs will run in Google Cloud and call the company's Python API to execute trades. You need to efficiently implement a solution. What should you do?",
      "options": [
        "Use a Pub/Sub push subscription to trigger a Cloud Function to pass the data to the Python API.",
        "Write an application hosted on a Compute Engine instance that makes a push subscription to the Pub/Sub topic.",
        "Write an application that makes a queue in a NoSQL database.",
        "Use Cloud Composer to subscribe to a Pub/Sub topic and call the Python API."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_367",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You currently use a SQL-based tool to visualize your data stored in BigQuery. The data visualizations require the use of outer joins and analytic functions. Visualizations must be based on data that is no less than 4 hours old. Business users are complaining that the visualizations are too slow to generate. You want to improve the performance of the visualization queries while minimizing the maintenance overhead of the data preparation pipeline. What should you do?",
      "options": [
        "Create materialized views with the allow_non_incremental_definition option set to true for the visualization queries. Specify the max_staleness parameter to 4 hours and the enable_refresh parameter to true. Reference the materialized views in the data visualization tool.",
        "Create views for the visualization queries. Reference the views in the data visualization tool.",
        "Create a Cloud Function instance to export the visualization query results as parquet files to a Cloud Storage bucket. Use Cloud Scheduler to trigger the Cloud Function every 4 hours. Reference the parquet files in the data visualization tool.",
        "Create materialized views for the visualization queries. Use the incremental updates capability of BigQuery materialized views to handle changed data automatically. Reference the materialized views in the data visualization tool."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_368",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are building a real-time prediction engine that streams files, which may contain PII (personal identifiable information) data, into Cloud Storage and eventually into BigQuery. You want to ensure that the sensitive data is masked but still maintains referential integrity, because names and emails are often used as join keys. How should you use the Cloud Data Loss Prevention API (DLP API) to ensure that the PII data is not accessible by unauthorized individuals?",
      "options": [
        "Create a pseudonym by replacing the PII data with cryptogenic tokens, and store the non-tokenized data in a locked-down button.",
        "Redact all PII data, and store a version of the unredacted data in a locked-down bucket.",
        "Scan every table in BigQuery, and mask the data it finds that has PII.",
        "Create a pseudonym by replacing PII data with a cryptographic format-preserving token."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_369",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are using Bigtable to persist and serve stock market data for each of the major indices. To serve the trading application, you need to access only the most recent stock prices that are streaming in. How should you design your row key and tables to ensure that you can access the data with the simplest query?",
      "options": [
        "Create one unique table for all of the indices, and then use the index and timestamp as the row key design.",
        "Create one unique table for all of the indices, and then use a reverse timestamp as the row key design.",
        "For each index, have a separate table and use a timestamp as the row key design.",
        "For each index, have a separate table and use a reverse timestamp as the row key design."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_370",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You have data pipelines running on BigQuery, Dataflow, and Dataproc. You need to perform health checks and monitor their behavior, and then notify the team managing the pipelines if they fail. You also need to be able to work across multiple projects. Your preference is to use managed products or features of the platform. What should you do?",
      "options": [
        "Export the information to Cloud Monitoring, and set up an Alerting policy",
        "Run a Virtual Machine in Compute Engine with Airflow, and export the information to Cloud Monitoring",
        "Export the logs to BigQuery, and set up App Engine to read that information and send emails if you find a failure in the logs",
        "Develop an App Engine application to consume logs using GCP API calls, and send emails if you find a failure in the logs"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_371",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You need to migrate 1 PB of data from an on-premises data center to Google Cloud. Data transfer time during the migration should take only a few hours. You want to follow Google-recommended practices to facilitate the large data transfer over a secure connection. What should you do?",
      "options": [
        "Establish a Cloud Interconnect connection between the on-premises data center and Google Cloud, and then use the Storage Transfer Service.",
        "Use a Transfer Appliance and have engineers manually encrypt, decrypt, and verify the data.",
        "Establish a Cloud VPN connection, start gcloud compute scp jobs in parallel, and run checksums to verify the data.",
        "Reduce the data into 3 TB batches, transfer the data using gsutil, and run checksums to verify the data."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_372",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You have terabytes of customer behavioral data streaming from Google Analytics into BigQuery daily. Your customers\u2019 information, such as their preferences, is hosted on a Cloud SQL for MySQL database. Your CRM database is hosted on a Cloud SQL for PostgreSQL instance. The marketing team wants to use your customers\u2019 information from the two databases and the customer behavioral data to create marketing campaigns for yearly active customers. You need to ensure that the marketing team can run the campaigns over 100 times a day on typical days and up to 300 during sales. At the same time, you want to keep the load on the Cloud SQL databases to a minimum. What should you do?",
      "options": [
        "Create BigQuery connections to both Cloud SQL databases. Use BigQuery federated queries on the two databases and the Google Analytics data on BigQuery to run these queries.",
        "Create a job on Apache Spark with Dataproc Serverless to query both Cloud SQL databases and the Google Analytics data on BigQuery for these queries.",
        "Create streams in Datastream to replicate the required tables from both Cloud SQL databases to BigQuery for these queries.",
        "Create a Dataproc cluster with Trino to establish connections to both Cloud SQL databases and BigQuery, to execute the queries."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_373",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "Your business users need a way to clean and prepare data before using the data for analysis. Your business users are less technically savvy and prefer to work with graphical user interfaces to define their transformations. After the data has been transformed, the business users want to perform their analysis directly in a spreadsheet. You need to recommend a solution that they can use. What should you do?",
      "options": [
        "Use Dataprep to clean the data, and write the results to BigQuery. Analyze the data by using Connected Sheets.",
        "Use Dataprep to clean the data, and write the results to BigQuery. Analyze the data by using Looker Studio.",
        "Use Dataflow to clean the data, and write the results to BigQuery. Analyze the data by using Connected Sheets.",
        "Use Dataflow to clean the data, and write the results to BigQuery. Analyze the data by using Looker Studio."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_374",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "Your team is building a data lake platform on Google Cloud. As a part of the data foundation design, you are planning to store all the raw data in Cloud Storage. You are expecting to ingest approximately 25 GB of data a day and your billing department is worried about the increasing cost of storing old data. The current business requirements are: \u2022 The old data can be deleted anytime. \u2022 There is no predefined access pattern of the old data. \u2022 The old data should be available instantly when accessed. \u2022 There should not be any charges for data retrieval. What should you do to optimize for cost?",
      "options": [
        "Create the bucket with the Autoclass storage class feature.",
        "Create an Object Lifecycle Management policy to modify the storage class for data older than 30 days to nearline, 90 days to coldline, and 365 days to archive storage class. Delete old data as needed.",
        "Create an Object Lifecycle Management policy to modify the storage class for data older than 30 days to coldline, 90 days to nearline, and 365 days to archive storage class. Delete old data as needed.",
        "Create an Object Lifecycle Management policy to modify the storage class for data older than 30 days to nearline, 45 days to coldline, and 60 days to archive storage class. Delete old data as needed."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_375",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You have uploaded 5 years of log data to Cloud Storage. A user reported that some data points in the log data are outside of their expected ranges, which indicates errors. You need to address this issue and be able to run the process again in the future while keeping the original data for compliance reasons. What should you do?",
      "options": [
        "Import the data from Cloud Storage into BigQuery. Create a new BigQuery table, and skip the rows with errors.",
        "Create a Compute Engine instance and create a new copy of the data in Cloud Storage. Skip the rows with errors.",
        "Create a Dataflow workflow that reads the data from Cloud Storage, checks for values outside the expected range, sets the value to an appropriate default, and writes the updated records to a new dataset in Cloud Storage.",
        "Create a Dataflow workflow that reads the data from Cloud Storage, checks for values outside the expected range, sets the value to an appropriate default, and writes the updated records to the same dataset in Cloud Storage."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_376",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You work for a large bank that operates in locations throughout North America. You are setting up a data storage system that will handle bank account transactions. You require ACID compliance and the ability to access data with SQL. Which solution is appropriate?",
      "options": [
        "Store transaction data in Cloud Spanner. Enable stale reads to reduce latency.",
        "Store transaction in Cloud Spanner. Use locking read-write transactions.",
        "Store transaction data in BigQuery. Disabled the query cache to ensure consistency.",
        "Store transaction data in Cloud SQL. Use a federated query BigQuery for analysis."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_377",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You want to migrate your existing Teradata data warehouse to BigQuery. You want to move the historical data to BigQuery by using the most efficient method that requires the least amount of programming, but local storage space on your existing data warehouse is limited. What should you do?",
      "options": [
        "Use BigQuery Data Transfer Service by using the Java Database Connectivity (JDBC) driver with FastExport connection.",
        "Create a Teradata Parallel Transporter (TPT) export script to export the historical data, and import to BigQuery by using the bq command-line tool.",
        "Use BigQuery Data Transfer Service with the Teradata Parallel Transporter (TPT) tbuild utility.",
        "Create a script to export the historical data, and upload in batches to Cloud Storage. Set up a BigQuery Data Transfer Service instance from Cloud Storage to BigQuery."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_378",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are operating a Cloud Dataflow streaming pipeline. The pipeline aggregates events from a Cloud Pub/Sub subscription source, within a window, and sinks the resulting aggregation to a Cloud Storage bucket. The source has consistent throughput. You want to monitor an alert on behavior of the pipeline with Cloud Stackdriver to ensure that it is processing data. Which Stackdriver alerts should you create?",
      "options": [
        "An alert based on a decrease of subscription/num_undelivered_messages for the source and a rate of change increase of instance/storage/ used_bytes for the destination",
        "An alert based on an increase of subscription/num_undelivered_messages for the source and a rate of change decrease of instance/storage/ used_bytes for the destination",
        "An alert based on a decrease of instance/storage/used_bytes for the source and a rate of change increase of subscription/ num_undelivered_messages for the destination",
        "An alert based on an increase of instance/storage/used_bytes for the source and a rate of change decrease of subscription/ num_undelivered_messages for the destination"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_379",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A web server sends click events to a Pub/Sub topic as messages. The web server includes an eventTimestamp attribute in the messages, which is the time when the click occurred. You have a Dataflow streaming job that reads from this Pub/Sub topic through a subscription, applies some transformations, and writes the result to another Pub/Sub topic for use by the advertising department. The advertising department needs to receive each message within 30 seconds of the corresponding click occurrence, but they report receiving the messages late. Your Dataflow job's system lag is about 5 seconds, and the data freshness is about 40 seconds. Inspecting a few messages show no more than 1 second lag between their eventTimestamp and publishTime. What is the problem and what should you do?",
      "options": [
        "The advertising department is causing delays when consuming the messages. Work with the advertising department to fix this.",
        "Messages in your Dataflow job are taking more than 30 seconds to process. Optimize your job or increase the number of workers to fix this.",
        "Messages in your Dataflow job are processed in less than 30 seconds, but your job cannot keep up with the backlog in the Pub/Sub subscription. Optimize your job or increase the number of workers to fix this.",
        "The web server is not pushing messages fast enough to Pub/Sub. Work with the web server team to fix this."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_380",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are planning to load some of your existing on-premises data into BigQuery on Google Cloud. You want to either stream or batch-load data, depending on your use case. Additionally, you want to mask some sensitive data before loading into BigQuery. You need to do this in a programmatic way while keeping costs to a minimum. What should you do?",
      "options": [
        "Use Cloud Data Fusion to design your pipeline, use the Cloud DLP plug-in to de-identify data within your pipeline, and then move the data into BigQuery.",
        "Use the BigQuery Data Transfer Service to schedule your migration. After the data is populated in BigQuery, use the connection to the Cloud Data Loss Prevention (Cloud DLP) API to de-identify the necessary data.",
        "Create your pipeline with Dataflow through the Apache Beam SDK for Python, customizing separate options within your code for streaming, batch processing, and Cloud DLP. Select BigQuery as your data sink.",
        "Set up Datastream to replicate your on-premise data on BigQuery."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_381",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You have a BigQuery dataset named \u201ccustomers\u201d. All tables will be tagged by using a Data Catalog tag template named \u201cgdpr\u201d. The template contains one mandatory field, \u201chas_sensitive_data\u201d, with a boolean value. All employees must be able to do a simple search and find tables in the dataset that have either true or false in the \u201chas_sensitive_data\u2019 field. However, only the Human Resources (HR) group should be able to see the data inside the tables for which \u201chas_sensitive data\u201d is true. You give the all employees group the bigquery.metadataViewer and bigquery.connectionUser roles on the dataset. You want to minimize configuration overhead. What should you do next?",
      "options": [
        "Create the \u201cgdpr\u201d tag template with private visibility. Assign the bigquery.dataViewer role to the HR group on the tables that contain sensitive data.",
        "Create the \u201cgdpr\u201d tag template with private visibility. Assign the datacatalog.tagTemplateViewer role on this tag to the all employees group, and assign the bigquery.dataViewer role to the HR group on the tables that contain sensitive data.",
        "Create the \u201cgdpr\u201d tag template with public visibility. Assign the bigquery.dataViewer role to the HR group on the tables that contain sensitive data.",
        "Create the \u201cgdpr\u201d tag template with public visibility. Assign the datacatalog.tagTemplateViewer role on this tag to the all employees group, and assign the bigquery.dataViewer role to the HR group on the tables that contain sensitive data."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_382",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A shipping company has live package-tracking data that is sent to an Apache Kafka stream in real time. This is then loaded into BigQuery. Analysts in your company want to query the tracking data in BigQuery to analyze geospatial trends in the lifecycle of a package. The table was originally created with ingest-date partitioning. Over time, the query processing time has increased. You need to copy all the data to a new clustered table. What should you do?",
      "options": [
        "Re-create the table using data partitioning on the package delivery date.",
        "Implement clustering in BigQuery on the package-tracking ID column.",
        "Implement clustering in BigQuery on the ingest date column.",
        "Tier older data onto Cloud Storage files and create a BigQuery table using Cloud Storage as an external data source."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_383",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are designing a data processing pipeline. The pipeline must be able to scale automatically as load increases. Messages must be processed at least once and must be ordered within windows of 1 hour. How should you design the solution?",
      "options": [
        "Use Apache Kafka for message ingestion and use Cloud Dataproc for streaming analysis.",
        "Use Apache Kafka for message ingestion and use Cloud Dataflow for streaming analysis.",
        "Use Cloud Pub/Sub for message ingestion and Cloud Dataproc for streaming analysis.",
        "Use Cloud Pub/Sub for message ingestion and Cloud Dataflow for streaming analysis."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_384",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "(question text unavailable)",
      "options": [
        "1. Create a pipeline to de-identify the email field by using recordTransformations in Cloud Data Loss Prevention (Cloud DLP) with masking as the de-identification transformations type. 2. Load the booking and user profile data into a BigQuery table.",
        "1. Create a pipeline to de-identify the email field by using recordTransformations in Cloud DLP with format- preserving encryption with FFX as the de-identification transformation type. 2. Load the booking and user profile data into a BigQuery table.",
        "1. Load the CSV files from Cloud Storage into a BigQuery table, and enable dynamic data masking. 2. Create a policy tag with the email mask as the data masking rule. 3. Assign the policy to the email field in both tables. A 4. Assign the Identity and Access Management bigquerydatapolicy.maskedReader role for the BigQuery tables to the analysts.",
        "1. Load the CSV files from Cloud Storage into a BigQuery table, and enable dynamic data masking. 2. Create a policy tag with the default masking value as the data masking rule. 3. Assign the policy to the email field in both tables. 4. Assign the Identity and Access Management bigquerydatapolicy.maskedReader role for the BigQuery tables to the analysts"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_385",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You work for a large real estate firm and are preparing 6 TB of home sales data to be used for machine learning. You will use SQL to transform the data and use BigQuery ML to create a machine learning model. You plan to use the model for predictions against a raw dataset that has not been transformed. How should you set up your workflow in order to prevent skew at prediction time?",
      "options": [
        "When creating your model, use BigQuery's TRANSFORM clause to define preprocessing steps. At prediction time, use BigQuery's ML.EVALUATE clause without specifying any transformations on the raw input data.",
        "When creating your model, use BigQuery's TRANSFORM clause to define preprocessing steps. Before requesting predictions, use a saved query to transform your raw input data, and then use ML.EVALUATE.",
        "Use a BigQuery view to define your preprocessing logic. When creating your model, use the view as your model training data. At prediction time, use BigQuery's ML.EVALUATE clause without specifying any transformations on the raw input data.",
        "Preprocess all data using Dataflow. At prediction time, use BigQuery's ML.EVALUATE clause without specifying any further transformations on the input data."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_386",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are implementing a chatbot to help an online retailer streamline their customer service. The chatbot must be able to respond to both text and voice inquiries. You are looking for a low-code or no-cade option, and you want to be able to easily train the chatbot to provide answers to keywords. What should you do?",
      "options": [
        "Use the Cloud Speech-to-Text API to build a Python application in App Engine.",
        "Use the Cloud Speech-to-Text API to build a Python application in a Compute Engine instance.",
        "Use Dialogflow for simple queries and the Cloud Speech-to-Text API for complex queries.",
        "Use Dialogflow to implement the chatbot, defining the intents based on the most common queries collected."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_387",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are designing the architecture to process your data from Cloud Storage to BigQuery by using Dataflow. The network team provided you with the Shared VPC network and subnetwork to be used by your pipelines. You need to enable the deployment of the pipeline on the Shared VPC network. What should you do?",
      "options": [
        "Assign the compute.networkUser role to the Dataflow service agent.",
        "Assign the compute.networkUser role to the service account that executes the Dataflow pipeline.",
        "Assign the dataflow.admin role to the Dataflow service agent.",
        "Assign the dataflow.admin role to the service account that executes the Dataflow pipeline."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_388",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You work for a large ecommerce company. You are using Pub/Sub to ingest the clickstream data to Google Cloud for analytics. You observe that when a new subscriber connects to an existing topic to analyze data, they are unable to subscribe to older data. For an upcoming yearly sale event in two months, you need a solution that, once implemented, will enable any new subscriber to read the last 30 days of data. What should you do?",
      "options": [
        "Create a new topic, and publish the last 30 days of data each time a new subscriber connects to an existing topic.",
        "Set the topic retention policy to 30 days.",
        "Set the subscriber retention policy to 30 days.",
        "Ask the source system to re-push the data to Pub/Sub, and subscribe to it."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_389",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "Your team is working on a binary classification problem. You have trained a support vector machine (SVM) classifier with default parameters, and received an area under the Curve (AUC) of 0.87 on the validation set. You want to increase the AUC of the model. What should you do?",
      "options": [
        "Perform hyperparameter tuning",
        "Train a classifier with deep neural networks, because neural networks would always beat SVMs",
        "Deploy the model and measure the real-world AUC; it's always higher because of generalization",
        "Scale predictions you get out of the model (tune a scaling factor as a hyperparameter) in order to get the highest AUC"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_390",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are migrating a large number of files from a public HTTPS endpoint to Cloud Storage. The files are protected from unauthorized access using signed URLs. You created a TSV file that contains the list of object URLs and started a transfer job by using Storage Transfer Service. You notice that the job has run for a long time and eventually failed. Checking the logs of the transfer job reveals that the job was running fine until one point, and then it failed due to HTTP 403 errors on the remaining files. You verified that there were no changes to the source system. You need to fix the problem to resume the migration process. What should you do?",
      "options": [
        "Set up Cloud Storage FUSE, and mount the Cloud Storage bucket on a Compute Engine instance. Remove the completed files from the TSV file. Use a shell script to iterate through the TSV file and download the remaining URLs to the FUSE mount point.",
        "Renew the TLS certificate of the HTTPS endpoint. Remove the completed files from the TSV file and rerun the Storage Transfer Service job.",
        "Create a new TSV file for the remaining files by generating signed URLs with a longer validity period. Split the TSV file into multiple smaller files and submit them as separate Storage Transfer Service jobs in parallel.",
        "Update the file checksums in the TSV file from using MD5 to SHA256. Remove the completed files from the TSV file and rerun the Storage Transfer Service job."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_391",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are deploying an Apache Airflow directed acyclic graph (DAG) in a Cloud Composer 2 instance. You have incoming files in a Cloud Storage bucket that the DAG processes, one file at a time. The Cloud Composer instance is deployed in a subnetwork with no Internet access. Instead of running the DAG based on a schedule, you want to run the DAG in a reactive way every time a new file is received. What should you do?",
      "options": [
        "1. Enable Private Google Access in the subnetwork, and set up Cloud Storage notifications to a Pub/Sub topic. 2. Create a push subscription that points to the web server URL.",
        "1. Enable the Cloud Composer API, and set up Cloud Storage notifications to trigger a Cloud Function. 2. Write a Cloud Function instance to call the DAG by using the Cloud Composer API and the web server URL. 3. Use VPC Serverless Access to reach the web server URL.",
        "1. Enable the Airflow REST API, and set up Cloud Storage notifications to trigger a Cloud Function instance. 2. Create a Private Service Connect (PSC) endpoint. 3. Write a Cloud Function that connects to the Cloud Composer cluster through the PSC endpoint.",
        "1. Enable the Airflow REST API, and set up Cloud Storage notifications to trigger a Cloud Function instance. 2. Write a Cloud Function instance to call the DAG by using the Airflow REST API and the web server URL. 3. Use VPC Serverless Access to reach the web server URL."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_392",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are running your BigQuery project in the on-demand billing model and are executing a change data capture (CDC) process that ingests data. The CDC process loads 1 GB of data every 10 minutes into a temporary table, and then performs a merge into a 10 TB target table. This process is very scan intensive and you want to explore options to enable a predictable cost model. You need to create a BigQuery reservation based on utilization information gathered from BigQuery Monitoring and apply the reservation to the CDC process. What should you do?",
      "options": [
        "Create a BigQuery reservation for the dataset.",
        "Create a BigQuery reservation for the job.",
        "Create a BigQuery reservation for the service account running the job.",
        "Create a BigQuery reservation for the project."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_393",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "(question text unavailable)",
      "options": [
        "1. Create an Apache Airflow directed acyclic graph (DAG) in Cloud Composer with sequential tasks by using the Cloud Storage, Dataproc, and BigQuery operators. 2. Use a single shared DAG for all tables that need to go through the pipeline. 3. Schedule the DAG to run hourly.",
        "1. Create an Apache Airflow directed acyclic graph (DAG) in Cloud Composer with sequential tasks by using the Cloud Storage, Dataproc, and BigQuery operators. 2. Create a separate DAG for each table that needs to go through the pipeline. 3. Schedule the DAGs to run hourly.",
        "1. Create an Apache Airflow directed acyclic graph (DAG) in Cloud Composer with sequential tasks by using the Dataproc and BigQuery operators. 2. Use a single shared DAG for all tables that need to go through the pipeline. 3. Use a Cloud Storage object trigger to launch a Cloud Function that triggers the DAG.",
        "1. Create an Apache Airflow directed acyclic graph (DAG) in Cloud Composer with sequential tasks by using the Dataproc and BigQuery operators. 2. Create a separate DAG for each table that needs to go through the pipeline."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_394",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "Your company's customer_order table in BigQuery stores the order history for 10 million customers, with a table size of 10 PB. You need to create a dashboard for the support team to view the order history. The dashboard has two filters, country_name and username. Both are string data types in the BigQuery table. When a filter is applied, the dashboard fetches the order history from the table and displays the query results. However, the dashboard is slow to show the results when applying the filters to the following query: How should you redesign the BigQuery table to support faster access?",
      "options": [
        "Cluster the table by country and username fields.",
        "Cluster the table by country field, and partition by username field.",
        "Partition the table by country and username fields.",
        "Partition the table by _PARTITIONTIME."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_395",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You need to deploy additional dependencies to all nodes of a Cloud Dataproc cluster at startup using an existing initialization action. Company security policies require that Cloud Dataproc nodes do not have access to the Internet so public initialization actions cannot fetch resources. What should you do?",
      "options": [
        "Deploy the Cloud SQL Proxy on the Cloud Dataproc master",
        "Use an SSH tunnel to give the Cloud Dataproc cluster access to the Internet",
        "Copy all dependencies to a Cloud Storage bucket within your VPC security perimeter",
        "Use Resource Manager to add the service account used by the Cloud Dataproc cluster to the Network User role"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_396",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are analyzing the price of a company's stock. Every 5 seconds, you need to compute a moving average of the past 30 seconds' worth of data. You are reading data from Pub/Sub and using DataFlow to conduct the analysis. How should you set up your windowed pipeline?",
      "options": [
        "Use a fixed window with a duration of 5 seconds. Emit results by setting the following trigger: AfterProcessingTime.pastFirstElementInPane().plusDelayOf (Duration.standardSeconds(30))",
        "Use a fixed window with a duration of 30 seconds. Emit results by setting the following trigger: AfterWatermark.pastEndOfWindow().plusDelayOf (Duration.standardSeconds(5))",
        "Use a sliding window with a duration of 5 seconds. Emit results by setting the following trigger: AfterProcessingTime.pastFirstElementInPane().plusDelayOf (Duration.standardSeconds(30))",
        "Use a sliding window with a duration of 30 seconds and a period of 5 seconds. Emit results by setting the following trigger: AfterWatermark.pastEndOfWindow ()"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_397",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You want to archive data in Cloud Storage. Because some data is very sensitive, you want to use the `Trust No One` (TNO) approach to encrypt your data to prevent the cloud provider staff from decrypting your data. What should you do?",
      "options": [
        "Use gcloud kms keys create to create a symmetric key. Then use gcloud kms encrypt to encrypt each archival file with the key and unique additional authenticated data (AAD). Use gsutil cp to upload each encrypted file to the Cloud Storage bucket, and keep the AAD outside of Google Cloud.",
        "Use gcloud kms keys create to create a symmetric key. Then use gcloud kms encrypt to encrypt each archival file with the key. Use gsutil cp to upload each encrypted file to the Cloud Storage bucket. Manually destroy the key previously used for encryption, and rotate the key once.",
        "Specify customer-supplied encryption key (CSEK) in the .boto configuration file. Use gsutil cp to upload each archival file to the Cloud Storage bucket. Save the CSEK in Cloud Memorystore as permanent storage of the secret.",
        "Specify customer-supplied encryption key (CSEK) in the .boto configuration file. Use gsutil cp to upload each archival file to the Cloud Storage bucket. Save the CSEK in a different project that only the security team can access."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_398",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are designing a system that requires an ACID-compliant database. You must ensure that the system requires minimal human intervention in case of a failure. What should you do?",
      "options": [
        "Configure a Cloud SQL for MySQL instance with point-in-time recovery enabled.",
        "Configure a Cloud SQL for PostgreSQL instance with high availability enabled.",
        "Configure a Bigtable instance with more than one cluster.",
        "Configure a BigQuery table with a multi-region configuration."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_399",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A live TV show asks viewers to cast votes using their mobile phones. The event generates a large volume of data during a 3-minute period. You are in charge of the \"Voting infrastructure\" and must ensure that the platform can handle the load and that all votes are processed. You must display partial results while voting is open. After voting closes, you need to count the votes exactly once while optimizing cost. What should you do?",
      "options": [
        "Create a Memorystore instance with a high availability (HA) configuration.",
        "Create a Cloud SQL for PostgreSQL database with high availability (HA) configuration and multiple read replicas.",
        "Write votes to a Pub/Sub topic and have Cloud Functions subscribe to it and write votes to BigQuery.",
        "Write votes to a Pub/Sub topic and load into both Bigtable and BigQuery via a Dataflow pipeline. Query Bigtable for real-time results and BigQuery for later analysis. Shut down the Bigtable instance when voting concludes."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_400",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are monitoring your organization\u2019s data lake hosted on BigQuery. The ingestion pipelines read data from Pub/Sub and write the data into tables on BigQuery. After a new version of the ingestion pipelines is deployed, the daily stored data increased by 50%. The volumes of data in Pub/Sub remained the same and only some tables had their daily partition data size doubled. You need to investigate and fix the cause of the data increase. What should you do?",
      "options": [
        "1. Check for duplicate rows in the BigQuery tables that have the daily partition data size doubled. 2. Schedule daily SQL jobs to deduplicate the affected tables. 3. Share the deduplication script with the other operational teams to reuse if this occurs to other tables.",
        "1. Check for code errors in the deployed pipelines. 2. Check for multiple writing to pipeline BigQuery sink. 3. Check for errors in Cloud Logging during the day of the release of the new pipelines. 4. If no errors, restore the BigQuery tables to their content before the last release by using time travel.",
        "1. Check for duplicate rows in the BigQuery tables that have the daily partition data size doubled. 2. Check the BigQuery Audit logs to find job IDs. 3. Use Cloud Monitoring to determine when the identified Dataflow jobs started and the pipeline code version. 4. When more than one pipeline ingests data into a table, stop all versions except the latest one.",
        "1. Roll back the last deployment. 2. Restore the BigQuery tables to their content before the last release by using time travel. 3. Restart the Dataflow jobs and replay the messages by seeking the subscription to the timestamp of the release."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_401",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You operate an IoT pipeline built around Apache Kafka that normally receives around 5000 messages per second. You want to use Google Cloud Platform to create an alert as soon as the moving average over 1 hour drops below 4000 messages per second. What should you do?",
      "options": [
        "Consume the stream of data in Dataflow using Kafka IO. Set a sliding time window of 1 hour every 5 minutes. Compute the average when the window closes, and send an alert if the average is less than 4000 messages.",
        "Consume the stream of data in Dataflow using Kafka IO. Set a fixed time window of 1 hour. Compute the average when the window closes, and send an alert if the average is less than 4000 messages.",
        "Use Kafka Connect to link your Kafka message queue to Pub/Sub. Use a Dataflow template to write your messages from Pub/Sub to Bigtable. Use Cloud Scheduler to run a script every hour that counts the number of rows created in Bigtable in the last hour. If that number falls below 4000, send an alert.",
        "Use Kafka Connect to link your Kafka message queue to Pub/Sub. Use a Dataflow template to write your messages from Pub/Sub to BigQuery. Use Cloud Scheduler to run a script every five minutes that counts the number of rows created in BigQuery in the last hour. If that number falls below 4000, send an alert."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_402",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "Your infrastructure team has set up an interconnect link between Google Cloud and the on-premises network. You are designing a high-throughput streaming pipeline to ingest data in streaming from an Apache Kafka cluster hosted on- premises. You want to store the data in BigQuery, with as minimal latency as possible. What should you do?",
      "options": [
        "Setup a Kafka Connect bridge between Kafka and Pub/Sub. Use a Google-provided Dataflow template to read the data from Pub/Sub, and write the data to BigQuery.",
        "Use a proxy host in the VPC in Google Cloud connecting to Kafka. Write a Dataflow pipeline, read data from the proxy host, and write the data to BigQuery.",
        "Use Dataflow, write a pipeline that reads the data from Kafka, and writes the data to BigQuery.",
        "Setup a Kafka Connect bridge between Kafka and Pub/Sub. Write a Dataflow pipeline, read the data from Pub/Sub, and write the data to BigQuery."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_403",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are on the data governance team and are implementing security requirements to deploy resources. You need to ensure that resources are limited to only the europe-west3 region. You want to follow Google-recommended practices. What should you do?",
      "options": [
        "Set the constraints/gcp.resourceLocations organization policy constraint to in:europe-west3-locations.",
        "Deploy resources with Terraform and implement a variable validation rule to ensure that the region is set to the europe-west3 region for all resources.",
        "Set the constraints/gcp.resourceLocations organization policy constraint to in:eu-locations.",
        "Create a Cloud Function to monitor all resources created and automatically destroy the ones created outside the europe-west3 region."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_404",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are troubleshooting your Dataflow pipeline that processes data from Cloud Storage to BigQuery. You have discovered that the Dataflow worker nodes cannot communicate with one another. Your networking team relies on Google Cloud network tags to define firewall rules. You need to identify the issue while following Google- recommended networking security practices. What should you do?",
      "options": [
        "Determine whether your Dataflow pipeline has a custom network tag set.",
        "Determine whether there is a firewall rule set to allow traffic on TCP ports 12345 and 12346 for the Dataflow network tag.",
        "Determine whether there is a firewall rule set to allow traffic on TCP ports 12345 and 12346 on the subnet used by Dataflow workers.",
        "Determine whether your Dataflow pipeline is deployed with the external IP address option enabled."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_405",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You migrated a data backend for an application that serves 10 PB of historical product data for analytics. Only the last known state for a product, which is about 10 GB of data, needs to be served through an API to the other applications. You need to choose a cost-effective persistent storage solution that can accommodate the analytics requirements and the API performance of up to 1000 queries per second (QPS) with less than 1 second latency. What should you do?",
      "options": [
        "1. Store the historical data in BigQuery for analytics. 2. Use a materialized view to precompute the last state of a product. 3. Serve the last state data directly from BigQuery to the API.",
        "1. Store the products as a collection in Firestore with each product having a set of historical changes. 2. Use simple and compound queries for analytics. 3. Serve the last state data directly from Firestore to the API.",
        "1. Store the historical data in Cloud SQL for analytics. 2. In a separate table, store the last state of the product after every product change. 3. Serve the last state data directly from Cloud SQL to the API.",
        "1. Store the historical data in BigQuery for analytics. 2. In a Cloud SQL table, store the last state of the product after every product change. 3. Serve the last state data directly from Cloud SQL to the API."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_406",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You have a variety of files in Cloud Storage that your data science team wants to use in their models. Currently, users do not have a method to explore, cleanse, and validate the data in Cloud Storage. You are looking for a low code solution that can be used by your data science team to quickly cleanse and explore data within Cloud Storage. What should you do?",
      "options": [
        "Provide the data science team access to Dataflow to create a pipeline to prepare and validate the raw data and load data into BigQuery for data exploration.",
        "Create an external table in BigQuery and use SQL to transform the data as necessary. Provide the data science team access to the external tables to explore the raw data.",
        "Load the data into BigQuery and use SQL to transform the data as necessary. Provide the data science team access to staging tables to explore the raw data.",
        "Provide the data science team access to Dataprep to prepare, validate, and explore the data within Cloud Storage."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_407",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You have 15 TB of data in your on-premises data center that you want to transfer to Google Cloud. Your data changes weekly and is stored in a POSIX-compliant source. The network operations team has granted you 500 Mbps bandwidth to the public internet. You want to follow Google-recommended practices to reliably transfer your data to Google Cloud on a weekly basis. What should you do?",
      "options": [
        "Use Cloud Scheduler to trigger the gsutil command. Use the -m parameter for optimal parallelism.",
        "Use Transfer Appliance to migrate your data into a Google Kubernetes Engine cluster, and then configure a weekly transfer job.",
        "Install Storage Transfer Service for on-premises data in your data center, and then configure a weekly transfer job.",
        "Install Storage Transfer Service for on-premises data on a Google Cloud virtual machine, and then configure a weekly transfer job."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_408",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You are working on a niche product in the image recognition domain. Your team has developed a model that is dominated by custom C++ TensorFlow ops your team has implemented. These ops are used inside your main training loop and are performing bulky matrix multiplications. It currently takes up to several days to train a model. You want to decrease this time significantly and keep the cost low by using an accelerator on Google Cloud. What should you do?",
      "options": [
        "Use Cloud TPUs without any additional adjustment to your code.",
        "Use Cloud TPUs after implementing GPU kernel support for your customs ops.",
        "Use Cloud GPUs after implementing GPU kernel support for your customs ops.",
        "Stay on CPUs, and increase the size of the cluster you're training your model on."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_409",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "You have several different file type data sources, such as Apache Parquet and CSV. You want to store the data in Cloud Storage. You need to set up an object sink for your data that allows you to use your own encryption keys. You want to use a GUI-based solution. What should you do?",
      "options": [
        "Use Storage Transfer Service to move files into Cloud Storage.",
        "Use Cloud Data Fusion to move files into Cloud Storage.",
        "Use Dataflow to move files into Cloud Storage.",
        "Use BigQuery Data Transfer Service to move files into BigQuery."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "50 questions in this batch.",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_410",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are designing a data mesh on Google Cloud by using Dataplex to manage data in BigQuery and Cloud Storage. You want to simplify data asset permissions. You are creating a customer virtual lake with two user groups: \u2022 Data engineers, which require full data lake access \u2022 Analytic users, which require access to curated data You need to assign access rights to these two groups. What should you do?",
      "options": [
        "1. Grant the dataplex.dataOwner role to the data engineer group on the customer data lake. 2. Grant the dataplex.dataReader role to the analytic user group on the customer curated zone.",
        "1. Grant the dataplex.dataReader role to the data engineer group on the customer data lake. 2. Grant the dataplex.dataOwner to the analytic user group on the customer curated zone.",
        "1. Grant the bigquery.dataOwner role on BigQuery datasets and the storage.objectCreator role on Cloud Storage buckets to data engineers. 2. Grant the bigquery.dataViewer role on BigQuery datasets and the storage.objectViewer role on Cloud Storage buckets to analytic users.",
        "1. Grant the bigquery.dataViewer role on BigQuery datasets and the storage.objectViewer role on Cloud Storage buckets to data engineers. 2. Grant the bigquery.dataOwner role on BigQuery datasets and the storage.objectEditor role on Cloud Storage buckets to analytic users."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_411",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You have designed an Apache Beam processing pipeline that reads from a Pub/Sub topic. The topic has a message retention duration of one day, and writes to a Cloud Storage bucket. You need to select a bucket location and processing strategy to prevent data loss in case of a regional outage with an RPO of 15 minutes. What should you do?",
      "options": [
        "1. Use a dual-region Cloud Storage bucket. 2. Monitor Dataflow metrics with Cloud Monitoring to determine when an outage occurs. 3. Seek the subscription back in time by 15 minutes to recover the acknowledged messages. 4. Start the Dataflow job in a secondary region.",
        "1. Use a multi-regional Cloud Storage bucket. 2. Monitor Dataflow metrics with Cloud Monitoring to determine when an outage occurs. 3. Seek the subscription back in time by 60 minutes to recover the acknowledged messages. 4. Start the Dataflow job in a secondary region.",
        "1. Use a regional Cloud Storage bucket. 2. Monitor Dataflow metrics with Cloud Monitoring to determine when an outage occurs. 3. Seek the subscription back in time by one day to recover the acknowledged messages. 4. Start the Dataflow job in a secondary region and write in a bucket in the same region.",
        "1. Use a dual-region Cloud Storage bucket with turbo replication enabled. 2. Monitor Dataflow metrics with Cloud Monitoring to determine when an outage occurs. 3. Seek the subscription back in time by 60 minutes to recover the acknowledged messages. 4. Start the Dataflow job in a secondary region."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_412",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are designing a Dataflow pipeline for a batch processing job. You want to mitigate multiple zonal failures at job submission time. What should you do?",
      "options": [
        "Submit duplicate pipelines in two different zones by using the --zone flag.",
        "Set the pipeline staging location as a regional Cloud Storage bucket.",
        "Specify a worker region by using the --region flag.",
        "Create an Eventarc trigger to resubmit the job in case of zonal failure when submitting the job."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_413",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You work for a large financial institution that is planning to use Dialogflow to create a chatbot for the company's mobile app. You have reviewed old chat logs and tagged each conversation for intent based on each customer's stated intention for contacting customer service. About 70% of customer requests are simple requests that are solved within 10 intents. The remaining 30% of inquiries require much longer, more complicated requests. Which intents should you automate first?",
      "options": [
        "Automate the 10 intents that cover 70% of the requests so that live agents can handle more complicated requests.",
        "Automate the more complicated requests first because those require more of the agents' time.",
        "Automate a blend of the shortest and longest intents to be representative of all intents.",
        "Automate intents in places where common words such as 'payment' appear only once so the software isn't confused."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_414",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are on the data governance team and are implementing security requirements. You need to encrypt all your data in BigQuery by using an encryption key managed by your team. You must implement a mechanism to generate and store encryption material only on your on-premises hardware security module (HSM). You want to rely on Google managed solutions. What should you do?",
      "options": [
        "Create the encryption key in the on-premises HSM, and import it into a Cloud Key Management Service (Cloud KMS) key. Associate the created Cloud KMS key while creating the BigQuery resources.",
        "Create the encryption key in the on-premises HSM and link it to a Cloud External Key Manager (Cloud EKM) key. Associate the created Cloud KMS key while creating the BigQuery resources.",
        "Create the encryption key in the on-premises HSM, and import it into Cloud Key Management Service (Cloud HSM) key. Associate the created Cloud HSM key while creating the BigQuery resources.",
        "Create the encryption key in the on-premises HSM. Create BigQuery resources and encrypt data while ingesting them into BigQuery."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_415",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You maintain ETL pipelines. You notice that a streaming pipeline running on Dataflow is taking a long time to process incoming data, which causes output delays. You also noticed that the pipeline graph was automatically optimized by Dataflow and merged into one step. You want to identify where the potential bottleneck is occurring. What should you do?",
      "options": [
        "Insert a Reshuffle operation after each processing step, and monitor the execution details in the Dataflow console.",
        "Insert output sinks after each key processing step, and observe the writing throughput of each block.",
        "Log debug information in each ParDo function, and analyze the logs at execution time.",
        "Verify that the Dataflow service accounts have appropriate permissions to write the processed data to the output sinks."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_416",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You have thousands of Apache Spark jobs running in your on-premises Apache Hadoop cluster. You want to migrate the jobs to Google Cloud. You want to use managed services to run your jobs instead of maintaining a long- lived Hadoop cluster yourself. You have a tight timeline and want to keep code changes to a minimum. What should you do?",
      "options": [
        "Move your data to BigQuery. Convert your Spark scripts to a SQL-based processing approach.",
        "Rewrite your jobs in Apache Beam. Run your jobs in Dataflow.",
        "Copy your data to Compute Engine disks. Manage and run your jobs directly on those instances.",
        "Move your data to Cloud Storage. Run your jobs on Dataproc."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_417",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "Each analytics team in your organization is running BigQuery jobs in their own projects. You want to enable each team to monitor slot usage within their projects. What should you do?",
      "options": [
        "Create a Cloud Monitoring dashboard based on the BigQuery metric query/scanned_bytes",
        "Create a Cloud Monitoring dashboard based on the BigQuery metric slots/allocated_for_project",
        "Create a log export for each project, capture the BigQuery job execution logs, create a custom metric based on the totalSlotMs, and create a Cloud Monitoring dashboard based on the custom metric",
        "Create an aggregated log export at the organization level, capture the BigQuery job execution logs, create a custom metric based on the totalSlotMs, and create a Cloud Monitoring dashboard based on the custom metric"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_418",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are implementing several batch jobs that must be executed on a schedule. These jobs have many interdependent steps that must be executed in a specific order. Portions of the jobs involve executing shell scripts, running Hadoop jobs, and running queries in BigQuery. The jobs are expected to run for many minutes up to several hours. If the steps fail, they must be retried a fixed number of times. Which service should you use to manage the execution of these jobs?",
      "options": [
        "Cloud Scheduler",
        "Cloud Dataflow",
        "Cloud Functions",
        "Cloud Composer"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_419",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "One of your encryption keys stored in Cloud Key Management Service (Cloud KMS) was exposed. You need to re- encrypt all of your CMEK-protected Cloud Storage data that used that key, and then delete the compromised key. You also want to reduce the risk of objects getting written without customer-managed encryption key (CMEK) protection in the future. What should you do?",
      "options": [
        "Rotate the Cloud KMS key version. Continue to use the same Cloud Storage bucket.",
        "Create a new Cloud KMS key. Set the default CMEK key on the existing Cloud Storage bucket to the new one.",
        "Create a new Cloud KMS key. Create a new Cloud Storage bucket. Copy all objects from the old bucket to the new one bucket while specifying the new Cloud KMS key in the copy command.",
        "Create a new Cloud KMS key. Create a new Cloud Storage bucket configured to use the new key as the default CMEK key. Copy all objects from the old bucket to the new bucket without specifying a key."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_420",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "Your organization is modernizing their IT services and migrating to Google Cloud. You need to organize the data that will be stored in Cloud Storage and BigQuery. You need to enable a data mesh approach to share the data between sales, product design, and marketing departments. What should you do?",
      "options": [
        "1. Create a project for storage of the data for each of your departments. 2. Enable each department to create Cloud Storage buckets and BigQuery datasets. 3. Create user groups for authorized readers for each bucket and dataset. 4. Enable the IT team to administer the user groups to add or remove users as the departments\u2019 request.",
        "1. Create multiple projects for storage of the data for each of your departments\u2019 applications. 2. Enable each department to create Cloud Storage buckets and BigQuery datasets. 3. Publish the data that each department shared in Analytics Hub. 4. Enable all departments to discover and subscribe to the data they need in Analytics Hub.",
        "1. Create a project for storage of the data for your organization. 2. Create a central Cloud Storage bucket with three folders to store the files for each department. 3. Create a central BigQuery dataset with tables prefixed with the department name. 4. Give viewer rights for the storage project for the users of your departments.",
        "1. Create multiple projects for storage of the data for each of your departments\u2019 applications. 2. Enable each department to create Cloud Storage buckets and BigQuery datasets. 3. In Dataplex, map each department to a data lake and the Cloud Storage buckets, and map the BigQuery datasets to zones. 4. Enable each department to own and share the data of their data lakes."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_421",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You orchestrate ETL pipelines by using Cloud Composer. One of the tasks in the Apache Airflow directed acyclic graph (DAG) relies on a third-party service. You want to be notified when the task does not succeed. What should you do?",
      "options": [
        "Assign a function with notification logic to the on_retry_callback parameter for the operator responsible for the task at risk.",
        "Configure a Cloud Monitoring alert on the sla_missed metric associated with the task at risk to trigger a notification.",
        "Assign a function with notification logic to the on_failure_callback parameter tor the operator responsible for the task at risk.",
        "Assign a function with notification logic to the sla_miss_callback parameter for the operator responsible for the task at risk."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_422",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are administering a BigQuery on-demand environment. Your business intelligence tool is submitting hundreds of queries each day that aggregate a large (50 TB) sales history fact table at the day and month levels. These queries have a slow response time and are exceeding cost expectations. You need to decrease response time, lower query costs, and minimize maintenance. What should you do?",
      "options": [
        "Build authorized views on top of the sales table to aggregate data at the day and month level.",
        "Enable BI Engine and add your sales table as a preferred table.",
        "Build materialized views on top of the sales table to aggregate data at the day and month level.",
        "Create a scheduled query to build sales day and sales month aggregate tables on an hourly basis."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_423",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are designing a fault-tolerant architecture to store data in a regional BigQuery dataset. You need to ensure that your application is able to recover from a corruption event in your tables that occurred within the past seven days. You want to adopt managed services with the lowest RPO and most cost-effective solution. What should you do?",
      "options": [
        "Access historical data by using time travel in BigQuery.",
        "Export the data from BigQuery into a new table that excludes the corrupted data",
        "Create a BigQuery table snapshot on a daily basis.",
        "Migrate your data to multi-region BigQuery buckets."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_424",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "Your new customer has requested daily reports that show their net consumption of Google Cloud compute resources and who used the resources. You need to quickly and efficiently generate these daily reports. What should you do?",
      "options": [
        "Do daily exports of Cloud Logging data to BigQuery. Create views filtering by project, log type, resource, and user.",
        "Filter data in Cloud Logging by project, resource, and user; then export the data in CSV format.",
        "Filter data in Cloud Logging by project, log type, resource, and user, then import the data into BigQuery.",
        "Export Cloud Logging data to Cloud Storage in CSV format. Cleanse the data using Dataprep, filtering by project, resource, and user."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_425",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You need to create a SQL pipeline. The pipeline runs an aggregate SQL transformation on a BigQuery table every two hours and appends the result to another existing BigQuery table. You need to configure the pipeline to retry if errors occur. You want the pipeline to send an email notification after three consecutive failures. What should you do?",
      "options": [
        "Use the BigQueryUpsertTableOperator in Cloud Composer, set the retry parameter to three, and set the email_on_failure parameter to true.",
        "Use the BigQueryInsertJobOperator in Cloud Composer, set the retry parameter to three, and set the email_on_failure parameter to true.",
        "Create a BigQuery scheduled query to run the SQL transformation with schedule options that repeats every two hours, and enable email notifications.",
        "Create a BigQuery scheduled query to run the SQL transformation with schedule options that repeats every two hours, and enable notification to Pub/Sub topic. Use Pub/Sub and Cloud Functions to send an email after three failed executions."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_426",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "Your startup has a web application that currently serves customers out of a single region in Asia. You are targeting funding that will allow your startup to serve customers globally. Your current goal is to optimize for cost, and your post-funding goal is to optimize for global presence and performance. You must use a native JDBC driver. What should you do?",
      "options": [
        "Use Cloud Spanner to configure a single region instance initially, and then configure multi-region Cloud Spanner instances after securing funding.",
        "Use a Cloud SQL for PostgreSQL highly available instance first, and Bigtable with US, Europe, and Asia replication after securing funding.",
        "Use a Cloud SQL for PostgreSQL zonal instance first, and Bigtable with US, Europe, and Asia after securing funding.",
        "Use a Cloud SQL for PostgreSQL zonal instance first, and Cloud SQL for PostgreSQL with highly available configuration after securing funding."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_427",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "Your organization stores customer data in an on-premises Apache Hadoop cluster in Apache Parquet format. Data is processed on a daily basis by Apache Spark jobs that run on the cluster. You are migrating the Spark jobs and Parquet data to Google Cloud. BigQuery will be used on future transformation pipelines so you need to ensure that your data is available in BigQuery. You want to use managed services, while minimizing ETL data processing changes and overhead costs. What should you do?",
      "options": [
        "Migrate your data to Cloud Storage and migrate the metadata to Dataproc Metastore (DPMS). Refactor Spark pipelines to write and read data on Cloud Storage, and run them on Dataproc Serverless.",
        "Migrate your data to Cloud Storage and register the bucket as a Dataplex asset. Refactor Spark pipelines to write and read data on Cloud Storage, and run them on Dataproc Serverless.",
        "Migrate your data to BigQuery. Refactor Spark pipelines to write and read data on BigQuery, and run them on Dataproc Serverless.",
        "Migrate your data to BigLake. Refactor Spark pipelines to write and read data on Cloud Storage, and run them on Dataproc on Compute Engine."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_428",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You work for a manufacturing company that sources up to 750 different components, each from a different supplier. You've collected a labeled dataset that has on average 1000 examples for each unique component. Your team wants to implement an app to help warehouse workers recognize incoming components based on a photo of the component. You want to implement the first working version of this app (as Proof-Of-Concept) within a few working days. What should you do?",
      "options": [
        "Use Cloud Vision AutoML with the existing dataset.",
        "Use Cloud Vision AutoML, but reduce your dataset twice.",
        "Use Cloud Vision API by providing custom labels as recognition hints.",
        "Train your own image recognition model leveraging transfer learning techniques."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_429",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are migrating your on-premises data warehouse to BigQuery. One of the upstream data sources resides on a MySQL. database that runs in your on-premises data center with no public IP addresses. You want to ensure that the data ingestion into BigQuery is done securely and does not go through the public internet. What should you do?",
      "options": [
        "Update your existing on-premises ETL tool to write to BigQuery by using the BigQuery Open Database Connectivity (ODBC) driver. Set up the proxy parameter in the simba.googlebigqueryodbc.ini file to point to your data center\u2019s NAT gateway.",
        "Use Datastream to replicate data from your on-premises MySQL database to BigQuery. Set up Cloud Interconnect between your on-premises data center and Google Cloud. Use Private connectivity as the connectivity method and allocate an IP address range within your VPC network to the Datastream connectivity configuration. Use Server-only as the encryption type when setting up the connection profile in Datastream.",
        "Use Datastream to replicate data from your on-premises MySQL database to BigQuery. Use Forward-SSH tunnel as the connectivity method to establish a secure tunnel between Datastream and your on-premises MySQL database through a tunnel server in your on-premises data center. Use None as the encryption type when setting up the connection profile in Datastream.",
        "Use Datastream to replicate data from your on-premises MySQL database to BigQuery. Gather Datastream public IP addresses of the Google Cloud region that will be used to set up the stream. Add those IP addresses to the firewall allowlist of your on-premises data center. Use IP Allowlisting as the connectivity method and Server-only as the encryption type when setting up the connection profile in Datastream."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_430",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You stream order data by using a Dataflow pipeline, and write the aggregated result to Memorystore. You provisioned a Memorystore for Redis instance with Basic Tier, 4 GB capacity, which is used by 40 clients for read-only access. You are expecting the number of read-only clients to increase significantly to a few hundred and you need to be able to support the demand. You want to ensure that read and write access availability is not impacted, and any changes you make can be deployed quickly. What should you do?",
      "options": [
        "Create a new Memorystore for Redis instance with Standard Tier. Set capacity to 4 GB and read replica to No read replicas (high availability only). Delete the old instance.",
        "Create a new Memorystore for Redis instance with Standard Tier. Set capacity to 5 GB and create multiple read replicas. Delete the old instance.",
        "Create a new Memorystore for Memcached instance. Set a minimum of three nodes, and memory per node to 4 GB. Modify the Dataflow pipeline and all clients to use the Memcached instance. Delete the old instance.",
        "Create multiple new Memorystore for Redis instances with Basic Tier (4 GB capacity). Modify the Dataflow pipeline and new clients to use all instances."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_431",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You receive data files in CSV format monthly from a third party. You need to cleanse this data, but every third month the schema of the files changes. Your requirements for implementing these transformations include: \u2711 Executing the transformations on a schedule \u2711 Enabling non-developer analysts to modify transformations \u2711 Providing a graphical tool for designing transformations What should you do?",
      "options": [
        "Use Dataprep by Trifacta to build and maintain the transformation recipes, and execute them on a scheduled basis",
        "Load each month's CSV data into BigQuery, and write a SQL query to transform the data to a standard schema. Merge the transformed tables together with a SQL query",
        "Help the analysts write a Dataflow pipeline in Python to perform the transformation. The Python code should be stored in a revision control system and modified as the incoming data's schema changes",
        "Use Apache Spark on Dataproc to infer the schema of the CSV file before creating a Dataframe. Then implement the transformations in Spark SQL before writing the data out to Cloud Storage and loading into BigQuery"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_432",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are designing a data warehouse in BigQuery to analyze sales data for a telecommunication service provider. You need to create a data model for customers, products, and subscriptions. All customers, products, and subscriptions can be updated monthly, but you must maintain a historical record of all data. You plan to use the visualization layer for current and historical reporting. You need to ensure that the data model is simple, easy-to-use, and cost-effective. What should you do?",
      "options": [
        "Create a normalized model with tables for each entity. Use snapshots before updates to track historical data.",
        "Create a normalized model with tables for each entity. Keep all input files in a Cloud Storage bucket to track historical data.",
        "Create a denormalized model with nested and repeated fields. Update the table and use snapshots to track historical data.",
        "Create a denormalized, append-only model with nested and repeated fields. Use the ingestion timestamp to track historical data."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_433",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You need to move 2 PB of historical data from an on-premises storage appliance to Cloud Storage within six months, and your outbound network capacity is constrained to 20 Mb/sec. How should you migrate this data to Cloud Storage?",
      "options": [
        "Use Transfer Appliance to copy the data to Cloud Storage",
        "Use gsutil cp \"\u20ac\u05d2J to compress the content being uploaded to Cloud Storage",
        "Create a private URL for the historical data, and then use Storage Transfer Service to copy the data to Cloud Storage",
        "Use trickle or ionice along with gsutil cp to limit the amount of bandwidth gsutil utilizes to less than 20 Mb/sec so it does not interfere with the production traffic"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_434",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are designing a cloud-native historical data processing system to meet the following conditions: \u2711 The data being analyzed is in CSV, Avro, and PDF formats and will be accessed by multiple analysis tools including Dataproc, BigQuery, and Compute Engine. \u2711 A batch pipeline moves daily data. \u2711 Performance is not a factor in the solution. \u2711 The solution design should maximize availability. How should you design data storage for this solution?",
      "options": [
        "Create a Dataproc cluster with high availability. Store the data in HDFS, and perform analysis as needed.",
        "Store the data in BigQuery. Access the data using the BigQuery Connector on Dataproc and Compute Engine.",
        "Store the data in a regional Cloud Storage bucket. Access the bucket directly using Dataproc, BigQuery, and Compute Engine.",
        "Store the data in a multi-regional Cloud Storage bucket. Access the data directly using Dataproc, BigQuery, and Compute Engine."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_435",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are part of a healthcare organization where data is organized and managed by respective data owners in various storage services. As a result of this decentralized ecosystem, discovering and managing data has become difficult. You need to quickly identify and implement a cost-optimized solution to assist your organization with the following: \u2022 Data management and discovery \u2022 Data lineage tracking \u2022 Data quality validation How should you build the solution?",
      "options": [
        "Use BigLake to convert the current solution into a data lake architecture.",
        "Build a new data discovery tool on Google Kubernetes Engine that helps with new source onboarding and data lineage tracking.",
        "Use BigQuery to track data lineage, and use Dataprep to manage data and perform data quality validation.",
        "Use Dataplex to manage data, track data lineage, and perform data quality validation."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_436",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are developing a fraud detection model using BigQuery ML. You have a raw transaction dataset and need to create new features such as the average_transaction_amount_last_24_hours and time_since_last_transaction. These features require aggregation and time-window calculations on the existing data. The goal is to ensure that these features are consistently applied during both model training and prediction without manual intervention. You need to prepare these features efficiently for your model. What should you do?",
      "options": [
        "Implement a Cloud Run function that triggers on new transactions, calculates the features, and inserts them into a feature store before model serving.",
        "Export the BigQuery data to Cloud Storage, perform feature engineering using a custom Python script in a Dataflow job, and then re-import the engineered features into BigQuery.",
        "Use the TRANSFORM clause within the CREATE MODEL statement, leveraging SQL functions for aggregations and time-based calculations.",
        "Create a separate BigQuery table containing pre-computed features using complex SQL queries and join this table with the raw data during model training and serving."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_437",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You work for a shipping company that has distribution centers where packages move on delivery lines to route them properly. The company wants to add cameras to the delivery lines to detect and track any visual damage to the packages in transit. You need to create a way to automate the detection of damaged packages and flag them for human review in real time while the packages are in transit. Which solution should you choose?",
      "options": [
        "Use BigQuery machine learning to be able to train the model at scale, so you can analyze the packages in batches.",
        "Train an AutoML model on your corpus of images, and build an API around that model to integrate with the package tracking applications.",
        "Use the Cloud Vision API to detect for damage, and raise an alert through Cloud Functions. Integrate the package tracking applications with this function.",
        "Use TensorFlow to create a model that is trained on your corpus of images. Create a Python notebook in Cloud Datalab that uses this model so you can analyze for damaged packages."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_438",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You want to rebuild your batch pipeline for structured data on Google Cloud. You are using PySpark to conduct data transformations at scale, but your pipelines are taking over twelve hours to run. To expedite development and pipeline run time, you want to use a serverless tool and SOL syntax. You have already moved your raw data into Cloud Storage. How should you build the pipeline on Google Cloud while meeting speed and processing requirements?",
      "options": [
        "Convert your PySpark commands into SparkSQL queries to transform the data, and then run your pipeline on Dataproc to write the data into BigQuery.",
        "Ingest your data into Cloud SQL, convert your PySpark commands into SparkSQL queries to transform the data, and then use federated quenes from BigQuery for machine learning.",
        "Ingest your data into BigQuery from Cloud Storage, convert your PySpark commands into BigQuery SQL queries to transform the data, and then write the transformations to a new table.",
        "Use Apache Beam Python SDK to build the transformation pipelines, and write the data into BigQuery."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_439",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You have one BigQuery dataset which includes customers\u2019 street addresses. You want to retrieve all occurrences of street addresses from the dataset. What should you do?",
      "options": [
        "Write a SQL query in BigQuery by using REGEXP_CONTAINS on all tables in your dataset to find rows where the word \u201cstreet\u201d appears.",
        "Create a deep inspection job on each table in your dataset with Cloud Data Loss Prevention and create an inspection template that includes the STREET_ADDRESS infoType.",
        "Create a discovery scan configuration on your organization with Cloud Data Loss Prevention and create an inspection template that includes the STREET_ADDRESS infoType.",
        "Create a de-identification job in Cloud Data Loss Prevention and use the masking transformation."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_440",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You need to look at BigQuery data from a specific table multiple times a day. The underlying table you are querying is several petabytes in size, but you want to filter your data and provide simple aggregations to downstream users. You want to run queries faster and get up-to-date insights quicker. What should you do?",
      "options": [
        "Run a scheduled query to pull the necessary data at specific intervals dally.",
        "Use a cached query to accelerate time to results.",
        "Limit the query columns being pulled in the final result.",
        "Create a materialized view based off of the query being run."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_441",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are deploying a MySQL database workload onto Cloud SQL. The database must be able to scale up to support several readers from various geographic regions. The database must be highly available and meet low RTO and RPO requirements, even in the event of a regional outage. You need to ensure that interruptions to the readers are minimal during a database failover. What should you do?",
      "options": [
        "Create a highly available Cloud SQL instance in region Create a highly available read replica in region B. Scale up read workloads by creating cascading read replicas in multiple regions. Backup the Cloud SQL instances to a multi- regional Cloud Storage bucket. Restore the Cloud SQL backup to a new instance in another region when Region A is down.",
        "Create a highly available Cloud SQL instance in region A. Scale up read workloads by creating read replicas in multiple regions. Promote one of the read replicas when region A is down.",
        "Create a highly available Cloud SQL instance in region A. Create a highly available read replica in region B. Scale up read workloads by creating cascading read replicas in multiple regions. Promote the read replica in region B when region A is down.",
        "Create a highly available Cloud SQL instance in region A. Scale up read workloads by creating read replicas in the same region. Failover to the standby Cloud SQL instance when the primary instance fails."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_442",
      "batch": "Batch 9",
      "type": "multiple",
      "prompt": "Your company is in the process of migrating its on-premises data warehousing solutions to BigQuery. The existing data warehouse uses trigger-based change data capture (CDC) to apply updates from multiple transactional database sources on a daily basis. With BigQuery, your company hopes to improve its handling of CDC so that changes to the source systems are available to query in BigQuery in near-real time using log-based CDC streams, while also optimizing for the performance of applying changes to the data warehouse. Which two steps should they take to ensure that changes are available in the BigQuery reporting table with minimal latency while reducing compute overhead? (Choose two.)",
      "options": [
        "Perform a DML INSERT, UPDATE, or DELETE to replicate each individual CDC record in real time directly on the reporting table.",
        "Insert each new CDC record and corresponding operation type to a staging table in real time.",
        "Periodically DELETE outdated records from the reporting table.",
        "Periodically use a DML MERGE to perform several DML INSERT, UPDATE, and DELETE operations at the same time on the reporting table.",
        "Insert each new CDC record and corresponding operation type in real time to the reporting table, and use a materialized view to expose only the newest version of each unique record."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: B, D",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_443",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "Your car factory is pushing machine measurements as messages into a Pub/Sub topic in your Google Cloud project. A Dataflow streaming job, that you wrote with the Apache Beam SDK, reads these messages, sends acknowledgment to Pub/Sub, applies some custom business logic in a DoFn instance, and writes the result to BigQuery. You want to ensure that if your business logic fails on a message, the message will be sent to a Pub/Sub topic that you want to monitor for alerting purposes. What should you do?",
      "options": [
        "Enable retaining of acknowledged messages in your Pub/Sub pull subscription. Use Cloud Monitoring to monitor the subscription/num_retained_acked_messages metric on this subscription.",
        "Use an exception handling block in your Dataflow\u2019s DoFn code to push the messages that failed to be transformed through a side output and to a new Pub/Sub topic. Use Cloud Monitoring to monitor the topic/num_unacked_messages_by_region metric on this new topic.",
        "Enable dead lettering in your Pub/Sub pull subscription, and specify a new Pub/Sub topic as the dead letter topic. Use Cloud Monitoring to monitor the subscription/dead_letter_message_count metric on your pull subscription.",
        "Create a snapshot of your Pub/Sub pull subscription. Use Cloud Monitoring to monitor the snapshot/num_messages metric on this snapshot."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_444",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are building a streaming Dataflow pipeline that ingests noise level data from hundreds of sensors placed near construction sites across a city. The sensors measure noise level every ten seconds, and send that data to the pipeline when levels reach above 70 dBA. You need to detect the average noise level from a sensor when data is received for a duration of more than 30 minutes, but the window ends when no data has been received for 15 minutes. What should you do?",
      "options": [
        "Use session windows with a 15-minute gap duration.",
        "Use session windows with a 30-minute gap duration.",
        "Use hopping windows with a 15-minute window, and a thirty-minute period.",
        "Use tumbling windows with a 15-minute window and a fifteen-minute .withAllowedLateness operator."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_445",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are creating the CI/CD cycle for the code of the directed acyclic graphs (DAGs) running in Cloud Composer. Your team has two Cloud Composer instances: one instance for development and another instance for production. Your team is using a Git repository to maintain and develop the code of the DAGs. You want to deploy the DAGs automatically to Cloud Composer when a certain tag is pushed to the Git repository. What should you do?",
      "options": [
        "1. Use Cloud Build to copy the code of the DAG to the Cloud Storage bucket of the development instance for DAG testing. 2. If the tests pass, use Cloud Build to copy the code to the bucket of the production instance.",
        "1. Use Cloud Build to build a container with the code of the DAG and the KubernetesPodOperator to deploy the code to the Google Kubernetes Engine (GKE) cluster of the development instance for testing. 2. If the tests pass, use the KubernetesPodOperator to deploy the container to the GKE cluster of the production instance.",
        "1. Use Cloud Build to build a container and the KubernetesPodOperator to deploy the code of the DAG to the Google Kubernetes Engine (GKE) cluster of the development instance for testing. 2. If the tests pass, copy the code to the Cloud Storage bucket of the production instance.",
        "1. Use Cloud Build to copy the code of the DAG to the Cloud Storage bucket of the development instance for DAG testing. 2. If the tests pass, use Cloud Build to build a container with the code of the DAG and the KubernetesPodOperator to deploy the container to the Google Kubernetes Engine (GKE) cluster of the production instance."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_446",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "Your chemical company needs to manually check documentation for customer order. You use a pull subscription in Pub/Sub so that sales agents get details from the order. You must ensure that you do not process orders twice with different sales agents and that you do not add more complexity to this workflow. What should you do?",
      "options": [
        "Use a Deduplicate PTransform in Dataflow before sending the messages to the sales agents.",
        "Create a transactional database that monitors the pending messages.",
        "Use Pub/Sub exactly-once delivery in your pull subscription.",
        "Create a new Pub/Sub push subscription to monitor the orders processed in the agent's system."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_447",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You have a Cloud SQL for PostgreSQL instance in Region\u2019 with one read replica in Region2 and another read replica in Region3. An unexpected event in Region\u2019 requires that you perform disaster recovery by promoting a read replica in Region2. You need to ensure that your application has the same database capacity available before you switch over the connections. What should you do?",
      "options": [
        "Enable zonal high availability on the primary instance. Create a new read replica in a new region.",
        "Create a cascading read replica from the existing read replica in Region3.",
        "Create two new read replicas from the new primary instance, one in Region3 and one in a new region.",
        "Create a new read replica in Region1, promote the new read replica to be the primary instance, and enable zonal high availability."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_448",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "). You need ads data to serve AI models and historical data for analytics. Longtail and outlier data points need to be identified. You want to cleanse the data in near-real time before running it through AI models. What should you do?",
      "options": [
        "Use Cloud Storage as a data warehouse, shell scripts for processing, and BigQuery to create views for desired datasets.",
        "Use Dataflow to identify longtail and outlier data points programmatically, with BigQuery as a sink.",
        "Use BigQuery to ingest, prepare, and then analyze the data, and then run queries to create views.",
        "Use Cloud Composer to identify longtail and outlier data points, and then output a usable dataset to BigQuery."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_449",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are building a predictive maintenance model to preemptively detect part defects in bridges. You plan to use high definition images of the bridges as model inputs. You need to explain the output of the model to the relevant stakeholders so they can take appropriate action. How should you build the model?",
      "options": [
        "Use scikit-learn to build a tree-based model, and use SHAP values to explain the model output.",
        "Use scikit-learn to build a tree-based model, and use partial dependence plots (PDP) to explain the model output.",
        "Use TensorFlow to create a deep learning-based model, and use Integrated Gradients to explain the model output.",
        "Use TensorFlow to create a deep learning-based model, and use the sampled Shapley method to explain the model output."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_450",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are working as a Data Engineer at a Gaming startup. The business team is complaining about the late arrival of prediction data of the demand forecast process. You noticed that current data transformation on the structured data built with PySpark is taking over 14 hours to run. Raw data are parquet files stored in Cloud Storage and its size is about 1TB. You have been asked to speed up the run time while minimizing infrastructure management tasks using SQL for data transformation, and reducing the data processing time by 50%. How should you enhance the data transformation task to reduce the data processing time?",
      "options": [
        "Keep the parquet files in Cloud Storage. Use SparkSQL instead of PySpark to transform the data. run the workload on Dataproc to write the results into BigQuery",
        "Keep the data on Cloud Storage, Use federated queries for data queries and transformations. Write the results into BigQuery",
        "Ingest the data into BigQuery, run SQL queries for data transformations, and write the results into a new table",
        "Convert the parquet files in Cloud Storage to AVRO format. Use SparkSQL instead of PySpark to transform the data. run the workload on Dataproc to write the results into BigQuery"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_451",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "What Dataflow concept determines when a Window's contents should be output based on certain criteria being met?",
      "options": [
        "Triggers",
        "Sessions",
        "Windows",
        "OutputCriteria"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_452",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "Your company built a TensorFlow neutral-network model with a large number of neurons and layers. The model fits well for the training data. However, when tested against new data, it performs poorly. What method can you employ to address this?",
      "options": [
        "Threading",
        "Serialization",
        "Dropout Methods",
        "Dimensionality Reduction"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_453",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "Your company has a multi-year backup of data in parquet format. you have been asked to use Google Cloud Services to move this backup, conduct preliminary analysis using ANSI SQL and then automate transformations with Apache Spark. What are the appropriate Google Cloud Services to store and transform the parquet files?",
      "options": [
        "Use Cloud Storage for storage, Dataproc for transformations",
        "Use Cloud Storage for storage, Dataflow for transformations",
        "Use BigQuery for storage, Dataproc for transformations",
        "Use BigQuery for storage, Dataflow for transformations"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_454",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You are building a model to make clothing recommendations. You know a user's fashion preference is likely to change over time, so you build a data pipeline to stream new data back to the model as it becomes available. How should you use this data to train the model?",
      "options": [
        "Continuously retrain the model on just the new data.",
        "Continuously retrain the model on a combination of existing data and the new data.",
        "Train on the existing data while using the new data as your test set.",
        "Train on the new data while using the existing data as your test set."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_455",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You need to copy millions of sensitive patient records from a relational database to BigQuery. The total size of the database is 10 TB. You need to design a solution that is secure and time- efficient. What should you do?",
      "options": [
        "Export the records from the database as an Avro file. Upload the file to GCS using gsutil, and then load the Avro file into BigQuery using the BigQuery web UI in the GCP Console.",
        "Export the records from the database as an Avro file. Copy the file onto a Transfer Appliance and send it to Google, and then load the Avro file into BigQuery using the BigQuery web UI in the GCP Console.",
        "Export the records from the database into a CSV file. Create a public URL for the CSV file, and then use Storage Transfer Service to move the file to Cloud Storage. Load the CSV file into BigQuery using the BigQuery web UI in the GCP Console.",
        "Export the records from the database as an Avro file. Create a public URL for the Avro file, and then use Storage Transfer Service to move the file to Cloud Storage. Load the Avro file into BigQuery using the BigQuery web UI in the GCP Console."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_456",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You used Cloud Dataprep to create a recipe on a sample of data in a BigQuery table. You want to reuse this recipe on a daily upload of data with the same schema, after the load job with variable execution time completes. What should you do?",
      "options": [
        "Create a cron schedule in Cloud Dataprep.",
        "Create an App Engine cron job to schedule the execution of the Cloud Dataprep job.",
        "Export the recipe as a Cloud Dataprep template, and create a job in Cloud Scheduler.",
        "Export the Cloud Dataprep job as a Cloud Dataflow template, and incorporate it into a Cloud Composer job."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_457",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You have a query that filters a BigQuery table using a WHERE clause on timestamp and ID columns. By using bq query -dry_run you learn that the query triggers a full scan of the table, even though the filter on timestamp and ID select a tiny fraction of the overall dat You want to reduce the amount of data scanned by BigQuery with minimal changes to existing SQL queries. What should you do?",
      "options": [
        "Create a separate table for each ID.",
        "Use the LIMIT keyword to reduce the number of rows returned.",
        "Recreate the table with a partitioning column and clustering column.",
        "Use the bq query - -maximum_bytes_billed flag to restrict the number of bytes billed."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_458",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You're training a model to predict housing prices based on an available dataset with real estate properties. Your plan is to train a fully connected neural net, and you've discovered that the dataset contains latitude and longtitude of the property. Real estate professionals have told you that the location of the property is highly influential on price, so you'd like to engineer a feature that incorporates this physical dependency. What should you do?",
      "options": [
        "Provide latitude and longtitude as input vectors to your neural net.",
        "Create a numeric column from a feature cross of latitude and longtitude.",
        "Create a feature cross of latitude and longtitude, bucketize at the minute level and use L1 regularization during optimization.",
        "Create a feature cross of latitude and longtitude, bucketize it at the minute level and use L2 regularization during optimization."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_459",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "You need ads data to serve Al models and historical data tor analytics longtail and outlier data points need to be identified. You want to cleanse the data n near-reel time before running it through Al models. What should you do?",
      "options": [
        "Use Cloud Storage as a data warehouse shell scripts tor processing, and BigQuery to create views tor desired datasets",
        "Use BigQuery to ingest prepare and then analyze the data and then run queries to create views",
        "Use Dataflow to identity longtail and outber data points programmatically with BigQuery as a sink",
        "Use Cloud Composer to identify longtail and outlier data points, and then output a usable dataset to BigQuery"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "31 questions in this batch.",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_460",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You are designing a data mesh on Google Cloud with multiple distinct data engineering teams building data products. The typical data curation design pattern consists of landing files in Cloud Storage, transforming raw data in Cloud Storage and BigQuery datasets, and storing the final curated data product in BigQuery datasets. You need to configure Dataplex to ensure that each team can access only the assets needed to build their data products. You also need to ensure that teams can easily share the curated data product. What should you do?",
      "options": [
        "1. Create a single Dataplex virtual lake and create a single zone to contain landing, raw, and curated data. 2. Provide each data engineering team access to the virtual lake.",
        "1. Create a single Dataplex virtual lake and create a single zone to contain landing, raw, and curated data. 2. Build separate assets for each data product within the zone. 3. Assign permissions to the data engineering teams at the zone level.",
        "1. Create a Dataplex virtual lake for each data product, and create multiple zones for landing, raw, and curated data. 2. Provide the data engineering teams with full access to the virtual lake assigned to their data product."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_461",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You are designing a stateful data processing pipeline that reads data from a Cloud Storage bucket and writes transformed data to a BigQuery table. The pipeline must be highly available and resilient to zonal failures within the us-central1 region. You need to configure a Dataflow pipeline ensuring minimal disruption during a zonal outage. What should you do?",
      "options": [
        "Launch the Dataflow job with the --region=us-central1 parameter.",
        "Deploy the Dataflow job to a single zone within us-central1 and configure it to use a regional persistent disk to store its state.",
        "Deploy the Dataflow job to a single zone within us-central1 and use a multi-regional Cloud Storage bucket to store its state.",
        "Launch the Dataflow job with the --zone=us-central1a parameter."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_462",
      "batch": "Batch 10",
      "type": "multiple",
      "prompt": "You have a streaming pipeline that ingests data from Pub/Sub in production. You need to update this streaming pipeline with improved business logic. You need to ensure that the updated pipeline reprocesses the previous two days of delivered Pub/Sub messages. What should you do? (Choose two.)",
      "options": [
        "Use Pub/Sub Seek with a timestamp.",
        "Use Pub/Sub Snapshot capture two days before the deployment.",
        "Create a new Pub/Sub subscription two days before the deployment.",
        "Use the Pub/Sub subscription clear-retry-policy flag",
        "Use the Pub/Sub subscription retain-acked-messages flag."
      ],
      "correctAnswers": [
        0,
        4
      ],
      "explanation": "Correct Answer: A, E",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_463",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You are working on a linear regression model on BigQuery ML to predict a customer's likelihood of purchasing your company's products. Your model uses a city name variable as a key predictive component. In order to train and serve the model, your data must be organized in columns. You want to prepare your data using the least amount of coding while maintaining the predictable variables. What should you do?",
      "options": [
        "Use SQL in BigQuery to transform the state column using a one-hot encoding method, and make each city a column with binary values.",
        "Use Cloud Data Fusion to assign each city to a region that is labeled as 1, 2, 3, 4, or 5, and then use that number to represent the city in the model.",
        "Create a new view with BigQuery that does not include a column with city information.",
        "Use TensorFlow to create a categorical variable with a vocabulary list. Create the vocabulary file and upload that as part of your model to BigQuery ML."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_464",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You have an Apache Kafka cluster on-prem with topics containing web application logs. You need to replicate the data to Google Cloud for analysis in BigQuery and Cloud Storage. The preferred replication method is mirroring to avoid deployment of Kafka Connect plugins. What should you do?",
      "options": [
        "Deploy the PubSub Kafka connector to your on-prem Kafka cluster and configure PubSub as a Source connector. Use a Dataflow job to read from PubSub and write to GCS.",
        "Deploy a Kafka cluster on GCE VM Instances with the PubSub Kafka connector configured as a Sink connector. Use a Dataproc cluster or Dataflow job to read from Kafka and write to GCS.",
        "Deploy a Kafka cluster on GCE VM Instances. Configure your on-prem cluster to mirror your topics to the cluster running in GCE. Use a Dataproc cluster or Dataflow job to read from Kafka and write to GCS.",
        "Deploy the PubSub Kafka connector to your on-prem Kafka cluster and configure PubSub as a Sink connector. Use a Dataflow job to read from PubSub and write to GCS."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_465",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You created a new version of a Dataflow streaming data ingestion pipeline that reads from Pub/Sub and writes to BigQuery. The previous version of the pipeline that runs in production uses a 5-minute window for processing. You need to deploy the new version of the pipeline without losing any data, creating inconsistencies, or increasing the processing latency by more than 10 minutes. What should you do?",
      "options": [
        "Drain the old pipeline, then start the new pipeline.",
        "Snapshot the old pipeline, stop the old pipeline, and then start the new pipeline from the snapshot.",
        "Update the old pipeline with the new pipeline code.",
        "Cancel the old pipeline, then start the new pipeline."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_466",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "Your company has data assets across multiple Cloud Storage buckets and BigQuery datasets containing raw and processed data. The requirement is to establish a unified data governance framework that allows for centralized metadata discovery, data quality monitoring, and consistent security policy application across these various data stores without physically moving or duplicating the data. You need to implement a solution to achieve this federated governance. What should you do?",
      "options": [
        "1. Export metadata out of Dataplex Universal Catalog by running a metadata export job. 2. Implement Dataproc Metastore to manage table schemas and Apache Hive metastore for metadata discovery. 3. Manage security using a combination of BigQuery row-level security and Cloud Storage policies.",
        "1. Use Dataplex to organize the BigQuery datasets and Cloud Storage buckets into lakes and zones. 2. Use Dataplex for automated metadata discovery, centralized security policy management, data profiling, and data quality tasks.",
        "1. Deploy a centralized Cloud SQL database to store metadata extracted from BigQuery and Cloud Storage using custom scripts. 2. Integrate the database with Looker Studio for data discovery and visualization. 3. Implement a custom policy engine using Cloud Run functions triggered by changes in IAM policies to enforce consistent security across projects."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_467",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You want to rebuild your batch pipeline for structured data on Google Cloud. You are using PySpark to conduct data transformations at scale, but your pipelines are taking over twelve hours to run. To expedite development and pipeline run time, you want to use a serverless tool and SQL syntax. You have already moved your raw data into Cloud Storage. How should you build the pipeline on Google Cloud while meeting speed and processing requirements?",
      "options": [
        "Convert your PySpark commands into SparkSQL queries to transform the data; and then run your pipelineb on Dataproc to write the data into BigQuery",
        "Ingest your data into Cloud SQL, convert your PySpark commands into SparkSQL queries to transform the data, and then use federated queries from BigQuery for machine learning.",
        "Ingest your data into BigQuery from Cloud Storage, convert your PySpark commands into BigQuery SQL queries to transform the data, and then write the transformations to a new table",
        "Use Apache Beam Python SDK to build the transformation pipelines, and write the data into BigQuery"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_468",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You have a job that you want to cancel. It is a streaming pipeline, and you want to ensure that any data that is in-flight is processed and written to the output. Which of the following commands can you use on the Dataflow monitoring console to stop the pipeline job?",
      "options": [
        "Cancel",
        "Drain",
        "Stop",
        "Finish"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_469",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You have a network of 1000 sensors. The sensors generate time series data: one metric per sensor per second, along with a timestamp. You already have 1 TB of data, and expect the data to grow by 1 GB every day. You need to access this data in two ways. The first access pattern requires retrieving the metric from one specific sensor stored at a specific timestamp, with a median single- digit millisecond latency. The second access pattern requires running complex analytic queries on the data, including joins, once a day. How should you store this data?",
      "options": [
        "Store your data in Bigtable. Concatenate the sensor ID and metric, and use it as the row key. Perform an export to BigQuery every day.",
        "Store your data in BigQuery. Concatenate the sensor ID and timestamp, and use it as the primary key.",
        "Store your data in BigQuery. Use the metric as a primary key.",
        "Store your data in Bigtable. Concatenate the sensor ID and timestamp and use it as the row key. Perform an export to BigQuery every day."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_470",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "Your company uses separate Google Cloud projects for development, staging, and production. Developers need edit access in the development project, read-only access in the staging project, and no access in the production project. You need an effective and manageable solution to assign and enforce these permissions according to Google-recommended practices. What should you do?",
      "options": [
        "Create separate VPC Service Controls perimeters for each project and use access levels.",
        "Grant individual developers specific IAM roles directly on each project.",
        "Configure firewall rules within each project's VPC to block traffic from unauthorized developer machines.",
        "Create Google Groups for access levels, assign developers to groups, and grant the groups the appropriate IAM roles on each project."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_471",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You are operating a Cloud Dataflow streaming pipeline. The pipeline aggregates events from a Cloud Pub/ Sub subscription source, within a window, and sinks the resulting aggregation to a Cloud Storage bucket. The source has consistent throughput. You want to monitor an alert on behavior of the pipeline with Cloud Stackdriver to ensure that it is processing data. Which Stackdriver alerts should you create?",
      "options": [
        "An alert based on a decrease of subscription/num_undelivered_messages for the source and a rate of change increase of instance/storage/used_bytes for the destination",
        "An alert based on an increase of subscription/num_undelivered_messages for the source and a rate of change decrease of instance/storage/used_bytes for the destination",
        "An alert based on a decrease of instance/storage/used_bytes for the source and a rate of change increase of subscription/num_undelivered_messages for the destination",
        "An alert based on an increase of instance/storage/used_bytes for the source and a rate of change decrease of subscription/num_undelivered_messages for the destination"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_472",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You want to create a machine learning model using BigQuery ML and create an endpoint for hosting the model using Vertex AI. This will enable the processing of continuous streaming data in near-real time from multiple vendors. The data may contain invalid values. What should you do?",
      "options": [
        "Create a new BigQuery dataset and use streaming inserts to land the data from multiple vendors. Configure your BigQuery ML model to use the \"ingestion\" dataset as the framing data.",
        "Create a Pub/Sub topic and send all vendor data to it. Use Dataflow to process and sanitize the Pub/ Sub data and stream it to BigQuery.",
        "Create a Pub/Sub topic and send all vendor data to it. Connect a Cloud Function to the topic to process the data and store it in BigQuery.",
        "Use BigQuery streaming inserts to land the data from multiple vendors where your BigQuery dataset ML model is deployed."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_473",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You are migrating your data warehouse to Google Cloud and decommissioning your on-premises data center. Because this is a priority for your company, you know that bandwidth will be made available for the initial data load to the cloud. The files being transferred are not large in number, but each file is 90 GB Additionally, you want your transactional systems to continually update the warehouse on Google Cloud in real time. What tools should you use to migrate the data and ensure that it continues to write to your warehouse?",
      "options": [
        "Storage Transfer Service for the migration, Pub/Sub and Cloud Data Fusion for the real-time updates",
        "BigQuery Data Transfer Service for the migration, Pub/Sub and Dataproc for the real-time updates",
        "gsutil for the migration; Pub/Sub and Dataflow for the real-time updates",
        "gsutil for both the migration and the real-time updates"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_474",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You have data pipelines running on BigQuery, Cloud Dataflow, and Cloud Dataproc. You need to perform health checks and monitor their behavior, and then notify the team managing the pipelines if they fail. You also need to be able to work across multiple projects. Your preference is to use managed products of features of the platform. What should you do?",
      "options": [
        "Export the information to Cloud Stackdriver, and set up an Alerting policy",
        "Run a Virtual Machine in Compute Engine with Airflow, and export the information to Stackdriver",
        "Export the logs to BigQuery, and set up App Engine to read that information and send emails if you find a failure in the logs",
        "Develop an App Engine application to consume logs using GCP API calls, and send emails if you find a failure in the logs"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_475",
      "batch": "Batch 10",
      "type": "multiple",
      "prompt": "Your company uses Looker Studio connected to BigQuery for reporting. Users are experiencing slow dashboard load times due to complex queries on a large table. The queries involve aggregations and filtering on several columns. You need to optimize query performance to decrease the dashboard load times. What should you do?",
      "options": [
        "Configure Looker Studio to use a shorter data refresh interval to ensure fresh data is always displayed.",
        "Create a materialized view in BigQuery that pre-calculates the aggregations and filters used in the Looker Studio dashboards.",
        "Implement row-level security in BigQuery to restrict data access and reduce the amount of data processed by the queries.",
        "Use BigQuery BI Engine to accelerate query performance by caching frequently accessed data."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: B, D",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_476",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "Your company is planning to migrate a large on-premises data warehouse to BigQuery. The data is currently stored in a proprietary, vendor-specific format. You need to perform a batch migration of this data to BigQuery. What should you do?",
      "options": [
        "Use the bqcommand-line tool to load the data directly from the on-premises data warehouse.",
        "Export the data to CSV files, upload the files to Cloud Storage, then load the files into BigQuery.",
        "Use the BigQuery Data Transfer Service.",
        "Use Datastream to replicate the data in real time."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_477",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You need to load a dataset with multiple terabytes of clickstream data into BigQuery. The data arrives each day as compressed JSON files in a Cloud Storage bucket. You need a low-cost, programmatic, and scalable solution to load the data into BigQuery. What should you do?",
      "options": [
        "Create an external table in BigQuery pointing to the Cloud Storage bucket and run the INSERT INTO ... SELECT * FROM external_table command.",
        "Use the BigQuery Data Transfer Service from Cloud Storage.",
        "Create a Cloud Run function to run a Python script to read and parse each JSON file, and use the BigQuery streaming insert API.",
        "Use Cloud Data Fusion to create a pipeline to load the JSON files into BigQuery."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_478",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You are integrating your legacy on-premises MySQL database into a new Google Cloud data warehouse. The database contains historical customer loyalty data which needs to be extracted daily and loaded into BigQuery. You want a managed integration solution that is secure and supports incremental loads. What should you do?",
      "options": [
        "Implement a data pipeline using Pub/Sub for streaming the data changes from MySQL.",
        "Configure a scheduled transfer in BigQuery Data Transfer Service to ingest data from the MySQL database with a scheduled transfer configuration.",
        "Leverage Database Migration Service for continuous replication of the entire database to Cloud SQL.",
        "Use Cloud SQL federated queries to directly query the on-premises MySQL database from BigQuery."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_479",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You work for an advertising company, and you've developed a Spark ML model to predict click- through rates at advertisement blocks. You've been developing everything at your on- premises data center, and now your company is migrating to Google Cloud. Your data center will be closing soon, so a rapid lift-and- shift migration is necessary. However, the data you've been using will be migrated to migrated to BigQuery. You periodically retrain your Spark ML models, so you need to migrate existing training pipelines to Google Cloud. What should you do?",
      "options": [
        "Use Cloud ML Engine for training existing Spark ML models",
        "Use Cloud Dataproc for training existing Spark ML models, but start reading data directly from BigQuery",
        "Spin up a Spark cluster on Compute Engine, and train Spark ML models on the data exported from BigQuery",
        "Rewrite your models on TensorFlow, and start using Vertex AI"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_480",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You have a data analyst team member who needs to analyze data by using BigQuery. The data analyst wants to create a data pipeline that would load 200 CSV files with an average size of 15MB from a Cloud Storage bucket into BigQuery daily. The data needs to be ingested and transformed before being accessed in BigQuery for analysis. You need to recommend a fully managed, no-code solution for the data analyst. What should you do?",
      "options": [
        "Create a Cloud Run function and schedule it to run daily using Cloud Scheduler to load the data into BigQuery.",
        "Use the BigQuery Data Transfer Service to load files from Cloud Storage to BigQuery, create a BigQuery job which transforms the data using BigQuery SQL and schedule it to run daily.",
        "Build a custom Apache Beam pipeline and run it on Dataflow to load the file from Cloud Storage to BigQuery and schedule it to run daily using Cloud Composer.",
        "Create a pipeline by using BigQuery pipelines and schedule it to load the data into BigQuery daily."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_481",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You are preparing data to serve a sales demand prediction model. The training data undergoes several pre-processing steps, including scaling numerical features and one-hot encoding categorical features. The model is deployed on Vertex AI Endpoints. You need to prevent training-serving skew and ensure accurate predictions in production. You want a solution that is easy to implement. What should you do?",
      "options": [
        "Implement a custom handler within the Vertex AI Endpoint to automatically perform data transformations before the model makes a prediction.",
        "Replicate the exact same pre-processing logic in the inference pipeline that was used during model training.",
        "Store the raw, unprocessed data in a separate Cloud Storage bucket exclusively for serving.",
        "Ensure the serving data is a smaller, random sample of the training data."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_482",
      "batch": "Batch 10",
      "type": "multiple",
      "prompt": "You are running a pipeline in Cloud Dataflow that receives messages from a Cloud Pub/Sub topic and writes the results to a BigQuery dataset in the EU. Currently, your pipeline is located in europe-west4 and has a maximum of 3 workers, instance type n1-standard-1. You notice that during peak periods, your pipeline is struggling to process records in a timely fashion, when all 3 workers are at maximum CPU utilization. Which two actions can you take to increase performance of your pipeline? (Choose two.)",
      "options": [
        "Use a larger instance type for your Cloud Dataflow workers",
        "Increase the number of max workers",
        "Create a temporary table in Cloud Spanner that will act as a buffer for new data. Create a new step in your pipeline to write to this table first, and then create a new pipeline to write from Cloud Spanner to BigQuery",
        "Create a temporary table in Cloud Bigtable that will act as a buffer for new data. Create a new step in your pipeline to write to this table first, and then create a new pipeline to write from Cloud Bigtable to BigQuery",
        "Change the zone of your Cloud Dataflow pipeline to run in us-central1"
      ],
      "correctAnswers": [
        0,
        1
      ],
      "explanation": "Correct Answer: A, B",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_483",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You need to orchestrate a pipeline with several Google Cloud services: a batch Dataflow job, then a BigQuery query job followed by a Vertex AI batch prediction. The logic is sequential. You want a lightweight, serverless orchestration solution with minimal operational overhead. What service should you use?",
      "options": [
        "Select Cloud Composer.",
        "Select Compute Engine with cron.",
        "Select Dataproc with Apache Oozie.",
        "Select Cloud Workflows."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_484",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "Your data science team needs to perform interactive SQL queries on large datasets stored in Apache Parquet format within a Cloud Storage bucket. The team is familiar with Apache Hive and wants to leverage existing HiveQL queries. You need to provide an environment for the team to run their interactive HiveQL queries directly against the data in Cloud Storage. You want to keep operational overhead to a minimum. What should you do?",
      "options": [
        "Install and configure an Apache Hadoop and Hive cluster manually on a group of Compute Engine instances.",
        "Load the Parquet data into a BigQuery native table and use the BigQuery Connector for Hive to run the queries.",
        "Configure BigQuery with an external table definition pointing to the Parquet files.",
        "Deploy a Dataproc cluster with Hive services enabled."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_485",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You are building a Dataflow pipeline to ingest customer feedback. Before loading to your data warehouse, you must validate email addresses and enrich unstructured comment strings with a generative AI sentiment classification. Invalid records need to be routed for manual review. How should you implement this pipeline?",
      "options": [
        "Configure the data source system to pre-validate data before sending it to Dataflow and use the BigQuery ML.GENERATE_TEXT command to assign a sentiment score.",
        "Use Dataflow to load all data into BigQuery and execute a SQL MERGE statement to flag invalid records and BigQuery ML to assign sentiment scores.",
        "After the Dataflow load completes, execute a Cloud Run function to scan for invalid entries and call Vertex AI to assign sentiment scores.",
        "Apply a ParDo transform in Dataflow to validate each element, use a RunInference transform to assign sentiment scores, and use side outputs to route valid/invalid records."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_486",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "Your team runs a complex analytical query daily that processes terabytes of data. Recently, after running for 20 minutes, the query fails with a \"Resources exceeded\" error. You need to resolve this issue. What should you do?",
      "options": [
        "Move from BigQuery on-demand to slot reservations.",
        "Analyze the SQL syntax for errors.",
        "Increase the maximum table size limit.",
        "Increase your project's BigQuery API request quota."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_487",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You work for an airline and you need to store weather data in a BigQuery table Weather data will be used as input to a machine learning model. The model only uses the last 30 days of weather data. You want to avoid storing unnecessary data and minimize costs. What should you do?",
      "options": [
        "Create a BigQuery table where each record has an ingestion timestamp Run a scheduled query to delete all the rows with an ingestion timestamp older than 30 days.",
        "Create a BigQuery table partitioned by ingestion time Set up partition expiration to 30 days.",
        "Create a BigQuery table partitioned by datetime value of the weather date Set up partition expiration to 30 days.",
        "Create a BigQuery table with a datetime column for the day the weather data refers to. Run a scheduled query to delete rows with a datetime value older than 30 days."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_488",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "Which Cloud Dataflow / Beam feature should you use to aggregate data in an unbounded data source every hour based on the time when the data entered the pipeline?",
      "options": [
        "An hourly watermark",
        "An event time trigger",
        "The with Allowed Lateness method",
        "A processing time trigger"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_489",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You are using a Dataflow streaming job to read messages from a message bus that does not support exactly-once delivery. Your job then applies some transformations, and loads the result into BigQuery. You want to ensure that your data is being streamed into BigQuery with exactly- once delivery semantics. You expect your ingestion throughput into BigQuery to be about 1.5 GB per second. What should you do?",
      "options": [
        "Use the BigQuery Storage Write API and ensure that your target BigQuery table is multiregional.",
        "Use the BigQuery Streaming API and ensure that your target BigQuery table is multiregional.",
        "Use the BigQuery Streaming API and ensure that your target BigQuery table is regional.",
        "Use the BigQuery Storage Write API and ensure that your target BigQuery table is regional."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "gcp_pde_490",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "You plan to deploy Cloud SQL using MySQL. You need to ensure high availability in the event of a zone failure. What should you do?",
      "options": [
        "Create a Cloud SQL instance in one zone, and create a failover replica in another zone within the same region.",
        "Create a Cloud SQL instance in one zone, and create a read replica in another zone within the same region.",
        "Create a Cloud SQL instance in one zone, and configure an external read replica in a zone in a different region.",
        "Create a Cloud SQL instance in a region, and configure automatic backup to a Cloud Storage bucket in the same region."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    }
  ]
};
