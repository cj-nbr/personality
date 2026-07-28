import type { Country, TaxCategory, TaxBracket, TaxDeduction, TaxCredit, OfficialResource, ImportantDate, CountryFAQ, TaxConcept } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Individual and corporate income tax in Malaysia.",
    overview: "Resident individuals pay progressive tax from 0% to 30%. Non-residents pay a flat 30%.",
    calculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your Malaysian income tax." }
    ],
    guides: [
      { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Understanding Malaysian tax residency rules." }
    ],
    faqs: [
      { question: "What is the tax filing deadline?", answer: "April 30th for individuals, June 30th for businesses." }
    ]
  },
  {
    slug: "sst",
    name: "SST",
    description: "Sales and Service Tax in Malaysia.",
    overview: "Sales Tax is typically 10% and Service Tax is 8% on specified services.",
    calculators: [
      { slug: "sst-calculator", name: "SST Calculator", description: "Calculate SST on sales and services." }
    ],
    guides: [
      { slug: "sst-guide", title: "SST Guide", description: "Understanding Sales and Service Tax in Malaysia." }
    ],
    faqs: [
      { question: "What is the SST rate?", answer: "Sales Tax: typically 10%. Service Tax: 8%." }
    ]
  }
];

const currentTaxBrackets: TaxBracket[] = [
  { label: "0%", rate: "0%", threshold: "Up to RM 5,000", notes: "Chargeable income" },
  { label: "1%", rate: "1%", threshold: "RM 5,001 – RM 20,000", notes: "Chargeable income" },
  { label: "3%", rate: "3%", threshold: "RM 20,001 – RM 35,000", notes: "Chargeable income" },
  { label: "5%", rate: "5%", threshold: "RM 35,001 – RM 50,000", notes: "Chargeable income" },
  { label: "6%", rate: "6%", threshold: "RM 50,001 – RM 70,000", notes: "Chargeable income" },
  { label: "7%", rate: "7%", threshold: "RM 70,001 – RM 100,000", notes: "Chargeable income" },
  { label: "8%", rate: "8%", threshold: "RM 100,001 – RM 150,000", notes: "Chargeable income" },
  { label: "9%", rate: "9%", threshold: "RM 150,001 – RM 200,000", notes: "Chargeable income" },
  { label: "10%", rate: "10%", threshold: "RM 200,001 – RM 250,000", notes: "Chargeable income" },
  { label: "11%", rate: "11%", threshold: "RM 250,001 – RM 300,000", notes: "Chargeable income" },
  { label: "12%", rate: "12%", threshold: "RM 300,001 – RM 350,000", notes: "Chargeable income" },
  { label: "13%", rate: "13%", threshold: "RM 350,001 – RM 400,000", notes: "Chargeable income" },
  { label: "14%", rate: "14%", threshold: "RM 400,001 – RM 450,000", notes: "Chargeable income" },
  { label: "15%", rate: "15%", threshold: "RM 450,001 – RM 500,000", notes: "Chargeable income" },
  { label: "16%", rate: "16%", threshold: "RM 500,001 – RM 550,000", notes: "Chargeable income" },
  { label: "17%", rate: "17%", threshold: "RM 550,001 – RM 600,000", notes: "Chargeable income" },
  { label: "18%", rate: "18%", threshold: "RM 600,001 – RM 650,000", notes: "Chargeable income" },
  { label: "19%", rate: "19%", threshold: "RM 650,001 – RM 700,000", notes: "Chargeable income" },
  { label: "20%", rate: "20%", threshold: "RM 700,001 – RM 750,000", notes: "Chargeable income" },
  { label: "21%", rate: "21%", threshold: "RM 750,001 – RM 800,000", notes: "Chargeable income" },
  { label: "22%", rate: "22%", threshold: "RM 800,001 – RM 850,000", notes: "Chargeable income" },
  { label: "23%", rate: "23%", threshold: "RM 850,001 – RM 900,000", notes: "Chargeable income" },
  { label: "24%", rate: "24%", threshold: "RM 900,001 – RM 950,000", notes: "Chargeable income" },
  { label: "25%", rate: "25%", threshold: "RM 950,001 – RM 1,000,000", notes: "Chargeable income" },
  { label: "30%", rate: "30%", threshold: "Above RM 1,000,000", notes: "Chargeable income; non-residents taxed at flat 30%" }
];

const majorDeductions: TaxDeduction[] = [
  { name: "Personal Relief", description: "RM 9,000 basic personal relief for individual taxpayers." },
  { name: "Married Couple Relief", description: "Additional RM 6,000 relief for married couples." },
  { name: "Child Relief", description: "RM 1,000 per child (up to a maximum number of children)." },
  { name: "Education Relief", description: "RM 5,000 per child for education expenses." },
  { name: "Medical Expenses", description: "Deduction for medical expenses not covered by insurance." },
  { name: "EPF Contributions", description: "Employee and employer contributions to the Employees Provident Fund are deductible." },
  { name: "Life Insurance Premiums", description: "Deduction for premiums paid on life insurance policies." }
];

