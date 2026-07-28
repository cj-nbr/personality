const fs=require('fs');

const baseSalaryTax={
  id:"hong-kong-salaries-tax-salary-tax-computation",
  countrySlug:"hong-kong",categorySlug:"salaries-tax",calculatorSlug:"salary-tax-computation",
  name:"Salary Tax Computation",description:"Detailed breakdown of your Hong Kong salary tax calculation.",
  inputs:[
    {id:"annualIncome",label:"Annual Employment Income",type:"number",required:true,placeholder:"Enter annual income from employment",validation:{min:0,step:1000}},
    {id:"mpfContributions",label:"MPF / ORSO Contributions",type:"number",required:true,defaultValue:0,placeholder:"Enter mandatory contributions",helpText:"Mandatory Provident Fund or occupational retirement scheme contributions",validation:{min:0,step:1000}},
    {id:"maritalStatus",label:"Marital Status",type:"select",required:true,defaultValue:"single",options:[{value:"single",label:"Single"},{value:"married",label:"Married"}]},
    {id:"dependentChildren",label:"Number of Dependent Children",type:"number",required:true,defaultValue:0,validation:{min:0,max:9,step:1}},
    {id:"taxYear",label:"Year of Assessment",type:"select",required:true,defaultValue:"2025/26",options:[{value:"2024/25",label:"2024/25"},{value:"2025/26",label:"2025/26"}]}
  ],
  outputs:[
    {id:"totalIncome",label:"Total Income",format:"currency",description:"Gross employment income"},
    {id:"allowances",label:"Total Allowances",format:"currency",description:"Basic + dependent deductions"},
    {id:"netChargeableIncome",label:"Net Chargeable Income",format:"currency",description:"Income minus allowances and MPF"},
    {id:"salariesTax",label:"Salaries Tax",format:"currency",description:"Progressive or standard rate, whichever is lower"},
    {id:"effectiveRate",label:"Effective Rate",format:"percentage",description:"Tax as percentage of income"},
    {id:"takeHomePay",label:"Take-Home Pay",format:"currency",description:"Income after salaries tax"}
  ],
  formulas:[{id:"hk_salaries",name:"Salaries Tax",formula:"Progressive: 2% on first $50k, 6% next $50k, 10% next $50k, 14% next $50k, 17% remainder OR Standard: 15% on net income",description:"Whichever is lower applies"}],
  examples:[{title:"HK$500,000 Income, MPF $18,000, Married, 1 Child, 2024/25",inputs:{annualIncome:500000,mpfContributions:18000,maritalStatus:"married",dependentChildren:1,taxYear:"2025/26"},outputs:{totalIncome:500000,allowances:276000,netChargeableIncome:206000,salariesTax:11640,effectiveRate:2.3,takeHomePay:488360},explanation:"Standard example."}]
};

const baseHKProfits={
  id:"hong-kong-profits-tax-profits-tax-calculator",
  countrySlug:"hong-kong",categorySlug:"profits-tax",calculatorSlug:"profits-tax-calculator",
  name:"Profits Tax Calculator",description:"Estimate business profits tax in Hong Kong.",
  inputs:[
    {id:"assessableProfits",label:"Assessable Profits",type:"number",required:true,placeholder:"Enter assessable profits",helpText:"Net profits after deductions",validation:{min:0,step:1000}},
    {id:"businessType",label:"Business Type",type:"select",required:true,defaultValue:"corporation",options:[{value:"corporation",label:"Corporation"},{value:"unincorporated",label:"Unincorporated Business"}]},
    {id:"taxYear",label:"Year of Assessment",type:"select",required:true,defaultValue:"2025/26",options:[{value:"2024/25",label:"2024/25"},{value:"2025/26",label:"2025/26"}]}
  ],
  outputs:[
    {id:"assessableProfits",label:"Assessable Profits",format:"currency",description:"Profits subject to tax"},
    {id:"profitsTax",label:"Profits Tax",format:"currency",description:"Tax on business profits"},
    {id:"effectiveRate",label:"Effective Rate",format:"percentage",description:"Tax as percentage of profits"}
  ],
  formulas:[{id:"hk_profits",name:"Profits Tax Rate",formula:"Corporations: 16.5% | Unincorporated: 15%",description:"Standard profits tax rates"}],
  examples:[{title:"HK$1,000,000 Assessable Profits, Corporation, 2025/26",inputs:{assessableProfits:1000000,businessType:"corporation",taxYear:"2025/26"},outputs:{assessableProfits:1000000,profitsTax:165000,effectiveRate:16.5},explanation:"Two-tiered rates apply: 8.25% on first $2M, remainder at 16.5%."}]
};

