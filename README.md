# SkillConnect

SkillConnect is the frontend for the SIH 2026 solution to **Problem Statement 44: Portal for Academia-Industry Collaboration for Skill Mapping, Internships and Placement**.

The platform is designed to connect students, industries, academicians and institutions through verified skills, targeted assessments, skill-gap insights, internship opportunities and application tracking.

## Current Frontend

The current experience is a responsive student workspace built with Next.js, TypeScript and Tailwind CSS. It includes:

- Student dashboard with skill readiness, progress snapshots and opportunity matches
- My Skills view with categorized skill cards, verification states and skill-gap actions
- Chart.js readiness doughnut and technical skill radar visualizations
- Assessments overview with available, in-progress and completed states
- Mock assessment flow: overview, multiple-choice questions, progress, submission and results
- Responsive sidebar navigation and mobile menu behavior

All displayed data is realistic mock data for the frontend phase. Backend APIs, authentication, Supabase, AI/ML recommendations and persistent assessment results are intentionally not implemented yet.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Chart.js with `react-chartjs-2` (for Data Visualization)
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Available Scripts

```bash
npm run dev       # Start the development server
npm run lint      # Run ESLint
npm run build     # Create a production build
npm run start     # Start the production server
```

## Frontend Routes

| Route | Purpose |
| --- | --- |
| `/` | Student dashboard |
| `/skills` | Skill profile, readiness and skill gaps |
| `/assessments` | Assessment library and assessment-taking flow |

## Project Structure

```text
app/
  page.tsx                 Student dashboard
  skills/page.tsx          My Skills experience
  assessments/page.tsx     Assessments experience
  globals.css              Shared design tokens and global styles
  layout.tsx               Root layout and metadata
public/                    Static assets
```

## Product Direction

SkillConnect will eventually support API-backed skill profiles, institution and industry workflows, verified assessment records, internship and job matching, application tracking and structured industry feedback. The current frontend keeps these boundaries data-driven so real services can be connected without redesigning the user experience.
