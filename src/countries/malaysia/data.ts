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
  flag: "/logos/malaysia.png",
  continent: "Asia",
  officialTaxAuthority: "Lembaga Hasil Dalam Negeri Malaysia (LHDNM)",
  taxAuthorityUrl: "https://www.hasil.gov.my",
  currency: "MYR",
  capital: "Kuala Lumpur",
  population: "33 million",
  gdp: "$432 billion",
  officialLanguage: "Bahasa Malaysia",
  overview: "Malaysia has a comprehensive tax system with progressive individual income tax rates from 0% to 30%, a flat corporate tax rate of 24%, and Sales and Service Tax (SST). The tax year in Malaysia runs from January 1 to December 31, with individual tax returns due by April 30th. Malaysia offers various tax reliefs and deductions including those for education, medical expenses, and home ownership.",
  taxSystemOverview: {
    incomeTax: "Progressive rates from 0% to 30% for resident individuals. Non-residents are taxed at a flat rate of 30% on Malaysia-sourced income. Various personal reliefs, deductions, and exemptions are available.",
    capitalGainsTax: "Capital gains are generally not subject to tax in Malaysia, except for gains from the disposal of real property and shares in real property companies, which are subject to Real Property Gains Tax (RPGT).",
    vatGstSalesTax: "Sales and Service Tax (SST) replaced the Goods and Services Tax (GST) in 2018. Sales Tax is generally 10% on manufactured goods. Service Tax is 8% on specified services.",
    corporateTax: "24% for resident corporations on taxable income. Small and medium enterprises with paid-up capital not exceeding RM2.5 million benefit from a partial exemption on the first RM600,000 of statutory income.",
    payrollTax: "Employer and employee contribute to the Employees Provident Fund (EPF). Employer contributes 13% and employees contribute 11% of monthly salary, subject to contribution caps."
  },
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "sst-calculator", name: "SST Calculator", category: "sst" }
  ],
  relatedCountries: ["singapore", "indonesia", "thailand"],
  latestUpdates: [
    { date: "2024-01-01", title: "Budget 2024 Tax Changes", description: "New tax reliefs, revised income tax rates, and updated EPF contribution rates announced." },
    { date: "2024-01-01", title: "Updated SST Rates", description: "LHDNM confirmed current Sales and Service Tax rates for the year." }
  ]
};