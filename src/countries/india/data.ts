import type { Country, TaxCategory } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Direct tax on individual and corporate income in India.",
    overview: "India has a progressive income tax system with rates from 0% to 30% depending on income slab and residency status.",
    calculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your Indian income tax liability." }
    ],
    guides: [
      { slug: "itr-guide", title: "ITR Filing Guide", description: "How to choose and file the correct ITR form." }
    ],
    faqs: [
      { question: "What is the ITR filing deadline?", answer: "July 31st for individuals unless extended." },
      { question: "What is the new tax regime?", answer: "A simplified regime with lower rates but limited deductions." }
    ]
  },
  {
    slug: "gst",
    name: "GST",
    description: "Goods and Services Tax - India's unified indirect tax.",
    overview: "GST is a multi-stage, destination-based tax levied on every value addition.",
    calculators: [
      { slug: "gst-calculator", name: "GST Calculator", description: "Calculate GST inclusive or exclusive amounts." }
    ],
    guides: [
      { slug: "gst-guide", title: "GST Complete Guide", description: "Understanding GST slabs, registration, and filing." }
    ],
    faqs: [
      { question: "What are the GST slabs?", answer: "0%, 5%, 12%, 18%, and 28% for various goods and services." }
    ]
  },
  {
    slug: "tds",
    name: "TDS",
    description: "Tax Deducted at Source on payments.",
    overview: "TDS is deducted by the payer before making certain payments. It acts as a prepayment of tax.",
    calculators: [
      { slug: "tds-calculator", name: "TDS Calculator", description: "Calculate TDS deductions for various payment types." }
    ],
    guides: [
      { slug: "tds-guide", title: "TDS Return Filing Guide", description: "Complete guide to TDS compliance and returns." }
    ],
    faqs: [
      { question: "What is TDS?", answer: "Tax Deducted at Source - a mechanism for collecting tax at the time of payment." }
    ]
  }
];

export const india: Country = {
  slug: "india",
  name: "India",
  flag: "/logos/india.png",
  continent: "Asia",
  officialTaxAuthority: "Central Board of Direct Taxes (CBDT)",
  taxAuthorityUrl: "https://www.incometax.gov.in",
  currency: "INR",
  capital: "New Delhi",
  population: "1.4 billion",
  gdp: "$3.7 trillion",
  officialLanguage: "Hindi and English (official languages); 22 scheduled languages recognised",
  overview: "India has one of the world's largest and most complex tax systems. The Income Tax Act of 1961 governs direct taxes, while the Goods and Services Tax (GST) Act unifies indirect taxation. India uses a self-assessment system where taxpayers calculate and declare their own tax liability. The tax year runs from April 1 to March 31, with returns due July 31 for individuals. India offers two tax regimes: the old regime with deductions and exemptions, and the new regime with lower slab rates but limited deductions.",
  taxSystemOverview: {
    incomeTax: "Progressive rates from 0% to 30% under both old and new regimes. The new regime offers concessional rates (0% up to ₹4L, 5% ₹4-8L, 10% ₹8-12L, 15% ₹12-16L, 20% ₹16-20L, 25% ₹20-24L, 30% above ₹24L). The old regime has lower rates but allows deductions under Sections 80C, 80D, HRA, and more.",
    capitalGainsTax: "Short-term capital gains taxed at applicable income tax rates. Long-term capital gains on equity funds and shares: 12.5% above ₹1 lakh (LTCG indexation for property). Long-term capital gains on other assets: 20% with indexation benefit.",
    vatGstSalesTax: "GST is a multi-stage, destination-based indirect tax. Rates: 0%, 5%, 12%, 18%, and 28%. GST is levied on most goods and services with input tax credit available for businesses.",
    corporateTax: "22% for domestic companies opting for reduced rate (without exemptions). 30% for other domestic companies. Foreign companies taxed at 40%. Surcharge and cess apply.",
    payrollTax: "Employer contributes 12% of basic pay to EPF (8.33% employer + 3.67% employee split). Professional tax varies by state (0-20% with annual cap). TDS is deducted monthly from salaries by employers."
  },
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "gst-calculator", name: "GST Calculator", category: "gst" },
    { slug: "tds-calculator", name: "TDS Calculator", category: "tds" }
  ],
  relatedCountries: ["singapore", "malaysia", "hong-kong", "pakistan"],
  latestUpdates: [
    { date: "2024-02-01", title: "Budget 2024-25 Tax Changes", description: "Union Budget 2024 introduced new tax provisions including increased TDS thresholds and updated deductions." },
    { date: "2024-01-01", title: "Standard Deduction Increased", description: "Standard deduction for salaried individuals increased to ₹75,000 under the new regime." },
    { date: "2023-04-01", title: "New Regime Tax Slabs Updated", description: "New tax regime slabs revised with additional benefits and expanded rebate under Section 87A." }
  ]
};