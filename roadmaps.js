// Roadmap Topics Data
const topicData = {
    // Beginner Topics
    'start': {
        title: 'Start Your AWS Journey',
        icon: '🎯',
        description: 'Welcome to AWS! Start here to understand what cloud computing is and why AWS is the leading cloud platform.',
        learnMore: 'dictionary.html#cloud-computing',
        quiz: 'quiz.html'
    },
    'cloud-basics': {
        title: 'Cloud Computing Basics',
        icon: '☁️',
        description: 'Understand the fundamentals of cloud computing, its benefits, and different service models (IaaS, PaaS, SaaS).',
        learnMore: 'dictionary.html#cloud-computing',
        quiz: 'quiz.html'
    },
    'aws-console': {
        title: 'AWS Management Console',
        icon: '🖥️',
        description: 'Learn to navigate the AWS Console, understand the interface, and manage your AWS resources effectively.',
        learnMore: 'dictionary.html#aws-console',
        quiz: 'quiz.html'
    },
    'regions-azs': {
        title: 'Regions & Availability Zones',
        icon: '🌍',
        description: 'Understand AWS global infrastructure, how to choose regions, and design for high availability.',
        learnMore: 'dictionary.html#regions',
        quiz: 'quiz.html'
    },
    'ec2': {
        title: 'Amazon EC2',
        icon: '💻',
        description: 'Master virtual servers in the cloud. Learn instance types, security groups, and how to launch your first server.',
        learnMore: 'dictionary.html#ec2',
        quiz: 'quiz.html'
    },
    's3': {
        title: 'Amazon S3',
        icon: '💾',
        description: 'Object storage service for storing and retrieving any amount of data. Perfect for websites, backups, and data archiving.',
        learnMore: 'dictionary.html#s3',
        quiz: 'quiz.html'
    },
    'iam': {
        title: 'Identity & Access Management',
        icon: '🔐',
        description: 'Control who can access your AWS resources and what they can do. Essential for security and compliance.',
        learnMore: 'dictionary.html#iam',
        quiz: 'quiz.html'
    },
    'rds': {
        title: 'Amazon RDS',
        icon: '🗄️',
        description: 'Managed relational database service. Run MySQL, PostgreSQL, Oracle, and more without managing servers.',
        learnMore: 'dictionary.html#rds',
        quiz: 'quiz.html'
    },
    'dynamodb': {
        title: 'Amazon DynamoDB',
        icon: '⚡',
        description: 'Fast, flexible NoSQL database service. Perfect for mobile, web, gaming, and IoT applications.',
        learnMore: 'dictionary.html#dynamodb',
        quiz: 'quiz.html'
    },
    'vpc': {
        title: 'Virtual Private Cloud',
        icon: '🌐',
        description: 'Create your own isolated network in the AWS cloud. Control IP addresses, subnets, and routing.',
        learnMore: 'dictionary.html#vpc',
        quiz: 'quiz.html'
    },
    'cloudfront': {
        title: 'Amazon CloudFront',
        icon: '🚀',
        description: 'Content delivery network (CDN) that speeds up distribution of your web content globally.',
        learnMore: 'dictionary.html#cloudfront',
        quiz: 'quiz.html'
    },
    'lambda': {
        title: 'AWS Lambda',
        icon: '⚡',
        description: 'Run code without managing servers. Pay only for compute time consumed. Perfect for event-driven applications.',
        learnMore: 'dictionary.html#lambda',
        quiz: 'quiz.html'
    },
    'api-gateway': {
        title: 'Amazon API Gateway',
        icon: '🔗',
        description: 'Create, publish, and manage REST and WebSocket APIs at any scale. Perfect for serverless applications.',
        learnMore: 'dictionary.html#api-gateway',
        quiz: 'quiz.html'
    },
    'cloudwatch': {
        title: 'Amazon CloudWatch',
        icon: '📊',
        description: 'Monitor your AWS resources and applications. Set alarms, view logs, and gain insights into performance.',
        learnMore: 'dictionary.html#cloudwatch',
        quiz: 'quiz.html'
    },
    'next-steps': {
        title: 'Choose Your Specialization',
        icon: '🎓',
        description: 'Congratulations! You\'ve learned the AWS basics. Now choose a specialization path to advance your skills.',
        learnMore: '#',
        quiz: 'quiz.html'
    },

    // Solutions Architect Topics
    'beginner-complete': {
        title: 'Complete Beginner Path',
        icon: '✅',
        description: 'Make sure you\'ve completed all the beginner topics before starting the Solutions Architect path.',
        learnMore: '#beginner',
        quiz: 'quiz.html'
    },
    'well-architected': {
        title: 'Well-Architected Framework',
        icon: '🏛️',
        description: 'Learn the 6 pillars: Operational Excellence, Security, Reliability, Performance, Cost Optimization, and Sustainability.',
        learnMore: 'dictionary.html#well-architected',
        quiz: 'quiz.html'
    },
    'design-patterns': {
        title: 'Architecture Design Patterns',
        icon: '📐',
        description: 'Common patterns for building scalable, reliable applications: microservices, event-driven, serverless, and more.',
        learnMore: 'dictionary.html#design-patterns',
        quiz: 'quiz.html'
    },
    'auto-scaling': {
        title: 'Auto Scaling',
        icon: '📈',
        description: 'Automatically adjust capacity to maintain steady, predictable performance at the lowest possible cost.',
        learnMore: 'dictionary.html#auto-scaling',
        quiz: 'quiz.html'
    },
    'load-balancers': {
        title: 'Elastic Load Balancing',
        icon: '⚖️',
        description: 'Distribute incoming traffic across multiple targets: EC2 instances, containers, and IP addresses.',
        learnMore: 'dictionary.html#load-balancer',
        quiz: 'quiz.html'
    },
    'containers': {
        title: 'Container Services',
        icon: '📦',
        description: 'Run containerized applications with Amazon ECS, EKS, and AWS Fargate. Docker and Kubernetes on AWS.',
        learnMore: 'dictionary.html#containers',
        quiz: 'quiz.html'
    },
    'saa-cert': {
        title: 'Solutions Architect Associate',
        icon: '🏆',
        description: 'Validate your ability to design distributed systems on AWS. One of the most popular AWS certifications.',
        learnMore: '#',
        quiz: 'quiz.html'
    },

    // Developer Topics
    'programming-basics': {
        title: 'Programming Skills',
        icon: '👨‍💻',
        description: 'Solid foundation in at least one programming language: Python, Node.js, Java, or .NET.',
        learnMore: '#',
        quiz: '#'
    },
    'aws-cli': {
        title: 'AWS Command Line Interface',
        icon: '⌨️',
        description: 'Interact with AWS services from the command line. Essential tool for developers and automation.',
        learnMore: 'dictionary.html#aws-cli',
        quiz: 'quiz.html'
    },
    'aws-sdk': {
        title: 'AWS SDKs',
        icon: '📦',
        description: 'Software development kits for various programming languages to integrate AWS services into your applications.',
        learnMore: 'dictionary.html#aws-sdk',
        quiz: 'quiz.html'
    },
    'cloud9': {
        title: 'AWS Cloud9',
        icon: '☁️',
        description: 'Cloud-based integrated development environment (IDE) for writing, running, and debugging code.',
        learnMore: 'dictionary.html#cloud9',
        quiz: 'quiz.html'
    },
    'lambda-advanced': {
        title: 'Advanced Lambda',
        icon: '⚡',
        description: 'Deep dive into Lambda: layers, environment variables, error handling, performance optimization, and best practices.',
        learnMore: 'dictionary.html#lambda',
        quiz: 'quiz.html'
    },
    'api-gateway-dev': {
        title: 'API Gateway Development',
        icon: '🔗',
        description: 'Build REST and GraphQL APIs, handle authentication, request/response transformation, and API versioning.',
        learnMore: 'dictionary.html#api-gateway',
        quiz: 'quiz.html'
    },
    'sam': {
        title: 'Serverless Application Model',
        icon: '🏗️',
        description: 'AWS SAM framework for building serverless applications. Infrastructure as code for serverless.',
        learnMore: 'dictionary.html#sam',
        quiz: 'quiz.html'
    },
    'dynamodb-dev': {
        title: 'DynamoDB Development',
        icon: '⚡',
        description: 'NoSQL design patterns, partition keys, GSI/LSI, DynamoDB Streams, and performance optimization.',
        learnMore: 'dictionary.html#dynamodb',
        quiz: 'quiz.html'
    },
    'rds-dev': {
        title: 'RDS Development',
        icon: '🗄️',
        description: 'Connection pooling, read replicas, Multi-AZ deployments, backup strategies, and performance tuning.',
        learnMore: 'dictionary.html#rds',
        quiz: 'quiz.html'
    },
    'elasticache-dev': {
        title: 'ElastiCache Development',
        icon: '🚀',
        description: 'Implement caching strategies with Redis and Memcached to improve application performance.',
        learnMore: 'dictionary.html#elasticache',
        quiz: 'quiz.html'
    },
    'sqs': {
        title: 'Simple Queue Service',
        icon: '📬',
        description: 'Fully managed message queuing service for decoupling and scaling microservices and serverless applications.',
        learnMore: 'dictionary.html#sqs',
        quiz: 'quiz.html'
    },
    'sns': {
        title: 'Simple Notification Service',
        icon: '📢',
        description: 'Pub/sub messaging service for application-to-application and application-to-person communication.',
        learnMore: 'dictionary.html#sns',
        quiz: 'quiz.html'
    },
    'eventbridge': {
        title: 'Amazon EventBridge',
        icon: '🔄',
        description: 'Serverless event bus service for building event-driven applications at scale.',
        learnMore: 'dictionary.html#eventbridge',
        quiz: 'quiz.html'
    },
    's3-dev': {
        title: 'S3 Advanced Development',
        icon: '💾',
        description: 'Presigned URLs, multipart uploads, lifecycle policies, event notifications, and performance optimization.',
        learnMore: 'dictionary.html#s3',
        quiz: 'quiz.html'
    },
    'cloudfront-dev': {
        title: 'CloudFront Development',
        icon: '🌐',
        description: 'Edge locations, Lambda@Edge, custom origins, caching strategies, and security headers.',
        learnMore: 'dictionary.html#cloudfront',
        quiz: 'quiz.html'
    },
    'cognito': {
        title: 'Amazon Cognito',
        icon: '👤',
        description: 'User authentication, authorization, and user management for web and mobile applications.',
        learnMore: 'dictionary.html#cognito',
        quiz: 'quiz.html'
    },
    'secrets-manager': {
        title: 'AWS Secrets Manager',
        icon: '🔐',
        description: 'Securely store and manage sensitive information like API keys, passwords, and database credentials.',
        learnMore: 'dictionary.html#secrets-manager',
        quiz: 'quiz.html'
    },
    'cloudwatch-dev': {
        title: 'CloudWatch for Developers',
        icon: '📊',
        description: 'Custom metrics, log aggregation, dashboards, alarms, and application performance monitoring.',
        learnMore: 'dictionary.html#cloudwatch',
        quiz: 'quiz.html'
    },
    'xray': {
        title: 'AWS X-Ray',
        icon: '🔍',
        description: 'Distributed tracing service to analyze and debug production applications and microservices.',
        learnMore: 'dictionary.html#xray',
        quiz: 'quiz.html'
    },
    'codecommit': {
        title: 'AWS CodeCommit',
        icon: '📝',
        description: 'Fully managed Git repository service for storing and versioning your source code.',
        learnMore: 'dictionary.html#codecommit',
        quiz: 'quiz.html'
    },
    'codebuild': {
        title: 'AWS CodeBuild',
        icon: '🔨',
        description: 'Fully managed build service that compiles source code, runs tests, and produces deployable artifacts.',
        learnMore: 'dictionary.html#codebuild',
        quiz: 'quiz.html'
    },
    'codedeploy': {
        title: 'AWS CodeDeploy',
        icon: '🚀',
        description: 'Automated deployment service for applications to EC2 instances, Lambda functions, and ECS services.',
        learnMore: 'dictionary.html#codedeploy',
        quiz: 'quiz.html'
    },
    'codepipeline': {
        title: 'AWS CodePipeline',
        icon: '🔄',
        description: 'Continuous integration and continuous delivery service for fast and reliable application updates.',
        learnMore: 'dictionary.html#codepipeline',
        quiz: 'quiz.html'
    },
    'dva-cert': {
        title: 'Developer Associate Certification',
        icon: '🏆',
        description: 'Validate your expertise in developing and maintaining applications on AWS platform.',
        learnMore: '#',
        quiz: 'quiz.html'
    },

    // DevOps Topics
    'linux-basics': {
        title: 'Linux/Unix Fundamentals',
        icon: '🐧',
        description: 'Command line proficiency, file systems, process management, and shell scripting basics.',
        learnMore: '#',
        quiz: '#'
    },
    'scripting': {
        title: 'Scripting Languages',
        icon: '📜',
        description: 'Bash scripting and Python for automation, configuration management, and infrastructure tasks.',
        learnMore: '#',
        quiz: '#'
    },
    'cloudformation': {
        title: 'AWS CloudFormation',
        icon: '📜',
        description: 'Infrastructure as Code using JSON/YAML templates to provision and manage AWS resources.',
        learnMore: 'dictionary.html#cloudformation',
        quiz: 'quiz.html'
    },
    'terraform': {
        title: 'Terraform',
        icon: '🏗️',
        description: 'Multi-cloud Infrastructure as Code tool for building, changing, and versioning infrastructure.',
        learnMore: 'dictionary.html#terraform',
        quiz: 'quiz.html'
    },
    'cdk': {
        title: 'AWS CDK',
        icon: '⚡',
        description: 'Define cloud infrastructure using familiar programming languages like TypeScript, Python, and Java.',
        learnMore: 'dictionary.html#cdk',
        quiz: 'quiz.html'
    },
    'systems-manager': {
        title: 'AWS Systems Manager',
        icon: '🔧',
        description: 'Centralized management of AWS resources: patch management, configuration, and operational insights.',
        learnMore: 'dictionary.html#systems-manager',
        quiz: 'quiz.html'
    },
    'ansible': {
        title: 'Ansible',
        icon: '📋',
        description: 'Agentless automation tool for configuration management, application deployment, and orchestration.',
        learnMore: 'dictionary.html#ansible',
        quiz: 'quiz.html'
    },
    'chef-puppet': {
        title: 'Chef & Puppet',
        icon: '👨‍🍳',
        description: 'Configuration management tools for automating infrastructure provisioning and management.',
        learnMore: 'dictionary.html#chef-puppet',
        quiz: 'quiz.html'
    },
    'docker': {
        title: 'Docker',
        icon: '🐳',
        description: 'Containerization platform for packaging applications and their dependencies into portable containers.',
        learnMore: 'dictionary.html#docker',
        quiz: 'quiz.html'
    },
    'ecs-devops': {
        title: 'Amazon ECS',
        icon: '📦',
        description: 'Fully managed container orchestration service for running Docker containers at scale.',
        learnMore: 'dictionary.html#ecs',
        quiz: 'quiz.html'
    },
    'eks-devops': {
        title: 'Amazon EKS',
        icon: '☸️',
        description: 'Managed Kubernetes service for running containerized applications using Kubernetes.',
        learnMore: 'dictionary.html#eks',
        quiz: 'quiz.html'
    },
    'fargate': {
        title: 'AWS Fargate',
        icon: '⚡',
        description: 'Serverless compute engine for containers that removes the need to manage servers.',
        learnMore: 'dictionary.html#fargate',
        quiz: 'quiz.html'
    },
    'cloudwatch-devops': {
        title: 'CloudWatch for DevOps',
        icon: '📊',
        description: 'Infrastructure monitoring, log aggregation, custom metrics, and automated alerting.',
        learnMore: 'dictionary.html#cloudwatch',
        quiz: 'quiz.html'
    },
    'cloudtrail': {
        title: 'AWS CloudTrail',
        icon: '👣',
        description: 'Service for logging, monitoring, and retaining account activity across your AWS infrastructure.',
        learnMore: 'dictionary.html#cloudtrail',
        quiz: 'quiz.html'
    },
    'elasticsearch': {
        title: 'Amazon OpenSearch',
        icon: '🔍',
        description: 'Search and analytics engine for log analysis, real-time monitoring, and business intelligence.',
        learnMore: 'dictionary.html#opensearch',
        quiz: 'quiz.html'
    },
    'config': {
        title: 'AWS Config',
        icon: '⚙️',
        description: 'Service for assessing, auditing, and evaluating configurations of AWS resources for compliance.',
        learnMore: 'dictionary.html#config',
        quiz: 'quiz.html'
    },
    'guardduty': {
        title: 'Amazon GuardDuty',
        icon: '🛡️',
        description: 'Threat detection service that uses machine learning to identify malicious activity.',
        learnMore: 'dictionary.html#guardduty',
        quiz: 'quiz.html'
    },
    'inspector': {
        title: 'Amazon Inspector',
        icon: '🔍',
        description: 'Automated security assessment service for applications to improve security and compliance.',
        learnMore: 'dictionary.html#inspector',
        quiz: 'quiz.html'
    },
    'cost-explorer': {
        title: 'AWS Cost Explorer',
        icon: '💰',
        description: 'Tool for visualizing, understanding, and managing AWS costs and usage over time.',
        learnMore: 'dictionary.html#cost-explorer',
        quiz: 'quiz.html'
    },
    'trusted-advisor': {
        title: 'AWS Trusted Advisor',
        icon: '💡',
        description: 'Service that provides recommendations for cost optimization, security, and performance.',
        learnMore: 'dictionary.html#trusted-advisor',
        quiz: 'quiz.html'
    },
    'budgets': {
        title: 'AWS Budgets',
        icon: '📊',
        description: 'Set custom cost and usage budgets and receive alerts when you exceed your thresholds.',
        learnMore: 'dictionary.html#budgets',
        quiz: 'quiz.html'
    },
    'service-mesh': {
        title: 'AWS App Mesh',
        icon: '🕸️',
        description: 'Service mesh that provides application-level networking for microservices communication.',
        learnMore: 'dictionary.html#app-mesh',
        quiz: 'quiz.html'
    },
    'chaos-engineering': {
        title: 'Chaos Engineering',
        icon: '🌪️',
        description: 'Practice of experimenting on systems to build confidence in capability to withstand turbulent conditions.',
        learnMore: 'dictionary.html#chaos-engineering',
        quiz: 'quiz.html'
    },
    'multi-account': {
        title: 'AWS Organizations',
        icon: '🏢',
        description: 'Centrally manage multiple AWS accounts, apply policies, and consolidate billing.',
        learnMore: 'dictionary.html#organizations',
        quiz: 'quiz.html'
    },
    'dop-cert': {
        title: 'DevOps Engineer Professional',
        icon: '🏆',
        description: 'Advanced certification for implementing and managing continuous delivery systems on AWS.',
        learnMore: '#',
        quiz: 'quiz.html'
    },

    // DevOps specific versions of shared topics
    'codecommit-devops': {
        title: 'CodeCommit for DevOps',
        icon: '📝',
        description: 'Git workflows, branching strategies, code reviews, and integration with CI/CD pipelines.',
        learnMore: 'dictionary.html#codecommit',
        quiz: 'quiz.html'
    },
    'codebuild-devops': {
        title: 'CodeBuild for DevOps',
        icon: '🔨',
        description: 'Build specifications, environment management, artifact handling, and integration testing.',
        learnMore: 'dictionary.html#codebuild',
        quiz: 'quiz.html'
    },
    'codedeploy-devops': {
        title: 'CodeDeploy for DevOps',
        icon: '🚀',
        description: 'Deployment strategies, blue/green deployments, rollback mechanisms, and deployment monitoring.',
        learnMore: 'dictionary.html#codedeploy',
        quiz: 'quiz.html'
    },
    'codepipeline-devops': {
        title: 'CodePipeline for DevOps',
        icon: '🔄',
        description: 'Pipeline orchestration, stage management, approval processes, and cross-account deployments.',
        learnMore: 'dictionary.html#codepipeline',
        quiz: 'quiz.html'
    },

    // Coming Soon
    'coming-soon': {
        title: 'Coming Soon',
        icon: '🚧',
        description: 'This roadmap is under construction. Check back soon for detailed learning paths!',
        learnMore: '#',
        quiz: '#'
    }
};

