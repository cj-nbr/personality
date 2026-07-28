const fs=require('fs');
const file='src/config/taxRules.ts';
let text=fs.readFileSync(file,'utf8');
const lastIdx=text.lastIndexOf('];');
if(lastIdx===-1){ console.error('No closing ]; found'); process.exit(1); }

const add = `
  // Hong Kong - Salary Tax Computation
  {
    id: "hong-kong-salaries-tax-salary-tax-computation",
    countrySlug: "hong-kong",
    categorySlug: "salaries-tax",
    calculatorSlug: "salary-tax-computation",
    name: "Salary Tax Computation",
    description: "Detailed breakdown of your Hong Kong salary tax calculation.",
    inputs: [
      { id: "annualIncome", label: "Annual Employment Income", type: "number", required: true, placeholder: "Enter annual income from employment", validation: { min: 0, step: 1000 } },
      { id: "mpfContributions", label: "MPF / ORSO Contributions", type: "number", required: true, defaultValue: 0, placeholder: "Enter mandatory contributions", helpText: "Mandatory Provident Fund or occupational retirement scheme contributions", validation: { min: 0, step: 1000 } },
      { id: "maritalStatus", label: "Marital Status", type: "select", required: true, defaultValue: "single", options: [ { value: "single", label: "Single" }, { value: "married", label: "Married" } ] },
      { id: "dependentChildren", label: "Number of Dependent Children", type: "number", required: true, defaultValue: 0, validation: { min: 0, max: 9, step: 1 } },
      { id: "taxYear", label: "Year of Assessment", type: "select", required: true, defaultValue: "2025/26", options: [ { value: "2024/25", label: "2024-25" }, { value: "2025/26", label: "2025-26" } ] }
    ],
    outputs: [
      { id: "totalIncome", label: "Total Income", format: "currency", description: "Gross employment income" },
      { id: "allowances", label: "Total Allowances", format: "currency", description: "Basic + dependent deductions" },
      { id: "netChargeableIncome", label: "Net Chargeable Income", format: "currency", description: "Income minus allowances and MPF" },
      { id: "salariesTax", label: "Salaries Tax", format: "currency", description: "Progressive or standard rate, whichever is lower" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of income" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after salaries tax" }
    ],
    formulas: [
      { id: "hk_salaries", name: "Salaries Tax", formula: "Progressive: 2% on first $50k, 6% next $50k, 10% next $50k, 14% next $50k, 17% remainder OR Standard: 15% on net income", description: "Whichever is lower applies" }
    ],
    examples: [
      { title: "HK$500,000 Income, MPF $18,000, Married, 1 Child, 2025/26", inputs: { annualIncome: 500000, mpfContributions: 18000, maritalStatus: "married", dependentChildren: 1, taxYear: "2025/26" }, outputs: { totalIncome: 500000, allowances: 276000, netChargeableIncome: 206000, salariesTax: 11640, effectiveRate: 2.3, takeHomePay: 488360 }, explanation: "Basic allowance $132k + Married $264k + Child $74k = $264k (capped). Net chargeable = $500k - $18k - $264k = $218k. Progressive: $50k×2% + $50k×6% + $50k×10% + $50k×14% + $18k×17% = $12,640. Standard: $218k×15% = $32,700. Lower: $12,640." }
    ]
  },
  // Hong Kong - HK Net Salary Calculator
  {
    id: "hong-kong-salaries-tax-hk-net-salary-calculator",
    countrySlug: "hong-kong",
    categorySlug: "salaries-tax",
    calculatorSlug: "hk-net-salary-calculator",
    name: "HK Net Salary Calculator",
    description: "Calculate your take-home pay after tax and MPF in Hong Kong.",
    inputs: [
      { id: "annualIncome", label: "Annual Employment Income", type: "number", required: true, placeholder: "Enter annual income from employment", validation: { min: 0, step: 1000 } },
      { id: "mpfContributions", label: "MPF / ORSO Contributions", type: "number", required: true, defaultValue: 0, placeholder: "Enter mandatory contributions", helpText: "Mandatory Provident Fund or occupational retirement scheme contributions", validation: { min: 0, step: 1000 } },
      { id: "maritalStatus", label: "Marital Status", type: "select", required: true, defaultValue: "single", options: [ { value: "single", label: "Single" }, { value: "married", label: "Married" } ] },
      { id: "dependentChildren", label: "Number of Dependent Children", type: "number", required: true, defaultValue: 0, validation: { min: 0, max: 9, step: 1 } },
      { id: "taxYear", label: "Year of Assessment", type: "select", required: true, defaultValue: "2025/26", options: [ { value: "2024/25", label: "2024-25" }, { value: "2025/26", label: "2025-26" } ] }
    ],
    outputs: [
      { id: "totalIncome", label: "Total Income", format: "currency", description: "Gross employment income" },
      { id: "salariesTax", label: "Salaries Tax", format: "currency", description: "Tax computed under progressive or standard rate, whichever is lower" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after salaries tax and MPF" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of gross income" }
    ],
    formulas: [
      { id: "hk_salaries_net", name: "Net Salary", formula: "Take-Home Pay = Income - Salaries Tax - MPF", description: "Your actual take-home pay" }
    ],
    examples: [
      { title: "HK$500,000 Income, MPF $18,000, 2025/26", inputs: { annualIncome: 500000, mpfContributions: 18000, maritalStatus: "single", dependentChildren: 0, taxYear: "2025/26" }, outputs: { totalIncome: 500000, salariesTax: 11640, takeHomePay: 490360, effectiveRate: 2.33 }, explanation: "Tax = $11,640. Take-home = $500,000 - $11,640 - $18,000 = $490,360." }
    ]
  },
  // Hong Kong - Tax Calculator for Expats
  {
    id: "hong-kong-salaries-tax-hong-kong-tax-calculator-for-expats",
    countrySlug: "hong-kong",
    categorySlug: "salaries-tax",
    calculatorSlug: "hong-kong-tax-calculator-for-expats",
    name: "Hong Kong Tax Calculator for Expats",
    description: "Estimate your Hong Kong tax as a foreign employee or expat.",
    inputs: [
      { id: "annualIncome", label: "Annual Employment Income", type: "number", required: true, placeholder: "Enter annual income from employment", validation: { min: 0, step: 1000 } },
      { id: "mpfContributions", label: "MPF / ORSO Contributions", type: "number", required: false, defaultValue: 0, placeholder: "Enter mandatory contributions", validation: { min: 0, step: 1000 } },
      { id: "maritalStatus", label: "Marital Status", type: "select", required: true, defaultValue: "single", options: [ { value: "single", label: "Single" }, { value: "married", label: "Married" } ] },
      { id: "dependentChildren", label: "Number of Dependent Children", type: "number", required: true, defaultValue: 0, validation: { min: 0, max: 9, step: 1 } },
      { id: "taxYear", label: "Year of Assessment", type: "select", required: true, defaultValue: "2025/26", options: [ { value: "2024/25", label: "2024-25" }, { value: "2025/26", label: "2025-26" } ] }
    ],
    outputs: [
      { id: "totalIncome", label: "Total Income", format: "currency", description: "Gross employment income" },
      { id: "allowances", label: "Total Allowances", format: "currency", description: "Basic + dependent deductions" },
      { id: "netChargeableIncome", label: "Net Chargeable Income", format: "currency", description: "Income minus allowances and MPF" },
      { id: "salariesTax", label: "Salaries Tax", format: "currency", description: "Progressive or standard rate, whichever is lower" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of income" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after salaries tax" }
    ],
    formulas: [
      { id: "hk_salaries_exp", name: "Expat Salaries Tax", formula: "Same as local employees but only Hong Kong-sourced income is taxable", description: "Territorial system applies" }
    ],
    examples: [
      { title: "HK$600,000 Income, Expat, 2025/26", inputs: { annualIncome: 600000, mpfContributions: 18000, maritalStatus: "single", dependentChildren: 0, taxYear: "2025/26" }, outputs: { totalIncome: 600000, allowances: 132000, netChargeableIncome: 450000, salariesTax: 29900, effectiveRate: 4.98, takeHomePay: 572100 }, explanation: "Standard calculation for expat with HK-sourced income." }
    ]
  },
  // Hong Kong - Income Tax for Foreigners Calculator
  {
    id: "hong-kong-salaries-tax-hong-kong-income-tax-for-foreigners-calculator",
    countrySlug: "hong-kong",
    categorySlug: "salaries-tax",
    calculatorSlug: "hong-kong-income-tax-for-foreigners-calculator",
    name: "Hong Kong Income Tax for Foreigners Calculator",
    description: "Calculate income tax for foreigners working in Hong Kong.",
    inputs: [
      { id: "annualIncome", label: "Annual Employment Income", type: "number", required: true, placeholder: "Enter annual income", validation: { min: 0, step: 1000 } },
      { id: "mpfContributions", label: "MPF / ORSO Contributions", type: "number", required: false, defaultValue: 0, placeholder: "Enter mandatory contributions", validation: { min: 0, step: 1000 } },
      { id: "maritalStatus", label: "Marital Status", type: "select", required: true, defaultValue: "single", options: [ { value: "single", label: "Single" }, { value: "married", label: "Married" } ] },
      { id: "dependentChildren", label: "Number of Dependent Children", type: "number", required: true, defaultValue: 0, validation: { min: 0, max: 9, step: 1 } },
      { id: "taxYear", label: "Year of Assessment", type: "select", required: true, defaultValue: "2025/26", options: [ { value: "2024/25", label: "2024-25" }, { value: "2025/26", label: "2025-26" } ] }
    ],
    outputs: [
      { id: "totalIncome", label: "Total Income", format: "currency", description: "Gross employment income" },
      { id: "allowances", label: "Total Allowances", format: "currency", description: "Basic + dependent deductions" },
      { id: "netChargeableIncome", label: "Net Chargeable Income", format: "currency", description: "Income minus allowances and MPF" },
      { id: "salariesTax", label: "Salaries Tax", format: "currency", description: "Progressive or standard rate, whichever is lower" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of income" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after salaries tax" }
    ],
    formulas: [
      { id: "hk_salaries_for", name: "Foreigner Income Tax", formula: "Net Chargeable Income = Assessable Income - Deductions - Allowances. Tax = min(progressive, standard x NCI)", description: "Standard HK salaries tax for foreigners" }
    ],
    examples: [
      { title: "HK$500,000 Income, Foreigner, 2025/26", inputs: { annualIncome: 500000, mpfContributions: 18000, maritalStatus: "single", dependentChildren: 0, taxYear: "2025/26" }, outputs: { totalIncome: 500000, allowances: 132000, netChargeableIncome: 350000, salariesTax: 18100, effectiveRate: 3.62, takeHomePay: 482900 }, explanation: "NCI = $500,000 - $18,000 - $132,000 = $350,000. Progressive: $50k×2% + $50k×6% + $50k×10% + $50k×14% + $150k×17% = $37,900. Standard: $350k×15% = $52,500. Lower: $37,900." }
    ]
  },
  // Hong Kong - HK Corporate Tax Calculator
  {
    id: "hong-kong-profits-tax-hk-corporate-tax-calculator",
    countrySlug: "hong-kong",
    categorySlug: "profits-tax",
    calculatorSlug: "hk-corporate-tax-calculator",
    name: "HK Corporate Tax Calculator",
    description: "Calculate corporate tax for Hong Kong limited companies.",
    inputs: [
      { id: "assessableProfits", label: "Assessable Profits", type: "number", required: true, placeholder: "Enter assessable profits", helpText: "Net profits after deductions", validation: { min: 0, step: 1000 } },
      { id: "businessType", label: "Business Type", type: "select", required: true, defaultValue: "corporation", options: [ { value: "corporation", label: "Corporation" }, { value: "unincorporated", label: "Unincorporated Business" } ] },
      { id: "taxYear", label: "Year of Assessment", type: "select", required: true, defaultValue: "2025/26", options: [ { value: "2024/25", label: "2024-25" }, { value: "2025/26", label: "2025-26" } ] }
    ],
    outputs: [
      { id: "assessableProfits", label: "Assessable Profits", format: "currency", description: "Profits subject to tax" },
      { id: "profitsTax", label: "Profits Tax", format: "currency", description: "Tax on business profits" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of profits" }
    ],
    formulas: [
      { id: "hk_profits_corp", name: "Corporate Profits Tax", formula: "Corporations: 16.5%. First $2M at 8.25%. Unincorporated: 15%.", description: "Two-tiered rates apply" }
    ],
    examples: [
      { title: "HK$3,000,000 Assessable Profits, Corporation, 2025/26", inputs: { assessableProfits: 3000000, businessType: "corporation", taxYear: "2025/26" }, outputs: { assessableProfits: 3000000, profitsTax: 265000, effectiveRate: 8.83 }, explanation: "First $2M at 8.25% = $165,000. Remainder $1M at 16.5% = $100,000. Total = $265,000." }
    ]
  },
  // Hong Kong - Profit Tax Computation
  {
    id: "hong-kong-profits-tax-profit-tax-computation",
    countrySlug: "hong-kong",
    categorySlug: "profits-tax",
    calculatorSlug: "profit-tax-computation",
    name: "Profit Tax Computation",
    description: "Detailed breakdown of your Hong Kong profit tax calculation.",
    inputs: [
      { id: "assessableProfits", label: "Assessable Profits", type: "number", required: true, placeholder: "Enter assessable profits", validation: { min: 0, step: 1000 } },
      { id: "businessType", label: "Business Type", type: "select", required: true, defaultValue: "corporation", options: [ { value: "corporation", label: "Corporation" }, { value: "unincorporated", label: "Unincorporated Business" } ] },
      { id: "taxYear", label: "Year of Assessment", type: "select", required: true, defaultValue: "2025/26", options: [ { value: "2024/25", label: "2024-25" }, { value: "2025/26", label: "2025-26" } ] }
    ],
    outputs: [
      { id: "assessableProfits", label: "Assessable Profits", format: "currency", description: "Profits subject to tax" },
      { id: "profitsTax", label: "Profits Tax", format: "currency", description: "Tax on business profits" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of profits" }
    ],
    formulas: [
      { id: "hk_profits_comp", name: "Profit Tax Computation", formula: "Corporations: 8.25% on first $2M, remainder 16.5%. Unincorporated: 15%.", description: "How profits tax is calculated" }
    ],
    examples: [
      { title: "HK$1,500,000 Assessable Profits, Unincorporated, 2025/26", inputs: { assessableProfits: 1500000, businessType: "unincorporated", taxYear: "2025/26" }, outputs: { assessableProfits: 1500000, profitsTax: 225000, effectiveRate: 15.0 }, explanation: "Unincorporated rate 15% on full amount." }
    ]
  },
  // Hong Kong - HK Property Stamp Duty Calculator
  {
    id: "hong-kong-stamp-duty-hk-property-stamp-duty-calculator",
    countrySlug: "hong-kong",
    categorySlug: "stamp-duty",
    calculatorSlug: "hk-property-stamp-duty-calculator",
    name: "HK Property Stamp Duty Calculator",
    description: "Calculate Hong Kong property stamp duty including AVD and BSD.",
    inputs: [
      { id: "propertyPrice", label: "Property Price (HKD)", type: "number", required: true, placeholder: "Enter property price", validation: { min: 0, step: 1000 } },
      { id: "buyerType", label: "Buyer Type", type: "select", required: true, defaultValue: "citizen", options: [ { value: "citizen", label: "Hong Kong Citizen / PR" }, { value: "non_pr", label: "Non-PR Individual" }, { value: "company", label: "Company" } ] },
      { id: "propertyType", label: "Property Type", type: "select", required: true, defaultValue: "residential", options: [ { value: "residential", label: "Residential" }, { value: "commercial", label: "Commercial" } ] }
    ],
    outputs: [
      { id: "stampDuty", label: "Stamp Duty", format: "currency", description: "BSD / AVD" },
      { id: "totalCost", label: "Total Cost", format: "currency", description: "Property price + stamp duty" }
    ],
    formulas: [
      { id: "hk_stamp_prop", name: "Property Stamp Duty", formula: "Scale 2: Flat $100 up to $4M, 1.5% $4-4.5M, 2.25% $4.5-6M, 3% $6-9M, 3.75% $9-20M, 4.25% above $20M", description: "Residential property rates" }
    ],
    examples: [
      { title: "HK$5,000,000 Residential, Citizen, 2025/26", inputs: { propertyPrice: 5000000, buyerType: "citizen", propertyType: "residential" }, outputs: { stampDuty: 87500, totalCost: 5087500 }, explanation: "Scale 2: $100 + 1.5%x$500k + 2.25%x$500k + 3%x$500k = $87,500." }
    ]
  },
  // Hong Kong - Rental Stamp Duty Calculator
  {
    id: "hong-kong-stamp-duty-rental-stamp-duty-calculator",
    countrySlug: "hong-kong",
    categorySlug: "stamp-duty",
    calculatorSlug: "rental-stamp-duty-calculator",
    name: "Rental Stamp Duty Calculator",
    description: "Calculate stamp duty on rental agreements and leases in Hong Kong.",
    inputs: [
      { id: "propertyPrice", label: "Total Rent (HKD)", type: "number", required: true, placeholder: "Enter total rent over lease term", validation: { min: 0, step: 1000 } },
      { id: "leaseTerm", label: "Lease Term", type: "select", required: true, defaultValue: "1year", options: [ { value: "1year", label: "1 Year or Less" }, { value: "3years", label: "1-3 Years" }, { value: "long", label: "More than 3 Years" } ] }
    ],
    outputs: [
      { id: "stampDuty", label: "Rental Stamp Duty", format: "currency", description: "Fixed amount based on lease term" }
    ],
    formulas: [
      { id: "hk_rent_stamp", name: "Rental Stamp Duty", formula: "$5 for 1 year or less, $10 for 1-3 years, $20 for more than 3 years", description: "Fixed duty on lease documents" }
    ],
    examples: [
      { title: "HK$120,000 Rent, 2-Year Lease", inputs: { propertyPrice: 120000, leaseTerm: "3years" }, outputs: { stampDuty: 10 }, explanation: "Lease of 1-3 years incurs $10 stamp duty." }
    ]
  },
  // United States - FICA Calculator
  {
    id: "united-states-payroll-tax-fica-calculator",
    countrySlug: "united-states",
    categorySlug: "payroll-tax",
    calculatorSlug: "fica-calculator",
    name: "FICA Tax Calculator",
    description: "Calculate Social Security and Medicare taxes on your wages.",
    inputs: [
      { id: "annualIncome", label: "Annual Wages", type: "number", required: true, placeholder: "Enter annual wages", validation: { min: 0, step: 1000 } },
      { id: "additionalMedicare", label: "Additional Medicare Income", type: "number", required: false, defaultValue: 0, placeholder: "Enter income over $200,000", helpText: "Only needed for high earners", validation: { min: 0, step: 1000 } },
      { id: "taxYear", label: "Tax Year", type: "select", required: false, defaultValue: "2025", options: [ { value: "2024", label: "2024" }, { value: "2025", label: "2025" } ] }
    ],
    outputs: [
      { id: "socialSecurity", label: "Social Security Tax", format: "currency", description: "6.2% up to wage base" },
      { id: "medicare", label: "Medicare Tax", format: "currency", description: "1.45% on all earnings" },
      { id: "additionalMedicareTax", label: "Additional Medicare Tax", format: "currency", description: "0.9% over threshold" },
      { id: "totalFICA", label: "Total FICA", format: "currency", description: "Total employee FICA tax" }
    ],
    formulas: [
      { id: "fica_ss", name: "Social Security", formula: "6.2% on first $176,100 (2025)", description: "Wage base limit applies" },
      { id: "fica_medicare", name: "Medicare", formula: "1.45% on all earnings", description: "Additional 0.9% over $200,000" }
    ],
    examples: [
      { title: "$100,000 Wages, 2025", inputs: { annualIncome: 100000, additionalMedicare: 0, taxYear: "2025" }, outputs: { socialSecurity: 6200, medicare: 1450, additionalMedicareTax: 0, totalFICA: 7650 }, explanation: "SS = $100,000 x 6.2% = $6,200. Medicare = $100,000 x 1.45% = $1,450." }
    ]
  },
  // United States - Self-Employment Tax
  {
    id: "united-states-payroll-tax-self-employment-tax",
    countrySlug: "united-states",
    categorySlug: "payroll-tax",
    calculatorSlug: "self-employment-tax",
    name: "Self-Employment Tax Calculator",
    description: "Estimate SE tax for freelancers and independent contractors.",
    inputs: [
      { id: "netSelfEmploymentIncome", label: "Net Self-Employment Income", type: "number", required: true, placeholder: "Enter net self-employment income", validation: { min: 0, step: 1000 } },
      { id: "taxYear", label: "Tax Year", type: "select", required: false, defaultValue: "2025", options: [ { value: "2024", label: "2024" }, { value: "2025", label: "2025" } ] }
    ],
    outputs: [
      { id: "seTax", label: "Self-Employment Tax", format: "currency", description: "Total SE tax" },
      { id: "deductiblePortion", label: "Deductible Portion", format: "currency", description: "50% of SE tax" },
      { id: "effectiveRate", label: "Effective SE Rate", format: "percentage", description: "SE tax as percentage of net income" }
    ],
    formulas: [
      { id: "se_tax", name: "Self-Employment Tax", formula: "Net Earnings x 92.35% x 15.3%", description: "Combined SS and Medicare for self-employed" }
    ],
    examples: [
      { title: "$100,000 Net Self-Employment Income, 2025", inputs: { netSelfEmploymentIncome: 100000, taxYear: "2025" }, outputs: { seTax: 14007, deductiblePortion: 7003.5, effectiveRate: 14.01 }, explanation: "Adjusted net earnings = $100,000 x 92.35% = $92,350. SE tax = $92,350 x 15.3% = $14,130 (approx)." }
    ]
  },
  // United States - Small Business Tax
  {
    id: "united-states-corporate-tax-small-business-tax",
    countrySlug: "united-states",
    categorySlug: "corporate-tax",
    calculatorSlug: "small-business-tax",
    name: "Small Business Tax Calculator",
    description: "Estimate taxes for pass-through business entities.",
    inputs: [
      { id: "taxableIncome", label: "Taxable Income", type: "number", required: true, placeholder: "Enter taxable income", validation: { min: 0, step: 1000 } },
      { id: "entityType", label: "Entity Type", type: "select", required: true, defaultValue: "c_corp", options: [ { value: "c_corp", label: "C-Corporation" }, { value: "s_corp", label: "S-Corporation" }, { value: "llc", label: "LLC (Pass-Through)" } ] },
      { id: "taxYear", label: "Tax Year", type: "select", required: false, defaultValue: "2025", options: [ { value: "2024", label: "2024" }, { value: "2025", label: "2025" } ] }
    ],
    outputs: [
      { id: "corporateTax", label: "Corporate Tax", format: "currency", description: "Entity-level tax" },
      { id: "afterTaxIncome", label: "After-Tax Income", format: "currency", description: "Income after entity tax" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of income" }
    ],
    formulas: [
      { id: "pass_through", name: "Pass-Through", formula: "Income passes to owners — taxed at individual rates", description: "S-corps and LLCs" },
      { id: "c_corp", name: "C-Corp Tax", formula: "Taxable Income x 21%", description: "Flat federal corporate tax rate" }
    ],
    examples: [
      { title: "$100,000 Taxable Income, C-Corp, 2025", inputs: { taxableIncome: 100000, entityType: "c_corp", taxYear: "2025" }, outputs: { corporateTax: 21000, afterTaxIncome: 79000, effectiveRate: 21.0 }, explanation: "C-Corp pays 21% entity-level tax." }
    ]
  },
  // United States - Long-Term Capital Gains Calculator
  {
    id: "united-states-capital-gains-tax-ltcg-calculator",
    countrySlug: "united-states",
    categorySlug: "capital-gains-tax",
    calculatorSlug: "ltcg-calculator",
    name: "Long-Term Capital Gains Calculator",
    description: "Calculate long-term capital gains tax with indexation benefits for property sales.",
    inputs: [
      { id: "gainAmount", label: "Long-Term Capital Gain", type: "number", required: true, placeholder: "Enter capital gain amount", validation: { min: 0, step: 100 } },
      { id: "costBasis", label: "Cost Basis", type: "number", required: true, placeholder: "Enter original cost", validation: { min: 0, step: 100 } },
      { id: "ordinaryIncome", label: "Ordinary Income", type: "number", required: true, placeholder: "Enter ordinary income", validation: { min: 0, step: 100 } },
      { id: "filingStatus", label: "Filing Status", type: "select", required: true, defaultValue: "single", options: [ { value: "single", label: "Single" }, { value: "married_joint", label: "Married Filing Jointly" } ] },
      { id: "taxYear", label: "Tax Year", type: "select", required: false, defaultValue: "2025", options: [ { value: "2024", label: "2024" }, { value: "2025", label: "2025" } ] }
    ],
    outputs: [
      { id: "capitalGainsTax", label: "Capital Gains Tax", format: "currency", description: "Tax on long-term gain" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Gains tax rate" },
      { id: "afterTaxGain", label: "After-Tax Gain", format: "currency", description: "Gain after tax" }
    ],
    formulas: [
      { id: "ltcg", name: "Long-Term Capital Gains", formula: "0%/15%/20% depending on income", description: "Assets held > 1 year" }
    ],
    examples: [
      { title: "$50,000 LTCG, Single, 2025", inputs: { gainAmount: 50000, costBasis: 50000, ordinaryIncome: 100000, filingStatus: "single", taxYear: "2025" }, outputs: { capitalGainsTax: 7500, effectiveRate: 15.0, afterTaxGain: 42500 }, explanation: "15% rate applies for single filers with ordinary income $100k." }
    ]
  },
  // Pakistan - Salary Tax Calculator
  {
    id: "pakistan-income-tax-salary-tax-calculator",
    countrySlug: "pakistan",
    categorySlug: "income-tax",
    calculatorSlug: "salary-tax-calculator",
    name: "Salary Tax Calculator",
    description: "Calculate tax on salary in Pakistan for salaried individuals.",
    inputs: [
      { id: "annualIncome", label: "Annual Salary", type: "number", required: true, placeholder: "Enter annual salary", validation: { min: 0, step: 1000 } },
      { id: "employmentType", label: "Employment Type", type: "select", required: true, defaultValue: "employed", options: [ { value: "employed", label: "Employed" }, { value: "self_employed", label: "Self-Employed" } ] },
      { id: "taxYear", label: "Tax Year", type: "select", required: false, defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" } ] }
    ],
    outputs: [
      { id: "taxableIncome", label: "Taxable Income", format: "currency", description: "Income subject to tax" },
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of gross" }
    ],
    formulas: [
      { id: "pk_rates", name: "Pakistan Tax Rates", formula: "Progressive rates from 0% to 35% for salaried individuals", description: "2025-26 tax brackets for salaried persons" }
    ],
    examples: [
      { title: "PKR 1,200,000 Annual Salary, 2025-26", inputs: { annualIncome: 1200000, employmentType: "employed", taxYear: "2025-26" }, outputs: { taxableIncome: 1200000, incomeTax: 75000, effectiveRate: 6.25 }, explanation: "Progressive rates applied." }
    ]
  },
  // Pakistan - Business Income Tax Calculator
  {
    id: "pakistan-income-tax-business-income-tax-calculator",
    countrySlug: "pakistan",
    categorySlug: "income-tax",
    calculatorSlug: "business-income-tax-calculator",
    name: "Business Income Tax Calculator",
    description: "Calculate income tax for business and freelancers in Pakistan.",
    inputs: [
      { id: "annualIncome", label: "Annual Business Income", type: "number", required: true, placeholder: "Enter annual business income", validation: { min: 0, step: 1000 } },
      { id: "businessType", label: "Business Type", type: "select", required: true, defaultValue: "sole_proprietor", options: [ { value: "sole_proprietor", label: "Sole Proprietor" }, { value: "partnership", label: "Partnership" }, { value: "freelancer", label: "Freelancer" } ] },
      { id: "taxYear", label: "Tax Year", type: "select", required: false, defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" } ] }
    ],
    outputs: [
      { id: "taxableIncome", label: "Taxable Income", format: "currency", description: "Income subject to tax" },
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of gross" }
    ],
    formulas: [
      { id: "pk_biz_rates", name: "Pakistan Business Tax Rates", formula: "Progressive rates from 0% to 35%", description: "Applicable to business and freelance income" }
    ],
    examples: [
      { title: "PKR 2,000,000 Business Income, 2025-26", inputs: { annualIncome: 2000000, businessType: "freelancer", taxYear: "2025-26" }, outputs: { taxableIncome: 2000000, incomeTax: 180000, effectiveRate: 9.0 }, explanation: "Progressive rates applied." }
    ]
  },
  // Pakistan - Capital Gain Tax Calculator
  {
    id: "pakistan-income-tax-capital-gain-tax-calculator",
    countrySlug: "pakistan",
    categorySlug: "income-tax",
    calculatorSlug: "capital-gain-tax-calculator",
    name: "Capital Gain Tax Calculator",
    description: "Calculate capital gains tax on property and shares in Pakistan.",
    inputs: [
      { id: "gainAmount", label: "Capital Gain Amount", type: "number", required: true, placeholder: "Enter capital gain", validation: { min: 0, step: 1000 } },
      { id: "costBasis", label: "Cost Basis", type: "number", required: true, placeholder: "Enter original cost", validation: { min: 0, step: 1000 } },
      { id: "holdingPeriod", label: "Holding Period", type: "select", required: true, defaultValue: "long_term", options: [ { value: "short_term", label: "Short Term (<=1 year)" }, { value: "long_term", label: "Long Term (>1 year)" } ] },
      { id: "assetType", label: "Asset Type", type: "select", required: true, defaultValue: "property", options: [ { value: "property", label: "Real Estate" }, { value: "shares", label: "Shares / Stocks" } ] }
    ],
    outputs: [
      { id: "capitalGainsTax", label: "Capital Gains Tax", format: "currency", description: "Tax on capital gain" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Gains tax rate" },
      { id: "afterTaxGain", label: "After-Tax Gain", format: "currency", description: "Gain after tax" }
    ],
    formulas: [
      { id: "pk_cgt", name: "Capital Gains Tax", formula: "Short-term: 10%. Long-term property: 15%. Long-term shares: 20%.", description: "Rates vary by holding period and asset type" }
    ],
    examples: [
      { title: "PKR 5,000,000 Gain on Property, Long Term", inputs: { gainAmount: 5000000, costBasis: 10000000, holdingPeriod: "long_term", assetType: "property" }, outputs: { capitalGainsTax: 750000, effectiveRate: 15.0, afterTaxGain: 4250000 }, explanation: "Long-term property gain taxed at 15%." }
    ]
  },
  // Pakistan - GST Calculator
  {
    id: "pakistan-sales-tax-gst-calculator",
    countrySlug: "pakistan",
    categorySlug: "sales-tax",
    calculatorSlug: "gst-calculator",
    name: "GST Calculator",
    description: "Calculate GST inclusive or exclusive amounts in Pakistan.",
    inputs: [
      { id: "amount", label: "Amount (PKR)", type: "number", required: true, placeholder: "Enter amount", validation: { min: 0, step: 0.01 } },
      { id: "calculationType", label: "Calculation Type", type: "select", required: true, defaultValue: "exclusive", options: [ { value: "exclusive", label: "Add GST (GST Exclusive)" }, { value: "inclusive", label: "Remove GST (GST Inclusive)" } ] }
    ],
    outputs: [
      { id: "gstAmount", label: "GST Amount", format: "currency", description: "18% standard GST" },
      { id: "totalAmount", label: "Total Amount", format: "currency", description: "Amount including GST" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount excluding GST" }
    ],
    formulas: [
      { id: "gst_pk", name: "GST Calculation", formula: "Amount x 18%", description: "Standard GST rate in Pakistan" }
    ],
    examples: [
      { title: "PKR 100,000 with 18% GST", inputs: { amount: 100000, calculationType: "exclusive" }, outputs: { gstAmount: 18000, totalAmount: 118000, netAmount: 100000 }, explanation: "PKR 100,000 + PKR 18,000 GST = PKR 118,000 total." }
    ]
  },
  // Pakistan - Property Tax Calculator
  {
    id: "pakistan-property-tax-property-tax-calculator",
    countrySlug: "pakistan",
    categorySlug: "property-tax",
    calculatorSlug: "property-tax-calculator",
    name: "Property Tax Calculator",
    description: "Calculate property tax in Pakistan by province.",
    inputs: [
      { id: "propertyValue", label: "Property Value (PKR)", type: "number", required: true, placeholder: "Enter property value", validation: { min: 0, step: 10000 } },
      { id: "province", label: "Province", type: "select", required: true, defaultValue: "punjab", options: [ { value: "punjab", label: "Punjab" }, { value: "sindh", label: "Sindh" }, { value: "kpk", label: "KPK" }, { value: "balochistan", label: "Balochistan" } ] },
      { id: "propertyType", label: "Property Type", type: "select", required: true, defaultValue: "residential", options: [ { value: "residential", label: "Residential" }, { value: "commercial", label: "Commercial" } ] }
    ],
    outputs: [
      { id: "propertyTax", label: "Property Tax", format: "currency", description: "Annual property tax" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of value" }
    ],
    formulas: [
      { id: "pk_prop", name: "Property Tax Rate", formula: "Approx 0.5% to 1% of annual value depending on province", description: "Rates vary by province and area" }
    ],
    examples: [
      { title: "PKR 10,000,000 Property, Punjab, Residential", inputs: { propertyValue: 10000000, province: "punjab", propertyType: "residential" }, outputs: { propertyTax: 50000, effectiveRate: 0.5 }, explanation: "Approximate 0.5% annual property tax." }
    ]
  },
  // Pakistan - Property Capital Gain Tax
  {
    id: "pakistan-property-tax-capital-gain-tax-calculator",
    countrySlug: "pakistan",
    categorySlug: "property-tax",
    calculatorSlug: "capital-gain-tax-calculator",
    name: "Capital Gain Tax Calculator",
    description: "Calculate capital gains tax on property sales in Pakistan.",
    inputs: [
      { id: "gainAmount", label: "Capital Gain (PKR)", type: "number", required: true, placeholder: "Enter capital gain", validation: { min: 0, step: 1000 } },
      { id: "holdingPeriod", label: "Holding Period", type: "select", required: true, defaultValue: "long_term", options: [ { value: "short_term", label: "Short Term (<=1 year)" }, { value: "long_term", label: "Long Term (>1 year)" } ] },
      { id: "propertyType", label: "Property Type", type: "select", required: true, defaultValue: "residential", options: [ { value: "residential", label: "Residential" }, { value: "commercial", label: "Commercial" } ] }
    ],
    outputs: [
      { id: "capitalGainsTax", label: "Capital Gains Tax", format: "currency", description: "Tax on property gain" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Gains tax rate" },
      { id: "afterTaxGain", label: "After-Tax Gain", format: "currency", description: "Gain after tax" }
    ],
    formulas: [
      { id: "pk_prop_cgt", name: "Property Capital Gains", formula: "Long-term residential: 15%. Commercial: 20%. Short-term: 10%.", description: "Rates vary by property type and holding period" }
    ],
    examples: [
      { title: "PKR 2,000,000 Gain on Residential Property, Long Term", inputs: { gainAmount: 2000000, holdingPeriod: "long_term", propertyType: "residential" }, outputs: { capitalGainsTax: 300000, effectiveRate: 15.0, afterTaxGain: 1700000 }, explanation: "Long-term residential gain taxed at 15%." }
    ]
  },
  // Pakistan - Token Tax Calculator
  {
    id: "pakistan-property-tax-token-tax-calculator",
    countrySlug: "pakistan",
    categorySlug: "property-tax",
    calculatorSlug: "token-tax-calculator",
    name: "Token Tax Calculator",
    description: "Calculate token tax for property and vehicle registration.",
    inputs: [
      { id: "tokenType", label: "Token Type", type: "select", required: true, defaultValue: "vehicle", options: [ { value: "vehicle", label: "Vehicle Token" }, { value: "property", label: "Property Token" } ] },
      { id: "engineCapacity", label: "Engine Capacity (cc)", type: "number", required: true, placeholder: "Enter engine capacity", validation: { min: 0, step: 100 } },
      { id: "vehicleValue", label: "Vehicle Value (PKR)", type: "number", required: false, defaultValue: 0, placeholder: "Enter vehicle value", helpText: "Required for property token", validation: { min: 0, step: 10000 } }
    ],
    outputs: [
      { id: "tokenTax", label: "Token Tax", format: "currency", description: "Token tax amount" }
    ],
    formulas: [
      { id: "pk_token", name: "Token Tax", formula: "Vehicle token based on engine capacity. Flat fees vary by province.", description: "Provincial token tax for registration" }
    ],
    examples: [
      { title: "1300cc Vehicle, Punjab", inputs: { tokenType: "vehicle", engineCapacity: 1300, vehicleValue: 0 }, outputs: { tokenTax: 100 }, explanation: "Vehicle token for 800-1300cc is PKR 100." }
    ]
  },
  // Pakistan - Rental Income Tax Calculator
  {
    id: "pakistan-property-tax-rental-income-tax-calculator",
    countrySlug: "pakistan",
    categorySlug: "property-tax",
    calculatorSlug: "rental-income-tax-calculator",
    name: "Rental Income Tax Calculator",
    description: "Calculate tax on rental income from property in Pakistan.",
    inputs: [
      { id: "annualIncome", label: "Annual Rental Income (PKR)", type: "number", required: true, placeholder: "Enter annual rental income", validation: { min: 0, step: 1000 } },
      { id: "propertyExpenses", label: "Property Expenses", type: "number", required: false, defaultValue: 0, placeholder: "Enter maintenance and other expenses", validation: { min: 0, step: 1000 } },
      { id: "taxYear", label: "Tax Year", type: "select", required: false, defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" } ] }
    ],
    outputs: [
      { id: "taxableIncome", label: "Taxable Income", format: "currency", description: "Rental income minus expenses" },
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of gross" }
    ],
    formulas: [
      { id: "pk_rent", name: "Rental Income Tax", formula: "Net rental income taxed at applicable slab rates", description: "Same as normal income tax" }
    ],
    examples: [
      { title: "PKR 600,000 Rental Income, PKR 50,000 Expenses", inputs: { annualIncome: 600000, propertyExpenses: 50000, taxYear: "2025-26" }, outputs: { taxableIncome: 550000, incomeTax: 38750, effectiveRate: 6.46 }, explanation: "Net rental = PKR 550,000. Tax calculated at applicable slab." }
    ]
  },
  // Pakistan - Vehicle Tax Calculator
  {
    id: "pakistan-vehicle-tax-vehicle-tax-calculator",
    countrySlug: "pakistan",
    categorySlug: "vehicle-tax",
    calculatorSlug: "vehicle-tax-calculator",
    name: "Vehicle Tax Calculator",
    description: "Calculate vehicle token tax in Pakistan by province.",
    inputs: [
      { id: "engineCapacity", label: "Engine Capacity (cc)", type: "number", required: true, placeholder: "Enter engine capacity", validation: { min: 0, step: 100 } },
      { id: "province", label: "Province", type: "select", required: true, defaultValue: "punjab", options: [ { value: "punjab", label: "Punjab" }, { value: "sindh", label: "Sindh" }, { value: "kpk", label: "KPK" }, { value: "balochistan", label: "Balochistan" } ] },
      { id: "vehicleType", label: "Vehicle Type", type: "select", required: true, defaultValue: "car", options: [ { value: "car", label: "Car / Jeep" }, { value: "motorcycle", label: "Motorcycle" }, { value: "truck", label: "Truck / LCV" } ] }
    ],
    outputs: [
      { id: "vehicleTax", label: "Vehicle Tax", format: "currency", description: "Token tax amount" }
    ],
    formulas: [
      { id: "pk_veh", name: "Vehicle Token Tax", formula: "Based on engine capacity and vehicle type", description: "Annual token tax varies by province" }
    ],
    examples: [
      { title: "1300cc Car, Punjab", inputs: { engineCapacity: 1300, province: "punjab", vehicleType: "car" }, outputs: { vehicleTax: 100 }, explanation: "Token tax for 800-1300cc vehicle in Punjab." }
    ]
  },
  // Pakistan - Sindh Vehicle Tax Calculator
  {
    id: "pakistan-vehicle-tax-sindh-vehicle-tax-calculator",
    countrySlug: "pakistan",
    categorySlug: "vehicle-tax",
    calculatorSlug: "sindh-vehicle-tax-calculator",
    name: "Sindh Vehicle Tax Calculator",
    description: "Calculate Sindh vehicle token tax and transfer fees.",
    inputs: [
      { id: "engineCapacity", label: "Engine Capacity (cc)", type: "number", required: true, placeholder: "Enter engine capacity", validation: { min: 0, step: 100 } },
      { id: "vehicleAge", label: "Vehicle Age (years)", type: "number", required: true, defaultValue: 0, placeholder: "Enter vehicle age", validation: { min: 0, max: 50, step: 1 } }
    ],
    outputs: [
      { id: "vehicleTax", label: "Vehicle Tax", format: "currency", description: "Token tax amount" },
      { id: "transferFee", label: "Transfer Fee", format: "currency", description: "Ownership transfer fee" }
    ],
    formulas: [
      { id: "pk_sindh_veh", name: "Sindh Vehicle Tax", formula: "Progressive token tax based on engine capacity", description: "Sindh province rates" }
    ],
    examples: [
      { title: "1300cc Vehicle, 2 years old, Sindh", inputs: { engineCapacity: 1300, vehicleAge: 2 }, outputs: { vehicleTax: 100, transferFee: 5000 }, explanation: "Token tax for 1300cc vehicle in Sindh." }
    ]
  },
  // Pakistan - Islamabad Vehicle Tax Calculator
  {
    id: "pakistan-vehicle-tax-islamabad-vehicle-tax-calculator",
    countrySlug: "pakistan",
    categorySlug: "vehicle-tax",
    calculatorSlug: "islamabad-vehicle-tax-calculator",
    name: "Islamabad Vehicle Tax Calculator",
    description: "Calculate Islamabad vehicle token tax.",
    inputs: [
      { id: "engineCapacity", label: "Engine Capacity (cc)", type: "number", required: true, placeholder: "Enter engine capacity", validation: { min: 0, step: 100 } },
      { id: "vehicleType", label: "Vehicle Type", type: "select", required: true, defaultValue: "car", options: [ { value: "car", label: "Car / Jeep" }, { value: "motorcycle", label: "Motorcycle" } ] }
    ],
    outputs: [
      { id: "vehicleTax", label: "Vehicle Tax", format: "currency", description: "Token tax amount" }
    ],
    formulas: [
      { id: "pk_isb_veh", name: "Islamabad Vehicle Tax", formula: "Based on engine capacity", description: "ICT token tax" }
    ],
    examples: [
      { title: "1300cc Car, Islamabad", inputs: { engineCapacity: 1300, vehicleType: "car" }, outputs: { vehicleTax: 100 }, explanation: "Token tax for 1300cc vehicle in Islamabad." }
    ]
  }
`;

text = text.slice(0, lastIdx) + add + text.slice(lastIdx);
fs.writeFileSync(file, text);
console.log('Appended remaining missing taxRules');
