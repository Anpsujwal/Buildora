import type { ProjectItem, ServiceItem, TechCategory, ProcessStep, ValueProp } from '../types';

export const siteConfig = {
  brand: {
    name: 'Buildora',
    tagline: 'Your Idea. Our Build. Your Breakthrough.',
    heroHeadline: 'From Project Ideas to Real-World Solutions.',
    heroEyebrow: 'YOUR IDEAS, BUILT BETTER.',
    heroDescription:
      'Need a web application, an AI/ML project, a professional presentation, or complete project documentation? Buildora helps turn your requirements into polished technical deliverables.',
    serviceLine: 'Full-Stack Development · AI/ML · Presentations · Documentation',
    targetAudience: 'College & University Students',
    primaryTheme: 'Dark',
    footerTagline: 'Built around your ideas.',
    contactEmail: 'ananthujwal28@gmail.com',
  },

  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],

  services: [
    {
      id: 'project-development',
      title: 'Project Development',
      description:
        'Turn your ideas into working applications and technical prototypes built around your requirements.',
      iconName: 'Code2',
      capabilities: [
        'Mini-projects and final-year project prototypes',
        'Full-stack web applications',
        'Custom interactive dashboards',
        'AI & machine learning projects',
        'Predictive modeling & forecasting',
        'NLP applications & AI-powered solutions',
        'REST APIs and backend systems',
        'Database integration & schema design',
        'Software prototypes & POCs',
      ],
      ctaLabel: 'Inquire About Development',
    },
    {
      id: 'research-papers',
      title: 'Research Papers & IEEE',
      description:
        'Get support in structuring, writing, and presenting technical research papers for academic and publication purposes.',
      iconName: 'BookOpen',
      capabilities: [
        'Research paper writing & structuring',
        'IEEE-format paper preparation',
        'Literature reviews & related work',
        'Research methodology & problem formulation',
        'Results analysis & visualization',
        'Technical paper editing & formatting',
        'Abstract, keywords & reference formatting',
        'Research presentations & paper explanations',
      ],
      ctaLabel: 'Inquire About Research Papers',
    },
    {
      id: 'presentations-reports',
      title: 'Presentations & Reports',
      description:
        'Present your work with clear, professional, well-structured project materials.',
      iconName: 'Presentation',
      capabilities: [
        'High-impact PowerPoint presentations',
        'Structured project proposals',
        'Comprehensive technical reports',
        'Project synopsis & abstracts',
        'System architecture slide decks',
        'Viva & demo presentation guides',
      ],
      ctaLabel: 'Inquire About Presentations',
    },
    {
      id: 'documentation-support',
      title: 'Documentation & Technical Support',
      description:
        'Make your project easier to understand, demonstrate, maintain, and present.',
      iconName: 'FileText',
      capabilities: [
        'Detailed project documentation',
        'Polished README files & guides',
        'Step-by-step setup instructions',
        'Technical architecture diagrams',
        'API documentation & endpoints list',
        'Project handover & demonstration notes',
      ],
      ctaLabel: 'Inquire About Documentation',
    },
  ] as ServiceItem[],

  projects: [
    {
      id: 'shopsphere',
      name: 'ShopSphere',
      category: 'MERN Stack',
      status: 'Prototype',
      description:
        'A modern e-commerce application concept with product listings, user authentication, cart management, and an administrative dashboard.',
      fullOverview:
        'ShopSphere is a full-stack e-commerce prototype engineered using the MERN stack. Designed with a modular architecture, it incorporates a responsive shopper catalog, cart synchronization, role-based authentication flows, and an intuitive merchant management console.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
      keyFeatures: [
        'Dynamic product catalog with filtering & search',
        'Stateful cart & session persistence',
        'Role-based user and admin authentication',
        'Admin inventory & order tracking management panel',
      ],
      architectureSummary:
        'Client-side SPA built with React querying Express REST endpoints backed by MongoDB schemas for users, products, and checkout states.',
      mockupType: 'ecommerce',
      disclaimerNote: 'Prototype concept demonstrating full-stack store architecture.',
    },
    {
      id: 'edupredict',
      name: 'EduPredict',
      category: 'AI/ML',
      status: 'Prototype',
      description:
        'A machine learning prototype that estimates student performance using sample academic data and interpretable model outputs.',
      fullOverview:
        'EduPredict is an applied machine learning demo that processes historic student performance indicators (study hours, attendance metrics, quiz scores) to provide predictive grade estimates and targeted diagnostic feedback.',
      technologies: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Streamlit', 'Chart.js'],
      keyFeatures: [
        'Sample academic dataset preprocessing & scaling',
        'Interactive feature input & prediction interface',
        'Multiple regression & decision tree comparison',
        'Visualized metric breakdowns and factor importance',
      ],
      architectureSummary:
        'Python analytical pipeline leveraging scikit-learn pipelines with an interactive web UI exposing prediction inference and metric charts.',
      mockupType: 'analytics',
      disclaimerNote: 'Prototype concept demonstrating predictive modeling algorithms.',
    },
    {
      id: 'querybot',
      name: 'QueryBot',
      category: 'AI/ML',
      status: 'Concept',
      description:
        'A conversational AI assistant concept that answers questions from a supplied knowledge base.',
      fullOverview:
        'QueryBot showcases conversational knowledge retrieval by simulating document chunking, semantic matching, and prompt templating to answer contextual queries over student course materials or technical documentation.',
      technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'LLM API Concept', 'Tailwind CSS'],
      keyFeatures: [
        'Streamlined conversational chat interface',
        'Knowledge-based answer synthesis simulation',
        'Session-based query history & context tracking',
        'Configurable domain source previews & reference tags',
      ],
      architectureSummary:
        'React frontend communicating with a FastAPI service providing query routing, context grounding, and simulated response synthesis.',
      mockupType: 'chat',
      disclaimerNote: 'Interactive concept prototype. Production LLM keys are configured per user deployment.',
    },
    {
      id: 'spendwise',
      name: 'SpendWise',
      category: 'MERN Stack',
      status: 'Concept',
      description:
        'A personal finance dashboard concept for managing expenses, organizing spending categories, and reviewing monthly budgets.',
      fullOverview:
        'SpendWise is an intuitive personal budgeting and expense tracking dashboard concept. It structures income and expenditure transactions, organizes them into categorized spending insights, and renders dynamic fiscal breakdowns.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
      keyFeatures: [
        'Daily and recurring expense logging',
        'Category breakdown with interactive visual charts',
        'Monthly budget progress indicators & savings targets',
        'Filterable ledger with instant transaction lookup',
      ],
      architectureSummary:
        'Modular Express/MongoDB backend providing aggregation pipelines for monthly summaries, consumed by reactive client charts.',
      mockupType: 'finance',
      disclaimerNote: 'Concept interface for personal financial management systems.',
    },
    {
      id: 'docuflow',
      name: 'DocuFlow',
      category: 'Web Development',
      status: 'Concept',
      description:
        'A document management application concept for organizing project reports, PDFs, technical resources, and supporting files.',
      fullOverview:
        'DocuFlow explores structured asset organization for technical teams and academic submissions. It offers file cataloging, tag-based categorization, status tracking, and metadata inspection.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
      keyFeatures: [
        'Project file directory and folder taxonomy',
        'Metadata extraction, version flags, and file tagging',
        'Instant search, filtering, and preview drawers',
        'Submission readiness status tracker',
      ],
      architectureSummary:
        'RESTful file metadata storage in MongoDB with grid-based asset presentation and responsive file preview states.',
      mockupType: 'docflow',
      disclaimerNote: 'Concept demonstration of structured technical documentation indexing.',
    },
    {
      id: 'sentimentiq',
      name: 'SentimentIQ',
      category: 'AI/ML',
      status: 'Prototype',
      description:
        'A natural language processing demo that analyzes sample reviews and categorizes their sentiment as positive, neutral, or negative.',
      fullOverview:
        'SentimentIQ is an NLP demonstration that parses text feedback, conducts lexical preprocessing and tokenization, and computes polarity scores with confidence distributions.',
      technologies: ['Python', 'NLP', 'scikit-learn', 'Streamlit', 'React'],
      keyFeatures: [
        'Real-time text input analysis and sentiment categorization',
        'Sample review batch evaluation with instant grading',
        'Polarity breakdown charts (Positive, Neutral, Negative)',
        'Key token influence and sentiment driver highlighting',
      ],
      architectureSummary:
        'Text vectorization and classification model exposing inference scores to a responsive visual dashboard.',
      mockupType: 'sentiment',
      disclaimerNote: 'Applied NLP demonstration prototype with pre-trained evaluation pipelines.',
    },
    {
      id: 'cloudvault',
      name: 'CloudVault',
      category: 'Decentralized Systems',
      status: 'Prototype',
      description:
        'A decentralized cloud storage platform concept exploring distributed file storage, file integrity verification, encryption, and user-controlled file access.',
      fullOverview:
        'CloudVault demonstrates the principles of decentralized web architecture. It showcases content-addressable storage concepts, SHA-256 cryptographic verification hashes, simulated IPFS gateway routing, and client-controlled file permission cards.',
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'IPFS Concept',
        'Cryptography',
        'Web3 Protocols',
      ],
      keyFeatures: [
        'File upload queue & storage allocation monitoring',
        'Cryptographic hash generation (SHA-256 / CID) verification',
        'Decentralized storage node network simulation',
        'Access key authorization and user privacy management',
      ],
      architectureSummary:
        'Client-side cryptographic hash computation connected to simulated distributed storage daemon nodes with verifiable content IDs.',
      mockupType: 'web3storage',
      disclaimerNote:
        'Decentralized storage prototype. Storage nodes are simulated for demonstration without external chain gas fees.',
    },
  ] as ProjectItem[],

  technologies: [
    {
      title: 'Frontend Development',
      description: 'Creating responsive, accessible, and high-performance interfaces.',
      technologies: [
        { name: 'HTML5', tag: 'Structure' },
        { name: 'CSS3', tag: 'Styling' },
        { name: 'JavaScript', tag: 'Language' },
        { name: 'TypeScript', tag: 'Type-Safe' },
        { name: 'React', tag: 'Component UI' },
        { name: 'Tailwind CSS', tag: 'Design System' },
      ],
    },
    {
      title: 'Backend Development',
      description: 'Building robust APIs, logic pipelines, and server architectures.',
      technologies: [
        { name: 'Node.js', tag: 'Runtime' },
        { name: 'Express', tag: 'Web Framework' },
        { name: 'Python', tag: 'Language' },
        { name: 'FastAPI', tag: 'Async API' },
        { name: 'REST APIs', tag: 'Protocols' },
      ],
    },
    {
      title: 'Databases & Storage',
      description: 'Organizing relational and document data with high integrity.',
      technologies: [
        { name: 'MongoDB', tag: 'NoSQL' },
        { name: 'PostgreSQL', tag: 'Relational' },
        { name: 'MySQL', tag: 'SQL' },
      ],
    },
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Implementing predictive models, NLP algorithms, and data workflows.',
      technologies: [
        { name: 'Python', tag: 'AI Core' },
        { name: 'NumPy', tag: 'Computation' },
        { name: 'Pandas', tag: 'Dataframes' },
        { name: 'scikit-learn', tag: 'ML Models' },
        { name: 'TensorFlow', tag: 'Deep Learning' },
        { name: 'PyTorch', tag: 'Neural Nets' },
        { name: 'NLP', tag: 'Text Analysis' },
        { name: 'LLM Integrations', tag: 'API Workflows' },
      ],
    },
    {
      title: 'Cloud & Decentralized Technologies',
      description: 'Exploring content addressing, distributed networks, and modern cloud concepts.',
      technologies: [
        { name: 'IPFS', tag: 'Distributed' },
        { name: 'Blockchain Fundamentals', tag: 'Web3' },
        { name: 'Solidity', tag: 'Smart Contracts' },
        { name: 'Smart Contracts', tag: 'Logic' },
        { name: 'Cloud Storage Concepts', tag: 'Storage' },
      ],
    },
    {
      title: 'Developer Tools & Workflows',
      description: 'Standard tooling for code management, analysis, and interface prototyping.',
      technologies: [
        { name: 'Git', tag: 'Version Control' },
        { name: 'GitHub', tag: 'Repositories' },
        { name: 'VS Code', tag: 'IDE' },
        { name: 'Jupyter Notebook', tag: 'Data Science' },
        { name: 'Figma', tag: 'UI Prototyping' },
      ],
    },
  ] as TechCategory[],

  processSteps: [
    {
      number: '01',
      title: 'Tell Us Your Idea',
      description:
        'Share your project requirements, preferred technologies, expected deliverables, and timeline.',
      iconName: 'Lightbulb',
    },
    {
      number: '02',
      title: 'Plan the Approach',
      description:
        'We clarify the scope, identify a suitable technology stack, and agree on the deliverables.',
      iconName: 'Compass',
    },
    {
      number: '03',
      title: 'Build and Deliver',
      description:
        'We develop the agreed solution and provide the relevant source files, documentation, and handover instructions.',
      iconName: 'Rocket',
    },
  ] as ProcessStep[],

  whyBuildora: [
    {
      id: 'requirement-focused',
      title: 'Requirement-Focused',
      description:
        'Solutions planned around your actual requirements rather than unnecessary complexity.',
      iconName: 'Target',
    },
    {
      id: 'clear-documentation',
      title: 'Clear Documentation',
      description:
        'Understand how your project works with structured documentation and setup instructions.',
      iconName: 'FileCheck',
    },
    {
      id: 'technology-flexibility',
      title: 'Technology Flexibility',
      description:
        'Choose suitable tools and frameworks based on your specific project goals.',
      iconName: 'Layers',
    },
    {
      id: 'presentation-ready',
      title: 'Presentation-Ready Deliverables',
      description:
        'Get organized outputs that are easier to demonstrate, explain, and maintain.',
      iconName: 'Sparkles',
    },
  ] as ValueProp[],

  contactForm: {
    serviceOptions: [
      'Project Development',
      'MERN / Full-Stack Development',
      'AI / Machine Learning',
      'Decentralized Cloud Storage',
      'Presentation / PPT',
      'Documentation',
      'Other',
    ],
  },
};
