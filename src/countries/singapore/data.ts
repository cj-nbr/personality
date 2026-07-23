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
  flag: "🇸🇬",
  continent: "Asia",
  officialTaxAuthority: "Inland Revenue Authority of Singapore (IRAS)",
  taxAuthorityUrl: "https://www.iras.gov.sg",
  currency: "SGD",
  capital: "Singapore",
  overview: "Singapore has a low-tax regime with resident tax rates from 0% to 24%. The country operates a territorial tax system with various tax incentives.",
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "stamp-duty-calculator", name: "Stamp Duty Calculator", category: "stamp-duty" }
  ],
  relatedCountries: ["malaysia", "hong-kong", "indonesia"],
  latestUpdates: [
    { date: "2024-01-01", title: "GST Rate Increase to 9%", description: "Singapore GST increased from 8% to 9% in 2024." }
  ]
};