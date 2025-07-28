// Cloud Quotient Quiz - Basic Setup
console.log('Quiz loaded!');

// Quiz State
let currentCategory = 'all';
let currentQuestionIndex = 0;
let selectedAnswer = null;
let quizTimer = null;
let startTime = null;
let timeLimit = 1200; // 20 minutes in seconds
let questions = [];
let userAnswers = [];

// Sample Questions Database
const questionBank = {
    compute: [
        // Easy Questions (5)
        {
            difficulty: 'easy',
            question: 'What does EC2 stand for?',
            options: [
                'Elastic Compute Cloud',
                'Enhanced Computing Center', 
                'Enterprise Cloud Computing',
                'Elastic Container Cloud'
            ],
            correct: 0
        },
        {
            difficulty: 'easy',
            question: 'Which AWS service lets you run code without managing servers?',
            options: [
                'EC2',
                'ECS',
                'Lambda',
                'Fargate'
            ],
            correct: 2
        },
        {
            difficulty: 'easy',
            question: 'What is the maximum execution time for a Lambda function?',
            options: [
                '5 minutes',
                '15 minutes',
                '30 minutes',
                '1 hour'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'Which service helps you manage Docker containers on AWS?',
            options: [
                'Lambda',
                'ECS',
                'S3',
                'RDS'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'What does Auto Scaling help you achieve?',
            options: [
                'Reduce costs only',
                'Increase performance only',
                'Automatically adjust capacity based on demand',
                'Monitor application logs'
            ],
            correct: 2
        },
        // Medium Questions (5)
        {
            difficulty: 'medium',
            question: 'Your startup needs to run a web application that can automatically scale based on traffic. Which AWS service combination would you choose?',
            options: [
                'EC2 with manual scaling',
                'EC2 Auto Scaling Groups with Application Load Balancer',
                'Lambda with API Gateway',
                'ECS with manual container management'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'You need to run a batch job that processes files uploaded to S3. What is the most cost-effective approach?',
            options: [
                'Keep EC2 instances running 24/7',
                'Use Lambda triggered by S3 events',
                'Use ECS with always-on tasks',
                'Use Fargate with scheduled tasks'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'Your application needs consistent performance and you want to avoid the "noisy neighbor" problem. Which EC2 option should you choose?',
            options: [
                'Shared tenancy instances',
                'Spot instances',
                'Dedicated instances',
                'Reserved instances'
            ],
            correct: 2
        },
        {
            difficulty: 'medium',
            question: 'You want to run containers without managing the underlying infrastructure. Which service should you use?',
            options: [
                'ECS with EC2 launch type',
                'ECS with Fargate launch type',
                'EKS with worker nodes',
                'Lambda containers'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'Your Lambda function needs to access a VPC resource. What will happen to the cold start time?',
            options: [
                'It will decrease significantly',
                'It will stay the same',
                'It will increase due to ENI creation',
                'Lambda cannot access VPC resources'
            ],
            correct: 2
        },
        // Hard Questions (5)
        {
            difficulty: 'hard',
            question: 'You need to process 10TB of data every night with a deadline of 6 hours. The processing is CPU-intensive and can be parallelized. What is the most cost-effective solution?',
            options: [
                'Use a single large EC2 instance running 24/7',
                'Use Spot Fleet with multiple instance types and Auto Scaling',
                'Use Lambda functions with 15-minute timeout',
                'Use ECS Fargate with reserved capacity'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'Your microservices architecture has 50 services that need to communicate securely. You want service discovery and load balancing. What AWS solution would you implement?',
            options: [
                'ECS with Application Load Balancer and Route 53',
                'EKS with AWS Load Balancer Controller and Service Mesh',
                'Lambda with API Gateway for all services',
                'EC2 with manual load balancer configuration'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'You need to run a machine learning training job that requires 8 GPUs and might take 72 hours. The job can be interrupted and resumed. What is the most cost-effective approach?',
            options: [
                'On-Demand P3 instances with checkpointing',
                'Spot P3 instances with checkpointing and automatic restart',
                'Reserved P3 instances for guaranteed availability',
                'SageMaker training jobs with managed spot training'
            ],
            correct: 3
        },
        {
            difficulty: 'hard',
            question: 'Your application has unpredictable traffic spikes that can increase load by 1000x in seconds. You need sub-second response times. What architecture would you design?',
            options: [
                'Auto Scaling Groups with predictive scaling',
                'Lambda with provisioned concurrency and API Gateway caching',
                'ECS Fargate with Application Auto Scaling',
                'CloudFront with Lambda@Edge for all processing'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'You are migrating a legacy monolith to containers. The application has stateful components and requires persistent storage. What is the best approach?',
            options: [
                'Use ECS with EBS volumes attached to tasks',
                'Use EKS with EBS CSI driver and StatefulSets',
                'Use Fargate with EFS for all persistent data',
                'Keep the monolith on EC2 with EBS'
            ],
            correct: 1
        }
    ],
    storage: [
        // Easy Questions (5)
        {
            difficulty: 'easy',
            question: 'Which AWS service is best for storing website images that need to be accessed globally?',
            options: [
                'EBS',
                'EFS', 
                'S3',
                'Glacier'
            ],
            correct: 2
        },
        {
            difficulty: 'easy',
            question: 'What does S3 stand for?',
            options: [
                'Simple Storage Service',
                'Secure Storage System',
                'Scalable Storage Solution',
                'Standard Storage Service'
            ],
            correct: 0
        },
        {
            difficulty: 'easy',
            question: 'Which storage service provides block-level storage for EC2 instances?',
            options: [
                'S3',
                'EFS',
                'EBS',
                'Glacier'
            ],
            correct: 2
        },
        {
            difficulty: 'easy',
            question: 'What is the cheapest AWS storage option for long-term archival?',
            options: [
                'S3 Standard',
                'S3 Glacier',
                'EBS',
                'EFS'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'Which service allows multiple EC2 instances to access the same file system simultaneously?',
            options: [
                'EBS',
                'S3',
                'EFS',
                'Instance Store'
            ],
            correct: 2
        },
        // Medium Questions (5)
        {
            difficulty: 'medium',
            question: 'Your application needs shared file storage that multiple EC2 instances can access simultaneously. Which service should you use?',
            options: [
                'S3',
                'EBS',
                'EFS',
                'Instance Store'
            ],
            correct: 2
        },
        {
            difficulty: 'medium',
            question: 'You need to store 100TB of data that is accessed once per month. What is the most cost-effective S3 storage class?',
            options: [
                'S3 Standard',
                'S3 Standard-IA',
                'S3 Glacier',
                'S3 Glacier Deep Archive'
            ],
            correct: 2
        },
        {
            difficulty: 'medium',
            question: 'Your database requires consistent IOPS performance. Which EBS volume type should you choose?',
            options: [
                'General Purpose SSD (gp2)',
                'Provisioned IOPS SSD (io1)',
                'Throughput Optimized HDD (st1)',
                'Cold HDD (sc1)'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'You want to automatically move S3 objects to cheaper storage classes over time. What should you use?',
            options: [
                'S3 Transfer Acceleration',
                'S3 Cross-Region Replication',
                'S3 Lifecycle Policies',
                'S3 Event Notifications'
            ],
            correct: 2
        },
        {
            difficulty: 'medium',
            question: 'Your application needs to store files temporarily during processing and then delete them. Which storage is most appropriate?',
            options: [
                'S3 Standard',
                'EBS volumes',
                'Instance Store',
                'EFS'
            ],
            correct: 2
        },
        // Hard Questions (5)
        {
            difficulty: 'hard',
            question: 'You need to migrate 500TB of data to AWS with a 1Gbps internet connection. The migration must complete within 2 weeks. What is the best approach?',
            options: [
                'Direct upload to S3 over internet',
                'AWS Snowball Edge devices',
                'AWS DataSync over Direct Connect',
                'AWS Storage Gateway'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'Your application requires 50,000 IOPS with sub-millisecond latency. The data must persist beyond instance termination. What storage solution would you use?',
            options: [
                'EBS Provisioned IOPS SSD (io1) with 50,000 IOPS',
                'Instance Store with RAID 0 configuration',
                'EBS io2 Block Express with Multi-Attach',
                'EFS with Max I/O performance mode'
            ],
            correct: 2
        },
        {
            difficulty: 'hard',
            question: 'You need to implement a disaster recovery solution where data is replicated across regions with RPO of 15 minutes. What architecture would you design?',
            options: [
                'S3 Cross-Region Replication with lifecycle policies',
                'EBS snapshots copied to another region every 15 minutes',
                'Database replication with S3 Cross-Region Replication for files',
                'AWS Backup with cross-region backup copying'
            ],
            correct: 2
        },
        {
            difficulty: 'hard',
            question: 'Your big data application processes 10PB of data stored in S3. You need to optimize costs while maintaining query performance. What strategy would you implement?',
            options: [
                'Use S3 Intelligent-Tiering for all data',
                'Partition data by date, use S3 Standard for recent data and Glacier for older data',
                'Store everything in S3 Glacier Deep Archive',
                'Use S3 Standard with S3 Transfer Acceleration'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'You are building a content delivery system that serves 1 million requests per second globally. Files range from 1KB to 1GB. What storage and delivery architecture would you design?',
            options: [
                'S3 with CloudFront and Lambda@Edge for dynamic content',
                'EFS with multiple CloudFront distributions',
                'S3 with Transfer Acceleration and multiple regions',
                'EBS with EC2 instances in multiple regions'
            ],
            correct: 0
        }
    ],
    networking: [
        // Easy Questions (5)
        {
            difficulty: 'easy',
            question: 'What does VPC stand for?',
            options: [
                'Virtual Private Cloud',
                'Virtual Public Cloud',
                'Virtual Protected Cloud',
                'Virtual Processing Cloud'
            ],
            correct: 0
        },
        {
            difficulty: 'easy',
            question: 'Which AWS service distributes content globally to reduce latency?',
            options: [
                'Route 53',
                'CloudFront',
                'Direct Connect',
                'VPC'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'What is the purpose of an Internet Gateway in a VPC?',
            options: [
                'To connect to other VPCs',
                'To provide internet access to VPC resources',
                'To monitor network traffic',
                'To encrypt network communications'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'Which service provides DNS resolution for your domain names?',
            options: [
                'CloudFront',
                'Route 53',
                'Direct Connect',
                'VPC'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'What allows private subnet resources to access the internet for updates?',
            options: [
                'Internet Gateway',
                'NAT Gateway',
                'VPC Peering',
                'Direct Connect'
            ],
            correct: 1
        },
        // Medium Questions (5)
        {
            difficulty: 'medium',
            question: 'Your web application has users worldwide. You want to route traffic to the closest AWS region. Which Route 53 routing policy should you use?',
            options: [
                'Simple routing',
                'Weighted routing',
                'Latency-based routing',
                'Failover routing'
            ],
            correct: 2
        },
        {
            difficulty: 'medium',
            question: 'You need to connect your on-premises network to AWS with consistent network performance. Which service should you use?',
            options: [
                'VPN Connection',
                'Direct Connect',
                'Internet Gateway',
                'VPC Peering'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'Your application load balancer needs to distribute traffic based on the request path. Which type of routing should you configure?',
            options: [
                'Round robin',
                'Least connections',
                'Path-based routing',
                'IP hash'
            ],
            correct: 2
        },
        {
            difficulty: 'medium',
            question: 'You want to allow communication between two VPCs in different regions. What should you set up?',
            options: [
                'VPC Peering',
                'Internet Gateway',
                'NAT Gateway',
                'Direct Connect'
            ],
            correct: 0
        },
        {
            difficulty: 'medium',
            question: 'Your application needs to handle SSL termination and distribute traffic to multiple EC2 instances. Which load balancer type is most appropriate?',
            options: [
                'Classic Load Balancer',
                'Application Load Balancer',
                'Network Load Balancer',
                'Gateway Load Balancer'
            ],
            correct: 1
        },
        // Hard Questions (5)
        {
            difficulty: 'hard',
            question: 'You are designing a multi-tier application with web, app, and database layers. Each layer should only communicate with adjacent layers. How would you design the network security?',
            options: [
                'Use one security group for all layers',
                'Use NACLs to control traffic between subnets and security groups for instance-level control',
                'Use only NACLs for all security',
                'Use only security groups with broad rules'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'Your global application needs to route traffic to healthy endpoints across multiple regions with automatic failover. What architecture would you implement?',
            options: [
                'Route 53 health checks with failover routing to ALBs in each region',
                'CloudFront with multiple origins and health checks',
                'Global Load Balancer with cross-region targets',
                'Multiple ALBs with manual DNS updates'
            ],
            correct: 0
        },
        {
            difficulty: 'hard',
            question: 'You need to inspect and filter all traffic entering your VPC for security threats. The solution must not impact performance. What would you implement?',
            options: [
                'WAF on all Application Load Balancers',
                'Gateway Load Balancer with third-party security appliances',
                'Security groups with detailed rules',
                'NACLs with comprehensive filtering rules'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'Your microservices architecture has 100 services that need service-to-service communication with encryption and observability. What networking solution would you implement?',
            options: [
                'Application Load Balancers for each service',
                'AWS App Mesh with Envoy proxies',
                'API Gateway for all service communication',
                'Direct service-to-service calls with TLS'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'You need to migrate a legacy application that uses multicast traffic to AWS. The application cannot be modified. What solution would you implement?',
            options: [
                'Use Elastic Network Interfaces with multicast support',
                'Transit Gateway with multicast support',
                'Implement application-level message distribution',
                'Use CloudFront for content distribution'
            ],
            correct: 1
        }
    ],
    database: [
        // Easy Questions (5)
        {
            difficulty: 'easy',
            question: 'Which AWS service provides a managed relational database?',
            options: [
                'DynamoDB',
                'RDS',
                'S3',
                'ElastiCache'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'What type of database is DynamoDB?',
            options: [
                'Relational database',
                'NoSQL database',
                'Graph database',
                'Time-series database'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'Which service provides in-memory caching for applications?',
            options: [
                'RDS',
                'DynamoDB',
                'ElastiCache',
                'Redshift'
            ],
            correct: 2
        },
        {
            difficulty: 'easy',
            question: 'What is Amazon Redshift primarily used for?',
            options: [
                'Real-time transactions',
                'Data warehousing and analytics',
                'File storage',
                'In-memory caching'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'Which RDS feature automatically creates backups of your database?',
            options: [
                'Multi-AZ deployment',
                'Read replicas',
                'Automated backups',
                'Parameter groups'
            ],
            correct: 2
        },
        // Medium Questions (5)
        {
            difficulty: 'medium',
            question: 'Your application needs a database that can handle millions of requests per second with single-digit millisecond latency. Which service should you choose?',
            options: [
                'RDS MySQL with read replicas',
                'DynamoDB with on-demand scaling',
                'Redshift with columnar storage',
                'ElastiCache Redis cluster'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'You need to ensure your RDS database can survive an Availability Zone failure with minimal downtime. What should you enable?',
            options: [
                'Read replicas',
                'Multi-AZ deployment',
                'Automated backups',
                'Performance Insights'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'Your analytics team needs to run complex queries on 100TB of historical data without impacting your production database. What solution would you implement?',
            options: [
                'Create read replicas of your RDS database',
                'Use DynamoDB with global secondary indexes',
                'Set up Amazon Redshift data warehouse',
                'Use ElastiCache for query caching'
            ],
            correct: 2
        },
        {
            difficulty: 'medium',
            question: 'Your application has unpredictable traffic patterns and you want to pay only for database resources you use. Which DynamoDB billing mode should you choose?',
            options: [
                'Provisioned capacity mode',
                'On-demand capacity mode',
                'Reserved capacity mode',
                'Spot capacity mode'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'You need to migrate a 10TB MySQL database to AWS with minimal downtime. What service would you use?',
            options: [
                'AWS Database Migration Service (DMS)',
                'AWS DataSync',
                'AWS Snowball',
                'Manual mysqldump and restore'
            ],
            correct: 0
        },
        // Hard Questions (5)
        {
            difficulty: 'hard',
            question: 'Your e-commerce application experiences 10x traffic spikes during sales events. You need a database solution that can automatically scale and maintain consistent performance. What architecture would you design?',
            options: [
                'RDS with read replicas and connection pooling',
                'DynamoDB with auto-scaling and DAX caching layer',
                'Redshift with elastic resize capability',
                'ElastiCache cluster with multiple nodes'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'You are building a global application that needs to replicate data across 5 regions with eventual consistency and automatic failover. What database solution would you implement?',
            options: [
                'RDS with cross-region read replicas',
                'DynamoDB Global Tables',
                'Redshift with cross-region snapshots',
                'ElastiCache with Redis Global Datastore'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'Your financial application requires ACID transactions across multiple tables with strict consistency. The database must handle 50,000 transactions per second. What solution would you choose?',
            options: [
                'DynamoDB with transactions API',
                'RDS Aurora with read replicas',
                'Amazon Aurora Serverless v2 with auto-scaling',
                'RDS PostgreSQL with Multi-AZ and connection pooling'
            ],
            correct: 2
        },
        {
            difficulty: 'hard',
            question: 'You need to implement a real-time analytics dashboard that processes streaming data and serves queries with sub-second latency. The solution must handle 1TB of new data daily. What architecture would you design?',
            options: [
                'Kinesis Data Streams → Lambda → DynamoDB → API Gateway',
                'Kinesis Data Firehose → S3 → Redshift → QuickSight',
                'Kinesis Analytics → ElastiCache → Lambda → CloudFront',
                'MSK → Kinesis Analytics → Timestream → API Gateway'
            ],
            correct: 3
        },
        {
            difficulty: 'hard',
            question: 'Your application stores user sessions, product catalogs, and real-time recommendations. Each has different access patterns and consistency requirements. What multi-database strategy would you implement?',
            options: [
                'Use RDS for everything with different schemas',
                'ElastiCache for sessions, RDS for catalog, DynamoDB for recommendations',
                'DynamoDB for everything with different table designs',
                'Redshift for analytics, RDS for transactional data'
            ],
            correct: 1
        }
    ],
    security: [
        {
            difficulty: 'easy',
            question: 'Which AWS service manages user permissions and access to AWS resources?',
            options: [
                'CloudWatch',
                'IAM',
                'VPC',
                'Route 53'
            ],
            correct: 1
        },
        // Easy Questions (4 more)
        {
            difficulty: 'easy',
            question: 'What does IAM stand for?',
            options: [
                'Internet Access Management',
                'Identity and Access Management',
                'Internal Application Management',
                'Infrastructure Access Management'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'Which AWS service helps protect your web applications from common web exploits?',
            options: [
                'CloudWatch',
                'WAF',
                'Shield',
                'GuardDuty'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'What is the AWS service that provides DDoS protection?',
            options: [
                'WAF',
                'Shield',
                'GuardDuty',
                'Inspector'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'Which service helps you manage encryption keys in AWS?',
            options: [
                'IAM',
                'KMS',
                'Secrets Manager',
                'Certificate Manager'
            ],
            correct: 1
        },
        // Medium Questions (5)
        {
            difficulty: 'medium',
            question: 'Your application needs to access AWS services without embedding credentials in code. What is the best practice?',
            options: [
                'Store credentials in environment variables',
                'Use IAM roles for EC2 instances',
                'Hardcode credentials in configuration files',
                'Use root account credentials'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'You want to ensure that all data stored in S3 is encrypted at rest. What is the most cost-effective approach?',
            options: [
                'Use client-side encryption before uploading',
                'Enable S3 default encryption with SSE-S3',
                'Use AWS KMS for all objects',
                'Encrypt data in your application before storing'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'Your security team needs to monitor and detect suspicious activities across your AWS account. Which service should you implement?',
            options: [
                'CloudWatch Logs',
                'AWS Config',
                'GuardDuty',
                'CloudTrail'
            ],
            correct: 2
        },
        {
            difficulty: 'medium',
            question: 'You need to rotate database passwords automatically without application downtime. What service should you use?',
            options: [
                'IAM password policies',
                'AWS Secrets Manager',
                'Parameter Store',
                'KMS key rotation'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'Your compliance team requires all API calls to be logged and monitored. Which service provides this capability?',
            options: [
                'CloudWatch',
                'CloudTrail',
                'Config',
                'Inspector'
            ],
            correct: 1
        },
        // Hard Questions (5)
        {
            difficulty: 'hard',
            question: 'You are implementing a zero-trust security model for a multi-account organization. Users need temporary access to resources across accounts. What architecture would you design?',
            options: [
                'Shared IAM users across all accounts',
                'AWS SSO with permission sets and cross-account roles',
                'Individual IAM users in each account',
                'Root account sharing with MFA'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'Your financial application requires end-to-end encryption with customer-managed keys that must never leave your premises. What solution would you implement?',
            options: [
                'AWS KMS with customer-managed keys',
                'AWS CloudHSM with client-side encryption',
                'S3 server-side encryption with SSE-KMS',
                'Application-level encryption with AWS Secrets Manager'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'You need to implement defense-in-depth for a web application with automatic threat response. What comprehensive security architecture would you design?',
            options: [
                'WAF + Shield + GuardDuty + Security Hub + Lambda for automated response',
                'Only WAF with custom rules',
                'CloudFront with security headers',
                'VPC security groups and NACLs only'
            ],
            correct: 0
        },
        {
            difficulty: 'hard',
            question: 'Your organization needs to ensure compliance with SOC 2 and PCI DSS across 50 AWS accounts. What governance strategy would you implement?',
            options: [
                'Manual auditing of each account monthly',
                'AWS Config Rules + Security Hub + Organizations SCPs + AWS Audit Manager',
                'CloudTrail logging in each account',
                'Third-party compliance tools only'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'You are designing a secure CI/CD pipeline that deploys to production. The pipeline must prevent privilege escalation and ensure code integrity. What security controls would you implement?',
            options: [
                'Use admin roles for all pipeline operations',
                'Least-privilege IAM roles + CodeSigning + Secrets Manager + VPC endpoints',
                'Store all credentials in the pipeline configuration',
                'Use the same role for development and production'
            ],
            correct: 1
        }
    ],
    ml: [
        {
            difficulty: 'easy',
            question: 'Which AWS service would you use to add image recognition capabilities to your mobile app?',
            options: [
                'SageMaker',
                'Rekognition',
                'Comprehend',
                'Textract'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'Your e-commerce company wants to analyze customer reviews to understand sentiment. Which AWS service is best suited for this task?',
            options: [
                'Rekognition for text analysis',
                'Comprehend for natural language processing',
                'Textract for document analysis',
                'Polly for text-to-speech'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'You need to build a recommendation engine that processes 100GB of user behavior data daily and serves real-time recommendations to millions of users. What architecture would you choose?',
            options: [
                'SageMaker training + Lambda for inference',
                'SageMaker training + SageMaker endpoints with auto-scaling',
                'EMR for batch processing + DynamoDB for serving',
                'Kinesis Analytics + ElastiCache for real-time processing'
            ],
            correct: 1
        },
        // Easy Questions (4 more)
        {
            difficulty: 'easy',
            question: 'Which AWS service converts text to lifelike speech?',
            options: [
                'Comprehend',
                'Textract',
                'Polly',
                'Transcribe'
            ],
            correct: 2
        },
        {
            difficulty: 'easy',
            question: 'What is Amazon Textract primarily used for?',
            options: [
                'Speech recognition',
                'Document analysis and text extraction',
                'Image classification',
                'Language translation'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'Which service would you use to convert speech to text?',
            options: [
                'Polly',
                'Transcribe',
                'Comprehend',
                'Rekognition'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'What is Amazon Translate used for?',
            options: [
                'Converting speech to text',
                'Analyzing document sentiment',
                'Language translation',
                'Image recognition'
            ],
            correct: 2
        },
        // Medium Questions (4 more)
        {
            difficulty: 'medium',
            question: 'Your healthcare application needs to extract medical information from patient forms and prescriptions. Which combination of services would you use?',
            options: [
                'Rekognition + Comprehend',
                'Textract + Comprehend Medical',
                'Polly + Transcribe',
                'SageMaker + Lambda'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'You want to build a chatbot that can understand user intent and respond appropriately. Which AWS service provides natural language understanding capabilities?',
            options: [
                'Comprehend',
                'Lex',
                'Polly',
                'Transcribe'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'Your video streaming platform needs to automatically generate subtitles and detect inappropriate content. What services would you combine?',
            options: [
                'Transcribe + Rekognition Video',
                'Polly + Comprehend',
                'Textract + Translate',
                'SageMaker + Lambda'
            ],
            correct: 0
        },
        {
            difficulty: 'medium',
            question: 'You need to train a custom machine learning model using your own dataset. Which service provides the most flexibility for model development?',
            options: [
                'Rekognition Custom Labels',
                'Comprehend Custom',
                'SageMaker',
                'Lex'
            ],
            correct: 2
        },
        // Hard Questions (4 more)
        {
            difficulty: 'hard',
            question: 'You are building a fraud detection system that processes 1 million transactions per minute. The model needs to be retrained daily with new fraud patterns. What architecture would you design?',
            options: [
                'SageMaker training jobs + Lambda inference',
                'SageMaker Pipelines + real-time endpoints + auto-scaling',
                'Rekognition + DynamoDB for pattern storage',
                'Comprehend + Kinesis for stream processing'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'Your autonomous vehicle company needs to process video streams in real-time for object detection with sub-100ms latency. What solution would you implement?',
            options: [
                'SageMaker batch transform jobs',
                'Rekognition Video with Kinesis Video Streams',
                'SageMaker multi-model endpoints with GPU instances',
                'Lambda with pre-trained models'
            ],
            correct: 2
        },
        {
            difficulty: 'hard',
            question: 'You need to implement A/B testing for multiple ML models serving millions of users. The system must automatically route traffic and measure model performance. What architecture would you design?',
            options: [
                'Multiple SageMaker endpoints with manual traffic splitting',
                'SageMaker multi-model endpoints with CloudWatch metrics',
                'SageMaker multi-variant endpoints with automatic scaling and CloudWatch',
                'Lambda functions with different model versions'
            ],
            correct: 2
        },
        {
            difficulty: 'hard',
            question: 'Your global e-commerce platform needs personalized product recommendations that adapt in real-time based on user behavior across multiple regions. What comprehensive ML architecture would you implement?',
            options: [
                'Single SageMaker model deployed globally',
                'Amazon Personalize + Kinesis Data Streams + Lambda + DynamoDB Global Tables',
                'Rekognition for product images + Comprehend for reviews',
                'SageMaker training jobs running in each region separately'
            ],
            correct: 1
        }
    ],
    serverless: [
        {
            difficulty: 'medium',
            question: 'You need to build an API that processes image uploads and resizes them. Which serverless combination would work best?',
            options: [
                'EC2 + RDS',
                'Lambda + S3 + API Gateway',
                'ECS + ELB',
                'Fargate + CloudFront'
            ],
            correct: 1
        },
        // Easy Questions (5)
        {
            difficulty: 'easy',
            question: 'What is the maximum execution time for a Lambda function?',
            options: [
                '5 minutes',
                '15 minutes',
                '30 minutes',
                '1 hour'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'Which service allows you to create REST APIs without managing servers?',
            options: [
                'EC2',
                'API Gateway',
                'ELB',
                'CloudFront'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'What triggers a Lambda function when a file is uploaded to S3?',
            options: [
                'CloudWatch Events',
                'S3 Event Notifications',
                'SNS Topics',
                'SQS Messages'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'Which AWS service provides serverless workflow orchestration?',
            options: [
                'Lambda',
                'Step Functions',
                'SQS',
                'EventBridge'
            ],
            correct: 1
        },
        {
            difficulty: 'easy',
            question: 'What is AWS Fargate?',
            options: [
                'A container registry',
                'Serverless compute for containers',
                'A load balancer',
                'A monitoring service'
            ],
            correct: 1
        },
        // Medium Questions (4 more)
        {
            difficulty: 'medium',
            question: 'Your serverless application needs to process messages from a queue with guaranteed delivery and dead letter handling. Which combination would you use?',
            options: [
                'Lambda + SNS',
                'Lambda + SQS + DLQ',
                'API Gateway + Lambda',
                'Step Functions + EventBridge'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'You need to build a serverless data pipeline that processes files, transforms data, and loads it into a data warehouse. What architecture would you design?',
            options: [
                'Lambda + S3 + Redshift',
                'S3 + Lambda + Glue + Redshift',
                'API Gateway + Lambda + RDS',
                'EventBridge + Lambda + DynamoDB'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'Your Lambda function needs to maintain state between invocations and share data with other functions. What is the best approach?',
            options: [
                'Use global variables in Lambda',
                'Store state in DynamoDB or ElastiCache',
                'Use Lambda layers for shared data',
                'Keep connections open between invocations'
            ],
            correct: 1
        },
        {
            difficulty: 'medium',
            question: 'You want to implement serverless authentication for your web application. Which combination provides the most comprehensive solution?',
            options: [
                'Lambda + JWT tokens',
                'API Gateway + Lambda Authorizers',
                'Cognito + API Gateway + Lambda',
                'IAM roles + API Gateway'
            ],
            correct: 2
        },
        // Hard Questions (5)
        {
            difficulty: 'hard',
            question: 'You are building a serverless e-commerce platform that must handle 100,000 concurrent users during flash sales. The system needs to process orders, update inventory, and send notifications. What architecture would you design?',
            options: [
                'API Gateway + Lambda + RDS with connection pooling',
                'API Gateway + Lambda + DynamoDB + SQS + SNS with reserved concurrency',
                'CloudFront + Lambda@Edge + DynamoDB',
                'Application Load Balancer + Fargate + RDS'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'Your serverless application processes financial transactions and must guarantee exactly-once processing with audit trails. What architecture ensures data consistency?',
            options: [
                'Lambda + DynamoDB with eventual consistency',
                'Step Functions + Lambda + DynamoDB Transactions + CloudTrail',
                'API Gateway + Lambda + RDS with auto-commit',
                'EventBridge + Lambda + S3 for logging'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'You need to implement a serverless microservices architecture with service discovery, circuit breakers, and distributed tracing. What comprehensive solution would you design?',
            options: [
                'Lambda functions with hard-coded endpoints',
                'API Gateway + Lambda + X-Ray + EventBridge + Parameter Store',
                'Fargate + Service Discovery + Load Balancers',
                'Lambda + SNS + SQS without monitoring'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'Your serverless application needs to process streaming data from IoT devices, detect anomalies in real-time, and trigger automated responses. The system must handle 1 million events per second. What architecture would you implement?',
            options: [
                'API Gateway + Lambda + DynamoDB',
                'Kinesis Data Streams + Kinesis Analytics + Lambda + SNS',
                'SQS + Lambda + CloudWatch',
                'S3 + Lambda + Athena'
            ],
            correct: 1
        },
        {
            difficulty: 'hard',
            question: 'You are migrating a monolithic application to serverless with complex business workflows, long-running processes, and error handling. The system must maintain ACID properties across multiple services. What architecture would you design?',
            options: [
                'Break into individual Lambda functions with SQS',
                'Step Functions with Express Workflows + Lambda + DynamoDB Transactions',
                'Single large Lambda function with all logic',
                'Fargate containers with shared database'
            ],
            correct: 1
        }
    ]
};

// Initialize Quiz
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    showSetupScreen();
});

function setupEventListeners() {
    // Category selection
    document.querySelectorAll('.setup-category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectCategory(this.dataset.category);
        });
    });
}

function showSetupScreen() {
    console.log('Showing setup screen');
    document.getElementById('setupSection').style.display = 'block';
    document.getElementById('instructionsSection').style.display = 'none';
    document.getElementById('gameSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
}

function selectCategory(category) {
    console.log('Selected category:', category);
    currentCategory = category;
    
    // Prepare questions for this category
    if (category === 'all') {
        questions = getAllQuestions();
        timeLimit = 2100; // 35 minutes for comprehensive
    } else {
        questions = questionBank[category] || [];
        timeLimit = 1200; // 20 minutes for category-specific
    }
    
    console.log('Questions loaded:', questions.length);
    showInstructionsScreen();
}

function showInstructionsScreen() {
    // Hide setup, show instructions
    document.getElementById('setupSection').style.display = 'none';
    document.getElementById('instructionsSection').style.display = 'block';
    
    // Update instruction details
    const questionCount = currentCategory === 'all' ? 25 : 15;
    const timeMinutes = currentCategory === 'all' ? 35 : 20;
    
    document.getElementById('questionCount').textContent = questionCount;
    document.getElementById('timeLimit').textContent = timeMinutes + ' minutes';
    
    // Setup instruction buttons
    document.getElementById('backToSetupBtn').onclick = showSetupScreen;
    document.getElementById('startQuizBtn').onclick = startQuiz;
}

function getAllQuestions() {
    let allQuestions = [];
    Object.keys(questionBank).forEach(category => {
        allQuestions = allQuestions.concat(questionBank[category]);
    });
    return shuffleArray(allQuestions).slice(0, 25); // Take 25 random questions
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function startQuiz() {
    // Hide instructions, show game
    document.getElementById('instructionsSection').style.display = 'none';
    document.getElementById('gameSection').style.display = 'block';
    
    // Reset quiz state
    currentQuestionIndex = 0;
    userAnswers = [];
    selectedAnswer = null;
    startTime = Date.now();
    
    // Setup game controls
    document.getElementById('submitAnswerBtn').onclick = submitAnswer;
    document.getElementById('quitQuizBtn').onclick = quitQuiz;
    
    // Start timer
    startTimer();
    
    // Show first question
    displayQuestion();
}

function startTimer() {
    const timerElement = document.getElementById('timeRemaining');
    
    quizTimer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const remaining = timeLimit - elapsed;
        
        if (remaining <= 0) {
            clearInterval(quizTimer);
            finishQuiz();
            return;
        }
        
        const minutes = Math.floor(remaining / 60);
        const seconds = remaining % 60;
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Warning colors
        if (remaining <= 60) {
            timerElement.style.color = '#ef4444'; // Red
        } else if (remaining <= 300) {
            timerElement.style.color = '#f59e0b'; // Orange
        }
    }, 1000);
}

function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        finishQuiz();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    
    // Update progress
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = questions.length;
    
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progressPercent + '%';
    
    // Update question content
    document.getElementById('questionDifficulty').textContent = question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1);
    document.getElementById('questionText').textContent = question.question;
    
    // Create answer options
    const optionsContainer = document.getElementById('answerOptions');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'answer-option';
        optionElement.innerHTML = `
            <input type="radio" name="answer" value="${index}" id="option${index}">
            <label for="option${index}">${option}</label>
        `;
        optionsContainer.appendChild(optionElement);
        
        // Add click handler
        optionElement.addEventListener('click', () => selectAnswer(index));
    });
    
    // Reset submit button
    selectedAnswer = null;
    document.getElementById('submitAnswerBtn').disabled = true;
}

function selectAnswer(answerIndex) {
    selectedAnswer = answerIndex;
    
    // Update radio button
    document.getElementById(`option${answerIndex}`).checked = true;
    
    // Enable submit button
    document.getElementById('submitAnswerBtn').disabled = false;
    
    // Visual feedback
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelectorAll('.answer-option')[answerIndex].classList.add('selected');
}

function submitAnswer() {
    if (selectedAnswer === null) return;
    
    // Store the answer
    userAnswers.push({
        questionIndex: currentQuestionIndex,
        selectedAnswer: selectedAnswer,
        correct: selectedAnswer === questions[currentQuestionIndex].correct,
        difficulty: questions[currentQuestionIndex].difficulty
    });
    
    // Move to next question
    currentQuestionIndex++;
    displayQuestion();
}

function quitQuiz() {
    if (confirm('Are you sure you want to quit the assessment? Your progress will be lost.')) {
        clearInterval(quizTimer);
        showSetupScreen();
    }
}

function finishQuiz() {
    clearInterval(quizTimer);
    
    // Hide game, show results
    document.getElementById('gameSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';
    
    // Calculate and display results
    calculateResults();
}

function calculateResults() {
    const totalQuestions = userAnswers.length;
    const correctAnswers = userAnswers.filter(answer => answer.correct).length;
    const accuracyRate = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Calculate weighted score based on difficulty
    let weightedScore = 0;
    userAnswers.forEach(answer => {
        if (answer.correct) {
            switch(answer.difficulty) {
                case 'easy': weightedScore += 2; break;
                case 'medium': weightedScore += 4; break;
                case 'hard': weightedScore += 6; break;
            }
        }
    });
    
    // Calculate time taken
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const timeBonus = Math.max(0, Math.floor((timeLimit - timeTaken) / 60)); // 1 point per minute saved
    
    // Calculate final CQ score (hidden algorithm)
    const baseCQ = 100;
    const difficultyBonus = weightedScore * 2;
    const accuracyBonus = accuracyRate / 2;
    const finalCQ = Math.min(130, Math.max(70, baseCQ + (difficultyBonus * accuracyRate / 100) + timeBonus));
    
    // Display results
    displayResults(Math.round(finalCQ), accuracyRate, totalQuestions, timeTaken);
}

function displayResults(cqScore, accuracyRate, totalQuestions, timeTaken) {
    // Update score display
    document.getElementById('cqScore').textContent = cqScore;
    
    // Determine score category and description
    let title, description;
    if (cqScore >= 130) {
        title = 'Cloud Genius';
        description = 'Outstanding! You demonstrate AWS Solutions Architect level mastery with exceptional problem-solving skills.';
    } else if (cqScore >= 120) {
        title = 'Cloud Expert';
        description = 'Excellent! You have senior cloud engineer proficiency and can handle complex AWS scenarios.';
    } else if (cqScore >= 110) {
        title = 'Cloud Professional';
        description = 'Great! You possess solid production-ready knowledge and can implement AWS solutions effectively.';
    } else if (cqScore >= 100) {
        title = 'Cloud Practitioner';
        description = 'Good! You have a solid foundational understanding of AWS services and concepts.';
    } else if (cqScore >= 90) {
        title = 'Cloud Learner';
        description = 'You\'re developing your cloud skills well. Continue learning to strengthen your AWS knowledge.';
    } else if (cqScore >= 80) {
        title = 'Cloud Beginner';
        description = 'You\'ve grasped basic cloud concepts. Focus on hands-on practice to improve your skills.';
    } else {
        title = 'Cloud Explorer';
        description = 'You\'re just starting your cloud journey. Keep studying and practicing to build your foundation.';
    }
    
    document.getElementById('scoreTitle').textContent = title;
    document.getElementById('scoreDescription').textContent = description;
    
    // Update breakdown stats
    document.getElementById('questionsAnswered').textContent = `${totalQuestions}/${questions.length}`;
    document.getElementById('accuracyRate').textContent = accuracyRate + '%';
    
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    document.getElementById('timeTaken').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    const categoryNames = {
        'all': 'All Categories',
        'compute': 'Compute',
        'storage': 'Storage',
        'networking': 'Networking',
        'database': 'Database',
        'security': 'Security',
        'ml': 'Machine Learning',
        'serverless': 'Serverless'
    };
    document.getElementById('resultCategory').textContent = categoryNames[currentCategory];
    
    // Setup result buttons
    document.getElementById('retakeQuizBtn').onclick = () => selectCategory(currentCategory);
    document.getElementById('newCategoryQuizBtn').onclick = showSetupScreen;
    document.getElementById('shareResultsBtn').onclick = shareResults;
}

function shareResults() {
    const cqScore = document.getElementById('cqScore').textContent;
    const title = document.getElementById('scoreTitle').textContent;
    const category = document.getElementById('resultCategory').textContent;
    const shareBtn = document.getElementById('shareResultsBtn');
    
    const shareText = `I just scored ${cqScore} CQ (${title}) on The Cloud Scroll AWS assessment in ${category}! Test your AWS knowledge at [Your Website URL]`;
    
    navigator.clipboard.writeText(shareText).then(() => {
        // Modern button state change
        const originalText = shareBtn.innerHTML;
        shareBtn.innerHTML = '✅ Copied!';
        shareBtn.style.background = '#22c55e';
        shareBtn.style.borderColor = '#22c55e';
        shareBtn.style.color = 'white';
        
        // Reset after 2 seconds
        setTimeout(() => {
            shareBtn.innerHTML = originalText;
            shareBtn.style.background = '';
            shareBtn.style.borderColor = '';
            shareBtn.style.color = '';
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        shareBtn.innerHTML = '📋 ' + shareText;
        shareBtn.style.fontSize = '0.8rem';
    });
}
