import type { Country, TaxCategory } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Individual and corporate income tax in the UK.",
    overview: "Personal allowance up to £12,570. Basic rate 20%, higher rate 40%, additional rate 45%.",
    calculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your UK income tax." }
    ],
    guides: [
      { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Understanding UK tax residency and domicile rules." }
    ],
    faqs: [
      { question: "What is the personal allowance?", answer: "£12,570 for 2024/25 - income below this is tax-free." }
    ]
  },
  {
    slug: "vat",
    name: "VAT",
    description: "Value Added Tax in the UK.",
    overview: "Standard VAT rate is 20%. Reduced rate of 5% and zero rate apply to certain goods and services.",
    calculators: [
      { slug: "vat-calculator", name: "VAT Calculator", description: "Calculate VAT inclusive or exclusive amounts." }
    ],
    guides: [
      { slug: "vat-guide", title: "VAT Guide", description: "Understanding VAT registration, returns, and compliance." }
    ],
    faqs: [
      { question: "What is the VAT rate?", answer: "20% standard rate." }
    ]
  },
  {
    slug: "national-insurance",
    name: "National Insurance",
    description: "National Insurance contributions for state benefits and pension.",
    overview: "NI contributions are based on earnings and determine eligibility for state pension and benefits.",
    calculators: [
      { slug: "ni-calculator", name: "National Insurance Calculator", description: "Calculate your National Insurance contributions." }
    ],
    guides: [
      { slug: "ni-guide", title: "National Insurance Guide", description: "Understanding NI classes and contributions." }
    ],
    faqs: [
      { question: "What are National Insurance rates?", answer: "Class 1 NI is 8% on earnings between £242 and £967 per week, then 2% above." }
    ]
  }
];

export const unitedKingdom: Country = {
  slug: "united-kingdom",
  name: "United Kingdom",
  flag: "/logos/$($f.Directory.Name).png",
  continent: "Europe",
  officialTaxAuthority: "HM Revenue & Customs (HMRC)",
  taxAuthorityUrl: "https://www.gov.uk/hmrc",
  currency: "GBP",
  capital: "London",
  overview: "The UK has a progressive income tax system with three tax bands. VAT is 20% and National Insurance contributions fund state benefits.",
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "vat-calculator", name: "VAT Calculator", category: "vat" }
  ],
  relatedCountries: ["united-states", "canada", "australia"],
  latestUpdates: [
    { date: "2024-04-06", title: "2024/25 Tax Year Updates", description: "New tax rates and thresholds announced for the new tax year." }
  ]
};