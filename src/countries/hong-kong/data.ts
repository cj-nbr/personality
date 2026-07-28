import type { Country, TaxCategory, TaxBracket, TaxDeduction, TaxCredit, OfficialResource, ImportantDate, CountryFAQ, TaxConcept } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "salaries-tax",
    name: "Salaries Tax",
    description: "Tax on employment income earned in Hong Kong.",
    overview: "Salaries tax is levied on income from employment. Standard rate is 15% or progressive rates from 2% to 17%, whichever is lower.",
    calculators: [
      { slug: "salaries-tax-calculator", name: "Salaries Tax Calculator", description: "Estimate your Hong Kong salaries tax under progressive and standard rates." },
      { slug: "salary-tax-computation", name: "Salary Tax Computation", description: "Detailed breakdown of your Hong Kong salary tax calculation." },
      { slug: "hk-net-salary-calculator", name: "HK Net Salary Calculator", description: "Calculate your take-home pay after tax and MPF in Hong Kong." },
      { slug: "hong-kong-tax-calculator-for-expats", name: "Hong Kong Tax Calculator for Expats", description: "Estimate your Hong Kong tax as a foreign employee or expat." },
      { slug: "hong-kong-income-tax-for-foreigners-calculator", name: "Hong Kong Income Tax for Foreigners Calculator", description: "Calculate income tax for foreigners working in Hong Kong." }
    ],
    guides: [
      { slug: "salaries-tax-guide", title: "Salaries Tax Guide", description: "Understanding Hong Kong salaries tax calculation and allowances." },
      { slug: "hk-tax-allowances-guide", title: "HK Tax Allowances and Deductions Guide", description: "Complete guide to personal allowances, deductions, and MPF in Hong Kong." },
      { slug: "hong-kong-tax-residency-guide", title: "Hong Kong Tax Residency Guide", description: "How to qualify as a Hong Kong tax resident and understand the 60-day rule." },
      { slug: "provisional-tax-guide", title: "Provisional Tax Guide", description: "Understanding provisional salaries tax in Hong Kong and how to calculate it." },
      { slug: "hong-kong-expats-tax-guide", title: "Hong Kong Expats Tax Guide", description: "Tax obligations for foreigners and expats working in Hong Kong." },
      { slug: "mpf-tax-guide", title: "MPF and Tax Guide", description: "How MPF contributions affect your Hong Kong tax calculation." }
    ],
    faqs: [
      { question: "What is the salaries tax rate in Hong Kong?", answer: "Salaries tax is charged at progressive rates from 2% to 17% on net chargeable income, or at the standard rate of 15% on net income, whichever is lower." },
      { question: "How is Hong Kong tax calculated?", answer: "Hong Kong uses a territorial tax system. Salaries tax is calculated on assessable income after allowable deductions and personal allowances. The progressive rates range from 2% to 17%." },
      { question: "How can I calculate my income tax rate as a foreigner in Hong Kong?", answer: "Foreigners can use our Hong Kong tax calculator for expats. Your tax rate depends on employment income, marital status, and deductions." },
      { question: "How do I calculate tax amount in calculator?", answer: "Enter your annual employment income, deductions, and personal allowances into our Hong Kong tax calculator. The tool applies progressive tax rates or the standard rate." },
      { question: "Is HK tax free for foreigners?", answer: "Hong Kong tax is not entirely free for foreigners. Employment income sourced in Hong Kong is subject to salaries tax. The territorial tax system means overseas income is generally not taxable." },
      { question: "How do I calculate my tax?", answer: "Input your assessable income, allowable deductions, and personal allowances into our HK tax calculator. The tool applies current IRD progressive rates and determines whether you pay less under the standard rate or progressive rates system." },
      { question: "Is HK income tax low?", answer: "Yes, Hong Kong has some of the lowest income tax rates in the world. The maximum salaries tax rate is 17% with a standard rate cap of 15%." },
      { question: "How do I calculate my income tax?", answer: "Use our Hong Kong income tax calculator to estimate your salaries tax. Enter your annual income, deductions, and personal allowances." },
      { question: "Is Hong Kong a high tax country?", answer: "No, Hong Kong is not a high tax country. It maintains a simple tax regime with low rates, a territorial tax system, and no tax on capital gains or overseas income." },
      { question: "Do expats pay tax in Hong Kong?", answer: "Yes, expats pay tax in Hong Kong on employment income sourced in Hong Kong. The Hong Kong tax calculator for expats helps estimate your tax liability." }
    ]
  },
  {
    slug: "profits-tax",
    name: "Profits Tax",
    description: "Tax on business profits sourced in Hong Kong.",
    overview: "Only profits arising from Hong Kong are taxable. Two-tiered rates: 8.25% first HK$2M for corporations, 16.5% remainder. 7.5%/15% for unincorporated businesses.",
    calculators: [
      { slug: "profits-tax-calculator", name: "Profits Tax Calculator", description: "Estimate your Hong Kong profits tax under the two-tiered rates." },
      { slug: "hk-corporate-tax-calculator", name: "HK Corporate Tax Calculator", description: "Calculate corporate tax for Hong Kong limited companies." },
      { slug: "profit-tax-computation", name: "Profit Tax Computation", description: "Detailed breakdown of your Hong Kong profit tax calculation." }
    ],
    guides: [
      { slug: "profits-tax-guide", title: "Profits Tax Guide", description: "Understanding source of profits rules and two-tiered tax rates in Hong Kong." },
      { slug: "hong-kong-corporate-tax-guide", title: "Hong Kong Corporate Tax Guide", description: "Complete guide to corporate tax obligations for Hong Kong businesses." },
      { slug: "deferred-tax-calculation-guide", title: "Deferred Tax Calculation Guide", description: "Understanding deferred tax and temporary differences in Hong Kong." },
      { slug: "provisional-profits-tax-guide", title: "Provisional Profits Tax Guide", description: "How provisional profits tax is calculated and paid in Hong Kong." }
    ],
    faqs: [
      { question: "What is the profits tax rate in Hong Kong?", answer: "Profits tax is charged at two-tiered rates: 8.25% on the first HK$2 million for corporations, and 16.5% on the remainder. For unincorporated businesses, 7.5% and 15% respectively." },
      { question: "Who needs to pay profits tax?", answer: "All businesses carrying on a trade, profession, or business in Hong Kong may be subject to profits tax on profits arising in or derived from Hong Kong." },
      { question: "What is the territorial tax system in Hong Kong?", answer: "Hong Kong operates a territorial tax system, meaning only profits sourced in Hong Kong are taxable. Overseas profits are generally not subject to Hong Kong profits tax." },
      { question: "How is Hong Kong business tax calculated?", answer: "Business tax (profits tax) is calculated on net assessable profits after deducting allowable expenses and capital allowances. The two-tiered rates apply automatically." }
    ]
  },
  {
    slug: "stamp-duty",
    name: "Stamp Duty",
    description: "Tax on property transactions and certain legal documents in Hong Kong.",
    overview: "Stamp duty is payable on property transactions and certain documents. Scale 2 rates apply: flat HK$100 for properties up to HK$4M, then progressive rates up to 4.25%.",
    calculators: [
      { slug: "hk-property-stamp-duty-calculator", name: "HK Property Stamp Duty Calculator", description: "Calculate Hong Kong property stamp duty including AVD and BSD." },
      { slug: "stamp-duty-calculator", name: "Stamp Duty Calculator", description: "Estimate stamp duty for Hong Kong property purchases." },
      { slug: "rental-stamp-duty-calculator", name: "Rental Stamp Duty Calculator", description: "Calculate stamp duty on rental agreements and leases in Hong Kong." },
      { slug: "first-registration-tax-calculator", name: "First Registration Tax Calculator", description: "Calculate first registration tax for Hong Kong vehicles." }
    ],
    guides: [
      { slug: "stamp-duty-guide", title: "Stamp Duty Guide", description: "Understanding Hong Kong stamp duty on property and document transactions." },
      { slug: "hk-property-stamp-duty-guide", title: "HK Property Stamp Duty Guide", description: "Complete guide to property stamp duty rates, BSD, and SSD in Hong Kong." },
      { slug: "rental-stamp-duty-guide", title: "Rental Stamp Duty Guide", description: "How stamp duty applies to rental agreements and leases in Hong Kong." }
    ],
    faqs: [
      { question: "What is the stamp duty rate in Hong Kong?", answer: "Hong Kong property stamp duty uses Scale 2 rates: flat HK$100 for properties up to HK$4M, 1.5% for HK$4M to HK$4.5M, 2.25% for HK$4.5M to HK$6M, 3% for HK$6M to HK$9M, 3.75% for HK$9M to HK$20M, and 4.25% above HK$20M." },
      { question: "How is stamp duty calculated?", answer: "Stamp duty is typically calculated as a percentage of the property purchase price with tiered rates under Scale 2." },
      { question: "When do I need to pay stamp duty?", answer: "Property purchase stamp duty should be paid within 30 days of signing the sale and purchase agreement. Rental stamp duty should be paid within 30 days of signing the lease." }
    ]
  },
  {
    slug: "property-tax",
    name: "Property Tax",
    description: "Tax on rental income from Hong Kong properties.",
    overview: "Property tax is assessed on the net assessable value of rental income. The standard rate is 15% on the net assessable value after deducting standard deductions.",
    calculators: [
      { slug: "property-tax-calculator", name: "Property Tax Calculator", description: "Calculate Hong Kong property tax on rental income." },
      { slug: "hk-rental-tax-deduction-calculator", name: "HK Rental Tax Deduction Calculator", description: "Estimate rental tax deductions and property tax liability." }
    ],
    guides: [
      { slug: "property-tax-guide", title: "Property Tax Guide", description: "Understanding Hong Kong property tax on rental income." },
      { slug: "rental-income-tax-guide", title: "Rental Income Tax Guide", description: "How rental income is taxed in Hong Kong and what deductions you can claim." }
    ],
    faqs: [
      { question: "What is the property tax rate in Hong Kong?", answer: "Property tax in Hong Kong is charged at the standard rate of 15% on the net assessable value of rental income, after deducting property tax standard deductions." },
      { question: "Is rental income taxable in Hong Kong?", answer: "Yes, rental income from Hong Kong properties is subject to property tax. The net assessable value is calculated after deducting irrecoverable rent and property tax deductions." },
      { question: "How do I calculate property tax in Hong Kong?", answer: "Property tax is calculated on the net assessable value of rental income at the standard rate of 15%. Use our Hong Kong property tax calculator for an estimate." }
    ]
  }
];

