# Testing Skills

## Playwright Automation
- Browser navigation and snapshot testing
- Element interaction simulation
- Screenshot capture for visual regression
- Console message monitoring
- JavaScript evaluation in page context

## Test Scenarios Covered
1. **Navigation Flow**
   - Start → Question 1 → Question 2 → Results
   - Back/forward button functionality

2. **Selection Persistence**
   - Click option → Verify visual selection
   - Navigate away → Return → Verify selection persists
   - LocalStorage state verification

3. **Event System**
   - CustomEvent dispatch verification
   - Document listener testing
   - Payload validation

4. **State Management**
   - Answer storage in localStorage
   - Progress tracking across questions
   - Completion detection

## Browser Testing Commands
```javascript
// Navigate
await page.goto('http://localhost:4321/personality-test/question/1')

// Click element
await page.locator('label').filter({ hasText: 'Option text' }).click()

// Take screenshot
await page.screenshot({ path: 'screenshot.png' })

// Evaluate JavaScript
await page.evaluate(() => {
  const state = JSON.parse(localStorage.getItem('key') || '{}')
  return state
})

// Get snapshot
await page.accessibility.snapshot()
```

## Verification Checklist
- [ ] Option click updates visual state
- [ ] Green glow appears on selection
- [ ] Answer persists after navigation
- [ ] localStorage updates correctly
- [ ] No console errors
- [ ] Build succeeds without errors
