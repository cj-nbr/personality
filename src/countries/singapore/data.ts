import type { Country, TaxCategory } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Individual and corporate income tax in Singapore.",
    overview: "Resident individuals pay progressive tax from 0% to 24%. Non-residents are taxed at flat rates or 24% whichever is lower.",
    calculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your Singapore income tax." }
    ],
    guides: [
      { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Determine your tax residency status in Singapore." }
    ],
    faqs: [
      { question: "What is the tax filing deadline?", answer: "April 15th for paper filing, April 18th for e-filing." }
    ]
  },
  {
    slug: "gst",
    name: "GST",
    description: "Goods and Services Tax in Singapore.",
    overview: "GST is a consumption tax levied on the supply of goods and services. Rate increased to 9% in 2024.",
    calculators: [
      { slug: "gst-calculator", name: "GST Calculator", description: "Calculate GST inclusive or exclusive amounts." }
    ],
    guides: [
      { slug: "gst-guide", title: "GST Guide", description: "Understanding GST registration and filing." }
    ],
    faqs: [
      { question: "What is the GST rate?", answer: "9% as of 2024." }
    ]
  },
  {
    slug: "stamp-duty",
    name: "Stamp Duty",
    description: "Tax on property and document transactions.",
    overview: "Stamp duty applies to property purchases and certain documents. Buyer's stamp duty applies to residential property.",
    calculators: [
      { slug: "stamp-duty-calculator", name: "Stamp Duty Calculator", description: "Calculate property stamp duty in Singapore." }
    ],
    guides: [
      { slug: "stamp-duty-guide", title: "Stamp Duty Guide", description: "Understanding property stamp duty in Singapore." }
    ],
    faqs: [
      { question: "When is stamp duty payable?", answer: "Within 14 days of signing the purchase agreement." }
    ]
  }
];

export const singapore: Country = {
  slug: "singapore",
  name: "Singapore",
  flag: "/logos/singapore.png",
  continent: "Asia",
  officialTaxAuthority: "Inland Revenue Authority of Singapore (IRAS)",
  taxAuthorityUrl: "https://www.iras.gov.sg",
  currency: "SGD",
  capital: "Singapore",
  population: "5.9 million",
  gdp: "$397 billion",
  officialLanguage: "English, Malay, Mandarin, Tamil",
  overview: "Singapore has a competitive, low-tax regime designed to attract businesses and investments. The country operates a territorial tax system where only income sourced in Singapore is taxed. Resident individuals pay progressive income tax rates from 0% to 24%, while non-residents are taxed at flat rates or 24% whichever is lower. Singapore has no capital gains tax and no inheritance tax, making it one of the most tax-friendly jurisdictions globally.",
  taxSystemOverview: {
    incomeTax: "Progressive rates from 0% to 24% for residents. Non-residents taxed at flat 15% or 22% (whichever is higher). Personal reliefs and tax exemptions available.",
    capitalGainsTax: "No capital gains tax in Singapore. Capital gains from the sale of property, shares, and other assets are not taxable.",
    vatGstSalesTax: "Goods and Services Tax (GST) is 9% as of 2024, increased from 8%. GST is a broad-based consumption tax on most goods and services.",
    corporateTax: "Flat 17% corporate tax rate on taxable income. Various tax incentives and exemptions available for startups and specific industries.",
    payrollTax: "Central Provident Fund (CPF) contributions by both employer and employee. Employer contributes up to 17% and employee contributes up to 20% of monthly salary, subject to CPF contribution ceilings."
  },
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "stamp-duty-calculator", name: "Stamp Duty Calculator", category: "stamp-duty" },
    { slug: "gst-calculator", name: "GST Calculator", category: "gst" }
  ],
  relatedCountries: ["malaysia", "hong-kong", "indonesia", "philippines"],
  latestUpdates: [
    { date: "2024-01-01", title: "GST Rate Increase to 9%", description: "Singapore GST increased from 8% to 9% in 2024, the first rate increase since 2007." },
    { date: "2024-01-01", title: "New Tax Year Updates", description: "IRAS released updated tax rates and reliefs for the 2024 Year of Assessment." }
  ]
};