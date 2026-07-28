import type { Country, TaxCategory, TaxBracket, TaxDeduction, TaxCredit, OfficialResource, ImportantDate, CountryFAQ, TaxConcept } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Direct tax on individual and corporate income in India.",
    overview: "India has a progressive income tax system with rates from 0% to 30% depending on income slab and residency status.",
    calculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your Indian income tax liability." }
    ],
    guides: [
      { slug: "itr-guide", title: "ITR Filing Guide", description: "How to choose and file the correct ITR form." }
    ],
    faqs: [
      { question: "What is the ITR filing deadline?", answer: "July 31st for individuals unless extended." },
      { question: "What is the new tax regime?", answer: "A simplified regime with lower rates but limited deductions." }
    ]
  },
  {
    slug: "gst",
    name: "GST",
    description: "Goods and Services Tax - India's unified indirect tax.",
    overview: "GST is a multi-stage, destination-based tax levied on every value addition.",
    calculators: [
      { slug: "gst-calculator", name: "GST Calculator", description: "Calculate GST inclusive or exclusive amounts." }
    ],
    guides: [
      { slug: "gst-guide", title: "GST Complete Guide", description: "Understanding GST slabs, registration, and filing." }
    ],
    faqs: [
      { question: "What are the GST slabs?", answer: "0%, 5%, 12%, 18%, and 28% for various goods and services." }
    ]
  },
  {
    slug: "tds",
    name: "TDS",
    description: "Tax Deducted at Source on payments.",
    overview: "TDS is deducted by the payer before making certain payments. It acts as a prepayment of tax.",
    calculators: [
      { slug: "tds-calculator", name: "TDS Calculator", description: "Calculate TDS deductions for various payment types." }
    ],
    guides: [
      { slug: "tds-guide", title: "TDS Return Filing Guide", description: "Complete guide to TDS compliance and returns." }
    ],
    faqs: [
      { question: "What is TDS?", answer: "Tax Deducted at Source - a mechanism for collecting tax at the time of payment." }
    ]
  }
];

const currentTaxBrackets: TaxBracket[] = [
  { label: "0%", rate: "0%", threshold: "₹0 – ₹4,00,000", notes: "New regime; rebate under Section 87A" },
  { label: "5%", rate: "5%", threshold: "₹4,00,001 – ₹8,00,000", notes: "New regime" },
  { label: "10%", rate: "10%", threshold: "₹8,00,001 – ₹12,00,000", notes: "New regime" },
  { label: "15%", rate: "15%", threshold: "₹12,00,001 – ₹16,00,000", notes: "New regime" },
  { label: "20%", rate: "20%", threshold: "₹16,00,001 – ₹20,00,000", notes: "New regime" },
  { label: "25%", rate: "25%", threshold: "₹20,00,001 – ₹24,00,000", notes: "New regime" },
  { label: "30%", rate: "30%", threshold: "Above ₹24,00,000", notes: "New regime; old regime rates apply with deductions" }
];

const majorDeductions: TaxDeduction[] = [
  { name: "Section 80C", description: "Up to ₹1,50,000 deduction for investments in PPF, ELSS, NSC, life insurance premiums, and more." },
  { name: "Section 80D", description: "Deduction for health insurance premiums — up to ₹25,000 for self and family (₹50,000 for senior citizens)." },
  { name: "HRA", description: "House Rent Allowance deduction for salaried individuals paying rent." },
  { name: "Standard Deduction", description: "₹75,000 standard deduction for salaried individuals (new regime)." },
  { name: "Section 80TTA", description: "₹10,000 deduction on savings account interest." },
  { name: "Section 80E", description: "Deduction on interest paid on education loans." }
];

const credits: TaxCredit[] = [
  { name: "Section 87A Rebate", description: "Rebate of up to ₹12,500 for individuals with taxable income up to ₹7,00,000 in the new regime." },
  { name: "Surcharge", description: "10% surcharge on income above ₹50,00,000; 15% above ₹1,00,00,000; 25% above ₹2,00,00,000; 37% above ₹5,00,00,000." },
  { name: "Health and Education Cess", description: "4% cess on income tax and surcharge." }
];

