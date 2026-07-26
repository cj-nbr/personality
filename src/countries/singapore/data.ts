import type { Country, TaxCategory, TaxBracket, TaxDeduction, TaxCredit, OfficialResource, ImportantDate, CountryFAQ, TaxConcept } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Individual and corporate income tax in Singapore.",
    overview: "Resident individuals pay progressive tax from 0% to 24%. Non-residents are taxed at flat rates or 24% whichever is lower.",
    calculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your Singapore income tax." }
    ],
    guides: [
      { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Determine your tax residency status in Singapore." }
    ],
    faqs: [
      { question: "What is the tax filing deadline?", answer: "April 15th for paper filing, April 18th for e-filing." }
    ]
  },
  {
    slug: "gst",
    name: "GST",
    description: "Goods and Services Tax in Singapore.",
    overview: "GST is a consumption tax levied on the supply of goods and services. Rate increased to 9% in 2024.",
    calculators: [
      { slug: "gst-calculator", name: "GST Calculator", description: "Calculate GST inclusive or exclusive amounts." }
    ],
    guides: [
      { slug: "gst-guide", title: "GST Guide", description: "Understanding GST registration and filing." }
    ],
    faqs: [
      { question: "What is the GST rate?", answer: "9% as of 2024." }
    ]
  },
  {
    slug: "stamp-duty",
    name: "Stamp Duty",
    description: "Tax on property and document transactions.",
    overview: "Stamp duty applies to property purchases and certain documents. Buyer's stamp duty applies to residential property.",
    calculators: [
      { slug: "stamp-duty-calculator", name: "Stamp Duty Calculator", description: "Calculate property stamp duty in Singapore." }
    ],
    guides: [
      { slug: "stamp-duty-guide", title: "Stamp Duty Guide", description: "Understanding property stamp duty in Singapore." }
    ],
    faqs: [
      { question: "When is stamp duty payable?", answer: "Within 14 days of signing the purchase agreement." }
    ]
  }
];

const currentTaxBrackets: TaxBracket[] = [
  { label: "0%", rate: "0%", threshold: "First S$20,000", notes: "Resident individuals" },
  { label: "2%", rate: "2%", threshold: "S$20,001 – S$30,000", notes: "Resident individuals" },
  { label: "3.5%", rate: "3.5%", threshold: "S$30,001 – S$40,000", notes: "Resident individuals" },
  { label: "7%", rate: "7%", threshold: "S$40,001 – S$80,000", notes: "Resident individuals" },
  { label: "11.5%", rate: "11.5%", threshold: "S$80,001 – S$120,000", notes: "Resident individuals" },
  { label: "15%", rate: "15%", threshold: "S$120,001 – S$160,000", notes: "Resident individuals" },
  { label: "18%", rate: "18%", threshold: "S$160,001 – S$200,000", notes: "Resident individuals" },
  { label: "19%", rate: "19%", threshold: "S$200,001 – S$320,000", notes: "Resident individuals" },
  { label: "20%", rate: "20%", threshold: "S$320,001 – S$400,000", notes: "Resident individuals" },
  { label: "22%", rate: "22%", threshold: "S$400,001 – S$500,000", notes: "Resident individuals" },
  { label: "24%", rate: "24%", threshold: "Above S$500,000", notes: "Resident individuals; non-residents taxed at 22% or 24%" }
];

const majorDeductions: TaxDeduction[] = [
  { name: "Personal Income Tax Rebates", description: "Annual tax rebates offered by the government (e.g., 20% of tax payable, capped at certain amounts)." },
  { name: "CPF Contributions", description: "Central Provident Fund contributions by employees are not taxable." },
  { name: "Rent Relief", description: "Rent relief for individuals who rent their home. Subject to caps." },
  { name: "Earned Income Relief", description: "Relief for self-employed individuals and employees." },
  { name: "Parent/Grandparent Relief", description: "Tax relief for supporting elderly parents or grandparents." }
];

