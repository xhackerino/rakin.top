// Tech Stack Data
const techStackData = [
    {
        name: "JavaScript",
        proficiency: 90,
        lastUsed: "2024-06-15",
        projects: ["Portfolio Website", "E-commerce Platform", "API Gateway"],
        tags: ["Frontend", "Backend", "Full-Stack"],
        category: "Languages"
    },
    {
        name: "TypeScript",
        proficiency: 85,
        lastUsed: "2024-06-20",
        projects: ["React App", "Node.js API"],
        tags: ["Frontend", "Backend"],
        category: "Languages"
    },
    {
        name: "Python",
        proficiency: 80,
        lastUsed: "2024-05-10",
        projects: ["Data Analysis Tool", "Automation Scripts"],
        tags: ["Backend", "Data Science"],
        category: "Languages"
    },
    {
        name: "React",
        proficiency: 88,
        lastUsed: "2024-06-18",
        projects: ["Portfolio Website", "Dashboard App"],
        tags: ["Frontend"],
        category: "Frameworks"
    },
    {
        name: "Node.js",
        proficiency: 85,
        lastUsed: "2024-06-15",
        projects: ["API Gateway", "Microservices"],
        tags: ["Backend"],
        category: "Frameworks"
    },
    {
        name: "PostgreSQL",
        proficiency: 75,
        lastUsed: "2024-05-25",
        projects: ["E-commerce Platform", "Analytics System"],
        tags: ["Databases"],
        category: "Databases"
    },
    {
        name: "MongoDB",
        proficiency: 70,
        lastUsed: "2024-04-20",
        projects: ["Real-time Chat App"],
        tags: ["Databases"],
        category: "Databases"
    },
    {
        name: "Docker",
        proficiency: 80,
        lastUsed: "2024-06-10",
        projects: ["All Production Apps"],
        tags: ["DevOps"],
        category: "DevOps"
    },
    {
        name: "Kubernetes",
        proficiency: 65,
        lastUsed: "2024-05-15",
        projects: ["Cloud Infrastructure"],
        tags: ["DevOps"],
        category: "DevOps"
    },
    {
        name: "AWS",
        proficiency: 75,
        lastUsed: "2024-06-12",
        projects: ["Cloud Deployments"],
        tags: ["DevOps", "Cloud"],
        category: "Cloud"
    },
    {
        name: "Swift",
        proficiency: 70,
        lastUsed: "2024-03-15",
        projects: ["iOS App"],
        tags: ["iOS", "Mobile"],
        category: "Mobile"
    },
    {
        name: "Git",
        proficiency: 90,
        lastUsed: "2024-06-22",
        projects: ["All Projects"],
        tags: ["DevOps", "Version Control"],
        category: "Tools"
    }
];

// Projects Data
const projectsData = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
        techStack: ["React", "Node.js", "PostgreSQL", "Stripe API", "Docker"],
        contributions: [
            "Designed and implemented the entire backend architecture",
            "Built responsive frontend with React and TypeScript",
            "Integrated payment processing with Stripe",
            "Set up CI/CD pipeline with GitHub Actions"
        ],
        problems: [
            "High latency in product search",
            "Payment gateway integration complexity",
            "Inventory synchronization across multiple warehouses"
        ],
        solutions: [
            "Implemented Elasticsearch for fast product search",
            "Created abstraction layer for payment providers",
            "Built real-time sync system using WebSockets"
        ],
        github: "https://github.com/xhackerino/ecommerce-platform",
        demo: "https://demo.example.com",
        hasDemo: true,
        image: "assets/jpg/my-photo.jpg" // Placeholder
    },
    {
        id: 2,
        title: "API Gateway Microservice",
        description: "Scalable API gateway handling authentication, rate limiting, and request routing for microservices architecture.",
        techStack: ["Node.js", "Express", "Redis", "Docker", "Kubernetes"],
        contributions: [
            "Architected the gateway system",
            "Implemented JWT authentication",
            "Built rate limiting middleware",
            "Created monitoring and logging system"
        ],
        problems: [
            "Handling high traffic volumes",
            "Managing authentication across services",
            "Preventing API abuse"
        ],
        solutions: [
            "Implemented Redis-based caching",
            "Created centralized auth service",
            "Built dynamic rate limiting per user/IP"
        ],
        github: "https://github.com/xhackerino/api-gateway",
        demo: null,
        hasDemo: false,
        image: "assets/jpg/my-photo.jpg"
    },
    {
        id: 3,
        title: "Real-time Analytics Dashboard",
        description: "Interactive dashboard for visualizing real-time data with custom charts and filtering capabilities.",
        techStack: ["React", "TypeScript", "WebSockets", "D3.js", "PostgreSQL"],
        contributions: [
            "Built responsive dashboard UI",
            "Implemented real-time data streaming",
            "Created custom chart components",
            "Optimized for performance with large datasets"
        ],
        problems: [
            "Real-time data synchronization",
            "Rendering performance with large datasets",
            "Complex filtering requirements"
        ],
        solutions: [
            "Used WebSockets for real-time updates",
            "Implemented virtual scrolling",
            "Created efficient filtering algorithm"
        ],
        github: "https://github.com/xhackerino/analytics-dashboard",
        demo: "https://analytics.example.com",
        hasDemo: true,
        image: "assets/jpg/my-photo.jpg"
    }
];

// About Me Data
const aboutMeData = {
    whoIAm: "I'm a passionate software engineer with a love for building scalable, user-friendly applications. I enjoy solving complex problems and turning ideas into reality through code.",
    whatIDo: "I specialize in full-stack development, focusing on modern web technologies, cloud infrastructure, and creating seamless user experiences. I work on everything from frontend interfaces to backend APIs and DevOps automation.",
    mission: "To build software that makes a positive impact, whether it's improving user experiences, solving business problems, or contributing to open-source projects that help the developer community.",
    values: [
        "Code quality and maintainability",
        "User-centric design",
        "Continuous learning",
        "Collaboration and knowledge sharing",
        "Transparency and honesty"
    ],
    strengths: [
        "Problem-solving and analytical thinking",
        "Full-stack development expertise",
        "System architecture and design",
        "Team collaboration",
        "Fast learner and adaptable"
    ],
    languages: [
        { name: "English", level: "Native" },
        { name: "Finnish", level: "Fluent" },
        { name: "Russian", level: "Native" },
        { name: "German", level: "Intermediate" }
    ],
    experience: [
        {
            role: "Software Engineer",
            company: "Tech Company",
            period: "2022 - Present",
            description: "Building scalable web applications and microservices"
        },
        {
            role: "Full-Stack Developer",
            company: "Startup Inc",
            period: "2020 - 2022",
            description: "Developed MVP and scaled to production"
        }
    ]
};

// Public Keys Data
const publicKeysData = {
    ssh: {
        key: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC...",
        fingerprint: "SHA256:example123",
        comment: "rakin@macbook"
    },
    gpg: {
        keyId: "0x1234567890ABCDEF",
        fingerprint: "ABCD 1234 5678 90AB CDEF 1234 5678 90AB CDEF 1234",
        email: "rakinilia@gmail.com"
    }
};

