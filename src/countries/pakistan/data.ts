import type { Country, TaxCategory, TaxBracket, TaxDeduction, TaxCredit, OfficialResource, ImportantDate, CountryFAQ, TaxConcept } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Individual and corporate income tax in Pakistan.",
    overview: "Progressive tax rates for individuals from 0% to 35%. Corporate tax rate is 29% for most companies. Tax year runs July 1 to June 30.",
    calculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your Pakistan income tax under FBR slabs." },
      { slug: "salary-tax-calculator", name: "Salary Tax Calculator", description: "Calculate tax on salary in Pakistan for salaried individuals." },
      { slug: "business-income-tax-calculator", name: "Business Income Tax Calculator", description: "Calculate income tax for business and freelancers in Pakistan." },
      { slug: "capital-gain-tax-calculator", name: "Capital Gain Tax Calculator", description: "Calculate capital gains tax on property and shares in Pakistan." }
    ],
    guides: [
      { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Understanding Pakistani tax residency rules and obligations." },
      { slug: "fbr-tax-slabs-guide", title: "FBR Tax Slabs Guide", description: "Complete guide to FBR tax slabs for salaried individuals and businesses." },
      { slug: "salary-tax-guide", title: "Salary Tax Guide", description: "How tax on salary is calculated in Pakistan with examples." },
      { slug: "freelancer-tax-guide", title: "Freelancer Tax Guide", description: "Tax obligations for freelancers and sole proprietors in Pakistan." }
    ],
    faqs: [
      { question: "What is the tax-free limit for salary in Pakistan?", answer: "The tax-free limit for salaried individuals in Pakistan is PKR 600,000 per year for the 2024/25 tax year." },
      { question: "What are the FBR tax slabs for salaried individuals?", answer: "FBR tax slabs range from 0% to 35% on annual taxable income. The exact slab depends on your total income after deductions." },
      { question: "How is monthly salary tax calculated in Pakistan?", answer: "Monthly tax is calculated by dividing annual taxable income by 12 and applying the applicable FBR tax slab. Employers deduct tax at source under Section 159." },
      { question: "Are medical and house rent allowances taxable?", answer: "Medical allowance and house rent allowance are generally taxable as part of salary income, though certain exemptions may apply." },
      { question: "What is the penalty for non-filing tax in Pakistan?", answer: "FBR may impose penalties up to PKR 100,000 or more for non-filing. Non-filers also face higher withholding tax rates on banking, property, and vehicle transactions." },
      { question: "Who qualifies as a Salaried Individual for FBR?", answer: "Any person receiving income from employment, pension, or annuity qualifies as a salaried individual for FBR purposes." }
    ]
  },
  {
    slug: "sales-tax",
    name: "Sales Tax",
    description: "Sales tax on goods and services in Pakistan.",
    overview: "Standard sales tax rate is 18% on most goods and services. FBR administers sales tax registration, filing, and collection.",
    calculators: [
      { slug: "sales-tax-calculator", name: "Sales Tax Calculator", description: "Calculate sales tax on goods and services in Pakistan." },
      { slug: "gst-calculator", name: "GST Calculator", description: "Calculate GST on transactions in Pakistan." }
    ],
    guides: [
      { slug: "sales-tax-guide", title: "Sales Tax Guide", description: "Understanding sales tax registration, filing, and rates in Pakistan." },
      { slug: "gst-guide", title: "GST Guide", description: "How GST works in Pakistan, who must register, and how to file returns." }
    ],
    faqs: [
      { question: "What is the sales tax rate in Pakistan?", answer: "The standard sales tax rate in Pakistan is 18% on most goods and services. Some essential items are exempt or taxed at reduced rates." },
      { question: "Who must register for sales tax in Pakistan?", answer: "Businesses with annual taxable turnover exceeding the threshold prescribed by FBR must register for sales tax." },
      { question: "How to file sales tax returns in Pakistan?", answer: "Sales tax returns are filed monthly through the FBR Iris portal. Use our sales tax calculator to estimate your liability before filing." }
    ]
  },
  {
    slug: "property-tax",
    name: "Property Tax",
    description: "Property tax, capital gains tax, and token tax on property transactions in Pakistan.",
    overview: "Property tax varies by province. Capital gains tax applies on property sales. Token tax and transfer fees are provincial charges for property registration.",
    calculators: [
      { slug: "property-tax-calculator", name: "Property Tax Calculator", description: "Calculate property tax in Pakistan by province." },
      { slug: "capital-gain-tax-calculator", name: "Capital Gain Tax Calculator", description: "Calculate capital gains tax on property sales in Pakistan." },
      { slug: "token-tax-calculator", name: "Token Tax Calculator", description: "Calculate token tax for property and vehicle registration." },
      { slug: "rental-income-tax-calculator", name: "Rental Income Tax Calculator", description: "Calculate tax on rental income from property in Pakistan." }
    ],
    guides: [
      { slug: "property-tax-guide", title: "Property Tax Guide", description: "Understanding property tax, capital gains tax, and token tax in Pakistan." },
      { slug: "capital-gain-tax-guide", title: "Capital Gain Tax Guide", description: "How capital gains tax is calculated on property and shares in Pakistan." },
      { slug: "token-tax-guide", title: "Token Tax Guide", description: "Provincial token tax rates and how to calculate token tax for vehicles and property." }
    ],
    faqs: [
      { question: "What is property tax in Pakistan?", answer: "Property tax in Pakistan is a provincial tax on the value of real estate. Rates vary by province and property type. Use our property tax calculator for estimates." },
      { question: "How is capital gains tax calculated on property in Pakistan?", answer: "Capital gains tax on property in Pakistan is calculated on the gain arising from the sale of immovable property. Rates depend on holding period and taxpayer status." },
      { question: "What is token tax in Pakistan?", answer: "Token tax is a provincial tax levied on the registration of vehicles and property. Rates vary by province, vehicle type, and engine capacity." }
    ]
  },
  {
    slug: "vehicle-tax",
    name: "Vehicle Tax",
    description: "Token tax, vehicle tax, and transfer fees for vehicles in Pakistan.",
    overview: "Vehicle tax and token tax are provincial taxes on motor vehicles. Rates vary by province, vehicle type, engine capacity, and seating capacity.",
    calculators: [
      { slug: "vehicle-tax-calculator", name: "Vehicle Tax Calculator", description: "Calculate vehicle token tax in Pakistan by province." },
      { slug: "sindh-vehicle-tax-calculator", name: "Sindh Vehicle Tax Calculator", description: "Calculate Sindh vehicle token tax and transfer fees." },
      { slug: "islamabad-vehicle-tax-calculator", name: "Islamabad Vehicle Tax Calculator", description: "Calculate Islamabad vehicle token tax." }
    ],
    guides: [
      { slug: "vehicle-tax-guide", title: "Vehicle Tax Guide", description: "Understanding vehicle token tax and transfer fees in Pakistan." },
      { slug: "sindh-vehicle-tax-guide", title: "Sindh Vehicle Tax Guide", description: "Sindh vehicle token tax rates and how to calculate them." }
    ],
    faqs: [
      { question: "How is vehicle token tax calculated in Pakistan?", answer: "Vehicle token tax in Pakistan is calculated based on engine capacity, vehicle type, and province. Use our vehicle tax calculator for accurate estimates." },
      { question: "What is the vehicle transfer fee in Sindh?", answer: "Vehicle transfer fee in Sindh is a provincial charge for transferring vehicle ownership. The fee depends on vehicle value and type." },
      { question: "How to pay token tax online in Pakistan?", answer: "Token tax can be paid online through provincial excise and taxation department websites or through designated bank branches." }
    ]
  }
];