const currentTaxBrackets: TaxBracket[] = [
  { label: "2%", rate: "2%", threshold: "First HK$50,000", notes: "Progressive rate" },
  { label: "6%", rate: "6%", threshold: "HK$50,001 – HK$100,000", notes: "Progressive rate" },
  { label: "10%", rate: "10%", threshold: "HK$100,001 – HK$150,000", notes: "Progressive rate" },
  { label: "14%", rate: "14%", threshold: "HK$150,001 – HK$200,000", notes: "Progressive rate" },
  { label: "17%", rate: "17%", threshold: "Above HK$200,000", notes: "Progressive rate" },
  { label: "15%", rate: "15%", threshold: "Standard rate on net income", notes: "Flat rate — whichever is lower applies" }
];

const majorDeductions: TaxDeduction[] = [
  { name: "MPF Contributions", description: "Mandatory Provident Fund contributions are deductible up to HK$18,000 per year (employee portion)." },
  { name: "Married Person's Allowance", description: "HK$132,000 if spouse is not assessable to tax. Additional HK$132,000 if spouse is assessable." },
  { name: "Dependent Child Allowance", description: "HK$120,000 per dependent child under 18. Additional HK$120,000 for disabled dependents." },
  { name: "Basic Allowance", description: "HK$132,000 for all taxpayers." },
  { name: "Single Parent Allowance", description: "Additional HK$132,000 for single parents." }
];