const credits: TaxCredit[] = [
  { name: "Tax Rebates", description: "Annual tax rebates (e.g., 20% of tax payable) offered by the Singapore government each year." },
  { name: "Pioneer and Development Incentives", description: "Tax incentives for companies in targeted industries and regions." },
  { name: "Foreign Tax Credit", description: "Credit for taxes paid in other countries to avoid double taxation." }
];

const officialResources: OfficialResource[] = [
  { name: "Inland Revenue Authority of Singapore (IRAS)", url: "https://www.iras.gov.sg", description: "Official Singapore tax authority — tax rates, filing, and guidance." },
  { name: "IRAS Tax Rates", url: "https://www.iras.gov.sg/taxes/individual-income-tax/rates", description: "Current individual income tax rates and brackets." },
  { name: "GST Portal", url: "https://www.iras.gov.sg/taxes/goods-and-services-tax", description: "GST registration, filing, and compliance." },
  { name: "MyTax Portal", url: "https://www.iras.gov.sg/e-services/i-tax-login", description: "Online portal for filing individual income tax returns." }
];

const importantDates: ImportantDate[] = [
  { date: "2025-01-01", title: "Tax Year Start", description: "Singapore tax year follows the calendar year (January 1 – December 31)." },
  { date: "2025-04-15", title: "Paper Filing Deadline", description: "Deadline for paper filing of individual income tax returns." },
  { date: "2025-04-18", title: "E-Filing Deadline", description: "Deadline for e-filing of individual income tax returns." },
  { date: "2025-12-31", title: "Tax Year End", description: "End of the Singapore tax year." }
];

const countryFAQs: CountryFAQ[] = [
  { question: "What is the income tax rate in Singapore?", answer: "Resident individuals pay progressive tax from 0% to 24%. Non-residents are taxed at flat rates or 24% whichever is lower." },
  { question: "What is the GST rate in Singapore?", answer: "GST is 9% as of 2024, increased from 8%." },
  { question: "Is Singapore tax friendly?", answer: "Yes, Singapore has a competitive, low-tax regime with no capital gains tax and no inheritance tax." },
  { question: "What is the tax filing deadline?", answer: "April 15th for paper filing, April 18th for e-filing." },
  { question: "Who is a tax resident in Singapore?", answer: "An individual is a tax resident if they are a Singapore citizen or permanent resident, or a foreigner who has been employed in Singapore for 183 days or more in a calendar year." }
];

const taxConcepts: TaxConcept[] = [
  { title: "Tax Residency", description: "Singapore taxes residents on worldwide income and non-residents on Singapore-sourced income. Residency is determined by citizenship, permanent residency, or 183+ days of employment." },
  { title: "Territorial Tax System", description: "Singapore operates a territorial tax system where only income sourced in Singapore is taxed. Foreign-sourced income is generally not taxed unless remitted to Singapore." },
  { title: "Progressive Tax Rates", description: "Singapore uses progressive tax rates for resident individuals, ranging from 0% to 24%. Non-residents are taxed at flat rates." },
  { title: "No Capital Gains Tax", description: "Singapore does not impose capital gains tax on the sale of property, shares, or other assets." }
];

