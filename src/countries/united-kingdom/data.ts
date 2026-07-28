import type { Country, TaxCategory, TaxBracket, TaxDeduction, TaxCredit, OfficialResource, ImportantDate, CountryFAQ, TaxConcept } from "../types";

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

const currentTaxBrackets: TaxBracket[] = [
  { label: "0%", rate: "0%", threshold: "Up to £12,570", notes: "Personal allowance" },
  { label: "20%", rate: "20%", threshold: "£12,571 – £50,270", notes: "Basic rate" },
  { label: "40%", rate: "40%", threshold: "£50,271 – £125,140", notes: "Higher rate" },
  { label: "45%", rate: "45%", threshold: "Above £125,140", notes: "Additional rate" }
];

const majorDeductions: TaxDeduction[] = [
  { name: "Personal Allowance", description: "£12,570 tax-free allowance. Reduced by £1 for every £2 of income above £100,000." },
  { name: "Marriage Allowance", description: "Transfer £1,260 of personal allowance to a spouse or civil partner." },
  { name: "Pension Contributions", description: "Tax relief on pension contributions at the highest rate of tax paid." },
  { name: "Gift Aid", description: "Tax relief on charitable donations through the Gift Aid scheme." },
  { name: "Enterprise Investment Scheme (EIS)", description: "Income tax relief on investments in qualifying companies." },
  { name: "Venture Capital Trust (VCT)", description: "30% income tax relief on investments in VCTs." }
];

const credits: TaxCredit[] = [
  { name: "Child Benefit", description: "Tax-free benefit for families with children, subject to income limits." },
  { name: "Working Tax Credit", description: "Tax credit for low-income workers." },
  { name: "Child Tax Credit", description: "Tax credit for families with children." },
  { name: "Marriage Allowance", description: "£1,260 transferable personal allowance to a spouse or civil partner." }
];

const officialResources: OfficialResource[] = [
  { name: "HM Revenue & Customs (HMRC)", url: "https://www.gov.uk/hmrc", description: "Official UK tax authority — tax filing, payment, and guidance." },
  { name: "GOV.UK Tax", url: "https://www.gov.uk/topic/tax", description: "Comprehensive tax guidance and services on GOV.UK." },
  { name: "Self Assessment", url: "https://www.gov.uk/self-assessment", description: "Online platform for filing Self Assessment tax returns." },
  { name: "HMRC Tax Rates", url: "https://www.gov.uk/income-tax-rates", description: "Current income tax rates, bands, and personal allowance." },
  { name: "VAT Registration", url: "https://www.gov.uk/vat", description: "VAT registration, returns, and compliance." }
];

const importantDates: ImportantDate[] = [
  { date: "2024-04-06", title: "Tax Year Start", description: "UK tax year runs from April 6 to April 5." },
  { date: "2025-04-05", title: "Tax Year End", description: "End of the 2024/25 tax year." },
  { date: "2025-01-31", title: "Self Assessment Filing Deadline", description: "Deadline for filing Self Assessment tax returns online." },
  { date: "2025-04-30", title: "Paper Filing Deadline", description: "Deadline for paper Self Assessment tax returns." },
  { date: "2025-01-31", title: "Tax Payment Deadline", description: "Deadline for paying any tax owed for the 2023/24 tax year." },
  { date: "2025-07-31", title: "Second Payment on Account", description: "Deadline for the second payment on account for 2024/25." }
];

const countryFAQs: CountryFAQ[] = [
  { question: "What is the personal allowance?", answer: "£12,570 for 2024/25 - income below this is tax-free." },
  { question: "What are the UK income tax rates?", answer: "Basic rate 20% (up to £50,270), Higher rate 40% (£50,271 to £125,140), Additional rate 45% (above £125,140)." },
  { question: "What is the VAT rate?", answer: "20% standard rate. Reduced rate of 5% and zero rate apply to certain goods and services." },
  { question: "Who is a tax resident in the UK?", answer: "You are a UK tax resident if you are present in the UK for 183 days or more, or have a home in the UK for 91 days." },
  { question: "What is National Insurance?", answer: "Class 1 NI is 8% on earnings between £242 and £967 per week, then 2% above. It funds state pension and benefits." },
  { question: "When is the tax filing deadline?", answer: "January 31st for online Self Assessment returns." }
];