const credits: TaxCredit[] = [
  { name: "Child Tax Deduction", description: "HK$120,000 per dependent child under 18." },
  { name: "Disabled Dependent Deduction", description: "Additional HK$120,000 per disabled dependent." },
  { name: "Elderly Dependent Deduction", description: "HK$100,000 per parent or grandparent aged 60 or above." }
];

const officialResources: OfficialResource[] = [
  { name: "Inland Revenue Department (IRD)", url: "https://www.ird.gov.hk", description: "Official Hong Kong tax authority — tax forms, rates, allowances, and e-filing services." },
  { name: "IRD Tax Guides", url: "https://www.ird.gov.hk/en/residents/personal-tax/index.html", description: "Comprehensive guides on salaries tax, property tax, and profits tax." },
  { name: "MPF Schemes", url: "https://www.mpf.gov.hk", description: "Mandatory Provident Fund — employer and employee contribution requirements." },
  { name: "eTax Portal", url: "https://www.ird.gov.hk/en/e-tax/index.html", description: "Online platform for filing salaries tax, property tax, and provisional tax." }
];

const importantDates: ImportantDate[] = [
  { date: "2026-04-01", title: "Tax Year Start", description: "Hong Kong tax year runs from April 1 to March 31." },
  { date: "2026-04-15", title: "Salaries Tax Filing Deadline", description: "Deadline for filing salaries tax returns (paper filing)." },
  { date: "2026-04-15", title: "Provisional Tax Deadline", description: "First installment of provisional salaries tax due." },
  { date: "2026-07-15", title: "Second Provisional Tax Installment", description: "Second installment of provisional salaries tax due." },
  { date: "2026-11-15", title: "Third Provisional Tax Installment", description: "Third installment of provisional salaries tax due." }
];

