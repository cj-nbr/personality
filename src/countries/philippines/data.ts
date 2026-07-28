import type { Country, TaxCategory, TaxBracket, TaxDeduction, TaxCredit, OfficialResource, ImportantDate, CountryFAQ, TaxConcept } from "../types";

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

const currentTaxBrackets: TaxBracket[] = [
  { label: "0%", rate: "0%", threshold: "Up to PHP 250,000", notes: "Annual taxable income" },
  { label: "20%", rate: "20%", threshold: "PHP 250,001 – PHP 400,000", notes: "Annual taxable income" },
  { label: "25%", rate: "25%", threshold: "PHP 400,001 – PHP 800,000", notes: "Annual taxable income" },
  { label: "30%", rate: "30%", threshold: "PHP 800,001 – PHP 2,000,000", notes: "Annual taxable income" },
  { label: "32%", rate: "32%", threshold: "PHP 2,000,001 – PHP 8,000,000", notes: "Annual taxable income" },
  { label: "35%", rate: "35%", threshold: "Above PHP 8,000,000", notes: "Annual taxable income" }
];

const majorDeductions: TaxDeduction[] = [
  { name: "Personal Exemption", description: "PHP 250,000 annual tax-free threshold for individuals." },
  { name: "SSS/GSIS Contributions", description: "Contributions to Social Security System (SSS) or Government Service Insurance System (GSIS) are deductible." },
  { name: "PhilHealth Contributions", description: "Philippine Health Insurance Corporation contributions are deductible." },
  { name: "Pag-IBIG Contributions", description: "Pag-IBIG Fund contributions are deductible." },
  { name: "Medical Expenses", description: "Deduction for medical expenses exceeding 10% of gross income." },
  { name: "Charitable Contributions", description: "Deduction for donations to approved charitable institutions." }
];

const credits: TaxCredit[] = [
  { name: "Withholding Tax Credit", description: "Credit for withholding tax deducted at source on compensation and other income." },
  { name: "Tax Treaty Credit", description: "Credit for taxes paid in other countries under tax treaty provisions." }
];

const officialResources: OfficialResource[] = [
  { name: "Bureau of Internal Revenue (BIR)", url: "https://www.bir.gov.ph", description: "Official Philippine tax authority — tax filing, payment, and guidance." },
  { name: "eFPS", url: "https://www.bir.gov.ph/efps", description: "Electronic Filing and Payment System for tax returns." },
  { name: "BIR Tax Rates", url: "https://www.bir.gov.ph/tax-rates", description: "Current individual and corporate income tax rates." },
  { name: "Taxpayer Assistance", url: "https://www.bir.gov.ph/assistance", description: "Taxpayer assistance and guidance services." }
];

const importantDates: ImportantDate[] = [
  { date: "2025-01-01", title: "Tax Year Start", description: "Philippine tax year follows the calendar year (January 1 – December 31)." },
  { date: "2025-04-15", title: "Individual Tax Filing Deadline", description: "Deadline for individuals to file annual income tax returns." },
  { date: "2025-04-15", title: "Corporate Tax Filing Deadline", description: "Deadline for corporations to file annual income tax returns." },
  { date: "2025-12-31", title: "Tax Year End", description: "End of the Philippine tax year." },
  { date: "2025-01-25", title: "Monthly Tax Return Deadline", description: "Deadline for monthly tax returns (25th of each month)." }
];

const countryFAQs: CountryFAQ[] = [
  { question: "What is the income tax rate in the Philippines?", answer: "Graduated rates from 0% to 35% based on annual taxable income. The first PHP 250,000 is exempt." },
  { question: "What is the VAT rate?", answer: "12% standard rate on most goods and services." },
  { question: "Who is a tax resident in the Philippines?", answer: "A resident citizen or a resident alien who is present in the Philippines for 183 days or more in a calendar year." },
  { question: "What is the corporate tax rate?", answer: "25% for domestic corporations. 30% for foreign corporations deriving income from Philippines sources." },
  { question: "When is the tax filing deadline?", answer: "April 15th for calendar year taxpayers." }
];

