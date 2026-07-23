# Language Selector UX

## Structure
```astro
<div class="relative">
  <button id="lang-btn">...</button>
  <div id="lang-menu" class="hidden absolute ...">
    <input id="lang-search" ... />
    <div id="lang-list">
      <button data-lang="en">English</button>
      ...
    </div>
  </div>
</div>
```

## Critical: Preventing Menu Close on Internal Clicks

### The Problem
If the document click handler closes the menu unconditionally, clicking the search input or any button inside the menu closes it before the action completes.

### The Fix
1. **Stop propagation on the menu itself:**
```js
langMenu.addEventListener('mousedown', function(e) {
  e.stopPropagation();
});
langMenu.addEventListener('click', function(e) {
  e.stopPropagation();
});
```

2. **Close only on outside clicks:**
```js
document.addEventListener('click', function(e) {
  if (langMenu && !langMenu.contains(e.target) && e.target !== langBtn) {
    langMenu.classList.add('hidden');
    if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
  }
});
```

## Language Selection Flow
1. User clicks language button → `lang-change` event dispatched
2. Language saved to `localStorage`
3. `setLang()` called to update client state
4. Page reloads to re-render with new language

## Country Search Integration
- Countries page search dispatches `country-search` custom event with `{ detail: { query } }`
- Language menu listens for this event and filters language buttons
- Auto-opens language menu when a country match is found
