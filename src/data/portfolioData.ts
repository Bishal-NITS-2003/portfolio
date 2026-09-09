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
    roleHighlight: "NIT Silchar • Aspiring Software Engineer",
    subheading: "I am an undergraduate student at NIT Silchar passionate about software development. I love building backend systems, solving DSA problems, and creating fast, scalable web applications.",
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
      title: "E-Cell NIT Silchar - Official Website",
      tagline: "The official website for the Entrepreneurship Cell of NIT Silchar, providing resources, event updates, and startup support for students.",
      category: "Full Stack Web Application",
      technologies: "Next.js, TypeScript, Tailwind CSS, Express.js, Prisma ORM, MongoDB",
      description: "Built the official website for E-Cell NIT Silchar, the central hub for all entrepreneurship activities on campus. The platform features event management, startup showcases, and member dashboards.",
      gifUrl: "/projects/ecell.gif",
      image: "/images/project-distributed.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js", "Prisma ORM", "MongoDB"],
      metrics: [
        "Official platform for the Entrepreneurship Cell of NIT Silchar",
        "Processed 50+ event registrations and 20+ startup submissions in the first semester",
        "Modern, responsive design with smooth animations and intuitive navigation"
      ],
      githubUrl: "https://github.com/Ecell-NITS/ecell-website-2026",
      liveUrl: "https://www.ecellnits.org",
      architectureNotes: [
        "Uses Next.js App Router with server components for SEO-friendly content display",
        "Tailwind CSS for rapid UI development and responsive design across devices",
        "Prisma ORM for type-safe database interactions with MongoDB backend",
      ],
      featured: true
    },
    {
      id: "project-2",
      title: "SentinelTraffic",
      tagline: "Automated Traffic Violation Detection",
      category: "",
      technologies: "Python, FastAPI, PostgreSQL, YOLOv8, OpenCV",
      description: "An automated traffic violation detection system that uses deep learning to identify vehicles and detect traffic rule violations. The system is built with a focus on security, transparency, and user experience.",
      gifUrl: "/projects/sentinel.png",
      image: "/projects/sentinel.png",
      tags: ["Python", "FastAPI", "PostgreSQL", "YOLOv8", "OpenCV"],
      metrics: [
        "Detects and reports traffic violations using AI-powered computer vision",
        "Real-time processing with low latency",
        "Secure and transparent violation tracking"
      ],
      githubUrl: "https://github.com/Bishal-NITS-2003/SentinelTraffic",
      liveUrl: "https://sentinel-traffic.vercel.app",
      architectureNotes: [
        ""
      ],
      featured: true
    },
    {
      id: "project-3",
      title: "ReelReviews",
      tagline: "Discover, Rate, and Review Movies & Series",
      category: "",
      technologies: "React, Javascript, TailwindCSS, Firebase, TMDB API",
      description: "A website that allows users to discover, rate, and review movies and TV shows. Users can also create watchlists and share their reviews with friends.",
      gifUrl: "/projects/movie.png",
      image: "/projects/movie.png",
      tags: ["React", "Javascript", "TailwindCSS", "Firebase", "TMDB API"],
      metrics: [
        ""
      ],
      githubUrl: "https://github.com/Bishal-NITS-2003/movie-website",
      liveUrl: "https://movie-website-six-liart.vercel.app/",
      architectureNotes: [
        ""
      ],
      featured: true
    },
    {
      id: "project-4",
      title: "PRB: Pause, Reflect, Breathe",
      tagline: "AI-Based Mental Wellness Monitoring Platform",
      category: "",
      technologies: "Next.js, TypeScript, MongoDB, WebRTC, MediaRecorder API, OpenAI API",
      description: "A mental wellness monitoring platform that helps users track their mood and identify potential risks using AI-powered voice analysis. Users can record voice notes, and the system analyzes sentiment, tone, and keywords to provide insights and suggest coping strategies.",
      gifUrl: "/projects/prb.png",
      tags: ["Next.js", "TypeScript", "MongoDB", "WebRTC", "MediaRecorder API", "OpenAI API"],
      metrics: [
        "Analyzes voice recordings using OpenAI API to detect emotional patterns",
        "Provides personalized mental wellness insights and coping strategies",
        "Tracks mood trends over time with visualizations and reporting"
      ],
      githubUrl: "https://github.com/Bishal-NITS-2003/suicide-prevention-app",
      liveUrl: "https://suicide-prevention-app.vercel.app",
      architectureNotes: [
        ""
      ],
      featured: false
    },
    {
      id: "project-5",
      title: "Incandescence 2025 - Website",
      tagline: "The Official Website for the largest socio-cultural festival of NIT Silchar",
      category: "",
      technologies: "Next.js, TypeScript, TailwindCSS, MongoDB",
      description: "The official website for Incandescence 2025, the largest socio-cultural festival of NIT Silchar. The website features event management, team showcases, and a modern, responsive design with smooth animations and intuitive navigation.",
      gifUrl: "/projects/incand.gif",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "MongoDB"],
      metrics: [
        ""
      ],
      githubUrl: "https://github.com/Bishal-NITS-2003/incand-2025",
      liveUrl: "https://incand-2025-kappa.vercel.app",
      architectureNotes: [
        ""
      ],
      featured: false
    },
    {
      id: "project-6",
      title: "NoScalp",
      tagline: "Event Ticketing decentralized web app",
      category: "Blockchain & Web3",
      technologies: "Next.js, TypeScript, Tailwind CSS, Framer Motion",
      description: "A web-based event ticketing platform that eliminates the need for traditional ticketing agencies. It allows event organizers to create and manage events, and attendees to purchase tickets using cryptocurrency. The platform is built with a focus on security, transparency, and user experience.",
      gifUrl: "/projects/noscalp.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      metrics: [
        ""
      ],
      githubUrl: "https://github.com/Bishal-NITS-2003/noscalp",
      liveUrl: "https://noscalp.vercel.app",
      architectureNotes: [
        ""
      ],
      featured: true
    }
  ] as Project[],

  experience: [
    {
      id: "exp-1",
      role: "Technical Head",
      company: "ECELL - NIT Silchar",
      location: "NIT Silchar",
      period: "July 2025 — June 2026",
      type: "College Club",
      description: [
        "Led and mentored the technical team, overseeing project planning, development, and deployment processes.",
        "Led the development of the ECELL-NIT Silchar's website with a new and improved UI/UX.",
      ],
      techStack: ["React", "Typescript", "Next.js", "Express", "Git", "MongoDB"]
    },
    {
      id: "exp-2",
      role: "Web Head",
      company: "Incandescence - NIT Silchar",
      location: "NIT Silchar",
      period: "Dec 2025 — Feb 2026",
      type: "College Festival",
      description: [
        "Led and mentored the technical team, overseeing project planning, development, and deployment processes.",
        "Led the development of the Incandescence 2026 website with a new and improved UI/UX.",
      ],
      techStack: ["Next.js", "TypeScript", "TailwindCSS", "Express" ,"Firebase"]
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
      title: "Crash Course on Python",
      issuer: "Google",
      issuerBadge: "Google",
      image: "/certificates/python.png",
      credentialUrl: "https://coursera.org/share/edaa7a98ffd4909bb068397f7304664c",
      accentColor: "#FF9900"
    },
    {
      id: "cert-2",
      title: "The Complete 2024 Web Development Bootcamp",
      issuer: "Udemy",
      issuerBadge: "Udemy",
      image: "/certificates/development.png",
      credentialUrl: "https://www.udemy.com/certificate/UC-3db29f71-aa4e-4457-b00e-6e12e845b2fd",
      accentColor: "#0081FB"
    },
    {
      id: "cert-3",
      title: "Introduction to Git and Github",
      issuer: "Google",
      issuerBadge: "Google",
      image: "/certificates/git.png",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/CG510CCODNO6",
      accentColor: "#C084FC"
    },
    {
      id: "cert-4",
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford Online",
      issuerBadge: "Stanford Online",
      image: "/certificates/supervised.png",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/KB5BZO2D25Z3",
      accentColor: "#10B981"
    },
    {
      id: "cert-5",
      title: "Advanced Learning Algorithms",
      issuer: "Stanford Online",
      issuerBadge: "Stanford Online",
      image: "/certificates/advanced.png",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/XWLZQ4DPS4IV",
      accentColor: "#2496ED"
    },
    {
      id: "cert-6",
      title: "Using Python to Interact with the Operating System",
      issuer: "Google",
      issuerBadge: "Google",
      image: "/certificates/operatingSystem.png",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/IIAHJ5076IFM",
      accentColor: "#A855F7"
    }
  ] as Certificate[]
};