const countryFAQs: CountryFAQ[] = [
  { question: "What is the salaries tax rate in Hong Kong?", answer: "Salaries tax is charged at progressive rates from 2% to 17% on net chargeable income, or at the standard rate of 15% on net income, whichever is lower." },
  { question: "How is Hong Kong tax calculated?", answer: "Hong Kong uses a territorial tax system. Salaries tax is calculated on assessable income after allowable deductions and personal allowances. The progressive rates range from 2% to 17%." },
  { question: "Do I need to pay Hong Kong tax as a foreigner?", answer: "If you are employed in Hong Kong, your employment income sourced in Hong Kong is subject to salaries tax. The 60-day rule may exempt short-term visitors." },
  { question: "What is the 60-day rule?", answer: "Under the 60-day rule, employment income sourced in Hong Kong is exempt from salaries tax if the individual is present in Hong Kong for not more than 60 days in the year and is not a resident." },
  { question: "Is Hong Kong tax free for expats?", answer: "Hong Kong is not entirely tax-free for expats. Employment income sourced in Hong Kong is subject to salaries tax. Overseas income is generally not taxable under the territorial system." }
];

const taxConcepts: TaxConcept[] = [
  { title: "Territorial Tax System", description: "Hong Kong taxes only income sourced in Hong Kong. Overseas income is generally not taxable, making it one of the most attractive jurisdictions for international business." },
  { title: "Progressive vs Standard Rate", description: "Salaries tax is charged at progressive rates (2%–17%) or the standard rate (15%), whichever is lower. This ensures lower-income earners pay less tax." },
  { title: "Two-Tiered Profits Tax", description: "Profits tax uses two-tiered rates: 8.25% on the first HK$2 million for corporations, and 16.5% on the remainder. This benefits small businesses." },
  { title: "MPF Contributions", description: "Mandatory Provident Fund contributions by both employer and employee reduce assessable income, lowering the salaries tax liability." }
];

