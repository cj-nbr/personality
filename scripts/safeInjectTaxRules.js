const fs=require('fs');
const file='src/config/taxRules.ts';
let text=fs.readFileSync(file,'utf8');
const lastIdx=text.lastIndexOf('];');
if(lastIdx===-1){ console.error('No closing ]; found'); process.exit(1); }

const additions=`
  // Hong Kong - Property Tax
  {
    id: "hong-kong-property-tax-property-tax-calculator",
    countrySlug: "hong-kong",
    categorySlug: "property-tax",
    calculatorSlug: "property-tax-calculator",
    name: "Property Tax Calculator",
    description: "Calculate Hong Kong property tax on rental income.",
    inputs: [
      { id: "annualIncome", label: "Annual Rental Income", type: "number", required: true, placeholder: "Enter annual rental income", validation: { min: 0, step: 1000 } },
      { id: "irrecoverableRent", label: "Irrecoverable Rent", type: "number", required: false, defaultValue: 0, placeholder: "Enter irrecoverable rent amount", helpText: "Rent that cannot be recovered from tenants", validation: { min: 0, step: 100 } },
      { id: "taxYear", label: "Year of Assessment", type: "select", required: false, defaultValue: "2025/26", options: [ { value: "2024/25", label: "2024/25" }, { value: "2025/26", label: "2025/26" } ] }
    ],
    outputs: [
      { id: "grossRentalIncome", label: "Gross Rental Income", format: "currency", description: "Total rental income before deductions" },
      { id: "standardDeduction", label: "Standard Deduction", format: "currency", description: "20% of gross rental income" },
      { id: "netAssessableValue", label: "Net Assessable Value", format: "currency", description: "Income less standard deduction and irrecoverable rent" },
      { id: "propertyTax", label: "Property Tax", format: "currency", description: "15% on net assessable value" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of gross rental income" }
    ],
    formulas: [
      { id: "hk_property", name: "Property Tax", formula: "Net Assessable Value x 15%", description: "Standard rate on net rental income after 20% standard deduction" }
    ],
    examples: [
      { title: "HK$240,000 Annual Rental Income, 2025/26", inputs: { annualIncome: 240000, irrecoverableRent: 0, taxYear: "2025/26" }, outputs: { grossRentalIncome: 240000, standardDeduction: 48000, netAssessableValue: 192000, propertyTax: 28800, effectiveRate: 12.0 }, explanation: "Standard deduction = 20% x $240,000 = $48,000. NAA = $192,000. Tax = 15% x $192,000 = $28,800." }
    ]
  },
  // Hong Kong - Rental Tax Deduction
  {
    id: "hong-kong-property-tax-hk-rental-tax-deduction-calculator",
    countrySlug: "hong-kong",
    categorySlug: "property-tax",
    calculatorSlug: "hk-rental-tax-deduction-calculator",
    name: "HK Rental Tax Deduction Calculator",
    description: "Estimate rental tax deductions and property tax liability.",
    inputs: [
      { id: "annualIncome", label: "Annual Rental Income", type: "number", required: true, placeholder: "Enter annual rental income", validation: { min: 0, step: 1000 } },
      { id: "irrecoverableRent", label: "Irrecoverable Rent", type: "number", required: true, defaultValue: 0, placeholder: "Enter irrecoverable rent", validation: { min: 0, step: 100 } },
      { id: "taxYear", label: "Year of Assessment", type: "select", required: false, defaultValue: "2025/26", options: [ { value: "2024/25", label: "2024/25" }, { value: "2025/26", label: "2025/26" } ] }
    ],
    outputs: [
      { id: "grossRentalIncome", label: "Gross Rental Income", format: "currency", description: "Total rental income" },
      { id: "netAssessableValue", label: "Net Assessable Value", format: "currency", description: "After standard deduction and irrecoverable rent" },
      { id: "propertyTax", label: "Property Tax", format: "currency", description: "Tax liability" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of gross" }
    ],
    formulas: [
      { id: "hk_property_ded", name: "Property Tax Deduction", formula: "NAV = Gross - 20% - Irrecoverable. Tax = NAV x 15%", description: "How deductions reduce your property tax" }
    ],
    examples: [
      { title: "HK$200,000 Rental Income, HK$10,000 Irrecoverable Rent", inputs: { annualIncome: 200000, irrecoverableRent: 10000, taxYear: "2025/26" }, outputs: { grossRentalIncome: 200000, netAssessableValue: 150000, propertyTax: 22500, effectiveRate: 11.25 }, explanation: "NAV = $200,000 - $40,000 (20%) - $10,000 = $150,000. Tax = 15% x $150,000 = $22,500." }
    ]
  },
  // Hong Kong - First Registration Tax
  {
    id: "hong-kong-stamp-duty-first-registration-tax-calculator",
    countrySlug: "hong-kong",
    categorySlug: "stamp-duty",
    calculatorSlug: "first-registration-tax-calculator",
    name: "First Registration Tax Calculator",
    description: "Calculate first registration tax for Hong Kong vehicles.",
    inputs: [
      { id: "vehicleValue", label: "Vehicle Market Value (HKD)", type: "number", required: true, placeholder: "Enter vehicle value", validation: { min: 0, step: 1000 } },
      { id: "fuelType", label: "Fuel Type", type: "select", required: true, defaultValue: "petrol", options: [ { value: "petrol", label: "Petrol" }, { value: "diesel", label: "Diesel" }, { value: "electric", label: "Electric (Concession)" }, { value: "hybrid", label: "Hybrid" } ] },
      { id: "vehicleType", label: "Vehicle Type", type: "select", required: true, defaultValue: "passenger", options: [ { value: "passenger", label: "Private Passenger Car" }, { value: "motorcycle", label: "Motorcycle" }, { value: "commercial", label: "Commercial Vehicle" } ] }
    ],
    outputs: [
      { id: "firstRegistrationTax", label: "First Registration Tax", format: "currency", description: "One-time FRT on first registration" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "FRT as percentage of vehicle value" }
    ],
    formulas: [
      { id: "hk_frt", name: "First Registration Tax", formula: "Passenger cars: tiered by value. Electric vehicles may qualify for full or partial waiver.", description: "FRT discourages vehicle ownership and high-emission vehicles" }
    ],
    examples: [
      { title: "HK$300,000 Petrol Passenger Car", inputs: { vehicleValue: 300000, fuelType: "petrol", vehicleType: "passenger" }, outputs: { firstRegistrationTax: 20000, effectiveRate: 6.67 }, explanation: "Tiered FRT: first $200k at 5%, next $100k at 10% = $10,000 + $10,000 = $20,000." }
    ]
  },
  // United States - Effective Tax Rate
  {
    id: "united-states-income-tax-effective-tax-rate",
    countrySlug: "united-states",
    categorySlug: "income-tax",
    calculatorSlug: "effective-tax-rate",
    name: "Effective Tax Rate Calculator",
    description: "Calculate your effective tax rate and understand your true tax burden.",
    inputs: [
      { id: "annualIncome", label: "Total Annual Income", type: "number", required: true, placeholder: "Enter your total annual income", validation: { min: 0, step: 1000 } },
      { id: "federalTax", label: "Federal Tax Paid", type: "number", required: true, placeholder: "Enter federal tax", validation: { min: 0, step: 100 } },
      { id: "stateTax", label: "State Tax Paid", type: "number", required: false, defaultValue: 0, placeholder: "Enter state tax", validation: { min: 0, step: 100 } },
      { id: "ficaTax", label: "FICA Tax Paid", type: "number", required: false, defaultValue: 0, placeholder: "Enter FICA tax", validation: { min: 0, step: 100 } }
    ],
    outputs: [
      { id: "totalTax", label: "Total Tax", format: "currency", description: "Federal + state + FICA" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of income" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after tax" }
    ],
    formulas: [
      { id: "eff_tax2", name: "Effective Rate", formula: "(Federal + State + FICA) ÷ Gross Income × 100%", description: "True tax burden across all levels" }
    ],
    examples: [
      { title: "$100,000 Income, $15,000 Federal, $5,000 State, $7,650 FICA", inputs: { annualIncome: 100000, federalTax: 15000, stateTax: 5000, ficaTax: 7650 }, outputs: { totalTax: 27650, effectiveRate: 27.65, takeHomePay: 72350 }, explanation: "Total tax = $27,650." }
    ]
  },
  // United States - Estate Tax
  {
    id: "united-states-estate-tax-estate-tax-calculator",
    countrySlug: "united-states",
    categorySlug: "estate-tax",
    calculatorSlug: "estate-tax-calculator",
    name: "Estate Tax Calculator",
    description: "Estimate federal estate tax liability and understand the exemption threshold.",
    inputs: [
      { id: "estateValue", label: "Gross Estate Value (USD)", type: "number", required: true, placeholder: "Enter total estate value", validation: { min: 0, step: 10000 } },
      { id: "maritalStatus", label: "Marital Status", type: "select", required: true, defaultValue: "single", options: [ { value: "single", label: "Single" }, { value: "married", label: "Married" } ] },
      { id: "taxYear", label: "Tax Year", type: "select", required: false, defaultValue: "2025", options: [ { value: "2024", label: "2024" }, { value: "2025", label: "2025" } ] }
    ],
    outputs: [
      { id: "taxableEstate", label: "Taxable Estate", format: "currency", description: "Value above exemption" },
      { id: "estateTax", label: "Estate Tax", format: "currency", description: "40% on taxable estate" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of total estate" }
    ],
    formulas: [
      { id: "estate_exempt", name: "Estate Tax Exemption", formula: "$13,610,000 exemption (2025). 40% rate on amount above exemption.", description: "Only estates above exemption pay federal estate tax" }
    ],
    examples: [
      { title: "$20,000,000 Estate, Single, 2025", inputs: { estateValue: 20000000, maritalStatus: "single", taxYear: "2025" }, outputs: { taxableEstate: 6390000, estateTax: 2556000, effectiveRate: 12.78 }, explanation: "Exemption = $13.61M. Taxable = $20M - $13.61M = $6.39M. Tax = 40% x $6.39M = $2.556M." }
    ]
  }
`;

text=text.slice(0,lastIdx)+additions+text.slice(lastIdx);
fs.writeFileSync(file,text);
console.log('Appended taxRules safely');
