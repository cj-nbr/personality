import type { Country, TaxCategory } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Individual and corporate income tax in Pakistan.",
    overview: "Progressive tax rates for individuals. Corporate tax rate is 29% for most companies.",
    calculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your Pakistan income tax." }
    ],
    guides: [
      { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Understanding Pakistani tax residency rules." }
    ],
    faqs: [
      { question: "What is the tax filing deadline?", answer: "September 30th for individuals, December 31st for companies." }
    ]
  },
  {
    slug: "sales-tax",
    name: "Sales Tax",
    description: "Sales tax on goods and services in Pakistan.",
    overview: "Standard sales tax rate is 18% on most goods and services.",
    calculators: [
      { slug: "sales-tax-calculator", name: "Sales Tax Calculator", description: "Calculate sales tax on transactions." }
    ],
    guides: [
      { slug: "sales-tax-guide", title: "Sales Tax Guide", description: "Understanding sales tax registration and filing." }
    ],
    faqs: [
      { question: "What is the sales tax rate?", answer: "18% standard rate." }
    ]
  }
];

export const pakistan: Country = {
  slug: "pakistan",
  name: "Pakistan",
  flag: "/logos/$($f.Directory.Name).png",
  continent: "Asia",
  officialTaxAuthority: "Federal Board of Revenue (FBR)",
  taxAuthorityUrl: "https://www.fbr.gov.pk",
  currency: "PKR",
  capital: "Islamabad",
  overview: "Pakistan has a progressive income tax system with rates from 0% to 35%. The tax year runs from July 1 to June 30.",
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" }
  ],
  relatedCountries: ["india", "bangladesh"],
  latestUpdates: [
    { date: "2024-06-01", title: "2024-25 Budget Tax Changes", description: "New tax brackets introduced in the federal budget." }
  ]
};