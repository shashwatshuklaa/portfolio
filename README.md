# Student Portfolio

A personal student portfolio website built with [Next.js](https://nextjs.org) (App Router), [React](https://react.dev), [TypeScript](https://www.typescriptlang.org), and [Tailwind CSS](https://tailwindcss.com).

The portfolio features a dark, pixel-art game aesthetic inspired by retro arcade HUDs, with a multi-page structure consisting of a main overview home page and a dedicated all-projects repository.

---

## Getting Started

To run the portfolio locally on your computer:

1. Open your terminal in this folder (`/home/krishna/Coding/Projects/Portfolio`).
2. Start the local Next.js development server:
   ```bash
   npm run dev
   ```
3. Open your web browser and navigate to:
   - **Home Page:** `http://localhost:3000`
   - **All Projects:** `http://localhost:3000/projects`
4. To stop the server at any time, press `Ctrl + C` in your terminal.

---

## Page & Navigation Structure

- **Home Page (`/`):**
  Located at `src/app/page.tsx`. Presents your complete student profile along a game-like chapter timeline:
  - **Introduction:** Retro hero panorama and call-to-action buttons.
  - **Chapter 01 (About Me):** Short bio and study highlights.
  - **Chapter 02 (Skills & Tools):** Grouped abilities (Programming Languages, Frameworks & Libraries, Tools & Platforms) without arbitrary percentages.
  - **Chapter 03 (Academic Highlights):** Education history, degree, and milestones.
  - **Chapter 04 (Certifications & Honors):** Certificates, hackathons, and awards.
  - **Chapter 05 (Featured Projects):** Up to 3 highlighted projects with descriptions, contributions, tech tags, and a "View all projects" button.
  - **Chapter 06 (Résumé):** Overview and safe download/view buttons.
  - **Chapter 07 (Contact):** Safe email mailto and social links.
- **Projects Page (`/projects`):**
  Located at `src/app/projects/page.tsx`. Displays the full collection of all projects from `src/data/portfolio.ts` with breadcrumb navigation back to the overview.
- **Global Navigation Bar (`Navbar.tsx`):**
  - Brand logo: returns to the top of the home page (`/#intro`).
  - `About`, `Résumé`, and `Contact`: return smoothly to their respective sections on the home page (`/#about`, `/#resume`, `/#contact`) from any page.
  - `Projects`: navigates to the dedicated `/projects` archive page.

---

## Beginner-Friendly File Map

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── favicon.ico          # Browser tab icon
│   │   ├── globals.css          # Global Tailwind CSS imports & pixel UI styles
│   │   ├── layout.tsx           # Root HTML layout and font definitions
│   │   ├── page.tsx             # Home page (Intro, About, Skills, Academics, Honors, Projects, Résumé, Contact)
│   │   └── projects/
│   │       └── page.tsx         # Dedicated All-Projects archive page (/projects)
│   ├── components/              # Modular, reusable building blocks
│   │   ├── About.tsx            # Chapter 01: Character Profile section
│   │   ├── AcademicHighlights.tsx # Chapter 03: Academy & Quests section
│   │   ├── Achievements.tsx     # Chapter 04: Trophy Vault & Certifications section
│   │   ├── Contact.tsx          # Chapter 07: Comms Terminal section
│   │   ├── Footer.tsx           # Page footer with fixed 2026 year
│   │   ├── Introduction.tsx     # Hero section with pure CSS pixel-art panorama
│   │   ├── Navbar.tsx           # Responsive retro HUD navigation bar
│   │   ├── PageLoader.tsx       # Brief system-boot loading sequence component
│   │   ├── ProjectCard.tsx      # Reusable card component for single projects
│   │   ├── Projects.tsx         # Projects grid section (with optional "View all" link)
│   │   ├── Resume.tsx           # Chapter 06: Character Sheet & Inventory section
│   │   └── Skills.tsx           # Chapter 02: Skills & Arsenal grouped section
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

All text, project details, academic items, skills, awards, and contact links are stored in one single file:
👉 **`src/data/portfolio.ts`**

### Placeholders to Replace:
1. **Personal Information:** `name`, `headline`, `about.bio`, and `about.details`.
2. **Skills & Tools (`skills`):** Replace bracketed items under `Programming Languages`, `Frameworks & Libraries`, and `Developer Tools & Platforms` with your actual technologies.
3. **Certifications & Achievements (`achievements`):** Replace `title`, `issuer`, `date`, and `description` with any certificates, hackathons, or competitions you have taken part in.
4. **Projects (`projects`):**
   - `title`: Name of your project.
   - `description`: What the project does.
   - `contribution`: Your specific role and what you personally built.
   - `tags`: Key technologies and tools used.
   - `link`: GitHub repository URL (safe plain text until replaced with a real URL).
   - `liveUrl`: Live deployment URL (safe plain text until replaced with a real URL).
   - `featured`: Set to `true` to highlight on the home page.
5. **Résumé (`resume`):** `summary`, `viewUrl`, and `downloadUrl`.
6. **Social & Contact (`contact`):** Replace `[your.email@example.com]`, `[GitHub Profile Link]`, and `[LinkedIn Profile Link]`. (Unreplaced bracketed links stay safely non-clickable).

Whenever you save `src/data/portfolio.ts`, Next.js automatically updates your browser in real time.