const currentTaxBrackets: TaxBracket[] = [
  { label: "0%", rate: "0%", threshold: "Up to PKR 600,000", notes: "Salaried individuals — tax-free limit" },
  { label: "5%", rate: "5%", threshold: "PKR 600,001 – PKR 1,200,000", notes: "Salaried individuals" },
  { label: "10%", rate: "10%", threshold: "PKR 1,200,001 – PKR 2,400,000", notes: "Salaried individuals" },
  { label: "15%", rate: "15%", threshold: "PKR 2,400,001 – PKR 3,600,000", notes: "Salaried individuals" },
  { label: "20%", rate: "20%", threshold: "PKR 3,600,001 – PKR 6,000,000", notes: "Salaried individuals" },
  { label: "25%", rate: "25%", threshold: "PKR 6,000,001 – PKR 12,000,000", notes: "Salaried individuals" },
  { label: "30%", rate: "30%", threshold: "PKR 12,000,001 – PKR 30,000,000", notes: "Salaried individuals" },
  { label: "35%", rate: "35%", threshold: "Above PKR 30,000,000", notes: "Salaried individuals" }
];

const majorDeductions: TaxDeduction[] = [
  { name: "Zakat", description: "Deduction for Zakat paid at the rate of 2.5% on eligible wealth." },
  { name: "Charitable Donations", description: "Deduction for donations to approved charitable institutions." },
  { name: "Medical Expenses", description: "Deduction for medical expenses of self, spouse, and dependent parents." },
  { name: "Education Expenses", description: "Deduction for education expenses of self and dependents." },
  { name: "Loan Interest", description: "Deduction for interest on business loans and home loans." },
  { name: "Provident Fund", description: "Deduction for contributions to recognized provident funds." }
];

