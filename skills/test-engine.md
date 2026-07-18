# Test Engine Implementation

## Core Functions

### `loadProgress()`
- Reads `localStorage.getItem('personality_test_state')`
- Returns parsed state object or empty default
- Handles corrupted data gracefully

### `saveProgress(state)`
- Serializes state to JSON
- Writes to `localStorage.setItem()`
- Updates current question and answers

### `calculateResult(answers)`
- Sums scores per dimension
- Determines preference for each axis
- Returns 4-letter type code

### `getTypeFromScores(scores)`
- Maps dimension scores to type letters
- Example: E > I → 'E', S > N → 'S', etc.
- Handles tie-breaking logic

### `getEstimatedTimeRemaining()`
- Calculates based on questions answered
- Returns formatted time string
- Updates in real-time

## Score Calculation
```javascript
// Example for EI dimension
const eiScore = answers
  .filter(a => a.dimension === 'EI')
  .reduce((sum, a) => sum + a.value, 0);

// Positive = Extrovert, Negative = Introvert
const preference = eiScore > 0 ? 'E' : 'I';
```

## Confidence Calculation
- Based on strength of preference per dimension
- Larger margin = higher confidence
- Overall confidence = average of 4 dimensions

## State Flow
1. User starts test → `getInitialState()` creates state
2. Each answer → `saveProgress()` updates localStorage
3. Page load → `loadProgress()` restores state
4. All questions answered → `calculateResult()` determines type
5. Results page displays personality type

## Edge Cases Handled
- Corrupted localStorage data
- Missing answers (treat as 0)
- Test restart (clear progress)
- Browser refresh (preserve state)
- Direct URL access to question (redirect if invalid)