const taxConcepts: TaxConcept[] = [
  { title: "Tax Residency", description: "The Philippines taxes resident citizens on worldwide income and resident aliens on Philippine-sourced income. Non-resident aliens are taxed only on Philippine-sourced income." },
  { title: "Graduated Tax Rates", description: "The Philippines uses graduated income tax rates from 0% to 35%. The first PHP 250,000 is exempt from tax." },
  { title: "Withholding Tax", description: "Withholding tax on compensation is based on the employer's computation. Employers deduct and remit tax monthly." },
  { title: "TRAIN Tax Reform", description: "The Tax Reform for Acceleration and Inclusion (TRAIN) law rationalized VAT and enhanced the withholding tax system." }
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
  lastUpdated: "2025-06-15",
  taxYear: "Calendar Year (January 1 – December 31)",
  filingDeadline: "April 15 (individuals and corporations)",
  paymentDeadline: "Tax payable by April 15; monthly withholding remitted by the 25th of each month",
  taxSystemOverview: {
    incomeTax: "Graduated rates from 0% to 35% based on annual taxable income. The first PHP 250,000 is exempt. Tax rates increase progressively, with the highest rate of 35% applying to income exceeding PHP 8 million.",
    capitalGainsTax: "Capital gains on sale of real property are taxed at 6% of the gross selling price or Zonal Value, whichever is higher. Capital gains on shares of stock traded through the Philippine Stock Exchange are taxed at 0.5% on the gross selling price.",
    vatGstSalesTax: "VAT is 12% on most goods and services. Zero-rating applies to exports and international services. Certain goods and services are VAT-exempt, including basic necessities, agricultural products, and educational services.",
    corporateTax: "25% for domestic corporations. 30% for foreign corporations deriving income from Philippines sources. Minimum corporate income tax (MCIT) of 1% of gross sales applies to corporations with net losses.",
    payrollTax: "Withholding tax on compensation is based on the employer's computation of income tax. Employer deducts and remits tax monthly. Employee contributions to SSS, PhilHealth, and Pag-IBIG are also deducted from compensation."
  },
  taxSystemDetails: {
    howTaxationWorks: "The Philippines uses a self-assessment tax system where taxpayers calculate and report their own tax obligations. The BIR administers tax collection and enforcement. Tax returns are filed annually, and taxpayers must pay their tax liability by the deadline. Withholding tax is a key mechanism for collecting tax from compensation.",
    whoPaysTax: "Resident citizens are taxed on worldwide income. Resident aliens are taxed on Philippine-sourced income. Non-resident aliens are taxed only on Philippine-sourced income. Employers withhold tax from employee compensation.",
    residentVsNonResident: "Tax residents include resident citizens and resident aliens present in the Philippines for 183 days or more in a calendar year. Residents are taxed on worldwide income. Non-residents are taxed only on Philippine-sourced income.",
    personalIncomeTax: "The Philippines has a graduated income tax system with rates from 0% to 35%. The first PHP 250,000 is exempt from tax. Various deductions and exemptions are available.",
    businessTaxOverview: "Corporate tax is 25% for domestic corporations and 30% for foreign corporations. VAT is 12% on most goods and services. Minimum corporate income tax of 1% applies to corporations with net losses.",
    importantConcepts: taxConcepts
  },
  currentTaxBrackets,
  standardDeductions: "PHP 250,000 annual tax-free threshold for individuals. Additional deductions for SSS/GSIS, PhilHealth, Pag-IBIG, medical expenses, and charitable contributions.",
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
  relatedCountries: ["singapore", "indonesia", "malaysia", "thailand"],
  latestUpdates: [
    { date: "2024-01-01", title: "2024 Tax Rates", description: "Updated tax brackets and VAT regulations for 2024. BIR continues to implement taxpayer-friendly measures." },
    { date: "2024-01-01", title: "TRAIN 2 Tax Reform", description: "Continuing implementation of tax reform measures including rationalized VAT and enhanced withholding tax system." }
  ],
  countryFAQs,
  taxSystemSummary: "The Philippines has a graduated income tax system with rates from 0% to 35%, a 12% VAT on most goods and services, and various withholding taxes. The Bureau of Internal Revenue (BIR) administers the tax system. The tax year follows the calendar year.",
  employerWithholding: "Philippine employers withhold tax on employee compensation based on BIR withholding tax tables (alphalist). Employers deduct and remit withholding tax monthly. The withheld amount is credited against the employee's annual tax liability when filing the annual return.",
  whoShouldUse: [
    { type: "Employees", icon: "M20 7h-4V5c0-1.1-.9-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 14H4V9h16v10z", description: "Employed individuals receiving compensation income who want to estimate their annual tax after withholding tax credits." },
    { type: "Freelancers & Contractors", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", description: "Self-employed professionals, contractors, and gig workers who receive professional fees subject to withholding tax." },
    { type: "Business Owners", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", description: "Business owners and corporations who need to estimate corporate income tax at 25% and VAT obligations at 12%." },
    { type: "Expats", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", description: "Foreign employees and expats working in the Philippines who need to understand their tax residency status and obligations on Philippine-sourced income." }
  ],
  howToUseSteps: [
    { step: 1, title: "Enter Income", description: "Input your annual compensation income, business income, or other taxable income sources." },
    { step: 2, title: "Apply Deductions", description: "Enter applicable deductions such as SSS/GSIS, PhilHealth, Pag-IBIG contributions, and other allowable expenses." },
    { step: 3, title: "Choose Tax Year", description: "Select the appropriate tax year to apply the correct graduated tax rates and thresholds." },
    { step: 4, title: "Calculate", description: "Click Calculate to see your taxable income, tax liability, and effective tax rate under the graduated system." },
    { step: 5, title: "Review & File", description: "Review your results and compare against your withholding tax credits to estimate any refund or balance due." }
  ],
  educationalDisclaimer: "The tax information and calculators on this page are for educational and informational purposes only. They do not constitute professional tax advice. Tax laws are subject to change. Always consult a qualified tax professional for advice specific to your situation.",
  dataSources: ["Bureau of Internal Revenue (BIR) Philippines", "TRAIN Tax Reform Law", "BIR Revenue Regulations"],
  calculationMethodology: "Tax calculations follow the Philippine Tax Code and BIR regulations. Graduated rates are applied to taxable income after deductions and exemptions. VAT is calculated on the taxable value of goods and services at 12%."
};
