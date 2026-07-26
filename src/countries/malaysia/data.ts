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
  educationalDisclaimer: "The tax information and calculators on this page are for educational and informational purposes only. They do not constitute professional tax advice. Tax laws are subject to change. Always consult a qualified tax professional for advice specific to your situation.",
  dataSources: ["Lembaga Hasil Dalam Negeri Malaysia (LHDNM)", "Malaysian Budget 2024", "LHDNM Tax Circulars"],
  calculationMethodology: "Tax calculations follow the Malaysian Income Tax Act 1967 and LHDNM regulations. Progressive rates are applied to chargeable income after reliefs and deductions. SST rates are applied as per the Sales Tax Act 2018 and Service Tax Act 2018."
};