const baseStampDutyHK={
  id:"hong-kong-stamp-duty-stamp-duty-calculator",
  countrySlug:"hong-kong",categorySlug:"stamp-duty",calculatorSlug:"stamp-duty-calculator",
  name:"Stamp Duty Calculator",description:"Estimate stamp duty for Hong Kong property purchases.",
  inputs:[
    {id:"propertyPrice",label:"Property Price (HKD)",type:"number",required:true,placeholder:"Enter property price",validation:{min:0,step:1000}},
    {id:"buyerType",label:"Buyer Type",type:"select",required:true,defaultValue:"citizen",options:[{value:"citizen",label:"Hong Kong Citizen / PR"},{value:"non_pr",label:"Non-PR Individual"},{value:"company",label:"Company"}]},
    {id:"propertyType",label:"Property Type",type:"select",required:true,defaultValue:"residential",options:[{value:"residential",label:"Residential"},{value:"commercial",label:"Commercial"}]},
    {id:"taxYear",label:"Year",type:"select",required:false,defaultValue:"2025/26",options:[{value:"2024/25",label:"2024/25"},{value:"2025/26",label:"2025/26"}]}
  ],
  outputs:[
    {id:"stampDuty",label:"Stamp Duty",format:"currency",description:"BSD/AVD"},
    {id:"totalCost",label:"Total Cost",format:"currency",description:"Property price + stamp duty"}
  ],
  formulas:[{id:"hk_stamp",name:"Scale 2 Rates",formula:"Flat $100 up to $4M, 1.5% $4-4.5M, 2.25% $4.5-6M, 3% $6-9M, 3.75% $9-20M, 4.25% above $20M",description:"Hong Kong property stamp duty rates"}],
  examples:[{title:"HK$5,000,000 Residential, Citizen, 2025/26",inputs:{propertyPrice:5000000,buyerType:"citizen",propertyType:"residential",taxYear:"2025/26"},outputs:{stampDuty:87500,totalCost:5087500},explanation:"Scale 2: $100 + 1.5%x$500k + 2.25%x$500k + 3%x$500k = $87,500."}]
};

function makeSerializer(indent=2){
  const s=(v)=>typeof v==='string'?`"${v.replace(/"/g,'\\"')}"`:JSON.stringify(v);
  const arr=(a)=>a.map(s).join(',\n');
  return {
    obj(o){
      const lines=Object.entries(o).map(([k,v])=>{
        if(Array.isArray(v)) return `${' '.repeat(indent)}${k}: [\n${arr(v).split('\n').map(l=>' '.repeat(indent+2)+l).join('\n')}\n${' '.repeat(indent)}]`;
        if(typeof v==='object'&&v!==null) return `${' '.repeat(indent)}${k}: ${this.obj(v).replace(/\n/g,'\n'+' '.repeat(indent+2))}`;
        return `${' '.repeat(indent)}${k}: ${s(v)}`;
      });
      return `{\n${lines.join(',\n')}\n`;
    }
  };
}

// Actually simpler: just use JSON.stringify with replacer
function jsonToString(v){
  return JSON.stringify(v,null,2).replace(/"(\w+)":/g,'$1:');
}