export const singapore: Country = {
  slug: "singapore",
  name: "Singapore",
  flag: "/logos/singapore.png",
  continent: "Asia",
  officialTaxAuthority: "Inland Revenue Authority of Singapore (IRAS)",
  taxAuthorityUrl: "https://www.iras.gov.sg",
  currency: "SGD",
  capital: "Singapore",
  population: "5.9 million",
  gdp: "$397 billion",
  officialLanguage: "English, Malay, Mandarin, Tamil",
  overview: "Singapore has a competitive, low-tax regime designed to attract businesses and investments. The country operates a territorial tax system where only income sourced in Singapore is taxed. Resident individuals pay progressive income tax rates from 0% to 24%, while non-residents are taxed at flat rates or 24% whichever is lower. Singapore has no capital gains tax and no inheritance tax, making it one of the most tax-friendly jurisdictions globally.",
  lastUpdated: "2025-06-15",
  taxYear: "Calendar Year (January 1 – December 31)",
  filingDeadline: "April 15 (paper); April 18 (e-filing)",
  paymentDeadline: "Tax payable within 30 days of assessment notice",
  taxSystemOverview: {
    incomeTax: "Progressive rates from 0% to 24% for residents. Non-residents taxed at flat 15% or 22% (whichever is higher). Personal reliefs and tax exemptions available.",
    capitalGainsTax: "No capital gains tax in Singapore. Capital gains from the sale of property, shares, and other assets are not taxable.",
    vatGstSalesTax: "Goods and Services Tax (GST) is 9% as of 2024, increased from 8%. GST is a broad-based consumption tax on most goods and services.",
    corporateTax: "Flat 17% corporate tax rate on taxable income. Various tax incentives and exemptions available for startups and specific industries.",
    payrollTax: "Central Provident Fund (CPF) contributions by both employer and employee. Employer contributes up to 17% and employee contributes up to 20% of monthly salary, subject to CPF contribution ceilings."
  },
  taxSystemDetails: {
    howTaxationWorks: "Singapore uses a self-assessment tax system where taxpayers report their income and calculate their own tax liability. The Inland Revenue Authority of Singapore (IRAS) issues assessment notices and collects taxes. Tax is collected through voluntary assessment and employer withholding (for employment income).",
    whoPaysTax: "Tax residents are taxed on worldwide income. Non-residents are taxed only on Singapore-sourced income. Companies are taxed on Singapore-sourced income. Foreign companies with a permanent establishment in Singapore are also taxed.",
    residentVsNonResident: "Tax residents include Singapore citizens, permanent residents, and foreigners who have been employed in Singapore for 183 days or more in a calendar year. Non-residents are taxed at different rates, typically higher, and are not entitled to personal reliefs.",
    personalIncomeTax: "Singapore uses progressive tax rates for resident individuals from 0% to 24%. Non-residents are taxed at flat rates (15% for employment income, 22% for other income, or 24% whichever is higher). Personal reliefs and tax exemptions reduce the effective tax rate.",
    businessTaxOverview: "Corporate tax is a flat 17% on taxable income. Startups and Pte Ltd companies may benefit from partial tax exemptions on the first S$100,000 – S$300,000 of normal income. Foreign-sourced income is generally not taxed unless remitted to Singapore.",
    importantConcepts: taxConcepts
  },
  currentTaxBrackets,
  standardDeductions: "Singapore provides personal income tax rebates annually (e.g., 20% of tax payable). No standard deduction per se — instead, various personal reliefs reduce taxable income.",
  majorDeductions,
  credits,
  importantDates,
  officialResources,
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "stamp-duty-calculator", name: "Stamp Duty Calculator", category: "stamp-duty" },
    { slug: "gst-calculator", name: "GST Calculator", category: "gst" }
  ],
  salaryCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" }
  ],
  capitalGainsCalculators: [],
  corporateCalculators: [],
  relatedCountries: ["malaysia", "hong-kong", "indonesia", "philippines"],
  latestUpdates: [
    { date: "2024-01-01", title: "GST Rate Increase to 9%", description: "Singapore GST increased from 8% to 9% in 2024, the first rate increase since 2007." },
    { date: "2024-01-01", title: "New Tax Year Updates", description: "IRAS released updated tax rates and reliefs for the 2024 Year of Assessment." }
  ],
  countryFAQs,
  educationalDisclaimer: "The tax information and calculators on this page are for educational and informational purposes only. They do not constitute professional tax advice. Tax laws are subject to change. Always consult a qualified tax professional for advice specific to your situation.",
  dataSources: ["Inland Revenue Authority of Singapore (IRAS)", "Singapore Budget 2024", "IRAS Tax Circulars"],
  calculationMethodology: "Tax calculations follow the Singapore Income Tax Act and IRAS guidelines. Progressive rates are applied to chargeable income after personal reliefs and deductions. GST calculations follow the GST Act. Corporate tax is calculated on net chargeable income at the prevailing rate."
};
