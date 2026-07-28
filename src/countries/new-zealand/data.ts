import type { Country, TaxCategory, TaxBracket, TaxDeduction, TaxCredit, OfficialResource, ImportantDate, CountryFAQ, TaxConcept } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Individual and corporate income tax in New Zealand.",
    overview: "Individual tax rates range from 10.5% to 39% depending on income. Corporate tax is 28%.",
    calculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your New Zealand income tax." }
    ],
    guides: [
      { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Understanding New Zealand tax residency rules." }
    ],
    faqs: [
      { question: "What is the tax filing deadline?", answer: "July 7th for individuals, March 31st for companies." }
    ]
  },
  {
    slug: "gst",
    name: "GST",
    description: "Goods and Services Tax in New Zealand.",
    overview: "GST is a broad-based consumption tax at 15% on most goods and services.",
    calculators: [
      { slug: "gst-calculator", name: "GST Calculator", description: "Calculate GST inclusive or exclusive amounts." }
    ],
    guides: [
      { slug: "gst-guide", title: "GST Guide", description: "Understanding GST registration and filing." }
    ],
    faqs: [
      { question: "What is the GST rate?", answer: "15% standard rate." }
    ]
  }
];

const currentTaxBrackets: TaxBracket[] = [
  { label: "10.5%", rate: "10.5%", threshold: "Up to NZD $14,000", notes: "Tax-free threshold; 10.5% rate applies" },
  { label: "17.5%", rate: "17.5%", threshold: "NZD $14,001 – NZD $48,000", notes: "Resident individuals" },
  { label: "30%", rate: "30%", threshold: "NZD $48,001 – NZD $70,000", notes: "Resident individuals" },
  { label: "33%", rate: "33%", threshold: "NZD $70,001 – NZD $180,000", notes: "Resident individuals" },
  { label: "39%", rate: "39%", threshold: "Above NZD $180,000", notes: "Resident individuals" }
];

const majorDeductions: TaxDeduction[] = [
  { name: "Personal Tax Credit", description: "NZD $2,000 personal tax credit for individuals." },
  { name: "Student Loan Interest", description: "Deduction for student loan interest paid." },
  { name: "Donations", description: "Deduction for donations to approved charities (up to a percentage of income)." },
  { name: "Work-Related Expenses", description: "Deduction for work-related expenses not reimbursed by employer." },
  { name: "Home Office Expenses", description: "Deduction for expenses related to working from home." }
];

const credits: TaxCredit[] = [
  { name: "Family Tax Credit", description: "Tax credit for families with dependent children." },
  { name: "In-Work Tax Credit", description: "Tax credit for individuals in employment with dependent children." },
  { name: "Independent Earner Credit", description: "Credit for independent earners." }
];

const officialResources: OfficialResource[] = [
  { name: "Inland Revenue Department (IRD)", url: "https://www.ird.govt.nz", description: "Official New Zealand tax authority — tax filing, payment, and guidance." },
  { name: "IRD Tax Rates", url: "https://www.ird.govt.nz/tax-rates", description: "Current individual income tax rates and brackets." },
  { name: "GST Guide", url: "https://www.ird.govt.nz/gst", description: "GST registration, filing, and compliance." },
  { name: "myIR Portal", url: "https://www.ird.govt.nz/myir", description: "Online portal for filing tax returns and managing tax affairs." }
];

const importantDates: ImportantDate[] = [
  { date: "2025-04-01", title: "Tax Year Start", description: "New Zealand tax year runs from April 1 to March 31." },
  { date: "2025-03-31", title: "Tax Year End", description: "End of the New Zealand tax year." },
  { date: "2025-07-07", title: "Individual Tax Filing Deadline", description: "Deadline for individuals to file income tax returns." },
  { date: "2025-03-31", title: "Company Tax Filing Deadline", description: "Deadline for companies to file income tax returns." },
  { date: "2025-01-28", title: "GST Return Deadline", description: "Monthly GST return filing deadline." }
];

const countryFAQs: CountryFAQ[] = [
  { question: "What is the income tax rate in New Zealand?", answer: "Progressive rates from 10.5% to 39% depending on income level." },
  { question: "What is the GST rate?", answer: "15% standard rate on most goods and services." },
  { question: "Who is a tax resident in New Zealand?", answer: "An individual who is a resident or ordinarily resident in New Zealand, or has been present for 183 days or more in any 12-month period." },
  { question: "Is there capital gains tax in New Zealand?", answer: "No general capital gains tax, but bright-line rules apply to residential property sold within a specified holding period." },
  { question: "What is the tax filing deadline?", answer: "July 7th for individuals, March 31st for companies." }
];