const aliases=[
  {ruleId:'hong-kong-salaries-tax-hk-net-salary-calculator',baseId:'hong-kong-salaries-tax-salaries-tax-calculator'},
  {ruleId:'hong-kong-salaries-tax-hong-kong-tax-calculator-for-expats',baseId:'hong-kong-salaries-tax-salaries-tax-calculator'},
  {ruleId:'hong-kong-salaries-tax-hong-kong-income-tax-for-foreigners-calculator',baseId:'hong-kong-salaries-tax-salaries-tax-calculator'},
  {ruleId:'hong-kong-profits-tax-hk-corporate-tax-calculator',baseId:'hong-kong-profits-tax-profits-tax-calculator'},
  {ruleId:'hong-kong-profits-tax-profit-tax-computation',baseId:'hong-kong-profits-tax-profits-tax-calculator'},
  {ruleId:'hong-kong-stamp-duty-hk-property-stamp-duty-calculator',baseId:'hong-kong-stamp-duty-stamp-duty-calculator'},
  {ruleId:'hong-kong-stamp-duty-rental-stamp-duty-calculator',baseId:'hong-kong-stamp-duty-stamp-duty-calculator'},
  {ruleId:'hong-kong-stamp-duty-first-registration-tax-calculator',baseId:'hong-kong-stamp-duty-stamp-duty-calculator'},
  // Pakistan alias
  {ruleId:'pakistan-income-tax-salary-tax-calculator',baseId:'pakistan-income-tax-income-tax-calculator'},
  {ruleId:'pakistan-income-tax-business-income-tax-calculator',baseId:'pakistan-income-tax-income-tax-calculator'},
  {ruleId:'pakistan-sales-tax-gst-calculator',baseId:'pakistan-sales-tax-sales-tax-calculator'},
  // US alias
  {ruleId:'united-states-payroll-tax-fica-calculator',baseId:'united-states-payroll-tax-payroll-tax-calculator'},
  {ruleId:'united-states-payroll-tax-self-employment-tax',baseId:'united-states-payroll-tax-payroll-tax-calculator'},
  {ruleId:'united-states-corporate-tax-small-business-tax',baseId:'united-states-corporate-tax-corporate-tax-calculator'},
  {ruleId:'united-states-capital-gains-tax-ltcg-calculator',baseId:'united-states-capital-gains-tax-capital-gains-calculator'},
];

const taxRules=fs.readFileSync('src/config/taxRules.ts','utf8');
let additions='';

// HK Property Tax
additions+=`
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
`;

additions+=`
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
`;

// HK First Registration Tax
additions+=`
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
`;

// US Effective Tax Rate
additions+=`
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
      { id: "federalTax", label: "Federal Tax Paid", type: "number", required: true, placeholder: "Enter federal tax paid", validation: { min: 0, step: 100 } },
      { id: "stateTax", label: "State Tax Paid", type: "number", required: false, defaultValue: 0, placeholder: "Enter state tax paid", validation: { min: 0, step: 100 } },
      { id: "ficaTax", label: "FICA Tax Paid", type: "number", required: false, defaultValue: 0, placeholder: "Enter FICA tax paid", validation: { min: 0, step: 100 } }
    ],
    outputs: [
      { id: "effectiveRate", label: "Effective Tax Rate", format: "percentage", description: "Total tax as percentage of income" },
      { id: "totalTax", label: "Total Tax", format: "currency", description: "Federal + state + FICA" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after total tax" }
    ],
    formulas: [
      { id: "eff_tax", name: "Effective Rate", formula: "(Federal + State + FICA) ÷ Gross Income × 100%", description: "True tax burden across all levels" }
    ],
    examples: [
      { title: "$100,000 Income, $15,000 Federal, $5,000 State, $7,650 FICA", inputs: { annualIncome: 100000, federalTax: 15000, stateTax: 5000, ficaTax: 7650 }, outputs: { effectiveRate: 27.65, totalTax: 27650, takeHomePay: 72350 }, explanation: "Total tax = $27,650. Effective rate = 27.65%." }
    ]
  },
`;

