// AWS Terms Database - Beginner-Friendly Definitions
const awsTerms = [
    // Compute
    {
        name: "EC2",
        category: "compute",
        definition: "Think of EC2 as renting a computer in the cloud. Instead of buying a physical server, you rent virtual computers (instances) that you can start, stop, and configure as needed. Like renting different sized apartments - you pick the CPU, memory, and storage that fits your needs. Perfect for hosting websites, running applications, or processing data."
    },
    {
        name: "Lambda",
        category: "serverless",
        definition: "Lambda is like having a personal assistant that only works when you need them. You give it a task (your code), and it runs only when triggered by events like file uploads or API calls. You pay only for the seconds it actually runs. Great for processing images, sending emails, or handling API requests without managing servers."
    },
    {
        name: "ECS",
        category: "compute",
        definition: "ECS is like a smart shipping container manager. It takes your applications (packaged in Docker containers) and decides where to run them across your fleet of servers. Just like how shipping containers make it easy to move goods between ships, trucks, and trains, ECS makes it easy to run your apps anywhere."
    },
    {
        name: "EKS",
        category: "compute",
        definition: "EKS is like having a professional orchestra conductor (Kubernetes) managed by AWS. It coordinates all your containerized applications like a conductor manages musicians. AWS handles the complex setup and maintenance, so you focus on your applications. Used by companies running many microservices."
    },
    {
        name: "Fargate",
        category: "serverless",
        definition: "Fargate is like ordering food delivery instead of cooking. You just say 'run my container' and AWS handles all the server management behind the scenes. No need to choose server sizes or manage infrastructure - just run your code. Works with both ECS and EKS."
    },

    // Storage
    {
        name: "S3",
        category: "storage",
        definition: "S3 is like an infinite digital warehouse where you can store any type of file. Think of it as Google Drive for developers - you can store photos, videos, documents, backups, or website files. Each file gets a unique web address, making it perfect for hosting images on websites or backing up data."
    },
    {
        name: "EBS",
        category: "storage",
        definition: "EBS is like a USB drive that you can attach to your EC2 instances (virtual computers). Just like plugging a USB drive into your laptop gives you extra storage, EBS gives your cloud servers additional disk space. The difference? This 'USB drive' can be as large as 64TB and never breaks."
    },
    {
        name: "EFS",
        category: "storage",
        definition: "EFS is like a shared network folder that multiple computers can access simultaneously. Imagine a Google Drive folder that all your EC2 instances can read and write to at the same time. Perfect for applications that need shared file storage, like content management systems or shared databases."
    },
    {
        name: "Glacier",
        category: "storage",
        definition: "Glacier is like a deep storage vault for files you rarely need but must keep. Think of it as your digital attic - very cheap to store things, but takes hours to retrieve them. Perfect for backing up old photos, legal documents, or compliance data that you might need once a year."
    },

    // Networking
    {
        name: "VPC",
        category: "networking",
        definition: "VPC is like having your own private neighborhood in the AWS city. You control who can enter, which houses (servers) can talk to each other, and how traffic flows. It's your secure, isolated network where you can safely run your applications without interference from other AWS customers."
    },
    {
        name: "CloudFront",
        category: "networking",
        definition: "CloudFront is like having copies of your website stored in libraries around the world. When someone in Tokyo visits your site, they get it from the Tokyo 'library' instead of your server in New York, making it load much faster. Used by Netflix, Spotify, and news websites for fast content delivery."
    },
    {
        name: "Route 53",
        category: "networking",
        definition: "Route 53 is like the internet's phone book. When you type 'google.com', Route 53 translates that friendly name into the actual server address (like translating 'John's Pizza' into '123 Main Street'). It also checks if your servers are healthy and redirects traffic if one goes down."
    },
    {
        name: "ALB",
        category: "networking",
        definition: "ALB is like a smart receptionist at a busy restaurant. When customers (web requests) arrive, it looks at what they want and directs them to the right server that can handle their specific request. It can read the content of requests and make intelligent routing decisions."
    },
    {
        name: "NLB",
        category: "networking",
        definition: "NLB is like a traffic cop at a busy intersection, directing millions of cars (network requests) per second to different roads (servers) based on simple rules. It's extremely fast but doesn't look inside the cars - perfect for high-speed applications like gaming or real-time trading."
    },

    // Database
    {
        name: "RDS",
        category: "database",
        definition: "RDS is like having a professional database administrator manage your database 24/7. Instead of installing and maintaining MySQL or PostgreSQL yourself, AWS handles backups, updates, and scaling. It's like hiring a full-time expert to manage your data while you focus on your application."
    },
    {
        name: "DynamoDB",
        category: "database",
        definition: "DynamoDB is like a super-fast filing cabinet that can instantly find any document using simple labels. Unlike traditional databases with complex relationships, it stores data in simple key-value pairs. Perfect for mobile apps, gaming leaderboards, or shopping carts that need lightning-fast responses."
    },
    {
        name: "Aurora",
        category: "database",
        definition: "Aurora is like a supercharged version of traditional databases (MySQL/PostgreSQL) built specifically for the cloud. It's 5x faster than regular MySQL and automatically creates copies of your data across multiple locations. Think of it as a race car version of a regular database."
    },
    {
        name: "Redshift",
        category: "analytics",
        definition: "Redshift is like a massive Excel spreadsheet that can analyze billions of rows in seconds. Companies use it to answer questions like 'Which products sold best last quarter?' or 'What's our customer retention rate?' It's designed for business intelligence and data analysis, not day-to-day app operations."
    },

    // Security
    {
        name: "IAM",
        category: "security",
        definition: "IAM is like a digital keychain system for your AWS account. You create different keys (permissions) for different people - your developer gets keys to the development servers, your accountant gets keys to billing, but neither can access everything. It controls who can do what in your AWS account."
    },
    {
        name: "Cognito",
        category: "security",
        definition: "Cognito is like a bouncer for your mobile app or website. It handles user sign-ups, logins, password resets, and even social logins (like 'Sign in with Google'). Instead of building your own user management system, Cognito does the heavy lifting and keeps user data secure."
    },
    {
        name: "KMS",
        category: "security",
        definition: "KMS is like a high-security vault for your encryption keys. Just like you wouldn't leave your house key under the doormat, you shouldn't store encryption keys in your code. KMS safely stores and manages these keys, and other AWS services use it to encrypt your data automatically."
    },
    {
        name: "WAF",
        category: "security",
        definition: "WAF is like a security guard for your website that blocks bad visitors before they reach your door. It stops common attacks like SQL injection (hackers trying to break your database) or DDoS attacks (too many fake visitors trying to crash your site). Works with CloudFront and load balancers."
    },

    // Machine Learning
    {
        name: "SageMaker",
        category: "ml",
        definition: "SageMaker is like a complete AI workshop with all the tools you need to build smart applications. It provides pre-built algorithms, powerful computers for training, and easy deployment - like having a fully equipped lab to create AI that can predict customer behavior or detect fraud."
    },
    {
        name: "Rekognition",
        category: "ml",
        definition: "Rekognition is like having a super-smart photo analyst. Upload any image or video, and it can tell you what's in it - people, objects, text, or even emotions. Social media apps use it to tag friends automatically, and security systems use it to identify people."
    },
    {
        name: "Comprehend",
        category: "ml",
        definition: "Comprehend is like having a literature professor analyze text for you. It can read customer reviews and tell you if they're positive or negative, extract important information from documents, or identify what language text is written in. Perfect for analyzing social media sentiment or customer feedback."
    },

    // Analytics
    {
        name: "Kinesis",
        category: "analytics",
        definition: "Kinesis is like a high-speed conveyor belt for data. It captures and processes thousands of data points per second - like tracking every click on your website, every sensor reading from IoT devices, or every transaction in real-time. Think of it as the data highway for live information."
    },
    {
        name: "EMR",
        category: "analytics",
        definition: "EMR is like renting a supercomputer cluster to crunch massive amounts of data. Instead of waiting days to process terabytes of information on your laptop, EMR spins up hundreds of computers to do the work in hours. Used for big data processing, machine learning training, and scientific computing."
    },
    {
        name: "Athena",
        category: "analytics",
        definition: "Athena is like being able to ask questions about files stored in S3 using simple SQL queries. Instead of downloading gigabytes of data to analyze, you just ask questions like 'How many users visited last month?' and Athena finds the answer directly in your stored files. No servers to manage."
    },

    // Serverless
    {
        name: "API Gateway",
        category: "serverless",
        definition: "API Gateway is like a smart receptionist for your application's services. When mobile apps or websites want to talk to your backend, API Gateway handles the requests, checks permissions, and routes them to the right place. It's the front door that manages all communication with your application."
    },
    {
        name: "Step Functions",
        category: "serverless",
        definition: "Step Functions is like a workflow manager that coordinates multiple tasks. Imagine processing an order: check inventory, charge credit card, send confirmation email, update database. Step Functions ensures these steps happen in the right order and handles failures gracefully."
    },
    {
        name: "EventBridge",
        category: "serverless",
        definition: "EventBridge is like a smart notification system that connects different applications. When something happens in one app (like a new customer signup), it can automatically trigger actions in other apps (send welcome email, update CRM, start onboarding). It's the glue that makes applications work together."
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('resultsContainer');
const categoryBtns = document.querySelectorAll('.category-btn');

// State
let currentCategory = 'all';
let currentSearchTerm = '';

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    displayWelcomeMessage();
});

