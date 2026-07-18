# Skills & Knowledge Base

This folder documents the technical skills, patterns, and important knowledge used during the development of the 16 Personality Test website.

## Contents

### Core Technology
- [Tech Stack](tech-stack.md) - Frameworks, libraries, and tools used
- [Development Skills](development-skills.md) - Programming patterns and techniques

### Design & Architecture
- [Design System](design-system.md) - Colors, typography, spacing, components
- [Architecture](architecture.md) - Project structure, data flow, patterns

### Implementation Details
- [Data Structures](data-structures.md) - Types, interfaces, schemas
- [Test Engine](test-engine.md) - Scoring logic, state management
- [Critical Fixes](critical-fixes.md) - Bug fixes and solutions

### Workflow
- [Commands](commands.md) - Development, build, deployment commands
- [Testing](testing.md) - Playwright automation, test scenarios
- [SEO & Accessibility](seo-accessibility.md) - Best practices implemented

## Quick Reference

### Start Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Key Files
- `src/components/QuestionCard.astro` - Question interaction logic
- `src/test/test-engine.ts` - Scoring and state management
- `src/data/questions.ts` - Question bank
- `src/data/personality-types.ts` - Type definitions

### Event System
- CustomEvent: `answer-selected`
- Target: `document`
- Payload: `{ value, questionId }`

## Development Principles Applied

1. **Type Safety** - TypeScript interfaces for all data structures
2. **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
3. **Performance** - Static generation, minimal JS, optimized CSS
4. **User Experience** - Visual feedback, progress tracking, persistence
5. **Maintainability** - Modular components, clear data flow, documentation
