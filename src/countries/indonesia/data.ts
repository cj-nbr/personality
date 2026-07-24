import type { Country, TaxCategory } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Individual and corporate income tax in Indonesia.",
    overview: "Individual tax rates are progressive from 5% to 35%. Corporate tax rate is 22%.",
    calculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your Indonesian income tax." }
    ],
    guides: [
      { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Understanding Indonesian tax residency rules." }
    ],
    faqs: [
      { question: "What is the tax filing deadline?", answer: "April 15th for calendar year taxpayers." }
    ]
  },
  {
    slug: "vat",
    name: "VAT",
    description: "Value Added Tax in Indonesia.",
    overview: "VAT rate is generally 11% as of 2024, with some exceptions.",
    calculators: [
      { slug: "vat-calculator", name: "VAT Calculator", description: "Calculate VAT inclusive or exclusive amounts." }
    ],
    guides: [
      { slug: "vat-guide", title: "VAT Guide", description: "Understanding VAT registration and compliance." }
    ],
    faqs: [
      { question: "What is the VAT rate?", answer: "11% standard rate as of 2024." }
    ]
  }
];

export const indonesia: Country = {
  slug: "indonesia",
  name: "Indonesia",
  flag: "/logos/indonesia.png",
  continent: "Asia",
  officialTaxAuthority: "Direktorat Jenderal Pajak (DJP)",
  taxAuthorityUrl: "https://www.pajak.go.id",
  currency: "IDR",
  capital: "Jakarta",
  population: "277 million",
  gdp: "$1.3 trillion",
  officialLanguage: "Bahasa Indonesia",
  overview: "Indonesia has a self-assessment tax system where taxpayers are responsible for calculating and reporting their own tax obligations. The country imposes progressive personal income tax rates from 5% to 35%, and corporate tax at 22%. Indonesia also levies Value Added Tax (VAT) at 11%. The tax year follows the calendar year (January 1 to December 31), with individual tax returns due by April 30th.",
  taxSystemOverview: {
    incomeTax: "Progressive rates from 5% to 35% for individuals. Tax residents are taxed on worldwide income, while non-residents are taxed only on Indonesia-sourced income. Various deductions and allowances are available.",
    capitalGainsTax: "Capital gains are included in taxable income and taxed at the applicable individual income tax rates. No separate capital gains tax regime exists.",
    vatGstSalesTax: "VAT of 11% as of 2024, increased from 10%. VAT is a consumption tax levied on the supply of goods and services. Certain goods and services are VAT-exempt.",
    corporateTax: "22% for domestic corporations. Small and medium enterprises with annual turnover under certain thresholds may benefit from reduced rates.",
    payrollTax: "Withholding tax (PPh) applies to various types of payments including salary, professional fees, interest, rent, and dividends. Rates vary from 0% to 25% depending on the payment type and whether the recipient has a Tax Identification Number (NPWP)."
  },
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "vat-calculator", name: "VAT Calculator", category: "vat" }
  ],
  relatedCountries: ["singapore", "malaysia", "philippines", "hong-kong"],
  latestUpdates: [
    { date: "2024-01-01", title: "VAT Rate Increase", description: "VAT increased to 11% from 10% in 2024, the first rate change since VAT was introduced in 1985." },
    { date: "2024-01-01", title: "Updated Tax Rates", description: "DJP released updated withholding tax rates and fiscal year guidelines for 2024." }
  ]
};