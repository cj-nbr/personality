import type { Country, TaxCategory } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Federal and state income tax obligations for individuals and businesses.",
    overview: "The US imposes income tax at federal, state, and sometimes local levels. Federal individual income tax is progressive with rates from 10% to 37%.",
    calculators: [
      { slug: "federal-income-tax", name: "Federal Income Tax Calculator", description: "Estimate your federal income tax liability." },
      { slug: "state-income-tax", name: "State Income Tax Calculator", description: "Compare state income tax rates and estimates." }
    ],
    guides: [
      { slug: "how-to-file", title: "How to File Your Income Tax Return", description: "Step-by-step guide to filing your US tax return." },
      { slug: "tax-brackets", title: "Understanding Tax Brackets", description: "Learn how progressive tax brackets work in the US." }
    ],
    faqs: [
      { question: "When is the tax filing deadline?", answer: "Typically April 15th. Extensions are available until October 15th." },
      { question: "Do I need to file if I live abroad?", answer: "US citizens and green card holders must file regardless of residence." }
    ]
  },
  {
    slug: "payroll-tax",
    name: "Payroll Tax",
    description: "Employer and employee payroll tax obligations including FICA.",
    overview: "Payroll taxes fund Social Security and Medicare. Both employers and employees contribute through FICA taxes.",
    calculators: [
      { slug: "payroll-tax-calculator", name: "Payroll Tax Calculator", description: "Calculate employer and employee payroll tax contributions." }
    ],
    guides: [
      { slug: "fica-guide", title: "FICA Tax Guide", description: "Complete guide to Social Security and Medicare taxes." }
    ],
    faqs: [
      { question: "What is the FICA tax rate?", answer: "7.65% for employees (6.2% Social Security + 1.45% Medicare) plus employer match." }
    ]
  },
  {
    slug: "corporate-tax",
    name: "Corporate Tax",
    description: "Federal corporate income tax and business entity taxes.",
    overview: "Corporate tax is levied on business profits. The current federal corporate tax rate is 21%.",
    calculators: [
      { slug: "corporate-tax-calculator", name: "Corporate Tax Calculator", description: "Estimate corporate income tax liability." }
    ],
    guides: [
      { slug: "business-entities", title: "Business Entity Tax Guide", description: "Compare tax obligations by business entity type." }
    ],
    faqs: [
      { question: "What is the corporate tax rate?", answer: "21% federal flat rate on taxable income." }
    ]
  },
  {
    slug: "capital-gains-tax",
    name: "Capital Gains Tax",
    description: "Tax on profits from the sale of investments and property.",
    overview: "Capital gains tax rates depend on holding period and income level. Short-term gains are taxed as ordinary income.",
    calculators: [
      { slug: "capital-gains-calculator", name: "Capital Gains Tax Calculator", description: "Estimate tax on investment gains." }
    ],
    guides: [
      { slug: "capital-gains-guide", title: "Capital Gains Tax Guide", description: "Understand short-term vs long-term capital gains." }
    ],
    faqs: [
      { question: "What is the capital gains tax rate?", answer: "0%, 15%, or 20% for long-term gains depending on income. Short-term gains are taxed at ordinary rates." }
    ]
  }
];

export const unitedStates: Country = {
  slug: "united-states",
  name: "United States",
  flag: "/logos/united-states.png",
  continent: "North America",
  officialTaxAuthority: "Internal Revenue Service (IRS)",
  taxAuthorityUrl: "https://www.irs.gov",
  currency: "USD",
  capital: "Washington, D.C.",
  overview: "The United States has a progressive federal income tax system with additional state and local taxes. Tax residents are taxed on worldwide income, while non-residents are taxed only on US-source income.",
  taxCategories,
  popularCalculators: [
    { slug: "federal-income-tax", name: "Federal Income Tax Calculator", category: "income-tax" },
    { slug: "capital-gains-calculator", name: "Capital Gains Tax Calculator", category: "capital-gains-tax" }
  ],
  relatedCountries: ["united-kingdom"],
  latestUpdates: [
    { date: "2024-01-01", title: "2024 Tax Brackets Updated", description: "IRS released updated tax brackets for 2024." }
  ]
};