# Critical Fixes & Solutions

## 1. Question Selection Bug (Commit 5e41368)
**Problem**: Options not getting selected on click
**Root Cause**: Event dispatched on `window`, listener on `document`
**Solution**: Changed `window.dispatchEvent` → `document.dispatchEvent`
**Files**: `src/components/QuestionCard.astro:101`

## 2. Green Glow Selection Effect (Commit f0a33a8)
**Problem**: Need visual feedback for selected options
**Solution**: Inline styles for border, background, and box-shadow
**Approach**:
- Reset all options first
- Apply green styles to selected only
- Use `isDark` check for theme-appropriate colors
- 2px solid border + glow effect

## 3. Data-Value Attribute Fix
**Problem**: Labels missing `data-value` attribute
**Solution**: Added `data-value={question.optionA.value}` to label elements
**Purpose**: JavaScript reads value from label, not hidden radio

## 4. Radio Button Accessibility
**Approach**: Keep radios `sr-only` for screen readers
**Visual**: Labels styled as clickable cards
**Interaction**: Click on label triggers radio + custom selection logic

## 5. localStorage Prerender Warnings
**Issue**: `localStorage is not defined` during static build
**Status**: Expected behavior, does not affect runtime
**Mitigation**: Wrapped in try-catch where possible
