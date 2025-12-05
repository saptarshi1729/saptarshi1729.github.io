# System Architecture

## 1. Technology Stack
* **Core:** HTML5 (Semantic)
* **Styling:** Tailwind CSS (via CDN)
    * *Why:* Allows rapid UI development with utility classes. Zero build steps required.
    * *Performance:* We will use the specialized script that compiles CSS in the browser for dev, ideal for older machines.
* **Icons:** FontAwesome (Free CDN) for social links.
* **Fonts:** `Inter` (UI) and `JetBrains Mono` (Code/Data).

## 2. File Structure
/ (root)
├── index.html        # The single-page application
├── assets/           # (Optional) Folder for your resume PDF or profile image
├── architecture.md   # This file (System Design)
└── PRD.md            # Product Requirements

## 3. Design System (Tailwind Config)
* **Background:** `bg-slate-900` (Deep, soothing Navy)
* **Surface:** `bg-slate-800` (Cards/Sections)
* **Primary Text:** `text-slate-300` (Readable Grey)
* **Headings:** `text-slate-100` (Bright White)
* **Accent:** `text-teal-400` or `text-sky-400` (Subtle "Tech" pop)

## 4. Deployment Strategy
* **GitHub Pages:** Serves `index.html` directly.
* **No Build Pipeline:** The CDN handles the styling. You just `git push`.