export const hongKong: Country = {
  slug: "hong-kong",
  name: "Hong Kong",
  flag: "/logos/hong-kong.png",
  continent: "Asia",
  officialTaxAuthority: "Inland Revenue Department (IRD)",
  taxAuthorityUrl: "https://www.ird.gov.hk",
  currency: "HKD",
  capital: "Hong Kong",
  population: "7.5 million",
  gdp: "$407 billion",
  officialLanguage: "Chinese (Cantonese and Mandarin), English",
  overview: "Hong Kong operates a territorial tax system with low tax rates, making it one of the most attractive jurisdictions for international business and investment. Only profits arising from or derived from Hong Kong are subject to tax. The city has no capital gains tax, no VAT, and no sales tax. The two main direct taxes are Salaries Tax (on employment income) and Profits Tax (on business profits).",
  lastUpdated: "2025-06-15",
  taxYear: "April 1 – March 31 (Assessment Year)",
  filingDeadline: "April 15 (paper); June 18 (e-filing)",
  paymentDeadline: "Provisional tax installments due in April, July, and November",
  taxSystemOverview: {
    incomeTax: "Salaries Tax uses progressive rates from 2% to 17% or a standard rate of 15%, whichever is lower. The two-tier system provides a lower effective rate for lower-income earners.",
    capitalGainsTax: "No capital gains tax in Hong Kong. Profits from the sale of capital assets are not taxable unless the IRD determines they are revenue receipts.",
    vatGstSalesTax: "Hong Kong has no VAT, GST, or sales tax. It is one of the few major economies with no consumption tax.",
    corporateTax: "Profits Tax at 16.5% for corporations and 15% for unincorporated businesses. Only profits sourced in Hong Kong are taxable.",
    payrollTax: "Salaries Tax is the primary payroll tax, calculated on employment income after deductions for MPF contributions, married person's allowance, and dependent child allowance."
  },
  taxSystemDetails: {
    howTaxationWorks: "Hong Kong uses a territorial tax system where only income sourced in Hong Kong is taxable. Salaries tax is assessed on net assessable income after deducting MPF contributions, personal allowances, and deductions. The IRD assesses tax annually and taxpayers file returns by the deadline. Provisional tax is estimated based on the previous year's assessment and paid in installments.",
    whoPaysTax: "Any individual earning income from employment in Hong Kong is liable for salaries tax. Companies and partnerships earning profits in Hong Kong are liable for profits tax. Non-residents earning Hong Kong-sourced income may also be taxable under certain conditions.",
    residentVsNonResident: "Hong Kong does not have a formal residency test for tax purposes. Instead, the source of income determines taxability. Employment income sourced in Hong Kong is taxable regardless of residency. Overseas income is generally not taxable. The 60-day rule provides an exemption for short-term visitors.",
    personalIncomeTax: "Salaries tax is the primary personal tax, calculated on employment income after deductions for MPF contributions, personal allowances, and deductions. Progressive rates from 2% to 17% apply, or the standard rate of 15%, whichever is lower.",
    businessTaxOverview: "Profits tax applies to businesses carrying on trade or business in Hong Kong. Two-tiered rates: 8.25% on the first HK$2 million for corporations, 16.5% on the remainder. Unincorporated businesses pay 7.5% on the first HK$2 million and 15% on the remainder.",
    importantConcepts: taxConcepts
  },
  currentTaxBrackets,
  standardDeductions: "Basic allowance of HK$132,000 for all taxpayers. Additional deductions available for MPF contributions, married person's allowance, dependent child allowance, and single parent allowance.",
  majorDeductions,
  credits,
  importantDates,
  officialResources,
  taxCategories,
  popularCalculators: [
    { slug: "salaries-tax-calculator", name: "Salaries Tax Calculator", category: "salaries-tax" },
    { slug: "profits-tax-calculator", name: "Profits Tax Calculator", category: "profits-tax" },
    { slug: "hk-property-stamp-duty-calculator", name: "HK Property Stamp Duty Calculator", category: "stamp-duty" },
    { slug: "property-tax-calculator", name: "Property Tax Calculator", category: "property-tax" }
  ],
  salaryCalculators: [
    { slug: "salaries-tax-calculator", name: "Salaries Tax Calculator", category: "salaries-tax" },
    { slug: "hk-net-salary-calculator", name: "HK Net Salary Calculator", category: "salaries-tax" },
    { slug: "hong-kong-tax-calculator-for-expats", name: "Hong Kong Tax Calculator for Expats", category: "salaries-tax" }
  ],
  capitalGainsCalculators: [],
  corporateCalculators: [
    { slug: "profits-tax-calculator", name: "Profits Tax Calculator", category: "profits-tax" },
    { slug: "hk-corporate-tax-calculator", name: "HK Corporate Tax Calculator", category: "profits-tax" }
  ],
  relatedCountries: ["singapore", "malaysia", "indonesia"],
  latestUpdates: [
    { date: "2026-04-01", title: "2026/27 Tax Rates Released", description: "IRD released updated tax rates and allowances for the new assessment year." },
    { date: "2026-02-26", title: "Two-Tiered Profits Tax Rates Updated", description: "Hong Kong budget confirms continuation of two-tiered profits tax rates for corporations and unincorporated businesses." }
  ],
  countryFAQs,
  educationalDisclaimer: "The tax information and calculators on this page are for educational and informational purposes only. They do not constitute professional tax advice. Tax laws are subject to change. Always consult a qualified tax professional for advice specific to your situation.",
  dataSources: ["Inland Revenue Department (IRD) Hong Kong", "Hong Kong Budget 2026", "IRD Tax Circulars and Guidelines"],
  calculationMethodology: "Tax calculations follow the Hong Kong Inland Revenue Ordinance and IRD guidelines. Progressive rates and standard rate are applied as per the current assessment year. MPF contribution deductions are based on the MPF Schemes Ordinance. Allowances and deductions are applied as per the Salaries Tax Ordinance."
};
