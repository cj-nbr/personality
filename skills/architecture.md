# Architecture Patterns

## Component Structure
```
src/
├── components/          # Reusable UI components
│   ├── QuestionCard.astro
│   ├── TestProgress.astro
│   └── DimensionChart.astro
├── data/               # Static data and content
│   ├── questions.ts
│   ├── personality-types.ts
│   └── blog-posts.ts
├── layouts/            # Page layouts
│   └── TestLayout.astro
├── pages/              # Route-based pages
│   ├── personality-test/
│   │   ├── [num].astro
│   │   └── results.astro
│   └── personality-type/
│       └── [code].astro
└── test/               # Test engine logic
    └── test-engine.ts
```

## Data Flow
1. User clicks option → `QuestionCard` click handler
2. Visual selection applied via inline styles
3. `document.dispatchEvent('answer-selected')` fires
4. Question page listener catches event
5. Answer saved to `localStorage`
6. Navigation to next question preserves state

## Event-Driven Communication
- **CustomEvent**: `answer-selected`
- **Event Target**: `document` (not `window`)
- **Payload**: `{ value: number, questionId: number }`
- **Why document?**: Listener attached to `document` in page script

## State Persistence
- **Storage**: `localStorage` key `personality_test_state`
- **Structure**: `{ answers: { [id]: value }, startTime: number }`
- **Loading**: On page init, restore selected answer
- **Clearing**: On test completion/reset

## Static Generation
- **Routes**: Pre-rendered with `getStaticPaths()`
- **48 Questions**: Each as separate static page
- **16 Types**: Individual personality type pages
- **SEO**: Meta tags, descriptions per page
