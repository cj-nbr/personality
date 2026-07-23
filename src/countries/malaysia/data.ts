import type { Country, TaxCategory } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Individual and corporate income tax in Malaysia.",
    overview: "Resident individuals pay progressive tax from 0% to 30%. Non-residents pay a flat 30%.",
    calculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your Malaysian income tax." }
    ],
    guides: [
      { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Understanding Malaysian tax residency rules." }
    ],
    faqs: [
      { question: "What is the tax filing deadline?", answer: "April 30th for individuals, June 30th for businesses." }
    ]
  },
  {
    slug: "sst",
    name: "SST",
    description: "Sales and Service Tax in Malaysia.",
    overview: "Sales Tax is typically 10% and Service Tax is 8% on specified services.",
    calculators: [
      { slug: "sst-calculator", name: "SST Calculator", description: "Calculate SST on sales and services." }
    ],
    guides: [
      { slug: "sst-guide", title: "SST Guide", description: "Understanding Sales and Service Tax in Malaysia." }
    ],
    faqs: [
      { question: "What is the SST rate?", answer: "Sales Tax: typically 10%. Service Tax: 8%." }
    ]
  }
];

export const malaysia: Country = {
  slug: "malaysia",
  name: "Malaysia",
  flag: "/logos/$($f.Directory.Name).png",
  continent: "Asia",
  officialTaxAuthority: "Lembaga Hasil Dalam Negeri Malaysia (LHDNM)",
  taxAuthorityUrl: "https://www.hasil.gov.my",
  currency: "MYR",
  capital: "Kuala Lumpur",
  overview: "Malaysia has a progressive income tax system with rates from 0% to 30%. The country also imposes SST (Sales and Service Tax).",
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" }
  ],
  relatedCountries: ["singapore", "indonesia", "thailand"],
  latestUpdates: [
    { date: "2024-01-01", title: "Budget 2024 Tax Changes", description: "New tax reliefs and revised income tax rates announced." }
  ]
};