const officialResources: OfficialResource[] = [
  { name: "Income Tax Department", url: "https://www.incometax.gov.in", description: "Official portal for ITR filing, tax forms, notices, and circulars." },
  { name: "CBDT Official Website", url: "https://www.incometax.gov.in", description: "Central Board of Direct Taxes — policies, circulars, and notifications." },
  { name: "GST Portal", url: "https://www.gst.gov.in", description: "GST registration, returns filing, and compliance portal." },
  { name: "TRACES", url: "https://www.traces.gov.in", description: "TDS Reconciliation Analysis and Correction Enabling System." }
];

const importantDates: ImportantDate[] = [
  { date: "2025-07-31", title: "ITR Filing Deadline (Individuals)", description: "Last date to file Income Tax Return for FY 2024-25 unless extended by the government." },
  { date: "2025-03-31", title: "Financial Year End", description: "End of the financial year (April 1, 2024 – March 31, 2025)." },
  { date: "2025-04-01", title: "New Financial Year Begins", description: "Start of FY 2025-26; new tax rates and thresholds apply." },
  { date: "2025-06-30", title: "Advance Tax Installment 3", description: "Third installment of advance tax due." },
  { date: "2025-09-30", title: "Advance Tax Installment 4", description: "Final installment of advance tax due." }
];

const countryFAQs: CountryFAQ[] = [
  { question: "What is the difference between the old and new tax regime?", answer: "The old regime offers lower tax rates but allows deductions and exemptions (Section 80C, HRA, etc.). The new regime has concessional rates but limited deductions — choose based on your deductions and income level." },
  { question: "What is the ITR filing deadline?", answer: "July 31st for individuals unless extended by the government. Business taxpayers have a different deadline (usually September 30th)." },
  { question: "Who is a tax resident in India?", answer: "An individual is a tax resident if they stay in India for 182 days or more in a financial year, or 60 days or more and have been in India for 365 days or more in the preceding 4 years." },
  { question: "What is TDS and how does it work?", answer: "TDS (Tax Deducted at Source) is a mechanism where the payer deducts tax before making a payment. The deducted amount is deposited with the government and credited to the payee's tax account." },
  { question: "How do I file my ITR online?", answer: "Visit the Income Tax e-filing portal, log in with your PAN, select the appropriate ITR form, fill in your income and deductions, and submit. You can also use the new tax regime calculator to estimate your liability." }
];

const taxConcepts: TaxConcept[] = [
  { title: "Financial Year vs Assessment Year", description: "The Financial Year (FY) is the year in which income is earned (April 1 – March 31). The Assessment Year (AY) is the following year when the income is assessed and taxed." },
  { title: "Residential Status", description: "Your tax liability in India depends on your residential status — Resident, Resident but Not Ordinarily Resident (RNOR), or Non-Resident. Each status has different tax implications." },
  { title: "Gross Total Income", description: "The sum of all income heads (salary, house property, business/profession, capital gains, and other sources) before any deductions or exemptions." },
  { title: "Tax Deducted at Source (TDS)", description: "A tax collection mechanism where tax is deducted at the point of payment. Common for salary, interest, rent, and professional fees." }
];

