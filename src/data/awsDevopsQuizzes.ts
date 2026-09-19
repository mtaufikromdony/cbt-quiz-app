import type { QuizSet } from '../types/quiz';

export const awsDevopsMasterQuizSet: QuizSet = {
  "id": "aws_devops_master",
  "title": "AWS Certified DevOps Engineer - Professional (Full Master Bank)",
  "description": "Complete exam question bank containing all 482 practice questions. Supports custom batch splitting (10 batches) or full exam mode.",
  "category": "AWS Certification",
  "tags": [
    "AWS",
    "DevOps Engineer",
    "Professional",
    "DOP-C02",
    "Certification"
  ],
  "color": "#f59e0b",
  "timeLimitMinutes": 180,
  "createdAt": "2026-09-06T00:00:00.000Z",
  "updatedAt": "2026-09-06T00:00:00.000Z",
  "questions": [
    {
      "id": "aws_dop_1",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company provides an application to customers. The application has an Amazon API Gateway REST API that invokes an AWS Lambda function. On initialization, the Lambda function loads a large amount of data from an Amazon DynamoDB table. The data load process results in long cold-start times of 8-10 seconds. The DynamoDB table has DynamoDB Accelerator (DAX) configured. Customers report that the application intermittently takes a long time to respond to requests. The application receives thousands of requests throughout the day. In the middle of the day, the application experiences 10 times more requests than at any other time of the day. Near the end of the day, the application's request volume decreases to 10% of its normal total. A DevOps engineer needs to reduce the latency of the Lambda function at all times of the day. Which solution will meet these requirements?",
      "options": [
        "Configure provisioned concurrency on the Lambda function with a concurrency value of 1. Delete the DAX cluster for the DynamoDB table.",
        "Configure reserved concurrency on the Lambda function with a concurrency value of 0.",
        "Configure provisioned concurrency on the Lambda function. Configure AWS Application Auto Scaling on the Lambda function with provisioned concurrency values set to a minimum of 1 and a maximum of 100.",
        "Configure reserved concurrency on the Lambda function. Configure AWS Application Auto Scaling on the API Gateway API with a reserved concurrency maximum value of 100."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_2",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company has a mobile application that makes HTTP API calls to an Application Load Balancer (ALB). The ALB routes requests to an AWS Lambda function. Many different versions of the application are in use at any given time, including versions that are in testing by a subset of users. The version of the application is defined in the user-agent header that is sent with all requests to the API. After a series of recent changes to the API, the company has observed issues with the application. The company needs to gather a metric for each API operation by response code for each version of the application that is in use. A DevOps engineer has modified the Lambda function to extract the API operation name, version information from the user-agent header and response code. Which additional set of actions should the DevOps engineer take to gather the required metrics?",
      "options": [
        "Modify the Lambda function to write the API operation name, response code, and version number as a log line to an Amazon CloudWatch Logs log group. Configure a CloudWatch Logs metric filter that increments a metric for each API operation name. Specify response code and application version as dimensions for the metric.",
        "Modify the Lambda function to write the API operation name, response code, and version number as a log line to an Amazon CloudWatch Logs log group. Configure a CloudWatch Logs Insights query to populate CloudWatch metrics from the log lines. Specify response code and application version as dimensions for the metric.",
        "Configure the ALB access logs to write to an Amazon CloudWatch Logs log group. Modify the Lambda function to respond to the ALB with the API operation name, response code, and version number as response metadata. Configure a CloudWatch Logs metric filter that increments a metric for each API operation name. Specify response code and application version as dimensions for the metric.",
        "Configure AWS X-Ray integration on the Lambda function. Modify the Lambda function to create an X-Ray subsegment with the API operation name, response code, and version number. Configure X-Ray insights to extract an aggregated metric for each API operation name and to publish the metric to Amazon CloudWatch. Specify response code and application version as dimensions for the metric."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_3",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company is adopting AWS CodeDeploy to automate its application deployments for a Java-Apache Tomcat application with an Apache Webserver. The development team started with a proof of concept, created a deployment group for a developer environment, and performed functional tests within the application. After completion, the team will create additional deployment groups for staging and production. The current log level is configured within the Apache settings, but the team wants to change this configuration dynamically when the deployment occurs, so that they can set different log level configurations depending on the deployment group without having a different application revision for each group. How can these requirements be met with the LEAST management overhead and without requiring different script versions for each deployment group?",
      "options": [
        "Tag the Amazon EC2 instances depending on the deployment group. Then place a script into the application revision that calls the metadata service and the EC2 API to identify which deployment group the instance is part of. Use this information to configure the log level settings. Reference the script as part of the AfterInstall lifecycle hook in the appspec.yml file.",
        "Create a script that uses the CodeDeploy environment variable DEPLOYMENT_GROUP_ NAME to identify which deployment group the instance is part of. Use this information to configure the log level settings. Reference this script as part of the BeforeInstall lifecycle hook in the appspec.yml file.",
        "Create a CodeDeploy custom environment variable for each environment. Then place a script into the application revision that checks this environment variable to identify which deployment group the instance is part of. Use this information to configure the log level settings. Reference this script as part of the ValidateService lifecycle hook in the appspec.yml file.",
        "Create a script that uses the CodeDeploy environment variable DEPLOYMENT_GROUP_ID to identify which deployment group the instance is part of to configure the log level settings. Reference this script as part of the Install lifecycle hook in the appspec.yml file."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_4",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company requires its developers to tag all Amazon Elastic Block Store (Amazon EBS) volumes in an account to indicate a desired backup frequency. This requirement Includes EBS volumes that do not require backups. The company uses custom tags named Backup_Frequency that have values of none, dally, or weekly that correspond to the desired backup frequency. An audit finds that developers are occasionally not tagging the EBS volumes. A DevOps engineer needs to ensure that all EBS volumes always have the Backup_Frequency tag so that the company can perform backups at least weekly unless a different value is specified. Which solution will meet these requirements?",
      "options": [
        "Set up AWS Config in the account. Create a custom rule that returns a compliance failure for all Amazon EC2 resources that do not have a Backup Frequency tag applied. Configure a remediation action that uses a custom AWS Systems Manager Automation runbook to apply the Backup_Frequency tag with a value of weekly.",
        "Set up AWS Config in the account. Use a managed rule that returns a compliance failure for EC2::Volume resources that do not have a Backup Frequency tag applied. Configure a remediation action that uses a custom AWS Systems Manager Automation runbook to apply the Backup_Frequency tag with a value of weekly.",
        "Turn on AWS CloudTrail in the account. Create an Amazon EventBridge rule that reacts to EBS CreateVolume events. Configure a custom AWS Systems Manager Automation runbook to apply the Backup_Frequency tag with a value of weekly. Specify the runbook as the target of the rule.",
        "Turn on AWS CloudTrail in the account. Create an Amazon EventBridge rule that reacts to EBS CreateVolume events or EBS ModifyVolume events. Configure a custom AWS Systems Manager Automation runbook to apply the Backup_Frequency tag with a value of weekly. Specify the runbook as the target of the rule."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_5",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company is using an Amazon Aurora cluster as the data store for its application. The Aurora cluster is configured with a single DB instance. The application performs read and write operations on the database by using the cluster's instance endpoint. The company has scheduled an update to be applied to the cluster during an upcoming maintenance window. The cluster must remain available with the least possible interruption during the maintenance window. What should a DevOps engineer do to meet these requirements?",
      "options": [
        "Add a reader instance to the Aurora cluster. Update the application to use the Aurora cluster endpoint for write operations. Update the Aurora cluster's reader endpoint for reads.",
        "Add a reader instance to the Aurora cluster. Create a custom ANY endpoint for the cluster. Update the application to use the Aurora cluster's custom ANY endpoint for read and write operations.",
        "Turn on the Multi-AZ option on the Aurora cluster. Update the application to use the Aurora cluster endpoint for write operations. Update the Aurora cluster’s reader endpoint for reads.",
        "Turn on the Multi-AZ option on the Aurora cluster. Create a custom ANY endpoint for the cluster. Update the application to use the Aurora cluster's custom ANY endpoint for read and write operations"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_6",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "A company must encrypt all AMIs that the company shares across accounts. A DevOps engineer has access to a source account where an unencrypted custom AMI has been built. The DevOps engineer also has access to a target account where an Amazon EC2 Auto Scaling group will launch EC2 instances from the AMI. The DevOps engineer must share the AMI with the target account. The company has created an AWS Key Management Service (AWS KMS) key in the source account. Which additional steps should the DevOps engineer perform to meet the requirements? (Choose three.)",
      "options": [
        "In the source account, copy the unencrypted AMI to an encrypted AMI. Specify the KMS key in the copy action.",
        "In the source account, copy the unencrypted AMI to an encrypted AMI. Specify the default Amazon Elastic Block Store (Amazon EBS) encryption key in the copy action.",
        "In the source account, create a KMS grant that delegates permissions to the Auto Scaling group service-linked role in the target account.",
        "In the source account, modify the key policy to give the target account permissions to create a grant. In the target account, create a KMS grant that delegates permissions to the Auto Scaling group service-linked role.",
        "In the source account, share the unencrypted AMI with the target account.",
        "In the source account, share the encrypted AMI with the target account."
      ],
      "correctAnswers": [
        0,
        3,
        5
      ],
      "explanation": "Correct Answer: ADF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_7",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "A company uses AWS CodePipeline pipelines to automate releases of its application A typical pipeline consists of three stages build, test, and deployment. The company has been using a separate AWS CodeBuild project to run scripts for each stage. However, the company now wants to use AWS CodeDeploy to handle the deployment stage of the pipelines. The company has packaged the application as an RPM package and must deploy the application to a fleet of Amazon EC2 instances. The EC2 instances are in an EC2 Auto Scaling group and are launched from a common AMI. Which combination of steps should a DevOps engineer perform to meet these requirements? (Choose two.)",
      "options": [
        "Create a new version of the common AMI with the CodeDeploy agent installed. Update the IAM role of the EC2 instances to allow access to CodeDeploy.",
        "Create a new version of the common AMI with the CodeDeploy agent installed. Create an AppSpec file that contains application deployment scripts and grants access to CodeDeploy.",
        "Create an application in CodeDeploy. Configure an in-place deployment type. Specify the Auto Scaling group as the deployment target. Add a step to the CodePipeline pipeline to use EC2 Image Builder to create a new AMI. Configure CodeDeploy to deploy the newly created AMI.",
        "Create an application in CodeDeploy. Configure an in-place deployment type. Specify the Auto Scaling group as the deployment target. Update the CodePipeline pipeline to use the CodeDeploy action to deploy the application.",
        "Create an application in CodeDeploy. Configure an in-place deployment type. Specify the EC2 instances that are launched from the common AMI as the deployment target. Update the CodePipeline pipeline to use the CodeDeploy action to deploy the application."
      ],
      "correctAnswers": [
        0,
        3
      ],
      "explanation": "Correct Answer: AD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_8",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "A company’s security team requires that all external Application Load Balancers (ALBs) and Amazon API Gateway APIs are associated with AWS WAF web ACLs. The company has hundreds of AWS accounts, all of which are included in a single organization in AWS Organizations. The company has configured AWS Config for the organization. During an audit, the company finds some externally facing ALBs that are not associated with AWS WAF web ACLs. Which combination of steps should a DevOps engineer take to prevent future violations? (Choose two.)",
      "options": [
        "Delegate AWS Firewall Manager to a security account.",
        "Delegate Amazon GuardDuty to a security account.",
        "Create an AWS Firewall Manager policy to attach AWS WAF web ACLs to any newly created ALBs and API Gateway APIs.",
        "Create an Amazon GuardDuty policy to attach AWS WAF web ACLs to any newly created ALBs and API Gateway APIs.",
        "Configure an AWS Config managed rule to attach AWS WAF web ACLs to any newly created ALBs and API Gateway APIs."
      ],
      "correctAnswers": [
        0,
        2
      ],
      "explanation": "Correct Answer: AC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_9",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company uses AWS Key Management Service (AWS KMS) keys and manual key rotation to meet regulatory compliance requirements. The security team wants to be notified when any keys have not been rotated after 90 days. Which solution will accomplish this?",
      "options": [
        "Configure AWS KMS to publish to an Amazon Simple Notification Service (Amazon SNS) topic when keys are more than 90 days old.",
        "Configure an Amazon EventBridge event to launch an AWS Lambda function to call the AWS Trusted Advisor API and publish to an Amazon Simple Notification Service (Amazon SNS) topic.",
        "Develop an AWS Config custom rule that publishes to an Amazon Simple Notification Service (Amazon SNS) topic when keys are more than 90 days old.",
        "Configure AWS Security Hub to publish to an Amazon Simple Notification Service (Amazon SNS) topic when keys are more than 90 days old."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_10",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A security review has identified that an AWS CodeBuild project is downloading a database population script from an Amazon S3 bucket using an unauthenticated request. The security team does not allow unauthenticated requests to S3 buckets for this project. How can this issue be corrected in the MOST secure manner?",
      "options": [
        "Add the bucket name to the AllowedBuckets section of the CodeBuild project settings. Update the build spec to use the AWS CLI to download the database population script.",
        "Modify the S3 bucket settings to enable HTTPS basic authentication and specify a token. Update the build spec to use cURL to pass the token and download the database population script.",
        "Remove unauthenticated access from the S3 bucket with a bucket policy. Modify the service role for the CodeBuild project to include Amazon S3 access. Use the AWS CLI to download the database population script.",
        "Remove unauthenticated access from the S3 bucket with a bucket policy. Use the AWS CLI to download the database population script using an IAM access key and a secret access key."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_11",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "An ecommerce company has chosen AWS to host its new platform. The company's DevOps team has started building an AWS Control Tower landing zone. The DevOps team has set the identity store within AWS IAM Identity Center (AWS Single Sign-On) to external identity provider (IdP) and has configured SAML 2.0. The DevOps team wants a robust permission model that applies the principle of least privilege. The model must allow the team to build and manage only the team's own resources. Which combination of steps will meet these requirements? (Choose three.)",
      "options": [
        "Create IAM policies that include the required permissions. Include the aws:PrincipalTag condition key.",
        "Create permission sets. Attach an inline policy that includes the required permissions and uses the aws:PrincipalTag condition key to scope the permissions.",
        "Create a group in the IdP. Place users in the group. Assign the group to accounts and the permission sets in IAM Identity Center.",
        "Create a group in the IdP. Place users in the group. Assign the group to OUs and IAM policies.",
        "Enable attributes for access control in IAM Identity Center. Apply tags to users. Map the tags as key-value pairs.",
        "Enable attributes for access control in IAM Identity Center. Map attributes from the IdP as key-value pairs."
      ],
      "correctAnswers": [
        1,
        2,
        5
      ],
      "explanation": "Correct Answer: BCF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_12",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "An ecommerce company is receiving reports that its order history page is experiencing delays in reflecting the processing status of orders. The order processing system consists of an AWS Lambda function that uses reserved concurrency. The Lambda function processes order messages from an Amazon Simple Queue Service (Amazon SQS) queue and inserts processed orders into an Amazon DynamoDB table. The DynamoDB table has auto scaling enabled for read and write capacity. Which actions should a DevOps engineer take to resolve this delay? (Choose two.)",
      "options": [
        "Check the ApproximateAgeOfOldestMessage metric for the SQS queue. Increase the Lambda function concurrency limit.",
        "Check the ApproximateAgeOfOldestMessage metnc for the SQS queue Configure a redrive policy on the SQS queue.",
        "Check the NumberOfMessagesSent metric for the SQS queue. Increase the SQS queue visibility timeout.",
        "Check the WriteThrottleEvents metric for the DynamoDB table. Increase the maximum write capacity units (WCUs) for the table's scaling policy.",
        "Check the Throttles metric for the Lambda function. Increase the Lambda function timeout."
      ],
      "correctAnswers": [
        0,
        3
      ],
      "explanation": "Correct Answer: AD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_13",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company has a single AWS account that runs hundreds of Amazon EC2 instances in a single AWS Region. New EC2 instances are launched and terminated each hour in the account. The account also includes existing EC2 instances that have been running for longer than a week. The company's security policy requires all running EC2 instances to use an EC2 instance profile. If an EC2 instance does not have an instance profile attached, the EC2 instance must use a default instance profile that has no IAM permissions assigned. A DevOps engineer reviews the account and discovers EC2 instances that are running without an instance profile. During the review, the DevOps engineer also observes that new EC2 instances are being launched without an instance profile. Which solution will ensure that an instance profile is attached to all existing and future EC2 instances in the Region?",
      "options": [
        "Configure an Amazon EventBridge rule that reacts to EC2 RunInstances API calls. Configure the rule to invoke an AWS Lambda function to attach the default instance profile to the EC2 instances.",
        "Configure the ec2-instance-profile-attached AWS Config managed rule with a trigger type of configuration changes. Configure an automatic remediation action that invokes an AWS Systems Manager Automation runbook to attach the default instance profile to the EC2 instances.",
        "Configure an Amazon EventBridge rule that reacts to EC2 StartInstances API calls. Configure the rule to invoke an AWS Systems Manager Automation runbook to attach the default instance profile to the EC2 instances",
        "Configure the iam-role-managed-policy-check AWS Config managed rule with a trigger type of configuration changes. Configure an automatic remediation action that invokes an AWS Lambda function to attach the default instance profile to the EC2 instances."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_14",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A DevOps engineer is building a continuous deployment pipeline for a serverless application that uses AWS Lambda functions. The company wants to reduce the customer impact of an unsuccessful deployment. The company also wants to monitor for issues. Which deploy stage configuration will meet these requirements?",
      "options": [
        "Use an AWS Serverless Application Model (AWS SAM) template to define the serverless application. Use AWS CodeDeploy to deploy the Lambda functions with the Canary10Percent15Minutes Deployment Preference Type. Use Amazon CloudWatch alarms to monitor the health of the functions.",
        "Use AWS CloudFormation to publish a new stack update, and include Amazon CloudWatch alarms on all resources. Set up an AWS CodePipeline approval action for a developer to verify and approve the AWS CloudFormation change set.",
        "Use AWS CloudFormation to publish a new version on every stack update, and include Amazon CloudWatch alarms on all resources. Use the RoutingConfig property of the AWS::Lambda::Alias resource to update the traffic routing during the stack update.",
        "Use AWS CodeBuild to add sample event payloads for testing to the Lambda functions. Publish a new version of the functions, and include Amazon CloudWatch alarms. Update the production alias to point to the new version. Configure rollbacks to occur when an alarm is in the ALARM state."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_15",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "To run an application, a DevOps engineer launches an Amazon EC2 instance with public IP addresses in a public subnet. A user data script obtains the application artifacts and installs them on the instances upon launch. A change to the security classification of the application now requires the instances to run with no access to the internet. While the instances launch successfully and show as healthy, the application does not seem to be installed. Which of the following should successfully install the application while complying with the new rule?",
      "options": [
        "Launch the instances in a public subnet with Elastic IP addresses attached. Once the application is installed and running, run a script to disassociate the Elastic IP addresses afterwards.",
        "Set up a NAT gateway. Deploy the EC2 instances to a private subnet. Update the private subnet's route table to use the NAT gateway as the default route.",
        "Publish the application artifacts to an Amazon S3 bucket and create a VPC endpoint for S3. Assign an IAM instance profile to the EC2 instances so they can read the application artifacts from the S3 bucket.",
        "Create a security group for the application instances and allow only outbound traffic to the artifact repository. Remove the security group rule once the install is complete."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_16",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A development team is using AWS CodeCommit to version control application code and AWS CodePipeline to orchestrate software deployments. The team has decided to use a remote main branch as the trigger for the pipeline to integrate code changes. A developer has pushed code changes to the CodeCommit repository, but noticed that the pipeline had no reaction, even after 10 minutes. Which of the following actions should be taken to troubleshoot this issue?",
      "options": [
        "Check that an Amazon EventBridge rule has been created for the main branch to trigger the pipeline.",
        "Check that the CodePipeline service role has permission to access the CodeCommit repository.",
        "Check that the developer’s IAM role has permission to push to the CodeCommit repository.",
        "Check to see if the pipeline failed to start because of CodeCommit errors in Amazon CloudWatch Logs."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_17",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company's developers use Amazon EC2 instances as remote workstations. The company is concerned that users can create or modify EC2 security groups to allow unrestricted inbound access. A DevOps engineer needs to develop a solution to detect when users create unrestricted security group rules. The solution must detect changes to security group rules in near real time, remove unrestricted rules, and send email notifications to the security team. The DevOps engineer has created an AWS Lambda function that checks for security group ID from input, removes rules that grant unrestricted access, and sends notifications through Amazon Simple Notification Service (Amazon SNS). What should the DevOps engineer do next to meet the requirements?",
      "options": [
        "Configure the Lambda function to be invoked by the SNS topic. Create an AWS CloudTrail subscription for the SNS topic. Configure a subscription filter for security group modification events.",
        "Create an Amazon EventBridge scheduled rule to invoke the Lambda function. Define a schedule pattern that runs the Lambda function every hour.",
        "Create an Amazon EventBridge event rule that has the default event bus as the source. Define the rule’s event pattern to match EC2 security group creation and modification events. Configure the rule to invoke the Lambda function.",
        "Create an Amazon EventBridge custom event bus that subscribes to events from all AWS services. Configure the Lambda function to be invoked by the custom event bus."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_18",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A DevOps engineer is creating an AWS CloudFormation template to deploy a web service. The web service will run on Amazon EC2 instances in a private subnet behind an Application Load Balancer (ALB). The DevOps engineer must ensure that the service can accept requests from clients that have IPv6 addresses. What should the DevOps engineer do with the CloudFormation template so that IPv6 clients can access the web service?",
      "options": [
        "Add an IPv6 CIDR block to the VPC and the private subnet for the EC2 instances. Create route table entries for the IPv6 network, use EC2 instance types that support IPv6, and assign IPv6 addresses to each EC2 instance.",
        "Assign each EC2 instance an IPv6 Elastic IP address. Create a target group, and add the EC2 instances as targets. Create a listener on port 443 of the ALB, and associate the target group with the ALB.",
        "Replace the ALB with a Network Load Balancer (NLB). Add an IPv6 CIDR block to the VPC and subnets for the NLB, and assign the NLB an IPv6 Elastic IP address.",
        "Add an IPv6 CIDR block to the VPC and subnets for the ALB. Create a listener on port 443. and specify the dualstack IP address type on the ALB. Create a target group, and add the EC2 instances as targets. Associate the target group with the ALB."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_19",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company uses AWS Organizations and AWS Control Tower to manage all the company's AWS accounts. The company uses the Enterprise Support plan. A DevOps engineer is using Account Factory for Terraform (AFT) to provision new accounts. When new accounts are provisioned, the DevOps engineer notices that the support plan for the new accounts is set to the Basic Support plan. The DevOps engineer needs to implement a solution to provision the new accounts with the Enterprise Support plan. Which solution will meet these requirements?",
      "options": [
        "Use an AWS Config conformance pack to deploy the account-part-of-organizations AWS Config rule and to automatically remediate any noncompliant accounts.",
        "Create an AWS Lambda function to create a ticket for AWS Support to add the account to the Enterprise Support plan. Grant the Lambda function the support:ResolveCase permission.",
        "Add an additional value to the control_tower_parameters input to set the AWSEnterpriseSupport parameter as the organization's management account number.",
        "Set the aft_feature_enterprise_support feature flag to True in the AFT deployment input configuration. Redeploy AFT and apply the changes."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_20",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company's DevOps engineer uses AWS Systems Manager to perform maintenance tasks during maintenance windows. The company has a few Amazon EC2 instances that require a restart after notifications from AWS Health. The DevOps engineer needs to implement an automated solution to remediate these notifications. The DevOps engineer creates an Amazon EventBridge rule. How should the DevOps engineer configure the EventBridge rule to meet these requirements?",
      "options": [
        "Configure an event source of AWS Health, a service of EC2. and an event type that indicates instance maintenance. Target a Systems Manager document to restart the EC2 instance.",
        "Configure an event source of Systems Manager and an event type that indicates a maintenance window. Target a Systems Manager document to restart the EC2 instance.",
        "Configure an event source of AWS Health, a service of EC2, and an event type that indicates instance maintenance. Target a newly created AWS Lambda function that registers an automation task to restart the EC2 instance during a maintenance window.",
        "Configure an event source of EC2 and an event type that indicates instance maintenance. Target a newly created AWS Lambda function that registers an automation task to restart the EC2 instance during a maintenance window."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_21",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company has containerized all of its in-house quality control applications. The company is running Jenkins on Amazon EC2 instances, which require patching and upgrading. The compliance officer has requested a DevOps engineer begin encrypting build artifacts since they contain company intellectual property. What should the DevOps engineer do to accomplish this in the MOST maintainable manner?",
      "options": [
        "Automate patching and upgrading using AWS Systems Manager on EC2 instances and encrypt Amazon EBS volumes by default.",
        "Deploy Jenkins to an Amazon ECS cluster and copy build artifacts to an Amazon S3 bucket with default encryption enabled.",
        "Leverage AWS CodePipeline with a build action and encrypt the artifacts using AWS Secrets Manager.",
        "Use AWS CodeBuild with artifact encryption to replace the Jenkins instance running on EC2 instances."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_22",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "An IT team has built an AWS CloudFormation template so others in the company can quickly and reliably deploy and terminate an application. The template creates an Amazon EC2 instance with a user data script to install the application and an Amazon S3 bucket that the application uses to serve static webpages while it is running. All resources should be removed when the CloudFormation stack is deleted. However, the team observes that CloudFormation reports an error during stack deletion, and the S3 bucket created by the stack is not deleted. How can the team resolve the error in the MOST efficient manner to ensure that all resources are deleted without errors?",
      "options": [
        "Add a DelelionPolicy attribute to the S3 bucket resource, with the value Delete forcing the bucket to be removed when the stack is deleted.",
        "Add a custom resource with an AWS Lambda function with the DependsOn attribute specifying the S3 bucket, and an IAM role. Write the Lambda function to delete all objects from the bucket when RequestType is Delete.",
        "Identify the resource that was not deleted. Manually empty the S3 bucket and then delete it.",
        "Replace the EC2 and S3 bucket resources with a single AWS OpsWorks Stacks resource. Define a custom recipe for the stack to create and delete the EC2 instance and the S3 bucket."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_23",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "A company has an AWS CodePipeline pipeline that is configured with an Amazon S3 bucket in the eu-west-1 Region. The pipeline deploys an AWS Lambda application to the same Region. The pipeline consists of an AWS CodeBuild project build action and an AWS CloudFormation deploy action. The CodeBuild project uses the aws cloudformation package AWS CLI command to build an artifact that contains the Lambda function code’s .zip file and the CloudFormation template. The CloudFormation deploy action references the CloudFormation template from the output artifact of the CodeBuild project’s build action. The company wants to also deploy the Lambda application to the us-east-1 Region by using the pipeline in eu-west-1. A DevOps engineer has already updated the CodeBuild project to use the aws cloudformation package command to produce an additional output artifact for us-east-1. Which combination of additional steps should the DevOps engineer take to meet these requirements? (Choose two.)",
      "options": [
        "Modify the CloudFormation template to include a parameter for the Lambda function code’s zip file location. Create a new CloudFormation deploy action for us-east-1 in the pipeline. Configure the new deploy action to pass in the us-east-1 artifact location as a parameter override.",
        "Create a new CloudFormation deploy action for us-east-1 in the pipeline. Configure the new deploy action to use the CloudFormation template from the us-east-1 output artifact.",
        "Create an S3 bucket in us-east-1. Configure the S3 bucket policy to allow CodePipeline to have read and write access.",
        "Create an S3 bucket in us-east-1. Configure S3 Cross-Region Replication (CRR) from the S3 bucket in eu-west-1 to the S3 bucket in us-east-1.",
        "Modify the pipeline to include the S3 bucket for us-east-1 as an artifact store. Create a new CloudFormation deploy action for us-east-1 in the pipeline. Configure the new deploy action to use the CloudFormation template from the us-east- 1 output artifact."
      ],
      "correctAnswers": [
        0,
        1
      ],
      "explanation": "Correct Answer: AB",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_24",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company runs an application on one Amazon EC2 instance. Application metadata is stored in Amazon S3 and must be retrieved if the instance is restarted. The instance must restart or relaunch automatically if the instance becomes unresponsive. Which solution will meet these requirements?",
      "options": [
        "Create an Amazon CloudWatch alarm for the StatusCheckFailed metric. Use the recover action to stop and start the instance. Use an S3 event notification to push the metadata to the instance when the instance is back up and running.",
        "Configure AWS OpsWorks, and use the auto healing feature to stop and start the instance. Use a lifecycle event in OpsWorks to pull the metadata from Amazon S3 and update it on the instance.",
        "Use EC2 Auto Recovery to automatically stop and start the instance in case of a failure. Use an S3 event notification to push the metadata to the instance when the instance is back up and running.",
        "Use AWS CloudFormation to create an EC2 instance that includes the UserData property for the EC2 resource. Add a command in UserData to retrieve the application metadata from Amazon S3."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_25",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company hosts a security auditing application in an AWS account. The auditing application uses an IAM role to access other AWS accounts. All the accounts are in the same organization in AWS Organizations. A recent security audit revealed that users in the audited AWS accounts could modify or delete the auditing application's IAM role. The company needs to prevent any modification to the auditing application's IAM role by any entity other than a trusted administrator IAM role. Which solution will meet these requirements?",
      "options": [
        "Create an SCP that includes a Deny statement for changes to the auditing application's IAM role. Include a condition that allows the trusted administrator IAM role to make changes. Attach the SCP to the root of the organization.",
        "Create an SCP that includes an Allow statement for changes to the auditing application's IAM role by the trusted administrator IAM role. Include a Deny statement for changes by all other IAM principals. Attach the SCP to the IAM service in each AWS account where the auditing application has an IAM role.",
        "Create an IAM permissions boundary that includes a Deny statement for changes to the auditing application's IAM role. Include a condition that allows the trusted administrator IAM role to make changes. Attach the permissions boundary to the audited AWS accounts.",
        "Create an IAM permissions boundary that includes a Deny statement for changes to the auditing application’s IAM role. Include a condition that allows the trusted administrator IAM role to make changes. Attach the permissions boundary to the auditing application's IAM role in the AWS accounts."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_26",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company has an on-premises application that is written in Go. A DevOps engineer must move the application to AWS. The company's development team wants to enable blue/green deployments and perform A/B testing. Which solution will meet these requirements?",
      "options": [
        "Deploy the application on an Amazon EC2 instance, and create an AMI of the instance. Use the AMI to create an automatic scaling launch configuration that is used in an Auto Scaling group. Use Elastic Load Balancing to distribute traffic. When changes are made to the application, a new AMI will be created, which will initiate an EC2 instance refresh.",
        "Use Amazon Lightsail to deploy the application. Store the application in a zipped format in an Amazon S3 bucket. Use this zipped version to deploy new versions of the application to Lightsail. Use Lightsail deployment options to manage the deployment.",
        "Use AWS CodeArtifact to store the application code. Use AWS CodeDeploy to deploy the application to a fleet of Amazon EC2 instances. Use Elastic Load Balancing to distribute the traffic to the EC2 instances. When making changes to the application, upload a new version to CodeArtifact and create a new CodeDeploy deployment.",
        "Use AWS Elastic Beanstalk to host the application. Store a zipped version of the application in Amazon S3. Use that location to deploy new versions of the application. Use Elastic Beanstalk to manage the deployment options."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_27",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A developer is maintaining a fleet of 50 Amazon EC2 Linux servers. The servers are part of an Amazon EC2 Auto Scaling group, and also use Elastic Load Balancing for load balancing. Occasionally, some application servers are being terminated after failing ELB HTTP health checks. The developer would like to perform a root cause analysis on the issue, but before being able to access application logs, the server is terminated. How can log collection be automated?",
      "options": [
        "Use Auto Scaling lifecycle hooks to put instances in a Pending:Wait state. Create an Amazon CloudWatch alarm for EC2 Instance Terminate Successful and trigger an AWS Lambda function that invokes an SSM Run Command script to collect logs, push them to Amazon S3, and complete the lifecycle action once logs are collected.",
        "Use Auto Scaling lifecycle hooks to put instances in a Terminating:Wait state. Create an AWS Config rule for EC2 Instance-terminate Lifecycle Action and trigger a step function that invokes a script to collect logs, push them to Amazon S3, and complete the lifecycle action once logs are collected.",
        "Use Auto Scaling lifecycle hooks to put instances in a Terminating:Wait state. Create an Amazon CloudWatch subscription filter for EC2 Instance Terminate Successful and trigger a CloudWatch agent that invokes a script to collect logs, push them to Amazon S3, and complete the lifecycle action once logs are collected.",
        "Use Auto Scaling lifecycle hooks to put instances in a Terminating:Wait state. Create an Amazon EventBridge rule for EC2 Instance-terminate Lifecycle Action and trigger an AWS Lambda function that invokes an SSM Run Command script to collect logs, push them to Amazon S3, and complete the lifecycle action once logs are collected."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_28",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "A company has an organization in AWS Organizations. The organization includes workload accounts that contain enterprise applications. The company centrally manages users from an operations account. No users can be created in the workload accounts. The company recently added an operations team and must provide the operations team members with administrator access to each workload account. Which combination of actions will provide this access? (Choose three.)",
      "options": [
        "Create a SysAdmin role in the operations account. Attach the AdministratorAccess policy to the role. Modify the trust relationship to allow the sts:AssumeRole action from the workload accounts.",
        "Create a SysAdmin role in each workload account. Attach the AdministratorAccess policy to the role. Modify the trust relationship to allow the sts:AssumeRole action from the operations account.",
        "Create an Amazon Cognito identity pool in the operations account. Attach the SysAdmin role as an authenticated role.",
        "In the operations account, create an IAM user for each operations team member.",
        "In the operations account, create an IAM user group that is named SysAdmins. Add an IAM policy that allows the sts:AssumeRole action for the SysAdmin role in each workload account. Add all operations team members to the group.",
        "Create an Amazon Cognito user pool in the operations account. Create an Amazon Cognito user for each operations team member."
      ],
      "correctAnswers": [
        0,
        1,
        4
      ],
      "explanation": "Correct Answer: ABE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_29",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company has migrated its container-based applications to Amazon EKS and want to establish automated email notifications. The notifications sent to each email address are for specific activities related to EKS components. The solution will include Amazon SNS topics and an AWS Lambda function to evaluate incoming log events and publish messages to the correct SNS topic. Which logging solution will support these requirements?",
      "options": [
        "Enable Amazon CloudWatch Logs to log the EKS components. Create a CloudWatch subscription filter for each component with Lambda as the subscription feed destination.",
        "Enable Amazon CloudWatch Logs to log the EKS components. Create CloudWatch Logs Insights queries linked to Amazon EventBridge events that invoke Lambda.",
        "Enable Amazon S3 logging for the EKS components. Configure an Amazon CloudWatch subscription filter for each component with Lambda as the subscription feed destination.",
        "Enable Amazon S3 logging for the EKS components. Configure S3 PUT Object event notifications with AWS Lambda as the destination."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_30",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "A company is implementing an Amazon Elastic Container Service (Amazon ECS) cluster to run its workload. The company architecture will run multiple ECS services on the cluster. The architecture includes an Application Load Balancer on the front end and uses multiple target groups to route traffic. A DevOps engineer must collect application and access logs. The DevOps engineer then needs to send the logs to an Amazon S3 bucket for near-real-time analysis. Which combination of steps must the DevOps engineer take to meet these requirements? (Choose three.)",
      "options": [
        "Download the Amazon CloudWatch Logs container instance from AWS. Configure this instance as a task. Update the application service definitions to include the logging task.",
        "Install the Amazon CloudWatch Logs agent on the ECS instances. Change the logging driver in the ECS task definition to awslogs.",
        "Use Amazon EventBridge to schedule an AWS Lambda function that will run every 60 seconds and will run the Amazon CloudWatch Logs create-export-task command. Then point the output to the logging S3 bucket.",
        "Activate access logging on the ALB. Then point the ALB directly to the logging S3 bucket.",
        "Activate access logging on the target groups that the ECS services use. Then send the logs directly to the logging S3 bucket.",
        "Create an Amazon Kinesis Data Firehose delivery stream that has a destination of the logging S3 bucket. Then create an Amazon CloudWatch Logs subscription filter for Kinesis Data Firehose."
      ],
      "correctAnswers": [
        1,
        3,
        5
      ],
      "explanation": "Correct Answer: BDF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_31",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company that uses electronic health records is running a fleet of Amazon EC2 instances with an Amazon Linux operating system. As part of patient privacy requirements, the company must ensure continuous compliance for patches for operating system and applications running on the EC2 instances. How can the deployments of the operating system and application patches be automated using a default and custom repository?",
      "options": [
        "Use AWS Systems Manager to create a new patch baseline including the custom repository. Run the AWS- RunPatchBaseline document using the run command to verify and install patches.",
        "Use AWS Direct Connect to integrate the corporate repository and deploy the patches using Amazon CloudWatch scheduled events, then use the CloudWatch dashboard to create reports.",
        "Use yum-config-manager to add the custom repository under /etc/yum.repos.d and run yum-config-manager-enable to activate the repository.",
        "Use AWS Systems Manager to create a new patch baseline including the corporate repository. Run the AWS- AmazonLinuxDefaultPatchBaseline document using the run command to verify and install patches."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_32",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company is using AWS CodePipeline to automate its release pipeline. AWS CodeDeploy is being used in the pipeline to deploy an application to Amazon Elastic Container Service (Amazon ECS) using the blue/green deployment model. The company wants to implement scripts to test the green version of the application before shifting traffic. These scripts will complete in 5 minutes or less. If errors are discovered during these tests, the application must be rolled back. Which strategy will meet these requirements?",
      "options": [
        "Add a stage to the CodePipeline pipeline between the source and deploy stages. Use AWS CodeBuild to create a runtime environment and build commands in the buildspec file to invoke test scripts. If errors are found, use the aws deploy stop-deployment command to stop the deployment.",
        "Add a stage to the CodePipeline pipeline between the source and deploy stages. Use this stage to invoke an AWS Lambda function that will run the test scripts. If errors are found, use the aws deploy stop-deployment command to stop the deployment.",
        "Add a hooks section to the CodeDeploy AppSpec file. Use the AfterAllowTestTraffic lifecycle event to invoke an AWS Lambda function to run the test scripts. If errors are found, exit the Lambda function with an error to initiate rollback.",
        "Add a hooks section to the CodeDeploy AppSpec file. Use the AfterAllowTraffic lifecycle event to invoke the test scripts. If errors are found, use the aws deploy stop-deployment CLI command to stop the deployment."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_33",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company uses AWS Storage Gateway in file gateway mode in front of an Amazon S3 bucket that is used by multiple resources. In the morning when business begins, users do not see the objects processed by a third party the previous evening. When a DevOps engineer looks directly at the S3 bucket, the data is there, but it is missing in Storage Gateway. Which solution ensures that all the updated third-party files are available in the morning?",
      "options": [
        "Configure a nightly Amazon EventBridge event to invoke an AWS Lambda function to run the RefreshCache command for Storage Gateway.",
        "Instruct the third party to put data into the S3 bucket using AWS Transfer for SFTP.",
        "Modify Storage Gateway to run in volume gateway mode.",
        "Use S3 Same-Region Replication to replicate any changes made directly in the S3 bucket to Storage Gateway."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_34",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "A DevOps engineer needs to back up sensitive Amazon S3 objects that are stored within an S3 bucket with a private bucket policy using S3 cross-Region replication functionality. The objects need to be copied to a target bucket in a different AWS Region and account. Which combination of actions should be performed to enable this replication? (Choose three.)",
      "options": [
        "Create a replication IAM role in the source account",
        "Create a replication I AM role in the target account.",
        "Add statements to the source bucket policy allowing the replication IAM role to replicate objects.",
        "Add statements to the target bucket policy allowing the replication IAM role to replicate objects.",
        "Create a replication rule in the source bucket to enable the replication.",
        "Create a replication rule in the target bucket to enable the replication."
      ],
      "correctAnswers": [
        0,
        3,
        4
      ],
      "explanation": "Correct Answer: ADE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_35",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "A company has multiple member accounts that are part of an organization in AWS Organizations. The security team needs to review every Amazon EC2 security group and their inbound and outbound rules. The security team wants to programmatically retrieve this information from the member accounts using an AWS Lambda function in the management account of the organization. Which combination of access changes will meet these requirements? (Choose three.)",
      "options": [
        "Create a trust relationship that allows users in the member accounts to assume the management account IAM role.",
        "Create a trust relationship that allows users in the management account to assume the IAM roles of the member accounts.",
        "Create an IAM role in each member account that has access to the AmazonEC2ReadOnlyAccess managed policy.",
        "Create an I AM role in each member account to allow the sts:AssumeRole action against the management account IAM role's ARN.",
        "Create an I AM role in the management account that allows the sts:AssumeRole action against the member account IAM role's ARN.",
        "Create an IAM role in the management account that has access to the AmazonEC2ReadOnlyAccess managed policy."
      ],
      "correctAnswers": [
        1,
        2,
        4
      ],
      "explanation": "Correct Answer: BCE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_36",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A space exploration company receives telemetry data from multiple satellites. Small packets of data are received through Amazon API Gateway and are placed directly into an Amazon Simple Queue Service (Amazon SQS) standard queue. A custom application is subscribed to the queue and transforms the data into a standard format. Because of inconsistencies in the data that the satellites produce, the application is occasionally unable to transform the data. In these cases, the messages remain in the SQS queue. A DevOps engineer must develop a solution that retains the failed messages and makes them available to scientists for review and future processing. Which solution will meet these requirements?",
      "options": [
        "Configure AWS Lambda to poll the SQS queue and invoke a Lambda function to check whether the queue messages are valid. If validation fails, send a copy of the data that is not valid to an Amazon S3 bucket so that the scientists can review and correct the data. When the data is corrected, amend the message in the SQS queue by using a replay Lambda function with the corrected data.",
        "Convert the SQS standard queue to an SQS FIFO queue. Configure AWS Lambda to poll the SQS queue every 10 minutes by using an Amazon EventBridge schedule. Invoke the Lambda function to identify any messages with a SentTimestamp value that is older than 5 minutes, push the data to the same location as the application's output location, and remove the messages from the queue.",
        "Create an SQS dead-letter queue. Modify the existing queue by including a redrive policy that sets the Maximum Receives setting to 1 and sets the dead-letter queue ARN to the ARN of the newly created queue. Instruct the scientists to use the dead- letter queue to review the data that is not valid. Reprocess this data at a later time.",
        "Configure API Gateway to send messages to different SQS virtual queues that are named for each of the satellites. Update the application to use a new virtual queue for any data that it cannot transform, and send the message to the new virtual queue. Instruct the scientists to use the virtual queue to review the data that is not valid. Reprocess this data at a later time."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_37",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company wants to use AWS CloudFormation for infrastructure deployment. The company has strict tagging and resource requirements and wants to limit the deployment to two Regions. Developers will need to deploy multiple versions of the same application. Which solution ensures resources are deployed in accordance with company policy?",
      "options": [
        "Create AWS Trusted Advisor checks to find and remediate unapproved CloudFormation StackSets.",
        "Create a Cloud Formation drift detection operation to find and remediate unapproved CloudFormation StackSets.",
        "Create CloudFormation StackSets with approved CloudFormation templates.",
        "Create AWS Service Catalog products with approved CloudFormation templates."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_38",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "A company requires that its internally facing web application be highly available. The architecture is made up of one Amazon EC2 web server instance and one NAT instance that provides outbound internet access for updates and accessing public data. Which combination of architecture adjustments should the company implement to achieve high availability? (Choose two.)",
      "options": [
        "Add the NAT instance to an EC2 Auto Scaling group that spans multiple Availability Zones. Update the route tables.",
        "Create additional EC2 instances spanning multiple Availability Zones. Add an Application Load Balancer to split the load between them.",
        "Configure an Application Load Balancer in front of the EC2 instance. Configure Amazon CloudWatch alarms to recover the EC2 instance upon host failure.",
        "Replace the NAT instance with a NAT gateway in each Availability Zone. Update the route tables.",
        "Replace the NAT instance with a NAT gateway that spans multiple Availability Zones. Update the route tables."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_39",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A DevOps engineer is building a multistage pipeline with AWS CodePipeline to build, verify, stage, test, and deploy an application. A manual approval stage is required between the test stage and the deploy stage. The development team uses a custom chat tool with webhook support that requires near-real-time notifications. How should the DevOps engineer configure status updates for pipeline activity and approval requests to post to the chat tool?",
      "options": [
        "Create an Amazon CloudWatch Logs subscription that filters on CodePipeline Pipeline Execution State Change. Publish subscription events to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the chat webhook URL to the SNS topic, and complete the subscription validation.",
        "Create an AWS Lambda function that is invoked by AWS CloudTrail events. When a CodePipeline Pipeline Execution State Change event is detected, send the event details to the chat webhook URL.",
        "Create an Amazon EventBridge rule that filters on CodePipeline Pipeline Execution State Change. Publish the events to an Amazon Simple Notification Service (Amazon SNS) topic. Create an AWS Lambda function that sends event details to the chat webhook URL. Subscribe the function to the SNS topic.",
        "Modify the pipeline code to send the event details to the chat webhook URL at the end of each stage. Parameterize the URL so that each pipeline can send to a different URL based on the pipeline environment."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_40",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company's application development team uses Linux-based Amazon EC2 instances as bastion hosts. Inbound SSH access to the bastion hosts is restricted to specific IP addresses, as defined in the associated security groups. The company's security team wants to receive a notification if the security group rules are modified to allow SSH access from any IP address. What should a DevOps engineer do to meet this requirement?",
      "options": [
        "Create an Amazon EventBridge rule with a source of aws.cloudtrail and the event name AuthorizeSecurityGroupIngress. Define an Amazon Simple Notification Service (Amazon SNS) topic as the target.",
        "Enable Amazon GuardDuty and check the findings for security groups in AWS Security Hub. Configure an Amazon EventBridge rule with a custom pattern that matches GuardDuty events with an output of NON_COMPLIANT. Define an Amazon Simple Notification Service (Amazon SNS) topic as the target.",
        "Create an AWS Config rule by using the restricted-ssh managed rule to check whether security groups disallow unrestricted incoming SSH traffic. Configure automatic remediation to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic.",
        "Enable Amazon Inspector. Include the Common Vulnerabilities and Exposures-1.1 rules package to check the security groups that are associated with the bastion hosts. Configure Amazon Inspector to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_41",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "A DevOps team manages an API running on-premises that serves as a backend for an Amazon API Gateway endpoint. Customers have been complaining about high response latencies, which the development team has verified using the API Gateway latency metrics in Amazon CloudWatch. To identify the cause, the team needs to collect relevant data without introducing additional latency. Which actions should be taken to accomplish this? (Choose two.)",
      "options": [
        "Install the CloudWatch agent server side and configure the agent to upload relevant logs to CloudWatch.",
        "Enable AWS X-Ray tracing in API Gateway, modify the application to capture request segments, and upload those segments to X-Ray during each request.",
        "Enable AWS X-Ray tracing in API Gateway, modify the application to capture request segments, and use the X- Ray daemon to upload segments to X-Ray.",
        "Modify the on-premises application to send log information back to API Gateway with each request.",
        "Modify the on-premises application to calculate and upload statistical data relevant to the API service requests to CloudWatch metrics."
      ],
      "correctAnswers": [
        0,
        2
      ],
      "explanation": "Correct Answer: AC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_42",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company has an application that is using a MySQL-compatible Amazon Aurora Multi-AZ DB cluster as the database. A cross-Region read replica has been created for disaster recovery purposes. A DevOps engineer wants to automate the promotion of the replica so it becomes the primary database instance in the event of a failure. Which solution will accomplish this?",
      "options": [
        "Configure a latency-based Amazon Route 53 CNAME with health checks so it points to both the primary and replica endpoints. Subscribe an Amazon SNS topic to Amazon RDS failure notifications from AWS CloudTrail and use that topic to invoke an AWS Lambda function that will promote the replica instance as the primary.",
        "Create an Aurora custom endpoint to point to the primary database instance. Configure the application to use this endpoint. Configure AWS CloudTrail to run an AWS Lambda function to promote the replica instance and modify the custom endpoint to point to the newly promoted instance.",
        "Create an AWS Lambda function to modify the application's AWS CloudFormation template to promote the replica, apply the template to update the stack, and point the application to the newly promoted instance. Create an Amazon CloudWatch alarm to invoke this Lambda function after the failure event occurs.",
        "Store the Aurora endpoint in AWS Systems Manager Parameter Store. Create an Amazon EventBridge event that detects the database failure and runs an AWS Lambda function to promote the replica instance and update the endpoint URL stored in AWS Systems Manager Parameter Store. Code the application to reload the endpoint from Parameter Store if a database connection fails."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_43",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company hosts its staging website using an Amazon EC2 instance backed with Amazon EBS storage. The company wants to recover quickly with minimal data losses in the event of network connectivity issues or power failures on the EC2 instance. Which solution will meet these requirements?",
      "options": [
        "Add the instance to an EC2 Auto Scaling group with the minimum, maximum, and desired capacity set to 1.",
        "Add the instance to an EC2 Auto Scaling group with a lifecycle hook to detach the EBS volume when the EC2 instance shuts down or terminates.",
        "Create an Amazon CloudWatch alarm for the StatusCheckFailed System metric and select the EC2 action to recover the instance.",
        "Create an Amazon CloudWatch alarm for the StatusCheckFailed Instance metric and select the EC2 action to reboot the instance."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_44",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company wants to use AWS development tools to replace its current bash deployment scripts. The company currently deploys a LAMP application to a group of Amazon EC2 instances behind an Application Load Balancer (ALB). During the deployments, the company unit tests the committed application, stops and starts services, unregisters and re-registers instances with the load balancer, and updates file permissions. The company wants to maintain the same deployment functionality through the shift to using AWS services. Which solution will meet these requirements?",
      "options": [
        "Use AWS CodeBuild to test the application. Use bash scripts invoked by AWS CodeDeploy's appspec.yml file to restart services, and deregister and register instances with the ALB. Use the appspec.yml file to update file permissions without a custom script.",
        "Use AWS CodePipeline to move the application from the AWS CodeCommit repository to AWS CodeDeploy. Use CodeDeploy's deployment group to test the application, unregister and re-register instances with the ALand restart services. Use the appspec.yml file to update file permissions without a custom script.",
        "Use AWS CodePipeline to move the application source code from the AWS CodeCommit repository to AWS CodeDeploy. Use CodeDeploy to test the application. Use CodeDeploy's appspec.yml file to restart services and update permissions without a custom script. Use AWS CodeBuild to unregister and re-register instances with the ALB.",
        "Use AWS CodePipeline to trigger AWS CodeBuild to test the application. Use bash scripts invoked by AWS CodeDeploy's appspec.yml file to restart services. Unregister and re-register the instances in the AWS CodeDeploy deployment group with the ALB. Update the appspec.yml file to update file permissions without a custom script."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_45",
      "batch": "Batch 1",
      "type": "multiple",
      "prompt": "A company runs an application with an Amazon EC2 and on-premises configuration. A DevOps engineer needs to standardize patching across both environments. Company policy dictates that patching only happens during non-business hours. Which combination of actions will meet these requirements? (Choose three.)",
      "options": [
        "Add the physical machines into AWS Systems Manager using Systems Manager Hybrid Activations.",
        "Attach an IAM role to the EC2 instances, allowing them to be managed by AWS Systems Manager.",
        "Create IAM access keys for the on-premises machines to interact with AWS Systems Manager.",
        "Run an AWS Systems Manager Automation document to patch the systems every hour",
        "Use Amazon EventBridge scheduled events to schedule a patch window.",
        "Use AWS Systems Manager Maintenance Windows to schedule a patch window."
      ],
      "correctAnswers": [
        0,
        1,
        5
      ],
      "explanation": "Correct Answer: ABF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_46",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company has chosen AWS to host a new application. The company needs to implement a multi-account strategy. A DevOps engineer creates a new AWS account and an organization in AWS Organizations. The DevOps engineer also creates the OU structure for the organization and sets up a landing zone by using AWS Control Tower. The DevOps engineer must implement a solution that automatically deploys resources for new accounts that users create through AWS Control Tower Account Factory. When a user creates a new account, the solution must apply AWS CloudFormation templates and SCPs that are customized for the OU or the account to automatically deploy all the resources that are attached to the account. All the OUs are enrolled in AWS Control Tower. Which solution will meet these requirements in the MOST automated way?",
      "options": [
        "Use AWS Service Catalog with AWS Control Tower. Create portfolios and products in AWS Service Catalog. Grant granular permissions to provision these resources. Deploy SCPs by using the AWS CLI and JSON documents.",
        "Deploy CloudFormation stack sets by using the required templates. Enable automatic deployment. Deploy stack instances to the required accounts. Deploy a CloudFormation stack set to the organization’s management account to deploy SCPs.",
        "Create an Amazon EventBridge rule to detect the CreateManagedAccount event. Configure AWS Service Catalog as the target to deploy resources to any new accounts. Deploy SCPs by using the AWS CLI and JSON documents.",
        "Deploy the Customizations for AWS Control Tower (CfCT) solution. Use an AWS CodeCommit repository as the source. In the repository, create a custom package that includes the CloudFormation templates and the SCP JSON documents."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_47",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "An online retail company based in the United States plans to expand its operations to Europe and Asia in the next six months. Its product currently runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. All data is stored in an Amazon Aurora database instance. When the product is deployed in multiple regions, the company wants a single product catalog across all regions, but for compliance purposes, its customer information and purchases must be kept in each region. How should the company meet these requirements with the LEAST amount of application changes?",
      "options": [
        "Use Amazon Redshift for the product catalog and Amazon DynamoDB tables for the customer information and purchases.",
        "Use Amazon DynamoDB global tables for the product catalog and regional tables for the customer information and purchases.",
        "Use Aurora with read replicas for the product catalog and additional local Aurora instances in each region for the customer information and purchases.",
        "Use Aurora for the product catalog and Amazon DynamoDB global tables for the customer information and purchases."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_48",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company is implementing a well-architected design for its globally accessible API stack. The design needs to ensure both high reliability and fast response times for users located in North America and Europe. The API stack contains the following three tiers: Amazon API Gateway - AWS Lambda - Amazon DynamoDB - Which solution will meet the requirements?",
      "options": [
        "Configure Amazon Route 53 to point to API Gateway APIs in North America and Europe using health checks. Configure the APIs to forward requests to a Lambda function in that Region. Configure the Lambda functions to retrieve and update the data in a DynamoDB table in the same Region as the Lambda function.",
        "Configure Amazon Route 53 to point to API Gateway APIs in North America and Europe using latency-based routing and health checks. Configure the APIs to forward requests to a Lambda function in that Region. Configure the Lambda functions to retrieve and update the data in a DynamoDB global table.",
        "Configure Amazon Route 53 to point to API Gateway in North America, create a disaster recovery API in Europe, and configure both APIs to forward requests to the Lambda functions in that Region. Retrieve the data from a DynamoDB global table. Deploy a Lambda function to check the North America API health every 5 minutes. In the event of a failure, update Route 53 to point to the disaster recovery API.",
        "Configure Amazon Route 53 to point to API Gateway API in North America using latency-based routing. Configure the API to forward requests to the Lambda function in the Region nearest to the user. Configure the Lambda function to retrieve and update the data in a DynamoDB table."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_49",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A rapidly growing company wants to scale for developer demand for AWS development environments. Development environments are created manually in the AWS Management Console. The networking team uses AWS CloudFormation to manage the networking infrastructure, exporting stack output values for the Amazon VPC and all subnets. The development environments have common standards, such as Application Load Balancers, Amazon EC2 Auto Scaling groups, security groups, and Amazon DynamoDB tables. To keep up with demand, the DevOps engineer wants to automate the creation of development environments. Because the infrastructure required to support the application is expected to grow, there must be a way to easily update the deployed infrastructure. CloudFormation will be used to create a template for the development environments. Which approach will meet these requirements and quickly provide consistent AWS environments for developers?",
      "options": [
        "Use Fn::ImportValue intrinsic functions in the Resources section of the template to retrieve Virtual Private Cloud (VPC) and subnet values. Use CloudFormation StackSets for the development environments, using the Count input parameter to indicate the number of environments needed. Use the UpdateStackSet command to update existing development environments.",
        "Use nested stacks to define common infrastructure components. To access the exported values, use TemplateURL to reference the networking team’s template. To retrieve Virtual Private Cloud (VPC) and subnet values, use Fn::ImportValue intrinsic functions in the Parameters section of the root template. Use the CreateChangeSet and ExecuteChangeSet commands to update existing development environments.",
        "Use nested stacks to define common infrastructure components. Use Fn::ImportValue intrinsic functions with the resources of the nested stack to retrieve Virtual Private Cloud (VPC) and subnet values. Use the CreateChangeSet and ExecuteChangeSet commands to update existing development environments.",
        "Use Fn::ImportValue intrinsic functions in the Parameters section of the root template to retrieve Virtual Private Cloud (VPC) and subnet values. Define the development resources in the order they need to be created in the CloudFormation nested stacks. Use the CreateChangeSet. and ExecuteChangeSet commands to update existing development environments."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_50",
      "batch": "Batch 1",
      "type": "single",
      "prompt": "A company uses AWS Organizations to manage multiple accounts. Information security policies require that all unencrypted Amazon EBS volumes be marked as non-compliant. A DevOps engineer needs to automatically deploy the solution and ensure that this compliance check is always present. Which solution will accomplish this?",
      "options": [
        "Create an AWS CloudFormation template that defines an AWS Inspector rule to check whether EBS encryption is enabled. Save the template to an Amazon S3 bucket that has been shared with all accounts within the company. Update the account creation script pointing to the CloudFormation template in Amazon S3.",
        "Create an AWS Config organizational rule to check whether EBS encryption is enabled and deploy the rule using the AWS CLI. Create and apply an SCP to prohibit stopping and deleting AWS Config across the organization.",
        "Create an SCP in Organizations. Set the policy to prevent the launch of Amazon EC2 instances without encryption on the EBS volumes using a conditional expression. Apply the SCP to all AWS accounts. Use Amazon Athena to analyze the AWS CloudTrail output, looking for events that deny an ec2:RunInstances action.",
        "Deploy an IAM role to all accounts from a single trusted account. Build a pipeline with AWS CodePipeline with a stage in AWS Lambda to assume the IAM role, and list all EBS volumes in the account. Publish a report to Amazon S3."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_51",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "A company is performing vulnerability scanning for all Amazon EC2 instances across many accounts. The accounts are in an organization in AWS Organizations. Each account's VPCs are attached to a shared transit gateway. The VPCs send traffic to the internet through a central egress VPC. The company has enabled Amazon Inspector in a delegated administrator account and has enabled scanning for all member accounts. A DevOps engineer discovers that some EC2 instances are listed in the \"not scanning\" tab in Amazon Inspector. Which combination of actions should the DevOps engineer take to resolve this issue? (Choose three.)",
      "options": [
        "Verify that AWS Systems Manager Agent is installed and is running on the EC2 instances that Amazon Inspector is not scanning.",
        "Associate the target EC2 instances with security groups that allow outbound communication on port 443 to the AWS Systems Manager service endpoint.",
        "Grant inspector:StartAssessmentRun permissions to the IAM role that the DevOps engineer is using.",
        "Configure EC2 Instance Connect for the EC2 instances that Amazon Inspector is not scanning.",
        "Associate the target EC2 instances with instance profiles that grant permissions to communicate with AWS Systems Manager.",
        "Create a managed-instance activation. Use the Activation Code and the Activation ID to register the EC2 instances."
      ],
      "correctAnswers": [
        0,
        1,
        4
      ],
      "explanation": "Correct Answer: ABE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_52",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A development team uses AWS CodeCommit for version control for applications. The development team uses AWS CodePipeline, AWS CodeBuild. and AWS CodeDeploy for CI/CD infrastructure. In CodeCommit, the development team recently merged pull requests that did not pass long-running tests in the code base. The development team needed to perform rollbacks to branches in the codebase, resulting in lost time and wasted effort. A DevOps engineer must automate testing of pull requests in CodeCommit to ensure that reviewers more easily see the results of automated tests as part of the pull request review. What should the DevOps engineer do to meet this requirement?",
      "options": [
        "Create an Amazon EventBridge rule that reacts to the pullRequestStatusChanged event. Create an AWS Lambda function that invokes a CodePipeline pipeline with a CodeBuild action that runs the tests for the application. Program the Lambda function to post the CodeBuild badge as a comment on the pull request so that developers will see the badge in their code review.",
        "Create an Amazon EventBridge rule that reacts to the pullRequestCreated event. Create an AWS Lambda function that invokes a CodePipeline pipeline with a CodeBuild action that runs the tests for the application. Program the Lambda function to post the CodeBuild test results as a comment on the pull request when the test results are complete.",
        "Create an Amazon EventBridge rule that reacts to pullRequestCreated and pullRequestSourceBranchUpdated events. Create an AWS Lambda function that invokes a CodePipeline pipeline with a CodeBuild action that runs the tests for the application. Program the Lambda function to post the CodeBuild badge as a comment on the pull request so that developers will see the badge in their code review.",
        "Create an Amazon EventBridge rule that reacts to the pullRequestStatusChanged event. Create an AWS Lambda function that invokes a CodePipeline pipeline with a CodeBuild action that runs the tests for the application. Program the Lambda function to post the CodeBuild test results as a comment on the pull request when the test results are complete."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_53",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "A DevOps engineer has automated a web service deployment by using AWS CodePipeline with the following steps: 1. An AWS CodeBuild project compiles the deployment artifact and runs unit tests. 2. An AWS CodeDeploy deployment group deploys the web service to Amazon EC2 instances in the staging environment. 3. A CodeDeploy deployment group deploys the web service to EC2 instances in the production environment. The quality assurance (QA) team requests permission to inspect the build artifact before the deployment to the production environment occurs. The QA team wants to run an internal penetration testing tool to conduct manual tests. The tool will be invoked by a REST API call. Which combination of actions should the DevOps engineer take to fulfill this request? (Choose two.)",
      "options": [
        "Insert a manual approval action between the test actions and deployment actions of the pipeline.",
        "Modify the buildspec.yml file for the compilation stage to require manual approval before completion.",
        "Update the CodeDeploy deployment groups so that they require manual approval to proceed.",
        "Update the pipeline to directly call the REST API for the penetration testing tool.",
        "Update the pipeline to invoke an AWS Lambda function that calls the REST API for the penetration testing tool."
      ],
      "correctAnswers": [
        0,
        4
      ],
      "explanation": "Correct Answer: AE",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_54",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A company is hosting a web application in an AWS Region. For disaster recovery purposes, a second region is being used as a standby. Disaster recovery requirements state that session data must be replicated between regions in near-real time and 1% of requests should route to the secondary region to continuously verify system functionality. Additionally, if there is a disruption in service in the main region, traffic should be automatically routed to the secondary region, and the secondary region must be able to scale up to handle all traffic. How should a DevOps engineer meet these requirements?",
      "options": [
        "In both regions, deploy the application on AWS Elastic Beanstalk and use Amazon DynamoDB global tables for session data. Use an Amazon Route 53 weighted routing policy with health checks to distribute the traffic across the regions.",
        "In both regions, launch the application in Auto Scaling groups and use DynamoDB for session data. Use a Route 53 failover routing policy with health checks to distribute the traffic across the regions.",
        "In both regions, deploy the application in AWS Lambda, exposed by Amazon API Gateway, and use Amazon RDS for PostgreSQL with cross-region replication for session data. Deploy the web application with client-side logic to call the API Gateway directly.",
        "In both regions, launch the application in Auto Scaling groups and use DynamoDB global tables for session data. Enable an Amazon CloudFront weighted distribution across regions. Point the Amazon Route 53 DNS record at the CloudFront distribution."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_55",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "A company runs an application on Amazon EC2 instances. The company uses a series of AWS CloudFormation stacks to define the application resources. A developer performs updates by building and testing the application on a laptop and then uploading the build output and CloudFormation stack templates to Amazon S3. The developer's peers review the changes before the developer performs the CloudFormation stack update and installs a new version of the application onto the EC2 instances. The deployment process is prone to errors and is time-consuming when the developer updates each EC2 instance with the new application. The company wants to automate as much of the application deployment process as possible while retaining a final manual approval step before the modification of the application or resources. The company already has moved the source code for the application and the CloudFormation templates to AWS CodeCommit. The company also has created an AWS CodeBuild project to build and test the application. Which combination of steps will meet the company’s requirements? (Choose two.)",
      "options": [
        "Create an application group and a deployment group in AWS CodeDeploy. Install the CodeDeploy agent on the EC2 instances.",
        "Create an application revision and a deployment group in AWS CodeDeploy. Create an environment in CodeDeploy. Register the EC2 instances to the CodeDeploy environment.",
        "Use AWS CodePipeline to invoke the CodeBuild job, run the CloudFormation update, and pause for a manual approval step. After approval, start the AWS CodeDeploy deployment.",
        "Use AWS CodePipeline to invoke the CodeBuild job, create CloudFormation change sets for each of the application stacks, and pause for a manual approval step. After approval, run the CloudFormation change sets and start the AWS CodeDeploy deployment.",
        "Use AWS CodePipeline to invoke the CodeBuild job, create CloudFormation change sets for each of the application stacks, and pause for a manual approval step. After approval, start the AWS CodeDeploy deployment."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_56",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A DevOps engineer manages a web application that runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an EC2 Auto Scaling group across multiple Availability Zones. The engineer needs to implement a deployment strategy that: Launches a second fleet of instances with the same capacity as the original fleet. Maintains the original fleet unchanged while the second fleet is launched. Transitions traffic to the second fleet when the second fleet is fully deployed. Terminates the original fleet automatically 1 hour after transition. Which solution will satisfy these requirements?",
      "options": [
        "Use an AWS CloudFormation template with a retention policy for the ALB set to 1 hour. Update the Amazon Route 53 record to reflect the new ALB.",
        "Use two AWS Elastic Beanstalk environments to perform a blue/green deployment from the original environment to the new one. Create an application version lifecycle policy to terminate the original environment in 1 hour.",
        "Use AWS CodeDeploy with a deployment group configured with a blue/green deployment configuration Select the option Terminate the original instances in the deployment group with a waiting period of 1 hour.",
        "Use AWS Elastic Beanstalk with the configuration set to Immutable. Create an .ebextension using the Resources key that sets the deletion policy of the ALB to 1 hour, and deploy the application."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_57",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A video-sharing company stores its videos in Amazon S3. The company has observed a sudden increase in video access requests, but the company does not know which videos are most popular. The company needs to identify the general access pattern for the video files. This pattern includes the number of users who access a certain file on a given day, as well as the number of pull requests for certain files. How can the company meet these requirements with the LEAST amount of effort?",
      "options": [
        "Activate S3 server access logging. Import the access logs into an Amazon Aurora database. Use an Aurora SQL query to analyze the access patterns.",
        "Activate S3 server access logging. Use Amazon Athena to create an external table with the log files. Use Athena to create a SQL query to analyze the access patterns.",
        "Invoke an AWS Lambda function for every S3 object access event. Configure the Lambda function to write the file access information, such as user. S3 bucket, and file key, to an Amazon Aurora database. Use an Aurora SQL query to analyze the access patterns.",
        "Record an Amazon CloudWatch Logs log message for every S3 object access event. Configure a CloudWatch Logs log stream to write the file access information, such as user, S3 bucket, and file key, to an Amazon Kinesis Data Analytics for SQL application. Perform a sliding window analysis."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_58",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A development team wants to use AWS CloudFormation stacks to deploy an application. However, the developer IAM role does not have the required permissions to provision the resources that are specified in the AWS CloudFormation template. A DevOps engineer needs to implement a solution that allows the developers to deploy the stacks. The solution must follow the principle of least privilege. Which solution will meet these requirements?",
      "options": [
        "Create an IAM policy that allows the developers to provision the required resources. Attach the policy to the developer IAM role.",
        "Create an IAM policy that allows full access to AWS CloudFormation. Attach the policy to the developer IAM role.",
        "Create an AWS CloudFormation service role that has the required permissions. Grant the developer IAM role a cloudformation:* action. Use the new service role during stack deployments.",
        "Create an AWS CloudFormation service role that has the required permissions. Grant the developer IAM role the iam:PassRole permission. Use the new service role during stack deployments."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_59",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A production account has a requirement that any Amazon EC2 instance that has been logged in to manually must be terminated within 24 hours. All applications in the production account are using Auto Scaling groups with the Amazon CloudWatch Logs agent configured. How can this process be automated?",
      "options": [
        "Create a CloudWatch Logs subscription to an AWS Step Functions application. Configure an AWS Lambda function to add a tag to the EC2 instance that produced the login event and mark the instance to be decommissioned. Create an Amazon EventBridge rule to invoke a second Lambda function once a day that will terminate all instances with this tag.",
        "Create an Amazon CloudWatch alarm that will be invoked by the login event. Send the notification to an Amazon Simple Notification Service (Amazon SNS) topic that the operations team is subscribed to, and have them terminate the EC2 instance within 24 hours.",
        "Create an Amazon CloudWatch alarm that will be invoked by the login event. Configure the alarm to send to an Amazon Simple Queue Service (Amazon SQS) queue. Use a group of worker instances to process messages from the queue, which then schedules an Amazon EventBridge rule to be invoked.",
        "Create a CloudWatch Logs subscription to an AWS Lambda function. Configure the function to add a tag to the EC2 instance that produced the login event and mark the instance to be decommissioned. Create an Amazon EventBridge rule to invoke a daily Lambda function that terminates all instances with this tag."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_60",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A company has enabled all features for its organization in AWS Organizations. The organization contains 10 AWS accounts. The company has turned on AWS CloudTrail in all the accounts. The company expects the number of AWS accounts in the organization to increase to 500 during the next year. The company plans to use multiple OUs for these accounts. The company has enabled AWS Config in each existing AWS account in the organization. A DevOps engineer must implement a solution that enables AWS Config automatically for all future AWS accounts that are created in the organization. Which solution will meet this requirement?",
      "options": [
        "In the organization's management account, create an Amazon EventBridge rule that reacts to a CreateAccount API call. Configure the rule to invoke an AWS Lambda function that enables trusted access to AWS Config for the organization.",
        "In the organization's management account, create an AWS CloudFormation stack set to enable AWS Config. Configure the stack set to deploy automatically when an account is created through Organizations.",
        "In the organization's management account, create an SCP that allows the appropriate AWS Config API calls to enable AWS Config. Apply the SCP to the root-level OU.",
        "In the organization's management account, create an Amazon EventBridge rule that reacts to a CreateAccount API call. Configure the rule to invoke an AWS Systems Manager Automation runbook to enable AWS Config for the account."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_61",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A company has many applications. Different teams in the company developed the applications by using multiple languages and frameworks. The applications run on premises and on different servers with different operating systems. Each team has its own release protocol and process. The company wants to reduce the complexity of the release and maintenance of these applications. The company is migrating its technology stacks, including these applications, to AWS. The company wants centralized control of source code, a consistent and automatic delivery pipeline, and as few maintenance tasks as possible on the underlying infrastructure. What should a DevOps engineer do to meet these requirements?",
      "options": [
        "Create one AWS CodeCommit repository for all applications. Put each application's code in a different branch. Merge the branches, and use AWS CodeBuild to build the applications. Use AWS CodeDeploy to deploy the applications to one centralized application server.",
        "Create one AWS CodeCommit repository for each of the applications. Use AWS CodeBuild to build the applications one at a time. Use AWS CodeDeploy to deploy the applications to one centralized application server.",
        "Create one AWS CodeCommit repository for each of the applications. Use AWS CodeBuild to build the applications one at a time and to create one AMI for each server. Use AWS CloudFormation StackSets to automatically provision and decommission Amazon EC2 fleets by using these AMIs.",
        "Create one AWS CodeCommit repository for each of the applications. Use AWS CodeBuild to build one Docker image for each application in Amazon Elastic Container Registry (Amazon ECR). Use AWS CodeDeploy to deploy the applications to Amazon Elastic Container Service (Amazon ECS) on infrastructure that AWS Fargate manages"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_62",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "A company's application is currently deployed to a single AWS Region. Recently, the company opened a new office on a different continent. The users in the new office are experiencing high latency. The company's application runs on Amazon EC2 instances behind an Application Load Balancer (ALB) and uses Amazon DynamoDB as the database layer. The instances run in an EC2 Auto Scaling group across multiple Availability Zones. A DevOps engineer is tasked with minimizing application response times and improving availability for users in both Regions. Which combination of actions should be taken to address the latency issues? (Choose three.)",
      "options": [
        "Create a new DynamoDB table in the new Region with cross-Region replication enabled.",
        "Create new ALB and Auto Scaling group global resources and configure the new ALB to direct traffic to the new Auto Scaling group.",
        "Create new ALB and Auto Scaling group resources in the new Region and configure the new ALB to direct traffic to the new Auto Scaling group.",
        "Create Amazon Route 53 records, health checks, and latency-based routing policies to route to the ALB.",
        "Create Amazon Route 53 aliases, health checks, and failover routing policies to route to the ALB.",
        "Convert the DynamoDB table to a global table."
      ],
      "correctAnswers": [
        2,
        3,
        5
      ],
      "explanation": "Correct Answer: CDF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_63",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A DevOps engineer needs to apply a core set of security controls to an existing set of AWS accounts. The accounts are in an organization in AWS Organizations. Individual teams will administer individual accounts by using the AdministratorAccess AWS managed policy. For all accounts. AWS CloudTrail and AWS Config must be turned on in all available AWS Regions. Individual account administrators must not be able to edit or delete any of the baseline resources. However, individual account administrators must be able to edit or delete their own CloudTrail trails and AWS Config rules. Which solution will meet these requirements in the MOST operationally efficient way?",
      "options": [
        "Create an AWS CloudFormation template that defines the standard account resources. Deploy the template to all accounts from the organization's management account by using CloudFormation StackSets. Set the stack policy to deny Update:Delete actions.",
        "Enable AWS Control Tower. Enroll the existing accounts in AWS Control Tower. Grant the individual account administrators access to CloudTrail and AWS Config.",
        "Designate an AWS Config management account. Create AWS Config recorders in all accounts by using AWS CloudFormation StackSets. Deploy AWS Config rules to the organization by using the AWS Config management account. Create a CloudTrail organization trail in the organization’s management account. Deny modification or deletion of the AWS Config recorders by using an SCP.",
        "Create an AWS CloudFormation template that defines the standard account resources. Deploy the template to all accounts from the organization's management account by using Cloud Formation StackSets Create an SCP that prevents updates or deletions to CloudTrail resources or AWS Config resources unless the principal is an administrator of the organization's management account."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_64",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "A company has its AWS accounts in an organization in AWS Organizations. AWS Config is manually configured in each AWS account. The company needs to implement a solution to centrally configure AWS Config for all accounts in the organization The solution also must record resource changes to a central account. Which combination of actions should a DevOps engineer perform to meet these requirements? (Choose two.)",
      "options": [
        "Configure a delegated administrator account for AWS Config. Enable trusted access for AWS Config in the organization.",
        "Configure a delegated administrator account for AWS Config. Create a service-linked role for AWS Config in the organization’s management account.",
        "Create an AWS CloudFormation template to create an AWS Config aggregator. Configure a CloudFormation stack set to deploy the template to all accounts in the organization.",
        "Create an AWS Config organization aggregator in the organization's management account. Configure data collection from all AWS accounts in the organization and from all AWS Regions.",
        "Create an AWS Config organization aggregator in the delegated administrator account. Configure data collection from all AWS accounts in the organization and from all AWS Regions."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_65",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A company wants to migrate its content sharing web application hosted on Amazon EC2 to a serverless architecture. The company currently deploys changes to its application by creating a new Auto Scaling group of EC2 instances and a new Elastic Load Balancer, and then shifting the traffic away using an Amazon Route 53 weighted routing policy. For its new serverless application, the company is planning to use Amazon API Gateway and AWS Lambda. The company will need to update its deployment processes to work with the new application. It will also need to retain the ability to test new features on a small number of users before rolling the features out to the entire user base. Which deployment strategy will meet these requirements?",
      "options": [
        "Use AWS CDK to deploy API Gateway and Lambda functions. When code needs to be changed, update the AWS CloudFormation stack and deploy the new version of the APIs and Lambda functions. Use a Route 53 failover routing policy for the canary release strategy.",
        "Use AWS CloudFormation to deploy API Gateway and Lambda functions using Lambda function versions. When code needs to be changed, update the CloudFormation stack with the new Lambda code and update the API versions using a canary release strategy. Promote the new version when testing is complete.",
        "Use AWS Elastic Beanstalk to deploy API Gateway and Lambda functions. When code needs to be changed, deploy a new version of the API and Lambda functions. Shift traffic gradually using an Elastic Beanstalk blue/green deployment.",
        "Use AWS OpsWorks to deploy API Gateway in the service layer and Lambda functions in a custom layer. When code needs to be changed, use OpsWorks to perform a blue/green deployment and shift traffic gradually."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_66",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A development team uses AWS CodeCommit, AWS CodePipeline, and AWS CodeBuild to develop and deploy an application. Changes to the code are submitted by pull requests. The development team reviews and merges the pull requests, and then the pipeline builds and tests the application. Over time, the number of pull requests has increased. The pipeline is frequently blocked because of failing tests. To prevent this blockage, the development team wants to run the unit and integration tests on each pull request before it is merged. Which solution will meet these requirements?",
      "options": [
        "Create a CodeBuild project to run the unit and integration tests. Create a CodeCommit approval rule template. Configure the template to require the successful invocation of the CodeBuild project. Attach the approval rule to the project's CodeCommit repository.",
        "Create an Amazon EventBridge rule to match pullRequestCreated events from CodeCommit Create a CodeBuild project to run the unit and integration tests. Configure the CodeBuild project as a target of the EventBridge rule that includes a custom event payload with the CodeCommit repository and branch information from the event.",
        "Create an Amazon EventBridge rule to match pullRequestCreated events from CodeCommit. Modify the existing CodePipeline pipeline to not run the deploy steps if the build is started from a pull request. Configure the EventBridge rule to run the pipeline with a custom payload that contains the CodeCommit repository and branch information from the event.",
        "Create a CodeBuild project to run the unit and integration tests. Create a CodeCommit notification rule that matches when a pull request is created or updated. Configure the notification rule to invoke the CodeBuild project."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_67",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A company has an application that runs on a fleet of Amazon EC2 instances. The application requires frequent restarts. The application logs contain error messages when a restart is required. The application logs are published to a log group in Amazon CloudWatch Logs. An Amazon CloudWatch alarm notifies an application engineer through an Amazon Simple Notification Service (Amazon SNS) topic when the logs contain a large number of restart-related error messages. The application engineer manually restarts the application on the instances after the application engineer receives a notification from the SNS topic. A DevOps engineer needs to implement a solution to automate the application restart on the instances without restarting the instances. Which solution will meet these requirements in the MOST operationally efficient manner?",
      "options": [
        "Configure an AWS Systems Manager Automation runbook that runs a script to restart the application on the instances. Configure the SNS topic to invoke the runbook.",
        "Create an AWS Lambda function that restarts the application on the instances. Configure the Lambda function as an event destination of the SNS topic.",
        "Configure an AWS Systems Manager Automation runbook that runs a script to restart the application on the instances. Create an AWS Lambda function to invoke the runbook. Configure the Lambda function as an event destination of the SNS topic.",
        "Configure an AWS Systems Manager Automation runbook that runs a script to restart the application on the instances. Configure an Amazon EventBridge rule that reacts when the CloudWatch alarm enters ALARM state. Specify the runbook as a target of the rule."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_68",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "A DevOps engineer at a company is supporting an AWS environment in which all users use AWS IAM Identity Center (AWS Single Sign-On). The company wants to immediately disable credentials of any new IAM user and wants the security team to receive a notification. Which combination of steps should the DevOps engineer take to meet these requirements? (Choose three.)",
      "options": [
        "Create an Amazon EventBridge rule that reacts to an IAM CreateUser API call in AWS CloudTrail.",
        "Create an Amazon EventBridge rule that reacts to an IAM GetLoginProfile API call in AWS CloudTrail.",
        "Create an AWS Lambda function that is a target of the EventBridge rule. Configure the Lambda function to disable any access keys and delete the login profiles that are associated with the IAM user.",
        "Create an AWS Lambda function that is a target of the EventBridge rule. Configure the Lambda function to delete the login profiles that are associated with the IAM user.",
        "Create an Amazon Simple Notification Service (Amazon SNS) topic that is a target of the EventBridge rule. Subscribe the security team's group email address to the topic.",
        "Create an Amazon Simple Queue Service (Amazon SQS) queue that is a target of the Lambda function. Subscribe the security team's group email address to the queue."
      ],
      "correctAnswers": [
        0,
        2,
        4
      ],
      "explanation": "Correct Answer: ACE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_69",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A company wants to set up a continuous delivery pipeline. The company stores application code in a private GitHub repository. The company needs to deploy the application components to Amazon Elastic Container Service (Amazon ECS). Amazon EC2, and AWS Lambda. The pipeline must support manual approval actions. Which solution will meet these requirements?",
      "options": [
        "Use AWS CodePipeline with Amazon ECS. Amazon EC2, and Lambda as deploy providers.",
        "Use AWS CodePipeline with AWS CodeDeploy as the deploy provider.",
        "Use AWS CodePipeline with AWS Elastic Beanstalk as the deploy provider.",
        "Use AWS CodeDeploy with GitHub integration to deploy the application."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_70",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "You are replicating your company's AWS infrastructure in another region, creating a disaster recovery environment. To achieve this, you modify your CloudFormation template to use the new DR region. However, when you run the deployment, it fails. What are some possible reasons for this? (Choose 3 answers)",
      "options": [
        "You need to copy your CloudFormation template to the disaster recovery region.",
        "Resource identifiers such will be different from region to region.",
        "EC2 key pairs will differ from region to region.",
        "The disaster recovery region has a different number of availability zones."
      ],
      "correctAnswers": [
        1,
        2,
        3
      ],
      "explanation": "Correct Answer: BCD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_71",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You have a CloudFormation template with the following Mappings section:“Mappings” : { “RegionMap” : { “us- east-1” : { “AMI_ID” : “ami-1753564” }, “us-west-1” : { “AMI_ID” : “ami-4638392” }, “us-west-2” : { “AMI_ID” : “ami- 0244903” } }} How would you reference the AMI_ID mapped value for us-east-1?",
      "options": [
        "{ “Fn::FindInMap” : [ “RegionMap” , “us-east-1”, “AMI_ID” ] }",
        "{ “Fn::FindInMap” : [ “Mappings”, “RegionMap” , “us-east-1”, “AMI_ID” ] }",
        "{ “Fn::GetAtt” : [ “RegionMap” , “us-east-1”, “AMI_ID” ] }",
        "{ “Fn::GetAtt” : [ “Mappings”, “RegionMap” , “us-east-1”, “AMI_ID” ] }"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_72",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A DevOps engineer used an AWS CloudFormation custom resource to set up AD Connector. The AWS Lambda function executed and created AD Connector, but CloudFormation is not transitioning from CREATE_IN_PROGRESS to CREATE_COMPLETE. Which action should the engineer take to resolve this issue?",
      "options": [
        "Ensure the Lambda function code has exited successfully.",
        "Ensure the Lambda function code returns a response to the pre-signed URL.",
        "Ensure the Lambda function IAM role has cloudformation:UpdateStack permissions for the stack ARN.",
        "Ensure the Lambda function IAM role has ds:ConnectDirectory permissions for the AWS account."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_73",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are the DevOps engineer responsible for supporting your company’s AWS infrastructure, which consists of EC2 instances in an Auto Scaling group, an ELB, and a MySQL RDS instance. You have recently modified your RDS instance to a multi-AZ deployment, and are planning to enable automated backups, but your supervisor is concerned about a performance impact. What should you tell him?",
      "options": [
        "It is a valid concern because I/O is suspended during automated backups.",
        "It is not a valid concern, because automated backups are taken from the secondary instance in multi-AZ deployments.",
        "It is a valid concern because connections are blocked during automated backups.",
        "It is not a valid concern, because RDS automatically fails over to the secondary instance during backups in multi-AZ deployments."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_74",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are a DevOps engineer responsible for maintaining the monitoring and observability platform for your company’s AWS infrastructure, which relies heavily on CloudWatch. Recently, one of the web developers asked you to create a custom CloudWatch metric to track the number of page views for a particular site. You write a script to collect the data and publish the results to CloudWatch, deploy it to your web servers, and configure it to run every 5 minutes via cron. As soon as you finish, you realize that you forgot to create the metric namespace in CloudWatch before deploying your custom monitoring script. What will happen when the script runs?",
      "options": [
        "A 4xx error will be returned, and no data will be sent to CloudWatch.",
        "A 5xx error will be returned, and no data will be sent to CloudWatch.",
        "CloudWatch will create the metric for you.",
        "No error will be produced so no data will be sent to CloudWatch."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_75",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "A company plans to stop using Amazon EC2 key pairs for SSH access, and instead plans to use AWS Systems Manager Session Manager. To further enhance security, access to Session Manager must take place over a private network only. Which combinations of actions will accomplish this? (Choose two.)",
      "options": [
        "Allow inbound access to TCP port 22 in all associated EC2 security groups from the VPC CIDR range.",
        "Attach an IAM policy with the necessary Systems Manager permissions to the existing IAM instance profile.",
        "Create a VPC endpoint for Systems Manager in the desired Region.",
        "Deploy a new EC2 instance that will act as a bastion host to the rest of the EC2 instance fleet.",
        "Remove any default routes in the associated route tables."
      ],
      "correctAnswers": [
        1,
        2
      ],
      "explanation": "Correct Answer: BC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_76",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are developing a CloudFormation template to deploy your application’s infrastructure. Because your application requires a SQL database, you opt to use CloudFormation to configure an RDS instance. You realize you’ll need to specify the username and password for the database instance. What’s the best way to securely pass that information to the template?",
      "options": [
        "Embed the credentials in the template and use IAM to restrict access.",
        "Create an IAM role with full permissions to RDS, and attach the role to the template.",
        "Use dummy credentials in the template, and then manually change the RDS username and password after executing the template.",
        "Use an input parameter to specify these values at template run time."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_77",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are the DevOps engineer responsible for supporting your company's AWS infrastructure, which consists of a VPC with two private and two public subnets, EC2 instances in an Auto Scaling group, and an Elastic Load Balancer (ELB). Your supervisor has recently made you aware of a new security protocol requiring you to log and retain details about IP traffic coming into and out of your AWS environment. What feature or service would you use to capture this data?",
      "options": [
        "VPC Flow Logs",
        "ELB Flow Logs",
        "CloudTrail",
        "CloudWatch"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_78",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "A company runs an application with an Amazon EC2 and on-premises configuration. A DevOps Engineer needs to standardize patching across both environments. Company policy dictates that patching only happens during non-business hours. Which combination of actions will meet these requirements? (Choose three.)",
      "options": [
        "Add the physical machines into AWS Systems Manager using Systems Manager Hybrid Activations.",
        "Attach an IAM role to the EC2 instances, allowing them to be managed by AWS Systems Manager.",
        "Create IAM access keys for the on-premises machines to interact with AWS Systems Manager.",
        "Execute an AWS Systems Manager Automation document to patch the systems every hour.",
        "Use Amazon CloudWatch Events scheduled events to schedule a patch window.",
        "Use AWS Systems Manager Maintenance Windows to schedule a patch window."
      ],
      "correctAnswers": [
        0,
        1,
        5
      ],
      "explanation": "Correct Answer: ABF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_79",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You currently have this item in your DynamoDB ProductCatalog table:{ \"Id\": 789, \"QuantityOnHand\": 5}You run the following command sequence in your command line, and it completes successfully.aws dynamodb update-item \\ table- name ProductCatalog \\ key '{\"Id\":{\"N\":\"789\"}}' \\ update-expression \"ADD QuantityOnHand :q\" \\ expression-attribute- values '{\":q\": {\"N\": \"5\"}}' \\ return-values ALL_NEWWhat would be a reasonable representation of what the item looks like now?",
      "options": [
        "{ \"Id\": 789, \"QuantityOnHand\": 0}",
        "{ \"Id\": 789, \"QuantityOnHand\": -5}",
        "{ \"Id\": 789, \"QuantityOnHand\": [5, 5]}",
        "{ \"Id\": 789, \"QuantityOnHand\": 10}"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_80",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "You are the architect assisting a new start-up company in launching its infrastructure onto the AWS Cloud. Because their application will experience indeterminate traffic patterns, you recommend they deploy their JAVA-based application on EC2, with Elastic Load Balancing and Auto Scaling enabled. It’s now time to set up the Auto Scaling rules. Which CloudWatch metric does AWS recommend you use as an Auto Scaling trigger?",
      "options": [
        "CPU Utilization of the EC2 Instances",
        "CPU Utilization of the ELB",
        "Latency reported by the ELB",
        "EC2 Memory Utilization"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_81",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A company wants to migrate its content sharing web application hosted on Amazon EC2 to a serverless architecture. The company currently deploys changes to its application by creating a new Auto Scaling group of EC2 instances and a new Elastic Load Balancer, and then shifting the traffic away using an Amazon Route 53 weighted routing policy. For its new serverless application, the company is planning to use Amazon API Gateway and AWS Lambda. The company will need to update its deployment processes to work with the new application. It will also need to retain the ability to test new features on a small number of users before rolling the features out to the entire user base. Which deployment strategy will meet these requirements?",
      "options": [
        "Use AWS CDK to deploy API Gateway and Lambda functions. When code needs to be changed, update the AWS CloudFormation stack and deploy the new version of the APIs and Lambda functions. Use a Route 53 failover routing policy for the canary release strategy.",
        "Use AWS CloudFormation to deploy API Gateway and Lambda functions using Lambda function versions. When code needs to be changed, update the CloudFormation stack with the new Lambda code and update the API versions using a canary release strategy. Promote the new version when testing is complete.",
        "Use AWS Elastic Beanstalk to deploy API Gateway and Lambda functions. When code needs to be changed, deploy a new version of the API and Lambda functions. Shift traffic gradually using an Elastic Beanstalk blue/green deployment.",
        "Use AWS OpsWorks to deploy API Gateway in the service layer and Lambda functions in a custom layer. When code needs to be changed, use OpsWorks to perform a blue/green deployment and shift traffic gradually."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_82",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "You are the DevOps engineer at a mobile gaming company, responsible for managing their AWS infrastructure. You are soon launching a new game, and are in the process of deploying and testing your auto-scaling groups. You have defined a scheduled scaling action that is intended to double the size of your EC2 fleet at a certain time. However, the designated time passes and no new instances are launched because the launch failed. What are some possible causes? (Choose 3 answers)",
      "options": [
        "The security group defined in your auto-scaling group does not exist.",
        "The security group defined in your launch configuration does not exist.",
        "The key pair defined in your launch configuration does not exist.",
        "The availability zone specified to your auto-scaling group is not available."
      ],
      "correctAnswers": [
        1,
        2,
        3
      ],
      "explanation": "Correct Answer: BCD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_83",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "You are coming on as a developer for an Android mobile application your company runs. You notice that all Lambda invocations are made over HTTP using the Amazon API Gateway instead of through the AWS Android SDK. What desirable objectives does this design achieve? (Choose 3 answers)",
      "options": [
        "It adds automatic protection against Distributed Denial of Service attacks.",
        "It provides the ability to throttle individual users or requests.",
        "It provides a caching layer to store responses from Lambda functions.",
        "It allows control over how the Lambda functions were invoked."
      ],
      "correctAnswers": [
        0,
        1,
        2
      ],
      "explanation": "Correct Answer: ABC",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_84",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "A company's application is currently deployed to a single AWS Region. Recently, the company opened a new office on a different continent. The users in the new office are experiencing high latency. The company's application runs on Amazon EC2 instances behind an Application Load Balancer (ALB) and uses Amazon DynamoDB as the database layer. The instances run in an EC2 Auto Scaling group across multiple Availability Zones. A DevOps Engineer is tasked with minimizing application response times and improving availability for users in both Regions. Which combination of actions should be taken to address the latency issues? (Choose three.)",
      "options": [
        "Create a new DynamoDB table in the new Region with cross-Region replication enabled.",
        "Create new ALB and Auto Scaling group global resources and configure the new ALB to direct traffic to the new Auto Scaling group.",
        "Create new ALB and Auto Scaling group resources in the new Region and configure the new ALB to direct traffic to the new Auto Scaling group.",
        "Create Amazon Route 53 records, health checks, and latency-based routing policies to route to the ALB.",
        "Create Amazon Route 53 aliases, health checks, and failover routing policies to route to the ALB.",
        "Convert the DynamoDB table to a global table."
      ],
      "correctAnswers": [
        2,
        3,
        5
      ],
      "explanation": "Correct Answer: CDF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_85",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "You are a DevOps engineer responsible for supporting your company’s AWS infrastructure, consisting of multiple EC2 instances running in a VPC, DynamoDB, SQS, and S3. You are working on provisioning a new S3 bucket, which will ultimately contain sensitive data. How can you encrypt that data at rest in S3? (Choose 2 answers)",
      "options": [
        "Set the server-side encryption option on upload.",
        "Set the server-side encryption option after upload.",
        "Encrypt it on the client-side before uploading.",
        "Enable encryption in the bucket policy."
      ],
      "correctAnswers": [
        0,
        2
      ],
      "explanation": "Correct Answer: AC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_86",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "You are a DevOps consultant helping to migrate a mobile survey application to the AWS cloud. The environment consists of an ELB, EC2 instances, SQS queues, several DynamoDB tables, and some Lambda functions. To meet the variable demand expected on the EC2 tier, you decide to place the instances in an Auto Scaling group. You have created the launch template and are now working on configuring the Auto Scaling group. Which types of information must be specified? (Choose 3 answers)",
      "options": [
        "Instance type",
        "Availability zone",
        "Elastic load balancer",
        "Launch configuration"
      ],
      "correctAnswers": [
        0,
        1,
        2
      ],
      "explanation": "Correct Answer: ABC",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_87",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A DevOps engineer is developing an application for a company. The application needs to persist files to Amazon S3. The application needs to upload files with different security classifications that the company defines. These classifications include confidential, private, and public. Files that have a confidential classification must not be viewable by anyone other than the user who uploaded them. The application uses the IAM role of the user to call the S3 API operations. The DevOps engineer has modified the application to add a DataClassification tag with the value of confidential and an Owner tag with the uploading user's ID to each confidential object that is uploaded to Amazon S3. Which set of additional steps must the DevOps engineer take to meet the company's requirements?",
      "options": [
        "Modify the S3 bucket's ACL to grant bucket-owner-read access to the uploading user's IAM role. Create an IAM policy that grants s3:GetObject operations on the S3 bucket when aws:ResourceTag/DataClassification equals confidential, and s3:ExistingObjectTag/Owner equals ${aws:userid}. Attach the policy to the IAM roles for users who require access to the S3 bucket.",
        "Modify the S3 bucket policy to allow the s3:GetObject action when aws:ResourceTag/DataClassification equals confidential, and s3:ExistingObjectTag/Owner equals ${aws:userid}. Create an IAM policy that grants s3:GetObject operations on the S3 bucket. Attach the policy to the IAM roles for users who require access to the S3 bucket.",
        "Modify the S3 bucket policy to allow the s3:GetObject action when aws:ResourceTag/DataClassification equals confidential, and aws:RequesttTag/Owner equals ${aws:userid}. Create an IAM policy that grants s3:GetObject operations on the S3 bucket. Attach the policy to the IAM roles for users who require access to the S3 bucket.",
        "Modify the S3 bucket's ACL to grant authenticated-read access when aws:ResourceTag/DataClassification equals confidential, and s3:ExistingObjectTag/Owner equals ${aws:userid}. Create an IAM policy that grants s3:GetObject operations on the S3 bucket. Attach the policy to the IAM roles for users who require access to the S3 bucket."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_88",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "You are a DevOps engineer responsible for supporting your company’s AWS infrastructure, consisting of multiple EC2 instances running in a VPC, DynamoDB, SQS, and S3. You are working on provisioning a new S3 bucket, which will ultimately contain sensitive data. What are two separate ways to ensure data is encrypted in-flight both into and out of S3? (Choose 2 answers)",
      "options": [
        "Use the encrypted SSL/TLS endpoint.",
        "Set the server-side encryption option on upload.",
        "Encrypt it on the client-side before uploading.",
        "Enable encryption in the bucket policy."
      ],
      "correctAnswers": [
        0,
        2
      ],
      "explanation": "Correct Answer: AC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_89",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "You are the DevOps engineer at a mid-sized technology firm, responsible for the automated disaster recovery of your company’s AWS infrastructure. Your supervisor has recently learned about the EC2 Auto Recovery feature, and she has asked you to evaluate whether or not it would be a good fit for your environment. She is particularly interested in the types of failures it can detect. Which conditions would be detectable by EC2 Auto Recovery? (Choose 3 answers)",
      "options": [
        "Application errors or crashes",
        "Loss of network connectivity",
        "Loss of system power",
        "Software or hardware issues on the physical host (hypervisor)"
      ],
      "correctAnswers": [
        1,
        2,
        3
      ],
      "explanation": "Correct Answer: BCD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_90",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A company has developed an AWS Lambda function that handles orders received through an API. The company is using AWS CodeDeploy to deploy the Lambda function as the final stage of a CI/CD pipeline. A DevOps Engineer has noticed there are intermittent failures of the ordering API for a few seconds after deployment. After some investigation, the DevOps Engineer believes the failures are due to database changes not having fully propagated before the Lambda function begins executing. How should the DevOps Engineer overcome this?",
      "options": [
        "Add a BeforeAllowTraffic hook to the AppSpec file that tests and waits for any necessary database changes before traffic can flow to the new version of the Lambda function",
        "Add an AfterAllowTraffic hook to the AppSpec file that forces traffic to wait for any pending database changes before allowing the new version of the Lambda function to respond",
        "Add a BeforeInstall hook to the AppSpec file that tests and waits for any necessary database changes before deploying the new version of the Lambda function",
        "Add a ValidateService hook to the AppSpec file that inspects incoming traffic and rejects the payload if dependent services, such as the database, are not yet ready"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_91",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "You are the DevOps engineer responsible for a social media site focused on sharing recipes. You are helping to develop a new feature that will recommend a set of recipes to users based on their history. You have decided to build this feature as a Lambda function, which will run once a day and produce some recommendations per user. You must now decide what to do with the results produced by your function. What are some valid options? (Choose 3 answers)",
      "options": [
        "Write the results directly to a DynamoDB table.",
        "Attach an EBS volume to your function and write the results to it and reattach later.",
        "Write the results to flat files in an S3 bucket.",
        "Write the results to RedShift."
      ],
      "correctAnswers": [
        0,
        2,
        3
      ],
      "explanation": "Correct Answer: ACD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_92",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "You are the new DevOps engineer for a health-based start-up responsible for multiple mission-critical workloads running on AWS. During your first week, you conduct an assessment of the infrastructure and discover some non- redundant instances that could be considered single-points-of-failure. You decide to use the EC2 Auto Recovery feature to automate the replacement of failed instances. What benefits does this approach have over auto scaling? (Choose 3 answers)",
      "options": [
        "The instance will retain its instance ID.",
        "The instance will retain its metadata.",
        "The instance will retain its private IP address.",
        "The instance will retain its logs."
      ],
      "correctAnswers": [
        0,
        1,
        2
      ],
      "explanation": "Correct Answer: ABC",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_93",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "A software company wants to automate the build process for a project where the code is stored in GitHub. When the repository is updated, source code should be compiled, tested, and pushed to Amazon S3. Which combination of steps would address these requirements? (Choose three.)",
      "options": [
        "Add a buildspec.yml file to the source code with build instructions.",
        "Configure a GitHub webhook to trigger a build every time a code change is pushed to the repository.",
        "Create an AWS CodeBuild project with GitHub as the source repository.",
        "Create an AWS CodeDeploy application with the Amazon EC2/On-Premises compute platform.",
        "Create an AWS OpsWorks deployment with the install dependencies command.",
        "Provision an Amazon EC2 instance to perform the build."
      ],
      "correctAnswers": [
        0,
        1,
        2
      ],
      "explanation": "Correct Answer: ABC",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_94",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "You are migrating your company’s AWS-based applications into OpsWorks Stacks, and quickly realize you have some different instance lifecycles defined for different use cases. What are some valid techniques to manage the lifecycle of a given instance via OpsWorks? (Choose 3 answers)",
      "options": [
        "Time-based instances that are started and stopped on a user- defined schedule",
        "Load-based instances that are started and stopped based on user-defined load thresholds",
        "24x7-based instances that are started/stopped manually",
        "24x7-based instances that are started/stopped automatically"
      ],
      "correctAnswers": [
        0,
        1,
        2
      ],
      "explanation": "Correct Answer: ABC",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_95",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "You have created a Lambda function to help automate an ETL process. The function is triggered by an SQS Queue Depth CloudWatch alarm, and is designed to process a message from the SQS, and then upload the results to an S3 bucket. During testing, you manually create a message in the SQS, but no results show up in your selected S3 bucket. What are some possible reasons for this? (Choose 3 answers)",
      "options": [
        "You did not provision enough compute resources and your function ran out of memory.",
        "Your S3 bucket is in a different region and Lambda cannot access it.",
        "Your Lambda function does not have the proper permissions to PUT to S3.",
        "Your function timed out."
      ],
      "correctAnswers": [
        0,
        2,
        3
      ],
      "explanation": "Correct Answer: ACD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_96",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "An online retail company based in the United States plans to expand its operations to Europe and Asia in the next six months. Its product currently runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. All data is stored in an Amazon Aurora database instance. When the product is deployed in multiple regions, the company wants a single product catalog across all regions, but for compliance purposes, its customer information and purchases must be kept in each region. How should the company meet these requirements with the LEAST amount of application changes?",
      "options": [
        "Use Amazon Redshift for the product catalog and Amazon DynamoDB tables for the customer information and purchases.",
        "Use Amazon DynamoDB global tables for the product catalog and regional tables for the customer information and purchases.",
        "Use Aurora with read replicas for the product catalog and additional local Aurora instances in each region for the customer information and purchases.",
        "Use Aurora for the product catalog and Amazon DynamoDB global tables for the customer information and purchases."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_97",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "Your company has recently migrated its source-code repositories from GitHub to AWS CodeCommit. Your developers now need a way to connect and authenticate their IDE environments to the repositories. What’s the best way to accomplish this?",
      "options": [
        "Create an IAM role, attach the AWSCodeCommitFullAccess managed policy, and add the role to the developer’s IDE environment.",
        "Create an IAM user, attach the AWSCodeCommitFullAccess managed policy, and add the credentials in the IDE environment.",
        "Create an IAM user, attach the AWSCodeCommitFullAccess managed policy, and add the API Access Keys to the IDE environment.",
        "Provision GIT credentials for HTTPS connection in IAM and add these to the developer’s IDE environment."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_98",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "You are the DevOps engineer responsible for supporting your company’s AWS infrastructure, which consists of EC2 instances in an Auto Scaling group, an ELB, and a MySQL RDS instance. You have recently modified your RDS instance to a multi-AZ deployment for high availability. What conditions would trigger a failover to the secondary instance? (Choose 3 answers)",
      "options": [
        "Loss of network connectivity to the primary instance",
        "Compute unit failure on primary instance",
        "Loss of availability in secondary AZ",
        "Storage failure on the primary instance"
      ],
      "correctAnswers": [
        0,
        1,
        3
      ],
      "explanation": "Correct Answer: ABD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_99",
      "batch": "Batch 2",
      "type": "single",
      "prompt": "A business has an application that consists of five independent AWS Lambda functions. The DevOps Engineer has built a CI/CD pipeline using AWS CodePipeline and AWS CodeBuild that builds, tests, packages, and deploys each Lambda function in sequence. The pipeline uses an Amazon CloudWatch Events rule to ensure the pipeline execution starts as quickly as possible after a change is made to the application source code. After working with the pipeline for a few months, the DevOps Engineer has noticed the pipeline takes too long to complete. What should the DevOps Engineer implement to BEST improve the speed of the pipeline?",
      "options": [
        "Modify the CodeBuild projects within the pipeline to use a compute type with more available network throughput.",
        "Create a custom CodeBuild execution environment that includes a symmetric multiprocessing configuration to run the builds in parallel.",
        "Modify the CodePipeline configuration to execute actions for each Lambda function in parallel by specifying the same runOrder.",
        "Modify each CodeBuild project to run within a VPC and use dedicated instances to increase throughput."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_100",
      "batch": "Batch 2",
      "type": "multiple",
      "prompt": "You are a DevOps consultant helping a new start-up company launch its infrastructure on AWS. The CTO has indicated he wants the environment deployed and managed via OpsWorks Stacks, and that they’ll need to support additional EBS Volumes. You recall that EBS Volumes can be registered with OpsWorks Stacks, assuming they meet certain conditions. Which constraints are valid? (Choose 2 answers)",
      "options": [
        "Attached, non-root General Purpose (SSD) volumes",
        "Volumes in a RAID array",
        "xfs-formatted volumes",
        "hdfs-formatted volumes"
      ],
      "correctAnswers": [
        0,
        2
      ],
      "explanation": "Correct Answer: AC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_101",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You are the DevOps engineer responsible for your company’s AWS infrastructure. You have been asked to audit permissions for a particular user; specifically, you want to determine whether a policy with arn arn:aws:iam::123456789012:policy/TestPolicy is currently attached to user Bob. How could you accomplish this via the CLI? (Choose 2 answers)",
      "options": [
        "get-policy --policy-arn 123456",
        "list-attached-user-policies --user-name Bob",
        "list-entities-for-policy --policy-arn arn:aws:iam::123456789012:policy/TestPolicy",
        "get-policy --user-name Bob"
      ],
      "correctAnswers": [
        1,
        2
      ],
      "explanation": "Correct Answer: BC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_102",
      "batch": "Batch 3",
      "type": "single",
      "prompt": ") A DevOps Engineer administers an application that manages video files for a video production company. The application runs on Amazon EC2 instances behind an ELB Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. Data is stored in an Amazon RDS PostgreSQL Multi-AZ DB instance, and the video files are stored in an Amazon S3 bucket. On a typical day, 50 GB of new video are added to the S3 bucket. The Engineer must implement a multi-region disaster recovery plan with the least data loss and the lowest recovery times. The current application infrastructure is already described using AWS CloudFormation. Which deployment option should the Engineer choose to meet the uptime and recovery objectives for the system?",
      "options": [
        "Launch the application from the CloudFormation template in the second region, which sets the capacity of the Auto Scaling group to 1. Create an Amazon RDS read replica in the second region. In the second region, enable cross-region replication between the original S3 bucket and a new S3 bucket. To fail over, promote the read replica as master. Update the CloudFormation stack and increase the capacity of the Auto Scaling group.",
        "Launch the application from the CloudFormation template in the second region, which sets the capacity of the Auto Scaling group to 1. Create a scheduled task to take daily Amazon RDS cross-region snapshots to the second region. In the second region, enable cross-region replication between the original S3 bucket and Amazon Glacier. In a disaster, launch a new application stack in the second region and restore the database from the most recent snapshot.",
        "Launch the application from the CloudFormation template in the second region, which sets the capacity of the Auto Scaling group to 1. Use Amazon CloudWatch Events to schedule a nightly task to take a snapshot of the database, copy the snapshot to the second region, and replace the DB instance in the second region from the snapshot. In the second region, enable cross-region replication between the original S3 bucket and a new S3 bucket. To fail over, increase the capacity of the Auto Scaling group.",
        "Use Amazon CloudWatch Events to schedule a nightly task to take a snapshot of the database and copy the snapshot to the second region. Create an AWS Lambda function that copies each object to a new S3 bucket in the second region in response to S3 event notifications. In the second region, launch the application from the CloudFormation template and restore the database from the most recent snapshot."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_103",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You are the DevOps engineer for a medical devices start-up who recently migrated their infrastructure to AWS. The environment consists of multiple EC2 instances in auto-scaling groups, internal and external ELBs, a multi-AZ RDS deployment, and several DynamoDB tables. One day, while an auto-scaling (scale out) event is happening, you notice that one of your EC2 instances has failed one of its instance status checks. What are some possible reasons for this? (Choose 3 answers)",
      "options": [
        "Failed system status check",
        "Incorrect networking configuration",
        "Exhausted memory",
        "Exhausted CPU"
      ],
      "correctAnswers": [
        0,
        1,
        2
      ],
      "explanation": "Correct Answer: ABC",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_104",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You have a Multi-AZ deployment with a SQL Server DB instance hosted on Amazon RDS. You’ve noticed that when larger database transactions are in the pipeline, failover time is quite long. You would like to shorten failover time so that your application can keep working despite the failover. What might be a good option to shorten the overall failover time?",
      "options": [
        "Chunk larger transactions into multiple smaller transactions.",
        "Split larger database tables into smaller tables with at least two indexes.",
        "Deploy applications in only two Availability Zones.",
        "Change the failover time setting on in Amazon RDS."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_105",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "A company is using AWS CodePipeline to automate its release pipeline. AWS CodeDeploy is being used in the pipeline to deploy an application to Amazon ECS using the blue/green deployment model. The company wants to implement scripts to test the green version of the application before shifting traffic. These scripts will complete in 5 minutes or less. If errors are discovered during these tests, the application must be rolled back. Which strategy will meet these requirements?",
      "options": [
        "Add a stage to the CodePipeline pipeline between the source and deploy stages. Use AWS CodeBuild to create an execution environment and build commands in the buildspec file to invoke test scripts. If errors are found, use the aws deploy stop-deployment command to stop the deployment.",
        "Add a stage to the CodePipeline pipeline between the source and deploy stages. Use this stage to execute an AWS Lambda function that will run the test scripts. If errors are found, use the aws deploy stop-deployment command to stop the deployment.",
        "Add a hooks section to the CodeDeploy AppSpec file. Use the AfterAllowTestTraffic lifecycle event to invoke an AWS Lambda function to run the test scripts. If errors are found, exit the Lambda function with an error to trigger rollback.",
        "Add a hooks section to the CodeDeploy AppSpec file. Use the AfterAllowTraffic lifecycle event to invoke the test scripts. If errors are found, use the aws deploy stop-deployment CLI command to stop the deployment."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_106",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Your on-premises datacenter is connected to your VPC using a DX connection. You have multiple Windows EC2 instances deployed within a private subnet in your VPC. You have configured the instances' security group rules to allow for RDP access from your datacenter so you can access the instances for administration. You would like to further harden the configuration and mitigate the risk of man-in-the-middle (MITM) attacks.Which of the following should you implement to mitigate the risk of MITM attacks?",
      "options": [
        "X.509 certificates",
        "SSL encryption of the RDP connection",
        "EV SSL Certificates",
        "Change the default RDP port"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_107",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "Your team has two KMS keys, KMS key1 and KMS key2.The policy for KMS key1 allows access to the AWS account (root user). The policy for KMS key2 allows access to you and your coworker, River. River currently has no IAM policy. Which keys, if any, does River have access to?",
      "options": [
        "River has no access to either KMS key.",
        "River has access to only KMS key1.",
        "River has access to only KMS key2.",
        "River has access to both KMS key1 and KMS key2."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_108",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "A company requires an RPO of 2 hours and an RTO of 10 minutes for its data and application at all times. An application uses a MySQL database and Amazon EC2 web servers. The development team needs a strategy for failover and disaster recovery. Which combination of deployment strategies will meet these requirements? (Choose two.)",
      "options": [
        "Create an Amazon Aurora cluster in one Availability Zone across multiple Regions as the data store. Use Aurora's automatic recovery capabilities in the event of a disaster.",
        "Create an Amazon Aurora global database in two Regions as the data store. In the event of a failure, promote the secondary Region as the master for the application.",
        "Create an Amazon Aurora multi-master cluster across multiple Regions as the data store. Use a Network Load Balancer to balance the database traffic in different Regions.",
        "Set up the application in two Regions and use Amazon Route 53 failover-based routing that points to the Application Load Balancers in both Regions. Use health checks to determine the availability in a given Region. Use Auto Scaling groups in each Region to adjust capacity based on demand.",
        "Set up the application in two Regions and use a multi-Region Auto Scaling group behind Application Load Balancers to manage the capacity based on demand. In the event of a disaster, adjust the Auto Scaling group's desired instance count to increase baseline capacity in the failover Region."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_109",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You are responsible for your company's AWS infrastructure, which consists of a LAMP-based application running on multiple EC2 instances. You have recently automated your infrastructure deployments with CloudFormation; however, when you deploy a new stack, your application encounters an error and fails to start. Upon further investigation, you discover that the web/app servers are attempting to connect to the database servers before your bootstrapping script has finished configuring MySQL. What’s the best way to resolve this within CloudFormation?",
      "options": [
        "Add a CreationPolicy attribute with a WaitCondition to the web/app resource declaration, and use the cfn- signal helper script or SignalResource API to release the wait.",
        "Reorder the Resources section of your CloudFormation template, so the database instances are created before the web/app instances.",
        "Add a DependsOn attribute to the database resource declaration; this will enforce strict ordering.",
        "Add a CreationPolicy attribute with a WaitCondition to the database resource declaration, and use the cfn- signal helper script or SignalResource API to release the wait."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_110",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": ") You are attempting a blue-green deployment using auto-scaling groups and a single application load balancer. The auto scaling group is not associated with a default termination policy. You update your auto scaling group with the new (green) launch configuration, and then double the size of the minimum host value to launch the new hosts with the updated code. Once the new (green) hosts come online and stabilize, you reduce the minimum host number back to its original value to terminate the old (blue) hosts. However, the termination does not go as expected. The new (green) hosts were terminated, and the old (blue) hosts are still running. What could be causing this? (Choose 2 answers)",
      "options": [
        "You do not have the OldestLaunchConfiguration termination policy enabled in your auto scaling group.",
        "You do not have the OldestInstance termination policy enabled in your auto scaling group.",
        "You do not have the NewestInstance termination policy enabled in your auto scaling group.",
        "You do not have permissions to terminate the older instances."
      ],
      "correctAnswers": [
        0,
        1
      ],
      "explanation": "Correct Answer: AB",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_111",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": ") An Amazon EC2 instance is running in a Virtual Private Cloud (VPC) and needs to download an object from a restricted Amazon S3 bucket. When the DevOps engineer tries to download, the object an AccessDenied error is received. What are the possible causes for this error? (Choose two.)",
      "options": [
        "The S3 bucket default encryption is enabled",
        "There is an error in the S3 bucket policy",
        "The object has been moved to Amazon Glacier",
        "There is an error in the IAM role configuration",
        "S3 versioning is enabled"
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_112",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You are a DevOps engineer recently hired to help manage the AWS infrastructure of a large streaming media company. On your second day at work, your supervisor gives you read-only access to one of your company’s AWS accounts so you can familiarize yourself with the environment. While observing a Redis-based Elasticache cluster, you notice one of the metrics is reporting a value of zero. For which Elasticache metrics would a value of zero be a cause for concern? (Choose 2 answers)",
      "options": [
        "Current Connections (Count)",
        "Evictions (Count)",
        "Cache Hits (Count)",
        "Replication Lag (Seconds)"
      ],
      "correctAnswers": [
        0,
        2
      ],
      "explanation": "Correct Answer: AC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_113",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You are the DevOps engineer for a popular blog site running on AWS and consisting of a three-tiered LAMP stack running on EC2. Your supervisor has asked you to send your Apache logs to CloudWatch Logs for aggregation and search. You configure the awslogs-agent on your instance. However, when you sign in to the AWS console to view your logs, no log groups are displayed. What are the most likely causes for this behavior? (Choose 3 answers)",
      "options": [
        "You are looking in the wrong region.",
        "Apache is not producing any logs.",
        "Your instance does not have permission to write to CloudWatch Logs.",
        "You do not have permission to view CloudWatch Logs."
      ],
      "correctAnswers": [
        0,
        2,
        3
      ],
      "explanation": "Correct Answer: ACD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_114",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "An AWS CodePipeline pipeline has implemented a code release process. The pipeline is integrated with AWS CodeDeploy to deploy versions of an application to multiple Amazon EC2 instances for each CodePipeline stage. During a recent deployment, the pipeline failed due to a CodeDeploy issue. The DevOps team wants to improve monitoring and notifications during deployment to decrease resolution times. What should the DevOps Engineer do to create notifications when issues are discovered?",
      "options": [
        "Implement AWS CloudWatch Logs for CodePipeline and CodeDeploy, create an AWS Config rule to evaluate code deployment issues, and create an Amazon SNS topic to notify stakeholders of deployment issues.",
        "Implement AWS CloudWatch Events for CodePipeline and CodeDeploy, create an AWS Lambda function to evaluate code deployment issues, and create an Amazon SNS topic to notify stakeholders of deployment issues.",
        "Implement AWS CloudTrail to record CodePipeline and CodeDeploy API call information, create an AWS Lambda function to evaluate code deployment issues, and create an Amazon SNS topic to notify stakeholders of deployment issues.",
        "Implement AWS CloudWatch Events for CodePipeline and CodeDeploy, create an Amazon Inspector assessment target to evaluate code deployment issues, and create an Amazon SNS topic to notify stakeholders of deployment issues."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_115",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You are working on a plan to mitigate DDoS attacks. You want to ensure that your front-line EC2 instances can handle the larger volumes of incoming traffic that would be delivered during an attack. Which EC2 instances would best provide this functionality?",
      "options": [
        "EC2 instances with multiple ENIs",
        "EC2 instances with a higher ratio of CPU to memory",
        "EC2 instances with a very limited number of ports open",
        "EC2 instances that support “Enhanced Networking”"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_116",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You are a DevOps engineer responsible for maintaining the monitoring and observability platform for your company’s AWS infrastructure, which relies heavily on CloudWatch. Recently, the DBA team has noticed some performance degradation with a certain RDS instance, and they have asked to be notified every time CPU utilization climbs above 60%. You create a CloudWatch alarm and configure the notification; however, the next time the DBA team notices poor performance, they fail to receive the alert. What commands could you issue via the CLI tool to determine whether the alarm was triggered? (Choose 3 answers)",
      "options": [
        "describe-alarms",
        "describe-alarms-for-metric",
        "list-alarms",
        "describe-alarm-history"
      ],
      "correctAnswers": [
        0,
        1,
        3
      ],
      "explanation": "Correct Answer: ABD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_117",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "A development team is using AWS CodeCommit to version control application code and AWS CodePipeline to orchestrate software deployments. The team has decided to use a remote master branch as the trigger for the pipeline to integrate code changes. A developer has pushed code changes to the CodeCommit repository, but noticed that the pipeline had no reaction, even after 10 minutes. Which of the following actions should be taken to troubleshoot this issue?",
      "options": [
        "Check that an Amazon CloudWatch Events rule has been created for the master branch to trigger the pipeline.",
        "Check that the CodePipeline service role has permission to access the CodeCommit repository.",
        "Check that the developer's IAM role has permission to push to the CodeCommit repository.",
        "Check to see if the pipeline failed to start because of CodeCommit errors in Amazon CloudWatch Logs."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_118",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You are setting up a deployment pipeline using AWS CodeDeploy. You realize you’ll need to grant the CodeDeploy service permissions to read the tags associated with your EC2 instances and auto-scaling groups. How would you enable this?",
      "options": [
        "Create an IAM user for CodeDeploy and attach the AWSCodeDeployRole policy.",
        "Embed API credentials in your CodeDeploy AppSpec file.",
        "CodeDeploy has permissions to read metadata and tags by default, so no action is required.",
        "Create an IAM service role for CodeDeploy and attach the AWSCodeDeployRole policy."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_119",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "What approaches are recommended for organizing your CloudFormation templates into stacks? (Choose 2 answers)",
      "options": [
        "Organize by resource ownership (stack for network, database, compute and so on)",
        "Organize by region and availability zone",
        "Organize by resource lifecycle",
        "Organize by resource type (stack for EC2, stack for RDS)"
      ],
      "correctAnswers": [
        0,
        2
      ],
      "explanation": "Correct Answer: AC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_120",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "An application has microservices spread across different AWS accounts and is integrated with an on-premises legacy system for some of its functionality. Because of the segmented architecture and missing logs, every time the application experiences issues, it is taking too long to gather the logs to identify the issues. A DevOps Engineer must fix the log aggregation process and provide a way to centrally analyze the logs. Which is the MOST efficient and cost-effective solution?",
      "options": [
        "Collect system logs and application logs by using the Amazon CloudWatch Logs agent. Use the Amazon S3 API to export on-premises logs, and store the logs in an S3 bucket in a central account. Build an Amazon EMR cluster to reduce the logs and derive the root cause.",
        "Collect system logs and application logs by using the Amazon CloudWatch Logs agent. Use the Amazon S3 API to import on-premises logs. Store all logs in S3 buckets in individual accounts. Use Amazon Macie to write a query to search for the required specific event-related data point.",
        "Collect system logs and application logs using the Amazon CloudWatch Logs agent. Install the CloudWatch Logs agent on the on-premises servers. Transfer all logs from AWS to the on-premises data center. Use an Amazon Elasticsearch Logstash Kibana stack to analyze logs on premises.",
        "Collect system logs and application logs by using the Amazon CloudWatch Logs agent. Install a CloudWatch Logs agent for on-premises resources. Store all logs in an S3 bucket in a central account. Set up an Amazon S3 trigger and an AWS Lambda function to analyze incoming logs and automatically identify anomalies. Use Amazon Athena to run ad hoc queries on the logs in the central account."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_121",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You are the DevOps engineer responsible for a technology review site deployed on AWS via OpsWorks Stacks. In an attempt to give a colleague permission to view the stack configuration, you have configured a stack-level policy with SHOW permissions. However, for some reason, your colleague still cannot view the stack. What are some possible reasons for this issue? (Choose 2 answers)",
      "options": [
        "SHOW is not sufficient in this case; you need to update the policy with DEPLOY permissions.",
        "There is an IAM user policy in place with conflicting permissions.",
        "The permissions need to be configured via an IAM policy, not a stack-level policy.",
        "The resources were created in a different region, and the user is pointed to the wrong endpoint."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_122",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You are the DevOps engineer for a medical devices start-up, responsible for your company’s AWS infrastructure. The production infrastructure stack consists of multiple EC2 instances spread across two Availability Zones, an Elastic Load Balancer, a multi-AZ RDS deployment, Elasticache, S3, and DynamoDB; all are deployed via a CloudFormation template. One morning, while doing some clean-up work, you accidentally delete your production CloudFormation stack. What will happen to the resources that were deployed via this stack? (Choose 2 answers)",
      "options": [
        "By default, all of the resources associated with the deleted stack will be deleted.",
        "By default, all of the resources associated with the deleted stack will be retained.",
        "All of the resources associated with the deleted stack will be retained if the stack’s DeletionPolicy attribute is set to RETAIN.",
        "All of the resources associated with the deleted stack will be retained if the resource’s DeletionPolicy attribute is set to RETAIN."
      ],
      "correctAnswers": [
        0,
        3
      ],
      "explanation": "Correct Answer: AD. By default, all the resources associated with a deleted stack will also be deleted, unless the resource’s DeletionPolicy attribute is set to RETAIN.",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_123",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "A company recently launched an application that is more popular than expected. The company wants to ensure the application can scale to meet increasing demands and provide reliability using multiple Availability Zones (AZs). The application runs on a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). A DevOps engineer has created an Auto Scaling group across multiple AZs for the application. Instances launched in the newly added AZs are not receiving any traffic for the application. What is likely causing this issue?",
      "options": [
        "Auto Scaling groups can create new instances in a single AZ only.",
        "The EC2 instances have not been manually associated to the ALB.",
        "The ALB should be replaced with a Network Load Balancer (NLB).",
        "The new AZ has not been added to the ALB."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_124",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You are the DevOps engineer responsible for your company’s AWS infrastructure, which consists of multiple EC2 instances, one ELB, multiple SQS queues, and several S3 buckets. You have recently automated the deployment of both the production and individual development stacks using CloudFormation. One of the developers has contacted you for help, stating that after deleting a development stack she noticed that a security group created by CloudFormation did not get removed. What are some possible reasons for this behavior? (Choose 2 answers)",
      "options": [
        "Security groups are retained by default after a CloudFormation stack is deleted.",
        "The stack does not have the appropriate permissions to delete security groups.",
        "The security group is not empty; there were instances added to it outside of CloudFormation.",
        "The developer does not have permissions to delete security groups."
      ],
      "correctAnswers": [
        2,
        3
      ],
      "explanation": "Correct Answer: CD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_125",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You are the DevOps engineer responsible for managing your company’s website, which is running on AWS. The website consists of a two-tiered Node.JS application deployed on EC2 to a single region, spread across two AZs, and behind an Elastic Load Balancer. One afternoon, a colleague informs you that she received a 503 error when accessing the homepage. You try for yourself, and although you can’t reproduce the error, you still suspect something may be wrong. What ELB CloudWatch metrics could you check to determine whether the site is producing 500 errors? (Choose 3 answers)",
      "options": [
        "HTTPCode_Backend_5XX",
        "SpilloverCount",
        "SurgeQueueLength",
        "HTTPCode_ELB_5XX"
      ],
      "correctAnswers": [
        0,
        1,
        3
      ],
      "explanation": "Correct Answer: ABD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_126",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "A DevOps Engineer manages a web application that runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The instances run in an EC2 Auto Scaling group across multiple Availability Zones. The engineer needs to implement a deployment strategy that: ✑ Launches a second fleet of instances with the same capacity as the original fleet. ✑ Maintains the original fleet unchanged while the second fleet is launched. ✑ Transitions traffic to the second fleet when the second fleet is fully deployed. ✑ Terminates the original fleet automatically 1 hour after transition. Which solution will satisfy these requirements?",
      "options": [
        "Use an AWS CloudFormation template with a retention policy for the ALB set to 1 hour. Update the Amazon Route 53 record to reflect the new ALB.",
        "Use two AWS Elastic Beanstalk environments to perform a blue/green deployment from the original environment to the new one. Create an application version lifecycle policy to terminate the original environment in 1 hour.",
        "Use AWS CodeDeploy with a deployment group configured with a blue/green deployment configuration. Select the option Terminate the original instances in the deployment group with a waiting period of 1 hour.",
        "Use AWS Elastic Beanstalk with the configuration set to Immutable. Create an .ebextension using the Resources key that sets the deletion policy of the ALB to 1 hour, and deploy the application."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_127",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You are planning to migrate your company's source-code repositories into AWS CodeCommit. While you are discussing the plan with your supervisor, she mentions some concerns about the security of your company’s intellectual property within this new system. Since you’ve done your research, you are confident in your response. What do you tell her to alleviate her concerns? (Choose 2 answers)",
      "options": [
        "The CodeCommit repositories are logically separated by AWS account; there’s no need for additional security.",
        "CodeCommit integrates with KMS to secure data-at-rest by default.",
        "The CodeCommit repositories are physically separated by AWS account; there’s no need for additional security.",
        "CodeCommit uses SSL/TLS to secure data-in-flight."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_128",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "As you are attempting to deploy an update to a CloudFormation stack, the update encountered an error and started to roll back. Now the roll-back has failed as well, and the stack is in the UPDATE_ROLLBACK_FAILED state. What are some possible causes and fixes for this situation? (Choose 3 answers)",
      "options": [
        "You don’t have the proper permissions to delete a resource; check your IAM policies and continue the roll-back.",
        "A resource was deleted or modified outside of CloudFormation, thus making it impossible to roll back to that resource. Manually recreate those resources with the same names and properties as in the original stack and continue the roll-back.",
        "You don’t have the proper permissions to modify a resource; check your IAM policies and continue the roll-back.",
        "Invalid token; CloudFormation requires a new set of credentials. No change is required. Continue rolling back the update, which refreshes the credentials."
      ],
      "correctAnswers": [
        1,
        2,
        3
      ],
      "explanation": "Correct Answer: BCD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_129",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "A healthcare services company is concerned about the growing costs of software licensing for an application for monitoring patient wellness. The company wants to create an audit process to ensure that the application is running exclusively on Amazon EC2 Dedicated Hosts. A DevOps Engineer must create a workflow to audit the application to ensure compliance. What steps should the Engineer take to meet this requirement with the LEAST administrative overhead?",
      "options": [
        "Use AWS Systems Manager Configuration Compliance. Use calls to the put-compliance-items API action to scan and build a database of noncompliant EC2 instances based on their host placement configuration. Use an Amazon DynamoDB table to store these instance IDs for fast access. Generate a report through Systems Manager by calling the list- compliance-summaries API action.",
        "Use custom Java code running on an EC2 instance. Set up EC2 Auto Scaling for the instance depending on the number of instances to be checked. Send the list of noncompliant EC2 instance IDs to an Amazon SQS queue. Set up another worker instance to process instance IDs from the SQS queue and write them to Amazon DynamoDB. Use an AWS Lambda function to terminate noncompliant instance IDs obtained from the queue, and send them to an Amazon SNS email topic for distribution.",
        "Use AWS Config. Identify all EC2 instances to be audited by enabling Config Recording on all Amazon EC2 resources for the region. Create a custom AWS Config rule that triggers an AWS Lambda function by using the €גconfig-rule-change- triggered €גblueprint. Modify the Lambda evaluateCompliance() function to verify host placement to return a NON_COMPLIANT result if the instance is not running on an EC2 Dedicated Host. Use the AWS Config report to address noncompliant instances.",
        "Use AWS CloudTrail. Identify all EC2 instances to be audited by analyzing all calls to the EC2 RunCommand API action. Invoke an AWS Lambda function that analyzes the host placement of the instance. Store the EC2 instance ID of noncompliant resources in an Amazon RDS MySQL DB instance. Generate a report by querying the RDS instance and exporting the query results to a CSV text file."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_130",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You are the DevOps engineer for a regional bank, responsible for several financial and accounting applications running in the AWS cloud. You have recently learned of a new compliance regulation that requires your institution to log and retain all activity in your AWS account, including user logins, console actions, and API calls. What AWS service satisfies this requirement?",
      "options": [
        "Amazon CloudWatch",
        "CloudWatch Logs",
        "AWS Config Service",
        "AWS CloudTrail"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_131",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "The AWS Storage Gateway console reports a malfunctioning cache disk. This disk contains intact data and has been removed accidently. Which of the following approaches must you take to recover your disk?",
      "options": [
        "Lock the gateway and reconfigure the disk to another gateway.",
        "Disable the gateway and recover the disk from a recovery point to a new gateway.",
        "Shut down the gateway and add the disk back to the host.",
        "Reset the cache disk and take a point-in-time snapshot of the disk to the host."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_132",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "A DevOps Engineer has several legacy applications that all generate different log formats. The Engineer must standardize the formats before writing them to Amazon S3 for querying and analysis. How can this requirement be met at the LOWEST cost?",
      "options": [
        "Have the application send its logs to an Amazon EMR cluster and normalize the logs before sending them to Amazon S3",
        "Have the application send its logs to Amazon QuickSight, then use the Amazon QuickSight SPICE engine to normalize the logs. Do the analysis directly from Amazon QuickSight",
        "Keep the logs in Amazon S3 and use Amazon Redshift Spectrum to normalize the logs in place",
        "Use Amazon Kinesis Agent on each server to upload the logs and have Amazon Kinesis Data Firehose use an AWS Lambda function to normalize the logs before writing them to Amazon S3"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_133",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You have recently automated your AWS infrastructure with CloudFormation, and are deploying a stack update through the automated process for the first time. Unfortunately, your stack encountered an error and attempted to roll back. However, the rollback process was halted, and your stack is now in the UPDATE_ROLLBACK_FAILED state. Which of the following choices is a potential cause for this behavior? What are the possible causes for this failed state? (Choose 3 answers)",
      "options": [
        "The CloudFormation rollback process timed out.",
        "Resources in the stack have termination protection enabled.",
        "Dependent resources were deleted outside of CloudFormation.",
        "You need to request a limit increase for specific resources."
      ],
      "correctAnswers": [
        0,
        2,
        3
      ],
      "explanation": "Correct Answer: ACD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_134",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You are the DevOps manager for a large social media site deployed on AWS. You have recently hired and trained a new employee, and need to give her access to deploy your application via OpsWorks Stacks. What are some valid ways to grant access? (Choose 2 answers)",
      "options": [
        "Configure a stack-level policy with MANAGE permissions.",
        "Configure an IAM user with DEPLOY permissions.",
        "Configure stack-level DEPLOY permissions and import the user.",
        "Configure an IAM policy with MANAGE permissions."
      ],
      "correctAnswers": [
        1,
        2
      ],
      "explanation": "Correct Answer: BC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_135",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "A company is building a solution for storing files containing Personally Identifiable Information (PII) on AWS. Requirements state: ✑ All data must be encrypted at rest and in transit. ✑ All data must be replicated in at least two locations that are at least 500 miles (805 kilometers) apart. Which solution meets these requirements?",
      "options": [
        "Create primary and secondary Amazon S3 buckets in two separate Availability Zones that are at least 500 miles (805 kilometers) apart. Use a bucket policy to enforce access to the buckets only through HTTPS. Use a bucket policy to enforce Amazon S3 SSE-C on all objects uploaded to the bucket. Configure cross- region replication between the two buckets.",
        "Create primary and secondary Amazon S3 buckets in two separate AWS Regions that are at least 500 miles (805 kilometers) apart. Use a bucket policy to enforce access to the buckets only through HTTPS. Use a bucket policy to enforce S3-Managed Keys (SSE-S3) on all objects uploaded to the bucket. Configure cross-region replication between the two buckets.",
        "Create primary and secondary Amazon S3 buckets in two separate AWS Regions that are at least 500 miles (805 kilometers) apart. Use an IAM role to enforce access to the buckets only through HTTPS. Use a bucket policy to enforce Amazon S3-Managed Keys (SSE-S3) on all objects uploaded to the bucket. Configure cross-region replication between the two buckets.",
        "Create primary and secondary Amazon S3 buckets in two separate Availability Zones that are at least 500 miles (805 kilometers) apart. Use a bucket policy to enforce access to the buckets only through HTTPS. Use a bucket policy to enforce AWS KMS encryption on all objects uploaded to the bucket. Configure cross-region replication between the two buckets. Create a KMS Customer Master Key (CMK) in the primary region for encrypting objects."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_136",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You are the DevOps engineer for a large bank, responsible for automating security processes for some internal applications running on AWS. All of the apps are deployed on Linux-based EC2 instances and are running in OpsWorks Stacks. Your supervisor has asked you to disable automatic updates on some hosts. Which commands can be used to accomplish this task assuming you’re using the AWS CLI tool? (Choose 2 answers)",
      "options": [
        "aws opsworks update-layer --layer-id layer-id --no-install- updates-on-boot",
        "aws opsworks update-instance --instance-id instance-id --no- install-updates-on-boot",
        "aws opsworks modify-layer --layer-id layer-id --no-install- updates-on-boot",
        "aws opsworks modify-stack --stack-id stack-id --no-install- updates-on-boot"
      ],
      "correctAnswers": [
        0,
        1
      ],
      "explanation": "Correct Answer: AB",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_137",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "Your company is using AWS CodeCommit for source control. As an upcoming release draws near, the CEO decides to hire some temporary QA engineers to increase velocity. You must provide them with temporary, cross-account access to your repositories from their personal AWS accounts. What are the best ways to accomplish this, keeping best practices for security in mind? (Choose 2 answers)",
      "options": [
        "Create a role in IAM, attach the appropriate policies, authenticate the user against an OIDC-compatible web identity provider, and issue the assume-role-with-saml command to retrieve their temporary credentials.",
        "Create a role in IAM, attach the appropriate policies, authenticate the user against an OIDC-compatible web identity provider, and issue the assume-role-with-web-identity command to retrieve their temporary credentials.",
        "Create a role in IAM, attach the appropriate policies, authenticate the user against a federated identity provider, and issue the assume-role-federated-id command to retrieve their temporary credentials.",
        "Create a role in IAM, attach the appropriate policies, authenticate the user against a federated identity provider, and issue the get-federation-token command to retrieve their temporary credentials."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_138",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "A company hosts its staging website using an Amazon EC2 instance backed with Amazon EBS storage. The company wants to recover quickly with minimal data losses in the event of network connectivity issues or power failures on the EC2 instance. Which solution will meet these requirements?",
      "options": [
        "Add the instance to an EC2 Auto Scaling group with the minimum, maximum, and desired capacity set to 1.",
        "Add the instance to an EC2 Auto Scaling group with a lifecycle hook to detach the EBS volume when the EC2 instance shuts down or terminates.",
        "Create an Amazon CloudWatch alarm for the StatusCheckFailed_System metric and select the EC2 action to recover the instance.",
        "Create an Amazon CloudWatch alarm for the StatusCheckFailed_Instance metric and select the EC2 action to reboot the instance."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_139",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "During an Auto Scaling scale-out event, you notice that one of your EC2 instances has failed one of its system status checks. What command would you issue via the AWS CLI tool to determine which status check failed?",
      "options": [
        "aws ec2 describe-system-status",
        "aws ec2 list-system-status",
        "aws ec2 display-system-status",
        "aws ec2 describe-instance-status"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_140",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": ") You are a DevOps engineer at a web development firm, responsible for building and maintaining individual developer environments in the AWS cloud. Each environment consists of a single EC2 instance running any number of containers. What are some cost-conscious ways to provide high availability to the development environments? (Choose 2 answers)",
      "options": [
        "Place each environment in an Auto Scaling group with a minimum of 1 and maximum of 1.",
        "Use the EC2 auto-recovery feature.",
        "Launch a second copy of each environment and add an ELB.",
        "Use Route 53 failover routing."
      ],
      "correctAnswers": [
        0,
        1
      ],
      "explanation": "Correct Answer: AB",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_141",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "A company has multiple development teams sharing one AWS account. The development team's manager wants to be able to automatically stop Amazon EC2 instances and receive notifications if resources are idle and not tagged as production resources. Which solution will meet these requirements?",
      "options": [
        "Use a scheduled Amazon CloudWatch Events rule to filter for Amazon EC2 instance status checks and identify idle EC2 instances. Use the CloudWatch Events rule to target an AWS Lambda function to stop non-production instances and send notifications.",
        "Use a scheduled Amazon CloudWatch Events rule to filter AWS Systems Manager events and identify idle EC2 instances and resources. Use the CloudWatch Events rule to target an AWS Lambda function to stop non- production instances and send notifications.",
        "Use a scheduled Amazon CloudWatch Events rule to target a custom AWS Lambda function that runs AWS Trusted Advisor checks. Create a second CloudWatch Events rule to filter events from Trusted Advisor to trigger a Lambda function to stop idle non-production instances and send notifications.",
        "Use a scheduled Amazon CloudWatch Events rule to target Amazon Inspector events for idle EC2 instances. Use the CloudWatch Events rule to target the AWS Lambda function to stop non-production instances and send notifications."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_142",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You are the DevOps engineer for a large bank, responsible for automating security processes for some internal applications running on AWS. All of the apps are deployed on Linux-based EC2 instances and are running in OpsWorks Stacks. Your supervisor has asked you to suggest a way to automate the distribution of system security updates to the applications. What are two approaches recommended by AWS to accomplish this? (Choose 2 answers)",
      "options": [
        "Run the Deploy Security Updates stack command.",
        "Run the Update Dependencies stack command.",
        "Recreate your instances; the new instances will have the latest set of security patches installed during setup.",
        "Recreate your instances; the new instances will have the latest set of security patches already installed."
      ],
      "correctAnswers": [
        1,
        2
      ],
      "explanation": "Correct Answer: BC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_143",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You are a DevOps engineer recently hired to help manage the AWS infrastructure of a large streaming media company. On your second day at work, your supervisor gives you read-only access to one of your company’s AWS accounts so you can familiarize yourself with the environment. While observing one of the ELBs, you click on the Monitoring tab and notice the value for several of the metrics is 0.Which ELB CloudWatch metrics with a value of 0 would represent a potential problem? (Choose 2 answers)",
      "options": [
        "Healthy Hosts (Count)",
        "Sum Requests (Count)",
        "Surge Queue Length (Count)",
        "Backend Connection Errors (Count)"
      ],
      "correctAnswers": [
        0,
        1
      ],
      "explanation": "Correct Answer: AB",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_144",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "An n-tier application requires a table in an Amazon RDS MySQL DB instance to be dropped and repopulated at each deployment. This process can take several minutes and the web tier cannot come online until the process is complete. Currently, the web tier is configured in an Amazon EC2 Auto Scaling group, with instances being terminated and replaced at each deployment. The MySQL table is populated by running a SQL query through an AWS CodeBuild job. What should be done to ensure that the web tier does not come online before the database is completely configured?",
      "options": [
        "Use Amazon Aurora as a drop-in replacement for RDS MySQL. Use snapshots to populate the table with the correct data.",
        "Modify the launch configuration of the Auto Scaling group to pause user data execution for 600 seconds, allowing the table to be populated.",
        "Use AWS Step Functions to monitor and maintain the state of data population. Mark the database in service before continuing with the deployment.",
        "Use an EC2 Auto Scaling lifecycle hook to pause the configuration of the web tier until the table is populated."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_145",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You are the DevOps engineer for a major retail brand, which happens to host its online e-commerce site on AWS. You are planning to migrate your production environment into OpsWorks Stacks to automate application deployments. Since this is an e-commerce site, you need to be able to deploy changes quickly and reliably, with the ability to roll back on demand. Which OpsWorks Stacks deployment method would AWS recommend as most appropriate?",
      "options": [
        "Rolling deployment",
        "Blue/Green deployment",
        "Default deployment",
        "Production deployment"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_146",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You have developed a new CloudFormation stack and are running it for the first time. Halfway through the deployment, the stack encounters an error due to a typo within an AMI ID reference. What will happen next, by default?",
      "options": [
        "The stack will go into suspend mode and await human intervention.",
        "The stack will continue to create the remaining resources and produce an exception report containing the error.",
        "The stack will automatically roll back, deleting any resources already created.",
        "The stack will retry the operation that produced the error."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_147",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "A highly regulated company has a policy that DevOps Engineers should not log in to their Amazon EC2 instances except in emergencies. If a DevOps Engineer does log in, the Security team must be notified within 15 minutes of the occurrence. Which solution will meet these requirements?",
      "options": [
        "Install the Amazon Inspector agent on each EC2 instance. Subscribe to Amazon CloudWatch Events notifications. Trigger an AWS Lambda function to check if a message is about user logins. If it is, send a notification to the Security team using Amazon SNS.",
        "Install the Amazon CloudWatch agent on each EC2 instance. Configure the agent to push all logs to Amazon CloudWatch Logs and set up a CloudWatch metric filter that searches for user logins. If a login is found, send a notification to the Security team using Amazon SNS.",
        "Set up AWS CloudTrail with Amazon CloudWatch Logs. Subscribe CloudWatch Logs to Amazon Kinesis. Attach AWS Lambda to Kinesis to parse and determine if a log contains a user login. If it does, send a notification to the Security team using Amazon SNS.",
        "Set up a script on each Amazon EC2 instance to push all logs to Amazon S3. Set up an S3 event to trigger an AWS Lambda function, which triggers an Amazon Athena query to run. The Athena query checks for logins and sends the output to the Security team using Amazon SNS."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_148",
      "batch": "Batch 3",
      "type": "multiple",
      "prompt": "You are a DevOps engineer for a large insurance company running multiple workloads in AWS. Your supervisor has asked you to evaluate your infrastructure to see if you can implement the EC2 Auto Recovery feature to increase availability and fault tolerance. Which characteristics must an EC2 instance have to implement this feature? (Choose 3 answers)",
      "options": [
        "It must be an EBS-backed instance.",
        "It must use shared tenancy.",
        "It must run within a VPC.",
        "It must use dedicated tenancy."
      ],
      "correctAnswers": [
        0,
        1,
        2
      ],
      "explanation": "Correct Answer: ABC",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_149",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "You are the DevOps engineer for a major retail brand, which happens to host its online e-commerce site on AWS. You are planning to migrate your test and development environment(s) into OpsWorks Stacks to speed up the SDLC. Since this is a test and development environment, you need to be able to deploy changes quickly, with no need to roll back. Which OpsWorks Stacks deployment method would AWS recommend as most appropriate?",
      "options": [
        "Rolling deployment",
        "Blue/Green deployment",
        "Default deployment",
        "Production deployment"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_150",
      "batch": "Batch 3",
      "type": "single",
      "prompt": "A company uses AWS Organizations to manage multiple accounts. Information security policies require that all unencrypted Amazon EBS volumes be marked as non-compliant. A DevOps engineer needs to automatically deploy the solution and ensure that this compliance check is always present. With solution will accomplish this?",
      "options": [
        "Create an AWS CloudFormation template that defines an AWS Inspector rule to check whether EBS encryption is enabled. Save the template to an Amazon S3 bucket that has been shared with all accounts within the company. Update the account creation script pointing to the CloudFormation template in Amazon S3.",
        "Create an AWS Config organizational rule to check whether EBS encryption is enabled and deploy the rule using the AWS CLI. Create and apply an SCP to prohibit stopping and deleting AWS Config across the organization.",
        "Create an SCP in Organizations. Set the policy to prevent the launch of Amazon EC2 instances without encryption on the EBS volumes using a conditional expression. Apply the SCP to all AWS accounts. Use Amazon Athena to analyze the AWS CloudTrail output, looking for events that deny an ec2:RunInstances action.",
        "Deploy an IAM role to all accounts from a single trusted account. Build a pipeline with AWS CodePipeline with a stage in AWS Lambda to assume the IAM role, and list all EBS volumes in the account. Publish a report to Amazon S3."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_151",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "You work as a DevOps engineer supporting a large SaaS application deployed on AWS. The infrastructure consists of multiple development and test environments, as well as a multi-region production environment. Each environment contains an ELB, multiple EC2 instances, and an RDS deployment scaled to varying degrees. Your supervisor has asked you to automate infrastructure deployments using CloudFormation. How many templates would you produce to meet this goal?",
      "options": [
        "Three total: one template for each environment (dev, test, prod) because the topologies vary among environments",
        "Two total: one template per region because the AMI IDs and other items will vary between regions",
        "One total: a single template using the parameters and mappings feature to enable portability",
        "Six total: one template per environment, per region"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_152",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "You are a DevOps consultant helping a large enterprise corporation migrate a number of their internal applications to the AWS cloud. For security purposes, you’ve advised them to create a separate AWS account for each application. While they agree with the approach, they inform you that they have a large number of administrators who will need access and are concerned about the administrative cost of managing users across multiple accounts. What approaches could you advise them to take to minimize this effort going forward? (Choose 2 answers)",
      "options": [
        "Create individual IAM users in a centralized “identity” account, create roles with permissions in the other accounts, and use the Security Token Service AssumeRole feature to perform actions in those accounts.",
        "Create individual users in AWS Directory Service in a centralized “identity” account, create roles with permissions in the other accounts, and use the Security Token Service AssumeRoleWithSAML feature to perform actions in those accounts.",
        "Create individual users in AWS Directory Service in a centralized “identity” account, create roles with permissions in the other accounts, and use the Security Token Service AssumeRoleWithWebIdentity feature to perform actions in those accounts.",
        "Create individual IAM roles in a centralized “identity” account, create users with permissions in the other accounts, and use the Security Token Service AssumeRole feature to perform actions in those accounts."
      ],
      "correctAnswers": [
        0,
        1
      ],
      "explanation": "Correct Answer: AB",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_153",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "The Development team has grown substantially in recent months and so has the number of projects that use separate code repositories. The current process involves configuring AWS CodePipeline manually. There have been service limit alerts regarding the number of Amazon S3 buckets that exist. Which pipeline option will reduce S3 bucket sprawl alerts?",
      "options": [
        "Combine the multiple separate code repositories into a single one, and deploy using an AWS CodePipeline that has logic for each project.",
        "Create new pipelines by using the AWS API or AWS CLI, and configure them to use a single S3 bucket with separate prefixes for each project.",
        "Create a new pipeline in a different region for each project to bypass the service limits for S3 buckets in a single region.",
        "Create a new pipeline and S3 bucket for each project by using the AWS API or AWS CLI to bypass the service limits for S3 buckets in a single account."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_154",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "You are the DevOps engineer responsible for a highly-trafficked blog site. Your site is deployed as an ElasticBeanstalk application, and you are attempting to perform a Blue/Green deployment. What are the simplest steps to follow? (Choose 2 answers)",
      "options": [
        "Clone your current environment, deploy the new application version to the new cloned environment, test the new version on the new environment, and from the new environment’s dashboard select Swap Environment URLs from the Actions menu.",
        "Clone your current environment, deploy the new application version to the new environment, test the new version on the new environment, and repoint Route 53 to the new environment.",
        "Launch a new environment, deploy the new application version to the new environment, test the new version on the new environment, and from the new environment’s dashboard select Update Route 53 from the Actions menu.",
        "Launch a new environment, deploy the new application version to the new environment, test the new version on the new environment, and from the new environment’s dashboard select Swap Environment URLs from the Actions menu."
      ],
      "correctAnswers": [
        0,
        3
      ],
      "explanation": "Correct Answer: AD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_155",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "You are a DevOps consultant hired by a new start-up company to advise them on their first infrastructure build- out on AWS. The CTO advises you that their application will require heavy use of S3 for a variety of storage needs, and he wishes to make use of Lifecycle policies to manage the data. Which scenarios would AWS identify as good use cases for S3 Lifecycle policies? (Choose 3 answers)",
      "options": [
        "All application and system logs that need to be retained for 90 days",
        "Important transaction ledgers that will be stored in S3, and that require extra controls against being deleted or overwritten",
        "User-generated content that is only accessed frequently during the first month after it is uploaded",
        "Financial records that are regulated and required to be archived and retained for a specific period"
      ],
      "correctAnswers": [
        0,
        2,
        3
      ],
      "explanation": "Correct Answer: ACD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_156",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "An online company uses Amazon EC2 Auto Scaling extensively to provide an excellent customer experience while minimizing the number of running EC2 instances. The company's self-hosted Puppet environment in the application layer manages the configuration of the instances. The IT manager wants the lowest licensing costs and wants to ensure that whenever the EC2 Auto Scaling group scales down, removed EC2 instances are deregistered from the Puppet master as soon as possible. How can the requirement be met?",
      "options": [
        "At instance launch time, use EC2 user data to deploy the AWS CodeDeploy agent. Use CodeDeploy to install the Puppet agent. When the Auto Scaling group scales out, run a script to register the newly deployed instances to the Puppet master. When the Auto Scaling group scales in, use the EC2 Auto Scaling EC2_INSTANCE_TERMINATING lifecycle hook to trigger de-registration from the Puppet master.",
        "Bake the AWS CodeDeploy agent into the base AMI. When the Auto Scaling group scales out, use CodeDeploy to install the Puppet agent, and execute a script to register the newly deployed instances to the Puppet master. When the Auto Scaling group scales in, use the CodeDeploy ApplicationStop lifecycle hook to run a script to de-register the instance from the Puppet master.",
        "At instance launch time, use EC2 user data to deploy the AWS CodeDeploy agent. When the Auto Scaling group scales out, use CodeDeploy to install the Puppet agent, and run a script to register the newly deployed instances to the Puppet master. When the Auto Scaling group scales in, use the EC2 user data instance stop script to run a script to de-register the instance from the Puppet master.",
        "Bake the AWS Systems Manager agent into the base AMI. When the Auto Scaling group scales out, use the AWS Systems Manager to install the Puppet agent, and run a script to register the newly deployed instances to the Puppet master. When the Auto Scaling group scales in, use the Systems Manager instance stop lifecycle hook to run a script to de-register the instance from the Puppet master."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_157",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "You are a DevOps engineer responsible for supporting your company’s AWS infrastructure, consisting of multiple EC2 instances running in a VPC, DynamoDB, SQS, and S3. You are working on provisioning a new S3 bucket, which will ultimately contain sensitive data. How could you prevent legitimate users from accidentally overwriting or deleting the data? (Choose 2 answers)",
      "options": [
        "Enable server-side encryption.",
        "Enable S3 versioning.",
        "Enable MFA for deletes.",
        "Enable reduced-redundancy."
      ],
      "correctAnswers": [
        1,
        2
      ],
      "explanation": "Correct Answer: BC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_158",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "You have recently started a new job as a DevOps engineer supporting a high-traffic e-commerce site hosted on AWS. One of your first tasks is to deploy some infrastructure updates to prod using CloudFormation. Your supervisor has assured you that these updates have been thoroughly tested and vetted, and are ready to go. Since this is your first task, and any downtime will cost your organization money, you decide to take an extra step to verify exactly what will be updated. What’s the best way to achieve this with minimum cost?",
      "options": [
        "Deploy the changes to a non-production environment first, and take note of the differences.",
        "Use the DryRun parameter when deploying off the stack; this will produce a report identifying the changes.",
        "Use the create-change-set command; this will produce a report identifying the changes.",
        "Because your supervisor assured you that the changes have been vetted, there’s no need to verify."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_159",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A company uses a series of individual Amazon CloudFormation templates to deploy its multi-Region applications. These templates must be deployed in a specific order. The company is making more changes to the templates than previously expected and wants to deploy new templates more efficiently. Additionally, the data engineering team must be notified of all changes to the templates. What should the company do to accomplish these goals?",
      "options": [
        "Create an AWS Lambda function to deploy the CloudFormation templates in the required order. Use stack policies to alert the data engineering team.",
        "Host the CloudFormation templates in Amazon S3. Use Amazon S3 events to directly trigger CloudFormation updates and Amazon SNS notifications.",
        "Implement CloudFormation StackSets and use drift detection to trigger update alerts to the data engineering team.",
        "Leverage CloudFormation nested stacks and stack sets for deployments. Use Amazon SNS to notify the data engineering team."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_160",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "You have received a call from a client who attempted to set up a static website on S3 by himself. He thinks the website is configured properly but is unable to view any content. You see that the bucket has the same domain name as the website and also that index and error docs have been created. What could be missing?",
      "options": [
        "Specify a default redirect of all errors.",
        "Make all files world readable.",
        "Enable server-side scripting.",
        "Specify an alternate index document."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_161",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "You are the DevOps engineer for a medical device company that recently migrated its infrastructure to AWS. The environment consists of multiple EC2 instances in auto-scaling groups, internal and external ELBs, a multi-AZ RDS deployment, and several DynamoDB tables. One day, while an auto-scaling (scale out) event is happening, you notice that one of your EC2 instances has failed both of its system status checks. What are some possible reasons for this? (Choose 3 answers)",
      "options": [
        "Incorrect security groups",
        "Loss of network connectivity",
        "Loss of system power",
        "Issues with the physical host"
      ],
      "correctAnswers": [
        1,
        2,
        3
      ],
      "explanation": "Correct Answer: BCD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_162",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A company is running an application on Amazon EC2 instances in an Auto Scaling group. Recently, an issue occurred that prevented EC2 instances from launching successfully, and it took several hours for the Support team to discover the issue. The Support team wants to be notified by email whenever an EC2 instance does not start successfully. Which action will accomplish this?",
      "options": [
        "Add a health check to the Auto Scaling group to invoke an AWS Lambda function whenever an instance status is impaired.",
        "Configure the Auto Scaling group to send a notification to an Amazon SNS topic whenever a failed instance launch occurs.",
        "Create an Amazon CloudWatch alarm that invokes an AWS Lambda function when a failed AttachInstances Auto Scaling API call is made.",
        "Create a status check alarm on Amazon EC2 to send a notification to an Amazon SNS topic whenever a status check fail occurs."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_163",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "You are the DevOps engineer responsible for supporting your company’s AWS infrastructure, which consists of EC2 instances in an Auto Scaling group, an ELB, and a MySQL RDS instance. You have recently modified your RDS instance to a multi-AZ deployment for high availability. What kind of replication does RDS use in this case?",
      "options": [
        "Asynchronous physical replication",
        "Synchronous logical replication",
        "Asynchronous logical replication",
        "Synchronous physical replication"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_164",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "You are the DevOps engineer for a popular blog site running on AWS and consisting of a three-tiered LAMP stack running on EC2. You have recently configured your Apache logs to be shipped to CloudWatch Logs for aggregation and search. A data scientist within your company has approached you, asking for access to the raw log data for processing within their business intelligence system. How does AWS recommend that you provide them with this data?",
      "options": [
        "Create an IAM user for the data scientist, and attach a policy with the appropriate permissions to the user, allowing them to access CloudWatch Logs from the console.",
        "Create an IAM user for the data scientist, export the logs to an S3 bucket, and grant S3 access to the user via an IAM policy.",
        "Create a cross-account role for the data scientist, and attach a policy with the appropriate permissions to the user, allowing them to access CloudWatch Logs from the console.",
        "Create a cross-account role for the data scientist, export the logs to an S3 bucket, and grant S3 access to the user via an IAM policy."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_165",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A company uses AWS Storage Gateway in file gateway mode in front of an Amazon S3 bucket that is used by multiple resources. In the morning when business begins, users do not see the objects processed by a third party the previous evening. When a DevOps engineer looks directly at the S3 bucket, the data is there, but it is missing in Storage Gateway. Which solution ensures that all the updated third-party files are available in the morning?",
      "options": [
        "Configure a nightly Amazon EventBridge (Amazon CloudWatch Events) event to trigger an AWS Lambda function to run the RefreshCache command for Storage Gateway.",
        "Instruct the third party to put data into the S3 bucket using AWS Transfer for SFTP.",
        "Modify Storage Gateway to run in volume gateway mode.",
        "Use S3 same-Region replication to replicate any changes made directly in the S3 bucket to Storage Gateway."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_166",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "You have been consulted on strategy for deploying and removing web applications hosted in a test VPC. The application team is using Elastic Beanstalk to host this application. Recently, they've been unable to create new versions of this application citing an error related to versions limit. What is the most efficient method to address this problem now and in the future?",
      "options": [
        "Application version limits will increase automatically when the limit is reached.",
        "From the management console, delete all versions no longer required.",
        "Apply an application version lifecycle policy to your applications.",
        "Elastic Beanstalk deletes all versions automatically."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_167",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "You are the DevOps engineer for a popular e-commerce site running on AWS and consisting of multiple EC2 instances in an Auto-scaling group running behind a load-balancer. Your CTO has just forwarded you an email describing a new security vulnerability affecting the version of web server software your company is using. You quickly identify the fix and write a small PowerShell script containing the mitigation steps. Which separate methods would AWS recommend to quickly deploy this fix to your running instances while minimizing the impact? (Choose 2 answers)",
      "options": [
        "Terminate all EC2 instances and re-launch them with the script embedded as user data.",
        "Use the EC2 Run Command to execute the script in parallel across all target instances.",
        "Bake the fix into a new AMI and launch configuration, update the Auto-scaling group, and perform a blue/green deployment.",
        "Write another script that logs into each instance in serial order and executes the fix."
      ],
      "correctAnswers": [
        1,
        2
      ],
      "explanation": "Correct Answer: BC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_168",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A DevOps engineer sets up two Amazon S3 event notifications for an S3 bucket from the S3 console. Both event notifications will be invoked when an object PUT action occurs. One event notification will invoke an AWS Lambda function if the file suffix is .csv. Another event notification will invoke an Amazon Simple Notification Service (Amazon SNS) topic if the file suffix is .xlsx The DevOps engineer notices that files with the .csv suffix can invoke the Lambda function successfully. However, files with the .xlsx suffix cannot invoke the SNS topic. Which reason explains why the SNS topic is not invoked when .xlsx files are added to the S3 bucket?",
      "options": [
        "Only one event notification is allowed from the S3 console.",
        "Amazon S3 needs proper permissions to publish an event notification to Amazon SNS.",
        "Lambda has precedence over Amazon SNS in handling the event notification.",
        "Amazon SNS is not a valid destination for some S3 event notifications, including object PUT."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_169",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": ") You are a DevOps consultant hired by a start-up company to help automate deployments of their application, which is running on AWS. The application consists of a couple of EC2 instances in an auto-scaling group, and the code base is stored in GitHub. You decide to utilize AWS CodeDeploy for this job and start by creating a deployment group and specifying its deployment configuration. Which of the following options are valid deployment configurations? (Choose 3 answers)",
      "options": [
        "AllAtOnce",
        "All",
        "OneAtATime",
        "HalfAtATime"
      ],
      "correctAnswers": [
        0,
        2,
        3
      ],
      "explanation": "Correct Answer: ACD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_170",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "Your company is using AWS CodeCommit for source control. One of your colleagues has been tasked with reviewing, cleaning up, and potentially purging old Git repositories that are no longer in use. Your supervisor asks you to grant your colleague permissions to complete his task. What are two ways accomplish this, while adhering to the principle of least privilege? (Choose 2 answers)",
      "options": [
        "Add his IAM user to a group with the AWSCodeCommitFullAccess managed policy attached.",
        "Add his IAM user to a group with the AWSCodeCommitReadOnly managed policy attached.",
        "Attach his IAM user policy to the Administrator’s group.",
        "Attach a custom policy to his IAM user granting the appropriate actions to CodeCommit."
      ],
      "correctAnswers": [
        0,
        3
      ],
      "explanation": "Correct Answer: AD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_171",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A company is using AWS to deploy an application. The development team must automate the deployments. The team has created an AWS CodePipeline pipeline to deploy the application to Amazon EC2 instances using AWS CodeDeploy after it has been built using AWS CodeBuild. The team wants to add automated testing to the pipeline to confirm that the application is healthy before deploying the code to the EC2 instances. The team also requires a manual approval action before the application is deployed, even if the tests are successful. The testing and approval must be accomplished at the lowest costs, using the simplest management solution. Which solution will meet these requirements?",
      "options": [
        "Create a manual approval action after the build action of the pipeline. Use Amazon SNS to inform the team of the stage being triggered. Next, add a test action using CodeBuild to perform the required tests. At the end of the pipeline, add a deploy action to deploy the application to the next stage.",
        "Create a test action after the CodeBuild build of the pipeline. Configure the action to use CodeBuild to perform the required tests. If these tests are successful, mark the action as successful. Add a manual approval action that uses Amazon SNS to notify the team, and add a deploy action to deploy the application to the next stage.",
        "Create a new pipeline that uses a source action that gets the code from the same repository as the first pipeline. Add a deploy action to deploy the code to a test environment. Use a test action using AWS Lambda to test the deployment. Add a manual approval action by using Amazon SNS to notify the team, and add a deploy action to deploy the application to the next stage.",
        "Create a test action after the build action. Use a Jenkins server on Amazon EC2 to perform the required tests and mark the action as successful if the tests pass. Create a manual approval action that uses Amazon SQS to notify the team and add a deploy action to deploy the application to the next stage."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_172",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "Your company is using Amazon Kinesis and would like some custom functionality when certain events occur. As a result, they are thinking of integrating AWS Lambda with Amazon Kinesis and would like you to give a presentation on how integration works. What might be good topics to discuss? (Choose 2 answers)",
      "options": [
        "That AWS Lambda would need to be asynchronously invoked.",
        "That AWS Lambda would need to be synchronously invoked.",
        "That the integration will be a stream-based model where AWS Lambda polls the Amazon Kinesis stream.",
        "That the integration will be an event-based model where AWS Kinesis and Lambda poll each other alternatively."
      ],
      "correctAnswers": [
        1,
        2
      ],
      "explanation": "Correct Answer: BC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_173",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "You’re the DevOps engineer for a large e-commerce property deployed on AWS. You currently deploy changes via a Blue/Green deployment methodology utilizing Route 53 and multiple ELBs. Your supervisor wants you to modify the process to include a canary deployment, which requires that a fraction of production traffic be sent to the Green environment for analysis before fully cutting over. Which Route 53 routing policy would you use to enable this scenario?",
      "options": [
        "Failover Routing Policy",
        "Geolocation Routing Policy",
        "Latency Routing Policy",
        "Weighted Routing Policy"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_174",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "An ecommerce company uses a large number of Amazon EBS backed Amazon EC2 instances. To decrease manual work across all the instances, a DevOps Engineer is tasked with automating restart actions when EC2 instance retirement events are scheduled. How can this be accomplished?",
      "options": [
        "Create a scheduled Amazon CloudWatch Events rule to execute an AWS Systems Manager automation document that checks if any EC2 instances are scheduled for retirement once a week. If the instance is scheduled for retirement, the automation document will hibernate the instance.",
        "Enable EC2 Auto Recovery on all of the instances. Create an AWS Config rule to limit the recovery to occur during a maintenance window only.",
        "Reboot all EC2 instances during an approved maintenance window that is outside of standard business hours. Set up Amazon CloudWatch alarms to send a notification in case any instance is failing EC2 instance status checks.",
        "Set up an AWS Health Amazon CloudWatch Events rule to execute AWS Systems Manager automation documents that stop and start the EC2 instance when a retirement scheduled event occurs."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_175",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "You are a DevOps consultant helping to migrate a mobile survey application to the AWS cloud. The environment consists of an ELB, EC2 instances, SQS queues, several DynamoDB tables, and some Lambda functions. The client requires that when instances are removed from the Auto Scaling group and terminated, the newer instances are removed last. Which termination policies should you enable to meet this requirement? (Choose 2 answers)",
      "options": [
        "OldestInstance",
        "Default",
        "ClosestToNextHour",
        "OldestLaunchConfiguration"
      ],
      "correctAnswers": [
        0,
        3
      ],
      "explanation": "Correct Answer: AD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_176",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "You are a DevOps consultant hired by a start-up company to help automate deployments using CodeDeploy of their application, which is running on AWS. The application consists of three EC2 instances in an auto-scaling group, and the code base is stored in GitHub. You set up your deployment groups and deployment configuration, and attempt to run a test; however, the deployment fails. You review the deployment details but cannot readily determine a cause for the failure. What are some additional items that you should check? (Choose 3 answers)",
      "options": [
        "Check to see if the instance was tagged properly.",
        "Check to see if the instance has the right service role.",
        "Check the format of your AppSpec file.",
        "Check the format for your DeploymentSpec file."
      ],
      "correctAnswers": [
        0,
        1,
        2
      ],
      "explanation": "Correct Answer: ABC",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_177",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "A company has multiple child accounts that are part of an organization in AWS Organizations. The security team needs to review every Amazon EC2 security group and their inbound and outbound rules. The security team wants to programmatically retrieve this information from the child accounts using an AWS Lambda function in the management account of the organization. Which combination of access changes will meet these requirements? (Choose three.)",
      "options": [
        "Create a trust relationship that allows users in the child accounts to assume the management account IAM role.",
        "Create a trust relationship that allows users in the management account to assume the IAM roles of the child accounts.",
        "Create an IAM role in each child account that has access to the AmazonEC2ReadOnlyAccess managed policy.",
        "Create an IAM role in each child account to allow the sts:AssumeRole action against the management account IAM role's ARN.",
        "Create an IAM role in the management account that allows the sts:AssumeRole action against the child account IAM role's ARN.",
        "Create an IAM role in the management account that has access to the AmazonEC2ReadOnlyAccess managed policy."
      ],
      "correctAnswers": [
        1,
        2,
        4
      ],
      "explanation": "Correct Answer: BCE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_178",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "Your highly-trafficked e-commerce site hosted on AWS consists of 8 medium-sized instances, spread across two availability zones, running behind a load balancer. The development team recently released a new update to the site, which is causing performance problems. The team determined there was a memory leak in the new code. After fixing the leak, they ask you to configure monitoring on the EC2 instances to detect and notify them in the event of excessive memory usage. What are two ways to achieve this? (Choose 2 answers)",
      "options": [
        "Memory usage is collected by CloudWatch by default. Configure a CloudWatch alarm at the appropriate threshold, and configure it to notify an SNS topic when breached.",
        "Set up a 3rd-party monitoring system, install agents on the EC2 instances, and configure the appropriate thresholds and alerts.",
        "Memory usage is collected by CloudWatch by default. Configure a CloudWatch alarm at the appropriate threshold, and configure it to notify an SES topic when breached.",
        "Write a script that checks memory utilization and pushes the results to the CloudWatch API, install the script on the instances and configure it to run via cron or task scheduler, configure a CloudWatch alarm at the appropriate threshold, and configure it to notify an SNS topic when breached."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_179",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "An application is deployed on Amazon EC2 instances running in an Auto Scaling group. During the bootstrapping process, the instances register their private IP addresses with a monitoring system. The monitoring system performs health checks frequently by sending ping requests to those IP addresses and sending alerts if an instance becomes non- responsive. The existing deployment strategy replaces the current EC2 instances with new ones. A DevOps Engineer has noticed that the monitoring system is sending false alarms during a deployment, and is tasked with stopping these false alarms. Which solution will meet these requirements without affecting the current deployment method?",
      "options": [
        "Define an Amazon CloudWatch Events target, an AWS Lambda function, and a lifecycle hook attached to the Auto Scaling group. Configure CloudWatch Events to invoke Amazon SNS to send a message to the Systems Administrator group for remediation.",
        "Define an AWS Lambda function and a lifecycle hook attached to the Auto Scaling group. Configure the lifecycle hook to invoke the Lambda function, which removes the entry of the private IP from the monitoring system upon instance termination.",
        "Define an Amazon CloudWatch Events target, an AWS Lambda function, and a lifecycle hook attached to the Auto Scaling group. Configure CloudWatch Events to invoke the Lambda function, which removes the entry of the private IP from the monitoring system upon instance termination.",
        "Define an AWS Lambda function that will run a script when instance termination occurs in an Auto Scaling group. The script will remove the entry of the private IP from the monitoring system."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_180",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A company that uses electronic health records is running a fleet of Amazon EC2 instances with an Amazon Linux operating system. As part of patient privacy requirements, the company must ensure continuous compliance for patches for operating system and applications running on the EC2 instances. How can the deployments of the operating system and application patches be automated using a default and custom repository?",
      "options": [
        "Use AWS Systems Manager to create a new patch baseline including the custom repository. Run the AWS- RunPatchBaseline document using the run command to verify and install patches.",
        "Use AWS Direct Connect to integrate the corporate repository and deploy the patches using Amazon CloudWatch scheduled events, then use the CloudWatch dashboard to create reports.",
        "Use yum-config-manager to add the custom repository under /etc/yum.repos.d and run yum-config-manager-enable to activate the repository.",
        "Use AWS Systems Manager to create a new patch baseline including the corporate repository. Run the AWS- AmazonLinuxDefaultPatchBaseline document using the run command to verify and install patches."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_181",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A company is deploying a new application that uses Amazon EC2 instances. The company needs a solution to query application logs and AWS account API activity. Which solution will meet these requirements?",
      "options": [
        "Use the Amazon CloudWatch agent to send logs from the EC2 instances to Amazon CloudWatch Logs. Configure AWS CloudTrail to deliver the API logs to Amazon S3. Use CloudWatch to query both sets of logs.",
        "Use the Amazon CloudWatch agent to send logs from the EC2 instances to Amazon CloudWatch Logs. Configure AWS CloudTrail to deliver the API logs to CloudWatch Logs. Use CloudWatch Logs Insights to query both sets of logs.",
        "Use the Amazon CloudWatch agent to send logs from the EC2 instances to Amazon Kinesis. Configure AWS CloudTrail to deliver the API logs to Kinesis. Use Kinesis to load the data into Amazon Redshift. Use Amazon Redshift to query both sets of logs.",
        "Use the Amazon CloudWatch agent to send logs from the EC2 instances to Amazon S3. Use AWS CloudTrail to deliver the API logs to Amazon S3. Use Amazon Athena to query both sets of logs in Amazon S3."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_182",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A company wants to ensure that their EC2 instances are secure. They want to be notified if any new vulnerabilities are discovered on their instances, and they also want an audit trail of all login activities on the instances. Which solution will meet these requirements?",
      "options": [
        "Use AWS Systems Manager to detect vulnerabilities on the EC2 instances. Install the Amazon Kinesis Agent to capture system logs and deliver them to Amazon S3.",
        "Use AWS Systems Manager to detect vulnerabilities on the EC2 instances. Install the Systems Manager Agent to capture system logs and view login activity in the CloudTrail console.",
        "Configure Amazon CloudWatch to detect vulnerabilities on the EC2 instances. Install the AWS Config daemon to capture system logs and view them in the AWS Config console.",
        "Configure Amazon Inspector to detect vulnerabilities on the EC2 instances. Install the Amazon CloudWatch Agent to capture system logs and record them via Amazon CloudWatch Logs."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_183",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A company is using AWS Organizations to centrally manage its AWS accounts. The company has turned on AWS Config in each member account by using AWS CloudFormation StackSets. The company has configured trusted access in Organizations for AWS Config and has configured a member account as a delegated administrator account for AWS Config. A DevOps engineer needs to implement a new security policy. The policy must require all current and future AWS member accounts to use a common baseline of AWS Config rules that contain remediation actions that are managed from a central account. Non-administrator users who can access member accounts must not be able to modify this common baseline of AWS Config rules that are deployed into each member account. Which solution will meet these requirements?",
      "options": [
        "Create a CloudFormation template that contains the AWS Config rules and remediation actions. Deploy the template from the Organizations management account by using CloudFormation StackSets.",
        "Create an AWS Config conformance pack that contains the AWS Config rules and remediation actions. Deploy the pack from the Organizations management account by using CloudFormation StackSets.",
        "Create a CloudFormation template that contains the AWS Config rules and remediation actions. Deploy the template from the delegated administrator account by using AWS Config.",
        "Create an AWS Config conformance pack that contains the AWS Config rules and remediation actions. Deploy the pack from the delegated administrator account by using AWS Config."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_184",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A DevOps engineer manages a large commercial website that runs on Amazon EC2. The website uses Amazon Kinesis Data Streams to collect and process web logs. The DevOps engineer manages the Kinesis consumer application, which also runs on Amazon EC2. Sudden increases of data cause the Kinesis consumer application to fall behind, and the Kinesis data streams drop records before the records can be processed. The DevOps engineer must implement a solution to improve stream handling. Which solution meets these requirements with the MOST operational efficiency?",
      "options": [
        "Modify the Kinesis consumer application to store the logs durably in Amazon S3. Use Amazon EMR to process the data directly on Amazon S3 to derive customer insights. Store the results in Amazon S3.",
        "Horizontally scale the Kinesis consumer application by adding more EC2 instances based on the Amazon CloudWatch GetRecords.IteratorAgeMilliseconds metric. Increase the retention period of the Kinesis data streams.",
        "Convert the Kinesis consumer application to run as an AWS Lambda function. Configure the Kinesis data streams as the event source for the Lambda function to process the data streams.",
        "Increase the number of shards in the Kinesis data streams to increase the overall throughput so that the consumer application processes the data faster."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_185",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A company has developed an AWS Lambda function that handles orders received through an API. The company is using AWS CodeDeploy to deploy the Lambda function as the final stage of a CI/CD pipeline. A DevOps engineer has noticed there are intermittent failures of the ordering API for a few seconds after deployment. After some investigation, the DevOps engineer believes the failures are due to database changes not having fully propagated before the Lambda function is invoked. How should the DevOps engineer overcome this?",
      "options": [
        "Add a BeforeAllowTraffic hook to the AppSpec file that tests and waits for any necessary database changes before traffic can flow to the new version of the Lambda function.",
        "Add an AfterAllowTraffic hook to the AppSpec file that forces traffic to wait for any pending database changes before allowing the new version of the Lambda function to respond.",
        "Add a BeforeInstall hook to the AppSpec file that tests and waits for any necessary database changes before deploying the new version of the Lambda function.",
        "Add a ValidateService hook to the AppSpec file that inspects incoming traffic and rejects the payload if dependent services, such as the database, are not yet ready."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_186",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A company uses a single AWS account to test applications on Amazon EC2 instances. The company has turned on AWS Config in the AWS account and has activated the restricted-ssh AWS Config managed rule. The company needs an automated monitoring solution that will provide a customized notification in real time if any security group in the account is not compliant with the restricted-ssh rule. The customized notification must contain the name and ID of the noncompliant security group. A DevOps engineer creates an Amazon Simple Notification Service (Amazon SNS) topic in the account and subscribes the appropriate personnel to the topic. What should the DevOps engineer do next to meet these requirements?",
      "options": [
        "Create an Amazon EventBridge rule that matches an AWS Config evaluation result of NON_COMPLIANT for the restricted-ssh rule. Configure an input transformer for the EventBridge rule. Configure the EventBridge rule to publish a notification to the SNS topic.",
        "Configure AWS Config to send all evaluation results for the restricted-ssh rule to the SNS topic. Configure a filter policy on the SNS topic to send only notifications that contain the text of NON_COMPLIANT in the notification to subscribers.",
        "Create an Amazon EventBridge rule that matches an AWS Config evaluation result of NON_COMPLIANT for the restricted-ssh rule. Configure the EventBridge rule to invoke AWS Systems Manager Run Command on the SNS topic to customize a notification and to publish the notification to the SNS topic.",
        "Create an Amazon EventBridge rule that matches all AWS Config evaluation results of NON_COMPLIANT. Configure an input transformer for the restricted-ssh rule. Configure the EventBridge rule to publish a notification to the SNS topic."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_187",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "A company requires an RPO of 2 hours and an RTO of 10 minutes for its data and application at all times. An application uses a MySQL database and Amazon EC2 web servers. The development team needs a strategy for failover and disaster recovery. Which combination of deployment strategies will meet these requirements? (Choose two.)",
      "options": [
        "Create an Amazon Aurora cluster in one Availability Zone across multiple Regions as the data store. Use Aurora’s automatic recovery capabilities in the event of a disaster.",
        "Create an Amazon Aurora global database in two Regions as the data store. In the event of a failure, promote the secondary Region as the primary for the application.",
        "Create an Amazon Aurora multi-master cluster across multiple Regions as the data store. Use a Network Load Balancer to balance the database traffic in different Regions.",
        "Set up the application in two Regions and use Amazon Route 53 failover-based routing that points to the Application Load Balancers in both Regions. Use health checks to determine the availability in a given Region. Use Auto Scaling groups in each Region to adjust capacity based on demand.",
        "Set up the application in two Regions and use a multi-Region Auto Scaling group behind Application Load Balancers to manage the capacity based on demand. In the event of a disaster, adjust the Auto Scaling group’s desired instance count to increase baseline capacity in the failover Region."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_188",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A company uses AWS CloudFormation stacks to deploy updates to its application. The stacks consist of different resources. The resources include AWS Auto Scaling groups, Amazon EC2 instances, Application Load Balancers (ALBs), and other resources that are necessary to launch and maintain independent stacks. Changes to application resources outside of CloudFormation stack updates are not allowed. The company recently attempted to update the application stack by using the AWS CLI. The stack failed to update and produced the following error message: “ERROR: both the deployment and the CloudFormation stack rollback failed. The deployment failed because the following resource(s) failed to update: [AutoScalingGroup].” The stack remains in a status of UPDATE_ROLLBACK_FAILED. Which solution will resolve this issue?",
      "options": [
        "Update the subnet mappings that are configured for the ALBs. Run the aws cloudformation update- stack-set AWS CLI command.",
        "Update the IAM role by providing the necessary permissions to update the stack. Run the aws cloudformation continue-update-rollback AWS CLI command.",
        "Submit a request for a quota increase for the number of EC2 instances for the account. Run the aws cloudformation cancel-update-stack AWS CLI command.",
        "Delete the Auto Scaling group resource. Run the aws cloudformation rollback-stack AWS CLI command."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_189",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A company has 20 service teams. Each service team is responsible for its own microservice. Each service team uses a separate AWS account for its microservice and a VPC with the 192.168.0.0/22 CIDR block. The company manages the AWS accounts with AWS Organizations. Each service team hosts its microservice on multiple Amazon EC2 instances behind an Application Load Balancer. The microservices communicate with each other across the public internet. The company’s security team has issued a new guideline that all communication between microservices must use HTTPS over private network connections and cannot traverse the public internet.A DevOps engineer must implement a solution that fulfills these obligations and minimizes the number of changes for each service team. Which solution will meet these requirements?",
      "options": [
        "Create a new AWS account in AWS Organizations. Create a VPC in this account, and use AWS Resource Access Manager to share the private subnets of this VPC with the organization. Instruct the service teams to launch a new Network Load Balancer (NLB) and EC2 instances that use the shared private subnets. Use the NLB DNS names for communication between microservices.",
        "Create a Network Load Balancer (NLB) in each of the microservice VPCs. Use AWS PrivateLink to create VPC endpoints in each AWS account for the NLBs. Create subscriptions to each VPC endpoint in each of the other AWS accounts. Use the VPC endpoint DNS names for communication between microservices.",
        "Create a Network Load Balancer (NLB) in each of the microservice VPCs. Create VPC peering connections between each of the microservice VPCs. Update the route tables for each VPC to use the peering links. Use the NLB DNS names for communication between microservices.",
        "Create a new AWS account in AWS Organizations. Create a transit gateway in this account, and use AWS Resource Access Manager to share the transit gateway with the organization. In each of the microservice VPCs, create a transit gateway attachment to the shared transit gateway. Update the route tables of each VPC to use the transit gateway. Create a Network Load Balancer (NLB) in each of the microservice VPCs. Use the NLB DNS names for communication between microservices."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_190",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "An Amazon EC2 instance is running in a VPC and needs to download an object from a restricted Amazon S3 bucket. When the DevOps engineer tries to download the object, an AccessDenied error is received. What are the possible causes for this error? (Choose two.)",
      "options": [
        "The S3 bucket default encryption is enabled.",
        "There is an error in the S3 bucket policy.",
        "The object has been moved to S3 Glacier.",
        "There is an error in the IAM role configuration.",
        "S3 Versioning is enabled."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_191",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A company wants to use a grid system for a proprietary enterprise in-memory data store on top of AWS. This system can run in multiple server nodes in any Linux-based distribution. The system must be able to reconfigure the entire cluster every time a node is added or removed. When adding or removing nodes, an /etc/cluster/nodes.config file must be updated, listing the IP addresses of the current node members of that cluster. The company wants to automate the task of adding new nodes to a cluster. What can a DevOps engineer do to meet these requirements?",
      "options": [
        "Use AWS OpsWorks Stacks to layer the server nodes of that cluster. Create a Chef recipe that populates the content of the /etc/cluster/nodes.config file and restarts the service by using the current members of the layer. Assign that recipe to the Configure lifecycle event.",
        "Put the file nodes.config in version control. Create an AWS CodeDeploy deployment configuration and deployment group based on an Amazon EC2 tag value for the cluster nodes. When adding a new node to the cluster, update the file with all tagged instances, and make a commit in version control. Deploy the new file and restart the services.",
        "Create an Amazon S3 bucket and upload a version of the /etc/cluster/nodes.config file. Create a crontab script that will poll for that S3 file and download it frequently. Use a process manager, such as Monit or systemd, to restart the cluster services when it detects that the new file was modified. When adding a node to the cluster, edit the file’s most recent members. Upload the new file to the S3 bucket.",
        "Create a user data script that lists all members of the current security group of the cluster and automatically updates the /etc/cluster/nodes.config file whenever a new instance is added to the cluster."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_192",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "A DevOps engineer is working on a data archival project that requires the migration of on-premises data to an Amazon S3 bucket. The DevOps engineer develops a script that incrementally archives on-premises data that is older than 1 month to Amazon S3. Data that is transferred to Amazon S3 is deleted from the on-premises location. The script uses the S3 PutObject operation. During a code review, the DevOps engineer notices that the script does not verify whether the data was successfully copied to Amazon S3. The DevOps engineer must update the script to ensure that data is not corrupted during transmission. The script must use MD5 checksums to verify data integrity before the on-premises data is deleted. Which solutions for the script will meet these requirements? (Choose two.)",
      "options": [
        "Check the returned response for the VersionId. Compare the returned VersionId against the MD5 checksum.",
        "Include the MD5 checksum within the Content-MD5 parameter. Check the operation call’s return status to find out if an error was returned.",
        "Include the checksum digest within the tagging parameter as a URL query parameter.",
        "Check the returned response for the ETag. Compare the returned ETag against the MD5 checksum.",
        "Include the checksum digest within the Metadata parameter as a name-value pair. After upload, use the S3 HeadObject operation to retrieve metadata from the object."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_193",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A company deploys updates to its Amazon API Gateway API several times a week by using an AWS CodePipeline pipeline. As part of the update process, the company exports the JavaScript SDK for the API from the API Gateway console and uploads the SDK to an Amazon S3 bucket. The company has configured an Amazon CloudFront distribution that uses the S3 bucket as an origin. Web clients then download the SDK by using the CloudFront distribution’s endpoint. A DevOps engineer needs to implement a solution to make the new SDK available automatically during new API deployments. Which solution will meet these requirements?",
      "options": [
        "Create a CodePipeline action immediately after the deployment stage of the API. Configure the action to invoke an AWS Lambda function. Configure the Lambda function to download the SDK from API Gateway, upload the SDK to the S3 bucket, and create a CloudFront invalidation for the SDK path.",
        "Create a CodePipeline action immediately after the deployment stage of the API. Configure the action to use the CodePipeline integration with API Gateway to export the SDK to Amazon S3. Create another action that uses the CodePipeline integration with Amazon S3 to invalidate the cache for the SDK path.",
        "Create an Amazon EventBridge rule that reacts to UpdateStage events from aws.apigateway. Configure the rule to invoke an AWS Lambda function to download the SDK from API Gateway, upload the SDK to the S3 bucket, and call the CloudFront API to create an invalidation for the SDK path.",
        "Create an Amazon EventBridge rule that reacts to CreateDeployment events from aws.apigateway. Configure the rule to invoke an AWS Lambda function to download the SDK from API Gateway, upload the SDK to the S3 bucket, and call the S3 API to invalidate the cache for the SDK path."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_194",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "A company manages an application that stores logs in Amazon CloudWatch Logs. The company wants to archive the logs to an Amazon S3 bucket. Logs are rarely accessed after 90 days and must be retained for 10 years. Which combination of steps should a DevOps engineer take to meet these requirements? (Choose two.)",
      "options": [
        "Configure a CloudWatch Logs subscription filter to use AWS Glue to transfer all logs to an S3 bucket.",
        "Configure a CloudWatch Logs subscription filter to use Amazon Kinesis Data Firehose to stream all logs to an S3 bucket.",
        "Configure a CloudWatch Logs subscription filter to stream all logs to an S3 bucket.",
        "Configure the S3 bucket lifecycle policy to transition logs to S3 Glacier after 90 days and to expire logs after 3.650 days.",
        "Configure the S3 bucket lifecycle policy to transition logs to Reduced Redundancy after 90 days and to expire logs after 3.650 days."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_195",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "A company is developing a new application. The application uses AWS Lambda functions for its compute tier. The company must use a canary deployment for any changes to the Lambda functions. Automated rollback must occur if any failures are reported. The company’s DevOps team needs to create the infrastructure as code (IaC) and the CI/CD pipeline for this solution. Which combination of steps will meet these requirements? (Choose Two.)",
      "options": [
        "Create an AWS CloudFormation template for the application. Define each Lambda function in the template by using the AWS::Lambda::Function resource type. In the template, include a version for the Lambda function by using the AWS::Lambda::Version resource type. Declare the CodeSha256 property. Configure an AWS::Lambda::Alias resource that references the latest version of the Lambda function.",
        "Create an AWS Serverless Application Model (AWS SAM) template for the application. Define each Lambda function in the template by using the AWS::Serverless::Function resource type. For each function, include configurations for the AutoPublishAlias property and the DeploymentPreference property. Configure the deployment configuration type to LambdaCanary10Percent10Minutes.",
        "Create an AWS CodeCommit repository. Create an AWS CodePipeline pipeline. Use the CodeCommit repository in a new source stage that starts the pipeline. Create an AWS CodeBuild project to deploy the AWS Serverless Application Model (AWS SAM) template. Upload the template and source code to the CodeCommit repository. In the CodeCommit repository, create a buildspec.yml file that includes the commands to build and deploy the SAM application.",
        "Create an AWS CodeCommit repository. Create an AWS CodePipeline pipeline. Use the CodeCommit repository in a new source stage that starts the pipeline. Create an AWS CodeDeploy deployment group that is configured for canary deployments with a DeploymentPreference type of Canary10Percent10Minutes. Upload the AWS CloudFormation template and source code to the CodeCommit repository. In the CodeCommit repository, create an appspec.yml file that includes the commands to deploy the CloudFormation template."
      ],
      "correctAnswers": [
        1,
        2
      ],
      "explanation": "Correct Answer: BC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_196",
      "batch": "Batch 4",
      "type": "multiple",
      "prompt": "A DevOps engineer is deploying a new version of a company’s application in an AWS CodeDeploy deployment group associated with its Amazon EC2 instances. After some time, the deployment fails. The engineer realizes that all the events associated with the specific deployment ID are in a Skipped status, and code was not deployed in the instances associated with the deployment group. What are valid reasons for this failure? (Choose two.)",
      "options": [
        "The networking configuration does not allow the EC2 instances to reach the internet via a NAT gateway or internet gateway, and the CodeDeploy endpoint cannot be reached.",
        "The IAM user who triggered the application deployment does not have permission to interact with the CodeDeploy endpoint.",
        "The target EC2 instances were not properly registered with the CodeDeploy endpoint.",
        "An instance profile with proper permissions was not attached to the target EC2 instances.",
        "The appspec.yml file was not included in the application revision."
      ],
      "correctAnswers": [
        0,
        3
      ],
      "explanation": "Correct Answer: AD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_197",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A company has a guideline that every Amazon EC2 instance must be launched from an AMI that the company’s security team produces. Every month, the security team sends an email message with the latest approved AMIs to all the development teams. The development teams use AWS CloudFormation to deploy their applications. When developers launch a new service, they have to search their email for the latest AMIs that the security department sent. A DevOps engineer wants to automate the process that the security team uses to provide the AMI IDs to the development teams. What is the MOST scalable solution that meets these requirements?",
      "options": [
        "Direct the security team to use CloudFormation to create new versions of the AMIs and to list the AMI ARNs in an encrypted Amazon S3 object as part of the stack’s Outputs section. Instruct the developers to use a cross-stack reference to load the encrypted S3 object and obtain the most recent AMI ARNs.",
        "Direct the security team to use a CloudFormation stack to create an AWS CodePipeline pipeline that builds new AMIs and places the latest AMI ARNs in an encrypted Amazon S3 object as part of the pipeline output. Instruct the developers to use a cross-stack reference within their own CloudFormation template to obtain the S3 object location and the most recent AMI ARNs.",
        "Direct the security team to use Amazon EC2 Image Builder to create new AMIs and to place the AMI ARNs as parameters in AWS Systems Manager Parameter Store. Instruct the developers to specify a parameter of type SSM in their CloudFormation stack to obtain the most recent AMI ARNs from Parameter Store.",
        "Direct the security team to use Amazon EC2 Image Builder to create new AMIs and to create an Amazon Simple Notification Service (Amazon SNS) topic so that every development team can receive notifications. When the development teams receive a notification, instruct them to write an AWS Lambda function that will update their CloudFormation stack with the most recent AMI ARNs."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_198",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "An application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). A DevOps engineer is using AWS CodeDeploy to release a new version. The deployment fails during the AllowTraffic lifecycle event, but a cause for the failure is not indicated in the deployment logs. What would cause this?",
      "options": [
        "The appspec.yml file contains an invalid script that runs in the AllowTraffic lifecycle hook.",
        "The user who initiated the deployment does not have the necessary permissions to interact with the ALB.",
        "The health checks specified for the ALB target group are misconfigured.",
        "The CodeDeploy agent was not installed in the EC2 instances that are part of the ALB target group."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_199",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A company is using Amazon S3 buckets to store important documents. The company discovers that some S3 buckets are not encrypted. Currently, the company’s IAM users can create new S3 buckets without encryption. The company is implementing a new requirement that all S3 buckets must be encrypted. A DevOps engineer must implement a solution to ensure that server-side encryption is enabled on all existing S3 buckets and all new S3 buckets. The encryption must be enabled on new S3 buckets as soon as the S3 buckets are created. The default encryption type must be 256-bit Advanced Encryption Standard (AES-256). Which solution will meet these requirements?",
      "options": [
        "Create an AWS Lambda function that is invoked periodically by an Amazon EventBridge scheduled rule. Program the Lambda function to scan all current S3 buckets for encryption status and to set AES-256 as the default encryption for any S3 bucket that does not have an encryption configuration.",
        "Set up and activate the s3-bucket-server-side-encryption-enabled AWS Config managed rule. Configure the rule to use the AWS-EnableS3BucketEncryption AWS Systems Manager Automation runbook as the remediation action. Manually run the re-evaluation process to ensure that existing S3 buckets are compliant.",
        "Create an AWS Lambda function that is invoked by an Amazon EventBridge event rule. Define the rule with an event pattern that matches the creation of new S3 buckets. Program the Lambda function to parse the EventBridge event, check the configuration of the S3 buckets from the event, and set AES-256 as the default encryption.",
        "Configure an IAM policy that denies the s3:CreateBucket action if the s3:x-amz-server-side-encryption condition key has a value that is not AES-256. Create an IAM group for all the company’s IAM users. Associate the IAM policy with the IAM group."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_200",
      "batch": "Batch 4",
      "type": "single",
      "prompt": "A DevOps engineer is architecting a continuous development strategy for a company’s software as a service (SaaS) web application running on AWS. For application and security reasons, users subscribing to this application are distributed across multiple Application Load Balancers (ALBs), each of which has a dedicated Auto Scaling group and fleet of Amazon EC2 instances. The application does not require a build stage, and when it is committed to AWS CodeCommit, the application must trigger a simultaneous deployment to all ALBs, Auto Scaling groups, and EC2 fleets. Which architecture will meet these requirements with the LEAST amount of configuration?",
      "options": [
        "Create a single AWS CodePipeline pipeline that deploys the application in parallel using unique AWS CodeDeploy applications and deployment groups created for each ALB-Auto Scaling group pair.",
        "Create a single AWS CodePipeline pipeline that deploys the application using a single AWS CodeDeploy application and single deployment group.",
        "Create a single AWS CodePipeline pipeline that deploys the application in parallel using a single AWS CodeDeploy application and unique deployment group for each ALB-Auto Scaling group pair.",
        "Create an AWS CodePipeline pipeline for each ALB-Auto Scaling group pair that deploys the application using an AWS CodeDeploy application and deployment group created for the same ALB-Auto Scaling group pair."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_201",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company is hosting a static website from an Amazon S3 bucket. The website is available to customers at example.com. The company uses an Amazon Route 53 weighted routing policy with a TTL of 1 day. The company has decided to replace the existing static website with a dynamic web application. The dynamic web application uses an Application Load Balancer (ALB) in front of a fleet of Amazon EC2 instances. On the day of production launch to customers, the company creates an additional Route 53 weighted DNS record entry that points to the ALB with a weight of 255 and a TTL of 1 hour. Two days later, a DevOps engineer notices that the previous static website is displayed sometimes when customers navigate to example.com. How can the DevOps engineer ensure that the company serves only dynamic content for example.com?",
      "options": [
        "Delete all objects, including previous versions, from the S3 bucket that contains the static website content.",
        "Update the weighted DNS record entry that points to the S3 bucket. Apply a weight of 0. Specify the domain reset option to propagate changes immediately.",
        "Configure webpage redirect requests on the S3 bucket with a hostname that redirects to the ALB.",
        "Remove the weighted DNS record entry that points to the S3 bucket from the example.com hosted zone. Wait for DNS propagation to become complete."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_202",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company is implementing AWS CodePipeline to automate its testing process. The company wants to be notified when the execution state fails and used the following custom event pattern in Amazon EventBridge: Which type of events will match this event pattern?",
      "options": [
        "Failed deploy and build actions across all the pipelines",
        "All rejected or failed approval actions across all the pipelines",
        "All the events across all pipelines",
        "Approval actions across all the pipelines"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_203",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "An application running on a set of Amazon EC2 instances in an Auto Scaling group requires a configuration file to operate. The instances are created and maintained with AWS CloudFormation. A DevOps engineer wants the instances to have the latest configuration file when launched, and wants changes to the configuration file to be reflected on all the instances with a minimal delay when the CloudFormation template is updated. Company policy requires that application configuration files be maintained along with AWS infrastructure configuration files in source control. Which solution will accomplish this?",
      "options": [
        "In the CloudFormation template, add an AWS Config rule. Place the configuration file content in the rule’s InputParameters property, and set the Scope property to the EC2 Auto Scaling group. Add an AWS Systems Manager Resource Data Sync resource to the template to poll for updates to the configuration.",
        "In the CloudFormation template, add an EC2 launch template resource. Place the configuration file content in the launch template. Configure the cfn-init script to run when the instance is launched, and configure the cfn-hup script to poll for updates to the configuration.",
        "In the CloudFormation template, add an EC2 launch template resource. Place the configuration file content in the launch template. Add an AWS Systems Manager Resource Data Sync resource to the template to poll for updates to the configuration.",
        "In the CloudFormation template, add CloudFormation init metadata. Place the configuration file content in the metadata. Configure the cfn-init script to run when the instance is launched, and configure the cfn-hup script to poll for updates to the configuration."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_204",
      "batch": "Batch 5",
      "type": "multiple",
      "prompt": "A company manages an application that stores logs in Amazon CloudWatch Logs. The company wants to archive the logs to an Amazon S3 bucket. Logs are rarely accessed after 90 days and must be retained for 10 years. Which combination of steps should a DevOps engineer take to meet these requirements? (Choose two.)",
      "options": [
        "Configure a CloudWatch Logs subscription filter to use AWS Glue to transfer all logs to an S3 bucket.",
        "Configure a CloudWatch Logs subscription filter to use Amazon Kinesis Data Firehose to stream all logs to an S3 bucket.",
        "Configure a CloudWatch Logs subscription filter to stream all logs to an S3 bucket.",
        "Configure the S3 bucket lifecycle policy to transition logs to S3 Glacier after 90 days and to expire logs after 3.650 days.",
        "Configure the S3 bucket lifecycle policy to transition logs to Reduced Redundancy after 90 days and to expire logs after 3.650 days."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_205",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company has multiple development groups working in a single shared AWS account. The senior manager of the groups wants to be alerted via a third-party API call when the creation of resources approaches the service limits for the account. Which solution will accomplish this with the LEAST amount of development effort?",
      "options": [
        "Create an Amazon CloudWatch Event rule that runs periodically and targets an AWS Lambda function. Within the Lambda function, evaluate the current state of the AWS environment and compare deployed resource values to resource limits on the account. Notify the senior manager if the account is approaching a service limit.",
        "Deploy an AWS Lambda function that refreshes AWS Trusted Advisor checks, and configure an Amazon CloudWatch Events rule to run the Lambda function periodically. Create another CloudWatch Events rule with an event pattern matching Trusted Advisor events and a target Lambda function. In the target Lambda function, notify the senior manager.",
        "Deploy an AWS Lambda function that refreshes AWS Personal Health Dashboard checks, and configure an Amazon CloudWatch Events rule to run the Lambda function periodically. Create another CloudWatch Events rule with an event pattern matching Personal Health Dashboard events and a target Lambda function. In the target Lambda function, notify the senior manager.",
        "Add an AWS Config custom rule that runs periodically, checks the AWS service limit status, and streams notifications to an Amazon SNS topic. Deploy an AWS Lambda function that notifies the senior manager, and subscribe the Lambda function to the SNS topic."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_206",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company is developing a web application's infrastructure using AWS CloudFormation. The database engineering team maintains the database resources in a CloudFormation template, and the software development team maintains the web application resources in a separate CloudFormation template. As the scope of the application grows, the software development team needs to use resources maintained by the database engineering team. However, both teams have their own review and lifecycle management processes that they want to keep. Both teams also require resource-level change-set reviews. The software development team would like to deploy changes to this template using their CI/CD pipeline. Which solution will meet these requirements?",
      "options": [
        "Create a stack export from the database CloudFormation template and import those references into the web application CloudFormation template.",
        "Create a CloudFormation nested stack to make cross-stack resource references and parameters available in both stacks.",
        "Create a CloudFormation stack set to make cross-stack resource references and parameters available in both stacks.",
        "Create input parameters in the web application CloudFormation template and pass resource names and IDs from the database stack."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_207",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A DevOps engineer is deploying an AWS Service Catalog portfolio using AWS CodePipeline. The pipeline should create products and templates based on a manifest file in either JSON or YAML, and should enforce security requirements on all AWS Service Catalog products managed through the pipeline. Which solution will meet the requirements in an automated fashion?",
      "options": [
        "Use the AWS Service Catalog deploy action in AWS CodeDeploy to push new versions of products into the AWS Service Catalog with verification steps in the CodeDeploy AppSpec.",
        "Use the AWS Service Catalog deploy action in AWS CodeBuild to verify and push new versions of products into the AWService Catalog.",
        "Use an AWS Lambda action in CodePipeline to run a Lambda function to verify and push new versions of products into the AWS Service Catalog.",
        "Use an AWS Lambda action in AWS CodeBuild to run a Lambda function to verify and push new versions of products into the AWS Service Catalog."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_208",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company has containerized all of its in-house quality control applications. The company is running Jenkins on Amazon EC2, which requires patching and upgrading. The compliance officer has requested a DevOps engineer begin encrypting build artifacts since they contain company intellectual property. What should the DevOps engineer do to accomplish this in the MOST maintainable manner?",
      "options": [
        "Automate patching and upgrading using AWS Systems Manager on EC2 instances and encrypt Amazon EBS volumes by default.",
        "Deploy Jenkins to an Amazon ECS cluster and copy build artifacts to an Amazon S3 bucket with default encryption enabled.",
        "Leverage AWS CodePipeline with a build action and encrypt the artifacts using AWS Secrets Manager.",
        "Use AWS CodeBuild with artifact encryption to replace the Jenkins instance running on Amazon EC2."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_209",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A production account has a requirement that any Amazon EC2 instance that has been logged into manually must be terminated within 24 hours. All applications in the production account are using Auto Scaling groups with Amazon CloudWatch Logs agent configured. How can this process be automated?",
      "options": [
        "Create a CloudWatch Logs subscription to an AWS Step Functions application. Configure the function to add a tag to the EC2 instance that produced the login event and mark the instance to be decommissioned. Then create a CloudWatch Events rule to trigger a second AWS Lambda function once a day that will terminate all instances with this tag.",
        "Create a CloudWatch alarm that will trigger on the login event. Send the notification to an Amazon SNS topic that the operations team is subscribed to, and have them terminate the EC2 instance within 24 hours.",
        "Create a CloudWatch alarm that will trigger on the login event. Configure the alarm to send to an Amazon SQS queue. Use a group of worker instances to process messages from the queue, which then schedules the Amazon CloudWatch Events rule to trigger.",
        "Create a CloudWatch Logs subscription in an AWS Lambda function. Configure the function to add a tag to the EC2 instance that produced the login event and mark the instance to be decommissioned. Create a CloudWatch Events rule to trigger a daily Lambda function that terminates all instances with this tag."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_210",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company's application is running on Amazon EC2 instances in an Auto Scaling group. A DevOps engineer needs to ensure there are at least four application servers running at all times. Whenever an update has to be made to the application, the engineer creates a new AMI with the updated configuration and updates the AWS CloudFormation template with the new AMI ID. After the stack update finishes, the engineer manually terminates the old instances one by one, verifying that the new instance is operational before proceeding. The engineer needs to automate this process. Which action will allow for the LEAST number of manual steps moving forward?",
      "options": [
        "Update the CloudFormation template to include the UpdatePolicy attribute with the AutoScalingRollingUpdate policy.",
        "Update the CloudFormation template to include the UpdatePolicy attribute with the AutoScalingReplacingUpdate policy.",
        "Use an Auto Scaling lifecycle hook to verify that the previous instance is operational before allowing the DevOps engineer's selected instance to terminate.",
        "Use an Auto Scaling lifecycle hook to confirm there are at least four running instances before allowing the DevOps engineer's selected instance to terminate."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_211",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company using AWS CodeCommit for source control wants to automate its continuous integration and continuous delivery pipeline on AWS in its development environment. The company has three requirements: 1. There must be a legal and a security review of any code change to make sure sensitive information is not leaked through the source code. 2. Every change must go through unit testing. 3. Every change must go through a suite of functional testing to ensure functionality. In addition, the company has the following requirements for automation: 1. Code changes should automatically trigger the CI/CD pipeline. 2. Any failure in the pipeline should notify devops-admin@xyz.com. 3. There must be an approval to stage the assets to Amazon S3 after tests have been performed. What should a DevOps Engineer do to meet all of these requirements while following Cl/CD best practices?",
      "options": [
        "Commit to the development branch and trigger AWS CodePipeline from the development branch. Make an individual stage in CodePipeline for security review, unit tests, functional tests, and manual approval. Use Amazon CloudWatch metrics to detect changes in pipeline stages and Amazon SES for emailing devops-admin@xyz.com.",
        "Commit to mainline and trigger AWS CodePipeline from mainline. Make an individual stage in CodePipeline for security review, unit tests, functional tests, and manual approval. Use AWS CloudTrail logs to detect changes in pipeline stages and Amazon SNS for emailing devops-admin@xyz.com.",
        "Commit to the development branch and trigger AWS CodePipeline from the development branch. Make an individual stage in CodePipeline for security review, unit tests, functional tests, and manual approval. Use Amazon CloudWatch Events to detect changes in pipeline stages and Amazon SNS for emailing devops-admin@xyz.com.",
        "Commit to mainline and trigger AWS CodePipeline from mainline. Make an individual stage in CodePipeline for security review, unit tests, functional tests, and manual approval. Use Amazon CloudWatch Events to detect changes in pipeline stages and Amazon SES for emailing devops-admin@xyz.com."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_212",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company has developed a Node.js web application which provides REST services to store and retrieve time series data. The web application is built by the development team on company laptops, tested locally, and manually deployed to a single on-premises server, which accesses a local MySQL database. The company is starting a trial in two weeks, during which the application will undergo frequent updates based on customer feedback. The following requirements must be met: • The team must be able to reliably build, test, and deploy new updates on a daily basis, without downtime or degraded performance. • The application must be able to scale to meet an unpredictable number of concurrent users during the trial. Which action will allow the team to quickly meet these objectives?",
      "options": [
        "Create two Amazon Lightsail virtual private servers for Node.js; one for test and one for production. Build the Node.js application using existing processes and upload it to the new Lightsail test server using the AWS CLI. Test the application, and if it passes all tests, upload it to the production server. During the trial, monitor the production server usage, and if needed, increase performance by upgrading the instance type.",
        "Develop an AWS CloudFormation template to create an Application Load Balancer and two Amazon EC2 instances with Amazon EBS (SSD) volumes in an Auto Scaling group with rolling updates enabled. Use AWS CodeBuild to build and test the Node.js application and store it in an Amazon S3 bucket. Use user-data scripts to install the application and the MySQL database on each EC2 instance. Update the stack to deploy new application versions.",
        "Configure AWS Elastic Beanstalk to automatically build the application using AWS CodeBuild and to deploy it to a test environment that is configured to support auto scaling. Create a second Elastic Beanstalk environment for production. Use Amazon RDS to store data. When new versions of the applications have passed all tests, use Elastic Beanstalk 'swap cname' to promote the test environment to production.",
        "Modify the application to use Amazon DynamoDB instead of a local MySQL database. Use AWS OpsWorks to create a stack for the application with a DynamoDB layer, an Application Load Balancer layer, and an Amazon EC2 instance layer. Use a Chef recipe to build the application and a Chef recipe to deploy the application to the EC2 instance layer. Use custom health checks to run unit tests on each instance with rollback on failure."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_213",
      "batch": "Batch 5",
      "type": "multiple",
      "prompt": "A DevOps engineer is tasked with creating a more stable deployment solution for a web application in AWS. Previous deployments have resulted in user-facing bugs, premature user traffic, and inconsistencies between web servers running behind an Application Load Balancer. The current strategy uses AWS CodeCommit to store the code for the application. When developers push to the main branch of the repository, CodeCommit triggers an AWS Lambda deploy function, which invokes an AWS Systems Manager run command to build and deploy the new code to all Amazon EC2 instances. Which combination of actions should be taken to implement a more stable deployment solution? (Choose two.)",
      "options": [
        "Create a pipeline in AWS CodePipeline with CodeCommit as a source provider. Create parallel pipeline stages to build and test the application. Pass the build artifact to AWS CodeDeploy.",
        "Create a pipeline in AWS CodePipeline with CodeCommit as a source provider. Create separate pipeline stages to build and then test the application. Pass the build artifact to AWS CodeDeploy.",
        "Create and use an AWS CodeDeploy application and deployment group to deploy code updates to the EC2 fleet. Select the Application Load Balancer for the deployment group.",
        "Create individual Lambda functions to run all build, test, and deploy actions using AWS CodeDeploy instead of AWS Systems Manager.",
        "Modify the Lambda function to build a single application package to be shared by all instances. Use AWS CodeDeploy instead of AWS Systems Manager to update the code on the EC2 fleet."
      ],
      "correctAnswers": [
        1,
        2
      ],
      "explanation": "Correct Answer: BC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_214",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A DevOps engineer wants to implement an automated response that will occur if AWS Trusted Advisor detects an IAM access key in a public source code repository. The automated response must delete the exposed access key and must notify the security team. Which solution will meet these requirements?",
      "options": [
        "Create an AWS Lambda function to delete the IAM access key. Configure AWS CloudTrail logs to stream to Amazon CloudWatch Logs. Create a CloudWatch Logs metric filter for the AWS_RISK_CREDENTIALS_EXPOSED event with two actions. First, run the Lambda function. Second, use Amazon Simple Notification Service (Amazon SNS) to send a notification to the security team.",
        "Create an AWS Lambda function to delete the IAM access key. Create an AWS Config rule for changes to \"aws.trustedadvisor\" and the \"Exposed Access Keys\" status with two actions. First, run the Lambda function. Second, use Amazon Simple Notification Service (Amazon SNS) to send a notification to the security team.",
        "Create an AWS Lambda function that deletes the IAM access key and then uses Amazon Simple Notification Service (Amazon SNS) to notify the security team. Create an AWS Personal Health Dashboard rule for the AWS_RISK_CREDENTIALS_EXPOSED event. Set the target of the Personal Health Dashboard rule to the ARN of the Lambda function.",
        "Create an AWS Lambda function that deletes the IAM access key. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with an \"aws.trustedadvisor\" event source and the \"Exposed Access Keys\" status. Set the EventBridge (CloudWatch Events) rule to target the Lambda function and an Amazon Simple Notification Service (Amazon SNS) topic that notifies the security team."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_215",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company hosts an application in North America. The application uses an Amazon Aurora PostgreSQL DB cluster. A team of analysts in Europe generates real- time reports by using the DB cluster. The analysts must have access to the most up- to-date data. A DevOps engineer discovers that the generation of reports is much slower for users in Europe than for users in North America. What should the DevOps engineer do to resolve this issue?",
      "options": [
        "Create an Amazon DynamoDB table in Europe. Use DynamoDB Accelerator (DAX) to configure replication between the DB cluster and the DynamoDB table. Configure the users' machines to point to the DynamoDB table in Europe.",
        "Create cross-Region Aurora Replicas in North America, and activate synchronous replication. Configure the users' machines to point to the Aurora reader endpoint in North America.",
        "Create an Aurora global database. Use the existing DB cluster as the primary cluster, and add a secondary cluster in an AWS Region in Europe. Configure the users' machines to point to the Aurora reader endpoint in Europe.",
        "Use Amazon DynamoDB global tables in an AWS Region in Europe. Set up continuous replication between the DB cluster and the DynamoDB table by using AWS Database Migration Service (AWS DMS). Configure the users' machines to point to the DynamoDB table in Europe."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_216",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A consulting company was hired to assess security vulnerabilities within a client company's application and propose a plan to remediate all identified issues. The architecture is identified as follows: Amazon S3 storage for content, an Auto Scaling group of Amazon EC2 instances behind an Elastic Load Balancer with attached Amazon EBS storage, and an Amazon RDS MySQL database. There are also several AWS Lambda functions that communicate directly with the RDS database using connection string statements in the code. The consultants identified the top security threat as follows: the application is not meeting its requirement to have encryption at rest. What solution will address this issue with the LEAST operational overhead and will provide monitoring for potential future violations?",
      "options": [
        "Enable SSE encryption on the S3 buckets and RDS database. Enable OS-based encryption of data on EBS volumes. Configure Amazon Inspector agents on EC2 instances to report on insecure encryption ciphers. Set up AWS Config rules to periodically check for non-encrypted S3 objects.",
        "Configure the application to encrypt each file prior to storing on Amazon S3. Enable OS-based encryption of data on EBS volumes. Encrypt data on write to RDS. Run cron jobs on each instance to check for unencrypted data and notify via Amazon SNS. Use S3 Events to call an AWS Lambda function and verify if the file is encrypted.",
        "Enable Secure Sockets Layer (SSL) on the load balancer, ensure that AWS Lambda is using SSL to communicate to the RDS database, and enable S3encryption. Configure the application to force SSL for incoming connections and configure RDS to only grant access if the session is encrypted. Configure Amazon Inspector agents on EC2 instances to report on insecure encryption ciphers.",
        "Enable SSE encryption on the S3 buckets, EBS volumes, and the RDS database. Store RDS credentials in EC2 Parameter Store. Enable a policy on the S3 bucket to deny unencrypted puts. Set up AWS Config rules to periodically check for non- encrypted S3 objects and EBS volumes, and to ensure that RDS storage is encrypted."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_217",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "An ecommerce company is looking for ways to deploy an application on AWS that satisfies the following requirements: • Has a simple and automated application deployment process. • Has minimal deployment costs while ensuring that at least half of the instances are available to receive end-user requests. • If the application fails, an automated healing mechanism will replace the affected instances. Which deployment strategy will meet these requirements?",
      "options": [
        "Create an AWS Elastic Beanstalk environment and configure it to use Auto Scaling and an Elastic Load Balancer. Use rolling deployments with a batch size of 50%.",
        "Create an AWS OpsWorks stack. Configure the application layer to use rolling deployments as a deployment strategy. Add an Elastic Load Balancing layer. Enable auto healing on the application layer.",
        "Use AWS CodeDeploy with Auto Scaling and an Elastic Load Balancer. Use the CodeDeployDefault.HalfAtAtime deployment strategy. Enable an Elastic Load Balancing health check to report the status of the application, and set the Auto Scaling health check to ELB.",
        "Use AWS CodeDeploy with Auto Scaling and an Elastic Load Balancer. Use a blue/green deployment strategy. Enable an Elastic Load Balancing health check to report the status of the application, and set the Auto Scaling health check to ELB."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_218",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company has an application that runs on 12 Amazon EC2 instances. The instances run in an Amazon EC2 Auto Scaling group across three Availability Zones. On a typical day each EC2 instance has 30% CPU utilization during business hours and 10% CPU utilization after business hours. The CPU utilization increases suddenly in the first few minutes of business hours each day. Other increases in CPU utilization are gradual. A DevOps engineer needs to optimize costs while maintaining or improving the application's reliability. Which solution meets these requirements?",
      "options": [
        "Configure a target tracking scaling policy that is based on the Auto Scaling group's average CPU utilization, and set a target of 75%. Create a scheduled action for the Auto Scaling group to adjust the desired capacity to six instances just before business hours begin.",
        "Configure the Auto Scaling group with two scheduled actions for Amazon EC2 Auto Scaling. Configure one action to start nine EC2 instances at the start of business hours. Configure the other action to stop nine instances at the end of business hours.",
        "Change to an AWS Application Auto Scaling group. Configure a target tracking scaling policy that is based on the Auto Scaling group's average CPU utilization, and set a target of 75%. Create a scheduled action for the Auto Scaling group to adjust the minimum number of instances to three instances at the end of business hours and to reset the number to six instances before business hours begin.",
        "Change to an AWS Application Auto Scaling group. Configure a target tracking scaling policy that is based on the Auto Scaling group's average CPU utilization, and set a target of 75%. Create a scheduled action to terminate nine instances each evening at the end of business hours."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_219",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A development team is building a full-stack serverless web application. The serverless application will consist of a backend REST API and a front end that is built with a single-page application (SPA) framework. The team wants to use a Git-based workflow to develop and deploy the application. The team has created an AWS CodeCommit repository to store the application code. The team wants to use multiple development branches to test new features. In addition, the team wants to ensure that code changes on the development branches are deployed to the different development environments. Code changes to the main branches must be released automatically to production. The development deployments must be available as a subdomain of the main application website, which is hosted in an Amazon Route 53 public hosted zone. What should a DevOps engineer do to meet these requirements?",
      "options": [
        "Create an application in the AWS Amplify console, and connect the CodeCommit repository. Create a feature branch deployment for each of the environments. Connect the Route 53 domain to the application. Activate the automatic creation of subdomains.",
        "Create a single AWS CodePipeline pipeline that uses the CodeCommit repository as a source. Configure the pipeline so that it deploys to different environments based on the changed branch. Create an AWS Lambda function that creates a new subdomain based on the source branch name. Invoke the Lambda function in the deployment workflow.",
        "Create an application in AWS Elastic Beanstalk that uses the CodeCommit repository as a source. Configure Elastic Beanstalk so that it creates a new application environment based on the changed branch. Connect the Route 53 domain to the application. Activate the automatic creation of subdomains.",
        "Create multiple AWS CodePipeline pipelines that use the CodeCommit repository as a source. Configure each pipeline so that it deploys to a specific environment based on the configured branch. Configure an AWS CodeDeploy step in the pipeline to deploy the application components and to create the Route 53 public hosted zone."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_220",
      "batch": "Batch 5",
      "type": "multiple",
      "prompt": "A company is using AWS CodePipeline to deploy an application. According to a new guideline, a member of the company's security team must sign off on any application changes before the changes are deployed into production. The approval must be recorded and retained. Which combination of actions will meet these requirements? (Choose two.)",
      "options": [
        "Configure CodePipeline to write actions to Amazon CloudWatch Logs.",
        "Configure CodePipeline to write actions to an Amazon S3 bucket at the end of each pipeline stage.",
        "Create an AWS CloudTrail trail to deliver logs to Amazon S3.",
        "Create a CodePipeline custom action to invoke an AWS Lambda function for approval. Create a policy that gives the security team access to manage CodePipeline custom actions.",
        "Create a CodePipeline manual approval action before the deployment step. Create a policy that grants the security team access to approve manual approval stages."
      ],
      "correctAnswers": [
        2,
        4
      ],
      "explanation": "Correct Answer: CE",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_221",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company manages a web application that runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The EC2 instances run in an Auto Scaling group across multiple Availability Zones. The application uses an Amazon RDS for MySQL DB instance to store the data. The company has configured Amazon Route 53 with an alias record that points to the ALB. Anew company guideline requires a geographically isolated disaster recovery (DR) site with an RTO of 4 hours and an RPO of 15 minutes. Which DR strategy will meet these requirements with the LEAST change to the application stack?",
      "options": [
        "Launch a replica environment of everything except Amazon RDS in a different Availability Zone. Create an RDS read replica in the new Availability Zone, and configure the new stack to point to the local RDS DB instance. Add the new stack to the Route 53 record set by using a health check to configure a failover routing policy.",
        "Launch a replica environment of everything except Amazon RDS in a different AWS Region. Create an RDS read replica in the new Region, and configure the new stack to point to the local RDS DB instance. Add the new stack to the Route 53 record set by using a health check to configure a latency routing policy.",
        "Launch a replica environment of everything except Amazon RDS in a different AWS Region. In the event of an outage, copy and restore the latest RDS snapshot from the primary Region to the DR Region. Adjust the Route 53 record set to point to the ALB in the DR Region.",
        "Launch a replica environment of everything except Amazon RDS in a different AWS Region. Create an RDS read replica in the new Region, and configure the new environment to point to the local RDS DB instance. Add the new stack to the Route 53 record set by using a health check to configure a failover routing policy. In the event of an outage, promote the read replica to primary."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_222",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A development team is building an ecommerce application and is using Amazon Simple Notification Service (Amazon SNS) to send order messages to multiple endpoints. One of the endpoints is an external HTTP endpoint that is not always available. The development team needs to receive a notification if an order message is not delivered to the HTTP endpoint. What should a DevOps engineer do to meet these requirements?",
      "options": [
        "Create an Amazon Simple Queue Service (Amazon SQS) queue. On the SNS topic, configure a redrive policy that sends undelivered messages to the SQS queue. Create an Amazon CloudWatch alarm for the new SQS queue to notify the development team when messages are delivered to the queue.",
        "Create an Amazon Simple Queue Service (Amazon SQS) queue. On the HTTP endpoint subscription of the SNS topic, configure a redrive policy that sends undelivered messages to the SQS queue. Create an Amazon CloudWatch alarm for the new SQS queue to notify the development team when messages are delivered to the queue.",
        "On the SNS topic, configure an HTTPS delivery policy that will retry delivery until the order message is delivered successfully. Configure the backoffFunction parameter in the policy to notify the development team when a message cannot be delivered within the set constraints.",
        "On the HTTP endpoint subscription of the SNS topic, configure an HTTPS delivery policy that will retry delivery until the order message is delivered successfully. Configure the backoffFunction parameter in the policy to notify the development team when a message cannot be delivered within the set constraints."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_223",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company is deploying a container-based application using AWS CodeBuild. The Security team mandates that all containers are scanned for vulnerabilities prior to deployment using a password-protected endpoint. All sensitive information must be stored securely. Which solution should be used to meet these requirements?",
      "options": [
        "Encrypt the password using AWS KMS. Store the encrypted password in the buildspec.yml file as an environment variable under the variables mapping. Reference the environment variable to initiate scanning.",
        "Import the password into an AWS CloudHSM key. Reference the CloudHSM key in the buildpec.yml file as an environment variable under the variables mapping. Reference the environment variable to initiate scanning.",
        "Store the password in the AWS Systems Manager Parameter Store as a secure string. Add the Parameter Store key to the buildspec.yml file as an environment variable under the parameter-store mapping. Reference the environment variable to initiate scanning.",
        "Use the AWS Encryption SDK to encrypt the password and embed in the buildspec.yml file as a variable under the secrets mapping. Attach a policy to CodeBuild to enable access to the required decryption key."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_224",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "An Engineering team manages a Node.js e-commerce application. The current environment consists of the following components: ✑ Amazon S3 buckets for storing content ✑ Amazon EC2 for the front-end web servers ✑ AWS Lambda for image processing ✑ Amazon DynamoDB for storing session-related data The team expects a significant increase in traffic to the site. The application should handle the additional load without interruption. The team ran initial tests by adding new servers to the EC2 front-end to handle the larger load, but the instances took up to 20 minutes to become fully configured. The team wants to reduce this configuration time. What changes will the Engineering team need to implement to make the solution the MOST resilient and highly available while meeting the expected increase in demand?",
      "options": [
        "Use AWS OpsWorks to automatically configure each new EC2 instance as it is launched. Configure the EC2 instances by using an Auto Scaling group behind an Application Load Balancer across multiple Availability Zones. Implement Amazon DynamoDB Auto Scaling. Use Amazon Route 53 to point the application DNS record to the Application Load Balancer.",
        "Deploy a fleet of EC2 instances, doubling the current capacity, and place them behind an Application Load Balancer. Increase the Amazon DynamoDB read and write capacity units. Add an alias record that contains the Application Load Balancer endpoint to the existing Amazon Route 53 DNS record that points to the application.",
        "Configure Amazon CloudFront and have its origin point to Amazon S3 to host the web application. Implement Amazon DynamoDB Auto Scaling. Use Amazon Route 53 to point the application DNS record to the CloudFront DNS name.",
        "Use AWS Elastic Beanstalk with a custom AMI including all web components. Deploy the platform by using an Auto Scaling group behind an Application Load Balancer across multiple Availability Zones. Implement Amazon DynamoDB Auto Scaling. Use Amazon Route 53 to point the application DNS record to the Elastic Beanstalk load balancer."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_225",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company is using AWS Organizations to create separate AWS accounts for each of its departments. The company needs to automate the following tasks: ✑ Update the Linux AMIs with new patches periodically and generate a golden image ✑ Install a new version of Chef agents in the golden image, if available ✑ Provide the newly generated AMIs to the department's accounts Which solution meets these requirements with the LEAST management overhead?",
      "options": [
        "Write a script to launch an Amazon EC2 instance from the previous golden image. Apply the patch updates. Install the new version of the Chef agent, generate a new golden image, and then modify the AMI permissions to share only the new image with the department's accounts.",
        "Use Amazon EC2 Image Builder to create an image pipeline that consists of the base Linux AMI and components to install the Chef agent. Use AWS Resource Access Manager to share EC2 Image Builder images with the department's accounts.",
        "Use an AWS Systems Manager Automation runbook to update the Linux AMI by using the previous image. Provide the URL for the script that will update the Chef agent. Use AWS Organizations to replace the previous golden image in the department's accounts.",
        "Use Amazon EC2 Image Builder to create an image pipeline that consists of the base Linux AMI and components to install the Chef agent. Create a parameter in AWS Systems Manager Parameter Store to store the new AMI ID that can be referenced by the department's accounts."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_226",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company has an on-premises that is written in Go. A DevOps engineer must move the application to AWS. The company's development team wants to enable blue/green deployments and perform A/B testing. Which solution will meet these requirements?",
      "options": [
        "Deploy the application on an Amazon EC2 instance and create an AMI of this instance. Use this AMI to create an automatic scaling launch configuration that is used in an Auto Scaling group. Use an Elastic Load Balancer to distribute traffic. When changes are made to the application, a new AMI will be created, which will initiate an EC2 instance refresh.",
        "Use Amazon Lightsail to deploy the application. Store the application in a zipped format in an Amazon S3 bucket. Use this zipped version to deploy new versions of the application to Lightsail. Use Lightsail deployment options to manage the deployment.",
        "Use AWS CodeArtifact to store the application code. Use AWS CodeDeploy to deploy the application to a fleet of Amazon EC2 instances. Use Elastic Load Balancing to distribute the traffic to the EC2 instances. When making changes to the application, upload a new version to CodeArtifact and create a new CodeDeploy deployment.",
        "Use AWS Elastic Beanstalk to host the application. Store a zipped version of the application in Amazon S3, and use that location to deploy new versions of the application using Elastic Beanstalk to manage the deployment options."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_227",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company has a single developer writing code for an automated deployment pipeline. The developer is storing source code in an Amazon S3 bucket for each project. The company wants to add more developers to the team but is concerned about code conflicts and lost work. The company also wants to build a test environment to deploy newer versions of code for testing and allow developers to automatically deploy to both environments when code is changed in the repository. What is the MOST efficient way to meet these requirements?",
      "options": [
        "Create an AWS CodeCommit repository for each project, use the main branch for production code, and create a testing branch for code deployed to testing. Use feature branches to develop new features and pull requests to merge code to testing and main branches.",
        "Create another S3 bucket for each project for testing code, and use an AWS Lambda function to promote code changes between testing and production buckets. Enable versioning on all buckets to prevent code conflicts.",
        "Create an AWS CodeCommit repository for each project, and use the main branch for production and test code with different deployment pipelines for each environment. Use feature branches to develop new features.",
        "Enable versioning and branching on each S3 bucket, use the main branch for production code, and create a testing branch for code deployed to testing. Have developers use each branch for developing in each environment."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_228",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company gives its employees limited rights to AWS. DevOps engineers have the ability to assume an administrator role. For tracking purposes, the security team wants to receive a near-real-time notification when the administrator role is assumed. How should this be accomplished?",
      "options": [
        "Configure AWS Config to publish logs to an Amazon S3 bucket. Use Amazon Athena to query the logs and send a notification to the security team when the administrator role is assumed.",
        "Configure Amazon GuardDuty to monitor when the administrator role is assumed and send a notification to the security team.",
        "Create an Amazon EventBridge (Amazon CloudWatch Events) event rule using an AWS Management Console sign-in events event pattern that publishes a message to an Amazon SNS topic if the administrator role is assumed.",
        "Create an Amazon EventBridge (Amazon CloudWatch Events) events rule using an AWS API call that uses an AWS CloudTrail event pattern to trigger an AWS Lambda function that publishes a message to an Amazon SNS topic if the administrator role is assumed."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_229",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company that runs many workloads on AWS has an Amazon EBS spend that has increased over time. The DevOps team notices there are many unattached EBS volumes. Although there are workloads where volumes are detached, volumes over 14 days old are stale and no longer needed. A DevOps engineer has been tasked with creating automation that deletes unattached EBS volumes that have been unattached for 14 days. Which solution will accomplish this?",
      "options": [
        "Configure the AWS Config ec2-volume-inuse-check managed rule with a configuration changes trigger type and an Amazon EC2 volume resource target. Create a new Amazon CloudWatch Events rule scheduled to execute an AWS Lambda function in 14 days to delete the specified EBS volume.",
        "Use Amazon EC2 and Amazon Data Lifecycle Manager to configure a volume lifecycle policy. Set the interval period for unattached EBS volumes to 14 days and set the retention rule to delete. Set the policy target volumes as *.",
        "Create an Amazon CloudWatch Events rule to execute an AWS Lambda function daily. The Lambda function should find unattached EBS volumes and tag them with the current date, and delete unattached volumes that have tags with dates that are more than 14 days old.",
        "Use AWS Trusted Advisor to detect EBS volumes that have been detached for more than 14 days. Execute an AWS Lambda function that creates a snapshot and then deletes the EBS volume."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_230",
      "batch": "Batch 5",
      "type": "multiple",
      "prompt": "A DevOps engineer notices that all Amazon EC2 instances running behind an Application Load Balancer in an Auto Scaling group are failing to respond to user requests. The EC2 instances are also failing target group HTTP health checks. Upon inspection, the engineer notices the application process was not running in any EC2 instances. There are a significant number of out of memory messages in the system logs. The engineer needs to improve the resilience of the application to cope with a potential application memory leak. Monitoring and notifications should be enabled to alert when there is an issue. Which combination of actions will meet these requirements? (Choose two.)",
      "options": [
        "Change the Auto Scaling configuration to replace the instances when they fail the load balancer's health checks.",
        "Change the target group health check HealthCheckIntervalSeconds parameter to reduce the interval between health checks.",
        "Change the target group health checks from HTTP to TCP to check if the port where the application is listening is reachable.",
        "Enable the available memory consumption metric within the Amazon CloudWatch dashboard for the entire Auto Scaling group. Create an alarm when the memory utilization is high. Associate an Amazon SNS topic to the alarm to receive notifications when the alarm goes off.",
        "Use the Amazon CloudWatch agent to collect the memory utilization of the EC2 instances in the Auto Scaling group. Create an alarm when the memory utilization is high and associate an Amazon SNS topic to receive a notification."
      ],
      "correctAnswers": [
        0,
        4
      ],
      "explanation": "Correct Answer: AE",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_231",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company wants to migrate a legacy application to AWS and develop a deployment pipeline that uses AWS services only. A DevOps engineer is migrating all of the application code from a Git repository to AWS CodeCommit while preserving the history of the repository. The DevOps engineer has set all the permissions within CodeCommit, installed the Git client and the AWS CLI on a local computer, and is ready to migrate the repository. Which actions will follow?",
      "options": [
        "Create the CodeCommit repository using the AWS CLI. Clone the Git repository directly to CodeCommit using the AWS CLI. Validate that the files were migrated, and publish the CodeCommit repository.",
        "Create the CodeCommit repository using the AWS Management Console. Clone both the Git and CodeCommit repositories to the local computer. Copy the files from the Git repository to the CodeCommit repository on the local computer. Commit the CodeCommit repository. Validate that the files were migrated, and share the CodeCommit repository.",
        "Create the CodeCommit repository using the AWS Management Console. Use the console to clone the Git repository into the CodeCommit repository. Validate that the files were migrated, and publish the CodeCommit repository.",
        "Create the CodeCommit repository using the AWS Management Console or the AWS CLI. Clone the Git repository with a mirror argument to the local computer and push the repository to CodeCommit. Validate that the files were migrated, and share the CodeCommit repository."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_232",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company hired a penetration tester to simulate an internal security breach. The tester performed port scans on the company's Amazon EC2 instances. The company's security measures did not detect the port scans. The company needs a solution that automatically provides notification when port scans are performed on EC2 instances. The company creates and subscribes to an Amazon Simple Notification Service (Amazon SNS) topic. What should the company do next to meet the requirement?",
      "options": [
        "Ensure that Amazon GuardDuty is enabled. Create an Amazon CloudWatch alarm for detected EC2 and port scan findings. Connect the alarm to the SNS topic.",
        "Ensure that Amazon Inspector is enabled. Create an Amazon EventBridge event for detected network reachability findings that indicate port scans. Connect the event to the SNS topic.",
        "Ensure that Amazon Inspector is enabled. Create an Amazon EventBridge event for detected CVEs that cause open port vulnerabilities. Connect the event to the SNS topic.",
        "Ensure that AWS CloudTrail is enabled. Create an AWS Lambda function to analyze the CloudTrail logs for unusual amounts of traffic from an IP address range. Connect the Lambda function to the SNS topic."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_233",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company runs applications in an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The EKS cluster uses an Application Load Balancer to route traffic to the applications that run in the cluster. A new application that was migrated to the EKS cluster is performing poorly. All the other applications in the EKS cluster maintain appropriate operation. The new application scales out horizontally to the preconfigured maximum number of pods immediately upon deployment, before any user traffic routes to the web application. Which solution will resolve the scaling behavior of the web application in the EKS cluster?",
      "options": [
        "Implement the Horizontal Pod Autoscaler in the EKS cluster.",
        "Implement the Vertical Pod Autoscaler in the EKS cluster.",
        "Implement the Cluster Autoscaler.",
        "Implement the AWS Load Balancer Controller in the EKS cluster."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_234",
      "batch": "Batch 5",
      "type": "multiple",
      "prompt": "A company has an AWS Control Tower landing zone that manages its organization in AWS Organizations. The company created an OU structure that is based on the company's requirements. The company's DevOps team has established the core accounts for the solution and an account for all centralized AWS CloudFormation and AWS Service Catalog solutions. The company wants to offer a series of customizations that an account can request through AWS Control Tower. Which combination of steps will meet these requirements? (Choose three.)",
      "options": [
        "Enable trusted access for CloudFormation with Organizations by using service-managed permissions.",
        "Create an IAM role that is named AWSControlTowerBlueprintAccess. Configure the role with a trust policy that allows the AWSControlTowerAdmin role in the management account to assume the role. Attach the AWSServiceCatalogAdminFullAccess IAM policy to the AWSControlTowerBlueprintAccess role.",
        "Create a Service Catalog product for each CloudFormation template.",
        "Create a CloudFormation stack set for each CloudFormation template. Enable automatic deployment for each stack set. Create a CloudFormation stack instance that targets specific OUs.",
        "Deploy the Customizations for AWS Control Tower (CfCT) CloudFormation stack.",
        "Create a CloudFormation template that contains the resources for each customization."
      ],
      "correctAnswers": [
        1,
        2,
        5
      ],
      "explanation": "Correct Answer: BCF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_235",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company runs a workload on Amazon EC2 instances. The company needs a control that requires the use of Instance Metadata Service Version 2 (IMDSv2) on all EC2 instances in the AWS account. If an EC2 instance does not prevent the use of Instance Metadata Service Version 1 (IMDSv1), the EC2 instance must be terminated. Which solution will meet these requirements?",
      "options": [
        "Set up AWS Config in the account. Use a managed rule to check EC2 instances. Configure the rule to remediate the findings by using AWS Systems Manager Automation to terminate the instance.",
        "Create a permissions boundary that prevents the ec2:RunInstance action if the ec2:MetadataHttpTokens condition key is not set to a value of required. Attach the permissions boundary to the IAM role that was used to launch the instance.",
        "Set up Amazon Inspector in the account. Configure Amazon Inspector to activate deep inspection for EC2 instances. Create an Amazon EventBridge rule for an Inspector2 finding. Set an AWS Lambda function as the target to terminate the instance.",
        "Create an Amazon EventBridge rule for the EC2 instance launch successful event. Send the event to an AWS Lambda function to inspect the EC2 metadata and to terminate the instance."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_236",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "An ecommerce company uses a large number of Amazon Elastic Block Store (Amazon EBS) backed Amazon EC2 instances. To decrease manual work across all the instances, a DevOps engineer is tasked with automating restart actions when EC2 instance retirement events are scheduled. How can this be accomplished?",
      "options": [
        "Create a scheduled Amazon EventBridge rule to run an AWS Systems Manager Automation runbook that checks if any EC2 instances are scheduled for retirement once a week. If the instance is scheduled for retirement, the runbook will hibernate the instance.",
        "Enable EC2 Auto Recovery on all of the instances. Create an AWS Config rule to limit the recovery to occur during a maintenance window only.",
        "Reboot all EC2 instances during an approved maintenance window that is outside of standard business hours. Set up Amazon CloudWatch alarms to send a notification in case any instance is failing EC2 instance status checks.",
        "Set up an AWS Health Amazon EventBridge rule to run AWS Systems Manager Automation runbooks that stop and start the EC2 instance when a retirement scheduled event occurs."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_237",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company manages AWS accounts for application teams in AWS Control Tower. Individual application teams are responsible for securing their respective AWS accounts. A DevOps engineer needs to enable Amazon GuardDuty for all AWS accounts in which the application teams have not already enabled GuardDuty. The DevOps engineer is using AWS CloudFormation StackSets from the AWS Control Tower management account. How should the DevOps engineer configure the CloudFormation template to prevent failure during the StackSets deployment?",
      "options": [
        "Create a CloudFormation custom resource that invokes an AWS Lambda function. Configure the Lambda function to conditionally enable GuardDuty if GuardDuty is not already enabled in the accounts.",
        "Use the Conditions section of the CloudFormation template to enable GuardDuty in accounts where GuardDuty is not already enabled.",
        "Use the CloudFormation Fn::GetAtt intrinsic function to check whether GuardDuty is already enabled. If GuardDuty is not already enabled, use the Resources section of the CloudFormation template to enable GuardDuty.",
        "Manually discover the list of AWS account IDs where GuardDuty is not enabled. Use the CloudFormation Fn::ImportValue intrinsic function to import the list of account IDs into the CloudFormation template to skip deployment for the listed AWS accounts."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_238",
      "batch": "Batch 5",
      "type": "multiple",
      "prompt": "A company has an AWS Control Tower landing zone. The company's DevOps team creates a workload OU. A development OU and a production OU are nested under the workload OU. The company grants users full access to the company's AWS accounts to deploy applications. The DevOps team needs to allow only a specific management IAM role to manage the IAM roles and policies of any AWS accounts in only the production OU. Which combination of steps will meet these requirements? (Choose two.)",
      "options": [
        "Create an SCP that denies full access with a condition to exclude the management IAM role for the organization root.",
        "Ensure that the FullAWSAccess SCP is applied at the organization root.",
        "Create an SCP that allows IAM related actions. Attach the SCP to the development OU.",
        "Create an SCP that denies IAM related actions with a condition to exclude the management IAM role. Attach the SCP to the workload OU.",
        "Create an SCP that denies IAM related actions with a condition to exclude the management IAM role. Attach the SCP to the production OU."
      ],
      "correctAnswers": [
        1,
        4
      ],
      "explanation": "Correct Answer: BE",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_239",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A security team is concerned that a developer can unintentionally attach an Elastic IP address to an Amazon EC2 instance in production. No developer should be allowed to attach an Elastic IP address to an instance. The security team must be notified if any production server has an Elastic IP address at any time. How can this task be automated?",
      "options": [
        "Use Amazon Athena to query AWS CloudTrail logs to check for any associate-address attempts. Create an AWS Lambda function to disassociate the Elastic IP address from the instance, and alert the security team.",
        "Attach an IAM policy to the developers' IAM group to deny associate-address permissions. Create a custom AWS Config rule to check whether an Elastic IP address is associated with any instance tagged as production, and alert the security team.",
        "Ensure that all IAM groups associated with developers do not have associate-address permissions. Create a scheduled AWS Lambda function to check whether an Elastic IP address is associated with any instance tagged as production, and alert the security team if an instance has an Elastic IP address associated with it.",
        "Create an AWS Config rule to check that all production instances have EC2 IAM roles that include deny associate- address permissions. Verify whether there is an Elastic IP address associated with any instance, and alert the security team if an instance has an Elastic IP address associated with it."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_240",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company has a mission-critical application on AWS that uses automatic scaling. The company wants the deployment lifecycle to meet the following parameters: •The application must be deployed one instance at a time to ensure the remaining fleet continues to serve traffic. •The application is CPU intensive and must be closely monitored. •The deployment must automatically roll back if the CPU utilization of the deployment instance exceeds 85%. Which solution will meet these requirements?",
      "options": [
        "Use AWS CloudFormation to create an AWS Step Functions state machine and Auto Scaling lifecycle hooks to move to one instance at a time into a wait state. Use AWS Systems Manager automation to deploy the update to each instance and move it back into the Auto Scaling group using the heartbeat timeout.",
        "Use AWS CodeDeploy with Amazon EC2 Auto Scaling Configure an alarm tied to the CPU utilization metric. Use the CodeDeployDefault OneAtAtime configuration as a deployment strategy. Configure automatic rollbacks within the deployment group to roll back the deployment if the alarm thresholds are breached.",
        "Use AWS Elastic Beanstalk for load balancing and AWS Auto Scaling. Configure an alarm tied to the CPU utilization metric. Configure rolling deployments with a fixed batch size of one instance. Enable enhanced health to monitor the status of the deployment and roll back based on the alarm previously created.",
        "Use AWS Systems Manager to perform a blue/green deployment with Amazon EC2 Auto Scaling. Configure an alarm tied to the CPU utilization metric. Deploy updates one at a time. Configure automatic rollbacks within the Auto Scaling group to roll back the deployment if the alarm thresholds are breached."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_241",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company has microservices running in AWS Lambda that read data from Amazon DynamoDB. The Lambda code is manually deployed by developers after successful testing. The company now needs the tests and deployments be automated and run in the cloud. Additionally, traffic to the new versions of each microservice should be incrementally shifted over time after deployment. What solution meets all the requirements, ensuring the MOST developer velocity?",
      "options": [
        "Create an AWS CodePipeline configuration and set up a post-commit hook to trigger the pipeline after tests have passed. Use AWS CodeDeploy and create a Canary deployment configuration that specifies the percentage of traffic and interval.",
        "Create an AWS CodeBuild configuration that triggers when the test code is pushed. Use AWS CloudFormation to trigger an AWS CodePipeline configuration that deploys the new Lambda versions and specifies the traffic shift percentage and interval.",
        "Create an AWS CodePipeline configuration and set up the source code step to trigger when code is pushed. Set up the build step to use AWS CodeBuild to run the tests. Set up an AWS CodeDeploy configuration to deploy, then select the CodeDeployDefault.LambdaLinear10PercentEvery3Minutes option.",
        "Use the AWS CLI to set up a post-commit hook that uploads the code to an Amazon S3 bucket after tests have passed Set up an S3 event trigger that runs a Lambda function that deploys the new version. Use an interval in the Lambda function to deploy the code over time at the required percentage."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_242",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company is building a web and mobile application that uses a serverless architecture powered by AWS Lambda and Amazon API Gateway. The company wants to fully automate the backend Lambda deployment based on code that is pushed to the appropriate environment branch in an AWS CodeCommit repository. The deployment must have the following: •Separate environment pipelines for testing and production •Automatic deployment that occurs for test environments only Which steps should be taken to meet these requirements?",
      "options": [
        "Configure a new AWS CodePipeline service. Create a CodeCommit repository for each environment. Set up CodePipeline to retrieve the source code from the appropriate repository. Set up the deployment step to deploy the Lambda functions with AWS CloudFormation.",
        "Create two AWS CodePipeline configurations for test and production environments. Configure the production pipeline to have a manual approval step. Create a CodeCommit repository for each environment. Set up each CodePipeline to retrieve the source code from the appropriate repository. Set up the deployment step to deploy the Lambda functions with AWS CloudFormation.",
        "Create two AWS CodePipeline configurations for test and production environments. Configure the production pipeline to have a manual approval step. Create one CodeCommit repository with a branch for each environment. Set up each CodePipeline to retrieve the source code from the appropriate branch in the repository. Set up the deployment step to deploy the Lambda functions with AWS CloudFormation.",
        "Create an AWS CodeBuild configuration for test and production environments. Configure the production pipeline to have a manual approval step. Create one CodeCommit repository with a branch for each environment. Push the Lambda function code to an Amazon S3 bucket. Set up the deployment step to deploy the Lambda functions from the S3 bucket."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_243",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A DevOps engineer wants to find a solution to migrate an application from on premises to AWS. The application is running on Linux and needs to run on specific versions of Apache Tomcat, HAProxy, and Varnish Cache to function properly. The application's operating system-level parameters require tuning. The solution must include a way to automate the deployment of new application versions. The infrastructure should be scalable and faulty servers should be replaced automatically. Which solution should the DevOps engineer use?",
      "options": [
        "Upload the application as a Docker image that contains all the necessary software to Amazon ECR. Create an Amazon ECS cluster using an AWS Fargate launch type and an Auto Scaling group. Create an AWS CodePipeline pipeline that uses Amazon ECR as a source and Amazon ECS as a deployment provider.",
        "Upload the application code to an AWS CodeCommit repository with a saved configuration file to configure and install the software. Create an AWS Elastic Beanstalk web server tier and a load balanced-type environment that uses the Tomcat solution stack. Create an AWS CodePipeline pipeline that uses CodeCommit as a source and Elastic Beanstalk as a deployment provider.",
        "Upload the application code to an AWS CodeCommit repository with a set of .ebextensions files to configure and install the software. Create an AWS Elastic Beanstalk worker tier environment that uses the Tomcat solution stack. Create an AWS CodePipeline pipeline that uses CodeCommit as a source and Elastic Beanstalk as a deployment provider.",
        "Upload the application code to an AWS CodeCommit repository with an appspec.yml file to configure and install the necessary software. Create an AWS CodeDeploy deployment group associated with an Amazon EC2 Auto Scaling group. Create an AWS CodePipeline pipeline that uses CodeCommit as a source and CodeDeploy as a deployment provider."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_244",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A DevOps engineer is using AWS CodeDeploy across a fleet of Amazon EC2 instances in an EC2 Auto Scaling group. The associated CodeDeploy deployment group, which is integrated with EC2 Auto Scaling, is configured to perform in-place deployments with CodeDeployDefault.OneAtATime. During an ongoing new deployment, the engineer discovers that, although the overall deployment finished successfully, two out of five instances have the previous application revision deployed. The other three instances have the newest application revision. What is likely causing this issue?",
      "options": [
        "The two affected instances failed to fetch the new deployment.",
        "A failed AfterInstall lifecycle event hook caused the CodeDeploy agent to roll back to the previous version on the affected instances.",
        "The CodeDeploy agent was not installed in two affected instances.",
        "EC2 Auto Scaling launched two new instances while the new deployment had not yet finished, causing the previous version to be deployed on the affected instances."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_245",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company manages multiple AWS accounts in AWS Organizations. The company’s security policy states that AWS account root user credentials for member accounts must not be used. The company monitors access to the root user credentials. A recent alert shows that the root user in a member account launched an Amazon EC2 instance. A DevOps engineer must create an SCP at the organization's root level that will prevent the root user in member accounts from making any AWS service API calls. Which SCP will meet these requirements?",
      "options": [
        "Create an SCP with a Deny effect on Action \"*\" and Resource \"*\" with a Condition \"ArnNotEquals\": {\"aws:PrincipalArn\": \"arn:aws:iam::*:root\"}. Attach the SCP to the organization root.",
        "Create an SCP with a Deny effect on Action \"*\" and Resource \"*\" with a Condition \"StringEquals\": {\"aws:PrincipalType\": \"Root\"}. Attach the SCP to the organization root.",
        "Create an SCP with a Deny effect on Action \"*\" and Resource \"*\" with a Condition \"ArnLike\": {\"aws:PrincipalArn\": \"arn:aws:iam::*:root\"}. Attach the SCP to the organization root.",
        "Create an SCP with a Deny effect on Action \"*\" and Resource \"*\" with a Condition \"StringLike\": {\"aws:userId\": \"*:root\"}. Attach the SCP to the organization root."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_246",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company uses AWS and has a VPC that contains critical compute infrastructure with predictable traffic patterns. The company has configured VPC flow logs that are published to a log group in Amazon CloudWatch Logs. The company's DevOps team needs to configure a monitoring solution for the VPC flow logs to identify anomalies in network traffic to the VPC over time. If the monitoring solution detects an anomaly, the company needs the ability to initiate a response to the anomaly. How should the DevOps team configure the monitoring solution to meet these requirements?",
      "options": [
        "Create an Amazon Kinesis data stream. Subscribe the log group to the data stream. Configure Amazon Kinesis Data Analytics to detect log anomalies in the data stream. Create an AWS Lambda function to use as the output of the data stream. Configure the Lambda function to write to the default Amazon EventBridge event bus in the event of an anomaly finding.",
        "Create an Amazon Kinesis Data Firehose delivery stream that delivers events to an Amazon S3 bucket. Subscribe the log group to the delivery stream. Configure Amazon Lookout for Metrics to monitor the data in the S3 bucket for anomalies. Create an AWS Lambda function to run in response to Lookout for Metrics anomaly findings. Configure the Lambda function to publish to the default Amazon EventBridge event bus.",
        "Create an AWS Lambda function to detect anomalies. Configure the Lambda function to publish an event to the default Amazon EventBridge event bus if the Lambda function detects an anomaly. Subscribe the Lambda function to the log group.",
        "Create an Amazon Kinesis data stream. Subscribe the log group to the data stream. Create an AWS Lambda function to detect log anomalies. Configure the Lambda function to write to the default Amazon EventBridge event bus if the Lambda function detects an anomaly. Set the Lambda function as the processor for the data stream."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_247",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "AnyCompany is using AWS Organizations to create and manage multiple AWS accounts. AnyCompany recently acquired a smaller company, Example Corp. During the acquisition process, Example Corp's single AWS account joined AnyCompany's management account through an Organizations invitation. AnyCompany moved the new member account under an OU that is dedicated to Example Corp. AnyCompany's DevOps engineer has an IAM user that assumes a role that is named OrganizationAccountAccessRole to access member accounts. This role is configured with a full access policy. When the DevOps engineer tries to use the AWS Management Console to assume the role in Example Corp's new member account, the DevOps engineer receives the following error message: \"Invalid information in one or more fields. Check your information or contact your administrator.\" Which solution will give the DevOps engineer access to the new member account?",
      "options": [
        "In the management account, grant the DevOps engineer's IAM user permission to assume the OrganizationAccountAccessRole IAM role in the new member account.",
        "In the management account, create a new SCP. In the SCP, grant the DevOps engineer's IAM user full access to all resources in the new member account. Attach the SCP to the OU that contains the new member account.",
        "In the new member account, create a new IAM role that is named OrganizationAccountAccessRole. Attach the AdministratorAccess AWS managed policy to the role. In the role's trust policy, grant the management account permission to assume the role.",
        "In the new member account, edit the trust policy for the OrganizationAccountAccessRole IAM role. Grant the management account permission to assume the role."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_248",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A DevOps engineer is designing an application that integrates with a legacy REST API. The application has an AWS Lambda function that reads records from an Amazon Kinesis data stream. The Lambda function sends the records to the legacy REST API. Approximately 10% of the records that the Lambda function sends from the Kinesis data stream have data errors and must be processed manually. The Lambda function event source configuration has an Amazon Simple Queue Service (Amazon SQS) dead-letter queue as an on-failure destination. The DevOps engineer has configured the Lambda function to process records in batches and has implemented retries in case of failure. During testing, the DevOps engineer notices that the dead-letter queue contains many records that have no data errors and that already have been processed by the legacy REST API. The DevOps engineer needs to configure the Lambda function's event source options to reduce the number of errorless records that are sent to the dead-letter queue. Which solution will meet these requirements?",
      "options": [
        "Increase the retry attempts.",
        "Configure the setting to split the batch when an error occurs.",
        "Increase the concurrent batches per shard.",
        "Decrease the maximum age of record."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_249",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company plans to use Amazon CloudWatch to monitor its Amazon EC2 instances. The company needs to stop EC2 instances when the average of the NetworkPacketsIn metric is less than 5 for at least 3 hours in a 12-hour time window. The company must evaluate the metric every hour. The EC2 instances must continue to run if there is missing data for the NetworkPacketsIn metric during the evaluation period. A DevOps engineer creates a CloudWatch alarm for the NetworkPacketsIn metric. The DevOps engineer configures a threshold value of 5 and an evaluation period of 1 hour. Which set of additional actions should the DevOps engineer take to meet these requirements?",
      "options": [
        "Configure the Datapoints to Alarm value to be 3 out of 12. Configure the alarm to treat missing data as breaching the threshold. Add an AWS Systems Manager action to stop the instance when the alarm enters the ALARM state.",
        "Configure the Datapoints to Alarm value to be 3 out of 12. Configure the alarm to treat missing data as not breaching the threshold. Add an EC2 action to stop the instance when the alarm enters the ALARM state.",
        "Configure the Datapoints to Alarm value to be 9 out of 12. Configure the alarm to treat missing data as breaching the threshold. Add an EC2 action to stop the instance when the alarm enters the ALARM state.",
        "Configure the Datapoints to Alarm value to be 9 out of 12. Configure the alarm to treat missing data as not breaching the threshold. Add an AWS Systems Manager action to stop the instance when the alarm enters the ALARM state."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_250",
      "batch": "Batch 5",
      "type": "single",
      "prompt": "A company manages 500 AWS accounts that are in an organization in AWS Organizations. The company discovers many unattached Amazon Elastic Block Store (Amazon EBS) volumes in all the accounts. The company wants to automatically tag the unattached EBS volumes for investigation. A DevOps engineer needs to deploy an AWS Lambda function to all the AWS accounts. The Lambda function must run every 30 minutes to tag all the EBS volumes that have been unattached for a period of 7 days or more. Which solution will meet these requirements in the MOST operationally efficient manner?",
      "options": [
        "Configure a delegated administrator account for the organization. Create an AWS CloudFormation template that contains the Lambda function. Use CloudFormation StackSets to deploy the CloudFormation template from the delegated administrator account to all the member accounts in the organization. Create an Amazon EventBridge event bus in the delegated administrator account to invoke the Lambda function in each member account every 30 minutes.",
        "Create a cross-account IAM role in the organization's member accounts. Attach the AWSLambda_FullAccess policy and the AWSCloudFormationFullAccess policy to the role. Create an AWS CloudFormation template that contains the Lambda function and an Amazon EventBridge scheduled rule to invoke the Lambda function every 30 minutes. Create a custom script in the organization’s management account that assumes the role and deploys the CloudFormation template to the member accounts.",
        "Configure a delegated administrator account for the organization. Create an AWS CloudFormation template that contains the Lambda function and an Amazon EventBridge scheduled rule to invoke the Lambda function every 30 minutes. Use CloudFormation StackSets to deploy the CloudFormation template from the delegated administrator account to all the member accounts in the organization",
        "Create a cross-account IAM role in the organization's member accounts. Attach the AmazonS3FullAccess policy and the AWSCodeDeployDeployerAccess policy to the role. Use AWS CodeDeploy to assume the role to deploy the Lambda function from the organization's management account. Configure an Amazon EventBridge scheduled rule in the member accounts to invoke the Lambda function every 30 minutes."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_251",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company's production environment uses an AWS CodeDeploy blue/green deployment to deploy an application. The deployment incudes Amazon EC2 Auto Scaling groups that launch instances that run Amazon Linux 2. A working appspec.yml file exists in the code repository and contains the following text: A DevOps engineer needs to ensure that a script downloads and installs a license file onto the instances before the replacement instances start to handle request traffic. The DevOps engineer adds a hooks section to the appspec.yml file. Which hook should the DevOps engineer use to run the script that downloads and installs the license file?",
      "options": [
        "AfterBlockTraffic",
        "BeforeBlockTraffic",
        "BeforeInstall",
        "DownloadBundle"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_252",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company has an application that includes AWS Lambda functions. The Lambda functions run Python code that is stored in an AWS CodeCommit repository. The company has recently experienced failures in the production environment because of an error in the Python code. An engineer has written unit tests for the Lambda functions to help avoid releasing any future defects into the production environment. The company's DevOps team needs to implement a solution to integrate the unit tests into an existing AWS CodePipeline pipeline. The solution must produce reports about the unit tests for the company to view. Which solution will meet these requirements?",
      "options": [
        "Associate the CodeCommit repository with Amazon CodeGuru Reviewer. Create a new AWS CodeBuild project. In the CodePipeline pipeline, configure a test stage that uses the new CodeBuild project. Create a buildspec.yml file in the CodeCommit repository. In the buildspec yml file, define the actions to run a CodeGuru review.",
        "Create a new AWS CodeBuild project. In the CodePipeline pipeline, configure a test stage that uses the new CodeBuild project. Create a CodeBuild report group. Create a buildspec.yml file in the CodeCommit repository. In the buildspec.yml file, define the actions to run the unit tests with an output of JUNITXML in the build phase section. Configure the test reports to be uploaded to the new CodeBuild report group.",
        "Create a new AWS CodeArtifact repository. Create a new AWS CodeBuild project. In the CodePipeline pipeline, configure a test stage that uses the new CodeBuild project. Create an appspec.yml file in the original CodeCommit repository. In the appspec.yml file, define the actions to run the unit tests with an output of CUCUMBERJSON in the build phase section. Configure the tests reports to be sent to the new CodeArtifact repository.",
        "Create a new AWS CodeBuild project. In the CodePipeline pipeline, configure a test stage that uses the new CodeBuild project. Create a new Amazon S3 bucket. Create a buildspec.yml file in the CodeCommit repository. In the buildspec yml file, define the actions to run the unit tests with an output of HTML in the phases section. In the reports section, upload the test reports to the S3 bucket."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_253",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company manages a multi-tenant environment in its VPC and has configured Amazon GuardDuty for the corresponding AWS account. The company sends all GuardDuty findings to AWS Security Hub. Traffic from suspicious sources is generating a large number of findings. A DevOps engineer needs to implement a solution to automatically deny traffic across the entire VPC when GuardDuty discovers a new suspicious source. Which solution will meet these requirements?",
      "options": [
        "Create a GuardDuty threat list. Configure GuardDuty to reference the list. Create an AWS Lambda function that will update the threat list. Configure the Lambda function to run in response to new Security Hub findings that come from GuardDuty.",
        "Configure an AWS WAF web ACL that includes a custom rule group. Create an AWS Lambda function that will create a block rule in the custom rule group. Configure the Lambda function to run in response to new Security Hub findings that come from GuardDuty.",
        "Configure a firewall in AWS Network Firewall. Create an AWS Lambda function that will create a Drop action rule in the firewall policy. Configure the Lambda function to run in response to new Security Hub findings that come from GuardDuty.",
        "Create an AWS Lambda function that will create a GuardDuty suppression rule. Configure the Lambda function to run in response to new Security Hub findings that come from GuardDuty."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_254",
      "batch": "Batch 6",
      "type": "multiple",
      "prompt": "A company uses AWS Secrets Manager to store a set of sensitive API keys that an AWS Lambda function uses. When the Lambda function is invoked the Lambda function retrieves the API keys and makes an API call to an external service. The Secrets Manager secret is encrypted with the default AWS Key Management Service (AWS KMS) key. A DevOps engineer needs to update the infrastructure to ensure that only the Lambda function’s execution role can access the values in Secrets Manager. The solution must apply the principle of least privilege. Which combination of steps will meet these requirements? (Choose two.)",
      "options": [
        "Update the default KMS key for Secrets Manager to allow only the Lambda function’s execution role to decrypt",
        "Create a KMS customer managed key that trusts Secrets Manager and allows the Lambda function's execution role to decrypt. Update Secrets Manager to use the new customer managed key",
        "Create a KMS customer managed key that trusts Secrets Manager and allows the account's root principal to decrypt. Update Secrets Manager to use the new customer managed key",
        "Ensure that the Lambda function’s execution role has the KMS permissions scoped on the resource level. Configure the permissions so that the KMS key can encrypt the Secrets Manager secret",
        "Remove all KMS permissions from the Lambda function’s execution role"
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_255",
      "batch": "Batch 6",
      "type": "multiple",
      "prompt": "A company's DevOps engineer is creating an AWS Lambda function to process notifications from an Amazon Simple Notification Service (Amazon SNS) topic. The Lambda function will process the notification messages and will write the contents of the notification messages to an Amazon RDS Multi-AZ DB instance. During testing, a database administrator accidentally shut down the DB instance. While the database was down the company lost several of the SNS notification messages that were delivered during that time. The DevOps engineer needs to prevent the loss of notification messages in the future. Which solutions will meet this requirement? (Choose two.)",
      "options": [
        "Replace the RDS Multi-AZ DB instance with an Amazon DynamoDB table.",
        "Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination of the Lambda function.",
        "Configure an Amazon Simple Queue Service (Amazon SQS) dead-letter queue for the SNS topic.",
        "Subscribe an Amazon Simple Queue Service (Amazon SQS) queue to the SNS topic. Configure the Lambda function to process messages from the SQS queue.",
        "Replace the SNS topic with an Amazon EventBridge event bus. Configure an EventBridge rule on the new event bus to invoke the Lambda function for each event."
      ],
      "correctAnswers": [
        2,
        3
      ],
      "explanation": "Correct Answer: CD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_256",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company has an application that runs on Amazon EC2 instances. The company uses an AWS CodePipeline pipeline to deploy the application into multiple AWS Regions. The pipeline is configured with a stage for each Region. Each stage contains an AWS CloudFormation action for each Region. When the pipeline deploys the application to a Region, the company wants to confirm that the application is in a healthy state before the pipeline moves on to the next Region. Amazon Route 53 record sets are configured for the application in each Region. A DevOps engineer creates a Route 53 health check that is based on an Amazon CloudWatch alarm for each Region where the application is deployed. What should the DevOps engineer do next to meet the requirements?",
      "options": [
        "Create an AWS Step Functions workflow to check the state of the CloudWatch alarm. Configure the Step Functions workflow to exit with an error if the alarm is in the ALARM state. Create a new stage in the pipeline between each Region deployment stage. In each new stage, include an action to invoke the Step Functions workflow.",
        "Configure an AWS CodeDeploy application to deploy a CloudFormation template with automatic rollback. Configure the CloudWatch alarm as the instance health check for the CodeDeploy application. Remove the CloudFormation actions from the pipeline. Create a CodeDeploy action in the pipeline stage for each Region.",
        "Create a new pipeline stage for each Region where the application is deployed. Configure a CloudWatch alarm action for the new stage to check the state of the CloudWatch alarm and to exit with an error if the alarm is in the ALARM state",
        "Configure the CloudWatch agent on the EC2 instances to report the application status to the Route 53 health check. Create a new pipeline stage for each Region where the application is deployed. Configure a CloudWatch alarm action to exit with an error if the CloudWatch alarm is in the ALARM state."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_257",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company is using AWS to run digital workloads. Each application team in the company has its own AWS account for application hosting. The accounts are consolidated in an organization in AWS Organizations. The company wants to enforce security standards across the entire organization. To avoid noncompliance because of security misconfiguration, the company has enforced the use of AWS CloudFormation. A production support team can modify resources in the production environment by using the AWS Management Console to troubleshoot and resolve application-related issues. A DevOps engineer must implement a solution to identify in near real time any AWS service misconfiguration that results in noncompliance. The solution must automatically remediate the issue within 15 minutes of identification. The solution also must track noncompliant resources and events in a centralized dashboard with accurate timestamps. Which solution will meet these requirements with the LEAST development overhead?",
      "options": [
        "Use CloudFormation drift detection to identify noncompliant resources. Use drift detection events from CloudFormation to invoke an AWS Lambda function for remediation. Configure the Lambda function to publish logs to an Amazon CloudWatch Logs log group. Configure an Amazon CloudWatch dashboard to use the log group for tracking.",
        "Turn on AWS CloudTrail in the AWS accounts. Analyze CloudTrail logs by using Amazon Athena to identify noncompliant resources. Use AWS Step Functions to track query results on Athena for drift detection and to invoke an AWS Lambda function for remediation. For tracking, set up an Amazon QuickSight dashboard that uses Athena as the data source.",
        "Turn on the configuration recorder in AWS Config in all the AWS accounts to identify noncompliant resources. Enable AWS Security Hub with the --no-enable-default-standards option in all the AWS accounts. Set up AWS Config managed rules and custom rules. Set up automatic remediation by using AWS Config conformance packs. For tracking, set up a dashboard on Security Hub in a designated Security Hub administrator account.",
        "Turn on AWS CloudTrail in the AWS accounts. Analyze CloudTrail logs by using Amazon CloudWatch Logs to identify noncompliant resources. Use CloudWatch Logs filters for drift detection. Use Amazon EventBridge to invoke the Lambda function for remediation. Stream filtered CloudWatch logs to Amazon OpenSearch Service. Set up a dashboard on OpenSearch Service for tracking."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_258",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company uses AWS Organizations to manage its AWS accounts. The organization root has an OU that is named Environments. The Environments OU has two child OUs that are named Development and Production, respectively. The Environments OU and the child OUs have the default FullAWSAccess policy in place. A DevOps engineer plans to remove the FullAWSAccess policy from the Development OU and replace the policy with a policy that allows all actions on Amazon EC2 resources. What will be the outcome of this policy replacement?",
      "options": [
        "All users in the Development OU will be allowed all API actions on all resources.",
        "All users in the Development OU will be allowed all API actions on EC2 resources. All other API actions will be denied.",
        "All users in the Development OU will be denied all API actions on all resources.",
        "All users in the Development OU will be denied all API actions on EC2 resources. All other API actions will be allowed."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_259",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company is examining its disaster recovery capability and wants the ability to switch over its daily operations to a secondary AWS Region. The company uses AWS CodeCommit as a source control tool in the primary Region. A DevOps engineer must provide the capability for the company to develop code in the secondary Region. If the company needs to use the secondary Region, developers can add an additional remote URL to their local Git configuration. Which solution will meet these requirements?",
      "options": [
        "Create a CodeCommit repository in the secondary Region. Create an AWS CodeBuild project to perform a Git mirror operation of the primary Region's CodeCommit repository to the secondary Region's CodeCommit repository. Create an AWS Lambda function that invokes the CodeBuild project. Create an Amazon EventBridge rule that reacts to merge events in the primary Region's CodeCommit repository. Configure the EventBridge rule to invoke the Lambda function.",
        "Create an Amazon S3 bucket in the secondary Region. Create an AWS Fargate task to perform a Git mirror operation of the primary Region's CodeCommit repository and copy the result to the S3 bucket. Create an AWS Lambda function that initiates the Fargate task. Create an Amazon EventBridge rule that reacts to merge events in the CodeCommit repository. Configure the EventBridge rule to invoke the Lambda function.",
        "Create an AWS CodeArtifact repository in the secondary Region. Create an AWS CodePipeline pipeline that uses the primary Region’s CodeCommit repository for the source action. Create a cross-Region stage in the pipeline that packages the CodeCommit repository contents and stores the contents in the CodeArtifact repository when a pull request is merged into the CodeCommit repository.",
        "Create an AWS Cloud9 environment and a CodeCommit repository in the secondary Region. Configure the primary Region's CodeCommit repository as a remote repository in the AWS Cloud9 environment. Connect the secondary Region's CodeCommit repository to the AWS Cloud9 environment."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_260",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A DevOps team is merging code revisions for an application that uses an Amazon RDS Multi-AZ DB cluster for its production database. The DevOps team uses continuous integration to periodically verify that the application works. The DevOps team needs to test the changes before the changes are deployed to the production database. Which solution will meet these requirements?",
      "options": [
        "Use a buildspec file in AWS CodeBuild to restore the DB cluster from a snapshot of the production database, run integration tests, and drop the restored database after verification.",
        "Deploy the application to production. Configure an audit log of data control language (DCL) operations to capture database activities to perform if verification fails.",
        "Create a snapshot of the DB cluster before deploying the application. Use the Update requires:Replacement property on the DB instance in AWS CloudFormation to deploy the application and apply the changes.",
        "Ensure that the DB cluster is a Multi-AZ deployment. Deploy the application with the updates. Fail over to the standby instance if verification fails."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_261",
      "batch": "Batch 6",
      "type": "multiple",
      "prompt": "A DevOps engineer is working on a project that is hosted on Amazon Linux and has failed a security review. The DevOps manager has been asked to review the company buildspec.yaml file for an AWS CodeBuild project and provide recommendations. The buildspec.yaml file is configured as follows:",
      "options": [
        "Add a post-build command to remove the temporary files from the container before termination to ensure they cannot be seen by other CodeBuild users.",
        "Update the CodeBuild project role with the necessary permissions and then remove the AWS credentials from the environment variable.",
        "Store the DB_PASSWORD as a SecureString value in AWS Systems Manager Parameter Store and then remove the DB_PASSWORD from the environment variables.",
        "Move the environment variables to the ‘db-deploy-bucket’ Amazon S3 bucket add a prebuild stage to download, then export the variables.",
        "Use AWS Systems Manager run command versus scp and ssh commands directly to the instance.",
        "Scramble the environment variables using XOR followed by Base64, add a section to install, and then run XOR and Base64 to the build phase."
      ],
      "correctAnswers": [
        1,
        2,
        4
      ],
      "explanation": "Correct Answer: BCE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_262",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company has a legacy application. A DevOps engineer needs to automate the process of building the deployable artifact for the legacy application. The solution must store the deployable artifact in an existing Amazon S3 bucket for future deployments to reference. Which solution will meet these requirements in the MOST operationally efficient way?",
      "options": [
        "Create a custom Docker image that contains all the dependencies for the legacy application. Store the custom Docker image in a new Amazon Elastic Container Registry (Amazon ECR) repository. Configure a new AWS CodeBuild project to use the custom Docker image to build the deployable artifact and to save the artifact to the S3 bucket.",
        "Launch a new Amazon EC2 instance. Install all the dependencies for the legacy application on the EC2 instance. Use the EC2 instance to build the deployable artifact and to save the artifact to the S3 bucket.",
        "Create a custom EC2 Image Builder image. Install all the dependencies for the legacy application on the image. Launch a new Amazon EC2 instance from the image. Use the new EC2 instance to build the deployable artifact and to save the artifact to the S3 bucket.",
        "Create an Amazon Elastic Kubernetes Service (Amazon EKS) cluster with an AWS Fargate profile that runs in multiple Availability Zones. Create a custom Docker image that contains all the dependencies for the legacy application. Store the custom Docker image in a new Amazon Elastic Container Registry (Amazon ECR) repository. Use the custom Docker image inside the EKS cluster to build the deployable artifact and to save the artifact to the S3 bucket."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_263",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company builds a container image in an AWS CodeBuild project by running Docker commands. After the container image is built, the CodeBuild project uploads the container image to an Amazon S3 bucket. The CodeBuild project has an IAM service role that has permissions to access the S3 bucket. A DevOps engineer needs to replace the S3 bucket with an Amazon Elastic Container Registry (Amazon ECR) repository to store the container images. The DevOps engineer creates an ECR private image repository in the same AWS Region of the CodeBuild project. The DevOps engineer adjusts the IAM service role with the permissions that are necessary to work with the new ECR repository. The DevOps engineer also places new repository information into the docker build command and the docker push command that are used in the buildspec.yml file. When the CodeBuild project runs a build job, the job fails when the job tries to access the ECR repository. Which solution will resolve the issue of failed access to the ECR repository?",
      "options": [
        "Update the buildspec.yml file to log in to the ECR repository by using the aws ecr get-login-password AWS CLI command to obtain an authentication token. Update the docker login command to use the authentication token to access the ECR repository.",
        "Add an environment variable of type SECRETS_MANAGER to the CodeBuild project. In the environment variable, include the ARN of the CodeBuild project's IAM service role. Update the buildspec.yml file to use the new environment variable to log in with the docker login command to access the ECR repository.",
        "Update the ECR repository to be a public image repository. Add an ECR repository policy that allows the IAM service role to have access.",
        "Update the buildspec.yml file to use the AWS CLI to assume the IAM service role for ECR operations. Add an ECR repository policy that allows the IAM service role to have access."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_264",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company manually provisions IAM access for its employees. The company wants to replace the manual process with an automated process. The company has an existing Active Directory system configured with an external SAML 2.0 identity provider (IdP). The company wants employees to use their existing corporate credentials to access AWS. The groups from the existing Active Directory system must be available for permission management in AWS Identity and Access Management (IAM). A DevOps engineer has completed the initial configuration of AWS IAM Identity Center (AWS Single Sign-On) in the company’s AWS account. What should the DevOps engineer do next to meet the requirements?",
      "options": [
        "Configure an external IdP as an identity source. Configure automatic provisioning of users and groups by using the SCIM protocol.",
        "Configure AWS Directory Service as an identity source. Configure automatic provisioning of users and groups by using the SAML protocol.",
        "Configure an AD Connector as an identity source. Configure automatic provisioning of users and groups by using the SCIM protocol.",
        "Configure an external IdP as an identity source Configure automatic provisioning of users and groups by using the SAML protocol."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_265",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A global company manages multiple AWS accounts by using AWS Control Tower. The company hosts internal applications and public applications. Each application team in the company has its own AWS account for application hosting. The accounts are consolidated in an organization in AWS Organizations. One of the AWS Control Tower member accounts serves as a centralized DevOps account with CI/CD pipelines that application teams use to deploy applications to their respective target AWS accounts. An IAM role for deployment exists in the centralized DevOps account. An application team is attempting to deploy its application to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster in an application AWS account. An IAM role for deployment exists in the application AWS account. The deployment is through an AWS CodeBuild project that is set up in the centralized DevOps account. The CodeBuild project uses an IAM service role for CodeBuild. The deployment is failing with an Unauthorized error during attempts to connect to the cross-account EKS cluster from CodeBuild. Which solution will resolve this error?",
      "options": [
        "Configure the application account’s deployment IAM role to have a trust relationship with the centralized DevOps account. Configure the trust relationship to allow the sts:AssumeRole action. Configure the application account’s deployment IAM role to have the required access to the EKS cluster. Configure the EKS cluster aws-auth ConfigMap to map the role to the appropriate system permissions.",
        "Configure the centralized DevOps account’s deployment IAM role to have a trust relationship with the application account. Configure the trust relationship to allow the sts:AssumeRole action. Configure the centralized DevOps account’s deployment IAM role to allow the required access to CodeBuild.",
        "Configure the centralized DevOps account’s deployment IAM role to have a trust relationship with the application account. Configure the trust relationship to allow the sts:AssumeRoleWithSAML action. Configure the centralized DevOps account’s deployment IAM role to allow the required access to CodeBuild.",
        "Configure the application account’s deployment IAM role to have a trust relationship with the AWS Control Tower management account. Configure the trust relationship to allow the sts:AssumeRole action. Configure the application account’s deployment IAM role to have the required access to the EKS cluster. Configure the EKS cluster aws-auth ConfigMap to map the role to the appropriate system permissions."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_266",
      "batch": "Batch 6",
      "type": "multiple",
      "prompt": "A company updated the AWS CloudFormation template for a critical business application. The stack update process failed due to an error in the updated template, and AWS CloudFormation automatically began the stack rollback process. Later, a DevOps engineer discovered that the application was still unavailable and that the stack was in the UPDATE_ROLLBACK_FAILED state. Which combination of actions should the DevOps engineer perform so that the stack rollback can complete successfully? (Choose two.)",
      "options": [
        "Attach the AWSCIoudFormationFullAccess IAM policy to the AWS CloudFormation role.",
        "Automatically recover the stack resources by using AWS CloudFormation drift detection.",
        "Issue a ContinueUpdateRollback command from the AWS CloudFormation console or the AWS CLI.",
        "Manually adjust the resources to match the expectations of the stack.",
        "Update the existing AWS CloudFormation stack by using the original template."
      ],
      "correctAnswers": [
        2,
        3
      ],
      "explanation": "Correct Answer: CD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_267",
      "batch": "Batch 6",
      "type": "multiple",
      "prompt": "A development team manually builds an artifact locally and then places it in an Amazon S3 bucket. The application has a local cache that must be cleared when a deployment occurs. The team executes a command to do this, downloads the artifact from Amazon S3, and unzips the artifact to complete the deployment. A DevOps team wants to migrate to a CI/CD process and build in checks to stop and roll back the deployment when a failure occurs. This requires the team to track the progression of the deployment. Which combination of actions will accomplish this? (Choose three.)",
      "options": [
        "Allow developers to check the code into a code repository. Using Amazon CloudWatch Events, on every pull into master, trigger an AWS Lambda function to build the artifact and store it in Amazon S3.",
        "Create a custom script to clear the cache. Specify the script in the BeforeInstall lifecycle hook in the AppSpec file.",
        "Create user data for each Amazon EC2 instance that contains the clear cache script. Once deployed, test the application. If it is not successful, deploy it again.",
        "Set up AWS CodePipeline to deploy the application. Allow developers to check the code into a code repository as a source for the pipeline.",
        "Use AWS CodeBuild to build the artifact and place it in Amazon S3. Use AWS CodeDeploy to deploy the artifact to Amazon EC2 instances.",
        "Use AWS Systems Manager to fetch the artifact from Amazon S3 and deploy it to all the instances."
      ],
      "correctAnswers": [
        1,
        3,
        4
      ],
      "explanation": "Correct Answer: BDE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_268",
      "batch": "Batch 6",
      "type": "multiple",
      "prompt": "A company is building a new pipeline by using AWS CodePipeline and AWS CodeBuild in a build account. The pipeline consists of two stages. The first stage is a CodeBuild job to build and package an AWS Lambda function. The second stage consists of deployment actions that operate on two different AWS accounts: a development environment account and a production environment account. The deployment stages use the AWS CloudFormation action that CodePipeline invokes to deploy the infrastructure that the Lambda function requires. A DevOps engineer creates the CodePipeline pipeline and configures the pipeline to encrypt build artifacts by using the AWS Key Management Service (AWS KMS) AWS managed key for Amazon S3 (the aws/s3 key). The artifacts are stored in an S3 bucket. When the pipeline runs, the CloudFormation actions fail with an access denied error. Which combination of actions must the DevOps engineer perform to resolve this error? (Choose two.)",
      "options": [
        "Create an S3 bucket in each AWS account for the artifacts. Allow the pipeline to write to the S3 buckets. Create a CodePipeline S3 action to copy the artifacts to the S3 bucket in each AWS account. Update the CloudFormation actions to reference the artifacts S3 bucket in the production account.",
        "Create a customer managed KMS key. Configure the KMS key policy to allow the IAM roles used by the CloudFormation action to perform decrypt operations. Modify the pipeline to use the customer managed KMS key to encrypt artifacts.",
        "Create an AWS managed KMS key. Configure the KMS key policy to allow the development account and the production account to perform decrypt operations. Modify the pipeline to use the KMS key to encrypt artifacts.",
        "In the development account and in the production account, create an IAM role for CodePipeline. Configure the roles with permissions to perform CloudFormation operations and with permissions to retrieve and decrypt objects from the artifacts S3 bucket. In the CodePipeline account, configure the CodePipeline CloudFormation action to use the roles.",
        "In the development account and in the production account, create an IAM role for CodePipeline. Configure the roles with permissions to perform CloudFormation operations and with permissions to retrieve and decrypt objects from the artifacts S3 bucket. In the CodePipeline account, modify the artifacts S3 bucket policy to allow the roles access. Configure the CodePipeline CloudFormation action to use the roles."
      ],
      "correctAnswers": [
        1,
        4
      ],
      "explanation": "Correct Answer: BE",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_269",
      "batch": "Batch 6",
      "type": "multiple",
      "prompt": "A company is using an organization in AWS Organizations to manage multiple AWS accounts. The company's development team wants to use AWS Lambda functions to meet resiliency requirements and is rewriting all applications to work with Lambda functions that are deployed in a VPC. The development team is using Amazon Elastic File System (Amazon EFS) as shared storage in Account A in the organization. The company wants to continue to use Amazon EFS with Lambda. Company policy requires all serverless projects to be deployed in Account B. A DevOps engineer needs to reconfigure an existing EFS file system to allow Lambda functions to access the data through an existing EFS access point. Which combination of steps should the DevOps engineer take to meet these requirements? (Choose three.)",
      "options": [
        "Update the EFS file system policy to provide Account B with access to mount and write to the EFS file system in Account",
        "Create SCPs to set permission guardrails with fine-grained control for Amazon EFS.",
        "Create a new EFS file system in Account B. Use AWS Database Migration Service (AWS DMS) to keep data from Account A and Account B synchronized.",
        "Update the Lambda execution roles with permission to access the VPC and the EFS file system.",
        "Create a VPC peering connection to connect Account A to Account B.",
        "Configure the Lambda functions in Account B to assume an existing IAM role in Account A."
      ],
      "correctAnswers": [
        0,
        3,
        4
      ],
      "explanation": "Correct Answer: ADE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_270",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A media company has several thousand Amazon EC2 instances in an AWS account. The company is using Slack and a shared email inbox for team communications and important updates. A DevOps engineer needs to send all AWS- scheduled EC2 maintenance notifications to the Slack channel and the shared inbox. The solution must include the instances' Name and Owner tags. Which solution will meet these requirements?",
      "options": [
        "Integrate AWS Trusted Advisor with AWS Config. Configure a custom AWS Config rule to invoke an AWS Lambda function to publish notifications to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe a Slack channel endpoint and the shared inbox to the topic.",
        "Use Amazon EventBridge to monitor for AWS Health events. Configure the maintenance events to target an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe an AWS Lambda function to the SNS topic to send notifications to the Slack channel and the shared inbox.",
        "Create an AWS Lambda function that sends EC2 maintenance notifications to the Slack channel and the shared inbox. Monitor EC2 health events by using Amazon CloudWatch metrics. Configure a CloudWatch alarm that invokes the Lambda function when a maintenance notification is received.",
        "Configure AWS Support integration with AWS CloudTrail. Create a CloudTrail lookup event to invoke an AWS Lambda function to pass EC2 maintenance notifications to Amazon Simple Notification Service (Amazon SNS). Configure Amazon SNS to target the Slack channel and the shared inbox."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_271",
      "batch": "Batch 6",
      "type": "multiple",
      "prompt": "A company is storing 100 GB of log data in .csv format in an Amazon S3 bucket. SQL developers want to query this data and generate graphs to visualize it. The SQL developers also need an efficient, automated way to store metadata from the .csv file. Which combination of steps will meet these requirements with the LEAST amount of effort? (Choose three.)",
      "options": [
        "Filter the data through AWS X-Ray to visualize the data.",
        "Filter the data through Amazon QuickSight to visualize the data.",
        "Query the data with Amazon Athena.",
        "Query the data with Amazon Redshift.",
        "Use the AWS Glue Data Catalog as the persistent metadata store.",
        "Use Amazon DynamoDB as the persistent metadata store."
      ],
      "correctAnswers": [
        1,
        2,
        4
      ],
      "explanation": "Correct Answer: BCE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_272",
      "batch": "Batch 6",
      "type": "multiple",
      "prompt": "A company deploys its corporate infrastructure on AWS across multiple AWS Regions and Availability Zones. The infrastructure is deployed on Amazon EC2 instances and connects with AWS IoT Greengrass devices. The company deploys additional resources on on-premises servers that are located in the corporate headquarters. The company wants to reduce the overhead involved in maintaining and updating its resources. The company’s DevOps team plans to use AWS Systems Manager to implement automated management and application of patches. The DevOps team confirms that Systems Manager is available in the Regions that the resources are deployed in. Systems Manager also is available in a Region near the corporate headquarters. Which combination of steps must the DevOps team take to implement automated patch and configuration management across the company’s EC2 instances, IoT devices, and on-premises infrastructure? (Choose three.)",
      "options": [
        "Apply tags to all the EC2 instances, AWS IoT Greengrass devices, and on-premises servers. Use Systems Manager Session Manager to push patches to all the tagged devices.",
        "Use Systems Manager Run Command to schedule patching for the EC2 instances, AWS IoT Greengrass devices, and on- premises servers.",
        "Use Systems Manager Patch Manager to schedule patching for the EC2 instances, AWS IoT Greengrass devices, and on- premises servers as a Systems Manager maintenance window task.",
        "Configure Amazon EventBridge to monitor Systems Manager Patch Manager for updates to patch baselines. Associate Systems Manager Run Command with the event to initiate a patch action for all EC2 instances, AWS IoT Greengrass devices, and on-premises servers.",
        "Create an IAM instance profile for Systems Manager. Attach the instance profile to all the EC2 instances in the AWS account. For the AWS IoT Greengrass devices and on-premises servers, create an IAM service role for Systems Manager.",
        "Generate a managed-instance activation. Use the Activation Code and Activation ID to install Systems Manager Agent (SSM Agent) on each server in the on-premises environment. Update the AWS IoT Greengrass IAM token exchange role. Use the role to deploy SSM Agent on all the IoT devices."
      ],
      "correctAnswers": [
        2,
        4,
        5
      ],
      "explanation": "Correct Answer: CEF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_273",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company is testing a web application that runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The company uses a blue/green deployment process with immutable instances when deploying new software. During testing, users are being automatically logged out of the application at random times. Testers also report that, when a new version of the application is deployed, all users are logged out. The development team needs a solution to ensure users remain logged in across scaling events and application deployments. What is the MOST operationally efficient way to ensure users remain logged in?",
      "options": [
        "Enable smart sessions on the load balancer and modify the application to check for an existing session.",
        "Enable session sharing on the load balancer and modify the application to read from the session store.",
        "Store user session information in an Amazon S3 bucket and modify the application to read session information from the bucket.",
        "Modify the application to store user session information in an Amazon ElastiCache cluster."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_274",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A DevOps engineer needs to configure a blue/green deployment for an existing three-tier application. The application runs on Amazon EC2 instances and uses an Amazon RDS database. The EC2 instances run behind an Application Load Balancer (ALB) and are in an Auto Scaling group. The DevOps engineer has created a launch template and an Auto Scaling group for the blue environment. The DevOps engineer also has created a launch template and an Auto Scaling group for the green environment. Each Auto Scaling group deploys to a matching blue or green target group. The target group also specifies which software, blue or green, gets loaded on the EC2 instances. The ALB can be configured to send traffic to the blue environment’s target group or the green environment’s target group. An Amazon Route 53 record for www.example.com points to the ALB. The deployment must move traffic all at once between the software on the blue environment’s EC2 instances to the newly deployed software on the green environment’s EC2 instances. What should the DevOps engineer do to meet these requirements?",
      "options": [
        "Start a rolling restart of the Auto Scaling group for the green environment to deploy the new software on the green environment’s EC2 instances. When the rolling restart is complete, use an AWS CLI command to update the ALB to send traffic to the green environment’s target group.",
        "Use an AWS CLI command to update the ALB to send traffic to the green environment’s target group. Then start a rolling restart of the Auto Scaling group for the green environment to deploy the new software on the green environment’s EC2 instances.",
        "Update the launch template to deploy the green environment’s software on the blue environment’s EC2 instances. Keep the target groups and Auto Scaling groups unchanged in both environments. Perform a rolling restart of the blue environment’s EC2 instances.",
        "Start a rolling restart of the Auto Scaling group for the green environment to deploy the new software on the green environment’s EC2 instances. When the rolling restart is complete, update the Route 53 DNS to point to the green environment’s endpoint on the ALB."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_275",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company has a data ingestion application that runs across multiple AWS accounts. The accounts are in an organization in AWS Organizations. The company needs to monitor the application and consolidate access to the application. Currently, the company is running the application on Amazon EC2 instances from several Auto Scaling groups. The EC2 instances have no access to the internet because the data is sensitive. Engineers have deployed the necessary VPC endpoints. The EC2 instances run a custom AMI that is built specifically for the application. To maintain and troubleshoot the application, system administrators need the ability to log in to the EC2 instances. This access must be automated and controlled centrally. The company's security team must receive a notification whenever the instances are accessed. Which solution will meet these requirements?",
      "options": [
        "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to send notifications to the security team whenever a user logs in to an EC2 instance. Use EC2 Instance Connect to log in to the instances. Deploy Auto Scaling groups by using AWS CloudFormation. Use the cfn-init helper script to deploy appropriate VPC routes for external access. Rebuild the custom AMI so that the custom AMI includes AWS Systems Manager Agent.",
        "Deploy a NAT gateway and a bastion host that has internet access. Create a security group that allows incoming traffic on all the EC2 instances from the bastion host. Install AWS Systems Manager Agent on all the EC2 instances. Use Auto Scaling group lifecycle hooks for monitoring and auditing access. Use Systems Manager Session Manager to log in to the instances. Send logs to a log group in Amazon CloudWatch Logs. Export data to Amazon 83 for auditing. Send notifications to the security team by using S3 event notifications.",
        "Use EC2 Image Builder to rebuild the custom AMI. Include the most recent version of AWS Systems Manager Agent in the image. Configure the Auto Scaling group to attach the AmazonSSMManagedlnstanceCore role to all the EC2 instances. Use Systems Manager Session Manager to log in to the instances. Enable logging of session details to Amazon S3. Create an S3 notification for new file uploads to send a message to the security team through an Amazon Simple Notification Service (Amazon SNS) topic.",
        "Use AWS Systems Manager Automation to build Systems Manager Agent into the custom AMI. Configure AWS Config to attach an SCP to the root organization account to allow the EC2 instances to connect to Systems Manager. Use Systems Manager Session Manager to log in to the instances. Enable logging of session details to Amazon S3. Create an S3 notification for new file uploads to send a message to the security team through an Amazon Simple Notification Service (Amazon SNS) topic."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_276",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company uses Amazon S3 to store proprietary information. The Development team creates buckets for new projects on a daily basis. The Security team wants to ensure that all existing and future buckets have encryption, logging, and versioning enabled. Additionally, no buckets should ever be publicly read or write accessible. What should a DevOps Engineer do to meet these requirements?",
      "options": [
        "Enable AWS CloudTrail and configure automatic remediation using AWS Lambda.",
        "Enable AWS Config rules and configure automatic remediation using AWS Systems Manager documents.",
        "Enable AWS Trusted Advisor and configure automatic remediation using Amazon CloudWatch Events.",
        "Enable AWS Systems Manager and configure automatic remediation using Systems Manager documents."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_277",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A DevOps engineer is researching the least expensive way to implement an image batch processing cluster on AWS. The application cannot run in Docker containers and must run on Amazon EC2. The batch job stores checkpoint data on an NFS and can tolerate interruptions. Configuring the cluster software from a generic EC2 Linux image takes 30 minutes. What is the MOST cost-effective solution?",
      "options": [
        "Use Amazon EFS for checkpoint data. To complete the job, use an EC2 Auto Scaling group and an On-Demand pricing model to provision EC2 instances temporarily.",
        "Use GlusterFS on EC2 instances for checkpoint data. To run the batch job, configure EC2 instances manually. When the job completes, shut down the instances manually.",
        "Use Amazon EFS for checkpoint data. Use EC2 Fleet to launch EC2 Spot Instances, and utilize user data to configure the EC2 Linux instance on startup.",
        "Use Amazon EFS for checkpoint data. Use EC2 Fleet to launch EC2 Spot Instances. Create a custom AMI for the cluster and use the latest AMI when creating instances."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_278",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company recently migrated its legacy application from on-premises to AWS. The application is hosted on Amazon EC2 instances behind an Application Load Balancer, which is behind Amazon API Gateway. Thecompany wants to ensure users experience minimal disruptions during any deployment of a new version of the application. The company also wants to ensure it can quickly roll back updates if there is an issue. Which solution will meet these requirements with MINIMAL changes to the application?",
      "options": [
        "Introduce changes as a separate environment parallel to the existing one. Configure API Gateway to use a canary release deployment to send a small subset of user traffic to the new environment.",
        "Introduce changes as a separate environment parallel to the existing one. Update the application’s DNS alias records to point to the new environment.",
        "Introduce changes as a separate target group behind the existing Application Load Balancer. Configure API Gateway to route user traffic to the new target group in steps.",
        "Introduce changes as a separate target group behind the existing Application Load Balancer. Configure API Gateway to route all traffic to the Application Load Balancer, which then sends the traffic to the new target group."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_279",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A DevOps engineer has implemented a Cl/CD pipeline to deploy an AWS CloudFormation template that provisions a web application. The web application consists of an Application Load Balancer (ALB), a target group, a launch template that uses an Amazon Linux 2 AMI, an Auto Scaling group of Amazon EC2 instances, a security group, and an Amazon RDS for MySOL database. The launch template includes user data that specifies a script to install and start the application. The initial deployment of the application was successful. The DevOps engineer made changes to update the version of the application with the user data. The CI/CD pipeline has deployed a new version of the template. However, the health checks on the ALB are now failing. The health checks have marked all targets as unhealthy. During investigation, the DevOps engineer notices that the CloudFormation stack has a status of UPDATE_COMPLETE. However, when the DevOps engineer connects to one of the EC2 instances and checks /var/log/messages, the DevOps engineer notices that the Apache web server failed to start successfully because of a configuration error. How can the DevOps engineer ensure that the CloudFormation deployment will fail if the user data fails to successfully finish running?",
      "options": [
        "Use the cfn-signal helper script to signal success or failure to CloudFormation. Use the WaitOnResourceSignals update policy within the CloudFormation template. Set an appropriate timeout for the update policy.",
        "Create an Amazon CloudWatch alarm for the UnhealthyHostCount metric. Include an appropriate alarm threshold for the target group. Create an Amazon Simple Notification Service (Amazon SNS) topic as the target to signal success or failure to CloudFormation.",
        "Create a lifecycle hook on the Auto Scaling group by using the AWS::AutoScaling::LifecycleHook resource. Create an Amazon Simple Notification Service (Amazon SNS) topic as the target to signal success or failure to CloudFormation. Set an appropriate timeout on the lifecycle hook.",
        "Use the Amazon CloudWatch agent to stream the cloud-init logs. Create a subscription filter that includes an AWS Lambda function with an appropriate invocation timeout. Configure the Lambda function to use the SignalResource API operation to signal success or failure to CloudFormation."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_280",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A DevOps engineer used an AWS CloudFormation custom resource to set up AD Connector. The AWS Lambda function executed and created AD Connector, but CloudFormation is not transitioning from CREATE_IN_PROGRESS to CREATE_COMPLETE. Which action should the engineer take to resolve this issue?",
      "options": [
        "Ensure the Lambda function code has exited successfully.",
        "Ensure the Lambda function code returns a response to the pre-signed URL.",
        "Ensure the Lambda function IAM role has cloudformation:UpdateStack permissions for the stack ARN.",
        "Ensure the Lambda function IAM role has ds:ConnectDirectory permissions for the AWS account."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_281",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company uses AWS CodeCommit for source code control. Developers apply their changes to various feature branches and create pull requests to move those changes to the main branch when the changes are ready for production. The developers should not be able to push changes directly to the main branch. The company applied the AWSCodeCommitPowerUser managed policy to the developers’ IAM role, and now these developers can push changes to the main branch directly on every repository in the AWS account. What should the company do to restrict the developers’ ability to push changes to the main branch directly?",
      "options": [
        "Create an additional policy to include a Deny rule for the GitPush and PutFile actions. Include a restriction for the specific repositories in the policy statement with a condition that references the main branch.",
        "Remove the IAM policy, and add an AWSCodeCommitReadOnly managed policy. Add an Allow rule for the GitPush and PutFile actions for the specific repositories in the policy statement with a condition that references the main branch.",
        "Modify the IAM policy. Include a Deny rule for the GitPush and PutFile actions for the specific repositories in the policy statement with a condition that references the main branch.",
        "Create an additional policy to include an Allow rule for the GitPush and PutFile actions. Include a restriction for the specific repositories in the policy statement with a condition that references the feature branches."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_282",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A large enterprise is deploying a web application on AWS. The application runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Auto Scaling group across multiple Availability Zones. The application stores data in an Amazon RDS Oracle DB instance and Amazon DynamoDB. There are separate environments for development, testing, and production. What is the MOST secure and flexible way to obtain password credentials during deployment?",
      "options": [
        "Retrieve an access key from an AWS Systems Manager SecureString parameter to access AWS services. Retrieve the database credentials from a Systems Manager SecureString parameter.",
        "Launch the EC2 instances with an EC2 IAM role to access AWS services. Retrieve the database credentials from AWS Secrets Manager.",
        "Retrieve an access key from an AWS Systems Manager plaintext parameter to access AWS services. Retrieve the database credentials from a Systems Manager SecureString parameter.",
        "Launch the EC2 instances with an EC2 IAM role to access AWS services. Store the database passwords in an encrypted config file with the application artifacts."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_283",
      "batch": "Batch 6",
      "type": "multiple",
      "prompt": "A company recently created a new AWS Control Tower landing zone in a new organization in AWS Organizations. The landing zone must be able to demonstrate compliance with the Center for Internet Security (CIS) Benchmarks for AWS Foundations. The company’s security team wants to use AWS Security Hub to view compliance across all accounts. Only the security team can be allowed to view aggregated Security Hub findings. In addition, specific users must be able to view findings from their own accounts within the organization. All accounts must be enrolled in Security Hub after the accounts are created. Which combination of steps will meet these requirements in the MOST automated way? (Choose three.)",
      "options": [
        "Turn on trusted access for Security Hub in the organization’s management account. Create a new security account by using AWS Control Tower. Configure the new security account as the delegated administrator account for Security Hub. In the new security account, provide Security Hub with the CIS Benchmarks for AWS Foundations standards.",
        "Turn on trusted access for Security Hub in the organization’s management account. From the management account, provide Security Hub with the CIS Benchmarks for AWS Foundations standards.",
        "Create an AWS IAM Identity Center (AWS Single Sign-On) permission set that includes the required permissions. Use the CreateAccountAssignment API operation to associate the security team users with the permission set and with the delegated security account.",
        "Create an SCP that explicitly denies any user who is not on the security team from accessing Security Hub.",
        "In Security Hub, turn on automatic enablement.",
        "In the organization’s management account, create an Amazon EventBridge rule that reacts to the CreateManagedAccount event. Create an AWS Lambda function that uses the Security Hub CreateMembers API operation to add new accounts to Security Hub. Configure the EventBridge rule to invoke the Lambda function."
      ],
      "correctAnswers": [
        0,
        2,
        4
      ],
      "explanation": "Correct Answer: ACE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_284",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company runs applications in AWS accounts that are in an organization in AWS Organizations. The applications use Amazon EC2 instances and Amazon S3. The company wants to detect potentially compromised EC2 instances, suspicious network activity, and unusual API activity in its existing AWS accounts and in any AWS accounts that the company creates in the future. When the company detects one of these events, the company wants to use an existing Amazon Simple Notification Service (Amazon SNS) topic to send a notification to its operational support team for investigation and remediation. Which solution will meet these requirements in accordance with AWS best practices?",
      "options": [
        "In the organization's management account, configure an AWS account as the Amazon GuardDuty administrator account. In the GuardDuty administrator account, add the company's existing AWS accounts to GuardDuty as members. In the GuardDuty administrator account, create an Amazon EventBridge (Amazon CloudWatch Events) rule with an event pattern to match GuardDuty events and to forward matching events to the SNS topic.",
        "In the organization's management account, configure Amazon GuardDuty to add newly created AWS accounts by invitation and to send invitations to the existing AWS accounts. Create an AWS CloudFormation stack set that accepts the GuardDuty invitation and creates an Amazon EventBridge (Amazon CloudWatch Events) rule. Configure the rule with an event pattern to match GuardDuty events and to forward matching events to the SNS topic. Configure the CloudFormation stack set to deploy into all AWS accounts in the organization.",
        "In the organization's management account, create an AWS CloudTrail organization trail. Activate the organization trail in all AWS accounts in the organization. Create an SCP that enables VPC Flow Logs in each account in the organization Configure AWS Security Hub for the organization. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with an event pattern to match Security Hub events and to forward matching events to the SNS topic.",
        "In the organization's management account, configure an AWS account as the AWS CloudTrail administrator account. In the CloudTrail administrator account, create a CloudTrail organization trail. Add the company's existing AWS accounts to the organization trail. Create an SCP that enables VPC Flow Logs in each account in the organization. Configure AWS Security Hub for the organization. Create an Amazon EventBridge (Amazon CloudWatch Events) rule with an event pattern to match Security Hub events and to forward matching events to the SNS topic."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_285",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company’s DevOps engineer is working in a multi-account environment. The company uses AWS Transit Gateway to route all outbound traffic through a network operations account. In the network operations account, all account traffic passes through a firewall appliance for inspection before the traffic goes to an internet gateway. The firewall appliance sends logs to Amazon CloudWatch Logs and includes event severities of CRITICAL, HIGH, MEDIUM, LOW, and INFO. The security team wants to receive an alert if any CRITICAL events occur. What should the DevOps engineer do to meet these requirements?",
      "options": [
        "Create an Amazon CloudWatch Synthetics canary to monitor the firewall state. If the firewall reaches a CRITICAL state or logs a CRITICAL event, use a CloudWatch alarm to publish a notification to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the security team’s email address to the topic.",
        "Create an Amazon CloudWatch mettic filter by using a search for CRITICAL events. Publish a custom metric for the finding. Use a CloudWatch alarm based on the custom metric to publish a notification to an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe the security team’s email address to the topic.",
        "Enable Amazon GuardDuty in the network operations account. Configure GuardDuty to monitor flow logs. Create an Amazon EventBridge (Amazon CloudWatch Events) event rule that is invoked by GuardDuty events that are CRITICAL. Define an Amazon Simple Notification Service (Amazon SNS) topic as a target. Subscribe the security team’s email address to the topic.",
        "Use AWS Firewall Manager to apply consistent policies across all accounts. Create an Amazon EventBridge (Amazon CloudWatch Events) event rule that is invoked by Firewall Manager events that are CRITICAL. Define an Amazon Simple Notification Service (Amazon SNS) topic as a target. Subscribe the security team’s email address to the topic."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_286",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company is divided into teams. Each team has an AWS account, and all the accounts are in an organization in AWS Organizations. Each team must retain full administrative rights to its AWS account. Each team also must be allowed to access only AWS services that the company approves for use. AWS services must gain approval through a request and approval process. How should a DevOps engineer configure the accounts to meet these requirements?",
      "options": [
        "Use AWS CloudFormation StackSets to provision IAM policies in each account to deny access to restricted AWS services. In each account, configure AWS Config rules that ensure that the policies are attached to IAM principals in the account.",
        "Use AWS Control Tower to provision the accounts into OUs within the organization. Configure AWS Control Tower to enable AWS IAM Identity Center (AWS Single Sign-On). Configure IAM Identity Center to provide administrative access. Include deny policies on user roles for restricted AWS services.",
        "Place all the accounts under a new top-level OU within the organization. Create an SCP that denies access to restricted AWS services. Attach the SCP to the OU.",
        "Create an SCP that allows access to only approved AWS services. Attach the SCP to the root OU of the organization. Remove the FullAWSAccess SCP from the root OU of the organization."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_287",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company has an application that runs on Amazon EC2 instances that are in an Auto Scaling group. When the application starts up.the application needs to process data from an Amazon S3 bucket before the application can start to serve requests. The size of the data that is stored in the S3 bucket is growing. When the Auto Scaling group adds new instances, the application now takes several minutes to download and process the data before the application can serve requests. The company must reduce the time that elapses before new EC2 instances are ready to serve requests. Which solution is the MOST cost-effective way to reduce the application startup time?",
      "options": [
        "Configure a warm pool for the Auto Scaling group with warmed EC2 instances in the Stopped state. Configure an autoscaling:EC2_INSTANCE_LAUNCHING lifecycle hook on the Auto Scaling group. Modify the application to complete the lifecycle hook when the application is ready to serve requests.",
        "Increase the maximum instance count of the Auto Scaling group. Configure an autoscaling:EC2_INSTANCE_LAUNCHING lifecycle hook on the Auto Scaling group. Modify the application to complete the lifecycle hook when the application is ready to serve requests.",
        "Configure a warm pool for the Auto Scaling group with warmed EC2 instances in the Running state. Configure an autoscaling:EC2_INSTANCE_LAUNCHING lifecycle hook on the Auto Scaling group. Modify the application to complete the lifecycle hook when the application is ready to serve requests.",
        "Increase the maximum instance count of the Auto Scaling group. Configure an autoscaling:EC2_INSTANCE_LAUNCHING lifecycle hook on the Auto Scaling group. Modify the application to complete the lifecycle hook and to place the new instance in the Standby state when the application is ready to serve requests."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_288",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company is using Amazon S3 buckets to store important documents. The company discovers that some S3 buckets are not encrypted. Currently, the company’s IAM users can create new S3 buckets without encryption. The company is implementing a new requirement that all S3 buckets must be encrypted. A DevOps engineer must implement a solution to ensure that server-side encryption is enabled on all existing S3 buckets and all new S3 buckets. The encryption must be enabled on new S3 buckets as soon as the S3 buckets are created. The default encryption type must be 256-bit Advanced Encryption Standard (AES-256). Which solution will meet these requirements?",
      "options": [
        "Create an AWS Lambda function that is invoked periodically by an Amazon EventBridge scheduled rule. Program the Lambda function to scan all current S3 buckets for encryption status and to set AES-256 as the default encryption for any S3 bucket that does not have an encryption configuration.",
        "Set up and activate the s3-bucket-server-side-encryption-enabled AWS Config managed rule. Configure the rule to use the AWS-EnableS3BucketEncryption AWS Systems Manager Automation runbook as the remediation action. Manually run the re-evaluation process to ensure that existing S3 buckets are compliant.",
        "Create an AWS Lambda function that is invoked by an Amazon EventBridge event rule. Define the rule with an event pattern that matches the creation of new S3 buckets. Program the Lambda function to parse the EventBridge event, check the configuration of the S3 buckets from the event, and set AES-256 as the default encryption.",
        "Configure an IAM policy that denies the s3:CreateBucket action if the s3:x-amz-server-side-encryption condition key has a value that is not AES-256. Create an IAM group for all the company’s IAM users. Associate the IAM policy with the IAM group."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_289",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company has deployed an application in a production VPC in a single AWS account. The application is popular and is experiencing heavy usage. The company's security team wants to add additional security, such as AWS WAF, to the application deployment. However, the application's product manager is concerned about cost and does not want to approve the change unless the security team can prove that additional security is necessary. The security team believes that some of the application's demand might come from users that have IP addresses that are on a deny list. The security team provides the deny list to a DevOps engineer. If any of the IP addresses on the deny list access the application, the security team wants to receive automated notification in near real time so that the security team can document that the application needs additional security. The DevOps engineer creates a VPC flow log for the production VPC. Which set of additional steps should the DevOps engineer take to meet these requirements MOST cost-effectively?",
      "options": [
        "Create a log group in Amazon CloudWatch Logs. Configure the VPC flow log to capture accepted traffic and to send the data to the log group. Create an Amazon CloudWatch metric filter for IP addresses on the deny list. Create a CloudWatch alarm with the metric filter as input. Set the period to 5 minutes and the datapoints to alarm to 1. Use an Amazon Simple Notification Service (Amazon SNS) topic to send alarm notices to the security team.",
        "Create an Amazon S3 bucket for log files. Configure the VPC flow log to capture all traffic and to send the data to the S3 bucket. Configure Amazon Athena to return all log files in the S3 bucket for IP addresses on the deny list. Configure Amazon QuickSight to accept data from Athena and to publish the data as a dashboard that the security team can access. Create a threshold alert of 1 for successful access. Configure the alert to automatically notify the security team as frequently as possible when the alert threshold is met.",
        "Create an Amazon S3 bucket for log files. Configure the VPC flow log to capture accepted traffic and to send the data to the S3 bucket. Configure an Amazon OpenSearch Service duster and domain for the log files. Create an AWS Lambda function to retrieve the logs from the S3 bucket, format the logs, and load the logs into the OpenSearch Service cluster. Schedule the Lambda function to run every 5 minutes. Configure an alert and condition in OpenSearch Service to send alerts to the security team through an Amazon Simple Notification Service (Amazon SNS) topic when access from the IP addresses on the deny list is detected.",
        "Create a log group in Amazon CloudWatch Logs. Create an Amazon S3 bucket to hold query results. Configure the VPC flow log to capture all traffic and to send the data to the log group. Deploy an Amazon Athena CloudWatch connector in AWS Lambda. Connect the connector to the log group. Configure Athena to periodically query for all accepted traffic from the IP addresses on the deny list and to store the results in the S3 bucket. Configure an S3 event notification to automatically notify the security team through an Amazon Simple Notification Service (Amazon SNS) topic when new objects are added to the S3 bucket."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_290",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company has multiple accounts in an organization in AWS Organizations. The company's SecOps team needs to receive an Amazon Simple Notification Service (Amazon SNS) notification if any account in the organization turns off the Block Public Access feature on an Amazon S3 bucket. A DevOps engineer must implement this change without affecting the operation of any AWS accounts. The implementation must ensure that individual member accounts in the organization cannot turn off the notification. Which solution will meet these requirements?",
      "options": [
        "Designate an account to be the delegated Amazon GuardDuty administrator account. Turn on GuardDuty for all accounts across the organization. In the GuardDuty administrator account, create an SNS topic. Subscribe the SecOps team's email address to the SNS topic. In the same account, create an Amazon EventBridge rule that uses an event pattern for GuardDuty findings and a target of the SNS topic.",
        "Create an AWS CloudFormation template that creates an SNS topic and subscribes the SecOps team’s email address to the SNS topic. In the template, include an Amazon EventBridge rule that uses an event pattern of CloudTrail activity for s3:PutBucketPublicAccessBlock and a target of the SNS topic. Deploy the stack to every account in the organization by using CloudFormation StackSets.",
        "Turn on AWS Config across the organization. In the delegated administrator account, create an SNS topic. Subscribe the SecOps team's email address to the SNS topic. Deploy a conformance pack that uses the s3-bucket-level-public-access- prohibited AWS Config managed rule in each account and uses an AWS Systems Manager document to publish an event to the SNS topic to notify the SecOps team.",
        "Turn on Amazon Inspector across the organization. In the Amazon Inspector delegated administrator account, create an SNS topic. Subscribe the SecOps team’s email address to the SNS topic. In the same account, create an Amazon EventBridge rule that uses an event pattern for public network exposure of the S3 bucket and publishes an event to the SNS topic to notify the SecOps team."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_291",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company has multiple AWS accounts. The company uses AWS Single Sign-On (AWS SSO) that is integrated with AWS Toolkit for Microsoft Azure DevOps. The attributes for access control feature is enabled in AWS SSO. The attribute mapping list contains two entries. The department key is mapped to ${path:enterprise.department}. The costCenter key is mapped to ${path:enterprise.costCenter}. All existing Amazon EC2 instances have a department tag that corresponds to three company departments (d1, d2, d3). A DevOps engineer must create policies based on the matching attributes. The policies must minimize administrative effort and must grant each Azure AD user access to only the EC2 instances that are tagged with the user's respective department name. Which condition key should the DevOps engineer include in the custom permissions policies to meet these requirements?",
      "options": [
        "aws:RequestTag/department",
        "aws:ResourceTag/Department",
        "aws:PrincipalTag/Department",
        "aws:TagKeys"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_292",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company uses a series of individual Amazon Cloud Formation templates to deploy its multi-Region Applications. These templates must be deployed in a specific order. The company is making more changes to the templates than previously expected and wants to deploy new templates more efficiently. Additionally, the data engineering team must be notified of all changes to the templates. What should the company do to accomplish these goals?",
      "options": [
        "Create an AWS Lambda function to deploy the Cloud Formation templates m the required order Use stack policies to alert the data engineering team.",
        "Host the Cloud Formation templates in Amazon S3 Use Amazon S3 events to directly trigger CloudFormation updates and Amazon SNS notifications.",
        "Implement CloudFormation StackSets and use drift detection to trigger update alerts to the data engineering team.",
        "Leverage CloudFormation nested stacks and stack sets (or deployments Use Amazon SNS to notify the data engineering team."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_293",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company has 20 service learns Each service team is responsible for its own microservice. Each service team uses a separate AWS account for its microservice and a VPC with the 192 168 0 0/22 CIDR block. The company manages the AWS accounts with AWS Organizations. Each service team hosts its microservice on multiple Amazon EC2 instances behind an Application Load Balancer. The microservices communicate with each other across the public internet. The company's security team has issued a new guideline that all communication between microservices must use HTTPS over private network connections and cannot traverse the public internet. A DevOps engineer must implement a solution that fulfills these obligations and minimizes the number of changes for each service team Which solution will meet these requirements?",
      "options": [
        "Create a new AWS account in AWS Organizations Create a VPC in this account and use AWS Resource Access Manager to share the private subnets of this VPC with the organization Instruct the service teams to launch a network Load Balancer (NLB) and EC2 instances that use the shared private subnets Use the NLB DNS names for communication between microservices.",
        "Create a Network Load Balancer (NLB) in each of the microservice VPCs Use AWS PrivateLink to create VPC endpoints in each AWS account for the NLBs Create subscriptions to each VPC endpoint in each of the other AWS accounts Use the VPC endpoint DNS names for communication between microservices.",
        "Create a Network Load Balancer (NLB) in each of the microservice VPCs Create VPC peering connections between each of the microservice VPCs Update the route tables for each VPC to use the peering links Use the NLB DNS names for communication between microservices.",
        "Create a new AWS account in AWS Organizations Create a transit gateway in this account and use AWS Resource Access Manager to share the transit gateway with the organizatioin each of the microservice VPC",
        "create a transit gateway attachment to the shared transit gateway Update the route tables of each VPC to use the transit gateway Create a Network Load Balancer (NLB) in each of the microservice VPCs Use the NLB DNS names for communication between microservices."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_294",
      "batch": "Batch 6",
      "type": "multiple",
      "prompt": "A company is storing 100 GB of log data in csv format in an Amazon S3 bucket SQL developers want to query this data and generate graphs to visualize it. The SQL developers also need an efficient automated way to store metadata from the csv file. Which combination of steps will meet these requirements with the LEAST amount of effort? (Select THREE.)",
      "options": [
        "Fitter the data through AWS X-Ray to visualize the data.",
        "Filter the data through Amazon QuickSight to visualize the data.",
        "Query the data with Amazon Athena.",
        "Query the data with Amazon Redshift.",
        "Use the AWS Glue Data Catalog as the persistent metadata store.",
        "Use Amazon DynamoDB as the persistent metadata store."
      ],
      "correctAnswers": [
        1,
        2,
        4
      ],
      "explanation": "Correct Answer: BCE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_295",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company has many AWS accounts. During AWS account creation the company uses automation to create an Amazon CloudWatch Logs log group in every AWS Region that the company operates in. The automaton configures new resources in the accounts to publish logs to the provisioned log groups in their Region. The company has created a logging account to centralize the logging from all the other accounts. A DevOps engineer needs to aggregate the log groups from all the accounts to an existing Amazon S3 bucket in the logging account. Which solution will meet these requirements in the MOST operationally efficient manner?",
      "options": [
        "In the logging account create a CloudWatch Logs destination with a destination policy. For each new account subscribe the CloudWatch Logs log groups to the destination configure a single Amazon Kinesis data stream and a single Amazon Kinesis Data Firehose delivery stream to deliver the logs from the CloudWatch Logs destination to the S3 bucket.",
        "In the logging account create a CloudWatch Logs destination with a destination policy for each Region.For each new account subscribe the CloudWatch Logs log groups to the destination. Configure a single Amazon Kinesis data stream and a single Amazon Kinesis Data Firehose delivery stream to deliver the logs from all the CloudWatch Logs destinations to the S3 bucket.",
        "In the logging account create a CloudWatch Logs destination with a destination policy for each Region.For each new account subscribe the CloudWatch Logs log groups to the destination Configure an Amazon Kinesis data stream and an Amazon Kinesis Data Firehose delivery stream for each Region to deliver the logs from the CloudWatch Logs destinations to the S3 bucket.",
        "In the logging account create a CloudWatch Logs destination with a destination policy. For each new account subscribe the CloudWatch Logs log groups to the destination configure a single Amazon Kinesis data stream to deliver the logs from the CloudWatch Logs destination to the S3 bucket."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_296",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company is divided into teams Each team has an AWS account and all the accounts are in an organization in AWS Organizations. Each team must retain full administrative rights to its AWS account. Each team also must be allowed to access only AWS services that the company approves for use AWS services must gam approval through a request and approval process. How should a DevOps engineer configure the accounts to meet these requirements?",
      "options": [
        "Use AWS CloudFormation StackSets to provision IAM policies in each account to deny access to restricted AWS services. In each account, configure AWS Config rules that ensure that the policies are attached to IAM principals in the account.",
        "Use AWS Control Tower to provision the accounts into OUs within the organization. Configure AWS Control Tower to enable AWS IAM Identity Center (AWS Single Sign-On). Configure IAM Identity Center to provide administrative access. Include deny policies on user roles for restricted AWS services.",
        "Place all the accounts under a new top-level OU within the organization. Create an SCP that denies access to restricted AWS services. Attach the SCP to the OU.",
        "Create an SCP that allows access to only approved AWS services. Attach the SCP to the root OU of the organization. Remove the FullAWSAccess SCP from the root OU of the organization."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_297",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A DevOps engineer has implemented a Cl/CO pipeline to deploy an AWS Cloud Format ion template that provisions a web application. The web application consists of an Application Load Balancer (ALB) a target group, a launch template that uses an Amazon Linux 2 AMI an Auto Scaling group of Amazon EC2 instances, a security group and an Amazon RDS for MySQL database The launch template includes user data that specifies a script to install and start the application. The initial deployment of the application was successful. The DevOps engineer made changes to update the version of the application with the user data. The CI/CD pipeline has deployed a new version of the template However, the health checks on the ALB are now failing The health checks have marked all targets as unhealthy. During investigation the DevOps engineer notices that the Cloud Formation stack has a status of UPDATE_COMPLETE. However, when the DevOps engineer connects to one of the EC2 instances and checks /varar/log messages, the DevOps engineer notices that the Apache web server failed to start successfully because of a configuration error How can the DevOps engineer ensure that the CloudFormation deployment will fail if the user data fails to successfully finish running?",
      "options": [
        "Use the cfn-signal helper script to signal success or failure to CloudFormation Use the WaitOnResourceSignals update policy within the CloudFormation template Set an appropriate timeout for the update policy.",
        "Create an Amazon CloudWatch alarm for the UnhealthyHostCount metri",
        "Include an appropriate alarm threshold for the target group Create an Amazon Simple Notification Service (Amazon SNS) topic as the target to signal success or failure to CloudFormation",
        "Create a lifecycle hook on the Auto Scaling group by using the AWS AutoScaling LifecycleHook resource Create an Amazon Simple Notification Service (Amazon SNS) topic as the target to signal success or failure to CloudFormation Set an appropriate timeout on the lifecycle hook.",
        "Use the Amazon CloudWatch agent to stream the cloud-init logs Create a subscription filter that includes an AWS Lambda function with an appropriate invocation timeout Configure the Lambda function to use the SignalResource API operation to signal success or failure to CloudFormation."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_298",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company uses a single AWS account lo test applications on Amazon EC2 instances. The company has turned on AWS Config in the AWS account and has activated the restricted-ssh AWS Config managed rule. The company needs an automated monitoring solution that will provide a customized notification in real time if any security group in the account is not compliant with the restricted-ssh rule. The customized notification must contain the name and ID of the noncompliant security group. A DevOps engineer creates an Amazon Simple Notification Service (Amazon SNS) topic in the account and subscribes the appropriate personnel to the topic. What should me DevOps engineer do next to meet these requirements?",
      "options": [
        "Create an Amazon EventBridge rule that matches an AWS Config evaluation result of NON_COMPLIANT tor the restricted- ssh rul",
        "Configure an input transformer for the EventBridge rule Configure the EventBridge rule to publish a notification to the SNS topic.",
        "Configure AWS Config to send all evaluation results for the restricted-ssh rule to the SNS topic.Configure a filter policy on the SNS topic to send only notifications that contain the text of NON_COMPLIANT in the notification to subscribers.",
        "Create an Amazon EventBridge rule that matches an AWS Config evaluation result of NON_COMPLlANT for the restricted- ssh rule Configure the EventBridge rule to invoke AWS Systems Manager Run Command on the SNS topic to customize a notification and to publish the notification to the SNS topic",
        "Create an Amazon EventBridge rule that matches all AWS Config evaluation results of NON_COMPLIANT Configure an input transformer for the restricted-ssh rule Configure the EventBridge rule to publish a notification to the SNS topic."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_299",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company's web app runs on EC2 with a relational database. The company wants highly available multi- Region architecture with latency-based routing for global customers. Which solution meets these requirements?",
      "options": [
        "Elastic Beanstalk with ALB in each Region; Aurora global database with read replicas; CloudFront with custom origins for ALBs; Route 53 latency-based routing to CloudFront.",
        "ALB in each Region with Auto Scaling groups; RDS primary in one Region with read replicas in others; Route 53 failover routing to ALBs.",
        "Elastic Beanstalk with ALB in each Region; RDS primary in one Region with read replicas; CloudFront with custom origins for ALBs; Route 53 failover routing to CloudFront.",
        "ALB in each Region with Auto Scaling groups; Aurora global database with read replicas; Route 53 latency- based routing to ALBs."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_300",
      "batch": "Batch 6",
      "type": "single",
      "prompt": "A company containerized its Java app and uses CodePipeline. They want to scan images in ECR for vulnerabilities and reject images with critical vulnerabilities in a manual approval stage. Which solution meets these?",
      "options": [
        "Enhanced scanning, EventBridge listens to Inspector scan findings, Lambda rejects manual approval on critical vulnerabilities.",
        "Enhanced scanning, Lambda invokes Inspector for SBOM, exports to S3, Athena queries SBOM, rejects manual approval on critical findings.",
        "Enhanced scanning, EventBridge listens to Detective scan findings, Lambda rejects manual approval on critical vulnerabilities.",
        "Basic scanning with EventBridge for Inspector findings and Lambda to reject manual approval if critical vulnerabilities found."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_301",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A DevOps engineer manages a company's Amazon Elastic Container Service (Amazon ECS) cluster. The cluster runs on several Amazon EC2 instances that are in an Auto Scaling group. The DevOps engineer must implement a solution that logs and reviews all stopped tasks for errors. Which solution will meet these requirements?",
      "options": [
        "Configure an EC2 Auto Scaling lifecycle hook for the EC2_INSTANCE_TERMINATING scale-in event. Write the SystemEventLog file to Amazon S3. Use Amazon Athena to query the log file for errors.",
        "Configure the EC2 instances to store logs in Amazon CloudWatch Logs. Create a CloudWatch Contributor Insights rule that uses the EC2 instance log data. Use the Contributor Insights rule to investigate stopped tasks.",
        "Configure tasks to write log data in the embedded metric format. Store the logs in Amazon CloudWatch Logs. Monitor the ContainerInstanceCount metric for changes.",
        "Create an Amazon EventBridge rule to capture task state changes. Send the event to Amazon CloudWatch Logs. Use CloudWatch Logs Insights to investigate stopped tasks."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_302",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company runs a microservices application on Amazon EKS. Users report delays accessing an account summary feature during peak hours. CloudWatch metrics and logs show normal CPU and memory utilization on EKS nodes. The DevOps engineer cannot identify where delays occur within the microservices. Which solution will meet these requirements?",
      "options": [
        "Deploy the AWS X-Ray daemon as a DaemonSet in the EKS cluster. Use the X-Ray SDK to instrument the application code. Redeploy the application.",
        "Increase the timeout settings in the application code for network operations.",
        "Enable CloudWatch Container Insights for the EKS cluster. Use the Container Insights data to diagnose delays.",
        "Create alarms based on existing CloudWatch metrics. Set up SNS email alerts."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_303",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company uses containers for its applications The company learns that some container Images are missing required security configurations A DevOps engineer needs to implement a solution to create a standard base image The solution must publish the base image weekly to the us-west-2 Region, us-east-2 Region, and eu-central-1 Region. Which solution will meet these requirements?",
      "options": [
        "Create an AWS CodePipeline pipeline that uses an AWS CodeBuild project to build the image Use AWS CodeDeploy to publish the image to Amazon Elastic Container Registry (Amazon ECR) repositories in all three Regions. Configure the pipeline to run weekly.",
        "Create an EC2 Image Builder pipeline that uses a container recipe to build the Image Configure the pipeline to distribute the image to Amazon Elastic Container Registry (Amazon ECR) repositories in all three Regions. Configure the pipeline to run weekly.",
        "Create an AWS CodePipeline pipeline that uses an AWS CodeBuild project to build the image Use AWS CodeOeploy to publish the image to an Amazon Elastic Container Registry (Amazon ECR) repository in us-west-2 Configure ECR replication from us-west-2 to us-east-2 and from us-east-2 to eu- central-1 Configure the pipeline to run weekly",
        "Create an EC2 Image Builder pipeline that uses a container recipe to build the image. Configure the pipeline to distribute the image to an Amazon Elastic Container Registry (Amazon ECR) repository in us-west-2. Configure ECR replication from us-west-2 to us-east-2 and from us-east-2 to eu-central-1 Configure the pipeline to run weekly"
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_304",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company has a web application that is hosted on Amazon EC2 instances. The company is deploying the application into multiple AWS Regions. The application consists of dynamic content such as WebSocket- based real-time product updates. The company uses Amazon Route 53 to manage all DNS records. Which solution will provide multi-Region access to the application with the LEAST latency?",
      "options": [
        "Deploy a Network Load Balancer (NLB) in front of the EC2 instances in each Region. Deploy an AWS Global Accelerator standard accelerator with an endpoint group for each NLB. Create a Route 53 alias record that points to the accelerator's DNS address.",
        "Deploy an Application Load Balancer (ALB) in front of the EC2 instances in each Region. Create a Route 53 A record with a latency-based routing policy. Add IP addresses of the ALBs as the value of the record.",
        "Deploy an Application Load Balancer (ALB) in front of the EC2 instances in each Region. Deploy an Amazon CloudFront distribution with an origin group that contains the ALBs as origins. Create a Route 53 alias record that points to the CloudFront distribution's DNS address.",
        "Deploy a Network Load Balancer (NLB) in front of the EC2 instances in each Region. Create a Route 53 A record with a multivalue answer routing policy. Add IP addresses of the NLBs as the value of the record."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_305",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A large company recently acquired a small company. The large company invited the small company to join the large company's existing organization in AWS Organizations as a new OU. A DevOps engineer determines that the small company needs to launch t3.small Amazon EC2 instance types for the company's application workloads. The small company needs to deploy the instances only within US-based AWS Regions. The DevOps engineer needs to use an SCP in the small company's new OU to ensure that the small company can launch only the required instance types. Which solution will meet these requirements?",
      "options": [
        "Configure a statement to deny the ec2:RunInstances action for all EC2 instance resources when the ec2:InstanceType condition is not equal to t3.small. Configure another statement to deny the ec2:RunInstances action for all EC2 instance resources when the aws:RequestedRegion condition is not equal to us-*.",
        "Configure a statement to allow the ec2:RunInstances action for all EC2 instance resources when the ec2:InstanceType condition is not equal to t3.small. Configure another statement to allow the ec2:RunInstances action for all EC2 instance resources when the aws:RequestedRegion condition is not equal to us-*.",
        "Configure a statement to deny the ec2:RunInstances action for all EC2 instance resources when the ec2:InstanceType condition is equal to t3.small. Configure another statement to deny the ec2:RunInstances action for all EC2 instance resources when the aws:RequestedRegion condition is equal to us-*.",
        "Configure a statement to allow the ec2:RunInstances action for all EC2 instance resources when the ec2:InstanceType condition is equal to t3.small. Configure another statement to allow the ec2:RunInstances action for all EC2 instance resources when the aws:RequestedRegion condition is equal to us-*."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_306",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A DevOps engineer is setting up a container-based architecture. The engineer has decided to use AWS CloudFormation to automatically provision an Amazon ECS cluster and an Amazon EC2 Auto Scaling group to launch the EC2 container instances. After successfully creating the CloudFormation stack, the engineer noticed that, even though the ECS cluster and the EC2 instances were created successfully and the stack finished the creation, the EC2 instances were associating with a different cluster. How should the DevOps engineer update the CloudFormation template to resolve this issue?",
      "options": [
        "Reference the EC2 instances in the AWS::ECS::Cluster resource and reference the ECS cluster in the AWS::ECS::Service resource.",
        "Reference the ECS cluster in the AWS::AutoScaling::LaunchConfiguration resource of the UserData property.",
        "Reference the ECS cluster in the AWS::EC2::Instance resource of the UserData property.",
        "Reference the ECS cluster in the AWS::CloudFormation::CustomResource resource to trigger an AWS Lambda function that registers the EC2 instances with the appropriate ECS cluster."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_307",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company manages shared libraries across development and production accounts with IAM roles and CodePipeline/CDK. Developers must be the only ones to access latest versions. Shared packages must be independently tested before production. Which solution meets these requirements?",
      "options": [
        "Separate S3 buckets with versioning in dev and prod accounts, dev bucket policy restricting developers.EventBridge triggers pipeline to test packages before copying to prod and revert if tests fail.",
        "Separate CodeArtifact repositories in dev and prod accounts. Dev repo has repository policy allowing only developers access. EventBridge triggers pipeline to test packages before copying to prod repo.",
        "Single CodeArtifact repository in central account with IAM policies allowing only developers access. Use EventBridge to start CodeBuild testing projects before copying packages to production repo.",
        "Single S3 bucket with versioning in central account, IAM policies restricting developers. Use EventBridge to trigger CodeBuild tests before copying to production."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_308",
      "batch": "Batch 7",
      "type": "multiple",
      "prompt": "A DevOps engineer is implementing governance controls for a company that requires its infrastructure to be housed within the United States. The company has many AWS accounts in an organization in AWS Organizations that has all features enabled. The engineer must restrict which AWS Regions the company can use. The engineer must also ensure that an alert is sent as soon as possible if any activity outside the governance policy occurs. The controls must be automatically enabled on any new Region outside the United States. Which combination of steps will meet these requirements? (Select TWO.)",
      "options": [
        "Use an AWS Lambda function that checks for AWS service activity. Deploy the Lambda function to all Regions. Write an Amazon EventBridge rule that runs the Lambda function every hour. Configure the rule to send an alert if the Lambda function finds any activity in a non-US Region.",
        "Create an Organizations SCP allow policy that has a condition that the aws:RequestedRegion property matches a list of all US Regions. Include an exception in the policy for global services. Attach the policy to the root of the organization.",
        "Create an Organizations SCP deny policy that has a condition that the aws:RequestedRegion property does not match a list of all US Regions. Include an exception in the policy for global services. Attach the policy to the root of the organization.",
        "Configure AWS CloudTrail to send logs to Amazon CloudWatch Logs. Enable CloudTrail for all Regions. Use a CloudWatch Logs metric filter to create a metric in non-US Regions. Configure a CloudWatch alarm to send an alert if the metric is greater than 0.",
        "Use an AWS Lambda function to query Amazon Inspector to look for service activity in non-US Regions. Configure the Lambda function to send alerts if Amazon Inspector finds any activity."
      ],
      "correctAnswers": [
        2,
        3
      ],
      "explanation": "Correct Answer: CD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_309",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company is running its ecommerce website on AWS. The website is currently hosted on a single Amazon EC2 instance in one Availability Zone. A MySQL database runs on the same EC2 instance. The company needs to eliminate single points of failure in the architecture to improve the website's availability and resilience. Which solution will meet these requirements with the LEAST configuration changes to the website?",
      "options": [
        "Deploy the application on EC2 instances across multiple Availability Zones. Put the EC2 instances into an Auto Scaling group behind an Application Load Balancer. Migrate the database to Amazon Aurora Multi-AZ. Use Amazon CloudFront for content delivery.",
        "Use AWS Elastic Beanstalk to deploy the application across multiple AWS Regions. Migrate the database to Amazon Redshift. Use Amazon ElastiCache for session management.",
        "Deploy the application by using AWS Fargate containers. Migrate the database to Amazon DynamoDB. Use Amazon API Gateway to route requests.",
        "Migrate the application to AWS Lambda functions. Use Amazon S3 for static content hosting. Migrate the database to Amazon DocumentDB (with MongoDB compatibility)."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_310",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company uses an AWS CodeArtifact repository to store Python packages that the company developed internally. A DevOps engineer needs to use AWS CodeDeploy to deploy an application to an Amazon EC2 instance. The application uses a Python package that is stored in the CodeArtifact repository. A BeforeInstall lifecycle event hook will install the package. The DevOps engineer needs to grant the EC2 instance access to the CodeArtifact repository. Which solution will meet this requirement?",
      "options": [
        "Create a service-linked role for CodeArtifact. Associate the role with the EC2 instance. Use the aws codeartifact get- authorization-token CLI command on the instance.",
        "Configure a resource-based policy for the CodeArtifact repository that allows the ReadFromRepository action for the EC2 instance principal.",
        "Configure ACLs on the CodeArtifact repository to allow the EC2 instance to access the Python package.",
        "Create an instance profile that contains an IAM role that has access to CodeArtifact. Associate the instance profile with the EC2 instance. Use the aws codeartifact login CLI command on the instance."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_311",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company's web app publishes JSON logs with transaction status to CloudWatch Logs. The company wants a dashboard showing the number of successful transactions with the least operational overhead. Which solution meets this?",
      "options": [
        "Create an OpenSearch cluster and subscription filter to send logs; create OpenSearch dashboard with queries for success.",
        "Create a CloudWatch metric filter on the log group with a pattern matching success; create CloudWatch dashboard with metric graph.",
        "Create a Kinesis data stream subscribed to the log group; filter logs by success; send to Lambda; Lambda publishes custom metrics; dashboard uses metric graph.",
        "Create a CloudWatch subscription filter with Lambda to parse logs and publish custom metrics; create CloudWatch dashboard with metric graph."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_312",
      "batch": "Batch 7",
      "type": "multiple",
      "prompt": "A company runs a fleet of Amazon EC2 instances in a VPC. The company's employees remotely access the EC2 instances by using the Remote Desktop Protocol (RDP). The company wants to collect metrics about how many RDP sessions the employees initiate every day. Which combination of steps will meet this requirement? (Choose three.)",
      "options": [
        "Create an Amazon EventBridge rule that reacts to EC2 Instance State-change Notification events.",
        "Create an Amazon CloudWatch Logs log group. Specify the log group as a target for the EventBridge rule.",
        "Create a flow log in VPC Flow Logs.",
        "Create an Amazon CloudWatch Logs log group. Specify the log group as a destination for the flow log.",
        "Create a log group metric filter.",
        "Create a log group subscription filter. Use EventBridge as the destination."
      ],
      "correctAnswers": [
        2,
        3,
        4
      ],
      "explanation": "Correct Answer: CDE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_313",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "AnyCompany is using AWS Organizations to create and manage multiple AWS accounts. AnyCompany recently acquired a smaller company, Example Corp. During the acquisition process, Example Corp's single AWS account joined AnyCompany's management account through an Organizations invitation. AnyCompany moved the new member account under an OU that is dedicated to Example Corp. AnyCompany's DevOps engineer has an IAM user that assumes a role that is named OrganizationAccountAccessRole to access member accounts. This role is configured with a full access policy. When the DevOps engineer tries to use the AWS Management Console to assume the role in Example Corp's new member account, the DevOps engineer receives the following error message: \"Invalid information in one or more fields. Check your information or contact your administrator.\" Which solution will give the DevOps engineer access to the new member account?",
      "options": [
        "In the management account, grant the DevOps engineer's IAM user permission to assume the OrganizationAccountAccessRole IAM role in the new member account.",
        "In the management account, create a new SCP. In the SCP, grant the DevOps engineer's IAM user full access to all resources in the new member account. Attach the SCP to the OU that contains the new member account.",
        "In the new member account, create a new IAM role that is named OrganizationAccountAccessRole. Attach the AdministratorAccess AWS managed policy to the role. In the role's trust policy, grant the management account permission to assume the role.",
        "In the new member account, edit the trust policy for the OrganizationAccountAccessRole IAM role. Grant the management account permission to assume the role."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_314",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company manages environments for its application in multiple AWS accounts. Each environment account is in a different OU in AWS Organizations. A DevOps team is responsible for the application deployment process across the environments. The deployment process uses an AWS CodePipeline pipeline in a Shared Services account. The DevOps team members are in the same user group. The team members have administrative access to all accounts through AWS IAM Identity Center. A recent deployment problem in the development environment required the DevOps team to perform manual steps. The deployment to the production environment then resulted in an incident that caused the pipeline to fail, blocking new deployments for several hours. A DevOps engineer needs to ensure that only the pipeline can perform deployments in the production environment. The DevOps engineer must have access to the environment in case of an emergency. Which solution will meet these requirements with the MOST operational efficiency?",
      "options": [
        "Create an SCP that denies all write actions for the DevOps team members on the production OU. Configure a new user in IAM Identity Center for the DevOps engineer with a new permission set that has AdministratorAccess permissions. Add an SCP that denies modification of resources by any entity other than the pipeline role.",
        "Update the DevOps group to have the ReadOnlyAccess permission set for the production accounts. Configure the DevOps engineer user with a new permission set that has AdministratorAccess permissions and that allows the user to assume the pipeline role. Add an SCP that denies modification of resources by any entity other than the pipeline role.",
        "Create an SCP that denies all write actions for the DevOps team members on the production OU. Use a specific tag to tag the resources that CodePipeline provisions. Add an SCP that denies modification of tagged resources by any entity other than the DevOps engineer.",
        "Update the DevOps group to be able to assume the pipeline role for the production accounts. Configure a new user in IAM Identity Center for the DevOps engineer with a new permission set that has AdministratorAccess permissions. Add an SCP that denies modification of resources by any entity other than the DevOps engineer."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_315",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company hosts applications in its AWS account Each application logs to an individual Amazon CloudWatch log group. The company's CloudWatch costs for ingestion are increasing A DevOps engineer needs to Identify which applications are the source of the increased logging costs. Which solution Will meet these requirements?",
      "options": [
        "Use CloudWatch Logs Insights to create a set of queries for the application log groups to Identify the number of logs written for a period of time",
        "Use CloudWatch metrics to create a custom expression that Identifies the CloudWatch log groups that have the most data being written to them.",
        "Use AWS Cost Explorer to generate a cost report that details the cost for CloudWatch usage",
        "Use AWS CloudTrail to filter for CreateLogStream events for each application"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_316",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company runs several applications in the same AWS account. The applications send logs to Amazon CloudWatch. A data analytics team needs to collect performance metrics and custom metrics from the applications. The analytics team needs to transform the metrics data before storing the data in an Amazon S3 bucket. The analytics team must automatically collect any new metrics that are added to the CloudWatch namespace. Which solution will meet these requirements with the LEAST operational overhead?",
      "options": [
        "Configure a CloudWatch metric stream to include metrics from the application and the CloudWatch namespace. Configure the metric stream to deliver the metrics to an Amazon Data Firehose delivery stream. Configure the Firehose delivery stream to invoke an AWS Lambda function to transform the data. Configure the delivery stream to send the transformed data to the S3 bucket.",
        "Configure a CloudWatch metrics stream to include all the metrics and to deliver the metrics to an Amazon Data Firehose delivery stream. Configure the Firehose delivery stream to invoke an AWS Lambda function to transform the data. Configure the delivery stream to send the transformed data to the S3 bucket.",
        "Configure metric filters for the CloudWatch logs to create custom metrics. Configure a CloudWatch metric stream to deliver the application metrics to the S3 bucket.",
        "Configure subscription filters on the application log groups to target an Amazon Data Firehose delivery stream. Configure the Firehose delivery stream to invoke an AWS Lambda function to transform the data. Configure the delivery stream to send the transformed data to the S3 bucket."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_317",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company uses an Amazon Aurora PostgreSQL global database that has two secondary AWS Regions. A DevOps engineer has configured the database parameter group to guarantee an RPO of 60 seconds. Write operations on the primary cluster are occasionally blocked because of the RPO setting. The DevOps engineer needs to reduce the frequency of blocked write operations. Which solution will meet these requirements?",
      "options": [
        "Add an additional secondary cluster to the global database.",
        "Enable write forwarding for the global database.",
        "Remove one of the secondary clusters from the global database.",
        "Configure synchronous replication for the global database."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_318",
      "batch": "Batch 7",
      "type": "multiple",
      "prompt": "A company uses AWS Organizations to manage multiple AWS accounts. The accounts are in an OU that has a policy attached to allow all actions. The company is migrating several Git repositories to a specified AWS CodeConnections supported Git provider. The Git repositories manage AWS CloudFormation stacks for application infrastructure that the company deploys across multiple AWS Regions. The company wants a DevOps team to integrate CodeConnections into the CloudFormation stacks. The DevOps team must ensure that company staff members can integrate only with the specified Git provider. The deployment process must be highly available across Regions. Which combination of steps will meet these requirements? (Select THREE.)",
      "options": [
        "Use CodeConnections to create a CodeConnections connection from each Region where the company operates to each Git repository.",
        "Add a new SCP statement to the OU that allows the CodeConnections CreatingConnections action where the provider type is the specified Git provider.",
        "Add a new SCP statement to the OU that denies the CodeConnections CreatingConnections action where the provider type is not the specified Git provider.",
        "Use CodeConnections to create a CodeConnections repository link. Update each CloudFormation stack to sync from the Git repository.",
        "Use CodeConnections to configure a single CodeConnections connection to each Git repository.",
        "For each Git repository, create a pipeline in AWS CodePipeline that has the Git repository set as the source and a CloudFormation deployment stage."
      ],
      "correctAnswers": [
        0,
        2,
        3
      ],
      "explanation": "Correct Answer: ACD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_319",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company has an AWS CodeDeploy application. The application has a deployment group that uses a single tag group to identify instances for the deployment of ApplicationA. The single tag group configuration identifies instances that have Environment=Production and Name=ApplicattonA tags for the deployment of ApplicationA. The company launches an additional Amazon EC2 instance with Department=Marketing Environment^Production. and Name=ApplicationB tags. On the next CodeDeploy deployment of ApplicationA. the additional instance has ApplicationA installed on it. A DevOps engineer needs to configure the existing deployment group to prevent ApplicationA from being installed on the additional instance Which solution will meet these requirements?",
      "options": [
        "Add another single tag group that includes only the Department=Marketing tag. Keep the Environment=Production and Name=ApplicationA tags with the current single tag group",
        "Change the current single tag group to include the Department=Marketmg Environment=Production and Name=ApplicationAtags",
        "Change the current single tag group to include only the Environment=Production tag Add another single tag group that includes only the Department=Marketing tag",
        "Change the current single tag group to include only the Environment=Production tag Add another single tag group that includes only the Name=ApplicationA tag."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_320",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company is deploying a new application that uses Amazon EC2 instances. The company needs a solution to query application logs and AWS account API activity Which solution will meet these requirements?",
      "options": [
        "Use the Amazon CloudWatch agent to send logs from the EC2 instances to Amazon S3 Use AWS CloudTrail to deliver the API togs to Amazon S3 Use Amazon Athena to query both sets of logs in Amazon S3.",
        "Use the Amazon CloudWatch agent to send logs from the EC2 instances to Amazon Kinesis Configure AWS CloudTrail to deliver the API logs to Kinesis Use Kinesis to load the data into Amazon Redshift Use Amazon Redshift to query both sets of logs.",
        "Use the Amazon CloudWatch agent to send logs from the EC2 instances to Amazon CloudWatch Logs Configure AWS CloudTrail to deliver the API logs to Amazon S3 Use CloudWatch to query both sets of logs.",
        "Use the Amazon CloudWatch agent to send logs from the EC2 instances to Amazon CloudWatch Logs Configure AWS CloudTrail to deliver the API logs to CloudWatch Logs Use CloudWatch Logs Insights to query both sets of logs."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_321",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company is building a serverless application that uses AWS Lambda functions to process data. A BeginResponse Lambda function initializes data in response to specific application events. The company needs to ensure that a large number of Lambda functions are invoked after the BeginResponse Lambda function runs. Each Lambda function must be invoked in parallel and depends on only the outputs of the BeginResponse Lambda function. Each Lambda function has retry logic for invocation and must be able to fine-tune concurrency without losing data. Which solution will meet these requirements with the MOST operational efficiency?",
      "options": [
        "Create an Amazon Simple Notification Service (Amazon SNS) topic. Modify the BeginResponse Lambda function to publish to the SNS topic before the BeginResponse Lambda function finishes running. Subscribe all Lambda functions that need to invoke after the BeginResponse Lambda function runs to the SNS topic. Subscribe any new Lambda functions to the SNS topic.",
        "Create an Amazon Simple Queue Service (Amazon SQS) queue for each Lambda function that needs to run after the BeginResponse Lambda function runs. Subscribe each Lambda function to its own SQS queue. Create an Amazon Simple Notification Service (Amazon SNS) topic. Subscribe each SQS queue to the SNS topic. Modify the BeginResponse function to publish to the SNS topic when it finishes running.",
        "Create an Amazon Simple Queue Service (Amazon SQS) queue for each Lambda function that needs to run after the BeginResponse Lambda function runs. Subscribe the Lambda function to the SQS queue. Create an Amazon Simple Notification Service (Amazon SNS) topic for each SQS queue. Subscribe the SQS queues to the SNS topics. Modify the BeginResponse function to publish to the SNS topics when the function finishes running.",
        "Create an AWS Step Functions Standard Workflow. Configure states in the workflow to invoke the Lambda functions sequentially. Create an Amazon Simple Notification Service (Amazon SNS) topic. Modify the BeginResponse Lambda function to publish to the SNS topic before the Lambda function finishes running. Create a new Lambda function that is subscribed to the SNS topic and that invokes the Step Functions workflow."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_322",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company is developing an application that uses AWS Lambda functions. A DevOps engineer must create an AWS CloudFormation template that defines a deployment configuration for gradual traffic shifting to new Lambda function versions. Which CloudFormation resource configuration will meet this requirement?",
      "options": [
        "Use an AWS::CodeDeploy::DeploymentGroup resource. Define the DeploymentStyle property as BLUE_GREEN. Configure the TrafficRoutingConfig data type for linear traffic shifting.",
        "Use an AWS::CodeDeploy::DeploymentConfig resource. Define a TimeBasedCanary configuration. Specify values for percentage and minutes for traffic shifting.",
        "Use an AWS::Lambda::Version resource with the VersionWeight property to control the percentage of traffic that is routed to the new Lambda function versions.",
        "Use an AWS::Lambda::Alias resource with the RoutingConfig property to specify weights for gradual traffic shifting between the Lambda function versions."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_323",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company is launching an application that stores raw data in an Amazon S3 bucket. Three applications need to access the data to generate reports. The data must be redacted differently for each application before the applications can access the data. Which solution will meet these requirements?",
      "options": [
        "Create an Amazon Kinesis data stream. Create an AWS Lambda function that is invoked by object creation events in the raw data's S3 bucket. Program the Lambda function to redact data for each application. Publish the data on the Kinesis data stream. Configure each application to consume data from the Kinesis data stream.",
        "For each application, create an S3 access point that uses the raw data's S3 bucket as the destination. Create an AWS Lambda function that is invoked by object creation events in the raw data's S3 bucket. Program the Lambda function to redact data for each application. Store the data in each application's S3 access point. Configure each application to consume data from its own S3 access point.",
        "Create an S3 access point that uses the raw data's S3 bucket as the destination. For each application, create an S3 Object Lambda access point that uses the S3 access point. Configure the AWS Lambda function for each S3 Object Lambda access point to redact data when objects are retrieved. Configure each application to consume data from its own S3 Object Lambda access point.",
        "Create an S3 bucket for each application. Configure S3 Same-Region Replication (SRR) from the raw data's S3 bucket to each application's S3 bucket. Configure each application to consume data from its own S3 bucket."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_324",
      "batch": "Batch 7",
      "type": "multiple",
      "prompt": "A DevOps engineer needs to implement integration tests into an existing AWS CodePipelme CI/CD workflow for an Amazon Elastic Container Service (Amazon ECS) service. The CI/CD workflow retrieves new application code from an AWS CodeCommit repository and builds a container image. The CI/CD workflow then uploads the container image to Amazon Elastic Container Registry (Amazon ECR) with a new image tag version. The integration tests must ensure that new versions of the service endpoint are reachable and that vanous API methods return successful response data The DevOps engineer has already created an ECS cluster to test the service Which combination of steps will meet these requirements with the LEAST management overhead? (Select THREE.)",
      "options": [
        "Update the image build pipeline stage to output an imagedefinitions json file that references the new image tag.",
        "Add a deploy stage to the pipeline Configure AWS CodeDeploy as the action provider",
        "Add a deploy stage to the pipeline Configure Amazon ECS as the action provider",
        "Add an appspec.yml file to the CodeCommit repository",
        "Write a script that runs integration tests against the service. Upload the script to an Amazon S3 bucket.Integrate the script in the S3 bucket with CodePipeline by using an S3 action stage.",
        "Create an AWS Lambda function that runs connectivity checks and API calls against the service. Integrate the Lambda function with CodePipeline by using aLambda action stage"
      ],
      "correctAnswers": [
        0,
        2,
        5
      ],
      "explanation": "Correct Answer: ACF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_325",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company runs an application in an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer (ALB). The EC2 instances run Docker containers that make requests to a MySQL database that runs on separate EC2 instances. A DevOps engineer needs to update the application to use a serverless architecture. Which solution will meet this requirement with the FEWEST changes?",
      "options": [
        "Replace the containers that run on EC2 instances and the ALB with AWS Lambda functions. Replace the MySQL database with an Amazon Aurora Serverless v2 database that is compatible with MySQL.",
        "Replace the containers that run on EC2 instances with AWS Fargate. Replace the MySQL database with an Amazon Aurora Serverless v2 database that is compatible with MySQL.",
        "Replace the containers that run on EC2 instances and the ALB with AWS Lambda functions. Replace the MySQL database with Amazon DynamoDB tables.",
        "Replace the containers that run on EC2 instances with AWS Fargate. Replace the MySQL database with Amazon DynamoDB tables."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_326",
      "batch": "Batch 7",
      "type": "multiple",
      "prompt": "A company runs applications on Windows and Linux Amazon EC2 instances The instances run across multiple Availability Zones In an AWS Region. The company uses Auto Scaling groups for each application. The company needs a durable storage solution for the instances. The solution must use SMB for Windows and must use NFS for Linux. The solution must also have sub-millisecond latencies. All instances will read and write the data. Which combination of steps will meet these requirements? (Select THREE.)",
      "options": [
        "Create an Amazon FSx for NetApp ONTAP Multi-AZ file system.",
        "Create an Amazon Elastic File System (Amazon EFS) file system that has targets in multiple Availability Zones",
        "Perform an instance refresh on each Auto Scaling group.",
        "Update the user data for each application's launch template to mount the file system",
        "Create a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume to use for shared storage.",
        "Update the EC2 instances for each application to mount the file system when new instances are launched"
      ],
      "correctAnswers": [
        0,
        1,
        3
      ],
      "explanation": "Correct Answer: ABD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_327",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A global company uses Amazon S3 to host its product catalog website in the us-east-1 Region. The company must improve website performance for users across different geographical regions and must reduce the load on the origin server. The company must implement a highly available cross-Region solution that uses Amazon CloudFront. Which solution will meet these requirements with the LEAST operational effort?",
      "options": [
        "Enable S3 replication between the S3 bucket in us-east-1 and the S3 bucket in the different Region.",
        "Enable CloudFront with Origin Shield in us-east-1. Configure Amazon ElastiCache clusters in multiple Regions to serve as a distributed caching layer between CloudFront and the S3 origin. Set up a replication script to synchronize the S3 bucket in us-east-1 to an S3 bucket in a different Region. Use Amazon EventBridge to schedule the script to run once a day.",
        "Enable CloudFront with Origin Shield in us-east-1. Configure global edge locations. Set up cache behaviors with optimal TTLs for static content and dynamic content. Configure origin failover to an S3 bucket in a different Region. Enable S3 replication between the S3 bucket in us-east-1 and the S3 bucket in the different Region.",
        "Set up multiple CloudFront distributions. Point each distribution to another S3 bucket in a different Region. Use Amazon Route 53 latency-based routing to direct users to the nearest distribution.",
        "Enable CloudFront with Origin Shield in the eu-west-1 Region. Configure Regional edge caches.Implement AWS Global Accelerator to route requests to the nearest Regional edge location. Enable S3 replication between the S3 bucket in us- east-1 and an S3 bucket in a different Region."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_328",
      "batch": "Batch 7",
      "type": "multiple",
      "prompt": "A company uses an organization in AWS Organizations to manage its AWS accounts. The company recently acquired another company that has standalone AWS accounts. The acquiring company's DevOps team needs to consolidate the administration of the AWS accounts for both companies and retain full administrative control of the accounts. The DevOps team also needs to collect and group findings across all the accounts to implement and maintain a security posture. Which combination of steps should the DevOps team take to meet these requirements? (Choose two.)",
      "options": [
        "Invite the acquired company's AWS accounts to join the organization. Create an SCP that has full administrative privileges. Attach the SCP to the management account.",
        "Invite the acquired company's AWS accounts to join the organization. Create the OrganizationAccountAccessRole IAM role in the invited accounts. Grant permission to the management account to assume the role.",
        "Use AWS Security Hub to collect and group findings across all accounts. Use Security Hub to automatically detect new accounts as the accounts are added to the organization.",
        "Use AWS Firewall Manager to collect and group findings across all accounts. Enable all features for the organization. Designate an account in the organization as the delegated administrator account for Firewall Manager.",
        "Use Amazon Inspector to collect and group findings across all accounts. Designate an account in the organization as the delegated administrator account for Amazon Inspector."
      ],
      "correctAnswers": [
        1,
        2
      ],
      "explanation": "Correct Answer: BC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_329",
      "batch": "Batch 7",
      "type": "multiple",
      "prompt": "A company uses AWS Organizations to manage its AWS accounts. A DevOps engineer must ensure that all users who access the AWS Management Console are authenticated through the company's corporate identity provider (IdP). Which combination of steps will meet these requirements? (Select TWO.)",
      "options": [
        "Use AWS 1AM Identity Center to configure identity federation with SAML 2.0.",
        "Create an SCP in Organizations to deny password creation for 1AM users.",
        "Create a permissions boundary in AWS 1AM Identity Center to deny password logins for 1AM users.",
        "Create 1AM groups in the Organizations management account to apply consistent permissions for all 1AM users.",
        "Use Amazon GuardDuty with a delegated administrator account. Use GuardDuty to enforce denial of 1AM user logins"
      ],
      "correctAnswers": [
        0,
        1
      ],
      "explanation": "Correct Answer: AB",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_330",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company uses an organization in AWS Organizations to manage many AWS accounts. The company has enabled all features for the organization. The company uses AWS CloudFormation StackSets to deploy configurations to the accounts. The company uses AWS Config to monitor an Amazon S3 bucket. The company needs to ensure that all object uploads to the S3 bucket use AWS Key Management Service (AWS KMS) encryption. Which solution will meet these requirements?",
      "options": [
        "Create an AWS Config conformance pack that includes the s3-bucket-server-side-encryption-enabled rule. Deploy the conformance pack to the accounts. Configure the rule to target an Amazon Simple Notification Service (Amazon SNS) topic.",
        "Create an SCP that includes a deny statement for the s3:createBucket action and a condition statement where s3:x-amz-server-side-encryption is not aws:kms. Attach the SCP to the root of the organization.",
        "Create an AWS CloudFormation stack set to enable an AWS CloudTrail trail to capture S3 data events for the organization. In the stack set, create an Amazon EventBridge rule to match S3 PutObject events that do not use AWS KMS encryption. Configure the rule to target an Amazon Simple Notification Service (Amazon SNS) topic.",
        "Create an SCP that includes a deny statement for the s3:putObject action and a condition where s3:x-amz-server- side-encryption is not aws:kms. Attach the SCP to the root of the organization."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_331",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company has several AWS accounts. An Amazon Connect instance runs in each account. The company uses an Amazon EventBridge default event bus in each account for event handling. A DevOps team needs to receive all the Amazon Connect events in a single DevOps account. Which solution meets these requirements?",
      "options": [
        "Update the resource-based policy of the default event bus in each account to allow the DevOps account to replay events. Configure an EventBridge rule in the DevOps account that matches Amazon Connect events and has a target of the default event bus in the other accounts.",
        "Update the resource-based policy of the default event bus in the DevOps account. Update the policy to allow events to be received from the accounts. Configure an EventBridge rule in each account that matches Amazon Connect events and has a target of the DevOps account ' s default event bus.",
        "Update the resource-based policy of the default event bus in the DevOps account. Update the policy to allow events to be replayed by the accounts. Configure an EventBridge rule in each account that matches Amazon Connect events and has a target of the DevOps account ' s default event bus.",
        "Update the resource-based policy of the default event bus in each account to allow the DevOps account to receive events. Configure an EventBridge rule in the DevOps account that matches Amazon Connect events and has a target of the default event bus in the other accounts."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_332",
      "batch": "Batch 7",
      "type": "multiple",
      "prompt": "A company uses S3 to store images and requires multi-Region DR with two-way replication and #15-minute latency. Which steps meet the requirements? (Select THREE.)",
      "options": [
        "Enable S3 Replication Time Control (RTC) for each replication rule.",
        "Enable S3 Transfer Acceleration.",
        "Use Route 53 ARC to shift traffic during failover.",
        "Use Route 53 ARC routing control.",
        "Create S3 Multi-Region Access Point (active/passive).",
        "Call SubmitMultiRegionAccessPointRoutes during failover."
      ],
      "correctAnswers": [
        0,
        4
      ],
      "explanation": "Correct Answer: AE",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_333",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company uses AWS Lambda functions in the primary operating AWS Region of its AWS account. The company manually created the Lambda functions. The company needs to use a Python-based AWS Cloud Development Kit (AWS CDK) application to manage the Lambda functions. Which solution meets these requirements with the LEAST implementation effort?",
      "options": [
        "Start a partial scan by using the AWS CloudFormation IaC generator. Filter by the Lambda resource type. Create a CloudFormation template. Replace the code properties, then convert the template to an AWS CDK app.",
        "Start a partial scan by using the AWS CloudFormation IaC generator. Filter by the Lambda resource type. Create an AWS CDK app from the scanned resources.",
        "Create a resource inventory by using AWS Config. Filter by the Lambda resource type. Export the inventory to a .csv file. Write an AWS CDK app that references the Lambda functions from the .csv file.",
        "Start a partial scan by using the AWS CloudFormation IaC generator. Filter by the Lambda resource type. Create a CloudFormation template from the scanned resources. Convert the template to an AWS CDK app."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_334",
      "batch": "Batch 7",
      "type": "multiple",
      "prompt": "A DevOps team supports an application that runs on a large number of Amazon EC2 instances in an Auto Scaling group. The DevOps team uses AWS CloudFormation to deploy the EC2 instances. The application recently experienced an issue. A single instance returned errors to a large percentage of requests. The EC2 instance responded as healthy to both Amazon EC2 and Elastic Load Balancing health checks. The DevOps team collects application logs in Amazon CloudWatch by using the embedded metric format. The DevOps team needs to receive an alert if any EC2 instance is responsible for more than half of all errors. Which combination of steps will meet these requirements with the LEAST operational overhead? (Select TWO.)",
      "options": [
        "Create a resource group in AWS Resource Groups. Use the CloudFormation stack to group the resources for the application. Add the application to CloudWatch Application Insights. Use the resource group to identify the application.",
        "Create a CloudWatch subscription filter for the application logs that filters for errors and invokes an AWS Lambda function. Configure the Lambda function to send the instance ID and error in a notification to an Amazon Simple Notification Service (Amazon SNS) topic to notify the DevOps team.",
        "Create a metric filter for the application logs to count the occurrence of the term \" Error. \" Create a CloudWatch alarm that uses the METRIC_COUNT function to determine whether errors have occurred. Configure the CloudWatch alarm to send a notification to an Amazon Simple Notification Service (Amazon SNS) topic to notify the DevOps team.",
        "Create a CloudWatch alarm that uses the INSIGHT_RULE_METRIC function to determine whether a specific instance is responsible for more than half of all errors reported by EC2 instances. Configure the CloudWatch alarm to send a notification to an Amazon Simple Notification Service (Amazon SNS) topic to notify the DevOps team.",
        "Create a CloudWatch Contributor Insights rule that groups logs from the CloudWatch application logs based on instance ID and errors."
      ],
      "correctAnswers": [
        0,
        3
      ],
      "explanation": "Correct Answer: AD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_335",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company's EC2 fleet must maintain up-to-date security patches and compliance reporting. Which solution meets these requirements?",
      "options": [
        "SSH into each instance manually.",
        "Use CloudFormation redeployment for every patch.",
        "Use Systems Manager Patch Manager with AWS Config compliance rules and automation documents.",
        "Rebuild instances in Auto Scaling groups with latest AMIs."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_336",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company uses Amazon RDS for Microsoft SQL Server as its primary database. They need high availability within and across AWS Regions, with an RPO < 1 min and RTO < 10 min. Route 53 CNAME is used for the DB endpoint and must redirect to standby during failover. Which solution meets these requirements?",
      "options": [
        "Deploy RDS Multi-AZ with snapshots copied every 5 minutes; use Lambda to restore snapshot and update Route 53 on failover.",
        "Deploy an Amazon RDS for SQL Server Multi-AZ DB cluster with cross-Region read replicas. Use automation to promote replica and update Route 53.",
        "Deploy Single-AZ RDS and use AWS DMS to continuously replicate to another Region. Use CloudWatch alarms for failover notification.",
        "Deploy Single-AZ RDS and use AWS Backup for cross-Region backups every 30 seconds. Use automation to restore and update Route 53 during failover."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_337",
      "batch": "Batch 7",
      "type": "multiple",
      "prompt": "A company runs an application in an Amazon Elastic Container Service (Amazon ECS) service that is associated with an Elastic Load Balancing (ELB) target group. A DevOps engineer updates the service to include a new task definition version. The DevOps engineer notices that the deployment does not finish running. New tasks enter a stopped state soon after the tasks launch. The task definition references an Amazon CloudWatch Logs log group. Which issues are most likely the cause of the failing deployment? (Select TWO.)",
      "options": [
        "The task role does not have the required permissions to launch the task.",
        "An essential container in the ECS task is exiting.",
        "The target group health check is failing, which causes Amazon ECS to stop the tasks.",
        "The CloudWatch Logs log group that is referenced in the task definition does not exist.",
        "The IAM role that the DevOps engineer used to update the ECS service does not have the Amazon ECS RunTask permission"
      ],
      "correctAnswers": [
        1,
        2
      ],
      "explanation": "Correct Answer: BC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_338",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company uses an Amazon Elastic Kubernetes Service (Amazon EKS) cluster to host its machine learning (ML) application. As the ML model and the container image size grow, the time that new pods take to start up has increased to several minutes. A DevOps engineer needs to reduce the startup time to seconds. The solution must also reduce the startup time to seconds when the pod runs on nodes that were recently added to the cluster. The DevOps engineer creates an Amazon EventBridge rule that invokes an automation in AWS Systems Manager. The automation prefetches the container images from an Amazon Elastic Container Registry (Amazon ECR) repository when new images are pushed to the repository. The DevOps engineer also configures tags to be applied to the cluster and the node groups. What should the DevOps engineer do next to meet the requirements?",
      "options": [
        "Create an IAM role that has a policy that allows EventBridge to use Systems Manager to run commands in the EKS cluster ' s nodes. Create a Systems Manager State Manager association that uses the nodes ' machine size to prefetch corresponding container images.",
        "Create an IAM role that has a policy that allows EventBridge to use Systems Manager to run commands in the EKS cluster ' s nodes. Create a Systems Manager State Manager association that uses the nodes ' tags to prefetch corresponding container images.",
        "Create an IAM role that has a policy that allows EventBridge to use Systems Manager to run commands in the EKS cluster ' s control plane nodes. Create a Systems Manager State Manager association that uses the control plane nodes ' tags to prefetch corresponding container images.",
        "Create an IAM role that has a policy that allows EventBridge to use Systems Manager to run commands in the EKS cluster ' s control plane nodes. Create a Systems Manager State Manager association that uses the nodes ' tags to prefetch corresponding container images."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_339",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company recently launched multiple applications that use Application Load Balancers. Application response time often slows down when the applications experience problems A DevOps engineer needs to Implement a monitoring solution that alerts the company when the applications begin to perform slowly The DevOps engineer creates an Amazon Simple Notification Semce (Amazon SNS) topic and subscribe the company ' s email address to the topic What should the DevOps engineer do next to meet the requirements?",
      "options": [
        "Create an Amazon CloudWatch alarm that uses the AWS/AppljcabonELB namespace RequestCountPerTarget metric Configure the CloudWatch alarm to send a notification when the number of connections becomes greater than the configured number of threads that the application supports Configure the CloudWatch alarm to use the SNS topic.",
        "Create an Amazon EventBridge rule that invokes an AWS Lambda function to query the applications on a 5-minute interval Configure the Lambda function to publish a notification to the SNS topic when the applications return errors.",
        "Create an Amazon CloudWatch Synthetics canary that runs a custom script to query the applications on a 5-minute interval. Configure the canary to use the SNS topic when the applications return errors.",
        "Create an Amazon CloudWatch alarm that uses the AWS/ApplicationELB namespace RequestCountPerTarget metric Configure the CloudWatch alarm to send a notification when the average response time becomes greater than the longest response time that the application supports Configure the CloudWatch alarm to use the SNS topic"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_340",
      "batch": "Batch 7",
      "type": "multiple",
      "prompt": "A company has a fleet of Amazon EC2 instances that run Linux in a single AWS account. The company is using an AWS Systems Manager Automation task across the EC2 instances. During the most recent patch cycle, several EC2 instances went into an error state because of insufficient available disk space. A DevOps engineer needs to ensure that the EC2 instances have sufficient available disk space during the patching process in the future. Which combination of steps will meet these requirements? {Select TWO.)",
      "options": [
        "Create an Amazon CloudWatch log group for the EC2 instances. Configure a cron job that is installed on each EC2 instance to write the available disk space to a CloudWatch log stream for the relevant EC2 instance.",
        "Create an Amazon CloudWatch alarm to monitor available disk space on all EC2 instances Add the alarm as a safety control to the Systems Manager Automation task.",
        "Create a cron job that is installed on each EC2 instance to periodically delete temporary files.",
        "Create an AWS Lambda function to periodically check for sufficient available disk space on all EC2 instances by evaluating each EC2 instance ' s respective Amazon CloudWatch log stream.",
        "Ensure that the Amazon CloudWatch agent is installed on all EC2 instances"
      ],
      "correctAnswers": [
        1,
        4
      ],
      "explanation": "Correct Answer: BE",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_341",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A security team is concerned that a developer can unintentionally attach an Elastic IP address to an Amazon EC2 instance in production. No developer should be allowed to attach an Elastic IP address to an instance. The security team must be notified if any production server has an Elastic IP address at any time How can this task be automated ‘ ?",
      "options": [
        "Attach an 1AM policy to the developers ' 1AM group to deny associate-address permissions Create a custom AWS Config rule to check whether an Elastic IP address is associated with any instance tagged as production, and alert the security team",
        "Use Amazon Athena to query AWS CloudTrail logs to check for any associate-address attempts Create an AWS Lambda function to disassociate the Elastic IP address from the instance, and alert the security team.",
        "Create an AWS Config rule to check that all production instances have EC2 1AM roles that include deny associate-address permissions Verify whether there is an Elastic IP address associated with any instance, and alert the security team if an instance has an Elastic IP address associated with it.",
        "Ensure that all 1AM groups associated with developers do not have associate-address permissions. Create a scheduled AWS Lambda function to check whether an Elastic IP address is associated with any instance tagged as production, and alert the secunty team if an instance has an Elastic IP address associated with it"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_342",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company uses Amazon RDS for Microsoft SQL Server as its primary database for applications. The company needs to ensure high availability within and across AWS Regions. An Amazon Route 53 CNAME record is configured for the database endpoint. The applications connect to the database endpoint. The company must redirect application traffic to a standby database during a failover event. The company must maintain an RPO of less than 1 minute and an RTO of less than 10 minutes . Which solution will meet these requirements?",
      "options": [
        "Deploy an Amazon RDS for SQL Server Single-AZ DB instance . Configure AWS Backup to create cross-Region backups every 30 seconds. Use automation to restore the latest backup and to update the Route 53 record during failover.",
        "Deploy an Amazon RDS for SQL Server Single-AZ DB instance . Use AWS Database Migration Service (AWS DMS) to replicate data continuously to an RDS DB instance in another Region. Use Amazon CloudWatch alarms to notify the company about failover events.",
        "Deploy an Amazon RDS for SQL Server Multi-AZ DB cluster deployment that uses cross-Region read replicas . Use automation to promote the read replica to a standalone instance and to update the Route 53 record.",
        "Deploy an Amazon RDS for SQL Server Multi-AZ DB cluster deployment. Set up automated snapshots to be copied to another Region every 5 minutes. Use AWS Lambda to restore the latest snapshot in the secondary Region during failover."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_343",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company runs a development environment website and database on an Amazon EC2 instance that uses Amazon Elastic Block Store (Amazon EBS) storage. The company wants to make the instance more resilient to underlying hardware issues. The company wants to automatically recover the EC2 instance if AWS determines the instance has lost network connectivity. Which solution will meet these requirements?",
      "options": [
        "Add the EC2 instance to an Auto Scaling group. Set the minimum, maximum, and desired capacity to 1.",
        "Create an Amazon CloudWatch alarm for the StatusCheckFailed_System metric. Add an EC2 action to recover the instance when the alarm state is in ALARM.",
        "Add the EC2 instance to an Auto Scaling group. Configure a lifecycle hook to detach the EBS volume if the EC2 instance shuts down or terminates.",
        "Create an Amazon CloudWatch alarm for the NetworkOut metric. Add an EC2 action to recover the instance when the alarm state is in INSUFFICIENT_DATA."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_344",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A SaaS company uses ECS (Fargate) behind an ALB and CodePipeline + CodeDeploy for blue/green deployments. They need automatic, incremental traffic shifting over time with no downtime. Which solution will meet these requirements?",
      "options": [
        "Use TimeBasedCanary.",
        "Use AllAtOnce deployment configuration.",
        "Use TimeBasedLinear in appspec.yaml with defined percentage and interval.",
        "Configure weighted routing on ALB manually."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_345",
      "batch": "Batch 7",
      "type": "multiple",
      "prompt": "A company ' s development team uses AVMS Cloud Formation to deploy its application resources The team must use for an changes to the environment The team cannot use AWS Management Console or the AWS CLI to make manual changes directly. The team uses a developer IAM role to access the environment The role is configured with the Admnistratoraccess managed policy. The company has created a new Cloudformationdeployment IAM role that has the following policy. The company wants ensure that only CloudFormation can use the new role. The development team cannot make any manual changes to the deployed resources. Which combination of steps meet these requirements? (Select THREE.)",
      "options": [
        "Remove me Administratoraccess policy. Assign the ReadOnly/Access managed IAM policy to the developer role Instruct the developers to assume the CloudFormatondeployment role when the developers new stacks",
        "Add an IAM policy to CloudFormationDeplyment to allow cloudformation * on an Add a policy that allows the iam.PassR01e action for ARN of if iam PassedT0Service equal cloudformation.amazonaws.com",
        "Configure the IAM to be to get and pass the CloudFormationDeployment role ifcloudformation actions for resources,",
        "Update the trust of CloudFormationDeployment role to allow the developer IAM role to assume the CloudFormationDepoyment role.",
        "Update the trust Of the CloudFormationDepoyment role to anow the cloudformation.amazonaws.com AWS principal to perform the iam:AssumeR01e action",
        "Remove the AdministratorAccess policy. Assign the ReadOnIyAccess managed IAM policy to the developer role. Instruct the developers to use the CloudFormationDeployment role as a CloudFormation service role when the developers deploy new stacks."
      ],
      "correctAnswers": [
        1,
        4,
        5
      ],
      "explanation": "Correct Answer: BEF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_346",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company is building a web application on AWS. The application uses AWS CodeConnections to access a Git repository. The company sets up a pipeline in AWS CodePipeline that automatically builds and deploys the application to a staging environment when the company pushes code to the main branch. Bugs and integration issues sometimes occur in the main branch because there is no automated testing integrated into the pipeline. The company wants to automatically run tests when code merges occur in the Git repository and to prevent deployments from reaching the staging environment if any test fails. Tests can run up to 20 minutes. Which solution will meet these requirements?",
      "options": [
        "Configure the Git repository to push code to an Amazon S3 bucket during each code merge. Use S3 Event Notifications to initiate tests and to revert the code merge if a test fails.",
        "Configure AWS Batch to use Docker images of test environments. Integrate AWS Batch into the pipeline. Add an AWS Lambda function to the pipeline that submits the batch jobs and reverts the code merge if a test fails.",
        "Configure Git webhooks to initiate an AWS Lambda function during each code merge. Configure the Lambda function to run tests programmatically and to stop the pipeline if a test fails.",
        "Add an AWS CodeBuild action to the pipeline. Add a buildspec.yml file to the Git repository to define commands to run tests. Configure the pipeline to stop the deployment if a test fails."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_347",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A DevOps engineer needs to install antivirus software on all Amazon EC2 instances in an AWS account. The EC2 instances run the most recent Amazon Linux version. The solution must detect all instances and use an AWS Systems Manager document to install the software if missing. Which solution will meet these requirements?",
      "options": [
        "Create an association in Systems Manager State Manager targeting all managed nodes. Include the software and Systems Manager document.",
        "Use AWS Config with a custom rule to check for antivirus installation. Configure automatic remediation using the Systems Manager document.",
        "Use Amazon Inspector to detect missing software and associate with Systems Manager automation.",
        "Use EventBridge to detect EC2 RunInstances events and trigger SSM automation."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_348",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company has a web application that publishes logs that contain metadata for transactions, with a status of success or failure for each log. The logs are in JSON format. The application publishes the logs to an Amazon CloudWatch Logs log group. The company wants to create a dashboard that displays the number of successful transactions. Which solution will meet this requirement with the LEAST operational overhead?",
      "options": [
        "Create a CloudWatch metric filter for the log groups with a filter pattern that matches the transaction status property and a value of success. Create a CloudWatch dashboard by using a metric graph that displays the new metric.",
        "Create a CloudWatch subscription filter for the log group that uses an AWS Lambda function. Configure the Lambda function to parse the JSON logs and publish a custom metric to CloudWatch for transactions that have a status of success. Create a CloudWatch dashboard by using a metric graph that displays the custom metric.",
        "Create an Amazon Kinesis data stream that is subscribed to the log group. Configure the data stream to filter incoming log data based on a status of success and to send the filtered logs to an AWS Lambda function. Configure the Lambda function to publish a custom metric to CloudWatch. Create a CloudWatch dashboard by using a metric graph that displays the custom metric.",
        "Create an Amazon OpenSearch Service cluster and an OpenSearch Service subscription filter to send the log group data to the cluster. Create a dashboard within the Dashboards feature in the OpenSearch Service cluster by using a search query for transactions that have a status of success."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_349",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company is using AWS Organizations to centrally manage its AWS accounts. The company has turned on AWS Config in each member account by using AWS Cloud Formation StackSets The company has configured trusted access in Organizations for AWS Config and has configured a member account as a delegated administrator account for AWS Config A DevOps engineer needs to implement a new security policy The policy must require all current and future AWS member accounts to use a common baseline of AWS Config rules that contain remediation actions that are managed from a central account Non-administrator users who can access member accounts must not be able to modify this common baseline of AWS Config rules that are deployed into each member account Which solution will meet these requirements?",
      "options": [
        "Create a CloudFormation template that contains the AWS Config rules and remediation actions Deploy the template from the delegated administrator account by using AWS Config.",
        "Create an AWS Config conformance pack that contains the AWS Config rules and remediation actions Deploy the pack from the Organizations management account by using CloudFormation StackSets.",
        "Create an AWS Config conformance pack that contains the AWS Config rules and remediation actions.Deploy the pack from the delegated administrator account by using AWS Config.",
        "Create a CloudFormation template that contains the AWS Config rules and remediation actions. Deploy the template from the Organizations management account by using CloudFormation StackSets"
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_350",
      "batch": "Batch 7",
      "type": "single",
      "prompt": "A company is developing a mobile app that requires extensive automated testing across multiple device types. The company is using AWS CodePipeline for its CI/CD pipeline. The company must implement a scalable testing solution that can handle increased test loads as the app grows. Which solution will meet these requirements with the LEAST management overhead?",
      "options": [
        "Integrate AWS Device Farm with the pipeline to run the tests and scale as needed.",
        "Deploy a fleet of Amazon EC2 instances with various mobile device emulators and auto scaling to run the tests. Create a custom AWS Lambda function to invoke EC2 test runs.",
        "Implement a containerized testing solution that uses Amazon Elastic Container Service (Amazon ECS) with auto scaling. Configure the pipeline to invoke an AWS Lambda function to start the test runs on the ECS cluster.",
        "Use AWS Lambda functions with custom runtime emulators to run the tests. Integrate the Lambda functions with the pipeline."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_351",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company requires all its employees to access secrets and parameters through AWS Systems Manager Parameter Store. All secrets must automatically rotate every 60 days. A DevOps engineer must add a new secret to give an application access to an Amazon ElastiCache (Redis OSS) cluster. Which solution will meet these requirements with the LEAST operational overhead?",
      "options": [
        "Create the secret in AWS Secrets Manager. Enable rotation. Set the rotation frequency to 60 days. Configure the application to reference the secret value by using the fully qualified path in Parameter Store.",
        "Create the secret in Parameter Store. Create an AWS Lambda function to rotate the secret. Configure an Amazon EventBridge event to invoke the Lambda function every 60 days. Configure the application to provide the unique secret name to Parameter Store to retrieve the secret.",
        "Create the secret in Parameter Store. Enable automatic rotation. Set the rotation frequency to 60 days. Configure the application to reference the secret value by using the fully qualified path in Parameter Store.",
        "Create the secret in AWS Secrets Manager. Enable rotation by AWS Lambda function. Use the Secrets Manager provided template for ElastiCache (Redis OSS) secrets. Set the rotation schedule to 60 days.Set a rotation window duration in Secrets Manager. Configure the application to provide the full reserved path to Parameter Store when the application accesses the secret."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_352",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company frequently creates Docker images stored in Amazon ECR, with both tagged and untagged versions. The company wants to delete stale or unused images while keeping a minimum count. Which solution meets this requirement?",
      "options": [
        "Use Systems Manager automation scripts.",
        "Use ECR Lifecycle Policies based on image age or count.",
        "Schedule Lambda to delete by age.",
        "Use S3 lifecycle policies (not applicable)."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_353",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A DevOps team deploys an ECS app behind an ALB using CodeDeploy with all-at-once strategy. Recent deployment increased response times, requiring rollback. The team wants a deployment strategy to monitor new versions before full traffic shift and rollback quickly if issues occur. Which steps meet these requirements? (Select TWO.)",
      "options": [
        "Create a CloudWatch alarm on ALB UnHealthyHostCount and associate it with the deployment group for rollback.",
        "Create a CloudWatch alarm on ALB TargetConnectionErrorCount and associate it with the deployment group for rollback.",
        "Use CodeDeployDefault.ECSLinear10PercentEvery3Minutes deployment configuration.",
        "Use CodeDeployDefault.ECSCanary10Percent5Minutes deployment configuration.",
        "Create a CloudWatch alarm on ALB TargetResponseTime and associate it with the deployment group for rollback."
      ],
      "correctAnswers": [
        3,
        4
      ],
      "explanation": "Correct Answer: DE",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_354",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A DevOps team uses AWS CodePipeline, AWS CodeBuild, and AWS CodeDeploy to deploy an application. The application is a REST API that uses AWS Lambda functions and Amazon API Gateway Recent deployments have introduced errors that have affected many customers. The DevOps team needs a solution that reverts to the most recent stable version of the application when an error is detected. The solution must affect the fewest customers possible. Which solution Will meet these requirements With the MOST operational efficiency?",
      "options": [
        "Set the deployment configuration in CodeDeploy to LambdaCanary10Percent10Minutes. Configure automatic rollbacks on the deployment group Create an Amazon CloudWatch alarm that detects HTTP Bad Gateway errors on API Gateway Configure the deployment group to roll back when the number of alarms meets the alarm threshold",
        "Set the deployment configuration in CodeDeploy to LambdaCanaryIOPercentIOMinutes Configure manual rollbacks on the deployment group Create a metric filter on an Amazon CloudWatch log group for API Gateway to monitor HTTP Bad Gateway errors. Configure the metric filter to Invoke a new Lambda function that stops the current eployment and starts the most recent successful deployment",
        "Set the deployment configuration in CodeDeploy to LambdaAllAtOnce Configure manual rollbacks on the deployment group. Create an Amazon Simple Notification Service (Amazon SNS) topc to send notifications every time a deployrnent fads. Configure the SNS topc to Invoke a new Lambda function that stops the current deployment and starts the most recent successful deployment",
        "Set the deployment configuration in CodeDepIoy to LambdaAlIAtOnce Configure automatic rollbacks on the deployment group Create an Amazon CloudWatch alarm that detects HTTP Bad Gateway errors on API Gateway Configure the deployment group to roll back when the number of alarms meets the alarm threshold"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_355",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company uses an organization in AWS Organizations to manage multiple AWS accounts in multiple OUs. The company is planning to implement a comprehensive account management solution and wants to ensure consistent baseline configurations. A DevOps engineer is developing a solution to automatically deploy AWS CloudFormation templates to new AWS accounts. The specific CloudFormation template that the solution deploys must vary based on which organizational unit (OU) each new account is placed in. Which solution will meet these requirements with the LEAST operational overhead?",
      "options": [
        "Enable AWS Control Tower. Use Customizations for AWS Control Tower (CfCT) to deploy each CloudFormation template from a centralized account. Create a GitHub repository to store the entire configuration package, including the CloudFormation templates and a manifest file that maps each CloudFormation template to its corresponding OU.",
        "Store the CloudFormation templates in an Amazon S3 bucket by using a separate prefix for each AWS account. Create an AWS Lambda function that deploys a specific CloudFormation template to each new AWS account based on the prefix path that indicates where each template is located in the S3 bucket.",
        "Store CloudFormation templates in an Amazon S3 bucket. Create an AWS Lambda function that deploys a specific CloudFormation template to the new AWS accounts based on the OU each new account is in. Create an Amazon EventBridge rule that matches \" eventName \" : \" CreateAccountResult \" and \" state \" : \" SUCCEEDED. \" Set the Lambda function as the target of the EventBridge rule.",
        "Enable AWS Control Tower. Build a pipeline in AWS CodePipeline to deploy the CloudFormation deployment from a centralized account. Create a GitHub repository to store the entire configuration package, including the CloudFormation templates and a manifest file that maps each CloudFormation template to its corresponding OU. After the code is updated in GitHub, initiate the pipeline and deploy the CloudFormation templates to the new AWS accounts."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_356",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company is migrating its product development teams from an on-premises data center to a hybrid environment. The new environment will add four AWS Regions and will give the developers the ability to use the Region that is geographically closest to them. All the development teams use a shared set of Linux applications. The on-premises data center stores the applications on a NetApp ONTAP storage device. The storage volume is mounted read-only on the development on-premises VMs. The company updates the applications on the shared volume once a week. A DevOps engineer needs to replicate the data to all the new Regions. The DevOps engineer must ensure that the data is always up to date with deduplication. The data also must not be dependent on the availability of the on-premises storage device. Which solution will meet these requirements?",
      "options": [
        "Create an Amazon FSx File Gateway in one Region. Create file servers in Amazon FSx for Windows File Server in each Region. Set up a cron job to copy the data from the storage device to the FSx File Gateway.",
        "Create an Amazon S3 File Gateway in the on-premises data center. Create S3 buckets in each Region. Set up a cron job to copy the data from the storage device to the S3 File Gateway. Set up S3 Cross- Region Replication (CRR) to the S3 buckets in each Region.",
        "Create Multi-AZ Amazon FSx for NetApp ONTAP instances and volumes in each Region. Configure a scheduled SnapMirror relationship between the on-premises storage device and the FSx for ONTAP instances.",
        "Create an Amazon Elastic File System (Amazon EFS) file system in each Region. Deploy an AWS DataSync agent in the on-premises data center. Configure a schedule for DataSync to copy the data to Amazon EFS daily."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_357",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A developer is creating a proof of concept for a new software as a service (SaaS) application. The application is in a shared development AWS account that is part of an organization in AWS Organizations . The developer needs to create service-linked IAM roles for the AWS services that are being considered for the proof of concept. The solution needs to give the developer the ability to create and configure the service- linked roles only . Which solution will meet these requirements?",
      "options": [
        "Create an IAM role that has the necessary IAM access to allow the developer to create policies and roles. Create and attach a permissions boundary to the role. Grant the developer access to assume the role.",
        "Create an IAM user for the developer in the organization's management account. Configure a cross- account role in the development account for the developer to use. Limit the scope of the cross-account role to common services.",
        "Add an SCP to the development account in Organizations. Configure the SCP with a Deny rule for iam: * to limit the developer's access.",
        "Add the developer to an IAM group. Attach the PowerUserAccess managed policy to the IAM group. Enforce multi-factor authentication (MFA) on the user account."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_358",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A company uses AWS Organizations to manage multiple AWS accounts. The company needs a solution to improve the company ' s management of AWS resources in a production account. The company wants to use AWS CloudFormation to manage all manually created infrastructure. The company must have the ability to strictly control who can make manual changes to AWS infrastructure. The solution must ensure that users can deploy new infrastructure only by making changes to a CloudFormation template that is stored in an AWS CodeConnections compatible Git provider. Which combination of steps will meet these requirements with the LEAST implementation effort? (Select THREE).",
      "options": [
        "Use CodeConnections to establish a connection between the Git provider and AWS CodePipeline. Push the CloudFormation template to the Git repository. Run a pipeline in CodePipeline that deploys the CloudFormation stack for every merge into the Git repository.",
        "Create an IAM role, and set CloudFormation as the principal. Grant the IAM role access to manage the stack resources. Create an SCP that denies all actions to all the principals except by the IAM role. Link the SCP with the production OU.",
        "Configure the CloudFormation infrastructure as code (IaC) generator to scan for existing resources in the AWS account. Create a CloudFormation template that includes the scanned resources. Import the CloudFormation template into a new CloudFormation stack.",
        "Configure AWS Config to scan for existing resources in the AWS account. Create a CloudFormation template that includes the scanned resources. Import the CloudFormation template into a new CloudFormation stack.",
        "Use CodeConnections to establish a connection between the Git provider and CloudFormation. Push the CloudFormation template to the Git repository. Sync the Git repository with the CloudFormation stack.",
        "Create an IAM role, and set CloudFormation as the principal. Grant the IAM role access to manage the stack resources. Create an SCP that allows all actions to only the IAM role. Link the SCP with the production"
      ],
      "correctAnswers": [
        0,
        1,
        2
      ],
      "explanation": "Correct Answer: ABC",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_359",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A DevOps team is deploying microservices for an application on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The cluster uses managed node groups. The DevOps team wants to enable auto scaling for the microservice Pods based on a specific CPU utilization percentage. The DevOps team has already installed the Kubernetes Metrics Server on the cluster. Which solution will meet these requirements in the MOST operationally efficient way?",
      "options": [
        "Edit the Auto Scaling group that is associated with the worker nodes of the EKS cluster. Configure the Auto Scaling group to use a target tracking scaling policy to scale when the average CPU utilization of the Auto Scaling group reaches a specific percentage.",
        "Deploy the Kubernetes Horizontal Pod Autoscaler (HPA) and the Kubernetes Cluster Autoscaler in the cluster. Configure the HPA to scale based on the target CPU utilization percentage. Configure the Cluster Autoscaler to use the auto-discovery setting.",
        "Run the AWS Systems Manager AWS-UpdateEKSManagedNodeGroup Automation document. Modify the values for NodeGroupDesiredSize, NodeGroupMaxSize, and NodeGroupMinSize to be based on an estimate for the required node size.",
        "Deploy the Kubernetes Horizontal Pod Autoscaler (HPA) and the Kubernetes Vertical Pod Autoscaler (VPA) in the cluster. Configure the HPA to scale based on the target CPU utilization percentage. Configure the VPA to use the recommender mode setting."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_360",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company uses Amazon RDS for Microsoft SQL Server as its primary database and must ensure cross- Region high availability with RPO < 1 min and RTO < 10 min. Which solution meets these requirements?",
      "options": [
        "Use single-AZ with Backup and restore.",
        "Use RDS Multi-AZ DB cluster with cross-Region read replicas. Automate failover via Route 53.",
        "Use single-AZ RDS + DMS continuous replication.",
        "Use Multi-AZ cluster with snapshots copied cross-Region."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_361",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A DevOps engineer needs to configure an AWS CodePipeline pipeline that publishes container images to an Amazon Elastic Container Registry (Amazon ECR) repository. The pipeline must wait for the previous run to finish and must run when new Git tags are pushed to a Git repository that is connected to AWS CodeConnections. An existing deployment pipeline needs to run in response to the publication of new container images. Which solution will meet these requirements?",
      "options": [
        "Configure a CodePipeline V2 type pipeline that uses SUPERSEDED mode. Add a trigger filter to the pipeline definition that includes all branches. Configure an Amazon EventBridge rule that matches container image pushes to start the existing deployment pipeline.",
        "Configure a CodePipeline V1 type pipeline that uses QUEUED mode. Add a trigger filter to the pipeline definition that includes all branches. Add a stage at the end of the pipeline to invoke the existing deployment pipeline.",
        "Configure a CodePipeline V1 type pipeline that uses SUPERSEDED mode. Add a trigger filter to the pipeline definition that includes all tags. Add a stage at the end of the pipeline to invoke the existing deployment pipeline.",
        "Configure a CodePipeline V2 type pipeline that uses QUEUED mode. Add a trigger filter to the pipeline definition that includes all tags. Configure an Amazon EventBridge rule that matches container image pushes to start the existing deployment pipeline."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_362",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company uses AWS Directory Service for Microsoft Active Directory as its identity provider (IdP). The company requires all infrastructure to be defined and deployed by AWS CloudFormation. A DevOps engineer needs to create a fleet of Windows-based Amazon EC2 instances to host an application. The DevOps engineer has created a CloudFormation template that contains an EC2 launch template, IAM role, EC2 security group, and EC2 Auto Scaling group. The DevOps engineer must implement a solution that joins all EC2 instances to the domain of the AWS Managed Microsoft AD directory. Which solution will meet these requirements with the MOST operational efficiency?",
      "options": [
        "Store the existing AWS Managed Microsoft AD domain administrator credentials in AWS Secrets Manager. In the CloudFormation template, update the EC2 launch template to include user data.Configure the user data to pull the administrator credentials from Secrets Manager and to join the AWS Managed Microsoft AD domain. Attach the AmazonSSMManagedlnstanceCore and SecretsManagerReadWrite AWS managed policies to the IAM role that the EC2 instances use.",
        "Store the existing AWS Managed Microsoft AD domain connection details in AWS Secrets Manager. In the CloudFormation template, create an AWS::SSM::Association resource to associate the AWS- CreateManagedWindowslnstanceWithApproval Automation runbook with the EC2 Auto Scaling group. Pass the ARNs for the parameters from Secrets Manager to join the domain. Attach the AmazonSSMDirectoryServiceAccess and SecretsManagerReadWrite AWS managed policies to the IAM role that the EC2 instances use.",
        "In the CloudFormation template, update the launch template to include specific tags that propagate on launch. Create an AWS::SSM::Association resource to associate the AWS- JoinDirectoryServiceDomain Automation runbook with the EC2 instances that have the specified tags. Define the required parameters to join the AWS Managed Microsoft AD directory. Attach the AmazonSSMManagedlnstanceCore and AmazonSSMDirectoryServiceAccess AWS managed policies to the IAM role that the EC2 instances use.",
        "In the CloudFormation template, create an AWS::SSM::Document resource that joins the EC2 instance to the AWS Managed Microsoft AD domain by using the parameters for the existing directory. Update the launch template to include the SSMAssociation property to use the new SSM document. Attach the AmazonSSMManagedlnstanceCore and AmazonSSMDirectoryServiceAccess AWS managed policies to the IAM role that the EC2 instances use."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_363",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company runs an application on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster in the company ' s primary AWS Region and secondary Region. The company uses Auto Scaling groups to distribute each EKS cluster's worker nodes across multiple Availability Zones. Both EKS clusters also have an Application Load Balancer (ALB) to distribute incoming traffic. The company wants to deploy a new stateless application to its infrastructure. The company requires a multi- Region, fault tolerant solution. Which solution will meet these requirements?",
      "options": [
        "Deploy the new application to the EKS cluster in the primary Region. Create Amazon Route 53 records with health checks for the primary Region ALB. Use a simple routing policy.",
        "Deploy the new application to both EKS clusters. Create Amazon Route 53 records with a weighted routing policy that evenly splits traffic between both ALBs. Implement Kubernetes readiness and liveness probes.",
        "Deploy the new application to both EKS clusters. Create Amazon Route 53 records with health checks for both ALBs. Use a failover routing policy. Implement Kubernetes readiness and liveness probes.",
        "Deploy the new application to the EKS cluster in the primary Region. Create Amazon Route 53 records with health checks for the primary Region ALB. Use a failover routing policy."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_364",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A company has deployed a new platform that runs on Amazon Elastic Kubernetes Service (Amazon EKS). The new platform hosts web applications that users frequently update. The application developers build the Docker images for the applications and deploy the Docker images manually to the platform. The platform usage has increased to more than 500 users every day. Frequent updates, building the updated Docker images for the applications, and deploying the Docker images on the platform manually have all become difficult to manage. The company needs to receive an Amazon Simple Notification Service (Amazon SNS) notification if Docker image scanning returns any HIGH or CRITICAL findings for operating system or programming language package vulnerabilities. Which combination of steps will meet these requirements? (Choose two.)",
      "options": [
        "Create an AWS CodeCommit repository to store the Dockerfile and Kubernetes deployment files. Create a pipeline in AWS CodePipeline. Use an Amazon S3 event to invoke the pipeline when a newer version of the Dockerfile is committed. Add a step to the pipeline to initiate the AWS CodeBuild project.",
        "Create an AWS CodeCommit repository to store the Dockerfile and Kubernetes deployment files. Create a pipeline in AWS CodePipeline. Use an Amazon EventBridge event to invoke the pipeline when a newer version of the Dockerfile is committed. Add a step to the pipeline to initiate the AWS CodeBuild project.",
        "Create an AWS CodeBuild project that builds the Docker images and stores the Docker images in an Amazon Elastic Container Registry (Amazon ECR) repository. Turn on basic scanning for the ECR repository. Create an Amazon EventBridge rule that monitors Amazon GuardDuty events. Configure the EventBridge rule to send an event to an SNS topic when the finding-severity-counts parameter is more than 0 at a CRITICAL or HIGH level.",
        "Create an AWS CodeBuild project that builds the Docker images and stores the Docker images in an Amazon Elastic Container Registry (Amazon ECR) repository. Turn on enhanced scanning for the ECR repository. Create an Amazon EventBridge rule that monitors ECR image scan events. Configure the EventBridge rule to send an event to an SNS topic when the finding-severity-counts parameter is more than 0 at a CRITICAL or HIGH level.",
        "Create an AWS CodeBuild project that scans the Dockerfile. Configure the project to build the Docker images and store the Docker images in an Amazon Elastic Container Registry (Amazon ECR) repository if the scan is successful. Configure an SNS topic to provide notification if the scan returns any vulnerabilities."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_365",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A company uses AWS Organizations to manage its AWS accounts. A DevOps engineer must ensure that all users who access the AWS Management Console are authenticated through the company's corporate identity provider (IdP). Which combination of steps will meet these requirements? (Choose two.)",
      "options": [
        "Use Amazon GuardDuty with a delegated administrator account. Use GuardDuty to enforce denial of IAM user logins.",
        "Use AWS IAM Identity Center to configure identity federation with SAML 2.0.",
        "Create a permissions boundary in AWS IAM Identity Center to deny password logins for IAM users.",
        "Create IAM groups in the Organizations management account to apply consistent permissions for all IAM users.",
        "Create an SCP in Organizations to deny password creation for IAM users."
      ],
      "correctAnswers": [
        1,
        4
      ],
      "explanation": "Correct Answer: BE",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_366",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A company uses AWS Organizations to manage its AWS accounts. The company wants its monitoring system to receive an alert when a root user logs in. The company also needs a dashboard to display any log activity that the root user generates. Which combination of steps will meet these requirements? (Choose three.)",
      "options": [
        "Enable AWS Config with a multi-account aggregator. Configure log forwarding to Amazon CloudWatch Logs.",
        "Create an Amazon QuickSight dashboard that uses an Amazon CloudWatch Logs query.",
        "Create an Amazon CloudWatch Logs metric filter to match root user login events. Configure a CloudWatch alarm and an Amazon Simple Notification Service (Amazon SNS) topic to send alerts to the company's monitoring system.",
        "Create an Amazon CloudWatch Logs subscription filter to match root user login events. Configure the filter to forward events to an Amazon Simple Notification Service (Amazon SNS) topic. Configure the SNS topic to send alerts to the company's monitoring system.",
        "Create an AWS CloudTrail organization trail. Configure the organization trail to send events to Amazon CloudWatch Logs.",
        "Create an Amazon CloudWatch dashboard that uses a CloudWatch Logs Insights query."
      ],
      "correctAnswers": [
        2,
        4,
        5
      ],
      "explanation": "Correct Answer: CEF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_367",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A developer is creating a proof of concept for a new software as a service (SaaS) application. The application is in a shared development AWS account that is part of an organization in AWS Organizations. The developer needs to create service-linked IAM roles for the AWS services that are being considered for the proof of concept. The solution needs to give the developer the ability to create and configure the service-linked roles only. Which solution will meet these requirements?",
      "options": [
        "Create an IAM user for the developer in the organization's management account. Configure a cross- account role in the development account for the developer to use. Limit the scope of the cross- account role to common services.",
        "Add the developer to an IAM group. Attach the PowerUserAccess managed policy to the IAM group. Enforce multi-factor authentication (MFA) on the user account.",
        "Add an SCP to the development account in Organizations. Configure the SCP with a Deny rule for iam:* to limit the developer's access.",
        "Create an IAM role that has the necessary IAM access to allow the developer to create policies and roles. Create and attach a permissions boundary to the role. Grant the developer access to assume the role."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_368",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A DevOps team has created a Custom Lambda rule in AWS Config. The rule monitors Amazon Elastic Container Repository (Amazon ECR) policy statements for ecr:* actions. When a noncompliant repository is detected, Amazon EventBridge uses Amazon Simple Notification Service (Amazon SNS) to route the notification to a security team. When the custom AWS Config rule is evaluated, the AWS Lambda function fails to run. Which solution will resolve the issue?",
      "options": [
        "Modify the Lambda function's resource policy to grant AWS Config permission to invoke the function.",
        "Modify the SNS topic policy to include configuration changes for EventBridge to publish to the SNS topic.",
        "Modify the Lambda function's execution role to include configuration changes for custom AWS Config rules.",
        "Modify all the ECR repository policies to grant AWS Config access to the necessary ECR API actions."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_369",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company needs to adopt a multi-account strategy to deploy its applications and the associated CI/CD infrastructure. The company has created an organization in AWS Organizations that has all features enabled. The company has configured AWS Control Tower and has set up a landing zone. The company needs to use AWS Control Tower controls (guardrails) in all AWS accounts in the organization. The company must create the accounts for a multi-environment application and must ensure that all accounts are configured to an initial baseline. Which solution will meet these requirements with the LEAST operational overhead?",
      "options": [
        "Create an AWS Control Tower Account Factory Customization (AFC) blueprint that uses the baseline configuration. Use AWS Control Tower Account Factory to provision a dedicated AWS account for each environment and a CI/CD account by using the blueprint.",
        "Use AWS Control Tower Account Factory to provision a dedicated AWS account for each environment and a CI/CD account. Use AWS CloudFormation StackSets to apply the baseline configuration to the new accounts.",
        "Use Organizations to provision a multi-environment AWS account and a CI/CD account. In the Organizations management account, create an AWS Lambda function that assumes the Organizations access role to apply the baseline configuration to the new accounts.",
        "Use Organizations to provision a dedicated AWS account for each environment, an audit account, and a CI/ CD account. Use AWS CloudFormation StackSets to apply the baseline configuration to the new accounts."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_370",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company is using AWS CodeDeploy to automate software deployment. The deployment must meet these requirements: · A number of instances must be available to serve traffic during the deployment. Traffic must be balanced across those instances, and the instances must automatically heal in the event of failure. · A new fleet of instances must be launched for deploying a new revision automatically, with no manual provisioning. · Traffic must be rerouted to the new environment to half of the new instances at a time. The deployment should succeed if traffic is rerouted to at least half of the instances: otherwise, it should fail. · Before routing traffic to the new fleet of instances, the temporary files generated during the deployment process must be deleted. · At the end of a successful deployment, the original instances in the deployment group must be deleted immediately to reduce costs. How can a DevOps engineer meet these requirements?",
      "options": [
        "Use an Application Load Balancer and an in-place deployment. Associate the Auto Scaling group with the deployment group. Use the Automatically copy Auto Scaling group option, and use CodeDeployDefault.OneAtAtime as the deployment configuration. Instruct AWS CodeDeploy to terminate the original instances in the deployment group, and use the AllowTraffic hook within appspec.yml to delete the temporary files.",
        "Use an Application Load Balancer and a blue/green deployment. Associate the Auto Scaling group and Application Load Balancer target group with the deployment group. Use the Automatically copy Auto Scaling group option, create a custom deployment configuration with minimum healthy hosts defined as 50%, and assign the configuration to the deployment group. Instruct AWS CodeDeploy to terminate the original instances in the deployment group, and use the BeforeBlockTraffic hook within appspec.yml to delete the temporary files.",
        "Use an Application Load Balancer and a blue/green deployment. Associate the Auto Scaling group and the Application Load Balancer target group with the deployment group. Use the Automatically copy Auto Scaling group option, and use CodeDeployDefault.HalfAtAtime as the deployment configuration. Instruct AWS CodeDeploy to terminate the original instances in the deployment group, and use the BeforeAllowTraffic hook within appspec.yml to delete the temporary files.",
        "Use an Application Load Balancer and an in-place deployment. Associate the Auto Scaling group and Application Load Balancer target group with the deployment group. Use the Automatically copy Auto Scaling group option, and use CodeDeployDefault.AllatOnce as a deployment configuration. Instruct AWS CodeDeploy to terminate the original instances in the deployment group, and use the BlockTraffic hook within appspec.yml to delete the temporary files."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_371",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A company wants to deploy a workload on several hundred Amazon EC2 instances. The company will provision the EC2 instances in an Auto Scaling group by using a launch template. The workload will pull files from an Amazon S3 bucket, process the data, and put the results into a different S3 bucket. The EC2 instances must have least-privilege permissions and must use temporary security credentials. Which combination of steps will meet these requirements? (Choose two.)",
      "options": [
        "Create an IAM role that has the appropriate permissions for S3 buckets. Add the IAM role to an instance profile.",
        "Update the launch template to include the IAM instance profile.",
        "Create an IAM user that has the appropriate permissions for Amazon S3. Generate a secret key and token.",
        "Create a trust anchor and profile. Attach the IAM role to the profile.",
        "Update the launch template. Modify the user data to use the new secret key and token."
      ],
      "correctAnswers": [
        0,
        1
      ],
      "explanation": "Correct Answer: AB",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_372",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A company has an application that runs on AWS Lambda and sends logs to Amazon CloudWatch Logs. An Amazon Kinesis data stream is subscribed to the log groups in CloudWatch Logs. A single consumer Lambda function processes the logs from the data stream and stores the logs in an Amazon S3 bucket. The company's DevOps team has noticed high latency during the processing and ingestion of some logs. Which combination of steps will reduce the latency? (Choose three.)",
      "options": [
        "Create a data stream consumer with enhanced fan-out. Set the Lambda function that processes the logs as the consumer.",
        "Increase the ParallelizationFactor setting in the Lambda event source mapping.",
        "Configure reserved concurrency for the Lambda function that processes the logs.",
        "Increase the batch size in the Kinesis data stream.",
        "Turn off the ReportBatchItemFailures setting in the Lambda event source mapping.",
        "Increase the number of shards in the Kinesis data stream."
      ],
      "correctAnswers": [
        0,
        1,
        5
      ],
      "explanation": "Correct Answer: ABF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_373",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company operates sensitive workloads across the AWS accounts that are in the company's organization in AWS Organizations. The company uses an IP address range to delegate IP addresses for Amazon VPC CIDR blocks and all non-cloud hardware. The company needs a solution that prevents principals that are outside the company's IP address range from performing AWS actions in the organization's accounts. Which solution will meet these requirements?",
      "options": [
        "Configure AWS Firewall Manager for the organization. Create an AWS Network Firewall policy that allows only source traffic from the company's IP address range. Set the policy scope to all accounts in the organization.",
        "In Organizations, create an SCP that denies source IP addresses that are outside of the company's IP address range. Attach the SCP to the organization's root.",
        "Configure Amazon GuardDuty for the organization. Create a GuardDuty trusted IP address list for the company's IP range. Activate the trusted IP list for the organization.",
        "In Organizations, create an SCP that allows source IP addresses that are inside of the company's IP address range. Attach the SCP to the organization's root."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_374",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A company deploys an application in two AWS Regions. The application currently uses an Amazon S3 bucket in the primary Region to store data. A DevOps engineer needs to ensure that the application is highly available in both Regions. The DevOps engineer has created a new S3 bucket in the secondary Region. All existing and new objects must be in both S3 buckets. The application must fail over between the Regions with no data loss. Which combination of steps will meet these requirements with the MOST operational efficiency? (Choose three.)",
      "options": [
        "Create a new IAM role that allows the Amazon S3 and S3 Batch Operations service principals to assume the role that has the necessary permissions for S3 replication.",
        "Create a new IAM role that allows the AWS Batch service principal to assume the role that has the necessary permissions for S3 replication.",
        "Create an S3 Cross-Region Replication (CRR) rule on the source S3 bucket. Configure the rule to use the IAM role for Amazon S3 to replicate to the target S3 bucket.",
        "Create a two-way replication rule on the source S3 bucket. Configure the rule to use the IAM role for Amazon S3 to replicate to the target S3 bucket.",
        "Create an AWS Batch job that has an AWS Fargate orchestration type. Configure the job to use the IAM role for AWS Batch. Specify a Bash command to use the AWS CLI to synchronize the contents of the source S3 bucket and the target S3 bucket",
        "Create an operation in S3 Batch Operations to replicate the contents of the source S3 bucket to the target S3 bucket. Configure the operation to use the IAM role for Amazon S3."
      ],
      "correctAnswers": [
        0,
        3,
        5
      ],
      "explanation": "Correct Answer: ADF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_375",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A company uses an organization in AWS Organizations to manage multiple AWS accounts. The company needs an automated process across all AWS accounts to isolate any compromised Amazon EC2 instances when the instances receive a specific tag. Which combination of steps will meet these requirements? (Choose two.)",
      "options": [
        "Use AWS CloudFormation StackSets to deploy the CloudFormation stacks in all AWS accounts.",
        "Create an SCP that has a Deny statement for the ec2:* action with a condition of \"aws:RequestTag/ isolation\": false.",
        "Attach the SCP to the root of the organization.",
        "Create an AWS CloudFormation template that creates an EC2 instance role that has no IAM policies attached. Configure the template to have a security group that has an explicit Deny rule on all traffic. Use the CloudFormation template to create an AWS Lambda function that attaches the IAM role to instances. Configure the Lambda function to add a network ACL. Set up an Amazon EventBridge rule to invoke the Lambda function when a specific tag is applied to a compromised EC2 instance.",
        "Create an AWS CloudFormation template that creates an EC2 instance role that has no IAM policies attached. Configure the template to have a security group that has no inbound rules or outbound rules. Use the CloudFormation template to create an AWS Lambda function that attaches the IAM role to instances. Configure the Lambda function to replace any existing security groups with the new security group. Set up an Amazon EventBridge rule to invoke the Lambda function when a specific tag is applied to a compromised EC2 instance."
      ],
      "correctAnswers": [
        0,
        4
      ],
      "explanation": "Correct Answer: AE",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_376",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company manages multiple AWS accounts by using AWS Organizations with OUs for the different business divisions. The company is updating their corporate network to use new IP address ranges. The company has 10 Amazon S3 buckets in different AWS accounts. The S3 buckets store reports for the different divisions. The S3 bucket configurations allow only private corporate network IP addresses to access the S3 buckets. A DevOps engineer needs to change the range of IP addresses that have permission to access the contents of the S3 buckets. The DevOps engineer also needs to revoke the permissions of two OUs in the company. Which solution will meet these requirements?",
      "options": [
        "Create a new SCP that has two statements, one that allows access to the new range of IP addresses for all the S3 buckets and one that denies access to the old range of IP addresses for all the S3 buckets. Set a permissions boundary for the OrganizationAccountAccessRole role in the two OUs to deny access to the S3 buckets.",
        "Create a new SCP that has a statement that allows only the new range of IP addresses to access the S3 buckets. Create another SCP that denies access to the S3 buckets. Attach the second SCP to the two OUs.",
        "On all the S3 buckets, configure resource-based policies that allow only the new range of IP addresses to access the S3 buckets. Create a new SCP that denies access to the S3 buckets. Attach the SCP to the two OUs.",
        "On all the S3 buckets, configure resource-based policies that allow only the new range of IP addresses to access the S3 buckets. Set a permissions boundary for the OrganizationAccountAccessRole role in the two OUs to deny access to the S3 buckets."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_377",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company has started using AWS across several teams. Each team has multiple accounts and unique security profiles. The company manages the accounts in an organization in AWS Organizations. Each account has its own configuration and security controls. The company's DevOps team wants to use preventive and detective controls to govern all accounts. The DevOps team needs to ensure the security of accounts now and in the future as the company creates new accounts in the organization. Which solution will meet these requirements?",
      "options": [
        "Use Organizations to create OUs that have appropriate SCPs attached for each team. Place team accounts in the appropriate OUs to apply security controls. Create any new team accounts in the appropriate OUs.",
        "Create an AWS Control Tower landing zone. Configure OUs and appropriate controls in AWS Control Tower for the existing teams. Configure trusted access for AWS Control Tower. Enroll the existing accounts in the appropriate OUs that match the appropriate security policies for each team. Use AWS Control Tower to provision any new accounts.",
        "Create AWS CloudFormation stack sets in the organization's management account. Configure a stack set that deploys AWS Config with configuration rules and remediation actions for all controls to each account in the organization. Update the stack sets to deploy to new accounts as the accounts are created.",
        "Configure AWS Config to manage the AWS Config rules across all AWS accounts in the organization. Deploy conformance packs that provide AWS Config rules and remediation actions across the organization."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_378",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company uses an AWS CodeCommit repository to store its source code and corresponding unit tests. The company has configured an AWS CodePipeline pipeline that includes an AWS CodeBuild project that runs when code is merged to the main branch of the repository. The company wants the CodeBuild project to run the unit tests. If the unit tests pass, the CodeBuild project must tag the most recent commit. How should the company configure the CodeBuild project to meet these requirements?",
      "options": [
        "Configure the CodeBuild project to use native Git to done the CodeCommit repository. Configure the project to run the unit tests. Configure the project to use native Git to create a tag and to push the Git tag to the repository if the code passes the unit tests.",
        "Configure the CodeBuild projed to use native Git to done the CodeCommit repository. Configure the project to run the unit tests. Configure the project to use AWS CLI commands to create a new repository tag in the repository if the code passes the unit tests.",
        "Configure the CodeBuild project to use AWS CLI commands to copy the code from the CodeCommit repository. Configure the project to run the unit tests. Configure the project to use AWS CLI commands to create a new Git tag in the repository if the code passes the unit tests.",
        "Configure the CodeBuild project to use AWS CLI commands to copy the code from the CodeCommit repository. Configure the project to run the unit tests. Configure the project to use AWS CLI commands to create a new repository tag in the repository if the code passes the unit tests."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_379",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company's organization in AWS Organizations has a single OU. The company runs Amazon EC2 instances in the OU accounts. The company needs to limit the use of each EC2 instance's credentials to the specific EC2 instance that the credential is assigned to. A DevOps engineer must configure security for the EC2 instances. Which solution will meet these requirements?",
      "options": [
        "Create an SCP that specifies the VPC CIDR block. Configure the SCP to check whether the value of the aws:VpcSourcelp condition key is in the specified block. In the same SCP check, check whether the values of the aws:EC2InstanceSourcePrivatelPv4 and aws:SourceVpc condition keys are the same. Deny access if either condition is false. Apply the SCP to the OU.",
        "Create an SCP that checks whether the values of the aws:EC2InstanceSourceVPC and aws:SourceVpc condition keys are the same. Deny access if the values are not the same. In the same SCP check, check whether the values of the aws:EC2InstanceSourcePrivateIPv4 and aws:VpcSourceIp condition keys are the same. Deny access if the values are not the same. Apply the SCP to the OU.",
        "Create an SCP that includes a list of acceptable VPC values and checks whether the value of the aws:SourceVpc condition key is in the list. In the same SCP check, define a list of acceptable IP address values and check whether the value of the aws:VpcSourceIp condition key is in the list. Deny access if either condition is false. Apply the SCP to each account in the organization.",
        "Create an SCP that checks whether the values of the aws:EC2InstanceSourceVPC and aws:VpcSourceIp condition keys are the same. Deny access if the values are not the same. In the same SCP check, check whether the values of the aws:EC2InstanceSourcePrivateIPv4 and aws:SourceVpc condition keys are the same. Deny access if the values are not the same. Apply the SCP to each account in the organization."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_380",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A company has a fleet of Amazon EC2 instances that run Linux in a single AWS account. The company is using an AWS Systems Manager Automation task across the EC2 instances. During the most recent patch cycle, several EC2 instances went into an error state because of insufficient available disk space. A DevOps engineer needs to ensure that the EC2 instances have sufficient available disk space during the patching process in the future. Which combination of steps will meet these requirements? (Choose two.)",
      "options": [
        "Ensure that the Amazon CloudWatch agent is installed on all EC2 instances.",
        "Create a cron job that is installed on each EC2 instance to periodically delete temporary files.",
        "Create an Amazon CloudWatch log group for the EC2 instances. Configure a cron job that is installed on each EC2 instance to write the available disk space to a CloudWatch log stream for the relevant EC2 instance.",
        "Create an Amazon CloudWatch alarm to monitor available disk space on all EC2 instances. Add the alarm as a safety control to the Systems Manager Automation task.",
        "Create an AWS Lambda function to periodically check for sufficient available disk space on all EC2 instances by evaluating each EC2 instance's respective Amazon CloudWatch log stream."
      ],
      "correctAnswers": [
        0,
        3
      ],
      "explanation": "Correct Answer: AD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_381",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A DevOps engineer is building an application that uses an AWS Lambda function to query an Amazon Aurora MySQL DB cluster. The Lambda function performs only read queries. Amazon EventBridge events invoke the Lambda function. As more events invoke the Lambda function each second, the database's latency increases and the database's throughput decreases. The DevOps engineer needs to improve the performance of the application. Which combination of steps will meet these requirements? (Choose three.)",
      "options": [
        "Use Amazon RDS Proxy to create a proxy. Connect the proxy to the Aurora cluster reader endpoint. Set a maximum connections percentage on the proxy.",
        "Implement database connection pooling inside the Lambda code. Set a maximum number of connections on the database connection pool.",
        "Implement the database connection opening outside the Lambda event handler code.",
        "Implement the database connection opening and closing inside the Lambda event handler code.",
        "Connect to the proxy endpoint from the Lambda function.",
        "Connect to the Aurora cluster endpoint from the Lambda function."
      ],
      "correctAnswers": [
        0,
        2,
        4
      ],
      "explanation": "Correct Answer: ACE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_382",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company has an AWS CloudFormation stack that is deployed in a single AWS account. The company has configured the stack to send event notifications to an Amazon Simple Notification Service (Amazon SNS) topic. A DevOps engineer must implement an automated solution that applies a tag to the specific CloudFormation stack instance only after a successful stack update occurs. The DevOps engineer has created an AWS Lambda function that applies and updates this tag for the specific stack instance. Which solution will meet these requirements?",
      "options": [
        "Run the AWS-UpdateCloudFormationStack AWS Systems ManagerAutomation runbook when Systems Manager detects an UPDATE_COMPLETE event for the instance status of the CloudFormation stack. Configure the runbook to invoke the Lambda function.",
        "Create a custom AWS Config rule that produces a compliance change event if the CloudFormation stack has an UPDATE_COMPLETE instance status. Configure AWS Config to directly invoke the Lambda function to automatically remediate the change event.",
        "Create an Amazon EventBridge rule that matches the UPDATE_COMPLETE event pattern for the instance status of the CloudFormation stack. Configure the rule to invoke the Lambda function.",
        "Adjust the configuration of the CloudFormation stack to send notifications for only an UPDATE_COMPLETE instance status event to the SNS topic. Subscribe the Lambda function to the SNS topic."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_383",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company needs to manage shared libraries for various projects across its development AWS account and production AWS account. The company has configured IAM roles for developers and has defined an AWS CodePipeline pipeline by using the AWS Cloud Development Kit (AWS CDK). A DevOps engineer must implement a solution to ensure that only developers can access the latest versions of the libraries. The solution must test shared packages independently before the shared packages are consumed by other applications and before they go to production. Which solution will meet these requirements?",
      "options": [
        "Create a single AWS CodeArtifact repository for development and production in a central account. Use IAM policies for the developer roles to allow only developers to access the shared libraries. Create an Amazon EventBridge role to start an AWS CodeBuild project and to test each package before the package is copied to the production repository.",
        "Create an AWS CodeArtifact repository in the development account. Create another CodeArtifact repository in the production account. For the development repository, add a repository policy that allows only developers to access the shared libraries. Create an Amazon EventBridge rule to start the CodePipeline pipeline and to test each package before the package is copied to the production repository.",
        "Create a single Amazon S3 bucket with versioning enabled for development and production in a central account. Use IAM policies for the developer roles to allow only the developers to access the shared libraries. Create an Amazon EventBridge rule to start an AWS CodeBuild project and to test each package before the package is copied to production.",
        "Create an Amazon S3 bucket with versioning enabled in the development account. Create another S3 bucket with versioning enabled in the production account. For the development S3 bucket, add a bucket policy that allows only developers to access the shared libraries. Create an Amazon EventBridge role to start the CodePipeline pipeline. Configure the role to test each package when the package is copied to production and to revert the changes if the tests fail."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_384",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A security team sets up a workflow that invokes an AWS Step Functions workflow when Amazon EventBridge matches specific events. The events can be generated by several AWS services. AWS CloudTrail records user activities. The security team notices that some important events do not invoke the workflow as expected. The CloudTrail logs do not indicate any direct errors related to the missing events. Which combination of steps will identify the root cause of the missing event invocations? (Choose three.)",
      "options": [
        "Enable EventBridge schema discovery on the event bus to determine whether the event patterns match the expected schema.",
        "Configure Amazon CloudWatch to monitor EventBridge metrics and Step Functions metrics. Set up alerts for anomalies in event patterns and workflow invocations.",
        "Configure an AWS Lambda logging function to monitor and log events from EventBridge to provide more details about the processed events.",
        "Review the Step Functions execution history for patterns of failures or timeouts that could correlate to the missing event invocations.",
        "Review metrics for the EventBridge failed invocations to ensure that the IAM execution role that is attached to the rule has sufficient permissions.",
        "Verify that the Step Functions workflow has the correct permissions to be invoked by EventBridge."
      ],
      "correctAnswers": [
        0,
        3,
        4
      ],
      "explanation": "Correct Answer: ADE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_385",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A DevOps engineer deploys an application to a fleet of Amazon Linux EC2 instances. The DevOps engineer needs to monitor system metrics across the fleet. The DevOps engineer wants to monitor the relationship between network traffic and memory utilization for the application code. The DevOps engineer wants to track the data on a 60 second interval. Which solution will meet these requirements?",
      "options": [
        "Use Amazon CloudWatch basic monitoring to collect the NetworkIn metric and the MemoryBytesUsed metric. Graph the metrics in CloudWatch.",
        "Use Amazon CloudWatch detailed monitoring to collect the NetworkIn metric and the MemoryBytesUsed metric. Graph the metrics in CloudWatch.",
        "Use Amazon CloudWatch detailed monitoring to collect the NetworkIn metric. Install the CloudWatch agent on the EC2 instances to collect the mem_used metric. Graph the metrics in CloudWatch.",
        "Use Amazon CloudWatch basic monitoring to collect the built-in NetworkIn metric. Install the CloudWatch agent on the EC2 instances to collect the mem_used metric. Graph the metrics in CloudWatch."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_386",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A company has deployed an Amazon Elastic Kubernetes Service (Amazon EKS) cluster with Amazon EC2 node groups. The company's DevOps team uses the Kubernetes Horizontal Pod Autoscaler and recently installed a supported EKS cluster Autoscaler. The DevOps team needs to implement a solution to collect metrics and logs of the EKS cluster to establish a baseline for performance. The DevOps team will create an initial set of thresholds for specific metrics and will update the thresholds over time as the cluster is used. The DevOps team must receive an Amazon Simple Notification Service (Amazon SNS) email notification if the initial set of thresholds is exceeded or if the EKS cluster Autoscaler is not functioning properly. The solution must collect cluster, node, and pod metrics. The solution also must capture logs in Amazon CloudWatch. Which combination of steps should the DevOps team take to meet these requirements? (Choose three.)",
      "options": [
        "Deploy the CloudWatch agent and Fluent Bit to the cluster. Ensure that the EKS cluster has appropriate permissions to send metrics and logs to CloudWatch.",
        "Deploy AWS Distro for OpenTelemetry to the cluster. Ensure that the EKS cluster has appropriate permissions to send metrics and logs to CloudWatch.",
        "Create CloudWatch alarms to monitor the CPU, memory, and node failure metrics of the cluster. Configure the alarms to send an SNS email notification to the DevOps team if thresholds are exceeded.",
        "Create a CloudWatch composite alarm to monitor a metric log filter of the CPU, memory, and node metrics of the cluster. Configure the alarm to send an SNS email notification to the DevOps team when anomalies are detected.",
        "Create a CloudWatch alarm to monitor the logs of the Autoscaler deployments for errors. Configure the alarm to send an SNS email notification to the DevOps team if thresholds are exceeded.",
        "Create a CloudWatch alarm to monitor a metric log filter of the Autoscaler deployments for errors. Configure the alarm to send an SNS email notification to the DevOps team if thresholds are exceeded."
      ],
      "correctAnswers": [
        0,
        2,
        5
      ],
      "explanation": "Correct Answer: ACF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_387",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company deploys an application to two AWS Regions. The application creates and stores objects in an Amazon S3 bucket that is in the same Region as the application. Both deployments of the application need to have access to all the objects and their metadata from both Regions. The company has configured two-way replication between the S3 buckets and has enabled S3 Replication metrics on each S3 bucket. A DevOps engineer needs to implement a solution that retries the replication process if an object fails to replicate. Which solution will meet these requirements?",
      "options": [
        "Create an Amazon EventBridge rule that listens to S3 event notifications for failed replication events. Create an AWS Lambda function that downloads the failed replication object and then runs a PutObject command for the object to the destination bucket. Configure the EventBridge rule to invoke the Lambda function to handle the object that failed to replicate.",
        "Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure S3 event notifications to send failed replication notifications to the SQS queue. Create an AWS Lambda function that downloads the failed replication object and then runs a PutObject command for the object to the destination bucket. Configure the Lambda function to poll the queue for notifications to process.",
        "Create an Amazon EventBridge rule that listens to S3 event notifications for failed replications. Create an AWS Lambda function that downloads the failed replication object and then runs a PutObject command for the object to the destination bucket.",
        "Create an AWS Lambda function that will use S3 batch operations to retry the replication on the existing object for a failed replication. Configure S3 event notifications to send failed replication notifications to the Lambda function."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_388",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company needs to implement failover for its application. The application includes an Amazon CloudFront distribution and a public Application Load Balancer (ALB) in an AWS Region. The company has configured the ALB as the default origin for the distribution. After some recent application outages, the company wants a zero-second RTO. The company deploys the application to a secondary Region in a warm standby configuration. A DevOps engineer needs to automate the failover of the application to the secondary Region so that HTTP GET requests meet the desired RTO. Which solution will meet these requirements?",
      "options": [
        "Create a second CloudFront distribution that has the secondary ALB as the default origin. Create Amazon Route 53 alias records that have a failover policy and Evaluate Target Health set to Yes for both CloudFront distributions. Update the application to use the new record set.",
        "Create a new origin on the distribution for the secondary AL Create a new origin group. Set the original ALB as the primary origin. Configure the origin group to fail over for HTTP 5xx status codes. Update the default behavior to use the origin group.",
        "Create Amazon Route 53 alias records that have a failover policy and Evaluate Target Health set to Yes for both ALBs. Set the TTL of both records to 0. Update the distribution's origin to use the new record set.",
        "Create a CloudFront function that detects HTTP 5xx status codes. Configure the function to return a 307 Temporary Redirect error response to the secondary ALB if the function detects 5xx status codes. Update the distribution's default behavior to send origin responses to the function."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_389",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A cloud team uses AWS Organizations and AWS IAM Identity Center (AWS Single Sign-On) to manage a company's AWS accounts. The company recently established a research team. The research team requires the ability to fully manage the resources in its account. The research team must not be able to create IAM users. The cloud team creates a Research Administrator permission set in IAM Identity Center for the research team. The permission set has the AdministratorAccess AWS managed policy attached. The cloud team must ensure that no one on the research team can create IAM users. Which solution will meet these requirements?",
      "options": [
        "Create an IAM policy that denies the iam:CreateUser action. Attach the IAM policy to the Research Administrator permission set.",
        "Create an IAM policy that allows all actions except the iam:CreateUser action. Use the IAM policy to set the permissions boundary for the Research Administrator permission set.",
        "Create an SCP that denies the iam:CreateUser action. Attach the SCP to the research team's AWS account.",
        "Create an AWS Lambda function that deletes IAM users. Create an Amazon EventBridge rule that detects the IAM CreateUser event. Configure the rule to invoke the Lambda function."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_390",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company releases a new application in a new AWS account. The application includes an AWS Lambda function that processes messages from an Amazon Simple Queue Service (Amazon SQS) standard queue. The Lambda function stores the results in an Amazon S3 bucket for further downstream processing. The Lambda function needs to process the messages within a specific period of time after the messages are published. The Lambda function has a batch size of 10 messages and takes a few seconds to process a batch of messages. As load increases on the application's first day of service, messages in the queue accumulate at a greater rate than the Lambda function can process the messages. Some messages miss the required processing timelines. The logs show that many messages in the queue have data that is not valid. The company needs to meet the timeline requirements for messages that have valid data. Which solution will meet these requirements?",
      "options": [
        "Increase the Lambda function's batch size. Change the SQS standard queue to an SQS FIFO queue. Request a Lambda concurrency increase in the AWS Region.",
        "Reduce the Lambda function's batch size. Increase the SQS message throughput quota. Request a Lambda concurrency increase in the AWS Region.",
        "Increase the Lambda function's batch size. Configure S3 Transfer Acceleration on the S3 bucket. Configure an SQS dead-letter queue.",
        "Keep the Lambda function's batch size the same. Configure the Lambda function to report failed batch items. Configure an SQS dead-letter queue."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_391",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A company recently deployed its web application on AWS. The company is preparing for a large-scale sales event and must ensure that the web application can scale to meet the demand. The application's frontend infrastructure includes an Amazon CloudFront distribution that has an Amazon S3 bucket as an origin. The backend infrastructure includes an Amazon API Gateway API, several AWS Lambda functions, and an Amazon Aurora DB cluster. The company's DevOps engineer conducts a load test and identifies that the Lambda functions can fulfil the peak number of requests. However, the DevOps engineer notices request latency during the initial burst of requests. Most of the requests to the Lambda functions produce queries to the database. A large portion of the invocation time is used to establish database connections. Which combination of steps will provide the application with the required scalability? (Choose three.)",
      "options": [
        "Configure a higher reserved concurrency for the Lambda functions.",
        "Configure a higher provisioned concurrency for the Lambda functions.",
        "Convert the DB cluster to an Aurora global database. Add additional Aurora Replicas in AWS Regions based on the locations of the company's customers.",
        "Refactor the Lambda functions. Move the code blocks that initialize database connections into the function handlers.",
        "Use Amazon RDS Proxy to create a proxy for the Aurora database. Update the Lambda functions to use the proxy endpoints for database connections."
      ],
      "correctAnswers": [
        1,
        2,
        4
      ],
      "explanation": "Correct Answer: BCE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_392",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company runs a web application that extends across multiple Availability Zones. The company uses an Application Load Balancer (ALB) for routing, AWS Fargate for the application, and Amazon Aurora for the application data. The company uses AWS CloudFormation templates to deploy the application. The company stores all Docker images in an Amazon Elastic Container Registry (Amazon ECR) repository in the same AWS account and AWS Region. A DevOps engineer needs to establish a disaster recovery (DR) process in another Region. The solution must meet an RPO of 8 hours and an RTO of 2 hours. The company sometimes needs more than 2 hours to build the Docker images from the Dockerfile. Which solution will meet the RTO and RPO requirements MOST cost-effectively?",
      "options": [
        "Copy the CloudFormation templates and the Dockerfile to an Amazon S3 bucket in the DR Region. Use AWS Backup to configure automated Aurora cross-Region hourly snapshots. In case of DR, build the most recent Docker image and upload the Docker image to an ECR repository in the DR Region. Use the CloudFormation template that has the most recent Aurora snapshot and the Docker image from the ECR repository to launch a new CloudFormation stack in the DR Region. Update the application DNS records to point to the new ALB.",
        "Copy the CloudFormation templates to an Amazon S3 bucket in the DR Region. Configure Aurora automated backup Cross-Region Replication. Configure ECR Cross-Region Replication. In case of DR, use the CloudFormation template with the most recent Aurora snapshot and the Docker image from the local ECR repository to launch a new CloudFormation stack in the DR Region. Update the application DNS records to point to the new AL",
        "Copy the CloudFormation templates to an Amazon S3 bucket in the DR Region. Use Amazon EventBridge to schedule an AWS Lambda function to take an hourly snapshot of the Aurora database and of the most recent Docker image in the ECR repository. Copy the snapshot and the Docker image to the DR Region. In case of DR, use the CloudFormation template with the most recent Aurora snapshot and the Docker image from the local ECR repository to launch a new CloudFormation stack in the DR Region.",
        "Copy the CloudFormation templates to an Amazon S3 bucket in the DR Region. Deploy a second application CloudFormation stack in the DR Region. Reconfigure Aurora to be a global database. Update both CloudFormation stacks when a new application release in the current Region is needed. In case of DR, update the application DNS records to point to the new ALB."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_393",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company's application runs on Amazon EC2 instances. The application writes to a log file that records the username, date, time, and source IP address of the login. The log is published to a log group in Amazon CloudWatch Logs. The company is performing a root cause analysis for an event that occurred on the previous day. The company needs to know the number of logins for a specific user from the past 7 days. Which solution will provide this information?",
      "options": [
        "Create a CloudWatch Logs metric filter on the log group. Use a filter pattern that matches the username. Publish a CloudWatch metric that sums the number of logins over the past 7 days.",
        "Create a CloudWatch Logs subscription on the log group. Use a filter pattern that matches the username. Publish a CloudWatch metric that sums the number of logins over the past 7 days.",
        "Create a CloudWatch Logs Insights query that uses an aggregation function to count the number of logins for the username over the past 7 days. Run the query against the log group.",
        "Create a CloudWatch dashboard. Add a number widget that has a filter pattern that counts the number of logins for the username over the past 7 days directly from the log group."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_394",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company uses AWS Control Tower and AWS CloudFormation to manage its AWS accounts and to create AWS resources. The company requires all Amazon S3 buckets to be encrypted with AWS Key Management Service (AWS KMS) when the S3 buckets are created in a CloudFormation stack. Which solution will meet this requirement?",
      "options": [
        "Use AWS Organizations. Attach an SCP that denies the s3:PutObject permission if the request does not include an x-amz-server-side-encryption header that requests server-side encryption with AWS KMS keys (SSE-KMS).",
        "Use AWS Control Tower with a multi-account environment. Configure and enable proactive AWS Control Tower controls on all OUs with CloudFormation hooks.",
        "Use AWS Control Tower with a multi-account environment. Configure and enable detective AWS Control Tower controls on all OUs with CloudFormation hooks.",
        "Use AWS Organizations. Create an AWS Config organizational rule to check whether a KMS encryption key is enabled for all S3 buckets. Deploy the rule. Create and apply an SCP to prevent users from stopping and deleting AWS Config across all AWS accounts."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_395",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A DevOps engineer has developed an AWS Lambda function. The Lambda function starts an AWS CloudFormation drift detection operation on all supported resources for a specific CloudFormation stack. The Lambda function then exits its invocation. The DevOps engineer has created an Amazon EventBridge scheduled rule that invokes the Lambda function every hour. An Amazon Simple Notification Service (Amazon SNS) topic already exists in the AWS account. The DevOps engineer has subscribed to the SNS topic to receive notifications. The DevOps engineer needs to receive a notification as soon as possible when drift is detected in this specific stack configuration. Which solution will meet these requirements?",
      "options": [
        "Configure the existing EventBridge rule to also target the SNS topic. Configure an SNS subscription filter policy to match the CloudFormation stack. Attach the subscription filter policy to the SNS topic.",
        "Create a second Lambda function to query the CloudFormation API for the drift detection results for the stack. Configure the second Lambda function to publish a message to the SNS topic if drift is detected. Adjust the existing EventBridge rule to also target the second Lambda function.",
        "Configure Amazon GuardDuty in the account with drift detection for all CloudFormation stacks. Create a second EventBridge rule that reacts to the GuardDuty drift detection event finding for the specific CloudFormation stack. Configure the SNS topic as a target of the second EventBridge rule.",
        "Configure AWS Config in the account. Use the cloudformation-stack-drift-detection-check managed rule. Create a second EventBridge rule that reacts to a compliance change event for the CloudFormation stack. Configure the SNS topic as a target of the second EventBridge rule."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_396",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A company has deployed a complex container-based workload on AWS. The workload uses Amazon Managed Service for Prometheus for monitoring. The workload runs in an Amazon Elastic Kubernetes Service (Amazon EKS) cluster in an AWS account. The company's DevOps team wants to receive workload alerts by using the company's Amazon Simple Notification Service (Amazon SNS) topic. The SNS topic is in the same AWS account as the EKS cluster. Which combination of steps will meet these requirements? (Choose three.)",
      "options": [
        "Use the Amazon Managed Service for Prometheus remote write URL to send alerts to the SNS topic",
        "Create an alerting rule that checks the availability of each of the workload's containers.",
        "Create an alert manager configuration for the SNS topic.",
        "Modify the access policy of the SNS topic. Grant the aps.amazonaws.com service principal the sns:Publish permission and the sns:GetTopicAttributes permission for the SNS topic.",
        "Modify the IAM role that Amazon Managed Service for Prometheus uses. Grant the role the sns:Publish permission and the sns:GetTopicAttributes permission for the SNS topic.",
        "Create an OpenID Connect (OIDC) provider for the EKS cluster. Create a cluster service account. Grant the account the sns:Publish permission and the sns:GetTopicAttributes permission by using an IAM role."
      ],
      "correctAnswers": [
        1,
        2,
        3
      ],
      "explanation": "Correct Answer: BCD",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_397",
      "batch": "Batch 8",
      "type": "single",
      "prompt": "A company uses an organization in AWS Organizations to manage several AWS accounts that the company's developers use. The company requires all data to be encrypted in transit. Multiple Amazon S3 buckets that were created in developer accounts allow unencrypted connections. A DevOps engineer must enforce encryption of data in transit for all existing S3 buckets that are created in accounts in the organization. Which solution will meet these requirements?",
      "options": [
        "Use AWS CloudFormation StackSets to deploy an AWS Network Firewall firewall to each account. Route all outbound requests from the AWS environment through the firewall. Deploy a policy to block access to all outbound requests on port 80.",
        "Use AWS CloudFormation StackSets to deploy an AWS Network Firewall firewall to each account. Route all inbound requests to the AWS environment through the firewall. Deploy a policy to block access to all inbound requests on port 80.",
        "Turn on AWS Config for the organization. Deploy a conformance pack that uses the s3-bucket-ssl- requests- only managed rule and an AWS Systems Manager Automation runbook. Use a runbook that adds a bucket policy statement to deny access to an S3 bucket when the value of the aws:SecureTransport condition key is false.",
        "Turn on AWS Config for the organization. Deploy a conformance pack that uses the s3-bucket-ssl- requests- only managed rule and an AWS Systems Manager Automation runbook. Use a runbook that adds a bucket policy statement to deny access to an S3 bucket when the value of the s3:x-amz-server- side-encryption- aws-kms-key-id condition key is null."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_398",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A company is developing an application that will generate log events. The log events consist of five distinct metrics every one tenth of a second and produce a large amount of data. The company needs to configure the application to write the logs to Amazon Timestream. The company will configure a daily query against the Timestream table. Which combination of steps will meet these requirements with the FASTEST query performance? (Choose three.)",
      "options": [
        "Use batch writes to write multiple log events in a single write operation.",
        "Write each log event as a single write operation.",
        "Treat each log as a single-measure record.",
        "Treat each log as a multi-measure record.",
        "Configure the memory store retention period to be longer than the magnetic store retention period.",
        "Configure the memory store retention period to be shorter than the magnetic store retention period."
      ],
      "correctAnswers": [
        0,
        3,
        5
      ],
      "explanation": "Correct Answer: ADF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_399",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A DevOps engineer has created an AWS CloudFormation template that deploys an application on Amazon EC2 instances. The EC2 instances run Amazon Linux. The application is deployed to the EC2 instances by using shell scripts that contain user data. The EC2 instances have an IAM instance profile that has an IAM role with the AmazonSSMManagedinstanceCore managed policy attached. The DevOps engineer has modified the user data in the CloudFormation template to install a new version of the application. The engineer has also applied the stack update. However, the application was not updated on the running EC2 instances. The engineer needs to ensure that the changes to the application are installed on the running EC2 instances. Which combination of steps will meet these requirements? (Choose two.)",
      "options": [
        "Configure the user data content to use the Multipurpose Internet Mail Extensions (MIME) multipart format. Set the scripts-user parameter to always in the text/cloud-config section.",
        "Refactor the user data commands to use the cfn-init helper script. Update the user data to install and configure the cfn-hup and cfn-init helper scripts to monitor and apply the metadata changes.",
        "Configure an EC2 launch template for the EC2 instances. Create a new EC2 Auto Scaling group. Associate the Auto Scaling group with the EC2 launch template. Use the AutoScalingScheduledAction update policy for the Auto Scaling group.",
        "Refactor the user data commands to use an AWS Systems Manager document (SSM document). Add an AWS CLI command in the user data to use Systems Manager Run Command to apply the SSM document to the EC2 instances.",
        "Refactor the user data command to use an AWS Systems Manager document (SSM document). Use Systems Manager State Manager to create an association between the SSM document and the EC2 instances."
      ],
      "correctAnswers": [
        1,
        4
      ],
      "explanation": "Correct Answer: BE",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_400",
      "batch": "Batch 8",
      "type": "multiple",
      "prompt": "A company is refactoring applications to use AWS. The company identifies an internal web application that needs to make Amazon S3 API calls in a specific AWS account. The company wants to use its existing identity provider (IdP) auth.company.com for authentication. The IdP supports only OpenID Connect (OIDC). A DevOps engineer needs to secure the web application's access to the AWS account. Which combination of steps will meet these requirements? (Choose three.)",
      "options": [
        "Configure AWS IAM Identity Center (AWS Single Sign-On). Configure an IdP. Upload the IdP metadata from the existing IdP.",
        "Create an IAM IdP by using the provider URL, audience, and signature from the existing IP.",
        "Create an IAM role that has a policy that allows the necessary S3 actions. Configure the role's trust policy to allow the OIDC IP to assume the role if the sts.amazon.com:aud context key is appid_from_idp.",
        "Create an IAM role that has a policy that allows the necessary S3 actions. Configure the role's trust policy to allow the OIDC IP to assume the role if the auth.company.com:aud context key is appid_from_idp.",
        "Configure the web application to use the AssumeRoleWithWebIdentity API operation to retrieve temporary credentials. Use the temporary credentials to make the S3 API calls.",
        "Configure the web application to use the GetFederationToken API operation to retrieve temporary credentials. Use the temporary credentials to make the S3 API calls."
      ],
      "correctAnswers": [
        1,
        3,
        4
      ],
      "explanation": "Correct Answer: BDE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_401",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company uses Amazon RDS for all databases in its AWS accounts. The company uses AWS Control Tower to build a landing zone that has an audit and logging account. All databases must be encrypted at rest for compliance reasons. The company's security engineer needs to receive notification about any noncompliant databases that are in the company's accounts. Which solution will meet these requirements with the MOST operational efficiency?",
      "options": [
        "Use AWS Control Tower to activate the optional detective control (guardrail) to determine whether the RDS storage is encrypted. Create an Amazon Simple Notification Service (Amazon SNS) topic in the company's audit account. Create an Amazon EventBridge rule to filter noncompliant events from the AWS Control Tower control (guardrail) to notify the SNS topic. Subscribe the security engineer's email address to the SNS topic.",
        "Use AWS CloudFormation StackSets to deploy AWS Lambda functions to every account. Write the Lambda function code to determine whether the RDS storage is encrypted in the account the function is deployed to. Send the findings as an Amazon CloudWatch metric to the management account. Create an Amazon Simple Notification Service (Amazon SNS) topic. Create a CloudWatch alarm that notifies the SNS topic when metric thresholds are met. Subscribe the security engineer's email address to the SNS topic.",
        "Create a custom AWS Config rule in every account to determine whether the RDS storage is encrypted. Create an Amazon Simple Notification Service (Amazon SNS) topic in the audit account. Create an Amazon EventBidge rule to filter noncompliant events from the AWS Control Tower control (guardrail) to notify the SNS topic. Subscribe the security engineer's email address to the SNS topic.",
        "Launch an Amazon C2 instance. Run an hourly cron job by using the AWS CLI to determine whether the RDS storage is encrypted in each AWS account. Store the results in an RDS database. Notify the security engineer by sending email messages from the EC2 instance when noncompliance is detected"
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_402",
      "batch": "Batch 9",
      "type": "multiple",
      "prompt": "A company is migrating from its on-premises data center to AWS. The company currently uses a custom on- premises CI/CD pipeline solution to build and package software. The company wants its software packages and dependent public repositories to be available in AWS CodeArtifact to facilitate the creation of application-specific pipelines. Which combination of steps should the company take to update the CI/CD pipeline solution and to configure CodeArtifact with the LEAST operational overhead? (Choose two.)",
      "options": [
        "Update the CI/CD pipeline to create a VM image that contains newly packaged software. Use AWS Import/ Export to make the VM image available as an Amazon EC2 AMI. Launch the AMI with an attached IAM instance profile that allows CodeArtifact actions. Use AWS CLI commands to publish the packages to a CodeArtifact repository.",
        "Create an AWS Identity and Access Management Roles Anywhere trust anchor. Create an IAM role that allows CodeArtifact actions and that has a trust relationship on the trust anchor. Update the on- premises CI/ CD pipeline to assume the new IAM role and to publish the packages to CodeArtifact.",
        "Create a new Amazon S3 bucket. Generate a presigned URL that allows the PutObject request. Update the on-premises CI/CD pipeline to use the presigned URL to publish the packages from the on- premises location to the S3 bucket. Create an AWS Lambda function that runs when packages are created in the bucket through a put command. Configure the Lambda function to publish the packages to CodeArtifact.",
        "For each public repository, create a CodeArutact repository that is configured with an external connection. Configure the dependent repositories as upstream public repositories.",
        "Create a Codeartitact repository that is configured with a set of external connections to the public repositories. Configure the external connections to be downstream of the repository."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_403",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A DevOps team uses AWS CodePipeline, AWS CodeBuild, and AWS CodeDeploy to deploy an application. The application is a REST API that uses AWS Lambda functions and Amazon API Gateway. Recent deployments have introduced errors that have affected many customers. The DevOps team needs a solution that reverts to the most recent stable version of the application when an error is detected. The solution must affect the fewest customers possible. Which solution will meet these requirements with the MOST operational efficiency?",
      "options": [
        "Set the deployment configuration in CodeDeploy to LambdaAllAtOnce. Configure automatic rollbacks on the deployment group. Create an Amazon CloudWatch alarm that detects HTTP Bad Gateway errors on API Gateway. Configure the deployment group to roll back when the number of alarms meets the alarm threshold.",
        "Set the deployment configuration in CodeDeploy to LambdaCanary10Percent10Minutes. Configure automatic rollbacks on the deployment group. Create an Amazon CloudWatch alarm that detects HTTP Bad Gateway errors on API Gateway. Configure the deployment group to roll back when the number of alarms meets the alarm threshold.",
        "Set the deployment configuration in CodeDeploy to LambdaAllAtOnce. Configure manual rollbacks on the deployment group. Create an Amazon Simple Notification Service (Amazon SNS) topic to send notifications every time a deployment fails. Configure the SNS topic to invoke a new Lambda function that stops the current deployment and starts the most recent successful deployment.",
        "Set the deployment configuration in CodeDeploy to LambdaCanary10Percent10Minutes. Configure manual rollbacks on the deployment group. Create a metric filter on an Amazon CloudWatch log group for API Gateway to monitor HTTP Bad Gateway errors. Configure the metric filter to invoke a new Lambda function that stops the current deployment and starts the most recent successful deployment."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_404",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company sells products through an ecommerce web application. The company wants a dashboard that shows a pie chart of product transaction details. The company wants to integrate the dashboard with the company's existing Amazon CloudWatch dashboards. Which solution will meet these requirements with the MOST operational efficiency?",
      "options": [
        "Update the ecommerce application to emit a JSON object to a CloudWatch log group for each processed transaction. Use CloudWatch Logs Insights to query the log group and to visualize the results in a pie chart format. Attach the results to the desired CloudWatch dashboard.",
        "Update the ecommerce application to emit a JSON object to an Amazon S3 bucket for each processed transaction. Use Amazon Athena to query the S3 bucket and to visualize the results in a pie chart format. Export the results from Athena. Attach the results to the desired CloudWatch dashboard.",
        "Update the ecommerce application to use AWS X-Ray for instrumentation. Create a new X-Ray subsegment. Add an annotation for each processed transaction. Use X-Ray traces to query the data and to visualize the results in a pie chart format. Attach the results to the desired CloudWatch dashboard.",
        "Update the ecommerce application to emit a JSON object to a CloudWatch log group for each processed transaction. Create an AWS Lambda function to aggregate and write the results to Amazon DynamoDB. Create a Lambda subscription filter for the log file. Attach the results to the desired CloudWatch dashboard."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_405",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company is launching an application. The application must use only approved AWS services. The account that runs the application was created less than 1 year ago and is assigned to an AWS Organizations OU. The company needs to create a new Organizations account structure. The account structure must have an appropriate SCP that supports the use of only services that are currently active in the AWS account. The company will use AWS Identity and Access Management (IAM) Access Analyzer in the solution. Which solution will meet these requirements?",
      "options": [
        "Create an SCP that allows the services that IAM Access Analyzer identifies. Create an OU for the account. Move the account into the new OU. Attach the new SCP to the new OU. Detach the default FullAWSAccess SCP from the new OU.",
        "Create an SCP that denies the services that IAM Access Analyzer identifies. Create an OU for the account. Move the account into the new OU. Attach the new SCP to the new OU.",
        "Create an SCP that allows the services that IAM Access Analyzer identifies. Attach the new SCP to the organization's root.",
        "Create an SCP that allows the services that IAM Access Analyzer identifies. Create an OU for the account. Move the account into the new OU. Attach the new SCP to the management account. Detach the default FullAWSAccess SCP from the new OU."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_406",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company has multiple development teams in different business units that work in a shared single AWS account. All Amazon EC2 resources that are created in the account must include tags that specify who created the resources. The tagging must occur within the first hour of resource creation. A DevOps engineer needs to add tags to the created resources that include the user ID that created the resource and the cost center ID. The DevOps engineer configures an AWS Lambda function with the cost center mappings to tag the resources. The DevOps engineer also sets up AWS CloudTrail in the AWS account. An Amazon S3 bucket stores the CloudTrail event logs. Which solution will meet the tagging requirements?",
      "options": [
        "Create an S3 event notification on the S3 bucket to invoke the Lambda function for s3:ObjectTagging:Put events. Enable bucket versioning on the S3 bucket.",
        "Enable server access logging on the S3 bucket. Create an S3 event notification on the S3 bucket for s3:ObjectTagging:* events.",
        "Create a recurring hourly Amazon EventBridge scheduled rule that invokes the Lambda function. Modify the Lambda function to read the logs from the S3 bucket.",
        "Create an Amazon EventBridge rule that uses Amazon EC2 as the event source. Configure the rule to match events delivered by CloudTrail. Configure the rule to target the Lambda function."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_407",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company runs an application for multiple environments in a single AWS account. An AWS CodePipeline pipeline uses a development Amazon Elastic Container Service (Amazon ECS) cluster to test an image for the application from an Amazon Elastic Container Registry (Amazon ECR) repository. The pipeline promotes the image to a production ECS cluster. The company needs to move the production cluster into a separate AWS account in the same AWS Region. The production cluster must be able to download the images over a private connection. Which solution will meet these requirements?",
      "options": [
        "Use Amazon ECR VPC endpoints and an Amazon S3 gateway endpoint. In the separate AWS account, create an ECR repository. Set the repository policy to allow the production ECS tasks to pull images from the main AWS account. Configure the production ECS task execution role to have permission to download the image from the ECR repository.",
        "Set a repository policy on the production ECR repository in the main AWS account. Configure the repository policy to allow the production ECS tasks in the separate AWS account to pull images from the main account. Configure the production ECS task execution role to have permission to download the image from the ECR repository.",
        "Configure ECR private image replication in the main AWS account. Activate cross-account replication. Define the destination account ID of the separate AWS account.",
        "Use Amazon ECR VPC endpoints and an Amazon S3 gateway endpoint. Set a repository policy on the production ECR repository in the main AWS account. Configure the repository policy to allow the production ECS tasks in the separate AWS account to pull images from the main account. Configure the production ECS task execution role to have permission to download the image from the ECR repository."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_408",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company needs to ensure that flow logs remain configured for all existing and new VPCs in its AWS account. The company uses an AWS CloudFormation stack to manage its VPCs. The company needs a solution that will work for any VPCs that any IAM user creates. Which solution will meet these requirements?",
      "options": [
        "Add the AWS::EC2::FlowLog resource to the CloudFormation stack that creates the VPCs.",
        "Create an organization in AWS Organizations. Add the company's AWS account to the organization. Create an SCP to prevent users from modifying VPC flow logs.",
        "Turn on AWS Config. Create an AWS Config rule to check whether VPC flow logs are turned on. Configure automatic remediation to turn on VPC flow logs.",
        "Create an IAM policy to deny the use of API calls for VPC flow logs. Attach the IAM policy to all IAM users."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_409",
      "batch": "Batch 9",
      "type": "multiple",
      "prompt": "A company's application teams use AWS CodeCommit repositories for their applications. The application teams have repositories in multiple AWS accounts. All accounts are in an organization in AWS Organizations. Each application team uses AWS IAM Identity Center (AWS Single Sign-On) configured with an external IdP to assume a developer IAM role. The developer role allows the application teams to use Git to work with the code in the repositories. A security audit reveals that the application teams can modify the main branch in any repository. A DevOps engineer must implement a solution that allows the application teams to modify the main branch of only the repositories that they manage. Which combination of steps will meet these requirements? (Choose three.)",
      "options": [
        "Update the SAML assertion to pass the user's team name. Update the IAM role's trust policy to add an access-team session tag that has the team name.",
        "Create an approval rule template for each team in the Organizations management account. Associate the template with all the repositories. Add the developer role ARN as an approver.",
        "Create an approval rule template for each account. Associate the template with all repositories. Add the \"aws:ResourceTag/access-team\": \"$ ;{aws:PrincipalTag/access-team}\" condition to the approval rule template.",
        "For each CodeCommit repository, add an access-team tag that has the value set to the name of the associated team.",
        "Attach an SCP to the accounts. Include the following statement:",
        "Create an IAM permissions boundary in each account. Include the following statement:"
      ],
      "correctAnswers": [
        0,
        3,
        4
      ],
      "explanation": "Correct Answer: ADE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_410",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company uses AWS WAF to protect its cloud infrastructure. A DevOps engineer needs to give an operations team the ability to analyze log messages from AWS WAF. The operations team needs to be able to create alarms for specific patterns in the log output. Which solution will meet these requirements with the LEAST operational overhead?",
      "options": [
        "Create an Amazon CloudWatch Logs log group. Configure the appropriate AWS WAF web ACL to send log messages to the log group. Instruct the operations team to create CloudWatch metric filters.",
        "Create an Amazon OpenSearch Service cluster and appropriate indexes. Configure an Amazon Kinesis Data Firehose delivery stream to stream log data to the indexes. Use OpenSearch Dashboards to create filters and widgets.",
        "Create an Amazon S3 bucket for the log output. Configure AWS WAF to send log outputs to the S3 bucket. Instruct the operations team to create AWS Lambda functions that detect each desired log message pattern. Configure the Lambda functions to publish to an Amazon Simple Notification Service (Amazon SNS) topic.",
        "Create an Amazon S3 bucket for the log output. Configure AWS WAF to send log outputs to the S3 bucket. Use Amazon Athena to create an external table definition that fits the log message pattern. Instruct the operations team to write SQL queries and to create Amazon CloudWatch metric filters for the Athena queries."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_411",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A software team is using AWS CodePipeline to automate its Java application release pipeline. The pipeline consists of a source stage, then a build stage, and then a deploy stage. Each stage contains a single action that has a runOrder value of 1. The team wants to integrate unit tests into the existing release pipeline. The team needs a solution that deploys only the code changes that pass all unit tests. Which solution will meet these requirements?",
      "options": [
        "Modify the build stage. Add a test action that has a runOrder value of 1. Use AWS CodeDeploy as the action provider to run unit tests.",
        "Modify the build stage. Add a test action that has a runOrder value of 2. Use AWS CodeBuild as the action provider to run unit tests.",
        "Modify the deploy stage. Add a test action that has a runOrder value of 1. Use AWS CodeDeploy as the action provider to run unit tests.",
        "Modify the deploy stage. Add a test action that has a runOrder value of 2. Use AWS CodeBuild as the action provider to run unit tests."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_412",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company has deployed a critical application in two AWS Regions. The application uses an Application Load Balancer (ALB) in both Regions. The company has Amazon Route 53 alias DNS records for both ALBs. The company uses Amazon Route 53 Application Recovery Controller to ensure that the application can fail over between the two Regions. The Route 53 ARC configuration includes a routing control for both Regions. The company uses Route 53 ARC to perform quarterly disaster recovery (DR) tests. During the most recent DR test, a DevOps engineer accidentally turned off both routing controls. The company needs to ensure that at least one routing control is turned on at all times. Which solution will meet these requirements?",
      "options": [
        "In Route 53 ARC, create a new assertion safety rule. Apply the assertion safety rule to the two routing controls. Configure the rule with the ATLEAST type with a threshold of 1.",
        "In Route 53 ARC, create a new gating safety rule. Apply the assertion safety rule to the two routing controls. Configure the rule with the OR type with a threshold of 1.",
        "In Route 53 ARC, create a new resource set. Configure the resource set with an AWS::Route53::HealthCheck resource type. Specify the ARNs of the two routing controls as the target resource. Create a new readiness check for the resource set.",
        "In Route 53 ARC, create a new resource set. Configure the resource set with an AWS::Route53RecoveryReadiness::DNSTargetResource resource type. Add the domain names of the two Route 53 alias DNS records as the target resource. Create a new readiness check for the resource set."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_413",
      "batch": "Batch 9",
      "type": "multiple",
      "prompt": "A DevOps engineer is planning to deploy a Ruby-based application to production. The application needs to interact with an Amazon RDS for MySQL database and should have automatic scaling and high availability. The stored data in the database is critical and should persist regardless of the state of the application stack. The DevOps engineer needs to set up an automated deployment strategy for the application with automatic rollbacks. The solution also must alert the application team when a deployment fails. Which combination of steps will meet these requirements? (Choose three.)",
      "options": [
        "Deploy the application on AWS Elastic Beanstalk. Deploy an Amazon RDS for MySQL DB instance as part of the Elastic Beanstalk configuration.",
        "Deploy the application on AWS Elastic Beanstalk. Deploy a separate Amazon RDS for MySQL DB instance outside of Elastic Beanstalk.",
        "Configure a notification email address that alerts the application team in the AWS Elastic Beanstalk configuration.",
        "Configure an Amazon EventBridge rule to monitor AWS Health events. Use an Amazon Simple Notification Service (Amazon SNS) topic as a target to alert the application team.",
        "Use the immutable deployment method to deploy new application versions.",
        "Use the rolling deployment method to deploy new application versions ."
      ],
      "correctAnswers": [
        1,
        2,
        4
      ],
      "explanation": "Correct Answer: BCE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_414",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company requires its internal business teams to launch resources through pre-approved AWS CloudFormation templates only. The security team requires automated monitoring when resources drift from their expected state. Which strategy should be used to meet these requirements?",
      "options": [
        "Allow users to deploy CloudFormation stacks using a CloudFormation service role only. Use CloudFormation drift detection to detect when resources have drifted from their expected state.",
        "Allow users to deploy CloudFormation stacks using a CloudFormation service role only. Use AWS Config rules to detect when resources have drifted from their expected state.",
        "Allow users to deploy CloudFormation stacks using AWS Service Catalog only. Enforce the use of a launch constraint. Use AWS Config rules to detect when resources have drifted from their expected state.",
        "Allow users to deploy CloudFormation stacks using AWS Service Catalog only. Enforce the use of a template constraint. Use Amazon EventBridge notifications to detect when resources have drifted from their expected state."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_415",
      "batch": "Batch 9",
      "type": "multiple",
      "prompt": "A DevOps engineer is implementing governance controls for a company that requires its infrastructure to be housed within the United States. The engineer must restrict which AWS Regions can be used, and ensure an alert is sent as soon as possible if any activity outside the governance policy takes place. The controls should be automatically enabled on any new Region outside the United States (US). Which combination of actions will meet these requirements? (Choose two.)",
      "options": [
        "Create an AWS Organizations SCP that denies access to all non-global services in non-US Regions. Attach the policy to the root of the organization.",
        "Configure AWS CloudTrail to send logs to Amazon CloudWatch Logs and enable it for all Regions. Use a CloudWatch Logs metric filter to send an alert on any service activity in non-US Regions.",
        "Use an AWS Lambda function that checks for AWS service activity and deploy it to all Regions. Write an Amazon EventBridge rule that runs the Lambda function every hour, sending an alert if activity is found in a non-US Region.",
        "Use an AWS Lambda function to query Amazon Inspector to look for service activity in non-US Regions and send alerts if any activity is found.",
        "Write an SCP using the aws:RequestedRegion condition key limiting access to US Regions. Apply the policy to all users, groups, and roles."
      ],
      "correctAnswers": [
        0,
        1
      ],
      "explanation": "Correct Answer: AB",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_416",
      "batch": "Batch 9",
      "type": "multiple",
      "prompt": "A company has a new AWS account that teams will use to deploy various applications. The teams will create many Amazon S3 buckets for application-specific purposes and to store AWS CloudTrail logs. The company has enabled Amazon Macie for the account. A DevOps engineer needs to optimize the Macie costs for the account without compromising the account's functionality. Which solutions will meet these requirements? (Choose two.)",
      "options": [
        "Exclude S3 buckets that contain CloudTrail logs from automated discovery.",
        "Exclude S3 buckets that have public read access from automated discovery.",
        "Configure scheduled daily discovery jobs for all S3 buckets in the account.",
        "Configure discovery jobs to include S3 objects based on the last modified criterion.",
        "Configure discovery jobs to include S3 objects that are tagged as production only."
      ],
      "correctAnswers": [
        0,
        3
      ],
      "explanation": "Correct Answer: AD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_417",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company has an application and a CI/CD pipeline. The CI/CD pipeline consists of an AWS CodePipeline pipeline and an AWS CodeBuild project. The CodeBuild project runs tests against the application as part of the build process and outputs a test report. The company must keep the test reports for 90 days. Which solution will meet these requirements?",
      "options": [
        "Add a new stage in the CodePipeline pipeline after the stage that contains the CodeBuild project. Create an Amazon S3 bucket to store the reports. Configure an S3 deploy action type in the new CodePipeline stage with the appropriate path and format for the reports.",
        "Add a report group in the CodeBuild project buildspec file with the appropriate path and format for the reports. Create an Amazon S3 bucket to store the reports. Configure an Amazon EventBridge rule that invokes an AWS Lambda function to copy the reports to the S3 bucket when a build is completed. Create an S3 Lifecycle rule to expire the objects after 90 days.",
        "Add a new stage in the CodePipeline pipeline. Configure a test action type with the appropriate path and format for the reports. Configure the report expiration time to be 90 days in the CodeBuild project buildspec file.",
        "Add a report group in the CodeBuild project buildspec file with the appropriate path and format for the reports. Create an Amazon S3 bucket to store the reports. Configure the report group as an artifact in the CodeBuild project buildspec file. Configure the S3 bucket as the artifact destination. Set the object expiration to 90 days."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_418",
      "batch": "Batch 9",
      "type": "multiple",
      "prompt": "A company uses an Amazon API Gateway regional REST API to host its application API. The REST API has a custom domain. The REST API's default endpoint is deactivated. The company's internal teams consume the API. The company wants to use mutual TLS between the API and the internal teams as an additional layer of authentication. Which combination of steps will meet these requirements? (Choose two.)",
      "options": [
        "Use AWS Certificate Manager (ACM) to create a private certificate authority (CA). Provision a client certificate that is signed by the private C",
        "Provision a client certificate that is signed by a public certificate authority (CA). Import the certificate into AWS Certificate Manager (ACM).",
        "Upload the provisioned client certificate to an Amazon S3 bucket. Configure the API Gateway mutual TLS to use the client certificate that is stored in the S3 bucket as the trust store.",
        "Upload the provisioned client certificate private key to an Amazon S3 bucket. Configure the API Gateway mutual TLS to use the private key that is stored in the S3 bucket as the trust store.",
        "Upload the root private certificate authority (CA) certificate to an Amazon S3 bucket. Configure the API Gateway mutual TLS to use the private CA certificate that is stored in the S3 bucket as the trust store."
      ],
      "correctAnswers": [
        0,
        4
      ],
      "explanation": "Correct Answer: AE",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_419",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company uses AWS Organizations to manage its AWS accounts. The company has a root OU that has a child OU. The root OU has an SCP that allows all actions on all resources. The child OU has an SCP that allows all actions for Amazon DynamoDB and AWS Lambda, and denies all other actions. The company has an AWS account that is named vendor-data in the child OU. A DevOps engineer has an IAM user that is attached to the Administrator Access IAM policy in the vendor-data account. The DevOps engineer attempts to launch an Amazon EC2 instance in the vendor-data account but receives an access denied error. Which change should the DevOps engineer make to launch the EC2 instance in the vendor-data account?",
      "options": [
        "Attach the AmazonEC2FullAccess IAM policy to the IAM user.",
        "Create a new SCP that allows all actions for Amazon EC2. Attach the SCP to the vendor-data account.",
        "Update the SCP in the child OU to allow all actions for Amazon EC2.",
        "Create a new SCP that allows all actions for Amazon EC2. Attach the SCP to the root OU."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_420",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company's security policies require the use of security hardened AMIs in production environments. A DevOps engineer has used EC2 Image Builder to create a pipeline that builds the AMIs on a recurring schedule. The DevOps engineer needs to update the launch templates of the company's Auto Scaling groups. The Auto Scaling groups must use the newest AMIs during the launch of Amazon EC2 instances. Which solution will meet these requirements with the MOST operational efficiency?",
      "options": [
        "Configure an Amazon EventBridge rule to receive new AMI events from Image Builder. Target an AWS Systems Manager Run Command document that updates the launch templates of the Auto Scaling groups with the newest AMI ID.",
        "Configure an Amazon EventBridge rule to receive new AMI events from Image Builder. Target an AWS Lambda function that updates the launch templates of the Auto Scaling groups with the newest AMI ID.",
        "Configure the launch template to use a value from AWS Systems Manager Parameter Store for the AMI ID. Configure the Image Builder pipeline to update the Parameter Store value with the newest AMI ID.",
        "Configure the Image Builder distribution settings to update the launch templates with the newest AMI I Configure the Auto Scaling groups to use the newest version of the launch template."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_421",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company has configured an Amazon S3 event source on an AWS Lambda function. The company needs the Lambda function to run when a new object is created or an existing object is modified in a particular S3 bucket. The Lambda function will use the S3 bucket name and the S3 object key of the incoming event to read the contents of the created or modified S3 object. The Lambda function will parse the contents and save the parsed contents to an Amazon DynamoDB table. The Lambda function's execution role has permissions to read from the S3 bucket and to write to the DynamoDB table. During testing, a DevOps engineer discovers that the Lambda function does not run when objects are added to the S3 bucket or when existing objects are modified. Which solution will resolve this problem?",
      "options": [
        "Increase the memory of the Lambda function to give the function the ability to process large files from the S3 bucket.",
        "Create a resource policy on the Lambda function to grant Amazon S3 the permission to invoke the Lambda function for the S3 bucket.",
        "Configure an Amazon Simple Queue Service (Amazon SQS) queue as an OnFailure destination for the Lambda function.",
        "Provision space in the /tmp folder of the Lambda function to give the function the ability to process large files from the S3 bucket."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_422",
      "batch": "Batch 9",
      "type": "multiple",
      "prompt": "A company builds an application that uses an Application Load Balancer in front of Amazon EC2 instances that are in an Auto Scaling group. The application is stateless. The Auto Scaling group uses a custom AMI that is fully prebuilt. The EC2 instances do not have a custom bootstrapping process. The AMI that the Auto Scaling group uses was recently deleted. The Auto Scaling group's scaling activities show failures because the AMI ID does not exist. Which combination of steps should a DevOps engineer take to meet these requirements? (Choose three.)",
      "options": [
        "Create a new launch template that uses the new AMI.",
        "Update the Auto Scaling group to use the new launch template.",
        "Reduce the Auto Scaling group's desired capacity to 0.",
        "Increase the Auto Scaling group's desired capacity by 1.",
        "Create a new AMI from a running EC2 instance in the Auto Scaling group.",
        "Create a new AMI by copying the most recent public AMI of the operating system that the EC2 instances use."
      ],
      "correctAnswers": [
        0,
        1,
        4
      ],
      "explanation": "Correct Answer: ABE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_423",
      "batch": "Batch 9",
      "type": "multiple",
      "prompt": "A company deploys a web application on Amazon EC2 instances that are behind an Application Load Balancer (ALB). The company stores the application code in an AWS CodeCommit repository. When code is merged to the main branch, an AWS Lambda function invokes an AWS CodeBuild project. The CodeBuild project packages the code, stores the packaged code in AWS CodeArtifact, and invokes AWS Systems Manager Run Command to deploy the packaged code to the EC2 instances. Previous deployments have resulted in defects, EC2 instances that are not running the latest version of the packaged code, and inconsistencies between instances. Which combination of actions should a DevOps engineer take to implement a more reliable deployment solution? (Choose two.)",
      "options": [
        "Create a pipeline in AWS CodePipeline that uses the CodeCommit repository as a source provider. Configure pipeline stages that run the CodeBuild project in parallel to build and test the application. In the pipeline, pass the CodeBuild project output artifact to an AWS CodeDeploy action.",
        "Create a pipeline in AWS CodePipeline that uses the CodeCommit repository as a source provider. Create separate pipeline stages that run a CodeBuild project to build and then test the application. In the pipeline, pass the CodeBuild project output artifact to an AWS CodeDeploy action.",
        "Create an AWS CodeDeploy application and a deployment group to deploy the packaged code to the EC2 instances. Configure the ALB for the deployment group.",
        "Create individual Lambda functions that use AWS CodeDeploy instead of Systems Manager to run build, test, and deploy actions.",
        "Create an Amazon S3 bucket. Modify the CodeBuild project to store the packages in the S3 bucket instead of in CodeArtifact. Use deploy actions in CodeDeploy to deploy the artifact to the EC2 instances."
      ],
      "correctAnswers": [
        1,
        2
      ],
      "explanation": "Correct Answer: BC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_424",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company uses an organization in AWS Organizations to manage its AWS accounts. The company's automation account contains a CI/CD pipeline that creates and configures new AWS accounts. The company has a group of internal service teams that provide services to accounts in the organization. The service teams operate out of a set of services accounts. The service teams want to receive an AWS CloudTrail event in their services accounts when the CreateAccount API call creates a new account. How should the company share this CloudTrail event with the service accounts?",
      "options": [
        "Create an Amazon EventBridge rule in the automation account to send account creation events to the default event bus in the services accounts. Update the default event bus in the services accounts to allow events from the automation account.",
        "Create a custom Amazon EventBridge event bus in the services accounts. Update the custom event bus to allow events from the automation account. Create an EventBridge rule in the services account that directly listens to CloudTrail events from the automation account.",
        "Create a custom Amazon EventBridge event bus in the automation account and the services accounts. Create an EventBridge rule and policy that connects the custom event buses that are in the automation account and the services accounts.",
        "Create a custom Amazon EventBridge event bus in the automation account. Create an EventBridge rule and policy that connects the custom event bus to the default event buses in the services accounts."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_425",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A DevOps engineer is building a solution that uses Amazon Simple Queue Service (Amazon SQS) standard queues. The solution also includes an AWS Lambda function and an Amazon DynamoDB table. The Lambda function pulls content from an SQS queue event source and writes the content to the DynamoDB table. The solution must maximize the scalability of Lambda and must prevent successfully processed SQS messages from being processed multiple times. Which solution will meet these requirements?",
      "options": [
        "Decrease the batch window to 1 second when configuring the Lambda function's event source mapping.",
        "Decrease the batch size to 1 when configuring the Lambda function's event source mapping.",
        "Include the ReportBatchItemFailures value in the FunctionResponseTypes list in the Lambda function's event source mapping.",
        "Set the queue visibility timeout on the Lambda function's event source mapping to account for invocation throttling of the Lambda function."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_426",
      "batch": "Batch 9",
      "type": "multiple",
      "prompt": "A company has an event-driven JavaScript application. The application uses decoupled AWS managed services that publish, consume, and route events. During application testing, events are not delivered to the target that is specified by an Amazon EventBridge rule. A DevOps team must provide application testers with additional functionality to view, troubleshoot, and prevent the loss of events without redeployment of the application. Which combination of steps should the DevOps team take to meet these requirements? (Choose three.)",
      "options": [
        "Launch AWS Device Farm with a standard test environment and project to run a specific build of the application.",
        "Create an Amazon S3 bucket. Enable AWS CloudTrail. Create a CloudTrail trail that specifies the S3 bucket as the storage location.",
        "Configure the EventBridge rule to use an Amazon Simple Queue Service (Amazon SQS) standard queue as a dead-letter queue.",
        "Configure the EventBridge rule to use an Amazon Simple Queue Service (Amazon SQS) FIFO queue as a dead-letter queue.",
        "Create a log group in Amazon CloudWatch Logs Specify the log group as an additional target of the EventBridge rule.",
        "Update the application code base to use the AWS X-Ray SDK tracing feature to instrument the code with support for the X-Amzn-Trace-Id header."
      ],
      "correctAnswers": [
        1,
        2,
        4
      ],
      "explanation": "Correct Answer: BCE",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_427",
      "batch": "Batch 9",
      "type": "multiple",
      "prompt": "A company is migrating its container-based workloads to an AWS Organizations multi-account environment. The environment consists of application workload accounts that the company uses to deploy and run the containerized workloads. The company has also provisioned a shared services account for shared workloads in the organization. The company must follow strict compliance regulations. All container images must receive security scanning before they are deployed to any environment. Images can be consumed by downstream deployment mechanisms after the images pass a scan with no critical vulnerabilities. Pre-scan and post-scan images must be isolated from one another so that a deployment can never use pre-scan images. A DevOps engineer needs to create a strategy to centralize this process. Which combination of steps will meet these requirements with the LEAST administrative overhead? (Choose two.)",
      "options": [
        "Create Amazon Elastic Container Registry (Amazon ECR) repositories in the shared services account: one repository for each pre-scan image and one repository for each post-scan image. Configure Amazon ECR image scanning to run on new image pushes to the pre-scan repositories. Use resource-based policies to grant the organization write access to the pre- scan repositories and read access to the post-scan repositories.",
        "Create pre-scan Amazon Elastic Container Registry (Amazon ECR) repositories in each account that publishes container images. Create repositories for post-scan images in the shared services account. Configure Amazon ECR image scanning to run on new image pushes to the pre-scan repositories. Use resource-based policies to grant the organization read access to the post-scan repositories.",
        "Configure image replication for each image from the image's pre-scan repository to the image's post-scan repository.",
        "Create a pipeline in AWS CodePipeline for each pre-scan repository. Create a source stage that runs when new images are pushed to the pre-scan repositories. Create a stage that uses AWS CodeBuild as the action provider. Write a buildspec.yaml definition that determines the image scanning status and pushes images without critical vulnerabilities to the post-scan repositories.",
        "Create an AWS Lambda function. Create an Amazon EventBridge rule that reacts to image scanning completed events and invokes the Lambda function. Write function code that determines the image scanning status and pushes images without critical vulnerabilities to the post-scan repositories."
      ],
      "correctAnswers": [
        0,
        4
      ],
      "explanation": "Correct Answer: AE",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_428",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A DevOps engineer is planning to use the AWS Cloud Development Kit (AWS CDK) to manage infrastructure as code (IaC) for a microservices-based application. The DevOps engineer must create reusable components for common infrastructure patterns and must apply the same cost allocation tags across different microservices. Which solution will meet these requirements?",
      "options": [
        "Create a custom CDK construct library that includes common infrastructure patterns. Create a CDK app. Use the TagManager class to add cost allocation tags to the whole app. Use the custom CDK construct library to write a higher-level construct that contains all the microservices. Deploy the microservices as a single CDK stack with environment-specific configurations",
        "Create a custom CDK construct library that includes common infrastructure patterns. Create a CDK app. Use the Tags class to add cost allocation tags to the whole app. Use the custom CDK construct library to write higher-level constructs for each microservice. Deploy the microservices as separate CDK stacks with environment-specific configurations.",
        "Create AWS Service Catalog products that contain common infrastructure components. Create a CDK app. Use the TagManager class to add cost allocation tags to the whole app. Use the Service Catalog products to write a higher-level construct that contains all the microservices. Deploy the microservices as a single CDK stack with environment-specific configurations.",
        "Create AWS Service Catalog products that contain common infrastructure components. Create a CDK app. Use the Tags class to add cost allocation tags to the whole app. Use the Service Catalog products to write higher-level constructs for each microservice. Deploy the microservices as separate CDK stacks with environment-specific configurations."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_429",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company uses an Amazon Elastic Kubernetes Service (Amazon EKS) cluster to deploy its web applications on containers. The web applications contain confidential data that cannot be decrypted without specific credentials. A DevOps engineer has stored the credentials in AWS Secrets Manager. The secrets are encrypted by an AWS Key Management Service (AWS KMS) customer managed key. A Kubernetes service account for a third-party tool makes the secrets available to the applications. The service account assumes an IAM role that the company created to access the secrets. The service account receives an Access Denied (403 Forbidden) error while trying to retrieve the secrets from Secrets Manager. What is the root cause of this issue?",
      "options": [
        "The IAM role that is attached to the EKS cluster does not have access to retrieve the secrets from Secrets Manager.",
        "The key policy for the customer managed key does not allow the Kubernetes service account IAM role to use the key.",
        "The key policy for the customer managed key does not allow the EKS cluster IAM role to use the key.",
        "The IAM role that is assumed by the Kubernetes service account does not have permission to access the EKS cluster."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_430",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company has deployed a microservices-based application on Amazon Elastic Container Service (Amazon ECS). The application is experiencing performance issues. The company needs to identify which microservices are causing the issues. Which solution will provide this information?",
      "options": [
        "Configure AWS X-Ray for each ECS task. Create an X-Ray group for each microservice. Implement custom X-Ray subsegments in each microservice to capture detailed timing information. Use an X-Ray service map to visualize and identify slow microservices and requests.",
        "Configure AWS X-Ray for each ECS task. Use an X-Ray service map to visualize the application's architecture and request flow. Filter the X-Ray traces by response time and error rate. Identify the microservices that have high latency or high error rates. Analyze individual traces to identify slow microservices and requests.",
        "Configure Amazon CloudWatch Container Insights for each ECS task. Analyze Container Insights metrics to identify slow microservices. Use CloudWatch Logs Insights to filter the Container Insights log data by response time and error rate. Analyze the log data to identify slow requests.",
        "Configure Amazon CloudWatch Container Insights for each ECS task. Use the CloudWatch automatic dashboard for Amazon ECS to identify slow microservices. Use CloudWatch Logs Insights to analyze the Container Insights performance logs for each ECS task to identify slow requests."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_431",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company has an AWS CodePipeline pipeline in the eu-west-1 Region. The pipeline stores the build artifacts in an Amazon S3 bucket. The pipeline builds and deploys an AWS Lambda function by using an AWS CloudFormation deploy action. A DevOps engineer needs to update the existing pipeline to also deploy the Lambda function to the us-east-1 Region. The pipeline has already been updated to create an additional artifact to deploy to us-east-1. Which combination of steps should the DevOps engineer take to meet these requirements? (Choose two.)",
      "options": [
        "Modify the CloudFormation template to include a parameter for the Lambda function code's .zip file location. Create a new CloudFormation deploy action for us-east-1 in the pipeline. Configure the new deploy action to pass in the us-east-1 artifact location as a parameter override.",
        "Create a new CloudFormation deploy action for us-east-1 in the pipeline. Configure the new deploy action to use the CloudFormation template from the additional artifact that was created for us-east-1.",
        "Create an S3 bucket in us-east-1. Configure the S3 bucket policy to allow CodePipeline to have read and write access.",
        "Create an S3 bucket in us-east-1. Configure S3 Cross-Region Replication (CRR) from the S3 bucket in eu-west-1 to the S3 bucket in us-east-1.",
        "Modify the pipeline to include the S3 bucket for us-east-1 as an artifact store. Create a new CloudFormation deploy action for us-east-1 in the pipeline. Configure the new deploy action to use the CloudFormation template from the us-east-1 artifact."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_432",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company runs an application on an Amazon Elastic Container Service (Amazon ECS) service by using the AWS Fargate launch type. The application consumes messages from an Amazon Simple Queue Service (Amazon SQS) queue. The application can take several minutes to process each message from the queue. When the application processes a message, the application reads a file from an Amazon S3 bucket and processes the data in the file. The application writes the processed output to a second S3 bucket. The company uses Amazon CloudWatch Logs to monitor processing errors and to ensure that the application processes messages successfully. The SQS queue typically receives a low volume of messages. However, occasionally the queue receives higher volumes of messages. A DevOps engineer needs to implement a solution to reduce the processing time of message bursts. Which solution will meet this requirement in the MOST cost-effective way?",
      "options": [
        "Register the ECS service as a scalable target in AWS Application Auto Scaling. Configure a target tracking scaling policy to scale the service in response to the queue size.",
        "Increase the maximum number of messages that Amazon SQS requests to batch messages together. Use long polling to minimize the number of API calls to Amazon SQS during periods of low traffic.",
        "Send messages to an Amazon EventBridge event bus instead of the SQS queue. Replace the ECS service with an EventBridge rule that launches ECS tasks in response to matching events.",
        "Create an Auto Scaling group of EC2 instances. Create a capacity provider in the ECS cluster by using the Auto Scaling group. Change the ECS service to use the EC2 launch type."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_433",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company has proprietary data available by using an Amazon CloudFront distribution. The company needs to ensure that the distribution is accessible by only users from the corporate office that have a known set of IP address ranges. An AWS WAF web ACL is associated with the distribution and has a default action set to Count. Which solution will meet these requirements with the LEAST operational overhead?",
      "options": [
        "Create a new regex pattern set. Add the regex pattern set to a new rule group. Create a new web ACL that has a default action set to Block. Associate the web ACL with the CloudFront distribution. Add a rule that allows traffic based on the new rule group.",
        "Create an AWS WAF IP address set that matches the corporate office IP address range. Create a new web ACL that has a default action set to Allow. Associate the web ACL with the CloudFront distribution. Add a rule that allows traffic from the IP address set.",
        "Create a new regex pattern set. Add the regex pattern set to a new rule group. Set the default action on the existing web ACL to Allow. Add a rule that has priority 0 that allows traffic based on the regex pattern set.",
        "Create a WAF IP address set that matches the corporate office IP address range. Set the default action on the existing web ACL to Block. Add a rule that has priority 0 that allows traffic from the IP address set."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_434",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A DevOps engineer manages a Java-based application that runs in an Amazon Elastic Container Service (Amazon ECS) cluster on AWS Fargate. Auto scaling has not been configured for the application. The DevOps engineer has determined that the Java Virtual Machine (JVM) thread count is a good indicator of when to scale the application. The application serves customer traffic on port 8080 and makes JVM metrics available on port 9404. Application use has recently increased. The DevOps engineer needs to configure auto scaling for the application. Which solution will meet these requirements with the LEAST operational overhead? (Choose two.)",
      "options": [
        "Deploy the Amazon CloudWatch agent as a container sidecar. Configure the CloudWatch agent to retrieve JVM metrics from port 9404. Create CloudWatch alarms on the JVM thread count metric to scale the application. Add a step scaling policy in Fargate to scale up and scale down based on the CloudWatch alarms.",
        "Deploy the Amazon CloudWatch agent as a container sidecar. Configure a metric filter for the JVM thread count metric on the CloudWatch log group for the CloudWatch agent. Add a target tracking policy in Fargate. Select the metric from the metric filter as a scale target.",
        "Create an Amazon Managed Service for Prometheus workspace. Deploy AWS Distro for OpenTelemetry as a container sidecar to publish the JVM metrics from port 9404 to the Prometheus workspace. Configure rules for the workspace to use the JVM thread count metric to scale the application. Add a step scaling policy in Fargate. Select the Prometheus rules to scale up and scaling down.",
        "Create an Amazon Managed Service for Prometheus workspace. Deploy AWS Distro for OpenTelemetry as a container sidecar to retrieve JVM metrics from port 9404 to publish the JVM metrics from port 9404 to the Prometheus workspace. Add a target tracking policy in Fargate. Select the Prometheus metric as a scale target."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_435",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company uses Amazon Redshift as its data warehouse solution. The company wants to create a dashboard to view changes to the Redshift users and the queries the users perform. Which combination of steps will meet this requirement? (Choose two.)",
      "options": [
        "Create an Amazon CloudWatch log group. Create an AWS CloudTrail trail that writes to the CloudWatch log group.",
        "Create a new Amazon S3 bucket. Configure default audit logging on the Redshift cluster. Configure the S3 bucket as the target.",
        "Configure the Redshift cluster database audit logging to include user activity logs. Configure Amazon CloudWatch as the target.",
        "Create an Amazon CloudWatch dashboard that has a log widget. Configure the widget to display user details from the Redshift logs.",
        "Create an AWS Lambda function that uses Amazon Athena to query the Redshift logs. Create an Amazon CloudWatch dashboard that has a custom widget type that uses the Lambda function ."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_436",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company has multiple AWS accounts in an organization in AWS Organizations that has all features enabled. The company’s DevOps administrator needs to improve security across all the company's AWS accounts. The administrator needs to identify the top users and roles in use across all accounts. Which solution will meet these requirements with the MOST operational efficiency?",
      "options": [
        "Create a new organization trail in AWS CloudTrail. Configure the trail to send log events to Amazon CloudWatch Logs. Create a CloudWatch Contributor Insights rule for the userIdentity.arn log field. View the results in CloudWatch Contributor Insights.",
        "Create an unused access analysis for the organization by using AWS Identity and Access Management Access Analyzer. Review the analyzer results and determine if each finding has the intended level of permissions required for the workload.",
        "Create a new organization trail in AWS CloudTrail. Create a table in Amazon Athena that uses partition projection. Load the Athena table with CloudTrail data. Query the Athena table to find the top users and roles.",
        "Generate a Service access report for each account by using Organizations. From the results, pull the last accessed date and last accessed by account fields to find the top users and roles."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_437",
      "batch": "Batch 9",
      "type": "multiple",
      "prompt": "A company is running an internal application in an Amazon Elastic Container Service (Amazon ECS) cluster on Amazon EC2. The ECS cluster instances can connect to the public internet. The ECS tasks that run on the cluster instances are configured to use images from both private Amazon Elastic Container Registry (Amazon ECR) repositories and a public ECR registry repository. A new security policy requires the company to remove the ECS cluster's direct access to the internet. The company must remove any NAT gateways and internet gateways from the VPC that hosts the cluster. A DevOps engineer needs to ensure the ECS cluster can still download images from both the public ECR registry and the private ECR repositories. Images from the public ECR registry must remain up-to-date. New versions of the images must be available to the ECS cluster within 24 hours of publication. Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose three.)",
      "options": [
        "Create an AWS CodeBuild project and a new private ECR repository for each image that is downloaded from the public ECR registry. Configure each project to pull the image from the public ECR repository and push the image to the new private ECR repository. Create an Amazon EventBridge rule that invokes the CodeBuild project once every 24 hours. Update each task definition in the ECS cluster to refer to the new private ECR repository.",
        "Create a new Amazon ECR pull through cache rule for each image that is downloaded from the public ECR registry. Create an AWS Lambda function that invokes each pull through cache rule. Create an Amazon EventBridge rule that invokes the Lambda function once every 24 hours. Update each task definition in the ECS cluster to refer to the image from the pull through cache.",
        "Create a new Amazon ECR pull through cache rule for the public ECR registry. Update each task definition in the ECS cluster to refer to the image from the pull through cache. Ensure each public image has been downloaded through the pull through cache at least once before removing internet access from the VPC.",
        "Create an Amazon ECR interface VPC endpoint for the public ECR repositories that are in the VPC.",
        "Create an Amazon ECR interface VPC endpoint for the private ECR repositories that are in the VPC.",
        "Create an Amazon S3 gateway endpoint in the VPC."
      ],
      "correctAnswers": [
        2,
        4
      ],
      "explanation": "Correct Answer: CE",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_438",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company has an application that runs on Amazon EC2 instances in an Auto Scaling group. The application processes a high volume of messages from an Amazon Simple Queue Service (Amazon SQS) queue. A DevOps engineer noticed that the application took several hours to process a group of messages from the SQS queue. The average CPU utilization of the Auto Scaling group did not cross the threshold of a target tracking scaling policy when processing the messages. The application that processes the SQS queue publishes logs to ‘Amazon CloudWatch Logs. The DevOps engineer needs to ensure that the queue is processed quickly. Which solution meets these requirements with the LEAST operational overhead?",
      "options": [
        "Create an AWS Lambda function. Configure the Lambda function to publish a custom metric by using the ApproximateNumberOfMessagesVisible SQS queue attribute and the GroupInServiceInstances Auto Scaling group attribute to publish the queue messages for each instance. Schedule an Amazon EventBridge rule to run the Lambda function every hour. Create a target tracking scaling policy for the Auto Scaling group that uses the custom metric to scale in and out.",
        "Create an AWS Lambda function. Configure the Lambda function to publish a custom metric by using the ApproximateNumberOfMessagesVisible SQS queue attribute and the GroupInServiceInstances Auto Scaling group attribute to publish the queue messages for each instance. Create a CloudWatch subscription filter for the application logs with the Lambda function as the target. Create a target tracking scaling policy for the Auto Scaling group that uses the custom metric to scale in and out.",
        "Create a target tracking scaling policy for the Auto Scaling group. In the target tracking policy, use the ApproximateNumberOfMessagesVisible SQS queue attribute and the GroupInServiceInstances Auto Scaling group attribute to calculate how many messages are in the queue for each number of instances by using metric math. Use the calculated attribute to scale in and out.",
        "Create an AWS Lambda function that logs the ApproximateNumberOfMessagesVisible attribute of the SQS queue to a CloudWatch Logs log group. Schedule an Amazon EventBridge rule to run the Lambda function every 5 minutes. Create a metric filer to count the number of log events from a CloudWatch logs group. Create a target tracking scaling policy for the Auto Scaling group that uses the custom metric to scale in and out."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_439",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company is using AWS CodeDeploy to deploy applications to a fleet of Amazon EC2 instances. During a recent deployment, several EC2 instances failed to update successfully. A DevOps engineer must investigate the root cause of the failures and must determine which specific deployment lifecycle events encountered errors. What is the MOST operationally efficient way to access and analyze the detailed deployment logs for troubleshooting?",
      "options": [
        "Use SSH to connect to each EC2 instance that failed to update successfully. Read the logs from the CodeDeploy agent.",
        "Use AWS Systems Manager Session Manager to connect to each EC2 instance that failed to update successfully. Read the logs from the CodeDeploy agent.",
        "Create an Amazon S3 bucket to store CodeDeploy logs. Update the appspec.yml file to copy logs to the S3 bucket. Query the S3 bucket by using Amazon Athena",
        "Send CodeDeploy agent logs to Amazon CloudWatch Logs by using the CloudWatch agent. Analyze the logs by using CloudWatch Logs Insights."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_440",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company uses an organization in AWS Organizations to manage 10 AWS accounts. All features are enabled, and trusted access for AWS CloudFormation is enabled. A DevOps engineer needs to use CloudFormation to deploy an IAM role to the Organizations management account and all member accounts in the organization. Which solution will meet these requirements with the LEAST operational overhead?",
      "options": [
        "Create a CloudFormation StackSet that has service-managed permissions. Set the root OU as a deployment target.",
        "Create a CloudFormation StackSet that has service-managed permissions. Set the root OU as a deployment target. Deploy a separate CloudFormation stack in the Organizations management account.",
        "Create a CloudFormation StackSet that has self-managed permissions. Set the root OU as a deployment target.",
        "Create a CloudFormation StackSet that has self-managed permissions. Set the root OU as a deployment target. Deploy a separate CloudFormation stack in the Organizations management account."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_441",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A DevOps engineer provisioned an Amazon Elastic Kubernetes Service (Amazon EKS) cluster with managed node groups. The DevOps engineer associated an OpenID Connect (OIDC) issuer with the cluster. The DevOps engineer is configuring Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp3) volumes for the cluster. The DevOps engineer attempts to initiate a PersistentVolumeClaim (PVC) request but is unable to provision a volume. To troubleshoot the issue, the DevOps engineer runs the kubectl describe pyc command. The DevOps engineer receives a failed to provision volume with StorageClass error and a could not create volume in EC2:UnauthorizedOperation error. Which solution will resolve these errors?",
      "options": [
        "Create a Kubernetes cluster role that allows the persistent volumes to perform get, list, watch, create, and delete operations. Configure the cluster role to allow get, list, and watch operations for storage in the cluster.",
        "Create an Amazon EBS Container Storage Interface (CSI) driver IAM role that has the required permissions and trust relationships. Attach the IAM role to the Amazon EBS CSI driver add-on in the cluster.",
        "Add the ebs.csi.aws.com/volumeType:gp3 annotation to the PersistentVolumeClaim object in the cluster.",
        "Create a Kubernetes storage class object. Set the provisioner value to ebs.csi.aws.com. Set the volumeBindingMode value to WaitForFirstConsumer in the luster."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_442",
      "batch": "Batch 9",
      "type": "multiple",
      "prompt": "A company runs applications on Windows and Linux Amazon EC2 instances. The instances run across multiple Availability Zones in an AWS Region. The company uses Auto Scaling groups for each application. The company needs a durable storage solution for the instances. The solution must use SMB for Windows and must use NFS for Linux. The solution must also have sub-millisecond latencies. All instances will read and write the data. Which combination of steps will meet these requirements? (Choose three.)",
      "options": [
        "Create an Amazon Elastic File System (Amazon EFS) file system that has targets in multiple Availability Zones.",
        "Create an Amazon FSx for NetApp ONTAP Multi-AZ file system.",
        "Create a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume to use for shared storage.",
        "Update the user data for each application’s launch template to mount the file system.",
        "Perform an instance refresh on each Auto Scaling group.",
        "Update the EC2 instances for each application to mount the file system when new instances are launched."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_443",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company has deployed a landing zone that has a well-defined AWS Organizations structure and an SCP. The company's development team can create their AWS resources only by using AWS CloudFormation and the AWS Cloud Development Kit (AWS CDK). A DevOps engineer notices that Amazon Simple Queue Service (Amazon SQS) queues that are deployed in different CloudFormation stacks have different configurations. The DevOps engineer also notices that the application cost allocation tag is not always set. The DevOps engineer needs a solution that will enforce tagging and promote the reuse of code. The DevOps engineer needs to avoid different configurations for the deployed SQS queues. What should the DevOps engineer do to meet these requirements?",
      "options": [
        "Create an Organizations tag policy to enforce the cost allocation tag in CloudFormation stacks. Instruct the development team to use CloudFormation to define SQS queues. Instruct the development team to deploy the SQS queues by using CloudFormation StackSets.",
        "Update the SCP to enforce the cost allocation tag in CloudFormation stacks. Instruct the development team to use CloudFormation modules to define SQS queues. Instruct the development team to deploy the SQS queues by using CloudFormation stacks.",
        "Use AWS CDK tagging to enforce the cost allocation tag in CloudFormation StackSets. Instruct the development team to use the AWS CDK to define SQS queues. Instruct the development team to deploy the SQS queues by using CDK stacks.",
        "Use AWS CDK tagging to enforce the cost allocation tag in CloudFormation stacks. Instruct the development team to use the AWS CDK to define SQS queues. Instruct the development team to deploy the SQS queues by using CDK feature flags."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_444",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company's DevOps engineer uses AWS Systems Manager to perform maintenance tasks. The company has a few Amazon EC2 instances that require a restart after notifications from AWS Health. The DevOps engineer must implement an automated solution that uses Amazon EventBridge to remediate the notifications during the company's scheduled maintenance windows. How should the DevOps engineer configure an EventBridge rule to meet these requirements?",
      "options": [
        "Configure an event source of AWS Health. Configure event types that indicate scheduled instance termination and retirement. Target the AWS-RestartEC2Instance Systems Manager Automation runbook to restart the EC2 instances.",
        "Configure an event source of Systems Manager. Configure an event type that indicates a maintenance window. Target the AWS-RestartEC2Instance Systems Manager Automation runbook to restart the EC2 instances.",
        "Configure an event source of AWS Health. Configure event types that indicate scheduled instance termination and retirement. Target a newly created AWS Lambda function that registers a Systems Manager maintenance window task to restart the EC2 instances.",
        "Configure an event source of EC2. Configure an event type that indicates instance state notification. Target a newly created AWS Lambda function that registers a Systems Manager maintenance window task to restart the EC2 instances."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_445",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company uses containers for its applications. The company learns that some container images are missing required security configurations. A DevOps engineer needs to implement a solution to create a standard base image. The solution must publish the base image weekly to the us-west-2 Region, us-east-2 Region, and eu-central-1 Region. Which solution will meet these requirements?",
      "options": [
        "Create an EC2 Image Builder pipeline that uses a container recipe to build the image. Configure the pipeline to distribute the image to an Amazon Elastic Container Registry (Amazon ECR) repository in us-west-2. Configure ECR replication from us-west-2 to us-east-2 and from us-east-2 to eu-central-1. Configure the pipeline to run weekly.",
        "Create an AWS CodePipeline pipeline that uses an AWS CodeBuild project to build the image. Use AWS CodeDeploy to publish the image to an Amazon Elastic Container Registry (Amazon ECR) repository in us- west-2. Configure ECR replication from us-west-2 to us-east-2 and from us-east-2 to eu-central-1. Configure the pipeline to run weekly",
        "Create an EC2 Image Builder pipeline that uses a container recipe to build the image. Configure the pipeline to distribute the image to Amazon Elastic Container Registry (Amazon ECR) repositories in all three Regions. Configure the pipeline to run weekly.",
        "Create an AWS CodePipeline pipeline that uses an AWS CodeBuild project to build the image. Use AWS CodeDeploy to publish the image to Amazon Elastic Container Registry (Amazon ECR) repositories in all three Regions. Configure the pipeline to run weekly."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_446",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company's video streaming platform usage has increased from 10,000 users each day to 50,000 users each day in multiple countries. The company deploys the streaming platform on Amazon Elastic Kubernetes Service (Amazon EKS). The EKS workload scales up to thousands of nodes during peak viewing time. The company's users report occurrences of unauthorized logins. Users also report sudden interruptions and logouts from the platform. The company wants additional security measures for the entire platform. The company also needs a summarized view of the resource behaviors and interactions across the company's entire AWS environment. The summarized view must show login attempts, API calls, and network traffic. The solution must permit network traffic analysis while minimizing the overhead of managing logs. The solution must also quickly investigate any potential malicious behavior that is associated with the EKS workload. Which solution will meet these requirements?",
      "options": [
        "Enable Amazon GuardDuty for EKS Audit Log Monitoring. Enable AWS CloudTrail logs. Store the EKS audit logs and CloudTrail log files in an Amazon S3 bucket. Use Amazon Athena to create an external table. Use Amazon QuickSight to create a dashboard.",
        "Enable Amazon GuardDuty for EKS Audit Log Monitoring. Enable Amazon Detective in the company's AWS account. Enable EKS audit logs from optional source packages in Detective.",
        "Enable Amazon CloudWatch Container Insights. Enable AWS CloudTrail logs. Store the EKS audit logs and CloudTrail log files in an Amazon S3 bucket. Use Amazon Athena to create an external table. Use Amazon QuickSight to create a dashboard.",
        "Enable Amazon GuardDuty for EKS Audit Log Monitoring. Enable Amazon CloudWatch Container Insights and VPC Flow Logs. Enable AWS CloudTrail logs."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_447",
      "batch": "Batch 9",
      "type": "multiple",
      "prompt": "A company needs to increase the security of the container images that run in its production environment. The company wants to integrate operating system scanning and programming language package vulnerability scanning for the containers in its CI/CD pipeline. The CI/CD pipeline is an AWS CodePipeline pipeline that includes an AWS CodeBuild build project, AWS CodeDeploy actions, and an Amazon Elastic Container Registry (Amazon ECR) repository. A DevOps engineer needs to add an image scan to the CI/CD pipeline. The CI/CD pipeline must deploy only images without CRITICAL and HIGH findings into production. Which combination of steps will meet these requirements? (Choose two.)",
      "options": [
        "Use Amazon ECR basic scanning.",
        "Use Amazon ECR enhanced scanning.",
        "Configure Amazon ECR to submit a Rejected status to the CI/CD pipeline when the image scan returns CRITICAL or HIGH findings.",
        "Configure an Amazon EventBridge rule to invoke an AWS Lambda function when the image scan is completed. Configure the Lambda function to consume the Amazon Inspector scan status and to submit an Approved or Rejected status to the CI/CD pipeline.",
        "Configure an Amazon EventBridge rule to invoke an AWS Lambda function when the image scan is completed. Configure the Lambda function to consume the Clair scan status and to submit an Approved or Rejected status to the CI/CD pipeline."
      ],
      "correctAnswers": [
        1,
        3
      ],
      "explanation": "Correct Answer: BD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_448",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company deploys an application on on-premises devices in the company’s on-premises data center. The company uses an AWS Direct Connect connection between the data center and the company's AWS account. During initial setup of the on-premises devices and during application updates, the application needs to retrieve configuration files from an Amazon Elastic File System (Amazon EFS) file system. All traffic from the on-premises devices to Amazon EFS must remain private and encrypted. The on-premises devices must follow the principle of least privilege for AWS access. The company's DevOps team needs the ability to revoke access from a single device without affecting the access of the other devices. Which combination of steps will meet these requirements? (Choose two.)",
      "options": [
        "Create an IAM user that has an access key and a secret key for each device. Attach the AmazonElasticFileSystemFullAccess policy to all IAM users. Configure the AWS CLI on the on-premises devices to use the IAM user's access key and secret key.",
        "Generate certificates for each on-premises device in AWS Private Certificate Authority. Create a trust anchor in IAM Roles Anywhere that references an AWS Private CA. Create an IAM role that trust IAM Roles Anywhere. Attach the AmazonElasticFileSystemClientReadWriteAccess to the role. Create an IAM Roles Anywhere profile for the IAM role. Configure the AWS CLI on the on-premises devices to use the aws_signing_helper command to obtain credentials.",
        "Create an IAM user that has an access key and a secret key for all devices. Attach the AmazonElasticFileSystemClientReadWriteAccess policy to the IAM user. Configure the AWS CLI on the on-premises devices to use the IAM user's access key and secret key.",
        "Use the amazon-efs-utils package to mount the EFS file system.",
        "Use the native Linux NFS client to mount the EFS file system."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_449",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company runs a web application on Amazon Elastic Kubernetes Service (Amazon EKS). The company uses Amazon CloudFront to distribute the application. The company recently enabled AWS WAF. The company set up Amazon CloudWatch Logs to send logs to an aws-waf-logs log group. The company wants a DevOps engineer to receive alerts if there are sudden changes in blocked traffic. The company does not want to receive alerts for other changes in AWS WAF log behavior. The company will tune AWS WAF rules over time. The DevOps engineer is currently subscribed to an Amazon Simple Notification Service (Amazon SNS) topic in the environment. Which solution will meet these requirements?",
      "options": [
        "Create a CloudWatch Logs metrics filter for blocked requests on the AWS WAF log group to create a custom metric. Create a CloudWatch alarm by using CloudWatch anomaly detection and the published custom metric. Configure the alarm to notify the SNS topic to alert the DevOps engineer.",
        "Create a CloudWatch anomaly detector for the log group. Create a CloudWatch alarm by using metrics that the CloudWatch anomaly detector publishes. Use the high setting for the LogAnomalyPriority metric. Configure the alarm to go into alarm state if a static threshold of one anomaly is detected. Configure the alarm to notify the SNS topic to alert the DevOps engineer.",
        "Create a CloudWatch metrics filter for counted requests on the AWS WAF log group to create a custom metric. Create a CloudWatch alarm that activates when the sum of blocked requests in the custom metric during a period of 1 hour is greater than a static estimate for the acceptable number of blocked requests in 1 hour. Configure the alarm to notify the SNS topic to alert the DevOps engineer.",
        "Create a CloudWatch anomaly detector for the log group. Create a CloudWatch alarm by using metrics that the CloudWatch anomaly detector publishes. Use the medium setting for the LogAnomalyPriority metric. Configure the alarm to go into alarm state if a sum of anomalies over 1 hour is greater than an expected value. Configure the alarm to notify the SNS topic to alert the DevOps engineer."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_450",
      "batch": "Batch 9",
      "type": "single",
      "prompt": "A company needs a strategy for failover and disaster recovery of its data and application. The application uses a MySQL database and Amazon EC2 instances. The company requires a maximum RPO of 2 hours and a maximum RTO of 10 minutes for its data and application at all times. Which combination of deployment strategies will meet these requirements? (Choose two.)",
      "options": [
        "Create an Amazon Aurora Single-AZ cluster in multiple AWS Regions as the data store. Use Aurora's automatic recovery capabilities in the event of a disaster.",
        "Create an Amazon Aurora global database in two AWS Regions as the data store. In the event of a failure, promote the secondary Region to the primary for the application. Update the application to use the Aurora cluster endpoint in the secondary Region.",
        "Create an Amazon Aurora cluster in multiple AWS Regions as the data store. Use a Network Load Balancer to balance the database traffic in different Regions.",
        "Set up the application in two AWS Regions. Use Amazon Route 53 failover routing that points to Application Load Balancers in both Regions. Use health checks and Auto Scaling groups in each Region.",
        "Set up the application in two AWS Regions. Configure AWS Global Accelerator to point to Application Load Balancers (ALBs) in both Regions. Add both ALBs to a single endpoint group. Use health checks and Auto Scaling groups in each Region."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_451",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A video platform company is migrating its video catalog to AWS. The company will host MP4 videos files in an Amazon S3 bucket. The company will use Amazon CloudFront and Amazon EC2 instances to serve the video files. Users first connect to a frontend application that redirects to a video URL. The video URL contains an authorization token in CloudFront. The cache is activated on the CloudFront distribution. Authorization token check activity needs to be logged in Amazon CloudWatch. The company wants to prevent direct access to video files on CloudFront and Amazon S3 and wants to implement checks of the authorization token that the frontend application provides. The company also wants to perform regular rolling updates of the code that checks the authorization token signature. Which solution will meet these requirements with the LEAST operational effort?",
      "options": [
        "Implement an authorization token check in Lambda@Edge as a trigger on the CloudFront distribution. Enable CloudWatch logging for the Lambda@Edge function. Attach the Lambda@Edge function to the CloudFront distribution. Implement CloudFront continuous deployment to perform updates.",
        "Implement an authorization token check in CloudFront Functions. Enable CloudWatch logging for the CloudFront function. Attach the CloudFront function to the CloudFront distribution. Implement CloudFront continuous deployment to perform updates.",
        "Implement an authorization token check in the application code that is installed on the EC2 instances. Install the CloudWatch agent on the EC2 instances. Configure the application to log to the CloudWatch agent. Implement a second CloudFront distribution. Migrate the traffic from the first CloudFront distribution by using Amazon Route 53 weighted routing.",
        "Implement an authorization token check in CloudFront Functions. Enable CloudWatch logging for the CloudFront function. Attach the CloudFront function to the CloudFront distribution. Implement a second CloudFront distribution. Migrate the traffic from the first CloudFront distribution by using Amazon Route 53 weighted routing."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_452",
      "batch": "Batch 10",
      "type": "multiple",
      "prompt": "A company uses AWS Organizations to manage hundreds of AWS accounts. The company has a team that is responsible for AWS Identity and Access Management (IAM). The IAM team wants to implement AWS IAM Identity Center. The IAM team must have only the minimum required permissions to manage IAM Identity Center. The IAM team must not be able to gain unnecessary access to the Organizations management account. The IAM team must be able to provision new IAM Identity Center permission sets and assignments for new and existing member accounts. Which combination of steps will meet these requirements? (Choose three.)",
      "options": [
        "Create a new AWS account for the IAM team. Enable IAM Identity Center in the new account. In the Organizations management account, register the new account as a delegated administrator for IAM Identity Center.",
        "Create a new AWS account for the IAM team. Enable IAM Identity Center in the Organizations management account. In the Organizations management account, register the new account as a delegated administrator for IAM Identity Center.",
        "Create an SCP in Organizations. Create a new OU for the Organizations management account, and link the new SCP to the OU. Configure the SCP to deny all access to IAM Identity Center.",
        "Create IAM users and an IAM group for the IAM team in IAM Identity Center. Add the users to the group. Create a new permission set. Attach the AWSSSOMemberAccountAdministrator managed IAM policy to the group.",
        "Assign the new permission set to the Organizations management account. Allow the IAM team's group to use the permission set.",
        "Assign the new permission set to the new AWS account. Allow the IAM team's group to use the permission set."
      ],
      "correctAnswers": [
        0,
        3,
        5
      ],
      "explanation": "Correct Answer: ADF",
      "hint": "Select 3 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_453",
      "batch": "Batch 10",
      "type": "multiple",
      "prompt": "A company has an application that stores data that includes personally identifiable information (PII) in an Amazon S3 bucket. All data is encrypted with AWS Key Management Service (AWS KMS) customer managed keys. All AWS resources are deployed from an AWS CloudFormation template. A DevOps engineer needs to set up a development environment for the application in a different AWS account. The data in the development environment's S3 bucket needs to be updated once a week from the production environment's S3 bucket. The company must not move PII from the production environment without anonymizing the PII first. The data in each environment must be encrypted with different KMS customer managed keys. Which combination of steps should the DevOps engineer take to meet these requirements? (Choose two.)",
      "options": [
        "Activate Amazon Macie on the S3 bucket in the production account. Create an AWS Step Functions state machine to initiate a discovery job and redact all PII before copying files to the S3 bucket in the development account. Give the state machine tasks decrypt permissions on the KMS key in the production account. Give the state machine tasks encrypt permissions on the KMS key in the development account.",
        "Set up S3 replication between the production S3 bucket and the development S3 bucket. Activate Amazon Macie on the development S3 bucket. Create an AWS Step Functions state machine to initiate a discovery job and redact all PII as the files are copied to the development S3 bucket. Give the state machine tasks encrypt and decrypt permissions on the KMS key in the development account.",
        "Set up an S3 Batch Operations job to copy files from the production S3 bucket to the development S3 bucket. In the development account, configure an AWS Lambda function to redact ail PII. Configure S3 Object Lambda to use the Lambda function for S3 GET requests. Give the Lambda function's IAM role encrypt and decrypt permissions on the KMS key in the development account.",
        "Create a development environment from the CloudFormation template in the development account. Schedule an Amazon EventBridge rule to start the AWS Step Functions state machine once a week.",
        "Create a development environment from the CloudFormation template in the development account. Schedule a cron job on an Amazon EC2 instance to run once a week to start the S3 Batch Operations job."
      ],
      "correctAnswers": [
        0,
        3
      ],
      "explanation": "Correct Answer: AD",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_454",
      "batch": "Batch 10",
      "type": "multiple",
      "prompt": "A company has an organization in AWS Organizations for its multi-account environment. A DevOps engineer is developing an AWS CodeArtifact based strategy for application package management across the organization. Each application team at the company has its own account in the organization. Each application team also has limited access to a centralized shared services account. Each application team needs full access to download, publish, and grant access to its own packages. Some common library packages that the application teams use must also be shared with the entire organization. Which combination of steps will meet these requirements with the LEAST administrative overhead? (Choose three.)",
      "options": [
        "Create a domain in each application team's account. Grant each application team's account full read access and write access to the application team's domain.",
        "Create a domain in the shared services account. Grant the organization read access and CreateRepository access.",
        "Create a repository in each application team’s account. Grant each application team’s account full read access and write access to its own repository.",
        "Create a repository in the shared services account. Grant the organization read access to the repository in the shared services account Set the repository as the upstream repository in each application team's repository.",
        "For teams that require shared packages, create resource-based policies that allow read access to the repository from other application teams' accounts.",
        "Set the other application teams' repositories as upstream repositories."
      ],
      "correctAnswers": [
        1,
        2
      ],
      "explanation": "Correct Answer: BC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_455",
      "batch": "Batch 10",
      "type": "multiple",
      "prompt": "A company recently migrated its application to an Amazon Elastic Kubernetes Service (Amazon EKS) cluster that uses Amazon EC2 instances. The company configured the application to automatically scale based on CPU utilization. The application produces memory errors when it experiences heavy loads. The application also does not scale out enough to handle the increased load. The company needs to collect and analyze memory metrics for the application over time. Which combination of steps will meet these requirements? (Choose three.)",
      "options": [
        "Attach the CloudWatchAgentServerPolicy managed IAM policy to the IAM instance profile that the cluster uses.",
        "Attach the CloudWatchAgentServerPolicy managed IAM policy to a service account role for the cluster.",
        "Collect performance metrics by deploying the unified Amazon CloudWatch agent to the existing EC2 instances in the cluster. Add the agent to the AMI for any new EC2 instances that are added to the cluster.",
        "Collect performance logs by deploying the AWS Distro for OpenTelemetry collector as a DaemonSet.",
        "Analyze the pod_memory_utilization Amazon CloudWatch metric in the ContainerInsights namespace by using the Service dimension.",
        "Analyze the node_memory_utilization Amazon CloudWatch metric in the ContainerInsights namespace by using the ClusterName dimension."
      ],
      "correctAnswers": [
        0,
        2
      ],
      "explanation": "Correct Answer: AC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_456",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company is migrating from its on-premises data center to AWS. The company currently uses a custom on-premises Cl/CD pipeline solution to build and package software. The company wants its software packages and dependent public repositories to be available in AWS CodeArtifact to facilitate the creation of application-specific pipelines. Which combination of steps should the company take to update the CI/CD pipeline solution and to configure CodeArtifact with the LEAST operational overhead? (Choose two.)",
      "options": [
        "Update the C1ICD pipeline to create a VM image that contains newly packaged software. Use AWS Import/Export to make the VM image available as an Amazon EC2 AMI. Launch the AMI with an attached IAM instance profile that allows CodeArtifact actions. Use AWS CLI commands to publish the packages to a CodeArtifact repository.",
        "Create an AWS Identity and Access Management Roles Anywhere trust anchor. Create an IAM role that allows CodeArtifact actions and that has a trust relationship on the trust anchor. Update the on-premises CI/CD pipeline to assume the new IAM role and to publish the packages to CodeArtifact.",
        "Create a new Amazon S3 bucket. Generate a presigned URL that allows the PutObject request. Update the on-premises CI/CD pipeline to use the presigned URL to publish the packages from the on-premises location to the S3 bucket. Create an AWS Lambda function that runs when packages are created in the bucket through a put command. Configure the Lambda function to publish the packages to CodeArtifact.",
        "For each public repository, create a CodeArutact repository that is configured with an external connection. Configure the dependent repositories as upstream public repositories.",
        "Create a Codeartitact repository that is configured with a set of external connections to the public repositories. Configure the external connections to be downstream of the repository."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_457",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company has a continuous integration pipeline where the company creates container images by using AWS CodeBuild. The created images are stored in Amazon Elastic Container Registry (Amazon ECR). Checking for and fixing the vulnerabilities in the images takes the company too much time. The company wants to identify the image vulnerabilities quickly and notify the security team of the vulnerabilities. Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)",
      "options": [
        "Activate Amazon Inspector enhanced scanning for Amazon ECR. Configure the enhanced scanning to use continuous scanning. Set up a topic in Amazon Simple Notification Service (Amazon SNS).",
        "Create an Amazon EventBridge rule for Amazon Inspector findings. Set an Amazon Simple Notification Service (Amazon SNS) topic as the rule target.",
        "Activate AWS Lambda enhanced scanning for Amazon ECR. Configure the enhanced scanning to use continuous scanning. Set up a topic in Amazon Simple Email Service (Amazon SES).",
        "Create a new AWS Lambda function. Invoke the new Lambda function when scan findings are detected.",
        "Activate default basic scanning for Amazon ECR for all container images. Configure the default basic scanning to use continuous scanning. Set up a topic in Amazon Simple Notification Service (Amazon SNS)."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_458",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company needs to update its order processing application to improve resilience and availability. The application requires a stateful database and uses a single-node Amazon RDS DB instance to store customer orders and transaction history. A DevOps engineer must make the database highly available. Which solution will meet this requirement?",
      "options": [
        "Migrate the database to Amazon DynamoDB global tables. Configure automatic failover between AWS Regions by using Amazon Route 53 health checks.",
        "Migrate the database to Amazon EC2 instances in multiple Availability Zones. Use Amazon Elastic Block Store (Amazon EBS) Multi-Attach to connect all the instances to a single EBS volume.",
        "Use the RDS DB instance as the source instance to create read replicas in multiple Availability Zones. Deploy an Application Load Balancer to distribute read traffic across the read replicas.",
        "Modify the RDS DB instance to be a Multi-AZ deployment. Verify automatic failover to the standby instance if the primary instance becomes unavailable."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_459",
      "batch": "Batch 10",
      "type": "multiple",
      "prompt": "A company has a web application that is hosted on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster. The EKS cluster runs on AWS Fargate that is available through an internet-facing Application Load Balancer. The application is experiencing stability issues that lead to longer response times. A DevOps engineer needs to configure observability in Amazon CloudWatch to troubleshoot the issue. The solution must provide only the minimum necessary permissions. Which combination of steps will meet these requirements? (Choose three.)",
      "options": [
        "Deploy the CloudWatch agent as a Kubernetes StatefulSet to the EKS cluster.",
        "Deploy the AWS Distro for OpenTelemetry Collector as a Kubernetes DaemonSet to the EKS cluster.",
        "Associate a Kubernetes service account with an IAM role by using IAM roles for service accounts in Amazon EKS. Use the CloudWatchAgentServerPolicy AWS managed policy.",
        "Associate a Kubernetes service account with an IAM role by using IAM roles for service accounts in Amazon EKS. Use the CloudWatchAgentAdminPolicy AWS managed policy.",
        "Configure an IAM OpenID Connect (OIDC) provider for the EKS cluster.",
        "Enable EKS control plane logging for the EKS cluster."
      ],
      "correctAnswers": [
        2,
        4
      ],
      "explanation": "Correct Answer: CE",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_460",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company has an organization in AWS Organizations with many Oils that contain many AWS accounts. The organization has a dedicated delegated administrator AWS account. The company needs the accounts in one OU to have server-side encryption enforced for all Amazon Elastic Block Store (Amazon EBS) volumes and Amazon Simple Queue Service (Amazon SQS) queues that are created or updated on an AWS CloudFormation stack. Which solution will enforce this policy before a CloudFormation stack operation in the accounts of this OU?",
      "options": [
        "Activate trusted access to CloudFormation StackSets. Create a CloudFormation Hook that enforces server-side encryption on EBS volumes and SQS queues. Deploy the Hook across the accounts in the OU by using StackSets.",
        "Set up AWS Config in all the accounts in the OU. Use AWS Systems Manager to deploy AWS Config rules that enforce server-side encryption for EBS volumes and SQS queues across the accounts in the OU.",
        "Write an SCP to deny the creation of EBS volumes and SQS queues unless the EBS volumes and SQS queues have server-side encryption. Attach the SCP to the OU.",
        "Create an AWS Lambda function in the delegated administrator account that checks whether server-side encryption is enforced for EBS volumes and SQS queues. Create an IAM role to provide the Lambda function access to the accounts in the OU."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_461",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company is developing an ecommerce application that has a backend that runs on Amazon EC2 instances. The application has a static frontend website that is hosted in an Amazon S3 bucket. The company uses a GitHub repository for version control and must automate builds and deployments whenever code is pushed to the main branch. The company must deploy changes to the frontend and backend independently of each other. Which solution will meet these requirements?",
      "options": [
        "Create a single AWS CodePipeline pipeline to use for the frontend and the backend. Specify the GitHub repository as the source. Configure two build stages that use AWS CodeBuild as the action provider to build the frontend components and backend components, respectively. Configure two deployment stages that use AWS CodeDeploy as the action provider to deploy the frontend and backend, respectively.",
        "Create a single AWS CodePipeline pipeline to use for the frontend and the backend. Specify the GitHub repository as the source. Configure two build stages that use AWS CodeBuild as the action provider to build the frontend components and backend components, respectively. Configure two deployment stages. For the backend stage, use AWS CodeDeploy as the action provider to deploy the backend to the EC2 instances. For the frontend stage, use Amazon S3 as the action provider to deploy the frontend to the S3 bucket.",
        "Create two AWS CodePipeline pipelines: one for the frontend and one for the backend. Specify the GitHub repository as the source. Configure a build stage that uses AWS CodeBuild as the action provider for each pipeline to build the frontend and the backend. Configure a deployment stage that uses AWS CodeDeploy as the action provider for each pipeline to deploy the frontend and the backend.",
        "Create two AWS CodePipeline pipelines: one for the frontend and one for the backend. Specify the GitHub repository as the source. Configure a build stage that uses AWS CodeBuild as the action provider for each pipeline to build the frontend and the backend. For the backend pipeline, use AWS CodeDeploy as the action provider to deploy the backend to the EC2 instances. For the frontend pipeline, use Amazon S3 as the action provider to deploy the frontend to the S3 bucket."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_462",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company operates a globally deployed product out of multiple AWS Regions. The company's DevOps team needs to use Amazon API Gateway to deploy an API to support the product. The API must be deployed redundantly. The deployment must provide independent availability from each company location. The deployment also must respond to a custom domain URL and must optimize performance for the API user requests. Which solution will meet these requirements?",
      "options": [
        "Deploy an API Gateway edge-optimized API endpoint in the us-east-1 Region. Create an API Gateway custom domain for the API. Create an Amazon Route 53 record set with a geoproximity routing policy for the API's custom domain. Increase the geographic bias to the maximum allowed value.",
        "Deploy an API Gateway regional API endpoint in the us-east-1 Region. Integrate the API Gateway API with a public Application Load Balancer (ALB). Create an AWS Global Accelerator standard accelerator. Associate the endpoint with the ALCreate an Amazon Route 53 alias record set that points the custom domain name to the DNS name that is assigned to the accelerator.",
        "Deploy an API Gateway regional API endpoint in every AWS Region where the company's product is deployed. Create an API Gateway custom domain in each Region for the deployed API Gateway API. Create an Amazon Route 53 record set that has a latency routing policy for every deployed API Gateway custom domain.",
        "Deploy an API Gateway edge-optimized API endpoint in the us-east-1 Region. Create an Amazon CloudFront distribution. Configure the CloudFront distribution with an alternate domain name. Specify the API Gateway Invoke URL as the origin domain. Create an Amazon Route 53 alias record set with a simple routing policy. Point the routing policy to the CloudFront distribution domain name."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_463",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company uses Amazon Elastic Container Registry (Amazon ECR) private registries to store container images. A DevOps team needs to ensure that the container images are regularly scanned for software package vulnerabilities. Which solution will meet this requirement?",
      "options": [
        "Enable enhanced scanning for private registries in Amazon ECR.",
        "Enable basic continuous scanning for private registries in Amazon ECR.",
        "Create an AWS System Manager Automation document to scan images by using the AWS SDK. Configure the Automation document to run when a new image is pushed to an ECR registry.",
        "Create an AWS Lambda function that scans all images in Amazon ECR by using the AWS SDK. Create an Amazon EventBridge rule to invoke the Lambda function each day."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_464",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company uses AWS Organizations to manage its AWS accounts. The organization root has a child OU that is named Department. The Department OU has a child OU that is named Engineering. The default FullAWSAccess policy is attached to the root, the Department OU, and the Engineering OU. The company has many AWS accounts in the Engineering OU. Each account has an administrative IAM role with the AdministratorAccess IAM policy attached. The default FullAWSAccessPolicy is also attached to each account. A DevOps engineer plans to remove the FullAWSAccess policy from the Department OU. The DevOps engineer will replace the policy with a policy that contains an Allow statement for all Amazon EC2 API operations. What will happen to the permissions of the administrative 1AM roles as a result of this change?",
      "options": [
        "All API actions on all resources will be allowed.",
        "All API actions on EC2 resources will be allowed. All other API actions will be denied.",
        "All API actions on all resources will be denied.",
        "All API actions on EC2 resources will be denied. All other API actions will be allowed."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_465",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A DevOps engineer uses a pipeline in AWS CodePipeline. The pipeline has a build action and a deploy action for a single-page web application that is delivered to an Amazon S3 bucket. Amazon CloudFront serves the web application. The build action creates an artifact for the web application. The DevOps engineer has created an AWS CloudFormation template that defines the S3 bucket and configures the S3 bucket to host the application. The DevOps engineer has configured a CloudFormation deploy action before the S3 action. The CloudFormation deploy action creates the S3 bucket. The DevOps engineer needs to configure the S3 deploy action to use the S3 bucket from the CloudFormation template. Which combination of steps will meet these requirements? (Choose two.)",
      "options": [
        "Add an output named BucketName to the CloudFormation template. Set the output's value to refer to the S3 bucket from the CloudFormation template. Configure the output value to export to an AWS::SSM::Parameter resource named Stackvariables.",
        "Add an output named BucketName to the CloudFormation template. Set the output's value to refer to the S3 bucket from the CloudFormation template. Set the CloudFormation action's namespace to StackVariables in the pipeline.",
        "Configure the output artifacts of the CloudFormation action in the pipeline to be an AWS Systems Manager Parameter Store parameter named StackVariables. Name the artifact BucketName.",
        "Configure the build artifact from the build action as the input to the CodePipeline S3 deploy action. Configure the deploy action to deploy to the S3 bucket by using the StackVariables.BucketName variable.",
        "Configure the build artifact from the build action and the AWS Systems Manager parameter as the inputs to the deploy action. Configure the deploy action to deploy to the S3 bucket by using the StackVariables.BucketName variable."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_466",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company has multiple development teams in separate business units that work in a single shared AWS account. All Amazon EC2 resources that users create in the account must include tags that specify which user created the resources. The tagging must occur within the first hour of resource creation. A DevOps engineer needs to add tags to new resources that include the ID of the user that created the resource and the appropriate cost center ID. The DevOps engineer configures an AWS Lambda function to use the cost center mappings to tag the resources. The DevOps engineer also sets up AWS CloudTrail in the shared AWS account. An Amazon S3 bucket stores the CloudTrail event logs. Which solution will meet the tagging requirements?",
      "options": [
        "Create an S3 event notification on the S3 bucket to invoke the Lambda function for s3:ObjectTagging:Put events. Enable bucket versioning on the S3 bucket.",
        "Enable server access logging on the S3 bucket. Create an S3 event notification on the S3 bucket for s3:ObjectTagging:* events.",
        "Enable AWS Config in the account. Configure the required-tags AWS managed rule to check and update the required tags.",
        "Create an Amazon EventBridge rule that uses Amazon EC2 as the event source. Configure the rule to match events that CloudTrail delivers. Configure the rule to target the Lambda function."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_467",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company produces builds for an open source project every day. The company hosts the open source project in a public code repository that the company supports. The company manually invokes a pipeline in AWS CodePipeline to build artifacts for the project. The company wants to make the build artifacts publicly available on a website that the company hosts in an Amazon S3 bucket. Which solution will meet these requirements with the LEAST operational overhead?",
      "options": [
        "Create an AWS CodeBuild project. Set the public repository as the source. Use a webhook to rebuild when the company pushes a code change. Configure the artifacts section of the project to use the S3 bucket as the destination. Set up an appropriate path to store build outputs in the bucket. Disable artifact encryption.",
        "Create an AWS CodeBuild project. Set the public repository as the source. Configure the artifacts section of the project to use the S3 bucket as the destination. Ensure that artifact encryption is enabled in the artifacts configuration. Configure an Amazon EventBridge rule to initiate the CodeBuild project on a daily schedule.",
        "Add a new stage to the end of the pipeline. Configure the stage to include an action to publish artifacts to the S3 bucket. Update the pipeline to run in response to pull requests to the public repository.",
        "Add a new stage to the end of the pipeline. Configure the stage to include an action to publish artifacts to the S3 bucket. Create an Amazon EventBridge rule to initiate the pipeline on a daily schedule."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_468",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company uses Amazon EC2 as its primary compute platform. A DevOps team wants to audit the company's EC2 instances to check whether any prohibited applications have been installed on the EC2 instances. Which solution will meet these requirements with the MOST operational efficiency?",
      "options": [
        "Configure AWS Systems Manager on each instance. Use AWS Systems Manager Inventory. Use Systems Manager resource data sync to synchronize and store findings in an Amazon S3 bucket. Create an AWS Lambda function that runs when new objects are added to the S3 bucket. Configure the Lambda function to identify prohibited applications.",
        "Configure AWS Systems Manager on each instance. Use Systems Manager Inventory Create AWS Config rules that monitor changes from Systems Manager Inventory to identify prohibited applications.",
        "Configure AWS Systems Manager on each instance. Use Systems Manager Inventory. Filter a trail in AWS CloudTrail for Systems Manager Inventory events to identify prohibited applications.",
        "Designate Amazon CloudWatch Logs as the log destination for all application instances. Run an automated script across all instances to create an inventory of installed applications. Configure the script to forward the results to CloudWatch Logs. Create a CloudWatch alarm that uses filter patterns to search log data to identify prohibited applications."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_469",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company uses the AWS Cloud Development Kit (AWS CDK) to define its application. The company uses a pipeline that consists of AWS CodePipeline and AWS CodeBuild to deploy the CDK application. The company wants to introduce unit tests to the pipeline to test various infrastructure components. The company wants to ensure that a deployment proceeds if no unit tests result in a failure. Which combination of steps will enforce the testing requirement in the pipeline? (Choose two.)",
      "options": [
        "Update the CodeBuild build phase commands to run the tests then to deploy the application. Set the OnFailure phase property to ABORT.",
        "Update the CodeBuild build phase commands to run the tests then to deploy the application. Add the --rollback true flag to the cdk deploy command.",
        "Update the CodeBuild build phase commands to run the tests then to deploy the application. Add the --require-approval any-change flag to the cdk deploy command.",
        "Create a test that uses the AWS CDK assertions module. Use the template.hasResourceProperties assertion to test that resources have the expected properties.",
        "Create a test that uses the cdk diff command. Configure the test to fail if any resources have changed."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_470",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company wants to decrease the time it takes to develop new features. The company uses AWS CodeBuild and AWS CodeDeploy to build and deploy its applications. The company uses AWS CodePipeline to deploy each microservice with its own CI/CD pipeline. The company needs more visibility into the average time between the release of new features and the average time to recover after a failed deployment. Which solution will provide this visibility with the LEAST configuration effort?",
      "options": [
        "Program an AWS Lambda function that creates Amazon CloudWatch custom metrics with information about successful runs and failed runs for each pipeline. Create an Amazon EventBridge rule to invoke the Lambda function every 5 minutes. Use the metrics to build a CloudWatch dashboard.",
        "Program an AWS Lambda function that creates Amazon CloudWatch custom metrics with information about successful runs and failed runs for each pipeline. Create an Amazon EventBridge rule to invoke the Lambda function after every successful run and after every failed run. Use the metrics to build a CloudWatch dashboard.",
        "Program an AWS Lambda function that writes information about successful runs and failed runs to Amazon DynamoDB. Create an Amazon EventBridge rule to invoke the Lambda function after every successful run and after every failed run. Build an Amazon QuickSight dashboard to show the information from DynamoDB.",
        "Program an AWS Lambda function that writes information about successful runs and failed runs to Amazon DynamoDB. Create an Amazon EventBridge rule to invoke the Lambda function every 5 minutes. Build an Amazon QuickSight dashboard to show the information from DynamoDB ."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_471",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A DevOps engineer needs to implement a solution to install antivirus software on all the Amazon EC2 instances in an AWS account. The EC2 instances run the most recent version of Amazon Linux. The solution must detect all instances and must use an AWS Systems Manager document to install the software if the software is not present. Which solution will meet these requirements?",
      "options": [
        "Create an association in Systems Manager State Manager. Target all the managed nodes. Include the software in the association. Configure the association to use the Systems Manager document.",
        "Set up AWS Config to record all the resources in the account. Create an AWS Config custom rule to determine if the software is installed on all the EC2 instances. Configure an automatic remediation action that uses the Systems Manager document for noncompliant EC2 instances.",
        "Activate Amazon EC2 scanning on Amazon Inspector to determine if the software is installed on all the EC2 instances. Associate the findings with the Systems Manager document.",
        "Create an Amazon EventBridge rule that uses AWS CloudTrail to detect the Runinstances API call. Configure inventory collection in Systems Manager Inventory to determine if the software is installed on the EC2 instances. Associate the Systems Manager inventory with the Systems Manager document."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_472",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company wants to use AWS Systems Manager documents to bootstrap physical laptops for developers. The bootstrap code is stored in GitHub. A DevOps engineer has already created a Systems Manager activation, installed the Systems Manager agent with the registration code, and installed an activation ID on all the laptops. Which set of steps should be taken next?",
      "options": [
        "Configure the Systems Manager document to use the AWS-RunShellScript command to copy the files from GitHub to Amazon S3, then use the aws-downloadContent plugin with a sourceType of S3.",
        "Configure the Systems Manager document to use the aws-configurePackage plugin with an install action and point to the Git repository.",
        "Configure the Systems Manager document to use the aws-downloadContent plugin with a sourceType of GitHub and sourceInfo with the repository details.",
        "Configure the Systems Manager document to use the aws:softwareInventory plugin and run the script from the Git repository."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_473",
      "batch": "Batch 10",
      "type": "multiple",
      "prompt": "A company's application has an API that retrieves workload metrics. The company needs to audit, analyze, and visualize these metrics from the application to detect issues at scale. Which combination of steps will meet these requirements? (Choose three.)",
      "options": [
        "Configure an Amazon EventBridge schedule to invoke an AWS Lambda function that calls the API to retrieve workload metrics. Store the workload metric data in an Amazon S3 bucket.",
        "Configure an Amazon EventBridge schedule to invoke an AWS Lambda function that calls the API to retrieve workload metrics. Store the workload metric data in an Amazon DynamoDB table that has a DynamoDB stream enabled.",
        "Create an AWS Glue crawler to catalog the workload metric data in the Amazon S3 bucket. Create views in Amazon Athena for the cataloged data.",
        "Connect an AWS Glue crawler to the Amazon DynamoDB stream to catalog the workload metric data. Create views in Amazon Athena for the cataloged data.",
        "Create Amazon QuickSight datasets from the Amazon Athena views. Create a QuickSight analysis to visualize the workload metric data as a dashboard.",
        "Create an Amazon CloudWatch dashboard that has custom widgets that invoke AWS Lambda functions. Configure the Lambda functions to query the workload metrics data from the Amazon Athena views."
      ],
      "correctAnswers": [
        0,
        2
      ],
      "explanation": "Correct Answer: AC",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_474",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company sends its AWS Network Firewall flow logs to an Amazon S3 bucket. The company then analyzes the flow logs by using Amazon Athena. The company needs to transform the flow logs and add additional data before the flow logs are delivered to the existing S3 bucket. Which solution will meet these requirements?",
      "options": [
        "Create an AWS Lambda function to transform the data and to write a new object to the existing S3 bucket. Configure the Lambda function with an S3 trigger for the existing S3 bucket. Specify all object create events for the event type. Acknowledge the recursive invocation.",
        "Enable Amazon EventBridge notifications on the existing S3 bucket. Create a custom EventBridge event bus. Create an EventBridge rule that is associated with the custom event bus. Configure the rule to react to all object create events for the existing S3 bucket and to invoke an AWS Step Functions workflow. Configure a Step Functions task to transform the data and to write the data into a new S3 bucket.",
        "Create an Amazon EventBridge rule that is associated with the default EventBridge event bus. Configure the rule to react to all object create events for the existing S3 bucket. Define a new S3 bucket as the target for the rule. Create an EventBridge input transformation to customize the event before passing the event to the rule target.",
        "Create an Amazon Kinesis Data Firehose delivery stream that is configured with an AWS Lambda transformer. Specify the existing S3 bucket as the destination. Change the Network Firewall logging destination from Amazon S3 to Kinesis Data Firehose"
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_475",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company has configured Amazon RDS storage autoscaling for its RDS DB instances. A DevOps team needs to visualize the autoscaling events on an Amazon CloudWatch dashboard. Which solution will meet this requirement?",
      "options": [
        "Create an Amazon EventBridge rule that reacts to RDS storage autoscaling events from RDS events. Create an AWS Lambda function that publishes a CloudWatch custom metric. Configure the EventBridge rule to invoke the Lambda function. Visualize the custom metric by using the CloudWatch dashboard.",
        "Create a trail by using AWS CloudTrail with management events configured. Configure the trail to send the management events to Amazon CloudWatch Logs. Create a metric filter in CloudWatch Logs to match the RDS storage autoscaling events. Visualize the metric filter by using the CloudWatch dashboard.",
        "Create an Amazon EventBridge rule that reacts to RDS storage autoscaling events from the RDS events. Create a CloudWatch alarm. Configure the EventBridge rule to change the status of the CloudWatch alarm. Visualize the alarm status by using the CloudWatch dashboard.",
        "Create a trail by using AWS CloudTrail with data events configured. Configure the trail to send the data events to Amazon CloudWatch Logs. Create a metric filter in CloudWatch Logs to match the RDS storage autoscaling events. Visualize the metric filter by using the CloudWatch dashboard."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_476",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company has a single AWS account that runs hundreds of Amazon EC2 instances in a single AWS Region. The company launches and terminates new EC2 instances every hour. The account includes existing EC2 instances that have been running for longer than a week. The company's security policy requires all running EC2 instances to have an EC2 instance profile attached. The company has created a default EC2 instance profile. The default EC2 instance profile must be attached to any EC2 instances that do not have a profile attached. Which solution will meet these requirements?",
      "options": [
        "Configure an Amazon EventBridge rule that matches the Amazon EC2 RunInstances API calls. Configure the rule to invoke an AWS Lambda function to attach the default instance profile to the EC2 instances.",
        "Configure AWS Config. Deploy an AWS Config ec2-instance-profile-attached managed rule. Configure an automatic remediation action that invokes an AWS Systems Manager Automation runbook to attach the default instance profile to the EC2 instances.",
        "Configure an Amazon EventBridge rule that matches the Amazon EC2 StartInstances API calls. Configure the rule to invoke an AWS Systems Manager Automation runbook to attach the default instance profile to the EC2 instances.",
        "Configure AWS Config. Deploy an AWS Config iam-role-managed-policy-check managed rule. Configure an automatic remediation action that invokes an AWS Lambda function to attach the default instance profile to the EC2 instances."
      ],
      "correctAnswers": [
        1
      ],
      "explanation": "Correct Answer: B",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_477",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company has an application that runs in a single AWS Region. The application runs on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster and connects to an Amazon Aurora MySQL cluster. The application is built in an AWS CodeBuild project. The container images are published to Amazon Elastic Container Registry (Amazon ECR). The company needs to replicate the state of the application for the container images and the database to a second Region. Which solution will meet these requirements in the MOST operationally efficient way?",
      "options": [
        "Turn on Amazon S3 Cross-Region Replication (CRR) on the bucket that holds the ECR container images. Deploy the application to an EKS cluster in the second Region by referencing the new S3 bucket object URL for the container image in a Kubernetes deployment file. Configure a cross-Region Aurora Replica in the second Region. Configure the new application deployment to use the endpoints for the cross-Region Aurora Replica.",
        "Create an Amazon EventBridge rule that reacts to image pushes to the ECR repository. Configure the EventBridge rule to invoke an AWS Lambda function to replicate the image to a new ECR repository in the second Region. Deploy the application to an EKS cluster in the second Region by referencing the new ECR repository in a Kubernetes deployment file. Configure a cross-Region Aurora Replica in the second Region. Configure the new application deployment to use the endpoints for the cross-Region Aurora Replica.",
        "Turn on Cross-Region Replication to replicate the ECR repository to the second Region. Deploy the application to an EKS cluster in the second Region by referencing the new ECR repository in a Kubernetes deployment file. Configure an Aurora global database with clusters in the initial Region and the second Region. Configure the new application deployment to use the endpoints for the second Region's cluster in the Aurora global database.",
        "Configure the CodeBuild project to also push the container image to an ECR repository in the second Region. Deploy the application to an EKS cluster in the second Region by referencing the new ECR repository in a Kubernetes deployment file. Configure an Aurora MySQL cluster in the second Region as the target for binary log replication from the Aurora MySQL cluster in the initial Region. Configure the new application deployment to use the endpoints for the second Region's cluster."
      ],
      "correctAnswers": [
        2
      ],
      "explanation": "Correct Answer: C",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_478",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company's DevOps team uses Node Package Manager (NPM) open source libraries to build applications. The DevOps team runs its application build process in an AWS CodeBuild project that downloads the NPM libraries from public NPM repositories. The company wants to host the NPM libraries in private NPM repositories. The company also needs to be able to run checks on new versions of the libraries before the DevOps team uses the libraries. Which solution will meet these requirements with the LEAST operational effort?",
      "options": [
        "Create an AWS CodeArtifact repository with an upstream repository named npm-store. Configure the application build process to use the CodeArtifact repository as the default source for NPM. Create an AWS CodePipeline pipeline to perform the required checks on package versions in the CodeArtifact repository. Set the package status to unlisted if a failure occurs.",
        "Enable Amazon S3 caching in the CodeBuild project configuration. Add a step in the buildspec.yaml config file to perform the required checks on the package versions in the cache.",
        "Create an AWS CodeCommit repository for each library. Clone the required NPM libraries to the appropriate CodeCommit repository. Modify the CodeBuild appspec.yaml config file to use the private CodeCommit repositories. Add a step to perform the required checks on the package versions.",
        "Create an AWS CodeCommit repository for each library. Clone the required NPM libraries to the appropriate CodeCommit repository. Modify the CodeBuild buildspec.yaml config file so that NPM uses the private CodeCommit repositories. Add an AWS CodePipeline pipeline that performs the required checks on the package versions for each new commit to the repositories. Configure the pipeline to revert to the most recent commit in the event of a failure."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_479",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company used a lift and shift strategy to migrate a workload to AWS. The company has an Auto Scaling group of Amazon EC2 instances. Each EC2 instance runs a web application, a database, and a Redis cache. Users are experiencing large variations in the web application's response times. Requests to the web application go to a single EC2 instance that is under significant load. The company wants to separate the application components to improve availability and performance. Which solution will meet these requirements?",
      "options": [
        "Create a Network Load Balancer and an Auto Scaling group for the web application. Migrate the database to an Amazon Aurora Serverless database. Create an Application Load Balancer and an Auto Scaling group for the Redis cache.",
        "Create an Application Load Balancer and an Auto Scaling group for the web application. Migrate the database to an Amazon Aurora database that has a Multi-AZ deployment. Create a Network Load Balancer and an Auto Scaling group in a single Availability Zone for the Redis cache.",
        "Create a Network Load Balancer and an Auto Scaling group for the web application. Migrate the database to an Amazon Aurora Serverless database. Create an Amazon ElastiCache (Redis OSS) cluster for the cache. Create a target group that has a DNS target type that contains the ElastiCache (Redis OSS) cluster hostname.",
        "Create an Application Load Balancer and an Auto Scaling group for the web application. Migrate the database to an Amazon Aurora database that has a Multi-AZ deployment. Create an Amazon ElastiCache (Redis OSS) cluster for the cache."
      ],
      "correctAnswers": [
        3
      ],
      "explanation": "Correct Answer: D",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_480",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A DevOps team manages a company's AWS account. The company wants to ensure that specific AWS resource configuration changes are automatically reverted. Which solution will meet this requirement?",
      "options": [
        "Use AWS Config rules to detect changes in resource configurations. Configure remediation action that uses AWS Systems Manager Automation documents to revert the configuration changes.",
        "Use Amazon CloudWatch alarms to monitor resource metrics. When an alarm is activated, use an Amazon Simple Notification Service (Amazon SNS) topic to notify an administrator to manually reverts the configuration changes.",
        "Use AWS CloudFormation to create a stack that deploys the necessary configuration changes. Update the stack when configuration changes need to be reverted.",
        "Use AWS Trusted Advisor to check for noncompliant configurations. Manually apply necessary changes based on Trusted Advisor recommendations."
      ],
      "correctAnswers": [
        0
      ],
      "explanation": "Correct Answer: A",
      "hint": "Select 1 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_481",
      "batch": "Batch 10",
      "type": "multiple",
      "prompt": "A company use an organization in AWS Organizations to manage multiple AWS accounts. The company has enabled all features enabled for the organization. The company configured the organization as a hierarchy of OUs under the root OU. The company recently registered all its OUs and enrolled all its AWS accounts in AWS Control Tower. The company needs to customize the AWS Control Tower managed AWS Config configuration recorder in each of the company's AWS accounts. The company needs to apply the customizations to both the existing AWS accounts and to any new AWS accounts that the company enrolls in AWS Control Tower in the future. Which combination of steps will meet these requirements? (Choose three.)",
      "options": [
        "Create a new AWS account. Create an AWS Lambda function in the new account to apply the customizations to the AWS Config configuration recorder in each AWS account in the organization.",
        "Create a new AWS account as an AWS Config delegated administrator. Create an AWS Lambda function in the delegated administrator account to apply the customizations to the AWS Config configuration recorder in the delegated administrator account.",
        "Configure an Amazon EventBridge rule in the AWS Control Tower management account to invoke an AWS Lambda function when the Organizations OU is registered or reregistered. Re-register the root Organizations OU.",
        "Configure the AWSControlTowerExecution IAM role in each AWS account in the organization to be assumable by an AWS Lambda function. Configure the Lambda function to assume the AWSControlTowerExecution IAM role.",
        "Create an IAM role in the AWS Control Tower management account that an AWS Lambda function can assume. Grant the IAM role permission to assume the AWSControlTowerExecution IAM role in any account in the organization. Configure the Lambda function to use the new IAM role.",
        "Configure an Amazon EventBridge rule in the AWS Control Tower management account to invoke an AWS Lambda function when an AWS account is updated or enrolled in AWS Control Tower or when the landing zone is updated. Re- register each Organizations OU in the organization ."
      ],
      "correctAnswers": [
        3,
        4
      ],
      "explanation": "Correct Answer: DE",
      "hint": "Select 2 option(s).",
      "points": 1
    },
    {
      "id": "aws_dop_482",
      "batch": "Batch 10",
      "type": "single",
      "prompt": "A company is developing a mobile app that requires extensive automated testing across multiple device types. The company is using AWS CodePipeline for its CI/CD pipeline. The company must implement a scalable testing solution that can handle increased test loads as the app grows. Which solution will meet these requirements with the LEAST management overhead?",
      "options": [
        "Integrate AWS Device Farm with the pipeline to run the tests and scale as needed.",
        "Deploy a fleet of Amazon EC2 instances with various mobile device emulators and auto scaling to run the tests. Create a custom AWS Lambda function to invoke EC2 test runs.",
        "Implement a containerized testing solution that uses Amazon Elastic Container Service (Amazon ECS) with auto scaling. Configure the pipeline to invoke an AWS Lambda function to start the test runs on the ECS cluster.",
        "Use AWS Lambda functions with custom runtime emulators to run the tests. Integrate the Lambda functions with the pipeline."
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