// US Estate Tax
additions+=`
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
      { title: "$20,000,000 Estate, Married, 2025", inputs: { estateValue: 20000000, maritalStatus: "married", taxYear: "2025" }, outputs: { taxableEstate: 7780000, estateTax: 3112000, effectiveRate: 15.56 }, explanation: "Married exemption = $27.22M. Taxable = $20M - $27.22M = $0 (no tax)." }
    ]
  },
`;

// US LTCG
additions+=`
  // United States - Long-Term Capital Gains
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
`;

// Pakistan Salary Tax
additions+=`
  // Pakistan - Salary Tax
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
`;

// Pakistan Business Income Tax
additions+=`
  // Pakistan - Business Income Tax
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
`;

// Pakistan Capital Gain Tax (property)
additions+=`
  // Pakistan - Capital Gain Tax
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
      { id: "holdingPeriod", label: "Holding Period", type: "select", required: true, defaultValue: "long_term", options: [ { value: "short_term", label: "Short Term (≤1 year)" }, { value: "long_term", label: "Long Term (>1 year)" } ] },
      { id: "assetType", label: "Asset Type", type: "select", required: true, defaultValue: "property", options: [ { value: "property", label: "Real Estate" }, { value: "shares", label: "Shares / Stocks" } ] }
    ],
    outputs: [
      { id: "capitalGainsTax", label: "Capital Gains Tax", format: "currency", description: "Tax on capital gain" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Gains tax rate" },
      { id: "afterTaxGain", label: "After-Tax Gain", format: "currency", description: "Gain after tax" }
    ],
    formulas: [
      { id: "pk_cgt", name: "Capital Gains Tax", formula: "Short term: 10%. Long-term property: 15%. Long-term shares: 20%.", description: "Rates vary by holding period and asset type" }
    ],
    examples: [
      { title: "PKR 5,000,000 Gain on Property, Long Term", inputs: { gainAmount: 5000000, costBasis: 10000000, holdingPeriod: "long_term", assetType: "property" }, outputs: { capitalGainsTax: 750000, effectiveRate: 15.0, afterTaxGain: 4250000 }, explanation: "Long-term property gain taxed at 15%." }
    ]
  },
`;

// Pakistan GST
additions+=`
  // Pakistan - GST
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
`;

// Pakistan Property Tax (annual)
additions+=`
  // Pakistan - Property Tax
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
`;

// Pakistan Capital Gain Tax (property sales)
additions+=`
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
      { id: "holdingPeriod", label: "Holding Period", type: "select", required: true, defaultValue: "long_term", options: [ { value: "short_term", label: "Short Term (≤1 year)" }, { value: "long_term", label: "Long Term (>1 year)" } ] },
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
`;

// Pakistan Token Tax
additions+=`
  // Pakistan - Token Tax
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
`;

// Pakistan Rental Income Tax
additions+=`
  // Pakistan - Rental Income Tax
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
`;

// Pakistan Vehicle Tax
additions+=`
  // Pakistan - Vehicle Tax
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
`;

// Pakistan Sindh Vehicle Tax
additions+=`
  // Pakistan - Sindh Vehicle Tax
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
`;

// Pakistan Islamabad Vehicle Tax
additions+=`
  // Pakistan - Islamabad Vehicle Tax
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
  },
`;

additions+=`
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
      { title: "$100,000 Income, $15,000 Federal, $5,000 State, $7,650 FICA", inputs: { annualIncome: 100000, federalTax: 15000, stateTax: 5000, ficaTax: 7650 }, outputs: { totalTax: 27650, effectiveRate: 27.65, takeHomePay: 72350 }, explanation: "Total tax = $27,650. Effective rate = 27.65%." }
    ]
  },
`;

additions+=`
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
  },
`;

// Now append to taxRules.ts
const taxRulesPath='src/config/taxRules.ts';
const original=fs.readFileSync(taxRulesPath,'utf8');
const newTaxRules=original.replace('];',additions+'];');
fs.writeFileSync(taxRulesPath,newTaxRules);
console.log('Appended taxRules entries');
