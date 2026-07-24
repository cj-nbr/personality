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
  flag: "/logos/pakistan.png",
  continent: "Asia",
  officialTaxAuthority: "Federal Board of Revenue (FBR)",
  taxAuthorityUrl: "https://www.fbr.gov.pk",
  currency: "PKR",
  capital: "Islamabad",
  population: "230 million",
  gdp: "$376 billion",
  officialLanguage: "Urdu (national language); English (official)",
  overview: "Pakistan has a progressive income tax system with rates from 0% to 35% for individuals. The tax year runs from July 1 to June 30. Pakistan also imposes Sales Tax at 18% on most goods and services. The Federal Board of Revenue (FBR) administers direct and indirect taxation. Tax compliance has been improving with digitalization and automation of tax processes.",
  taxSystemOverview: {
    incomeTax: "Progressive rates from 0% to 35% for salaried individuals. Tax is levied on worldwide income for residents and Pakistan-sourced income for non-residents. Various deductions and exemptions are available under the Income Tax Ordinance 2001.",
    capitalGainsTax: "Capital gains are taxed as part of ordinary income. For immovable property, the withholding tax on sale applies at the time of transaction. Capital gains on listed shares are taxed at 12.5% for filers and 15% for non-filers.",
    vatGstSalesTax: "Standard sales tax rate of 18% on most goods and services. Exemptions apply to certain essential items including unprocessed agricultural products and some healthcare services.",
    corporateTax: "29% for most companies. Banking companies are taxed at 35%. Small companies with paid-up capital below certain thresholds benefit from a reduced rate of 22%.",
    payrollTax: "Withholding tax applies to salaries under Section 159. The rate depends on whether the taxpayer is a filer (2.5% quarterly for salaried) or non-filer (higher rates apply)."
  },
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "sales-tax-calculator", name: "Sales Tax Calculator", category: "sales-tax" }
  ],
  relatedCountries: ["india", "bangladesh"],
  latestUpdates: [
    { date: "2024-06-01", title: "2024-25 Budget Tax Changes", description: "New tax brackets and reliefs introduced in the federal budget for FY 2024-25." },
    { date: "2024-01-01", title: "FBR Digital Initiatives", description: "FBR continues to streamline tax filing and collection through digital platforms." }
  ]
};