const taxConcepts: TaxConcept[] = [
  { title: "Tax Residency", description: "New Zealand taxes residents on worldwide income and non-residents on NZ-sourced income. Residency is determined by the 183-day rule or permanent residence." },
  { title: "Bright-Line Test", description: "Residential property sold within a specified holding period (currently 10 years) may be subject to income tax on gains." },
  { title: "PAYE System", description: "Pay As You Earn (PAYE) is the system for collecting income tax from employment income. Employers deduct tax from wages and salaries." },
  { title: "ACC Earners Levy", description: "An additional levy on employment income to fund the Accident Compensation Corporation (ACC)." }
];

export const newZealand: Country = {
  slug: "new-zealand",
  name: "New Zealand",
  flag: "/logos/new-zealand.png",
  continent: "Oceania",
  officialTaxAuthority: "Inland Revenue Department (IRD)",
  taxAuthorityUrl: "https://www.ird.govt.nz",
  currency: "NZD",
  capital: "Wellington",
  population: "5.1 million",
  gdp: "$253 billion",
  officialLanguage: "English, Te Reo Māori, New Zealand Sign Language",
  overview: "New Zealand has a progressive income tax system with rates from 10.5% to 39%, depending on income level. The country also levies a 15% Goods and Services Tax (GST) on most goods and services. New Zealand taxes residents on worldwide income and non-residents on NZ-sourced income. The tax year runs from April 1 to March 31, with individual returns due by July 7th.",
  lastUpdated: "2025-06-15",
  taxYear: "April 1 – March 31",
  filingDeadline: "July 7 (individuals); March 31 (companies)",
  paymentDeadline: "Tax payable by the filing deadline; installments available",
  taxSystemOverview: {
    incomeTax: "Progressive rates from 10.5% to 39% for resident individuals. The tax-free threshold is $14,000 (10.5% rate applies to the first bracket). Māori taxpayers and those with student loans may have different effective rates.",
    capitalGainsTax: "No capital gains tax in New Zealand. However, bright-line rules apply to residential property sold within a specified holding period, with gains treated as ordinary income for tax purposes.",
    vatGstSalesTax: "GST is 15% on most goods and services. Zero-rated supplies include exports, residential rent, and financial services. GST registration is mandatory for businesses with taxable turnover exceeding $60,000.",
    corporateTax: "28% corporate tax rate on business profits. A lower 24% rate applies to companies with NZ-controlled foreign income.",
    payrollTax: "No separate payroll tax. Tax is collected through the Pay As You Earn (PAYE) system, with employer obligations to deduct and remit income tax and ACC earners levy from wages."
  },
  taxSystemDetails: {
    howTaxationWorks: "New Zealand uses a self-assessment system where taxpayers calculate and report their own tax obligations. The IRD administers tax collection and enforcement. Tax returns are filed annually, and taxpayers must pay their tax liability by the deadline. PAYE is the primary mechanism for collecting tax from employment income.",
    whoPaysTax: "Tax residents are taxed on worldwide income. Non-residents are taxed only on NZ-sourced income. Employers deduct PAYE from employee wages. Self-employed individuals make provisional tax payments.",
    residentVsNonResident: "Tax residents are individuals who are ordinarily resident in New Zealand or have been present for 183 days or more in any 12-month period. Residents are taxed on worldwide income. Non-residents are taxed only on NZ-sourced income.",
    personalIncomeTax: "New Zealand has a progressive income tax system with rates from 10.5% to 39%. The first NZD $14,000 is taxed at 10.5%. Various deductions and credits are available to reduce tax liability.",
    businessTaxOverview: "Corporate tax is 28% on business profits. A lower 24% rate applies to companies with NZ-controlled foreign income. GST of 15% applies to most goods and services.",
    importantConcepts: taxConcepts
  },
  currentTaxBrackets,
  standardDeductions: "NZD $2,000 personal tax credit. Various deductions available for work-related expenses, student loan interest, donations, and home office expenses.",
  majorDeductions,
  credits,
  importantDates,
  officialResources,
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "gst-calculator", name: "GST Calculator", category: "gst" }
  ],
  salaryCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" }
  ],
  capitalGainsCalculators: [],
  corporateCalculators: [],
  relatedCountries: ["singapore", "united-kingdom", "australia"],
  latestUpdates: [
    { date: "2024-03-31", title: "2024 Tax Rates Updated", description: "IRD released updated tax rates and thresholds for the 2024-25 tax year." },
    { date: "2024-01-01", title: "Bright-Line Period Extended", description: "Bright-line test for residential property extended to 10 years for properties acquired after 27 March 2021." }
  ],
  countryFAQs,
  educationalDisclaimer: "The tax information and calculators on this page are for educational and informational purposes only. They do not constitute professional tax advice. Tax laws are subject to change. Always consult a qualified tax professional for advice specific to your situation.",
  dataSources: ["Inland Revenue Department (IRD) New Zealand", "NZ Budget 2024", "IRD Tax Rate Tables"],
  calculationMethodology: "Tax calculations follow the New Zealand Income Tax Act 2007 and IRD regulations. Progressive rates are applied to taxable income after deductions and credits. GST is calculated on the taxable value of goods and services at 15%."
};
