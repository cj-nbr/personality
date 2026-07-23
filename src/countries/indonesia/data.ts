import type { Country, TaxCategory } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Individual and corporate income tax in Indonesia.",
    overview: "Individual tax rates are progressive from 5% to 35%. Corporate tax rate is 22%.",
    calculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your Indonesian income tax." }
    ],
    guides: [
      { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Understanding Indonesian tax residency rules." }
    ],
    faqs: [
      { question: "What is the tax filing deadline?", answer: "April 15th for calendar year taxpayers." }
    ]
  },
  {
    slug: "vat",
    name: "VAT",
    description: "Value Added Tax in Indonesia.",
    overview: "VAT rate is generally 11% as of 2024, with some exceptions.",
    calculators: [
      { slug: "vat-calculator", name: "VAT Calculator", description: "Calculate VAT inclusive or exclusive amounts." }
    ],
    guides: [
      { slug: "vat-guide", title: "VAT Guide", description: "Understanding VAT registration and compliance." }
    ],
    faqs: [
      { question: "What is the VAT rate?", answer: "11% standard rate as of 2024." }
    ]
  }
];

export const indonesia: Country = {
  slug: "indonesia",
  name: "Indonesia",
  flag: "🇮🇩",
  continent: "Asia",
  officialTaxAuthority: "Direktorat Jenderal Pajak (DJP)",
  taxAuthorityUrl: "https://www.pajak.go.id",
  currency: "IDR",
  capital: "Jakarta",
  overview: "Indonesia has a progressive individual income tax system and corporate tax at 22%. The country uses a self-assessment system.",
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" }
  ],
  relatedCountries: ["singapore", "malaysia", "philippines"],
  latestUpdates: [
    { date: "2024-01-01", title: "VAT Rate Increase", description: "VAT increased to 11% from 10% in 2024." }
  ]
};