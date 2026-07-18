# Tech Stack

## Core Framework
- **Astro 7.0.9** - Static site generator with island architecture
- **Tailwind CSS v4.3.2** - Utility-first CSS framework
- **TypeScript** - Type-safe development

## Build Tools
- **Vite** - Underlying build tool for Astro
- **@tailwindcss/vite** - Tailwind CSS Vite plugin

## Key Features Implemented
- Static site generation with `getStaticPaths`
- Client-side interactivity with inline scripts
- Dark mode by default with CSS class strategy
- LocalStorage for state persistence
- Custom event dispatching for component communication

## Browser APIs Used
- `localStorage` - Test progress persistence
- `CustomEvent` - Communication between QuestionCard and question pages
- `document.addEventListener` / `dispatchEvent` - Event-driven architecture
