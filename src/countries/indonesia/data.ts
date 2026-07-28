import type { Country, TaxCategory, TaxBracket, TaxDeduction, TaxCredit, OfficialResource, ImportantDate, CountryFAQ, TaxConcept } from "../types";

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

const currentTaxBrackets: TaxBracket[] = [
  { label: "5%", rate: "5%", threshold: "Up to IDR 60,000,000", notes: "Taxable income up to IDR 60 million" },
  { label: "15%", rate: "15%", threshold: "IDR 60,000,001 – IDR 250,000,000", notes: "Taxable income in this range" },
  { label: "25%", rate: "25%", threshold: "IDR 250,000,001 – IDR 500,000,000", notes: "Taxable income in this range" },
  { label: "30%", rate: "30%", threshold: "IDR 500,000,001 – IDR 5,000,000,000", notes: "Taxable income in this range" },
  { label: "35%", rate: "35%", threshold: "Above IDR 5,000,000,000", notes: "Taxable income above IDR 5 billion" }
];

const majorDeductions: TaxDeduction[] = [
  { name: "Non-Taxable Income", description: "Up to IDR 54,000,000 per year (approximately) is non-taxable for individual taxpayers." },
  { name: "Marriage Allowance", description: "Deduction for taxpayers who are married." },
  { name: "Child Allowance", description: "Deduction for each dependent child, up to a maximum of 3 children." },
  { name: "Medical Expenses", description: "Deduction for medical expenses not reimbursed by insurance." },
  { name: "Charitable Contributions", description: "Deduction for approved charitable contributions." }
];

const credits: TaxCredit[] = [
  { name: "Tax Deduction for Dependents", description: "IDR 4,500,000 per dependent child (up to 3 children)." },
  { name: "Property Tax Deduction", description: "Deduction for property tax (PBB) paid." }
];

const officialResources: OfficialResource[] = [
  { name: "Direktorat Jenderal Pajak (DJP)", url: "https://www.pajak.go.id", description: "Official Indonesian tax authority — tax filing, payment, and guidance." },
  { name: "e-Filing Portal", url: "https://efiling.pajak.go.id", description: "Online platform for filing tax returns and making payments." },
  { name: "DJP Tax Rates", url: "https://www.pajak.go.id/en/tax-rates", description: "Current individual and corporate income tax rates and brackets." },
  { name: "Taxpayer Services", url: "https://www.pajak.go.id/en/services", description: "Taxpayer services including registration, permits, and consultations." }
];

const importantDates: ImportantDate[] = [
  { date: "2025-01-01", title: "Tax Year Start", description: "Indonesian tax year follows the calendar year (January 1 – December 31)." },
  { date: "2025-03-31", title: "Annual Tax Return Deadline", description: "Deadline for individual taxpayers to file annual income tax returns." },
  { date: "2025-03-31", title: "Corporate Tax Return Deadline", description: "Deadline for corporate taxpayers to file annual income tax returns." },
  { date: "2025-04-15", title: "Final Tax Payment Deadline", description: "Deadline for payment of final tax for the tax year." },
  { date: "2025-06-30", title: "Annual VAT Return Deadline", description: "Deadline for filing annual VAT returns." }
];

const countryFAQs: CountryFAQ[] = [
  { question: "What is the income tax rate in Indonesia?", answer: "Progressive rates from 5% to 35% for individuals based on taxable income." },
  { question: "What is the VAT rate?", answer: "11% standard rate as of 2024." },
  { question: "Who is a tax resident in Indonesia?", answer: "An individual who is present in Indonesia for 183 days or more in a tax year, or has a permanent place of abode in Indonesia." },
  { question: "What is the corporate tax rate?", answer: "22% for domestic corporations. Small and medium enterprises may benefit from reduced rates." },
  { question: "When is the tax filing deadline?", answer: "March 31st for individual and corporate annual tax returns." }
];