export const india: Country = {
  slug: "india",
  name: "India",
  flag: "/logos/india.png",
  continent: "Asia",
  officialTaxAuthority: "Central Board of Direct Taxes (CBDT)",
  taxAuthorityUrl: "https://www.incometax.gov.in",
  currency: "INR",
  capital: "New Delhi",
  population: "1.4 billion",
  gdp: "$3.7 trillion",
  officialLanguage: "Hindi and English (official languages); 22 scheduled languages recognised",
  overview: "India has one of the world's largest and most complex tax systems. The Income Tax Act of 1961 governs direct taxes, while the Goods and Services Tax (GST) Act unifies indirect taxation. India uses a self-assessment system where taxpayers calculate and declare their own tax liability. The tax year runs from April 1 to March 31, with returns due July 31 for individuals. India offers two tax regimes: the old regime with deductions and exemptions, and the new regime with lower slab rates but limited deductions.",
  lastUpdated: "2025-06-15",
  taxYear: "FY 2025-26 (AY 2026-27)",
  filingDeadline: "July 31, 2025 (individuals); September 30, 2025 (businesses)",
  paymentDeadline: "Advance tax installments due on June 15, September 15, December 15, and March 15",
  taxSystemOverview: {
    incomeTax: "Progressive rates from 0% to 30% under both old and new regimes. The new regime offers concessional rates (0% up to ₹4L, 5% ₹4-8L, 10% ₹8-12L, 15% ₹12-16L, 20% ₹16-20L, 25% ₹20-24L, 30% above ₹24L). The old regime has lower rates but allows deductions under Sections 80C, 80D, HRA, and more.",
    capitalGainsTax: "Short-term capital gains taxed at applicable income tax rates. Long-term capital gains on equity funds and shares: 12.5% above ₹1 lakh (LTCG indexation for property). Long-term capital gains on other assets: 20% with indexation benefit.",
    vatGstSalesTax: "GST is a multi-stage, destination-based indirect tax. Rates: 0%, 5%, 12%, 18%, and 28%. GST is levied on most goods and services with input tax credit available for businesses.",
    corporateTax: "22% for domestic companies opting for reduced rate (without exemptions). 30% for other domestic companies. Foreign companies taxed at 40%. Surcharge and cess apply.",
    payrollTax: "Employer contributes 12% of basic pay to EPF (8.33% employer + 3.67% employee split). Professional tax varies by state (0-20% with annual cap). TDS is deducted monthly from salaries by employers."
  },
  taxSystemDetails: {
    howTaxationWorks: "India uses a self-assessment tax system. Taxpayers calculate their own tax liability based on their income, deductions, and applicable tax rates. Tax is collected through three main mechanisms: TDS (Tax Deducted at Source), advance tax (quarterly payments), and self-assessment tax (paid with the tax return). The Income Tax Department verifies returns through scrutiny assessments and best judgment assessments.",
    whoPaysTax: "Any individual earning income in India is liable to pay tax. This includes salaried individuals, self-employed professionals, business owners, and investors. Resident individuals are taxed on their worldwide income, while non-residents are taxed only on income sourced in India. Companies, whether domestic or foreign, pay tax on Indian-sourced income.",
    residentVsNonResident: "Resident individuals are taxed on their worldwide income. Non-resident individuals are taxed only on income earned or received in India. The residential status is determined based on the number of days spent in India during the financial year and the preceding four years. RNOR (Resident but Not Ordinarily Resident) individuals have a hybrid status — taxed on Indian income and foreign income received in India.",
    personalIncomeTax: "India has a progressive income tax system with rates ranging from 0% to 30%. The new regime offers concessional rates with fewer deductions, while the old regime has lower rates but allows extensive deductions under Sections 80C, 80D, HRA, and others. Salaried individuals can claim standard deduction of ₹75,000 in the new regime.",
    businessTaxOverview: "Domestic companies pay corporate tax at 22% (reduced rate without exemptions) or 30% (with exemptions). Foreign companies are taxed at 40% on Indian-sourced income. Surcharge and health and education cess apply on top of the base tax rate. Small companies with turnover below the threshold may benefit from reduced rates.",
    importantConcepts: taxConcepts
  },
  currentTaxBrackets,
  standardDeductions: "₹75,000 for salaried individuals under the new regime. Standard deduction is a fixed amount that reduces taxable income without requiring documentation of specific expenses.",
  majorDeductions,
  credits,
  importantDates,
  officialResources,
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "gst-calculator", name: "GST Calculator", category: "gst" },
    { slug: "tds-calculator", name: "TDS Calculator", category: "tds" }
  ],
  salaryCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" }
  ],
  capitalGainsCalculators: [],
  corporateCalculators: [],
  relatedCountries: ["singapore", "malaysia", "hong-kong", "pakistan"],
  latestUpdates: [
    { date: "2024-02-01", title: "Budget 2024-25 Tax Changes", description: "Union Budget 2024 introduced new tax provisions including increased TDS thresholds and updated deductions." },
    { date: "2024-01-01", title: "Standard Deduction Increased", description: "Standard deduction for salaried individuals increased to ₹75,000 under the new regime." },
    { date: "2023-04-01", title: "New Regime Tax Slabs Updated", description: "New tax regime slabs revised with additional benefits and expanded rebate under Section 87A." }
  ],
  countryFAQs,
  educationalDisclaimer: "The tax information and calculators on this page are for educational and informational purposes only. They do not constitute professional tax advice. Tax laws are subject to change. Always consult a qualified tax professional for advice specific to your situation.",
  dataSources: ["Central Board of Direct Taxes (CBDT)", "Ministry of Finance, Government of India", "Income Tax Department Official Portal"],
  calculationMethodology: "Tax calculations follow the official Indian Income Tax Act, 1961 and Finance Act provisions. Brackets and rates are sourced from the latest CBDT notifications. The new regime rates are applied as per the Finance Act 2024-25. Deductions and exemptions are calculated based on the applicable regime selected by the taxpayer."
};
