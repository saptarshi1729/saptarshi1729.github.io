# Architecture Plan - Portfolio Rebuild

## 1. High-Level Overview
A single-page, static portfolio application built with HTML5, vanilla JavaScript, and Tailwind CSS. The architecture prioritizes performance, "view-source" readability, and the themes identified in the PRD (Cloud Console + Terminal).

## 2. File Structure
```text
/
├── index.html          # Main entry point (Structure + Layout)
├── css/
│   └── styles.css      # Custom overrides & animations (minimal)
├── js/
│   └── script.js       # Dynamic logic (Year, Interactions)
└── assets/
    ├── images/         # Profile pictures, project thumbnails
    └── resume.pdf      # Downloadable resume
```

## 3. Technology Stack Choice Rationale
- **HTML5:** Semantic foundation.
- **Tailwind CSS (CDN):** Rapid prototyping of the complex "Console" theme without a build chain.
    - *Note:* Using CDN for simplicity as requested, but structured as if it were a build project.
- **Vanilla JS:** Zero dependencies, lightweight DOM manipulation for the few dynamic needs.
- **Font Awesome:** Icons for "Terminal" feel (folders, servers, etc.).

## 4. Design System Tokens (Tailwind Config)
To be embedded in `index.html` via `tailwind.config` script object:

- **Colors:**
    - `bg-console-dark`: `#0f172a` (Slate 900)
    - `bg-console-darker`: `#020617` (Slate 950)
    - `text-console-primary`: `#cbd5e1` (Slate 300)
    - `text-terminal-accent`: `#2dd4bf` (Teal 400 - The "Cursor" color)
    - `border-console-dim`: `#1e293b` (Slate 800)
- **Fonts:**
    - Body: `'Inter', sans-serif`
    - Code/Data: `'JetBrains Mono', monospace`
    - Headings: `'Inter', sans-serif` (Bold/ExtraBold)

## 5. Component Architecture (Single File)
The `index.html` will be modularized by `<section>` tags.

### 5.1. Navigation (`<nav>`)
- **Style:** Fixed top bar, glassmorphism (`backdrop-blur`).
- **Content:** "\<Saptarshi />" (Logo), Links (About, Experience, Skills, Projects).

### 5.2. Hero Section (`<header id="hero">`)
- **Layout:** Flexbox Z-Pattern (Desktop).
    - **Left:** H1 Name, H2 Role (Typewriter effect optional), "Contact" CTA.
    - **Right:** "Artistic Tagline" block.
- **Mobile:** Flex Column (Image -> Name -> Tagline).

### 5.3. About/Stats
- **Content:** Gold Medalist in an Inter IIT event, Codeforces rating.
- **Design:** "Card" style with `border-l-4 border-teal-400`.

### 5.4. Experience (`<section id="experience">`)
- **Structure:** Vertical Line Timeline (The "Git Commit" graph look).
- **Data:** Hardcoded HTML (simplest) or JSON array in JS rendered to DOM (cleaner for updates).
    - *Decision:* Hardcoded HTML for better SEO and zero-JS initial paint.

### 5.5. Skills Matrix (`<section id="skills">`)
- **Layout:** Grid (2 columns on mobile, 3 on desktop).
- **Categories:**
    1.  **Languages:** Java, C++, Python, Go.
    2.  **Systems:** Distributed Systems, CloudSQL.
    3.  **AI/ML:** TensorFlow, TimeSeries.
- **Style:** "Terminal Window" cards (header bar with dots).

### 5.6. Projects
- **Layout:** Cards.
- **Style:** Visual emphasis on "Data" and "Scale" (e.g., using database icons).

### 5.7. Footer
- **Dynamic Content:** `<span id="year"></span>` populated by JS.

## 6. Implementation Plan (Phase 3)
1.  **Skeleton:** Create `index.html` with Tailwind CDN boilerplate.
2.  **Theming:** Configure `tailwind.config` in `<head>`.
3.  **Layout Construction:** Build sections top-to-bottom.
4.  **Interactivity:** Add `script.js` for scroll spy and footer year.
5.  **Refinement:** "Pixel Perfecting" margins, padding, and mobile responsiveness.