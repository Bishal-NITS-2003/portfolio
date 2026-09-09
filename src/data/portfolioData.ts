export interface Project {
  id: string;
  title: string;
  tagline: string;
  category?: string;
  technologies?: string;
  description: string;
  gifUrl: string;
  image?: string;
  tags: string[];
  metrics: string[];
  githubUrl: string;
  liveUrl?: string;
  architectureNotes?: string[];
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'cloud' | 'core_cs';
  level: string;
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Open Source' | 'College Club';
  description: string[];
  techStack: string[];
}

export interface CodingProfile {
  platform: string;
  handle: string;
  metrics: { label: string; value: string }[];
  profileUrl: string;
  accentColor: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerBadge: string;
  image?: string;
  issueDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
  accentColor?: string;
  level?: string;
}

export const portfolioData = {
  personal: {
    name: "Bishal Das", // Put your name here (e.g., Bishal or Rahul)
    signature: "@bishalnits27", // Signature in the top navbar
    title: "Final Year Student at NIT Silchar | Aspiring Software Engineer",
    roleHighlight: "NIT Silchar • Mechanical to Software",
    subheading: "I am a final-year Mechanical Engineering student at NIT Silchar. Even though my branch is mechanical, coding is what I truly enjoy doing every day. I love building backend systems, solving DSA problems, and creating useful web apps.",
    bio: "I taught myself computer science fundamentals alongside my college coursework. I spend most of my free time writing code, building personal projects, and preparing for full-time Software Engineer (SDE) roles.",
    status: "Looking for full-time Software Engineer Roles (2027 batch)",
    location: "NIT Silchar, Assam • Ready to relocate anywhere",
    college: "National Institute of Technology Silchar (NIT Silchar)",
    branch: "B.Tech in Mechanical Engineering (2023 — 2027)",
    email: "dasbishal1717@gmail.com", // Put your email here
    resumeUrl: "https://drive.google.com/file/d/1Gjit5YEZPnwvKzY3eBBdMIi101lzxOGw/view", // Link to your resume PDF
    socials: {
      github: "https://github.com/Bishal-NITS-2003",
      linkedin: "https://www.linkedin.com/in/bishalnits27",
      leetcode: "https://leetcode.com",
      facebook: "https://www.facebook.com/bishalnits27",
      portfolio: "#"
    },
    heroImageNoBg: "/images/hero-portrait-nobg.png",
  },

  education: {
    institution: "National Institute of Technology Silchar (NIT Silchar)",
    degree: "B.Tech in Mechanical Engineering",
    duration: "2023 — 2027 (Final Year)",
    cgpa: "8.23/10",
    statusNote: "Institute of National Importance",
    storyHeading: "My Journey into Software",
    story: "When I joined NIT Silchar for Mechanical Engineering, I took an introductory programming class and loved it. I realized that writing code gives you the ability to build something from scratch and see it work right away. Since then, I have been teaching myself Data Structures, Algorithms, Web Development, and System Design on my own through books, documentation, and online courses.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++ / Java)",
      "Database Management Systems (SQL)",
      "Operating Systems Basics",
      "Computer Networks Basics",
      "Web Development (Full Stack)",
      "System Design Concepts",
      "Engineering Mathematics"
    ],
    highlights: [
      { label: "College", value: "NIT Silchar" },
      { label: "Projects Built", value: "10+ Apps" },
      { label: "Focus", value: "Backend & Systems" }
    ]
  },

  heroTechBadges: [
    { name: "Python", icon: "/skills/python.svg", color: "#3776AB", bg: "rgba(55, 118, 171, 0.15)" },
    { name: "JavaScript", icon: "/skills/js.png", color: "#3178C6", bg: "rgba(49, 120, 198, 0.15)" },
    { name: "React", icon: "/skills/react.png", color: "#61DAFB", bg: "rgba(97, 218, 251, 0.15)" },
    { name: "Next.js", icon: "/skills/next.png", color: "#3178C6", bg: "rgba(49, 120, 198, 0.15)" },
    { name: "Node.js", icon: "/skills/node.png", color: "#68A063", bg: "rgba(104, 160, 99, 0.15)" },
    { name: "MongoDB", icon: "/skills/mongodb.png", color: "#2F4434", bg: "rgba(47, 68, 52, 0.15)" },
    { name: "PostgreSQL", icon: "/skills/postgresql.png", color: "#4169E1", bg: "rgba(65, 105, 225, 0.15)" }
  ],

  skills: [
    // Languages
    { name: "C++", category: "languages", level: "Primary language for DSA", icon: "Cpp" },
    { name: "Python", category: "languages", level: "Scripting & Backend", icon: "Python" },
    { name: "TypeScript", category: "languages", level: "Type-safe Web Apps", icon: "TypeScript" },
    { name: "JavaScript", category: "languages", level: "Modern ES6+", icon: "JavaScript" },
    { name: "SQL", category: "languages", level: "Database Queries", icon: "SQL" },

    // Frontend
    { name: "React.js", category: "frontend", level: "Components & Hooks", icon: "React" },
    { name: "Next.js", category: "frontend", level: "App Router & SSR", icon: "Next" },
    { name: "Tailwind CSS", category: "frontend", level: "Responsive Styling", icon: "Tailwind" },
    { name: "HTML", category: "frontend", level: "Clean page structure", icon: "HTML" },
    { name: "CSS", category: "frontend", level: "Clean page structure", icon: "CSS" },
    { name: "Redux", category: "frontend", level: "State Management", icon: "State" },
    { name: "Zustand", category: "frontend", level: "State Management", icon: "State" },
    { name: "WebSockets", category: "frontend", level: "Real-time updates", icon: "Realtime" },

    // Backend
    { name: "Node.js & Express", category: "backend", level: "REST API Development", icon: "Node" },
    { name: "FastAPI", category: "backend", level: "Python APIs", icon: "Python" },
    { name: "REST APIs", category: "backend", level: "CRUD, Auth & JSON", icon: "API" },
    { name: "Microservices", category: "backend", level: "Modular services", icon: "Architecture" },
    { name: "JWT & Auth", category: "backend", level: "Login & Protected routes", icon: "Network" },

    // Cloud & DevOps
    { name: "Docker", category: "cloud", level: "Containers & Dockerfiles", icon: "Docker" },
    { name: "AWS Basics", category: "cloud", level: "S3, EC2 & RDS", icon: "AWS" },
    { name: "Git & GitHub", category: "cloud", level: "Version control & PRs", icon: "Git" },
    { name: "Linux Basics", category: "cloud", level: "Terminal & Shell commands", icon: "Linux" },
    { name: "GitHub Actions", category: "cloud", level: "Simple CI/CD pipelines", icon: "CICD" },

    // Databases & Core CS
    { name: "PostgreSQL", category: "core_cs", level: "Relational tables & keys", icon: "Postgres" },
    { name: "MongoDB", category: "core_cs", level: "NoSQL document storage", icon: "Mongo" },
    { name: "Data Structures", category: "core_cs", level: "Arrays, Trees, Graphs, DP", icon: "System" },
    { name: "Object Oriented Design", category: "core_cs", level: "Clean code & classes", icon: "OOP" }
  ] as SkillItem[],

  projects: [
    {
      id: "project-1",
      title: "PulseStream",
      tagline: "A real-time pub-sub message broker built with Go",
      category: "Distributed Systems / Go",
      technologies: "Go, Redis, Docker, WebSockets, Concurrency",
      description: "I built this project to understand how message systems like Apache Kafka work under the hood. It allows different services to publish and subscribe to topics with disk persistence, so messages are not lost if a server restarts.",
      gifUrl: "",
      image: "/images/project-distributed.jpg",
      tags: ["Go", "Redis", "Docker", "WebSockets"],
      metrics: [
        "Tested with over 10,000 messages per second on a local machine",
        "Fast response times (under 5 milliseconds on average)",
        "Stores logs safely to disk before acknowledging"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.example.com",
      architectureNotes: [
        "Uses Go goroutines and channels to handle concurrent incoming connections.",
        "Saves incoming messages to append-only log files on disk.",
        "Includes a simple real-time web dashboard using WebSockets to monitor queue traffic."
      ],
      featured: true
    },
    {
      id: "project-2",
      title: "CodeCollab",
      tagline: "An online editor where multiple people can type together in real time",
      category: "Full Stack / WebSockets",
      technologies: "Next.js, TypeScript, WebSockets, Docker, Monaco Editor",
      description: "A web-based code editor similar to Google Docs, but made for programmers. Multiple users can open the same file, see each other's live cursors, and edit code at the same time without overwriting each other.",
      gifUrl: "",
      image: "/images/project-editor.jpg",
      tags: ["Next.js", "TypeScript", "WebSockets", "Docker", "Tailwind CSS"],
      metrics: [
        "Instant text sync between users with almost zero noticeable delay",
        "Safe code execution sandbox using Docker containers",
        "Includes syntax highlighting for C++, Python, and JavaScript"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.example.com",
      architectureNotes: [
        "Uses conflict-free data types (CRDTs) over WebSockets so concurrent edits merge cleanly.",
        "Runs user submitted code inside temporary, isolated Docker containers to keep the server secure.",
        "Integrated the Monaco Editor (the same editor engine used in VS Code)."
      ],
      featured: true
    },
    {
      id: "project-3",
      title: "DevAudit",
      tagline: "A tool that scans pull requests for common bugs and security issues",
      category: "DevOps & Security / Python",
      technologies: "Python, FastAPI, PostgreSQL, GitHub API, React, AST Analysis",
      description: "A developer tool that connects to GitHub repositories. Whenever someone opens a pull request, it automatically inspects the code changes, spots common bugs (like SQL injection or memory leaks), and posts helpful suggestions in the PR comments.",
      gifUrl: "",
      tags: ["Python", "FastAPI", "PostgreSQL", "GitHub API", "React"],
      metrics: [
        "Scanned and analyzed over 100 sample pull requests during testing",
        "Flags missing input checks, hardcoded secrets, and syntax issues",
        "Takes less than 15 seconds to finish reviewing a typical pull request"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.example.com",
      architectureNotes: [
        "Listens for GitHub webhook events whenever a new pull request is opened or updated.",
        "Parses code into syntax trees to detect dangerous patterns before running AI checks.",
        "Includes a clean web dashboard where developers can see their repository review history."
      ],
      featured: true
    },
    {
      id: "project-4",
      title: "CloudVault",
      tagline: "A web app for securely storing and sharing your files",
      category: "Cloud & Cryptography",
      technologies: "TypeScript, Node.js, Web Crypto API, AWS S3, PostgreSQL, Docker",
      description: "A simple cloud storage service where files are encrypted right inside your web browser before they are uploaded. This means even the server administrator cannot read your stored documents.",
      gifUrl: "",
      tags: ["TypeScript", "Node.js", "AWS S3", "PostgreSQL", "Docker"],
      metrics: [
        "Encrypts files locally with AES-256 before upload",
        "Supports large file uploads by splitting them into small chunks",
        "Files can be securely downloaded and decrypted anytime"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.example.com",
      architectureNotes: [
        "Uses the browser's Web Crypto API to generate encryption keys that never leave the user's computer.",
        "Uploads file chunks directly to AWS S3 using secure presigned URLs.",
        "Stores file metadata and sharing permissions in a PostgreSQL database."
      ],
      featured: false
    },
    {
      id: "project-5",
      title: "AlgoSphere",
      tagline: "Visual simulation engine for graph, tree and sorting algorithms",
      category: "Algorithms & Simulation",
      technologies: "C++, WebAssembly, React, TypeScript, Canvas 2D, Framer Motion",
      description: "An interactive computer science tool built to visualize complex data structures and algorithms step-by-step. Allows students to step forward and backward through recursion trees, graph traversals, and dynamic programming tables.",
      gifUrl: "",
      tags: ["C++", "WebAssembly", "TypeScript", "React", "Canvas API"],
      metrics: [
        "Interactive step debugger for Dijkstra, A*, and Tree balancing",
        "Runs compiled C++ core logic via WebAssembly for fast calculation",
        "Smooth 60 FPS hardware accelerated visual animations"
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.example.com",
      architectureNotes: [
        "Core graph algorithms written in modern C++ and compiled to Wasm.",
        "State playback engine allows scrubbable forward and reverse time-travel execution.",
        "Adaptive canvas rendering scales gracefully across mobile and 4K displays."
      ],
      featured: true
    }
  ] as Project[],

  experience: [
    {
      id: "exp-1",
      role: "Software Engineering Intern",
      company: "TechScale Solutions",
      location: "Remote",
      period: "May 2024 — Aug 2024",
      type: "Internship",
      description: [
        "Worked with the backend team to build and maintain REST APIs using Go and Node.js.",
        "Made slow database queries faster by adding Redis caching and setting up proper database indexes.",
        "Wrote unit tests and helped set up automated testing in GitHub Actions before code gets merged."
      ],
      techStack: ["Go", "PostgreSQL", "Redis", "Docker", "Git"]
    },
    {
      id: "exp-2",
      role: "Open Source Contributor",
      company: "Open Source Projects",
      location: "Remote",
      period: "Jan 2024 — Apr 2024",
      type: "Open Source",
      description: [
        "Contributed bug fixes and documentation improvements to open source TypeScript and C++ projects on GitHub.",
        "Learned how to read large unfamiliar codebases, follow existing coding styles, and work with maintainers through pull requests.",
        "Added unit tests to improve code coverage and catch edge case bugs."
      ],
      techStack: ["TypeScript", "C++", "Jest", "Git", "GitHub"]
    },
    {
      id: "exp-3",
      role: "Coding Club Lead & Mentor",
      company: "Coding Club, NIT Silchar",
      location: "NIT Silchar Campus",
      period: "Aug 2023 — Present",
      type: "College Club",
      description: [
        "Helped first and second-year college students get started with basic programming and data structures in C++.",
        "Helped organize intra-college coding contests and weekend hackathons on campus.",
        "Shared resources and roadmaps for students from non-CS branches who want to learn software engineering."
      ],
      techStack: ["C++", "Data Structures", "Mentoring", "Git"]
    }
  ] as Experience[],

  codingProfiles: [
    {
      platform: "LeetCode",
      handle: "your_handle",
      metrics: [
        { label: "Problems Solved", value: "650+" },
        { label: "Contest Rating", value: "1900+ (Knight)" },
        { label: "Ranking", value: "Top 5%" }
      ],
      profileUrl: "https://leetcode.com",
      accentColor: "#FFA116"
    },
    {
      platform: "GitHub",
      handle: "your_username",
      metrics: [
        { label: "Commits (2024)", value: "1,200+" },
        { label: "Repositories", value: "25+" },
        { label: "Active Days", value: "Consistent" }
      ],
      profileUrl: "https://github.com",
      accentColor: "#3b82f6"
    },
    {
      platform: "Codeforces",
      handle: "your_cf_handle",
      metrics: [
        { label: "Max Rating", value: "1550+ (Specialist)" },
        { label: "Contests", value: "30+" },
        { label: "Solved", value: "350+" }
      ],
      profileUrl: "https://codeforces.com",
      accentColor: "#ef4444"
    }
  ] as CodingProfile[],

  certificates: [
    {
      id: "cert-1",
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      issuerBadge: "AWS",
      image: "/certificates/cert-1.jpg",
      credentialUrl: "https://aws.amazon.com/certification/",
      accentColor: "#FF9900"
    },
    {
      id: "cert-2",
      title: "Meta Front-End Developer Professional Certificate",
      issuer: "Meta",
      issuerBadge: "META",
      image: "/certificates/cert-2.jpg",
      credentialUrl: "https://www.coursera.org",
      accentColor: "#0081FB"
    },
    {
      id: "cert-3",
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI & Stanford Online",
      issuerBadge: "AI",
      image: "/certificates/cert-3.jpg",
      credentialUrl: "https://deeplearning.ai",
      accentColor: "#C084FC"
    },
    {
      id: "cert-4",
      title: "Data Structures & Algorithms in C++",
      issuer: "Coding Ninjas",
      issuerBadge: "DSA",
      image: "/certificates/cert-4.jpg",
      credentialUrl: "https://codingninjas.com",
      accentColor: "#10B981"
    },
    {
      id: "cert-5",
      title: "Docker & Container Orchestration",
      issuer: "Cloud Native Computing Foundation",
      issuerBadge: "DOCKER",
      image: "/certificates/cert-5.jpg",
      credentialUrl: "https://docker.com",
      accentColor: "#2496ED"
    },
    {
      id: "cert-6",
      title: "PostgreSQL & Relational Database Design",
      issuer: "University of Michigan",
      issuerBadge: "SQL",
      image: "/certificates/cert-6.jpg",
      credentialUrl: "https://coursera.org",
      accentColor: "#A855F7"
    }
  ] as Certificate[]
};