const credits: TaxCredit[] = [
  { name: "Reinvestment Allowance", description: "Allowance for companies reinvesting in qualifying activities." },
  { name: "Pioneer Status", description: "Tax exemption for companies with pioneer status in qualifying industries." },
  { name: "Investment Tax Allowance", description: "Allowance for qualifying investments in certain industries." }
];

const officialResources: OfficialResource[] = [
  { name: "Lembaga Hasil Dalam Negeri Malaysia (LHDNM)", url: "https://www.hasil.gov.my", description: "Official Malaysian tax authority — tax filing, payment, and guidance." },
  { name: "e-Filing System", url: "https://www.e-filing.hasil.gov.my", description: "Online platform for filing individual and corporate income tax returns." },
  { name: "SST Registration", url: "https://www.hasil.gov.my", description: "Sales and Service Tax registration and compliance portal." },
  { name: "Tax Rate Tables", url: "https://www.hasil.gov.my/en/tax-rates", description: "Current individual and corporate income tax rates and brackets." }
];

const importantDates: ImportantDate[] = [
  { date: "2025-01-01", title: "Tax Year Start", description: "Malaysian tax year follows the calendar year (January 1 – December 31)." },
  { date: "2025-04-30", title: "Individual Tax Filing Deadline", description: "Deadline for individuals to file income tax returns." },
  { date: "2025-06-30", title: "Business Tax Filing Deadline", description: "Deadline for businesses to file income tax returns." },
  { date: "2025-12-31", title: "Tax Year End", description: "End of the Malaysian tax year." }
];

const countryFAQs: CountryFAQ[] = [
  { question: "What is the income tax rate in Malaysia?", answer: "Progressive rates from 0% to 30% for resident individuals. Non-residents are taxed at a flat rate of 30%." },
  { question: "What is the SST rate?", answer: "Sales Tax: typically 10%. Service Tax: 8%." },
  { question: "Who is a tax resident in Malaysia?", answer: "An individual who resides in Malaysia for 182 days or more in a tax year, or is a Malaysian citizen or permanent resident." },
  { question: "What is the corporate tax rate?", answer: "24% for resident corporations on taxable income. SMEs with paid-up capital not exceeding RM2.5 million benefit from partial exemption." },
  { question: "What is the tax filing deadline?", answer: "April 30th for individuals, June 30th for businesses." }
];

const taxConcepts: TaxConcept[] = [
  { title: "Tax Residency", description: "Malaysia taxes residents on worldwide income and non-residents on Malaysia-sourced income. Residency is determined by 182+ days presence." },
  { title: "Progressive Tax Rates", description: "Malaysia uses a progressive income tax system with rates from 0% to 30% for resident individuals." },
  { title: "SST vs GST", description: "Malaysia replaced GST with SST (Sales and Service Tax) in 2018. Sales Tax is 10% on manufactured goods; Service Tax is 8% on specified services." },
  { title: "EPF Contributions", description: "The Employees Provident Fund (EPF) is a mandatory savings scheme. Both employer and employee contribute to EPF, and contributions are tax-deductible." }
];

