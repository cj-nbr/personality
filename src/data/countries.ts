export interface TaxCategory {
  slug: string;
  name: string;
  description: string;
  overview: string;
  calculators: Array<{
    slug: string;
    name: string;
    description: string;
  }>;
  guides: Array<{
    slug: string;
    title: string;
    description: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface Country {
  slug: string;
  name: string;
  flag: string;
  continent: string;
  officialTaxAuthority: string;
  taxAuthorityUrl: string;
  currency: string;
  capital: string;
  overview: string;
  taxCategories: TaxCategory[];
  popularCalculators: Array<{ slug: string; name: string; category: string }>;
  relatedCountries: string[];
  latestUpdates: Array<{ date: string; title: string; description: string }>;
}

export const countries: Country[] = [
  {
    slug: "united-states",
    name: "United States",
    flag: "🇺🇸",
    continent: "North America",
    officialTaxAuthority: "Internal Revenue Service (IRS)",
    taxAuthorityUrl: "https://www.irs.gov",
    currency: "USD",
    capital: "Washington, D.C.",
    overview: "The United States has a progressive federal income tax system with additional state and local taxes. Tax residents are taxed on worldwide income, while non-residents are taxed only on US-source income.",
    taxCategories: [
      {
        slug: "income-tax",
        name: "Income Tax",
        description: "Federal and state income tax obligations for individuals and businesses.",
        overview: "The US imposes income tax at federal, state, and sometimes local levels. Federal individual income tax is progressive with rates from 10% to 37%.",
        calculators: [
          { slug: "federal-income-tax", name: "Federal Income Tax Calculator", description: "Estimate your federal income tax liability." },
          { slug: "state-income-tax", name: "State Income Tax Calculator", description: "Compare state income tax rates and estimates." }
        ],
        guides: [
          { slug: "how-to-file", title: "How to File Your Income Tax Return", description: "Step-by-step guide to filing your US tax return." },
          { slug: "tax-brackets", title: "Understanding Tax Brackets", description: "Learn how progressive tax brackets work in the US." }
        ],
        faqs: [
          { question: "When is the tax filing deadline?", answer: "Typically April 15th. Extensions are available until October 15th." },
          { question: "Do I need to file if I live abroad?", answer: "US citizens and green card holders must file regardless of residence." }
        ]
      },
      {
        slug: "payroll-tax",
        name: "Payroll Tax",
        description: "Employer and employee payroll tax obligations including FICA.",
        overview: "Payroll taxes fund Social Security and Medicare. Both employers and employees contribute through FICA taxes.",
        calculators: [
          { slug: "payroll-tax-calculator", name: "Payroll Tax Calculator", description: "Calculate employer and employee payroll tax contributions." }
        ],
        guides: [
          { slug: "fica-guide", title: "FICA Tax Guide", description: "Complete guide to Social Security and Medicare taxes." }
        ],
        faqs: [
          { question: "What is the FICA tax rate?", answer: "7.65% for employees (6.2% Social Security + 1.45% Medicare) plus employer match." }
        ]
      },
      {
        slug: "corporate-tax",
        name: "Corporate Tax",
        description: "Federal corporate income tax and business entity taxes.",
        overview: "Corporate tax is levied on business profits. The current federal corporate tax rate is 21%.",
        calculators: [
          { slug: "corporate-tax-calculator", name: "Corporate Tax Calculator", description: "Estimate corporate income tax liability." }
        ],
        guides: [
          { slug: "business-entities", title: "Business Entity Tax Guide", description: "Compare tax obligations by business entity type." }
        ],
        faqs: [
          { question: "What is the corporate tax rate?", answer: "21% federal flat rate on taxable income." }
        ]
      },
      {
        slug: "capital-gains-tax",
        name: "Capital Gains Tax",
        description: "Tax on profits from the sale of investments and property.",
        overview: "Capital gains tax rates depend on holding period and income level. Short-term gains are taxed as ordinary income.",
        calculators: [
          { slug: "capital-gains-calculator", name: "Capital Gains Tax Calculator", description: "Estimate tax on investment gains." }
        ],
        guides: [
          { slug: "capital-gains-guide", title: "Capital Gains Tax Guide", description: "Understand short-term vs long-term capital gains." }
        ],
        faqs: [
          { question: "What is the capital gains tax rate?", answer: "0%, 15%, or 20% for long-term gains depending on income. Short-term gains are taxed at ordinary rates." }
        ]
      }
    ],
    popularCalculators: [
      { slug: "federal-income-tax", name: "Federal Income Tax Calculator", category: "income-tax" },
      { slug: "capital-gains-calculator", name: "Capital Gains Tax Calculator", category: "capital-gains-tax" }
    ],
    relatedCountries: ["canada", "united-kingdom", "australia"],
    latestUpdates: [
      { date: "2024-01-01", title: "2024 Tax Brackets Updated", description: "IRS released updated tax brackets for 2024." }
    ]
  },
  {
    slug: "india",
    name: "India",
    flag: "🇮🇳",
    continent: "Asia",
    officialTaxAuthority: "Central Board of Direct Taxes (CBDT)",
    taxAuthorityUrl: "https://www.incometax.gov.in",
    currency: "INR",
    capital: "New Delhi",
    overview: "India has a comprehensive tax system with direct and indirect taxes. The Income Tax Act governs direct taxes while GST unifies indirect taxation.",
    taxCategories: [
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
    ],
    popularCalculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
      { slug: "gst-calculator", name: "GST Calculator", category: "gst" }
    ],
    relatedCountries: ["singapore", "malaysia", "hong-kong"],
    latestUpdates: [
      { date: "2024-02-01", title: "New Tax Regime Updates", description: "Budget 2024 changes to income tax slabs." }
    ]
  },
  {
    slug: "hong-kong",
    name: "Hong Kong",
    flag: "🇭🇰",
    continent: "Asia",
    officialTaxAuthority: "Inland Revenue Department (IRD)",
    taxAuthorityUrl: "https://www.ird.gov.hk",
    currency: "HKD",
    capital: "Hong Kong",
    overview: "Hong Kong operates a territorial tax system with low tax rates. Only profits sourced in Hong Kong are subject to profits tax.",
    taxCategories: [
      {
        slug: "salaries-tax",
        name: "Salaries Tax",
        description: "Tax on employment income earned in Hong Kong.",
        overview: "Salaries tax is levied on income from employment. Standard rate is 15% or progressive rates from 2% to 17%.",
        calculators: [
          { slug: "salaries-tax-calculator", name: "Salaries Tax Calculator", description: "Estimate your Hong Kong salaries tax." }
        ],
        guides: [
          { slug: "salaries-tax-guide", title: "Salaries Tax Guide", description: "Understanding Hong Kong salaries tax calculation." }
        ],
        faqs: [
          { question: "What is the salaries tax rate?", answer: "Progressive rates from 2% to 17% or standard rate of 15%, whichever is lower." }
        ]
      },
      {
        slug: "profits-tax",
        name: "Profits Tax",
        description: "Tax on business profits sourced in Hong Kong.",
        overview: "Only profits arising from Hong Kong are taxable. Standard rate is 16.5% for corporations.",
        calculators: [
          { slug: "profits-tax-calculator", name: "Profits Tax Calculator", description: "Estimate business profits tax." }
        ],
        guides: [
          { slug: "profits-tax-guide", title: "Profits Tax Guide", description: "Understanding source of profits rules." }
        ],
        faqs: [
          { question: "What is the profits tax rate?", answer: "16.5% for corporations, 15% for unincorporated businesses." }
        ]
      }
    ],
    popularCalculators: [
      { slug: "salaries-tax-calculator", name: "Salaries Tax Calculator", category: "salaries-tax" }
    ],
    relatedCountries: ["singapore", "malaysia", "china"],
    latestUpdates: [
      { date: "2024-04-01", title: "2024/25 Tax Rates Released", description: "IRD released updated tax rates for the new assessment year." }
    ]
  },
  {
    slug: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    continent: "Asia",
    officialTaxAuthority: "Inland Revenue Authority of Singapore (IRAS)",
    taxAuthorityUrl: "https://www.iras.gov.sg",
    currency: "SGD",
    capital: "Singapore",
    overview: "Singapore has a low-tax regime with resident tax rates from 0% to 24%. The country operates a territorial tax system with various tax incentives.",
    taxCategories: [
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
    ],
    popularCalculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
      { slug: "stamp-duty-calculator", name: "Stamp Duty Calculator", category: "stamp-duty" }
    ],
    relatedCountries: ["malaysia", "hong-kong", "indonesia"],
    latestUpdates: [
      { date: "2024-01-01", title: "GST Rate Increase to 9%", description: "Singapore GST increased from 8% to 9% in 2024." }
    ]
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    flag: "🇮🇩",
    continent: "Asia",
    officialTaxAuthority: "Direktorat Jenderal Pajak (DJP)",
    taxAuthorityUrl: "https://www.pajak.go.id",
    currency: "IDR",
    capital: "Jakarta",
    overview: "Indonesia has a progressive individual income tax system and corporate tax at 22%. The country uses a self-assessment system.",
    taxCategories: [
      {
        slug: "income-tax",
        name: "Income Tax",
        description: "Individual and corporate income tax in Indonesia.",
        overview: "Individual tax rates are progressive from 5% to 35%. Corporate tax rate is 22%.",
        calculators: [
          { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your Indonesian income tax." }
        ],
        guides: [
          { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Understanding Indonesian tax residency rules." }
        ],
        faqs: [
          { question: "What is the tax filing deadline?", answer: "April 15th for calendar year taxpayers." }
        ]
      },
      {
        slug: "vat",
        name: "VAT",
        description: "Value Added Tax in Indonesia.",
        overview: "VAT rate is generally 11% as of 2024, with some exceptions.",
        calculators: [
          { slug: "vat-calculator", name: "VAT Calculator", description: "Calculate VAT inclusive or exclusive amounts." }
        ],
        guides: [
          { slug: "vat-guide", title: "VAT Guide", description: "Understanding VAT registration and compliance." }
        ],
        faqs: [
          { question: "What is the VAT rate?", answer: "11% standard rate as of 2024." }
        ]
      }
    ],
    popularCalculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" }
    ],
    relatedCountries: ["singapore", "malaysia", "philippines"],
    latestUpdates: [
      { date: "2024-01-01", title: "VAT Rate Increase", description: "VAT increased to 11% from 10% in 2024." }
    ]
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    continent: "Asia",
    officialTaxAuthority: "Lembaga Hasil Dalam Negeri Malaysia (LHDNM)",
    taxAuthorityUrl: "https://www.hasil.gov.my",
    currency: "MYR",
    capital: "Kuala Lumpur",
    overview: "Malaysia has a progressive income tax system with rates from 0% to 30%. The country also imposes SST (Sales and Service Tax).",
    taxCategories: [
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
    ],
    popularCalculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" }
    ],
    relatedCountries: ["singapore", "indonesia", "thailand"],
    latestUpdates: [
      { date: "2024-01-01", title: "Budget 2024 Tax Changes", description: "New tax reliefs and revised income tax rates announced." }
    ]
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    continent: "Oceania",
    officialTaxAuthority: "Inland Revenue Department (IRD)",
    taxAuthorityUrl: "https://www.ird.govt.nz",
    currency: "NZD",
    capital: "Wellington",
    overview: "New Zealand has a progressive income tax system with GST of 15%. Tax is levied on worldwide income for residents.",
    taxCategories: [
      {
        slug: "income-tax",
        name: "Income Tax",
        description: "Individual and corporate income tax in New Zealand.",
        overview: "Individual tax rates range from 10.5% to 39% depending on income. Corporate tax is 28%.",
        calculators: [
          { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your New Zealand income tax." }
        ],
        guides: [
          { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Understanding New Zealand tax residency rules." }
        ],
        faqs: [
          { question: "What is the tax filing deadline?", answer: "July 7th for individuals, March 31st for companies." }
        ]
      },
      {
        slug: "gst",
        name: "GST",
        description: "Goods and Services Tax in New Zealand.",
        overview: "GST is a broad-based consumption tax at 15% on most goods and services.",
        calculators: [
          { slug: "gst-calculator", name: "GST Calculator", description: "Calculate GST inclusive or exclusive amounts." }
        ],
        guides: [
          { slug: "gst-guide", title: "GST Guide", description: "Understanding GST registration and filing." }
        ],
        faqs: [
          { question: "What is the GST rate?", answer: "15% standard rate." }
        ]
      }
    ],
    popularCalculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" }
    ],
    relatedCountries: ["australia", "singapore", "united-kingdom"],
    latestUpdates: [
      { date: "2024-03-31", title: "2024 Tax Rates Updated", description: "IRD released updated tax rates for 2024." }
    ]
  },
  {
    slug: "pakistan",
    name: "Pakistan",
    flag: "🇵🇰",
    continent: "Asia",
    officialTaxAuthority: "Federal Board of Revenue (FBR)",
    taxAuthorityUrl: "https://www.fbr.gov.pk",
    currency: "PKR",
    capital: "Islamabad",
    overview: "Pakistan has a progressive income tax system with rates from 0% to 35%. The tax year runs from July 1 to June 30.",
    taxCategories: [
      {
        slug: "income-tax",
        name: "Income Tax",
        description: "Individual and corporate income tax in Pakistan.",
        overview: "Progressive tax rates for individuals. Corporate tax rate is 29% for most companies.",
        calculators: [
          { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your Pakistan income tax." }
        ],
        guides: [
          { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Understanding Pakistani tax residency rules." }
        ],
        faqs: [
          { question: "What is the tax filing deadline?", answer: "September 30th for individuals, December 31st for companies." }
        ]
      },
      {
        slug: "sales-tax",
        name: "Sales Tax",
        description: "Sales tax on goods and services in Pakistan.",
        overview: "Standard sales tax rate is 18% on most goods and services.",
        calculators: [
          { slug: "sales-tax-calculator", name: "Sales Tax Calculator", description: "Calculate sales tax on transactions." }
        ],
        guides: [
          { slug: "sales-tax-guide", title: "Sales Tax Guide", description: "Understanding sales tax registration and filing." }
        ],
        faqs: [
          { question: "What is the sales tax rate?", answer: "18% standard rate." }
        ]
      }
    ],
    popularCalculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" }
    ],
    relatedCountries: ["india", "bangladesh"],
    latestUpdates: [
      { date: "2024-06-01", title: "2024-25 Budget Tax Changes", description: "New tax brackets introduced in the federal budget." }
    ]
  },
  {
    slug: "philippines",
    name: "Philippines",
    flag: "🇵🇭",
    continent: "Asia",
    officialTaxAuthority: "Bureau of Internal Revenue (BIR)",
    taxAuthorityUrl: "https://www.bir.gov.ph",
    currency: "PHP",
    capital: "Manila",
    overview: "The Philippines has a progressive individual income tax system with rates from 0% to 35%. VAT is 12%.",
    taxCategories: [
      {
        slug: "income-tax",
        name: "Income Tax",
        description: "Individual and corporate income tax in the Philippines.",
        overview: "Graduated tax rates for individuals from 0% to 35%. Corporate tax is 25% for domestic corporations.",
        calculators: [
          { slug: "income-tax-calculator", name: "Income Tax Calculator", description: "Calculate your Philippines income tax." }
        ],
        guides: [
          { slug: "tax-residency-guide", title: "Tax Residency Guide", description: "Understanding Philippine tax residency rules." }
        ],
        faqs: [
          { question: "What is the tax filing deadline?", answer: "April 15th for calendar year taxpayers." }
        ]
      },
      {
        slug: "vat",
        name: "VAT",
        description: "Value Added Tax in the Philippines.",
        overview: "VAT is 12% on most goods and services.",
        calculators: [
          { slug: "vat-calculator", name: "VAT Calculator", description: "Calculate VAT inclusive or exclusive amounts." }
        ],
        guides: [
          { slug: "vat-guide", title: "VAT Guide", description: "Understanding VAT registration and filing." }
        ],
        faqs: [
          { question: "What is the VAT rate?", answer: "12% standard rate." }
        ]
      }
    ],
    popularCalculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" }
    ],
    relatedCountries: ["singapore", "indonesia", "malaysia"],
    latestUpdates: [
      { date: "2024-01-01", title: "2024 Tax Rates", description: "Updated tax brackets and VAT regulations for 2024." }
    ]
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    continent: "Europe",
    officialTaxAuthority: "HM Revenue & Customs (HMRC)",
    taxAuthorityUrl: "https://www.gov.uk/hmrc",
    currency: "GBP",
    capital: "London",
    overview: "The UK has a progressive income tax system with three tax bands. VAT is 20% and National Insurance contributions fund state benefits.",
    taxCategories: [
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
    ],
    popularCalculators: [
      { slug: "income-tax-calculator", name: "Income Tax Calculator", category: "income-tax" },
      { slug: "vat-calculator", name: "VAT Calculator", category: "vat" }
    ],
    relatedCountries: ["united-states", "canada", "australia"],
    latestUpdates: [
      { date: "2024-04-06", title: "2024/25 Tax Year Updates", description: "New tax rates and thresholds announced for the new tax year." }
    ]
  }
];

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find(c => c.slug === slug);
}

export function getCategoryBySlug(countrySlug: string, categorySlug: string) {
  const country = getCountryBySlug(countrySlug);
  if (!country) return null;
  return country.taxCategories.find(c => c.slug === categorySlug) ?? null;
}

export function getCalculatorBySlug(countrySlug: string, categorySlug: string, calculatorSlug: string) {
  const category = getCategoryBySlug(countrySlug, categorySlug);
  if (!category) return null;
  return category.calculators.find(c => c.slug === calculatorSlug) ?? null;
}
