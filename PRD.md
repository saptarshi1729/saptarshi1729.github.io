# Portfolio Website - Product Requirements Document (PRD)

## 1. Overview
A high-performance, single-page portfolio for a Software Engineer III (Google). The site emphasizes "Scale," "Reliability," and "Algorithmic Excellence" using modern frontend tooling.

## 2. User Persona
* **Primary:** Recruiters and Hiring Managers (looking for "Staff+" potential).
* **Secondary:** Fellow Engineers (judging code quality and system design).

## 3. Key Sections
1.  **Hero:** Minimalist. Name, Title, and "Hook".
2.  **About:** Gold Medalist Achievement & Academic Pedigree.
3.  **Experience (Timeline):**
    * **Google (Current):** CloudSQL Control Plane (Orchestration/Scalability).
    * **Google (Previous):** Persistent Disks (AsyncPD/Podification).
    * **Past:** Unacademy, Needl.ai.
4.  **Skills Matrix:** Organized by layer (Languages, Systems, AI/ML).
5.  **Projects:** Focused on Data/ML (Vegetable Price Analysis, Knowledge Graphs).
6.  **Contact:** Professional links (GitHub, LinkedIn).

## 4. Design & Tech Specs
* **Framework:** **Tailwind CSS** (via CDN for dev / Standalone for prod).
* **Aesthetic:** "Engineering Clean."
    * **Colors:** Slate/Navy background (`bg-slate-900`), Light Gray text (`text-slate-300`), Accent Blue/Teal (`text-sky-400`).
    * **Font:** `Inter` (Clean sans-serif) for text, `JetBrains Mono` for code/data.
    * **Vibe:** Soothing, high-contrast, easy to read.
* **Performance:** Must be lightweight. No heavy JavaScript frameworks (React/Angular) to ensure compatibility and speed.