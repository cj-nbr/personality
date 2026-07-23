export interface TaxCategory {
  slug: string;
  name: string;
  description: string;
  overview: string;
  calculators: Array<{
    slug: string;
    name: string;
    description: string;
  }>;
  guides: Array<{
    slug: string;
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface Country {
  slug: string;
  name: string;
  flag: string;
  continent: string;
  officialTaxAuthority: string;
  taxAuthorityUrl: string;
  currency: string;
  capital: string;
  overview: string;
  taxCategories: TaxCategory[];
  popularCalculators: Array<{ slug: string; name: string; category: string }>;
  relatedCountries: string[];
  latestUpdates: Array<{ date: string; title: string; description: string }>;
}