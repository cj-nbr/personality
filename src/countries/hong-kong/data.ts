import type { Country, TaxCategory } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "salaries-tax",
    name: "Salaries Tax",
    description: "Tax on employment income earned in Hong Kong.",
    overview: "Salaries tax is levied on income from employment. Standard rate is 15% or progressive rates from 2% to 17%.",
    calculators: [
      { slug: "salaries-tax-calculator", name: "Salaries Tax Calculator", description: "Estimate your Hong Kong salaries tax." }
    ],
    guides: [
      { slug: "salaries-tax-guide", title: "Salaries Tax Guide", description: "Understanding Hong Kong salaries tax calculation." }
    ],
    faqs: [
      { question: "What is the salaries tax rate?", answer: "Progressive rates from 2% to 17% or standard rate of 15%, whichever is lower." }
    ]
  },
  {
    slug: "profits-tax",
    name: "Profits Tax",
    description: "Tax on business profits sourced in Hong Kong.",
    overview: "Only profits arising from Hong Kong are taxable. Standard rate is 16.5% for corporations.",
    calculators: [
      { slug: "profits-tax-calculator", name: "Profits Tax Calculator", description: "Estimate business profits tax." }
    ],
    guides: [
      { slug: "profits-tax-guide", title: "Profits Tax Guide", description: "Understanding source of profits rules." }
    ],
    faqs: [
      { question: "What is the profits tax rate?", answer: "16.5% for corporations, 15% for unincorporated businesses." }
    ]
  }
];

export const hongKong: Country = {
  slug: "hong-kong",
  name: "Hong Kong",
  flag: "/logos/$($f.Directory.Name).png",
  continent: "Asia",
  officialTaxAuthority: "Inland Revenue Department (IRD)",
  taxAuthorityUrl: "https://www.ird.gov.hk",
  currency: "HKD",
  capital: "Hong Kong",
  overview: "Hong Kong operates a territorial tax system with low tax rates. Only profits sourced in Hong Kong are subject to profits tax.",
  taxCategories,
  popularCalculators: [
    { slug: "salaries-tax-calculator", name: "Salaries Tax Calculator", category: "salaries-tax" }
  ],
  relatedCountries: ["singapore", "malaysia", "china"],
  latestUpdates: [
    { date: "2024-04-01", title: "2024/25 Tax Rates Released", description: "IRD released updated tax rates for the new assessment year." }
  ]
};