export const malaysia: Country = {
  slug: "malaysia",
  name: "Malaysia",
  flag: "/logos/malaysia.png",
  continent: "Asia",
  officialTaxAuthority: "Lembaga Hasil Dalam Negeri Malaysia (LHDNM)",
  taxAuthorityUrl: "https://www.hasil.gov.my",
  currency: "MYR",
  capital: "Kuala Lumpur",
  population: "33 million",
  gdp: "$432 billion",
  officialLanguage: "Bahasa Malaysia",
  overview: "Malaysia has a comprehensive tax system with progressive individual income tax rates from 0% to 30%, a flat corporate tax rate of 24%, and Sales and Service Tax (SST). The tax year in Malaysia runs from January 1 to December 31, with individual tax returns due by April 30th. Malaysia offers various tax reliefs and deductions including those for education, medical expenses, and home ownership.",
  lastUpdated: "2025-06-15",
  taxYear: "Calendar Year (January 1 – December 31)",
  filingDeadline: "April 30 (individuals); June 30 (businesses)",
  paymentDeadline: "Tax payable by April 30; installments due monthly or quarterly",
  taxSystemOverview: {
    incomeTax: "Progressive rates from 0% to 30% for resident individuals. Non-residents are taxed at a flat rate of 30% on Malaysia-sourced income. Various personal reliefs, deductions, and exemptions are available.",
    capitalGainsTax: "Capital gains are generally not subject to tax in Malaysia, except for gains from the disposal of real property and shares in real property companies, which are subject to Real Property Gains Tax (RPGT).",
    vatGstSalesTax: "Sales and Service Tax (SST) replaced the Goods and Services Tax (GST) in 2018. Sales Tax is generally 10% on manufactured goods. Service Tax is 8% on specified services.",
    corporateTax: "24% for resident corporations on taxable income. Small and medium enterprises with paid-up capital not exceeding RM2.5 million benefit from a partial exemption on the first RM600,000 of statutory income.",
    payrollTax: "Employer and employee contribute to the Employees Provident Fund (EPF). Employer contributes 13% and employees contribute 11% of monthly salary, subject to contribution caps."
  },
  taxSystemDetails: {
    howTaxationWorks: "Malaysia uses a self-assessment tax system where taxpayers calculate and report their own tax obligations. The LHDNM administers tax collection and enforcement. Tax returns are filed annually, and taxpayers must pay their tax liability by the deadline.",
    whoPaysTax: "Tax residents are taxed on worldwide income. Non-residents are taxed only on Malaysia-sourced income. Companies are taxed on Malaysian-sourced income. Withholding tax applies to certain payments to non-residents.",
    residentVsNonResident: "Tax residents are individuals who reside in Malaysia for 182 days or more in a tax year, or are Malaysian citizens or permanent residents. Residents are taxed on worldwide income. Non-residents are taxed at a flat 30% on Malaysia-sourced income.",
    personalIncomeTax: "Malaysia has a progressive income tax system with rates from 0% to 30% for resident individuals. Non-residents are taxed at a flat 30%. Various personal reliefs, deductions, and exemptions are available to reduce taxable income.",
    businessTaxOverview: "Corporate tax is 24% for resident corporations. SMEs with paid-up capital not exceeding RM2.5 million benefit from a partial exemption on the first RM600,000 of statutory income. SST applies to sales and services at 10% and 8% respectively.",
    importantConcepts: taxConcepts
  },
  currentTaxBrackets,
  standardDeductions: "RM 9,000 basic personal relief for individual taxpayers. Additional reliefs for married couples, children, education, medical expenses, and EPF contributions.",
  majorDeductions,
  credits,
  importantDates,
  officialResources,
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "sst-calculator", name: "SST Calculator", category: "sst" }
  ],
  salaryCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" }
  ],
  capitalGainsCalculators: [],
  corporateCalculators: [],
  relatedCountries: ["singapore", "indonesia", "thailand"],
  latestUpdates: [
    { date: "2024-01-01", title: "Budget 2024 Tax Changes", description: "New tax reliefs, revised income tax rates, and updated EPF contribution rates announced." },
    { date: "2024-01-01", title: "Updated SST Rates", description: "LHDNM confirmed current Sales and Service Tax rates for the year." }
  ],
  countryFAQs,
  taxSystemSummary: "Malaysia has a progressive income tax system with rates from 0% to 30% for residents, and a flat 30% for non-residents. The country also imposes Sales and Service Tax (SST) and has no capital gains tax on most assets.",
  employerWithholding: "Malaysian employers deduct monthly tax instalments (PCB) from employee salaries based on the LHDNM tax tables and remit them to the tax authority. The PCB deducted is credited against the employee's final tax liability when filing the annual return.",
  whoShouldUse: [
    { type: "Salaried Employees", icon: "M20 7h-4V5c0-1.1-.9-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 14H4V9h16v10z", description: "Employees working in Malaysia who receive monthly salaries with PCB withholding and need to estimate their annual tax liability." },
    { type: "Freelancers & Contractors", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", description: "Self-employed consultants, contractors, and gig workers who earn business or professional income and must make their own tax payments." },
    { type: "Business Owners", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", description: "Company owners and SMEs who need to estimate corporate tax at 24%, understand SST compliance, and claim business deductions." },
    { type: "Expats", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", description: "Foreign professionals and expats working in Malaysia who need to determine their tax residency status (182-day rule) and obligations." },
    { type: "Property Owners", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", description: "Property investors and landlords who need to understand Real Property Gains Tax (RPGT) on property disposals." }
  ],
  howToUseSteps: [
    { step: 1, title: "Enter Income", description: "Input your annual employment income, business income, rental income, or other chargeable income." },
    { step: 2, title: "Apply Reliefs", description: "Enter eligible personal reliefs including EPF contributions, life insurance premiums, education expenses, and medical expenses." },
    { step: 3, title: "Calculate Tax", description: "The calculator applies the progressive tax rates to your chargeable income after deducting all eligible reliefs." },
    { step: 4, title: "Review Effective Rate", description: "Examine your effective tax rate and compare it against the headline rates to understand your actual burden." },
    { step: 5, title: "Plan Ahead", description: "Use the results to plan your EPF contributions, charitable donations, and other tax-saving strategies for the next year." }
  ],
  educationalDisclaimer: "The tax information and calculators on this page are for educational and informational purposes only. They do not constitute professional tax advice. Tax laws are subject to change. Always consult a qualified tax professional for advice specific to your situation.",
  dataSources: ["Lembaga Hasil Dalam Negeri Malaysia (LHDNM)", "Malaysian Budget 2024", "LHDNM Tax Circulars"],
  calculationMethodology: "Tax calculations follow the Malaysian Income Tax Act 1967 and LHDNM regulations. Progressive rates are applied to chargeable income after reliefs and deductions. SST rates are applied as per the Sales Tax Act 2018 and Service Tax Act 2018."
};