const credits: TaxCredit[] = [
  { name: "Zakat Credit", description: "Credit for Zakat paid at 2.5% on eligible wealth." },
  { name: "Withholding Tax Credit", description: "Credit for withholding tax deducted at source on salary and other income." }
];

const officialResources: OfficialResource[] = [
  { name: "Federal Board of Revenue (FBR)", url: "https://www.fbr.gov.pk", description: "Official Pakistani tax authority — tax filing, payment, and guidance." },
  { name: "IRIS Portal", url: "https://iris.fbr.gov.pk", description: "Online platform for sales tax registration and filing." },
  { name: "FBR Tax Slabs", url: "https://www.fbr.gov.pk", description: "Current income tax rates and slabs for salaried individuals." },
  { name: "e-File Portal", url: "https://efile.fbr.gov.pk", description: "Online portal for filing income tax returns." }
];

const importantDates: ImportantDate[] = [
  { date: "2024-07-01", title: "Tax Year Start", description: "Pakistani tax year runs from July 1 to June 30." },
  { date: "2025-06-30", title: "Tax Year End", description: "End of the Pakistani tax year." },
  { date: "2025-09-30", title: "Individual Tax Filing Deadline", description: "Deadline for individuals to file income tax returns." },
  { date: "2025-06-30", title: "Advance Tax Installment 1", description: "First installment of advance tax due." },
  { date: "2025-09-30", title: "Advance Tax Installment 2", description: "Second installment of advance tax due." },
  { date: "2026-01-30", title: "Advance Tax Installment 3", description: "Third installment of advance tax due." },
  { date: "2026-05-31", title: "Advance Tax Installment 4", description: "Final installment of advance tax due." }
];

const countryFAQs: CountryFAQ[] = [
  { question: "What is the tax-free limit for salary in Pakistan?", answer: "The tax-free limit for salaried individuals in Pakistan is PKR 600,000 per year for the 2024/25 tax year." },
  { question: "What are the FBR tax slabs for salaried individuals?", answer: "FBR tax slabs range from 0% to 35% on annual taxable income. The exact slab depends on your total income after deductions." },
  { question: "How is monthly salary tax calculated in Pakistan?", answer: "Monthly tax is calculated by dividing annual taxable income by 12 and applying the applicable FBR tax slab. Employers deduct tax at source under Section 159." },
  { question: "Are medical and house rent allowances taxable?", answer: "Medical allowance and house rent allowance are generally taxable as part of salary income, though certain exemptions may apply." },
  { question: "What is the penalty for non-filing tax in Pakistan?", answer: "FBR may impose penalties up to PKR 100,000 or more for non-filing. Non-filers also face higher withholding tax rates on banking, property, and vehicle transactions." },
  { question: "Who qualifies as a Salaried Individual for FBR?", answer: "Any person receiving income from employment, pension, or annuity qualifies as a salaried individual for FBR purposes." }
];

