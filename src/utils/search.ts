export interface SearchItem {
  id: string;
  title: string;
  category: "Calculator" | "Country" | "Guide" | "Glossary";
  description: string;
  url: string;
  keywords?: string[];
}

export interface SearchState {
  query: string;
  results: SearchItem[];
  selectedIndex: number;
  isOpen: boolean;
}

export function buildSearchItems(
  taxRules: Array<{
    id: string;
    countrySlug: string;
    categorySlug: string;
    calculatorSlug: string;
    name: string;
    description: string;
  }>,
  countries: Array<{
    slug: string;
    name: string;
    overview: string;
  }>,
  guides: Array<{
    id: string;
    data: {
      title: string;
      description: string;
      category: string;
    };
  }>,
  glossary: Array<{
    id: string;
    data: {
      term: string;
      definition: string;
      category: string;
    };
  }>
): SearchItem[] {
  const items: SearchItem[] = [];

  for (const rule of taxRules) {
    items.push({
      id: `calc-${rule.id}`,
      title: rule.name,
      category: "Calculator",
      description: rule.description,
      url: `/countries/${rule.countrySlug}/${rule.categorySlug}/${rule.calculatorSlug}`,
      keywords: [rule.countrySlug, rule.categorySlug, rule.calculatorSlug, rule.name.toLowerCase()],
    });
  }

  for (const country of countries) {
    items.push({
      id: `country-${country.slug}`,
      title: country.name,
      category: "Country",
      description: country.overview,
      url: `/countries/${country.slug}`,
      keywords: [country.slug, country.name.toLowerCase()],
    });
  }

  for (const guide of guides) {
    items.push({
      id: `guide-${guide.id}`,
      title: guide.data.title,
      category: "Guide",
      description: guide.data.description,
      url: `/knowledge/${guide.id}`,
      keywords: [guide.data.title.toLowerCase(), guide.data.category.toLowerCase(), guide.id],
    });
  }

  for (const term of glossary) {
    items.push({
      id: `glossary-${term.id}`,
      title: term.data.term,
      category: "Glossary",
      description: term.data.definition,
      url: `/knowledge/glossary/${term.id}`,
      keywords: [term.data.term.toLowerCase(), term.data.category.toLowerCase(), term.id],
    });
  }

  return items;
}

export function searchItems(items: SearchItem[], query: string): SearchItem[] {
  if (!query || query.trim().length === 0) {
    return [];
  }

  const q = query.toLowerCase().trim();
  const qTerms = q.split(/\s+/).filter(Boolean);

  const scored = items.map((item) => {
    const titleLower = item.title.toLowerCase();
    const descLower = item.description.toLowerCase();
    const keywordsLower = (item.keywords || []).join(" ").toLowerCase();

    let score = Infinity;

    for (const term of qTerms) {
      let termScore = Infinity;

      if (titleLower === term) {
        termScore = 0;
      } else if (titleLower.startsWith(term)) {
        termScore = 1;
      } else if (titleLower.includes(term)) {
        termScore = 2;
      } else if (keywordsLower.includes(term)) {
        termScore = 3;
      } else if (descLower.includes(term)) {
        termScore = 4;
      }

      score = Math.min(score, termScore);
    }

    return { item, score };
  });

  scored.sort((a, b) => a.score - b.score);

  return scored
    .filter((s) => s.score < Infinity)
    .slice(0, 20)
    .map((s) => s.item);
}
