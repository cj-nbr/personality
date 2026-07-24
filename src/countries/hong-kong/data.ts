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
  flag: "/logos/hong-kong.png",
  continent: "Asia",
  officialTaxAuthority: "Inland Revenue Department (IRD)",
  taxAuthorityUrl: "https://www.ird.gov.hk",
  currency: "HKD",
  capital: "Hong Kong",
  population: "7.5 million",
  gdp: "$407 billion",
  officialLanguage: "Chinese (Cantonese and Mandarin), English",
  overview: "Hong Kong operates a territorial tax system with low tax rates, making it one of the most attractive jurisdictions for international business and investment. Only profits arising from or derived from Hong Kong are subject to tax. The city has no capital gains tax, no VAT, and no sales tax. The two main direct taxes are Salaries Tax (on employment income) and Profits Tax (on business profits).",
  taxSystemOverview: {
    incomeTax: "Salaries Tax uses progressive rates from 2% to 17% or a standard rate of 15%, whichever is lower. The two-tier system provides a lower effective rate for lower-income earners.",
    capitalGainsTax: "No capital gains tax in Hong Kong. Profits from the sale of capital assets are not taxable unless the IRD determines they are revenue receipts.",
    vatGstSalesTax: "Hong Kong has no VAT, GST, or sales tax. It is one of the few major economies with no consumption tax.",
    corporateTax: "Profits Tax at 16.5% for corporations and 15% for unincorporated businesses. Only profits sourced in Hong Kong are taxable.",
    payrollTax: "Salaries Tax is the primary payroll tax, calculated on employment income after deductions for MPF contributions, married person's allowance, and dependent child allowance."
  },
  taxCategories,
  popularCalculators: [
    { slug: "salaries-tax-calculator", name: "Salaries Tax Calculator", category: "salaries-tax" },
    { slug: "profits-tax-calculator", name: "Profits Tax Calculator", category: "profits-tax" }
  ],
  relatedCountries: ["singapore", "malaysia", "indonesia"],
  latestUpdates: [
    { date: "2024-04-01", title: "2024/25 Tax Rates Released", description: "IRD released updated tax rates and allowances for the 2024/25 tax year." },
    { date: "2024-01-01", title: "MPF Contribution Adjustments", description: "Mandatory Provident Fund contribution rates and ceilings updated for 2024." }
  ]
};