const taxConcepts: TaxConcept[] = [
  { title: "Tax Residency", description: "Indonesia taxes residents on worldwide income and non-residents on Indonesia-sourced income. Residency is determined by 183+ days presence or permanent abode." },
  { title: "Self-Assessment System", description: "Indonesia uses a self-assessment system where taxpayers calculate and report their own tax obligations." },
  { title: "Withholding Tax", description: "Withholding tax (PPh) applies to various payments including salary, professional fees, interest, rent, and dividends." },
  { title: "VAT", description: "VAT is a consumption tax levied on the supply of goods and services at 11% as of 2024." }
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
  lastUpdated: "2025-06-15",
  taxYear: "Calendar Year (January 1 – December 31)",
  filingDeadline: "March 31 (annual returns); April 30 (extended for individuals)",
  paymentDeadline: "Tax payable by March 31; installments due monthly or quarterly",
  taxSystemOverview: {
    incomeTax: "Progressive rates from 5% to 35% for individuals. Tax residents are taxed on worldwide income, while non-residents are taxed only on Indonesia-sourced income. Various deductions and allowances are available.",
    capitalGainsTax: "Capital gains are included in taxable income and taxed at the applicable individual income tax rates. No separate capital gains tax regime exists.",
    vatGstSalesTax: "VAT of 11% as of 2024, increased from 10%. VAT is a consumption tax levied on the supply of goods and services. Certain goods and services are VAT-exempt.",
    corporateTax: "22% for domestic corporations. Small and medium enterprises with annual turnover under certain thresholds may benefit from reduced rates.",
    payrollTax: "Withholding tax (PPh) applies to various types of payments including salary, professional fees, interest, rent, and dividends. Rates vary from 0% to 25% depending on the payment type and whether the recipient has a Tax Identification Number (NPWP)."
  },
  taxSystemDetails: {
    howTaxationWorks: "Indonesia uses a self-assessment tax system where taxpayers are responsible for calculating and reporting their own tax obligations. The DJP administers tax collection and enforcement. Tax returns are filed annually, and taxpayers must calculate and pay their tax liability.",
    whoPaysTax: "Tax residents are taxed on worldwide income. Non-residents are taxed only on Indonesia-sourced income. Companies are taxed on Indonesian-sourced income. Withholding tax applies to various payments made to both residents and non-residents.",
    residentVsNonResident: "Tax residents are individuals present in Indonesia for 183 days or more in a tax year, or who have a permanent place of abode. Residents are taxed on worldwide income. Non-residents are taxed only on Indonesia-sourced income.",
    personalIncomeTax: "Indonesia has a progressive income tax system with rates from 5% to 35%. The first IDR 60 million of taxable income is taxed at 5%. Various deductions and allowances are available to reduce taxable income.",
    businessTaxOverview: "Corporate tax is 22% for domestic corporations. SMEs with turnover below certain thresholds may benefit from reduced rates. Withholding tax applies to various business payments.",
    importantConcepts: taxConcepts
  },
  currentTaxBrackets,
  standardDeductions: "Up to IDR 54,000,000 in non-taxable income per year for individual taxpayers. Additional deductions for marriage, children, medical expenses, and charitable contributions.",
  majorDeductions,
  credits,
  importantDates,
  officialResources,
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "vat-calculator", name: "VAT Calculator", category: "vat" }
  ],
  salaryCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" }
  ],
  capitalGainsCalculators: [],
  corporateCalculators: [],
  relatedCountries: ["singapore", "malaysia", "philippines", "hong-kong"],
  latestUpdates: [
    { date: "2024-01-01", title: "VAT Rate Increase", description: "VAT increased to 11% from 10% in 2024, the first rate change since VAT was introduced in 1985." },
    { date: "2024-01-01", title: "Updated Tax Rates", description: "DJP released updated withholding tax rates and fiscal year guidelines for 2024." }
  ],
  countryFAQs,
  educationalDisclaimer: "The tax information and calculators on this page are for educational and informational purposes only. They do not constitute professional tax advice. Tax laws are subject to change. Always consult a qualified tax professional for advice specific to your situation.",
  dataSources: ["Direktorat Jenderal Pajak (DJP)", "Indonesian Ministry of Finance", "DJP Tax Circulars"],
  calculationMethodology: "Tax calculations follow the Indonesian Income Tax Law and DJP regulations. Progressive rates are applied to taxable income after deductions and allowances. VAT is calculated on the taxable value of goods and services at the prevailing rate."
};
