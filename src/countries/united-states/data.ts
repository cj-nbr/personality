import type { Country, TaxCategory } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Federal and state income tax obligations for individuals and businesses in the United States.",
    overview: "The United States imposes a progressive federal income tax system with rates ranging from 10% to 37% for the highest earners. Tax residents are taxed on worldwide income, while non-residents are taxed only on US-source income. State and local taxes may also apply depending on your jurisdiction.",
    calculators: [
      { slug: "federal-income-tax", name: "Federal Income Tax Calculator", description: "Estimate your federal income tax liability based on current IRS tax brackets." },
      { slug: "state-income-tax", name: "State Income Tax Calculator", description: "Compare state income tax rates and estimates across major US states." },
      { slug: "effective-tax-rate", name: "Effective Tax Rate Calculator", description: "Calculate your effective tax rate and understand your true tax burden." }
    ],
    guides: [
      { slug: "how-to-file", title: "How to File Your Income Tax Return", description: "Step-by-step guide to filing your US federal income tax return, including form selection and deadlines." },
      { slug: "tax-brackets", title: "Understanding US Tax Brackets", description: "Learn how progressive tax brackets work, how marginal rates apply, and how to minimize your tax liability." },
      { slug: "itemized-vs-standard", title: "Itemized Deductions vs Standard Deduction", description: "Compare standard and itemized deductions to determine which option reduces your taxable income more." }
    ],
    faqs: [
      { question: "When is the federal tax filing deadline?", answer: "The federal tax filing deadline is typically April 15th. Extensions are available until October 15th by filing Form 4868." },
      { question: "Do I need to file if I live abroad?", answer: "US citizens and green card holders must file federal tax returns regardless of where they live abroad. Foreign earned income exclusion may apply." },
      { question: "What is the standard deduction for 2025?", answer: "The 2025 standard deduction is $15,000 for single filers, $30,000 for married filing jointly, and $22,500 for heads of household." },
      { question: "What are the 2025 federal tax brackets?", answer: "The 2025 federal income tax brackets are 10%, 12%, 22%, 24%, 32%, 35%, and 37% depending on your taxable income and filing status." }
    ]
  },
  {
    slug: "payroll-tax",
    name: "Payroll Tax",
    description: "Employer and employee payroll tax obligations including FICA and self-employment taxes.",
    overview: "Payroll taxes fund Social Security and Medicare through FICA (Federal Insurance Contributions Act). Employees pay 6.2% for Social Security and 1.45% for Medicare, while employers match these contributions. Self-employed individuals pay both the employee and employer portions through SECA.",
    calculators: [
      { slug: "payroll-tax-calculator", name: "Payroll Tax Calculator", description: "Calculate employer and employee payroll tax contributions including FICA and SE tax." },
      { slug: "fica-calculator", name: "FICA Tax Calculator", description: "Calculate Social Security and Medicare taxes on your wages." },
      { slug: "self-employment-tax", name: "Self-Employment Tax Calculator", description: "Estimate SE tax for freelancers and independent contractors." }
    ],
    guides: [
      { slug: "fica-guide", title: "Complete FICA Tax Guide", description: "Understanding Social Security and Medicare taxes, wage base limits, and additional Medicare tax." },
      { slug: "se-tax-guide", title: "Self-Employment Tax Guide", description: "How SE tax works, deductible portion, and quarterly estimated payments." }
    ],
    faqs: [
      { question: "What is the FICA tax rate for employees?", answer: "7.65% total (6.2% Social Security + 1.45% Medicare). The employer matches the same amount." },
      { question: "When does the Social Security wage base cap apply?", answer: "In 2025, the Social Security wage base cap is $176,100. Earnings above this are not subject to Social Security tax." }
    ]
  },
  {
    slug: "corporate-tax",
    name: "Corporate Tax",
    description: "Federal corporate income tax and business entity taxes.",
    overview: "The federal corporate tax rate is a flat 21% on taxable income for C-Corporations. Pass-through entities such as S-Corporations, LLCs, and partnerships are not taxed at the entity level; instead, income flows through to owners who report it on their personal returns.",
    calculators: [
      { slug: "corporate-tax-calculator", name: "Corporate Tax Calculator", description: "Estimate corporate income tax liability for C-Corporations." },
      { slug: "small-business-tax", name: "Small Business Tax Calculator", description: "Estimate taxes for pass-through business entities." }
    ],
    guides: [
      { slug: "business-entities", title: "Business Entity Tax Guide", description: "Compare tax obligations by business entity type: C-Corp, S-Corp, LLC, and sole proprietorship." }
    ],
    faqs: [
      { question: "What is the federal corporate tax rate?", answer: "21% flat rate on taxable income for C-Corporations. Pass-through entities are taxed at individual rates." },
      { question: "Are state corporate taxes different from federal?", answer: "Yes, most states impose separate corporate income taxes with varying rates and rules." }
    ]
  },
  {
    slug: "capital-gains-tax",
    name: "Capital Gains Tax",
    description: "Tax on profits from the sale of investments and property.",
    overview: "Capital gains tax rates depend on your holding period and income level. Short-term gains (assets held less than one year) are taxed at your ordinary income tax rate. Long-term gains (assets held more than one year) receive preferential rates of 0%, 15%, or 20% depending on your taxable income.",
    calculators: [
      { slug: "capital-gains-calculator", name: "Capital Gains Tax Calculator", description: "Estimate tax on investment gains from stocks, real estate, and other assets." },
      { slug: "ltcg-calculator", name: "Long-Term Capital Gains Calculator", description: "Calculate long-term capital gains tax with indexation benefits for property sales." }
    ],
    guides: [
      { slug: "capital-gains-guide", title: "Capital Gains Tax Guide", description: "Understand short-term vs long-term capital gains, tax rates, and strategies to minimize tax." },
      { slug: "property-sale-tax", title: "Tax Implications of Selling Property", description: "Guide to capital gains on real estate, depreciation recapture, and 1031 exchanges." }
    ],
    faqs: [
      { question: "What is the long-term capital gains tax rate?", answer: "0%, 15%, or 20% depending on your taxable income. Most taxpayers pay 15%." },
      { question: "How long do I need to hold an asset for long-term treatment?", answer: "Assets must be held for more than one year to qualify for long-term capital gains rates." }
    ]
  },
  {
    slug: "estate-tax",
    name: "Estate & Inheritance Tax",
    description: "Federal estate tax and state inheritance taxes.",
    overview: "The federal estate tax applies to the transfer of property at death. For 2025, the exemption is $13.61 million per individual. Only estates exceeding this threshold owe federal estate tax. Some states also impose their own estate or inheritance taxes.",
    calculators: [
      { slug: "estate-tax-calculator", name: "Estate Tax Calculator", description: "Estimate federal estate tax liability and understand the exemption threshold." }
    ],
    guides: [
      { slug: "estate-planning", title: "Estate Planning Tax Guide", description: "Strategies to minimize estate tax including gifting, trusts, and charitable giving." }
    ],
    faqs: [
      { question: "What is the federal estate tax exemption for 2025?", answer: "The 2025 federal estate tax exemption is $13.61 million per individual." },
      { question: "Does everyone pay estate tax when they die?", answer: "No. Only estates exceeding the exemption threshold owe federal estate tax. Most estates are below the threshold." }
    ]
  }
];

