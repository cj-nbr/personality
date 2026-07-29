import { countries } from "../countries";
import { getCollection } from "astro:content";

export interface SearchItem {
  type: string;
  title: string;
  description: string;
  href: string;
  category: string;
}

export async function buildSearchIndex(): Promise<SearchItem[]> {
  const items: SearchItem[] = [];

  countries.forEach(country => {
    items.push({
      type: "country",
      title: country.name,
      description: country.overview.substring(0, 120),
      href: `/countries/${country.slug}`,
      category: country.continent
    });

    country.taxCategories.forEach(category => {
      items.push({
        type: "calculator",
        title: `${category.name} - ${country.name}`,
        description: category.description.substring(0, 120),
        href: `/countries/${country.slug}/${category.slug}`,
        category: category.name
      });

      category.calculators.forEach(calculator => {
        items.push({
          type: "calculator",
          title: `${calculator.name} - ${country.name}`,
          description: calculator.description.substring(0, 120),
          href: `/countries/${country.slug}/${category.slug}/${calculator.slug}`,
          category: `${category.name} / ${country.name}`
        });
      });

      category.guides.forEach(guide => {
        items.push({
          type: "guide",
          title: guide.title,
          description: guide.description.substring(0, 120),
          href: `/countries/${country.slug}/${category.slug}/${guide.slug}`,
          category: `${category.name} / ${country.name}`
        });
      });

      category.faqs.forEach(faq => {
        items.push({
          type: "glossary",
          title: faq.question,
          description: faq.answer.substring(0, 120),
          href: `/countries/${country.slug}/${category.slug}/faqs/${encodeURIComponent(faq.question)}`,
          category: `${category.name} / ${country.name}`
        });
      });
    });
  });

  try {
    const guides = await getCollection("guides");
    guides.forEach(guide => {
      items.push({
        type: "guide",
        title: guide.data.title,
        description: guide.data.description.substring(0, 120),
        href: `/knowledge/${guide.id}`,
        category: guide.data.category
      });
    });

    const glossary = await getCollection("glossary");
    glossary.forEach(term => {
      items.push({
        type: "glossary",
        title: term.data.term,
        description: term.data.definition.substring(0, 120),
        href: `/knowledge/glossary/${term.id}`,
        category: term.data.category
      });
    });
  } catch (e) {
    console.warn("Failed to load guides/glossary for search index:", e);
  }

  return items;
}

let searchIndexPromise: Promise<SearchItem[]> | null = null;

export async function getSearchIndex(): Promise<SearchItem[]> {
  if (!searchIndexPromise) {
    searchIndexPromise = buildSearchIndex();
  }
  return searchIndexPromise;
}