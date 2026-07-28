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
  taxSystemSummary: "New Zealand has a progressive income tax system with rates from 10.5% to 39%, a 15% GST on most goods and services, and no general capital gains tax. The tax year runs from April 1 to March 31, with individual returns due July 7th.",
  employerWithholding: "New Zealand employers deduct PAYE (Pay As You Earn) income tax and ACC earners levy from employee wages based on the applicable tax code. Employers also deduct KiwiSaver contributions if the employee is a member. Taxpayers file annual tax returns and IRD assesses their final liability.",
  whoShouldUse: [
    { type: "Employees", icon: "M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 14H4V9h16v10z", description: "Employees working in New Zealand who receive PAYE income and want to estimate their income tax and ACC levy." },
    { type: "Freelancers & Contractors", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", description: "Self-employed individuals and contractors who earn business income and need to make provisional tax payments." },
    { type: "Business Owners", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", description: "Business owners and company directors who need to understand corporate tax at 28%, GST registration, and provisional tax obligations." },
    { type: "Property Investors", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", description: "Property investors and landlords with rental income who need to estimate tax on rental profits and understand the bright-line test." },
    { type: "Expats", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", description: "Non-residents and returning New Zealanders who need to understand tax residency rules (183-day rule) and tax obligations on NZ-sourced income." }
  ],
  howToUseSteps: [
    { step: 1, title: "Enter Income", description: "Input your annual income from employment, business, rental, or investments. Include all taxable sources." },
    { step: 2, title: "Apply Deductions", description: "Enter eligible deductions such as work-related expenses, student loan interest, charitable donations, and home office expenses." },
    { step: 3, title: "Calculate Tax", description: "The calculator applies the progressive tax rates to your taxable income after deducting all eligible expenses." },
    { step: 4, title: "Review Effective Rate", description: "Examine your effective tax rate and compare it against the marginal rate to understand your true tax burden." },
    { step: 5, title: "Plan Provisional Tax", description: "If you are self-employed, use the results to plan your provisional tax installments due during the tax year." }
  ],
  educationalDisclaimer: "The tax information and calculators on this page are for educational and informational purposes only. They do not constitute professional tax advice. Tax laws are subject to change. Always consult a qualified tax professional for advice specific to your situation.",
  dataSources: ["Inland Revenue Department (IRD) New Zealand", "NZ Budget 2024", "IRD Tax Rate Tables"],
  calculationMethodology: "Tax calculations follow the New Zealand Income Tax Act 2007 and IRD regulations. Progressive rates are applied to taxable income after deductions and credits. GST is calculated on the taxable value of goods and services at 15%."
};
