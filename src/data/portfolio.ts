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
  name: "[Your Name]",
  headline: "[Your Field of Study / Aspiring Role, e.g. Computer Science Student]",
  about: {
    bio: "[Write a concise summary introducing yourself, what you are studying, and your areas of interest.]",
    details: [
      "[Academic focus or key interest, e.g., Systems Programming, Databases, Web Engineering]",
      "[Primary technologies or languages, e.g., TypeScript, Python, SQL, C++]",
      "[Current learning goal, club activity, or technical interest]",
    ],
  },
  skills: [
    {
      name: "Programming Languages",
      skills: [
        "[Language 1, e.g. Python]",
        "[Language 2, e.g. TypeScript]",
        "[Language 3, e.g. SQL]",
      ],
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        "[Framework 1, e.g. React]",
        "[Framework 2, e.g. Next.js]",
        "[Library 1, e.g. Tailwind CSS]",
      ],
    },
    {
      name: "Developer Tools & Platforms",
      skills: [
        "[Tool 1, e.g. Git / GitHub]",
        "[Tool 2, e.g. VS Code]",
        "[Platform 1, e.g. Linux / Terminal]",
      ],
    },
  ],
  academics: [
    {
      id: "academic-1",
      institution: "[University / College Name]",
      degree: "[Degree / Major, e.g., B.S. in Computer Science]",
      period: "[Start Year] - [Expected Graduation Year]",
      highlights: [
        "[Relevant Coursework: Data Structures, Algorithms, Database Management Systems]",
        "[Academic Honor / Scholarship / Dean's List placeholder]",
        "[Academic club or lab activity placeholder]",
      ],
    },
  ],
  achievements: [
    {
      id: "achievement-1",
      title: "[Certification or Award Title 1]",
      issuer: "[Issuing Organization or Event, e.g. Coursera / Competition Name]",
      date: "[Month, Year]",
      description: "[Brief description of the certification, hackathon outcome, or award received.]",
    },
    {
      id: "achievement-2",
      title: "[Hackathon or Honor Title 2]",
      issuer: "[Event Name / University / Organization]",
      date: "[Year]",
      description: "[Brief description of project submitted, award received, or recognition.]",
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "[Project Title 1]",
      description: "[Description of what the project does, key technical challenges solved, and practical outcomes.]",
      contribution: "[Your specific role or key contribution to this project, e.g. designed database schema and backend API]",
      tags: ["[Technology 1]", "[Technology 2]", "[Technology 3]"],
      link: "[Project Repository or Demo Link]",
      liveUrl: "[Live Demo Link]",
      featured: true,
    },
    {
      id: "project-2",
      title: "[Project Title 2]",
      description: "[Description of what the project does, key technical challenges solved, and practical outcomes.]",
      contribution: "[Your specific role or key contribution to this project, e.g. built responsive UI components and state management]",
      tags: ["[Technology A]", "[Technology B]"],
      link: "[Project Repository or Demo Link]",
      liveUrl: "[Live Demo Link]",
      featured: true,
    },
  ],
  resume: {
    summary: "[Brief note highlighting your qualifications, technical skill set, and internship availability.]",
    viewUrl: "[Résumé View Link]",
    downloadUrl: "[Résumé Download Link]",
  },
  contact: {
    email: "[your.email@example.com]",
    message: "[Feel free to reach out for internship inquiries, collaborative projects, or academic discussions.]",
    links: [
      { label: "GitHub", url: "[GitHub Profile Link]" },
      { label: "LinkedIn", url: "[LinkedIn Profile Link]" },
    ],
  },
};
