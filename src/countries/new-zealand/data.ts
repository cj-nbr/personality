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
  flag: "/logos/new-zealand.png",
  continent: "Oceania",
  officialTaxAuthority: "Inland Revenue Department (IRD)",
  taxAuthorityUrl: "https://www.ird.govt.nz",
  currency: "NZD",
  capital: "Wellington",
  population: "5.1 million",
  gdp: "$253 billion",
  officialLanguage: "English, Te Reo Māori, New Zealand Sign Language",
  overview: "New Zealand has a progressive income tax system with rates from 10.5% to 39%, depending on income level. The country also levies a 15% Goods and Services Tax (GST) on most goods and services. New Zealand taxes residents on worldwide income and non-residents on NZ-sourced income. The tax year runs from April 1 to March 31, with individual returns due by July 7th.",
  taxSystemOverview: {
    incomeTax: "Progressive rates from 10.5% to 39% for resident individuals. The tax-free threshold is $14,000 (10.5% rate applies to the first bracket). Māori taxpayers and those with student loans may have different effective rates.",
    capitalGainsTax: "No capital gains tax in New Zealand. However, bright-line rules apply to residential property sold within a specified holding period, with gains treated as ordinary income for tax purposes.",
    vatGstSalesTax: "GST is 15% on most goods and services. Zero-rated supplies include exports, residential rent, and financial services. GST registration is mandatory for businesses with taxable turnover exceeding $60,000.",
    corporateTax: "28% corporate tax rate on business profits. A lower 24% rate applies to companies with NZ-controlled foreign income.",
    payrollTax: "No separate payroll tax. Tax is collected through the Pay As You Earn (PAYE) system, with employer obligations to deduct and remit income tax and ACC earners' levy from wages."
  },
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "gst-calculator", name: "GST Calculator", category: "gst" }
  ],
  relatedCountries: ["singapore", "united-kingdom", "australia"],
  latestUpdates: [
    { date: "2024-03-31", title: "2024 Tax Rates Updated", description: "IRD released updated tax rates and thresholds for the 2024-25 tax year." },
    { date: "2024-01-01", title: "Bright-Line Period Extended", description: "Bright-line test for residential property extended to 10 years for properties acquired after 27 March 2021." }
  ]
};