export const unitedStates: Country = {
  slug: "united-states",
  name: "United States",
  flag: "/logos/united-states.png",
  continent: "North America",
  officialTaxAuthority: "Internal Revenue Service (IRS)",
  taxAuthorityUrl: "https://www.irs.gov",
  currency: "USD",
  capital: "Washington, D.C.",
  population: "331 million",
  gdp: "$25.5 trillion",
  officialLanguage: "English (no official language at federal level)",
  overview: "The United States has the world's largest economy and the most complex tax system. The federal government imposes a progressive income tax, payroll taxes, corporate taxes, capital gains taxes, and estate taxes. State and local governments add their own tax layers. Tax residents are taxed on worldwide income, while non-residents are taxed only on US-source income. The tax year follows the calendar year, with returns due April 15th.",
  taxSystemOverview: {
    incomeTax: "Progressive federal rates from 10% to 37%. State income tax varies (0% to 13.3%). Local taxes may also apply in some jurisdictions.",
    capitalGainsTax: "0%, 15%, or 20% for long-term gains based on income level. Short-term gains taxed at ordinary income rates. Collectibles taxed at 28%.",
    vatGstSalesTax: "No federal VAT/GST. Sales tax varies by state (0% to 7.25% average). Some states have no sales tax (Alaska, Delaware, Montana, New Hampshire, Oregon).",
    corporateTax: "Flat 21% federal corporate tax rate for C-Corporations. Pass-through entities taxed at individual rates.",
    payrollTax: "7.65% FICA (6.2% Social Security + 1.45% Medicare). Additional 0.9% Medicare tax on earnings above $200,000. Self-employed pay both halves (15.3% total)."
  },
  taxCategories,
  popularCalculators: [
    { slug: "federal-income-tax", name: "Federal Income Tax Calculator", category: "income-tax" },
    { slug: "capital-gains-calculator", name: "Capital Gains Tax Calculator", category: "capital-gains-tax" },
    { slug: "payroll-tax-calculator", name: "Payroll Tax Calculator", category: "payroll-tax" }
  ],
  relatedCountries: ["united-kingdom", "canada"],
  latestUpdates: [
    { date: "2025-01-01", title: "2025 Tax Brackets Updated", description: "IRS released updated tax brackets for 2025 with adjusted standard deductions and bracket thresholds." },
    { date: "2024-12-31", title: "SECURE 2.0 Act Provisions", description: "New retirement account rules and increased catch-up contributions for 2025." },
    { date: "2024-01-01", title: "2024 Tax Brackets Updated", description: "IRS released updated tax brackets and inflation adjustments for tax year 2024." }
  ]
};