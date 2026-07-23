import type { Country, TaxCategory } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Individual and corporate income tax in the Philippines.",
    overview: "Graduated tax rates for individuals from 0% to 35%. Corporate tax is 25% for domestic corporations.",
    calculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your Philippines income tax." }
    ],
    guides: [
      { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Understanding Philippine tax residency rules." }
    ],
    faqs: [
      { question: "What is the tax filing deadline?", answer: "April 15th for calendar year taxpayers." }
    ]
  },
  {
    slug: "vat",
    name: "VAT",
    description: "Value Added Tax in the Philippines.",
    overview: "VAT is 12% on most goods and services.",
    calculators: [
      { slug: "vat-calculator", name: "VAT Calculator", description: "Calculate VAT inclusive or exclusive amounts." }
    ],
    guides: [
      { slug: "vat-guide", title: "VAT Guide", description: "Understanding VAT registration and filing." }
    ],
    faqs: [
      { question: "What is the VAT rate?", answer: "12% standard rate." }
    ]
  }
];

export const philippines: Country = {
  slug: "philippines",
  name: "Philippines",
  flag: "/logos/$($f.Directory.Name).png",
  continent: "Asia",
  officialTaxAuthority: "Bureau of Internal Revenue (BIR)",
  taxAuthorityUrl: "https://www.bir.gov.ph",
  currency: "PHP",
  capital: "Manila",
  overview: "The Philippines has a progressive individual income tax system with rates from 0% to 35%. VAT is 12%.",
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" }
  ],
  relatedCountries: ["singapore", "indonesia", "malaysia"],
  latestUpdates: [
    { date: "2024-01-01", title: "2024 Tax Rates", description: "Updated tax brackets and VAT regulations for 2024." }
  ]
};