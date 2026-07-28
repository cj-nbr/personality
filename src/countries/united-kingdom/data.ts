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
  educationalDisclaimer: "The tax information and calculators on this page are for educational and informational purposes only. They do not constitute professional tax advice. Tax laws are subject to change. Always consult a qualified tax professional for advice specific to your situation.",
  dataSources: ["HM Revenue & Customs (HMRC)", "UK Budget 2024", "HMRC Tax Circulars"],
  calculationMethodology: "Tax calculations follow the Income Tax Act 2007 and HMRC guidelines. Progressive rates are applied to taxable income after personal allowance and deductions. NI contributions are calculated per the Social Security Contributions and Benefits Act."
};
