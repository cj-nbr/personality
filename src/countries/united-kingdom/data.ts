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
  flag: "/logos/united-kingdom.png",
  continent: "Europe",
  officialTaxAuthority: "HM Revenue & Customs (HMRC)",
  taxAuthorityUrl: "https://www.gov.uk/hmrc",
  currency: "GBP",
  capital: "London",
  population: "67 million",
  gdp: "$3.1 trillion",
  officialLanguage: "English",
  overview: "The United Kingdom has a comprehensive tax system administered by HMRC. The tax year runs from April 6 to April 5. The UK taxes residents on worldwide income and non-residents on UK-sourced income. The system includes Income Tax, National Insurance contributions, Value Added Tax (VAT), Capital Gains Tax, Corporation Tax, and Inheritance Tax. Scotland has its own income tax rates and brackets separate from England, Wales, and Northern Ireland.",
  taxSystemOverview: {
    incomeTax: "Three-band progressive system: Basic rate 20% (up to £50,270), Higher rate 40% (£50,271 to £125,140), Additional rate 45% (above £125,140). Personal allowance of £12,570 reduces taxable income. Scotland has separate rates and bands.",
    capitalGainsTax: "10% for basic rate taxpayers and 20% for higher/additional rate taxpayers on most assets. 18%/28% on residential property. Annual exempt amount of £3,000. No CGT on transfers between spouses.",
    vatGstSalesTax: "Standard VAT rate of 20%. Reduced rate of 5% for certain goods and services. Zero rate for essential items including most food and children's clothing. Some goods and services are VAT-exempt.",
    corporateTax: "25% for companies with profits over £250,000. 19% for small companies with profits up to £50,000. Marginal relief for companies between £50,000 and £250,000.",
    payrollTax: "Class 1 National Insurance: 8% on earnings between £12,570 and £50,270, then 2% above. Employer contributions mirror employee rates. Class 2 (flat weekly) and Class 4 (on profits) for self-employed individuals."
  },
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "vat-calculator", name: "VAT Calculator", category: "vat" },
    { slug: "ni-calculator", name: "National Insurance Calculator", category: "national-insurance" }
  ],
  relatedCountries: ["united-states", "canada", "australia", "new-zealand"],
  latestUpdates: [
    { date: "2024-04-06", title: "2024/25 Tax Year Updates", description: "New tax rates and thresholds for the 2024/25 tax year including updated personal allowance and NI thresholds." },
    { date: "2024-01-01", title: "VAT Threshold Changes", description: "HMRC updated VAT registration threshold and enforcement policies for the new year." },
    { date: "2023-10-06", title: "Autumn Statement Tax Changes", description: "Announcement of new tax measures including National Insurance reductions and property tax updates." }
  ]
};