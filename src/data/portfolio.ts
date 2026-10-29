export interface Project {
  id: string;
  title: string;
  description: string;
  contribution?: string;
  tags: string[];
  link?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface AcademicHighlight {
  id: string;
  institution: string;
  degree: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface ContactLink {
  label: string;
  url: string;
}

export interface PortfolioData {
  name: string;
  headline: string;
  about: {
    bio: string;
    details: string[];
  };
  skills: SkillCategory[];
  academics: AcademicHighlight[];
  achievements: Achievement[];
  projects: Project[];
  resume: {
    summary: string;
    viewUrl: string;
    downloadUrl: string;
  };
  contact: {
    email: string;
    message: string;
    links: ContactLink[];
  };
}

export const portfolioData: PortfolioData = {
  name: "Shashwat Shukla",
  headline:
    "B.Tech Information Technology student at Galgotias College of Engineering and Technology. Interested in full-stack development and Python-based AI systems. Based in Noida, India.",
  about: {
    bio: "B.Tech Information Technology student at Galgotias College of Engineering and Technology based in Noida, India. Interested in full-stack development and Python-based AI systems.",
    details: [
      "Education: Bachelor of Technology in Information Technology, Galgotias College of Engineering and Technology, Greater Noida (2023–2027)",
      "Technical Focus: Full-stack web development and Python-based AI systems",
      "Core Foundations: Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Computer Networks",
    ],
  },
  skills: [
    {
      name: "Programming Languages",
      skills: ["C", "C++", "Python", "Java", "JavaScript"],
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "Tailwind CSS",
        "Streamlit",
      ],
    },
    {
      name: "AI & Machine Learning",
      skills: [
        "OpenAI API",
        "Whisper",
        "Mistral AI",
        "LangChain",
        "ChromaDB",
        "RAG",
        "Multi-Agent Systems",
        "Hugging Face Embeddings",
      ],
    },
    {
      name: "Web & Backend",
      skills: [
        "REST APIs",
        "WebSockets",
        "JWT",
        "Payment Gateway Integration",
        "Razorpay",
      ],
    },
    {
      name: "Databases & Core Concepts",
      skills: [
        "MongoDB",
        "MySQL",
        "OOP",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
      ],
    },
    {
      name: "Developer Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Linux", "Postman"],
    },
  ],
  academics: [
    {
      id: "academic-1",
      institution:
        "Galgotias College of Engineering and Technology, Greater Noida, India",
      degree: "Bachelor of Technology in Information Technology",
      period: "2023 – 2027",
      highlights: [
        "Core Coursework: Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Computer Networks",
        "Technical Focus: Full-stack web architecture and Python-based AI systems",
      ],
    },
  ],
  achievements: [
    {
      id: "achievement-1",
      title: "Frontend Developer (React)",
      issuer: "HackerRank",
      date: "September 2026",
      description: "Credential ID: 170AFF7754EA",
    },
    {
      id: "achievement-2",
      title: "Intro to Machine Learning",
      issuer: "Kaggle",
      date: "September 2026",
      description: "Foundational machine learning concepts, models, and workflows.",
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "QR Based Ticketing System",
      description:
        "Built a QR-based event ticketing system for more than 5,000 attendees within a 36-hour delivery cycle. Integrated Razorpay payments, unique QR code generation, and email delivery of tickets. Built an admin QR scanner using the device camera, including offline scanning, synchronization, and conflict resolution. Implemented OTP-based two-factor admin login and multi-event management with admin-to-event assignment.",
      contribution:
        "Designed REST APIs and real-time analytics using WebSockets; the résumé reports check-in was 30% faster.",
      tags: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Next.js",
        "Razorpay",
        "WebSockets",
      ],
      link: "https://github.com/shashwatshuklaa/QR-Based-Ticketing-System",
      liveUrl: "https://qr-based-ticketing-system-di2m.vercel.app/",
      featured: true,
    },
    {
      id: "project-2",
      title: "E-commerce Platform with Secure Payments",
      description:
        "Developed a full-stack e-commerce platform; the résumé reports it processes more than 6,000 transactions monthly.",
      contribution:
        "Optimized the checkout pipeline; the résumé reports 40% faster payment completion using JWT-secured APIs.",
      tags: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Razorpay",
        "JWT",
      ],
      featured: true,
    },
  ],
  resume: {
    summary:
      "B.Tech Information Technology student at Galgotias College of Engineering and Technology (2023–2027). Hands-on experience developing full-stack web platforms and Python-based AI systems.",
    viewUrl:
      "https://drive.google.com/file/d/1SDDgg6uat46IIMbqCsiX-njzrmR7nyiq/view?usp=drive_link",
    downloadUrl:
      "https://drive.google.com/file/d/1SDDgg6uat46IIMbqCsiX-njzrmR7nyiq/view?usp=drive_link",
  },
  contact: {
    email: "krishnashukla140204@gmail.com",
    message:
      "Based in Noida, India. Open to full-stack engineering and Python AI systems opportunities. Feel free to connect via email or phone (+91-6393172713).",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/shashwatshuklaa",
      },
    ],
  },
};