// Initialize Roadmaps
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeNodes();
    initializeModal();
    loadProgress();
});

// Tab Functionality
function initializeTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const roadmapContainers = document.querySelectorAll('.roadmap-container');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const roadmapId = this.dataset.roadmap;
            
            // Update active tab
            tabBtns.forEach(tab => tab.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding roadmap
            roadmapContainers.forEach(container => {
                container.classList.remove('active');
            });
            document.getElementById(roadmapId + '-roadmap').classList.add('active');
        });
    });
}

// Node Click Functionality
function initializeNodes() {
    const nodes = document.querySelectorAll('.roadmap-node');
    
    nodes.forEach(node => {
        if (!node.classList.contains('coming-soon')) {
            node.addEventListener('click', function() {
                const topic = this.dataset.topic;
                showTopicModal(topic);
                markAsCompleted(this);
            });
        }
    });
}

// Modal Functionality
function initializeModal() {
    const modal = document.getElementById('topicModal');
    const closeBtn = document.querySelector('.close-btn');
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Show Topic Modal
function showTopicModal(topicId) {
    const topic = topicData[topicId];
    if (!topic) return;
    
    const modal = document.getElementById('topicModal');
    const modalIcon = document.querySelector('.modal-icon');
    const modalTitle = document.querySelector('.modal-title');
    const modalDescription = document.querySelector('.modal-description');
    const learnBtn = document.querySelector('.learn-btn');
    const quizBtn = document.querySelector('.quiz-btn');
    
    modalIcon.textContent = topic.icon;
    modalTitle.textContent = topic.title;
    modalDescription.textContent = topic.description;
    learnBtn.href = topic.learnMore;
    quizBtn.href = topic.quiz;
    
    // Hide buttons if no links
    if (topic.learnMore === '#') {
        learnBtn.style.display = 'none';
    } else {
        learnBtn.style.display = 'flex';
    }
    
    if (topic.quiz === '#') {
        quizBtn.style.display = 'none';
    } else {
        quizBtn.style.display = 'flex';
    }
    
    modal.style.display = 'block';
}

// Mark Node as Completed
function markAsCompleted(node) {
    if (!node.classList.contains('completed')) {
        node.classList.add('completed');
        
        // Add progress indicator
        if (!node.querySelector('.progress-indicator')) {
            const indicator = document.createElement('div');
            indicator.className = 'progress-indicator';
            indicator.textContent = '✓';
            node.appendChild(indicator);
        }
        
        saveProgress();
    }
}

// Save Progress to localStorage
function saveProgress() {
    const completedNodes = document.querySelectorAll('.roadmap-node.completed');
    const completedTopics = Array.from(completedNodes).map(node => node.dataset.topic);
    localStorage.setItem('aws-roadmap-progress', JSON.stringify(completedTopics));
}

// Load Progress from localStorage
function loadProgress() {
    const savedProgress = localStorage.getItem('aws-roadmap-progress');
    if (savedProgress) {
        const completedTopics = JSON.parse(savedProgress);
        completedTopics.forEach(topicId => {
            const node = document.querySelector(`[data-topic="${topicId}"]`);
            if (node) {
                node.classList.add('completed');
                
                // Add progress indicator
                if (!node.querySelector('.progress-indicator')) {
                    const indicator = document.createElement('div');
                    indicator.className = 'progress-indicator';
                    indicator.textContent = '✓';
                    node.appendChild(indicator);
                }
            }
        });
    }
}

// Reset Progress (for testing)
function resetProgress() {
    localStorage.removeItem('aws-roadmap-progress');
    document.querySelectorAll('.roadmap-node').forEach(node => {
        node.classList.remove('completed');
        const indicator = node.querySelector('.progress-indicator');
        if (indicator) {
            indicator.remove();
        }
    });
}

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('topicModal');
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

// Add some fun animations on load
function addLoadAnimations() {
    const nodes = document.querySelectorAll('.roadmap-node');
    nodes.forEach((node, index) => {
        node.style.opacity = '0';
        node.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            node.style.transition = 'all 0.5s ease';
            node.style.opacity = '1';
            node.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addLoadAnimations, 500);
});
