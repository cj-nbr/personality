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
  flag: "🇮🇳",
  continent: "Asia",
  officialTaxAuthority: "Central Board of Direct Taxes (CBDT)",
  taxAuthorityUrl: "https://www.incometax.gov.in",
  currency: "INR",
  capital: "New Delhi",
  overview: "India has a comprehensive tax system with direct and indirect taxes. The Income Tax Act governs direct taxes while GST unifies indirect taxation.",
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "gst-calculator", name: "GST Calculator", category: "gst" }
  ],
  relatedCountries: ["singapore", "malaysia", "hong-kong"],
  latestUpdates: [
    { date: "2024-02-01", title: "New Tax Regime Updates", description: "Budget 2024 changes to income tax slabs." }
  ]
};