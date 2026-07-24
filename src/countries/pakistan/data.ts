import type { Country, TaxCategory } from "../types";

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
  taxSystemOverview: {
    incomeTax: "Progressive rates from 0% to 35% for salaried individuals. Tax is levied on worldwide income for residents and Pakistan-sourced income for non-residents. Various deductions and exemptions are available under the Income Tax Ordinance 2001.",
    capitalGainsTax: "Capital gains are taxed as part of ordinary income. For immovable property, the withholding tax on sale applies at the time of transaction. Capital gains on listed shares are taxed at 12.5% for filers and 15% for non-filers.",
    vatGstSalesTax: "Standard sales tax rate of 18% on most goods and services. Exemptions apply to certain essential items including unprocessed agricultural products and some healthcare services.",
    corporateTax: "29% for most companies. Banking companies are taxed at 35%. Small companies with paid-up capital below certain thresholds benefit from a reduced rate of 22%.",
    payrollTax: "Withholding tax applies to salaries under Section 159. The rate depends on whether the taxpayer is a filer (2.5% quarterly for salaried) or non-filer (higher rates apply)."
  },
  taxCategories,
  popularCalculators: [
    { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
    { slug: "sales-tax-calculator", name: "Sales Tax Calculator", category: "sales-tax" },
    { slug: "property-tax-calculator", name: "Property Tax Calculator", category: "property-tax" },
    { slug: "vehicle-tax-calculator", name: "Vehicle Tax Calculator", category: "vehicle-tax" }
  ],
  relatedCountries: ["india", "bangladesh", "sri-lanka"],
  latestUpdates: [
    { date: "2024-06-01", title: "2024-25 Budget Tax Changes", description: "New tax brackets and reliefs introduced in the federal budget for FY 2024-25." },
    { date: "2024-01-01", title: "FBR Digital Initiatives", description: "FBR continues to streamline tax filing and collection through digital platforms." }
  ]
};
