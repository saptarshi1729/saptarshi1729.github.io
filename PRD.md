# Product Requirements Document (PRD) - Portfolio Rebuild

## 1. Overview
Rebuild the personal portfolio website (`saptarshi1729.github.io`) to reflect a Software Engineer III aesthetic. The design should strictly follow a "Google Cloud Console meets Terminal" theme.

## 2. User Persona
- **Primary Audience:** Recruiters, Hiring Managers, and Engineers.
- **Goal:** Showcase technical depth ("Staff+" potential), aesthetic sensibility, and obsession with reliability/scale.

## 3. Core Requirements

### 3.1 Theme & Visual Identity
- **Concept:** "Google Cloud Console" meets "Terminal".
- **Color Palette:**
    - Background: `bg-slate-900` (Deep console dark).
    - Text: `text-slate-300` (Readable terminal gray).
    - Accents: `text-teal-400` (Retro terminal cursor/highlight green).
    - Selection: `selection:bg-teal-400 selection:text-slate-900`.
- **Typography:**
    - UI Elements: `Inter` (Clean, modern, legible).
    - Code/Technical Elements: `JetBrains Mono` (Developer-native).
    - Artistic/Taglines: Optional serif or stylized font if needed for "Artistic Tagline", but otherwise stick to clean typography.

### 3.2 Layout Structure
- **Global:** Single-page scrollable layout.
- **Hero Section (Crucial):**
    - **Layout:** "Z-Pattern" on Desktop.
    - **Left Side:** Name ("Saptarshi Mukherjee"), Role/Title.
    - **Right Side:** Artistic Tagline (e.g., "Loves building resilient systems at Google scale!").
    - **Mobile:** Stacked vertically (Name top, Tagline bottom or vice-versa as appropriate).
    - **Profile Picture:** Circular, borderless or subtle border, high-quality.

### 3.3 New Content & Features
- **Dynamic Footer:**
    - Must include a JavaScript-powered dynamic year update (e.g., `© 2025`).
- **Skills Matrix:**
    - Structured grid or distinct sections.
    - Categories: Languages, Core Tech (Dist Systems), AI/ML.
- **Experience/Journey:**
    - Timeline view or clear vertical list.
    - Highlights: Google (CloudSQL, Persistent Disks), Unacademy, Needl.ai.

## 4. Technical Constraints
- **Stack:** HTML5, Tailwind CSS (CDN), Vanilla JavaScript.
- **No Node.js/Build Steps:** Must run directly in browser/GitHub Pages.
- **Performance:** Fast load, semantic HTML.

## 5. Success Metrics
- Visual adherence to the "Console/Terminal" theme.
- Responsive Z-Pattern implementation.
- Working dynamic footer.