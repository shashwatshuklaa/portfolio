export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface AcademicHighlight {
  id: string;
  institution: string;
  degree: string;
  period: string;
  highlights: string[];
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
  academics: AcademicHighlight[];
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
  projects: [
    {
      id: "project-1",
      title: "[Project Title 1]",
      description: "[Description of what the project does, key technical challenges solved, and practical outcomes.]",
      tags: ["[Technology 1]", "[Technology 2]", "[Technology 3]"],
      link: "[Project Repository or Demo Link]",
    },
    {
      id: "project-2",
      title: "[Project Title 2]",
      description: "[Description of what the project does, key technical challenges solved, and practical outcomes.]",
      tags: ["[Technology A]", "[Technology B]"],
      link: "[Project Repository or Demo Link]",
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
