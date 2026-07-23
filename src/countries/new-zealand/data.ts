import type { Country, TaxCategory } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Individual and corporate income tax in New Zealand.",
    overview: "Individual tax rates range from 10.5% to 39% depending on income. Corporate tax is 28%.",
    calculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your New Zealand income tax." }
    ],
    guides: [
      { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Understanding New Zealand tax residency rules." }
    ],
    faqs: [
      { question: "What is the tax filing deadline?", answer: "July 7th for individuals, March 31st for companies." }
    ]
  },
  {
    slug: "gst",
    name: "GST",
    description: "Goods and Services Tax in New Zealand.",
    overview: "GST is a broad-based consumption tax at 15% on most goods and services.",
    calculators: [
      { slug: "gst-calculator", name: "GST Calculator", description: "Calculate GST inclusive or exclusive amounts." }
    ],
    guides: [
      { slug: "gst-guide", title: "GST Guide", description: "Understanding GST registration and filing." }
    ],
    faqs: [
      { question: "What is the GST rate?", answer: "15% standard rate." }
    ]
  }
];

export const newZealand: Country = {
  slug: "new-zealand",
  name: "New Zealand",
  flag: "🇳🇿",
  continent: "Oceania",
  officialTaxAuthority: "Inland Revenue Department (IRD)",
  taxAuthorityUrl: "https://www.ird.govt.nz",
  currency: "NZD",
  capital: "Wellington",
  overview: "New Zealand has a progressive income tax system with GST of 15%. Tax is levied on worldwide income for residents.",
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" }
  ],
  relatedCountries: ["australia", "singapore", "united-kingdom"],
  latestUpdates: [
    { date: "2024-03-31", title: "2024 Tax Rates Updated", description: "IRD released updated tax rates for 2024." }
  ]
};