const taxConcepts: TaxConcept[] = [
  { title: "Tax Year", description: "Pakistan's tax year runs from July 1 to June 30. Returns are filed for the tax year ending June 30." },
  { title: "Filer vs Non-Filer", description: "FBR distinguishes between filers and non-filers. Filers benefit from lower withholding tax rates and higher tax-free limits." },
  { title: "Withholding Tax", description: "Withholding tax (WHT) is deducted at source on various payments including salary, professional fees, interest, rent, and dividends." },
  { title: "Provincial Taxes", description: "Pakistan has provincial taxes including property tax, vehicle token tax, and entertainment tax, which vary by province." }
];

export const pakistan: Country = {
  slug: "pakistan",
  name: "Pakistan",
  flag: "/logos/pakistan.png",
  continent: "Asia",
  officialTaxAuthority: "Federal Board of Revenue (FBR)",
  taxAuthorityUrl: "https://www.fbr.gov.pk",
  currency: "PKR",
  capital: "Islamabad",
  population: "230 million",
  gdp: "$376 billion",
  officialLanguage: "Urdu (national language); English (official)",
  overview: "Pakistan has a progressive income tax system with rates from 0% to 35% for individuals. The tax year runs from July 1 to June 30. Pakistan also imposes Sales Tax at 18% on most goods and services. The Federal Board of Revenue (FBR) administers direct and indirect taxation. Tax compliance has been improving with digitalization and automation of tax processes.",
  lastUpdated: "2025-06-15",
  taxYear: "July 1 – June 30",
  filingDeadline: "September 30 (individuals); extended for businesses",
  paymentDeadline: "Advance tax installments due quarterly; final payment by May 31",
  taxSystemOverview: {
    incomeTax: "Progressive rates from 0% to 35% for salaried individuals. Tax is levied on worldwide income for residents and Pakistan-sourced income for non-residents. Various deductions and exemptions are available under the Income Tax Ordinance 2001.",
    capitalGainsTax: "Capital gains are taxed as part of ordinary income. For immovable property, the withholding tax on sale applies at the time of transaction. Capital gains on listed shares are taxed at 12.5% for filers and 15% for non-filers.",
    vatGstSalesTax: "Standard sales tax rate of 18% on most goods and services. Exemptions apply to certain essential items including unprocessed agricultural products and some healthcare services.",
    corporateTax: "29% for most companies. Banking companies are taxed at 35%. Small companies with paid-up capital below certain thresholds benefit from a reduced rate of 22%.",
    payrollTax: "Withholding tax applies to salaries under Section 159. The rate depends on whether the taxpayer is a filer (2.5% quarterly for salaried) or non-filer (higher rates apply)."
  },
  taxSystemDetails: {
    howTaxationWorks: "Pakistan uses a self-assessment tax system where taxpayers calculate and report their own tax obligations. The FBR administers tax collection and enforcement. Tax returns are filed annually, and taxpayers must pay their tax liability by the deadline. Withholding tax is a key mechanism for collecting tax at source.",
    whoPaysTax: "Tax residents are taxed on worldwide income. Non-residents are taxed only on Pakistan-sourced income. Employers withhold tax from employee salaries. Self-employed individuals pay advance tax quarterly.",
    residentVsNonResident: "Tax residents are individuals who reside in Pakistan for 183 days or more in a tax year, or are Pakistani citizens. Residents are taxed on worldwide income. Non-residents are taxed only on Pakistan-sourced income.",
    personalIncomeTax: "Pakistan has a progressive income tax system with rates from 0% to 35% for salaried individuals. The tax-free limit is PKR 600,000. Various deductions and exemptions are available under the Income Tax Ordinance 2001.",
    businessTaxOverview: "Corporate tax is 29% for most companies. Banking companies are taxed at 35%. SMEs with paid-up capital below certain thresholds benefit from a reduced rate of 22%. Sales tax is 18% on most goods and services.",
    importantConcepts: taxConcepts
  },
  currentTaxBrackets,
  standardDeductions: "PKR 600,000 tax-free limit for salaried individuals. Additional deductions for Zakat, charitable donations, medical expenses, education expenses, loan interest, and provident fund contributions.",
  majorDeductions,
  credits,
  importantDates,
  officialResources,
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "sales-tax-calculator", name: "Sales Tax Calculator", category: "sales-tax" },
    { slug: "property-tax-calculator", name: "Property Tax Calculator", category: "property-tax" },
    { slug: "vehicle-tax-calculator", name: "Vehicle Tax Calculator", category: "vehicle-tax" }
  ],
  salaryCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "salary-tax-calculator", name: "Salary Tax Calculator", category: "income-tax" }
  ],
  capitalGainsCalculators: [
    { slug: "capital-gain-tax-calculator", name: "Capital Gain Tax Calculator", category: "property-tax" }
  ],
  corporateCalculators: [],
  relatedCountries: ["india", "bangladesh", "sri-lanka"],
  latestUpdates: [
    { date: "2024-06-01", title: "2024-25 Budget Tax Changes", description: "New tax brackets and reliefs introduced in the federal budget for FY 2024-25." },
    { date: "2024-01-01", title: "FBR Digital Initiatives", description: "FBR continues to streamline tax filing and collection through digital platforms." }
  ],
  countryFAQs,
  taxSystemSummary: "Pakistan operates a self-assessment tax system with progressive income tax rates from 0% to 35% for salaried individuals, corporate tax for companies, and sales tax at 18%. The tax year runs from July 1 to June 30.",
  employerWithholding: "Pakistani employers deduct tax from employee salaries under Section 149 based on FBR tax slabs and remit it to the government. The monthly tax deducted is credited against the employee's annual tax liability when filing the return.",
  whoShouldUse: [
    { type: "Salaried Employees", icon: "M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 14H4V9h16v10z", description: "Salaried individuals receiving monthly income with tax deducted at source who want to estimate their annual tax liability and potential refund." },
    { type: "Freelancers & Contractors", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", description: "Self-employed professionals and freelancers who earn business or professional income and must file annual tax returns with FBR." },
    { type: "Business Owners", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", description: "Business owners and companies who need to estimate corporate tax, understand sales tax obligations, and manage quarterly advance tax payments." },
    { type: "Expats", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", description: "Non-resident Pakistanis and foreign workers who need to understand tax residency rules and obligations on Pakistan-sourced income." }
  ],
  howToUseSteps: [
    { step: 1, title: "Enter Income", description: "Input your annual salary, business income, or other taxable income in PKR." },
    { step: 2, title: "Apply Deductions", description: "Enter allowable deductions such as charitable donations, life insurance premiums, pension contributions, and other approved expenses." },
    { step: 3, title: "Calculate Tax", description: "The calculator applies FBR's progressive tax slabs to your taxable income after deductions." },
    { step: 4, title: "Review Effective Rate", description: "Examine your effective tax rate and compare it against the marginal rate to understand your true tax burden." },
    { step: 5, title: "File Return", description: "Use the results to plan your tax filing. Even if you did not receive a notice from FBR, filing a return is mandatory for eligible taxpayers." }
  ],
  educationalDisclaimer: "The tax information and calculators on this page are for educational and informational purposes only. They do not constitute professional tax advice. Tax laws are subject to change. Always consult a qualified tax professional for advice specific to your situation.",
  dataSources: ["Federal Board of Revenue (FBR) Pakistan", "Income Tax Ordinance 2001", "FBR Tax Circulars"],
  calculationMethodology: "Tax calculations follow the Income Tax Ordinance 2001 and FBR regulations. Progressive rates are applied to taxable income after deductions and exemptions. Withholding tax rates vary based on filer status and payment type."
};
