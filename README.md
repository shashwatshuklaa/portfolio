# Student Portfolio

A personal student portfolio website built with [Next.js](https://nextjs.org) (App Router), [React](https://react.dev), [TypeScript](https://www.typescriptlang.org), and [Tailwind CSS](https://tailwindcss.com).

The portfolio is structured as a one-page site with anchor navigation, featuring reusable components and a centralized, typed data file for all personal content and placeholders.

---

## Getting Started

To run the portfolio locally on your computer:

1. Open your terminal in this folder (`/home/krishna/Coding/Projects/Portfolio`).
2. Start the local Next.js development server:
   ```bash
   npm run dev
   ```
3. Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```
4. To stop the server at any time, press `Ctrl + C` in your terminal.

---

## Beginner-Friendly File Map

Here is how the project is organized:

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── favicon.ico          # Browser tab icon
│   │   ├── globals.css          # Global Tailwind CSS imports & base styles
│   │   ├── layout.tsx           # Root HTML layout and font definitions
│   │   └── page.tsx             # Main portfolio page (assembles all sections)
│   ├── components/              # Modular, reusable building blocks
│   │   ├── About.tsx            # About Me section
│   │   ├── AcademicHighlights.tsx # Education & academic highlights
│   │   ├── Contact.tsx          # Contact details & links
│   │   ├── Footer.tsx           # Page footer with back-to-top link
│   │   ├── Introduction.tsx     # Hero/introductory header section
│   │   ├── Navbar.tsx           # Top navigation bar with anchor links
│   │   ├── ProjectCard.tsx      # Reusable card component for single projects
│   │   ├── Projects.tsx         # Selected Projects grid section
│   │   └── Resume.tsx           # Résumé overview and links
│   └── data/
│       └── portfolio.ts         # Centralized, typed placeholder content file
├── public/                      # Static files (images, icons)
├── AGENTS.md                    # Guidance notes for AI coding assistants
├── eslint.config.mjs            # ESLint rules and lint configuration
├── next.config.ts               # Next.js configuration settings
├── package.json                 # Project dependencies and script commands
├── package-lock.json            # Exact version lockfile for npm packages
├── README.md                    # Project documentation and file map (this file)
└── tsconfig.json                # TypeScript compiler configuration
```

---

## Customizing Your Content

All text, project details, academic items, and contact links are stored in one single file:
👉 **`src/data/portfolio.ts`**

Open `src/data/portfolio.ts` to replace the placeholders (such as `[Your Name]`, `[Project Title 1]`, `[your.email@example.com]`, etc.) with your own information. Whenever you save the file, Next.js will automatically update the page in your browser.