const taxConcepts: TaxConcept[] = [
  { title: "Tax Year", description: "The UK tax year runs from April 6 to April 5. The 2024/25 tax year covers April 6, 2024 to April 5, 2025." },
  { title: "Personal Allowance", description: "The amount of income you can earn each year before paying income tax. £12,570 for 2024/25, reduced by £1 for every £2 of income above £100,000." },
  { title: "Residency and Domicile", description: "UK tax residents are taxed on worldwide income. Non-residents are taxed only on UK-sourced income. Domicile status affects how foreign income is taxed." },
  { title: "Scotland's Different Rates", description: "Scotland has its own income tax rates and bands, separate from England, Wales, and Northern Ireland." }
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
  lastUpdated: "2025-06-15",
  taxYear: "April 6 – April 5",
  filingDeadline: "January 31 (online Self Assessment); April 30 (paper filing)",
  paymentDeadline: "Tax payable by January 31; payments on account due January 31 and July 31",
  taxSystemOverview: {
    incomeTax: "Three-band progressive system: Basic rate 20% (up to £50,270), Higher rate 40% (£50,271 to £125,140), Additional rate 45% (above £125,140). Personal allowance of £12,570 reduces taxable income. Scotland has separate rates and bands.",
    capitalGainsTax: "10% for basic rate taxpayers and 20% for higher/additional rate taxpayers on most assets. 18%/28% on residential property. Annual exempt amount of £3,000. No CGT on transfers between spouses.",
    vatGstSalesTax: "Standard VAT rate of 20%. Reduced rate of 5% for certain goods and services. Zero rate for essential items including most food and children's clothing. Some goods and services are VAT-exempt.",
    corporateTax: "25% for companies with profits over £250,000. 19% for small companies with profits up to £50,000. Marginal relief for companies between £50,000 and £250,000.",
    payrollTax: "Class 1 National Insurance: 8% on earnings between £12,570 and £50,270, then 2% above. Employer contributions mirror employee rates. Class 2 (flat weekly) and Class 4 (on profits) for self-employed individuals."
  },
  taxSystemDetails: {
    howTaxationWorks: "The UK uses a Pay As You Earn (PAYE) system for employment income, where employers deduct tax and NI contributions before paying wages. Self-employed individuals make payments on account twice a year. The Self Assessment system requires individuals to file annual tax returns and pay any additional tax owed.",
    whoPaysTax: "UK tax residents are taxed on worldwide income. Non-residents are taxed only on UK-sourced income. Employers deduct PAYE from employee wages. Self-employed individuals pay Class 2 and Class 4 NI contributions.",
    residentVsNonResident: "UK tax residents are taxed on worldwide income. Non-residents are taxed only on UK-sourced income. Residency is determined by the Statutory Residence Test (SRT), which considers days present, home availability, and work in the UK.",
    personalIncomeTax: "The UK uses a three-band progressive income tax system: Basic rate 20%, Higher rate 40%, and Additional rate 45%. The personal allowance of £12,570 reduces taxable income. Scotland has separate rates and bands.",
    businessTaxOverview: "Corporation tax is 25% for companies with profits over £250,000, 19% for small companies with profits up to £50,000, and marginal relief for companies between £50,000 and £250,000. VAT is 20% on most goods and services.",
    importantConcepts: taxConcepts
  },
  currentTaxBrackets,
  standardDeductions: "Personal allowance of £12,570 reduces taxable income. Reduced by £1 for every £2 of income above £100,000.",
  majorDeductions,
  credits,
  importantDates,
  officialResources,
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "vat-calculator", name: "VAT Calculator", category: "vat" },
    { slug: "ni-calculator", name: "National Insurance Calculator", category: "national-insurance" }
  ],
  salaryCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "ni-calculator", name: "National Insurance Calculator", category: "national-insurance" }
  ],
  capitalGainsCalculators: [],
  corporateCalculators: [],
  relatedCountries: ["united-states", "canada", "australia", "new-zealand"],
  latestUpdates: [
    { date: "2024-04-06", title: "2024/25 Tax Year Updates", description: "New tax rates and thresholds for the 2024/25 tax year including updated personal allowance and NI thresholds." },
    { date: "2024-01-01", title: "VAT Threshold Changes", description: "HMRC updated VAT registration threshold and enforcement policies for the new year." },
    { date: "2023-10-06", title: "Autumn Statement Tax Changes", description: "Announcement of new tax measures including National Insurance reductions and property tax updates." }
  ],
  countryFAQs,
  taxSystemSummary: "The United Kingdom operates a comprehensive tax system administered by HMRC with income tax, National Insurance, VAT, and other taxes. The tax year runs from April 6 to April 5. Residents are taxed on worldwide income while non-residents are taxed only on UK-sourced income.",
  employerWithholding: "UK employers operate PAYE (Pay As You Earn) to deduct income tax and National Insurance contributions from employee wages before payment. Employers also report employee earnings to HMRC through Real Time Information (RTI) submissions. Self-employed individuals make payments on account twice a year.",
  whoShouldUse: [
    { type: "Employees", icon: "M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 14H4V9h16v10z", description: "W-2 equivalent employees in the UK who want to estimate their PAYE income tax and National Insurance contributions." },
    { type: "Freelancers & Contractors", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", description: "Self-employed sole traders and contractors who need to calculate Class 2 and Class 4 National Insurance and file Self Assessment tax returns." },
    { type: "Business Owners", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", description: "Company directors and limited company owners who need to understand corporation tax, dividend tax, and VAT obligations." },
    { type: "Expats", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", description: "Non-domiciled individuals and expats working in the UK who need to understand UK tax residency rules and remittance basis." },
    { type: "Property Owners", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", description: "Landlords and property investors with rental income who need to estimate income tax, Capital Gains Tax, and Stamp Duty Land Tax." }
  ],
  howToUseSteps: [
    { step: 1, title: "Enter Income", description: "Input your annual employment income, self-employed profits, rental income, dividends, or other taxable income sources." },
    { step: 2, title: "Choose Tax Year", description: "Select the appropriate tax year (e.g., 2024/25). This determines your personal allowance, tax bands, and NI thresholds." },
    { step: 3, title: "Review Allowances", description: "Check your personal allowance of £12,570 (subject to tapering above £100,000), Marriage Allowance, and other available reliefs." },
    { step: 4, title: "Calculate", description: "Click Calculate to see your income tax, National Insurance contributions, effective tax rate, and take-home pay." },
    { step: 5, title: "Plan Payments", description: "Review your results and plan your Self Assessment payments on account (January 31 and July 31) if you are self-employed." }
  ],
  educationalDisclaimer: "The tax information and calculators on this page are for educational and informational purposes only. They do not constitute professional tax advice. Tax laws are subject to change. Always consult a qualified tax professional for advice specific to your situation.",
  dataSources: ["HM Revenue & Customs (HMRC)", "UK Budget 2024", "HMRC Tax Circulars"],
  calculationMethodology: "Tax calculations follow the Income Tax Act 2007 and HMRC guidelines. Progressive rates are applied to taxable income after personal allowance and deductions. NI contributions are calculated per the Social Security Contributions and Benefits Act."
};
