# Data Structures

## Question Object
```typescript
{
  id: number;              // 1-48
  dimension: string;       // 'EI' | 'SN' | 'TF' | 'JT'
  text: string;            // Question text
  optionA: {
    text: string;          // Option A description
    value: number;         // Score value (e.g., 2 or -2)
  };
  optionB: {
    text: string;          // Option B description
    value: number;         // Score value (e.g., -2 or 2)
  };
}
```

## Personality Type Object
```typescript
{
  code: string;            // e.g., 'INTJ', 'ENFP'
  name: string;            // e.g., 'The Architect'
  tagline: string;         // Short description
  description: string;     // Full description
  traits: string[];        // Key characteristics
  strengths: string[];     // Positive attributes
  weaknesses: string[];    // Growth areas
  careers: string[];       // Suitable careers
  famous: string[];        // Famous examples
}
```

## Test State Object
```typescript
{
  answers: {
    [questionId: number]: number;  // Question ID → selected value
  };
  startTime: number;               // Timestamp when test began
  completed: boolean;              // Test completion flag
  currentQuestion: number;         // Current position
}
```

## Scoring Logic
- 12 questions per dimension (EI, SN, TF, JT)
- Each question has two options with opposing values
- Sum values per dimension to get raw score
- Convert to preference (e.g., E vs I)
- Determine 4-letter type from 4 dimensions
- Calculate confidence percentage

## Dimensions
1. **EI** - Energy Direction (Extrovert/Introvert)
2. **SN** - Information Gathering (Sensing/Intuition)
3. **TF** - Decision Making (Thinking/Feeling)
4. **JT** - Lifestyle (Judging/Perceiving)
