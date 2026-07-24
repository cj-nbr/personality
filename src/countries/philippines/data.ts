import type { Country, TaxCategory } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Individual and corporate income tax in the Philippines.",
    overview: "Graduated tax rates for individuals from 0% to 35%. Corporate tax is 25% for domestic corporations.",
    calculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your Philippines income tax." }
    ],
    guides: [
      { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Understanding Philippine tax residency rules." }
    ],
    faqs: [
      { question: "What is the tax filing deadline?", answer: "April 15th for calendar year taxpayers." }
    ]
  },
  {
    slug: "vat",
    name: "VAT",
    description: "Value Added Tax in the Philippines.",
    overview: "VAT is 12% on most goods and services.",
    calculators: [
      { slug: "vat-calculator", name: "VAT Calculator", description: "Calculate VAT inclusive or exclusive amounts." }
    ],
    guides: [
      { slug: "vat-guide", title: "VAT Guide", description: "Understanding VAT registration and filing." }
    ],
    faqs: [
      { question: "What is the VAT rate?", answer: "12% standard rate." }
    ]
  }
];

export const philippines: Country = {
  slug: "philippines",
  name: "Philippines",
  flag: "/logos/philippines.png",
  continent: "Asia",
  officialTaxAuthority: "Bureau of Internal Revenue (BIR)",
  taxAuthorityUrl: "https://www.bir.gov.ph",
  currency: "PHP",
  capital: "Manila",
  population: "117 million",
  gdp: "$404 billion",
  officialLanguage: "Filipino and English",
  overview: "The Philippines has a graduated income tax system with rates from 0% to 35% for individuals. Corporate tax is 25% for domestic corporations and 30% for foreign corporations. Value Added Tax (VAT) is 12% on most goods and services. The Bureau of Internal Revenue (BIR) administers the tax system. The tax year follows the calendar year, with individual returns due by April 15th.",
  taxSystemOverview: {
    incomeTax: "Graduated rates from 0% to 35% based on annual taxable income. The first PHP 250,000 is exempt. Tax rates increase progressively, with the highest rate of 35% applying to income exceeding PHP 8 million.",
    capitalGainsTax: "Capital gains on sale of real property are taxed at 6% of the gross selling price or Zonal Value, whichever is higher. Capital gains on shares of stock traded through the Philippine Stock Exchange are taxed at 0.5% on the gross selling price.",
    vatGstSalesTax: "VAT is 12% on most goods and services. Zero-rating applies to exports and international services. Certain goods and services are VAT-exempt, including basic necessities, agricultural products, and educational services.",
    corporateTax: "25% for domestic corporations. 30% for foreign corporations deriving income from Philippines sources. Minimum corporate income tax (MCIT) of 1% of gross sales applies to corporations with net losses.",
    payrollTax: "Withholding tax on compensation is based on the employer's computation of income tax. Employer deducts and remits tax monthly. Employee contributions to SSS, PhilHealth, and Pag-IBIG are also deducted from compensation."
  },
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "vat-calculator", name: "VAT Calculator", category: "vat" }
  ],
  relatedCountries: ["singapore", "indonesia", "malaysia", "thailand"],
  latestUpdates: [
    { date: "2024-01-01", title: "2024 Tax Rates", description: "Updated tax brackets and VAT regulations for 2024. BIR continues to implement taxpayer-friendly measures." },
    { date: "2024-01-01", title: "TRAIN 2 Tax Reform", description: "Continuing implementation of tax reform measures including rationalized VAT and enhanced withholding tax system." }
  ]
};