function setupEventListeners() {
    // Search functionality
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Category filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            setActiveCategory(category);
            filterTerms(currentSearchTerm, category);
        });
    });

    // Real-time search as user types
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim();
        if (searchTerm.length > 0) {
            filterTerms(searchTerm, currentCategory);
        } else if (searchTerm.length === 0) {
            displayWelcomeMessage();
        }
    });
}

function handleSearch() {
    const searchTerm = searchInput.value.trim();
    currentSearchTerm = searchTerm;
    
    if (searchTerm) {
        filterTerms(searchTerm, currentCategory);
    } else {
        displayWelcomeMessage();
    }
}

function setActiveCategory(category) {
    currentCategory = category;
    
    // Update active button
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
}

function filterTerms(searchTerm = '', category = 'all') {
    let filteredTerms = awsTerms;

    // Filter by category
    if (category !== 'all') {
        filteredTerms = filteredTerms.filter(term => term.category === category);
    }

    // Filter by search term
    if (searchTerm) {
        filteredTerms = filteredTerms.filter(term => 
            term.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            term.definition.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    displayResults(filteredTerms, searchTerm);
}

function displayResults(terms, searchTerm = '') {
    if (terms.length === 0) {
        displayNoResults(searchTerm);
        return;
    }

    const resultsHTML = terms.map(term => `
        <div class="term-card">
            <div class="term-header">
                <h3 class="term-name">${highlightSearchTerm(term.name, searchTerm)}</h3>
                <span class="category-tag">${capitalizeFirst(term.category)}</span>
            </div>
            <p class="term-definition">${highlightSearchTerm(term.definition, searchTerm)}</p>
        </div>
    `).join('');

    resultsContainer.innerHTML = resultsHTML;
}

function displayNoResults(searchTerm) {
    const message = searchTerm 
        ? `No results found for "${searchTerm}"`
        : 'No terms found in this category';
    
    resultsContainer.innerHTML = `
        <div class="no-results">
            <h3>${message}</h3>
            <p>Try adjusting your search or selecting a different category.</p>
        </div>
    `;
}

function displayWelcomeMessage() {
    resultsContainer.innerHTML = `
        <div class="welcome-message">
            <h2>Welcome to The Cloud Scroll!</h2>
            <p>Search for any AWS term or browse by category to get clear, concise definitions.</p>
        </div>
    `;
}

function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark style="background-color: #FBD8BF; padding: 2px 4px; border-radius: 3px;">$1</mark>');
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Add some smooth scrolling for better UX
function smoothScrollToResults() {
    resultsContainer.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}
