export interface TaxRule {
  id: string;
  countrySlug: string;
  categorySlug: string;
  calculatorSlug: string;
  name: string;
  description: string;
  inputs: TaxInput[];
  outputs: TaxOutput[];
  formulas: TaxFormula[];
  examples?: TaxExample[];
}

export interface TaxInput {
  id: string;
  label: string;
  type: "number" | "select" | "radio" | "checkbox";
  required: boolean;
  options?: Array<{ value: string; label: string }>;
  placeholder?: string;
  helpText?: string;
  defaultValue?: string | number;
  validation?: {
    min?: number;
    max?: number;
    step?: number;
  };
}

export interface TaxOutput {
  id: string;
  label: string;
  format: "currency" | "percentage" | "number";
  description: string;
}

export interface TaxFormula {
  id: string;
  name: string;
  formula: string;
  description: string;
}

export interface TaxExample {
  title: string;
  inputs: Record<string, number | string>;
  outputs: Record<string, number>;
  explanation: string;
}

export const taxRules: TaxRule[] = [
  // United States - Federal Income Tax
  {
    id: "united-states-income-tax-federal-income-tax",
    countrySlug: "united-states",
    categorySlug: "income-tax",
    calculatorSlug: "federal-income-tax",
    name: "Federal Income Tax Calculator",
    description: "Calculate your US federal income tax liability based on 2023 and 2024 tax brackets.",
    inputs: [
      {
        id: "filingStatus",
        label: "Filing Status",
        type: "select",
        required: true,
        defaultValue: "single",
        options: [
          { value: "single", label: "Single" },
          { value: "married_joint", label: "Married Filing Jointly" },
          { value: "married_separate", label: "Married Filing Separately" },
          { value: "head_of_household", label: "Head of Household" },
        ],
      },
      {
        id: "annualIncome",
        label: "Annual Income",
        type: "number",
        required: true,
        placeholder: "Enter your annual income",
        helpText: "Your total annual income before taxes and deductions",
        validation: { min: 0, step: 100 },
      },
      {
        id: "standardDeduction",
        label: "Deduction Type",
        type: "select",
        required: true,
        defaultValue: "standard",
        options: [
          { value: "standard", label: "Standard Deduction" },
          { value: "itemized", label: "Itemized Deductions" },
        ],
      },
      {
        id: "itemizedAmount",
        label: "Itemized Deductions Amount",
        type: "number",
        required: false,
        placeholder: "Enter total itemized deductions",
        helpText: "Only required if you selected Itemized Deductions above",
        validation: { min: 0, step: 100 },
      },
      {
        id: "taxYear",
        label: "Tax Year",
        type: "select",
        required: true,
        defaultValue: "2024",
        options: [
          { value: "2023", label: "2023" },
          { value: "2024", label: "2024" },
        ],
      },
    ],
    outputs: [
      { id: "taxableIncome", label: "Taxable Income", format: "currency", description: "Income after deductions" },
      { id: "federalTax", label: "Federal Tax", format: "currency", description: "Total federal income tax" },
      { id: "effectiveRate", label: "Effective Tax Rate", format: "percentage", description: "Tax as percentage of total income" },
      { id: "marginalRate", label: "Marginal Tax Rate", format: "percentage", description: "Highest tax bracket applied" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after federal tax" },
    ],
    formulas: [
      { id: "taxable_income", name: "Taxable Income", formula: "Gross Income - Deductions", description: "Your income subject to federal tax" },
      { id: "federal_tax", name: "Federal Tax", formula: "Sum of (Taxable Income in each bracket × Bracket rate)", description: "Progressive tax calculation across brackets" },
    ],
    examples: [
      {
        title: "Single Filer, $75,000 Income",
        inputs: { filingStatus: "single", annualIncome: 75000, standardDeduction: "standard", taxYear: "2024" },
        outputs: { taxableIncome: 61200, federalTax: 8932, effectiveRate: 11.9, marginalRate: 12, takeHomePay: 66068 },
        explanation: "Standard deduction of $14,600 applied. Tax calculated using 2024 single filer brackets.",
      },
    ],
  },
  // Malaysia - Income Tax
  {
    id: "malaysia-income-tax-income-tax-calculator",
    countrySlug: "malaysia",
    categorySlug: "income-tax",
    calculatorSlug: "income-tax-calculator",
    name: "Income Tax Calculator",
    description: "Calculate your Malaysian income tax liability.",
    inputs: [
      { id: "residentStatus", label: "Residency Status", type: "select", required: true, defaultValue: "resident", options: [
        { value: "resident", label: "Resident Individual" }, { value: "non_resident", label: "Non-Resident Individual" }
      ]},
      { id: "annualIncome", label: "Annual Income", type: "number", required: true, placeholder: "Enter your annual income", validation: { min: 0, step: 1000 }},
      { id: "taxYear", label: "Year of Assessment", type: "select", required: true, defaultValue: "2024", options: [
        { value: "2023", label: "2023" }, { value: "2024", label: "2024" }
      ]}
    ],
    outputs: [
      { id: "taxableIncome", label: "Taxable Income", format: "currency", description: "Income after reliefs" },
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Tax Rate", format: "percentage", description: "Tax as percentage of gross income" }
    ],
    formulas: [
      { id: "resident_rates", name: "Resident Rates", formula: "Progressive rates from 0% to 30%", description: "For resident individuals" },
      { id: "non_resident_rates", name: "Non-Resident Rates", formula: "Flat 30% on worldwide income", description: "For non-residents, no personal reliefs" }
    ],
    examples: [
      { title: "Resident, RM 80,000 Annual Income", inputs: { residentStatus: "resident", annualIncome: 80000, taxYear: "2024" }, outputs: { taxableIncome: 80000, incomeTax: 4100, effectiveRate: 5.1 }, explanation: "Progressive rates with reliefs applied." }
    ]
  },
  // Malaysia - SST
  {
    id: "malaysia-sst-sst-calculator",
    countrySlug: "malaysia",
    categorySlug: "sst",
    calculatorSlug: "sst-calculator",
    name: "SST Calculator",
    description: "Calculate Sales and Service Tax in Malaysia.",
    inputs: [
      { id: "amount", label: "Amount", type: "number", required: true, placeholder: "Enter amount", validation: { min: 0, step: 0.01 }},
      { id: "taxType", label: "Tax Type", type: "select", required: true, defaultValue: "sales", options: [
        { value: "sales", label: "Sales Tax (10%)" }, { value: "service", label: "Service Tax (8%)" }
      ]},
      { id: "calculationType", label: "Calculation Type", type: "select", required: true, defaultValue: "exclusive", options: [
        { value: "exclusive", label: "Add Tax (Tax Exclusive)" }, { value: "inclusive", label: "Remove Tax (Tax Inclusive)" }
      ]}
    ],
    outputs: [
      { id: "taxAmount", label: "Tax Amount", format: "currency", description: "SST amount" },
      { id: "totalAmount", label: "Total Amount", format: "currency", description: "Amount including tax" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount excluding tax" }
    ],
    formulas: [
      { id: "sales_tax", name: "Sales Tax", formula: "Amount x 10%", description: "Standard sales tax rate" },
      { id: "service_tax", name: "Service Tax", formula: "Amount x 8%", description: "Standard service tax rate on specified services" }
    ],
    examples: [
      { title: "RM 1,000 with 10% Sales Tax", inputs: { amount: 1000, taxType: "sales", calculationType: "exclusive" }, outputs: { taxAmount: 100, totalAmount: 1100, netAmount: 1000 }, explanation: "RM 1,000 + RM 100 SST = RM 1,100 total." }
    ]
  },
  // New Zealand - Income Tax
  {
    id: "new-zealand-income-tax-income-tax-calculator",
    countrySlug: "new-zealand",
    categorySlug: "income-tax",
    calculatorSlug: "income-tax-calculator",
    name: "Income Tax Calculator",
    description: "Calculate your New Zealand income tax liability.",
    inputs: [
      { id: "annualIncome", label: "Annual Income", type: "number", required: true, placeholder: "Enter your annual income", validation: { min: 0, step: 1000 }},
      { id: "taxYear", label: "Tax Year", type: "select", required: true, defaultValue: "2024-25", options: [
        { value: "2023-24", label: "2023-24" }, { value: "2024-25", label: "2024-25" }
      ]}
    ],
    outputs: [
      { id: "taxableIncome", label: "Taxable Income", format: "currency", description: "Income subject to tax" },
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Tax Rate", format: "percentage", description: "Tax as percentage of gross income" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after tax" }
    ],
    formulas: [
      { id: "nz_rates", name: "NZ Tax Rates", formula: "Progressive rates: 10.5% up to $14,000, 17.5% up to $48,000, 30% up to $70,000, 33% up to $180,000, 39% above", description: "2024-25 resident tax rates" }
    ],
    examples: [
      { title: "NZ$80,000 Annual Income", inputs: { annualIncome: 80000, taxYear: "2024-25" }, outputs: { taxableIncome: 80000, incomeTax: 16720, effectiveRate: 20.9, takeHomePay: 63280 }, explanation: "Progressive tax applied: $14,000 x 10.5% + $34,000 x 17.5% + $32,000 x 30% = $16,720." }
    ]
  },
  // New Zealand - GST
  {
    id: "new-zealand-gst-gst-calculator",
    countrySlug: "new-zealand",
    categorySlug: "gst",
    calculatorSlug: "gst-calculator",
    name: "GST Calculator",
    description: "Calculate GST inclusive or exclusive amounts in New Zealand.",
    inputs: [
      { id: "amount", label: "Amount", type: "number", required: true, placeholder: "Enter amount", validation: { min: 0, step: 0.01 }},
      { id: "calculationType", label: "Calculation Type", type: "select", required: true, defaultValue: "exclusive", options: [
        { value: "exclusive", label: "Add GST (GST Exclusive)" }, { value: "inclusive", label: "Remove GST (GST Inclusive)" }
      ]}
    ],
    outputs: [
      { id: "gstAmount", label: "GST Amount", format: "currency", description: "GST at 15%" },
      { id: "totalAmount", label: "Total Amount", format: "currency", description: "Amount including GST" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount excluding GST" }
    ],
    formulas: [
      { id: "gst_nz", name: "GST Calculation", formula: "Amount x 15%", description: "New Zealand standard GST rate" }
    ],
    examples: [
      { title: "NZ$100 with 15% GST", inputs: { amount: 100, calculationType: "exclusive" }, outputs: { gstAmount: 15, totalAmount: 115, netAmount: 100 }, explanation: "NZ$100 + NZ$15 GST = NZ$115 total." }
    ]
  },
  // Pakistan - Income Tax
  {
    id: "pakistan-income-tax-income-tax-calculator",
    countrySlug: "pakistan",
    categorySlug: "income-tax",
    calculatorSlug: "income-tax-calculator",
    name: "Income Tax Calculator",
    description: "Calculate your Pakistan income tax liability.",
    inputs: [
      { id: "annualIncome", label: "Annual Income", type: "number", required: true, placeholder: "Enter your annual income", validation: { min: 0, step: 1000 }},
      { id: "taxYear", label: "Tax Year", type: "select", required: true, defaultValue: "2024-25", options: [
        { value: "2023-24", label: "2023-24" }, { value: "2024-25", label: "2024-25" }
      ]}
    ],
    outputs: [
      { id: "taxableIncome", label: "Taxable Income", format: "currency", description: "Income after deductions" },
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Tax Rate", format: "percentage", description: "Tax as percentage of gross income" }
    ],
    formulas: [
      { id: "pk_rates", name: "Pakistan Tax Rates", formula: "Progressive rates from 0% to 35% for salaried individuals", description: "2024-25 tax brackets for salaried persons" }
    ],
    examples: [
      { title: "PKR 1,200,000 Annual Salary", inputs: { annualIncome: 1200000, taxYear: "2024-25" }, outputs: { taxableIncome: 1200000, incomeTax: 95000, effectiveRate: 7.9 }, explanation: "Progressive rates applied for salaried individuals." }
    ]
  },
  // Pakistan - Sales Tax
  {
    id: "pakistan-sales-tax-sales-tax-calculator",
    countrySlug: "pakistan",
    categorySlug: "sales-tax",
    calculatorSlug: "sales-tax-calculator",
    name: "Sales Tax Calculator",
    description: "Calculate sales tax on transactions in Pakistan.",
    inputs: [
      { id: "amount", label: "Amount", type: "number", required: true, placeholder: "Enter amount", validation: { min: 0, step: 0.01 }},
      { id: "calculationType", label: "Calculation Type", type: "select", required: true, defaultValue: "exclusive", options: [
        { value: "exclusive", label: "Add Sales Tax (Tax Exclusive)" }, { value: "inclusive", label: "Remove Sales Tax (Tax Inclusive)" }
      ]}
    ],
    outputs: [
      { id: "taxAmount", label: "Sales Tax Amount", format: "currency", description: "18% standard sales tax" },
      { id: "totalAmount", label: "Total Amount", format: "currency", description: "Amount including tax" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount excluding tax" }
    ],
    formulas: [
      { id: "sales_tax_pk", name: "Sales Tax Calculation", formula: "Amount x 18%", description: "Standard sales tax rate in Pakistan" }
    ],
    examples: [
      { title: "PKR 1,000 with 18% Sales Tax", inputs: { amount: 1000, calculationType: "exclusive" }, outputs: { taxAmount: 180, totalAmount: 1180, netAmount: 1000 }, explanation: "PKR 1,000 + PKR 180 tax = PKR 1,180 total." }
    ]
  },
  // Philippines - Income Tax
  {
    id: "philippines-income-tax-income-tax-calculator",
    countrySlug: "philippines",
    categorySlug: "income-tax",
    calculatorSlug: "income-tax-calculator",
    name: "Income Tax Calculator",
    description: "Calculate your Philippines income tax liability.",
    inputs: [
      { id: "annualIncome", label: "Annual Income", type: "number", required: true, placeholder: "Enter your annual income", validation: { min: 0, step: 1000 }},
      { id: "taxYear", label: "Tax Year", type: "select", required: true, defaultValue: "2024", options: [
        { value: "2023", label: "2023" }, { value: "2024", label: "2024" }
      ]}
    ],
    outputs: [
      { id: "taxableIncome", label: "Taxable Income", format: "currency", description: "Income after deductions" },
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Tax Rate", format: "percentage", description: "Tax as percentage of gross income" }
    ],
    formulas: [
      { id: "ph_rates", name: "Philippines Tax Rates", formula: "Graduated rates from 0% to 35%", description: "2024 tax brackets for individuals" }
    ],
    examples: [
      { title: "PHP 500,000 Annual Income", inputs: { annualIncome: 500000, taxYear: "2024" }, outputs: { taxableIncome: 500000, incomeTax: 102500, effectiveRate: 20.5 }, explanation: "Graduated rates applied." }
    ]
  },
  // Philippines - VAT
  {
    id: "philippines-vat-vat-calculator",
    countrySlug: "philippines",
    categorySlug: "vat",
    calculatorSlug: "vat-calculator",
    name: "VAT Calculator",
    description: "Calculate VAT inclusive or exclusive amounts in the Philippines.",
    inputs: [
      { id: "amount", label: "Amount", type: "number", required: true, placeholder: "Enter amount", validation: { min: 0, step: 0.01 }},
      { id: "calculationType", label: "Calculation Type", type: "select", required: true, defaultValue: "exclusive", options: [
        { value: "exclusive", label: "Add VAT (VAT Exclusive)" }, { value: "inclusive", label: "Remove VAT (VAT Inclusive)" }
      ]}
    ],
    outputs: [
      { id: "vatAmount", label: "VAT Amount", format: "currency", description: "12% standard VAT" },
      { id: "totalAmount", label: "Total Amount", format: "currency", description: "Amount including VAT" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount excluding VAT" }
    ],
    formulas: [
      { id: "vat_ph", name: "VAT Calculation", formula: "Amount x 12%", description: "Standard VAT rate in the Philippines" }
    ],
    examples: [
      { title: "PHP 1,000 with 12% VAT", inputs: { amount: 1000, calculationType: "exclusive" }, outputs: { vatAmount: 120, totalAmount: 1120, netAmount: 1000 }, explanation: "PHP 1,000 + PHP 120 VAT = PHP 1,120 total." }
    ]
  },
  // United Kingdom - Income Tax
  {
    id: "united-kingdom-income-tax-income-tax-calculator",
    countrySlug: "united-kingdom",
    categorySlug: "income-tax",
    calculatorSlug: "income-tax-calculator",
    name: "Income Tax Calculator",
    description: "Calculate your UK income tax liability.",
    inputs: [
      { id: "annualIncome", label: "Annual Income", type: "number", required: true, placeholder: "Enter your annual income", validation: { min: 0, step: 100 }},
      { id: "taxYear", label: "Tax Year", type: "select", required: true, defaultValue: "2024-25", options: [
        { value: "2023-24", label: "2023-24" }, { value: "2024-25", label: "2024-25" }
      ]}
    ],
    outputs: [
      { id: "taxableIncome", label: "Taxable Income", format: "currency", description: "Income after personal allowance" },
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Tax Rate", format: "percentage", description: "Tax as percentage of gross income" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after tax" }
    ],
    formulas: [
      { id: "uk_rates", name: "UK Tax Rates", formula: "Personal allowance: 0% up to $12,570, Basic: 20% up to $50,270, Higher: 40% up to $125,140, Additional: 45% above", description: "2024-25 rates for England, Wales, Northern Ireland" }
    ],
    examples: [
      { title: "£50,000 Annual Income", inputs: { annualIncome: 50000, taxYear: "2024-25" }, outputs: { taxableIncome: 50000, incomeTax: 7486, effectiveRate: 15.0, takeHomePay: 42514 }, explanation: "Personal allowance: £12,570. Basic rate: £37,430 x 20% = £7,486." }
    ]
  },
  // United Kingdom - VAT
  {
    id: "united-kingdom-vat-vat-calculator",
    countrySlug: "united-kingdom",
    categorySlug: "vat",
    calculatorSlug: "vat-calculator",
    name: "VAT Calculator",
    description: "Calculate VAT inclusive or exclusive amounts in the UK.",
    inputs: [
      { id: "amount", label: "Amount", type: "number", required: true, placeholder: "Enter amount", validation: { min: 0, step: 0.01 }},
      { id: "vatRate", label: "VAT Rate", type: "select", required: true, defaultValue: "20", options: [
        { value: "20", label: "20% Standard" }, { value: "5", label: "5% Reduced" }, { value: "0", label: "0% Zero Rated" }
      ]},
      { id: "calculationType", label: "Calculation Type", type: "select", required: true, defaultValue: "exclusive", options: [
        { value: "exclusive", label: "Add VAT (VAT Exclusive)" }, { value: "inclusive", label: "Remove VAT (VAT Inclusive)" }
      ]}
    ],
    outputs: [
      { id: "vatAmount", label: "VAT Amount", format: "currency", description: "VAT at selected rate" },
      { id: "totalAmount", label: "Total Amount", format: "currency", description: "Amount including VAT" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount excluding VAT" }
    ],
    formulas: [
      { id: "vat_uk", name: "VAT Calculation", formula: "Amount x VAT Rate%", description: "UK standard VAT rate is 20%, reduced rate 5%" }
    ],
    examples: [
      { title: "£100 with 20% VAT", inputs: { amount: 100, vatRate: "20", calculationType: "exclusive" }, outputs: { vatAmount: 20, totalAmount: 120, netAmount: 100 }, explanation: "£100 + £20 VAT = £120 total." }
    ]
  },
  // United Kingdom - National Insurance
  {
    id: "united-kingdom-national-insurance-ni-calculator",
    countrySlug: "united-kingdom",
    categorySlug: "national-insurance",
    calculatorSlug: "ni-calculator",
    name: "National Insurance Calculator",
    description: "Calculate your National Insurance contributions in the UK.",
    inputs: [
      { id: "annualIncome", label: "Annual Income", type: "number", required: true, placeholder: "Enter your annual income", validation: { min: 0, step: 100 }},
      { id: "employmentType", label: "Employment Type", type: "select", required: true, defaultValue: "employed", options: [
        { value: "employed", label: "Employed (Class 1)" }, { value: "self_employed", label: "Self-Employed (Class 2/4)" }
      ]},
      { id: "taxYear", label: "Tax Year", type: "select", required: true, defaultValue: "2024-25", options: [
        { value: "2023-24", label: "2023-24" }, { value: "2024-25", label: "2024-25" }
      ]}
    ],
    outputs: [
      { id: "niContributions", label: "NI Contributions", format: "currency", description: "Total National Insurance contributions" },
      { id: "effectiveRate", label: "Effective NI Rate", format: "percentage", description: "NI as percentage of income" }
    ],
    formulas: [
      { id: "class1", name: "Class 1 NI (Employed)", formula: "8% on earnings between £12,570 and £50,270, then 2% above", description: "For employees earning above primary threshold" },
      { id: "class2_4", name: "Class 2/4 NI (Self-Employed)", formula: "Class 2: £3.45/week, Class 4: 6% on profits between £12,570 and £50,270, then 2%", description: "For self-employed individuals" }
    ],
    examples: [
      { title: "Employed, £30,000 Annual Income", inputs: { annualIncome: 30000, employmentType: "employed", taxYear: "2024-25" }, outputs: { niContributions: 2296, effectiveRate: 7.7 }, explanation: "NI calculated on earnings between £12,570 and £50,270 at 8%." }
    ]
  },
  // United States - State Income Tax
  {
    id: "united-states-income-tax-state-income-tax",
    countrySlug: "united-states",
    categorySlug: "income-tax",
    calculatorSlug: "state-income-tax",
    name: "State Income Tax Calculator",
    description: "Compare state income tax rates across the US.",
    inputs: [
      { id: "state", label: "State", type: "select", required: true, defaultValue: "CA", options: [
        { value: "CA", label: "California" }, { value: "NY", label: "New York" }, { value: "TX", label: "Texas" }, { value: "FL", label: "Florida" }, { value: "WA", label: "Washington" }
      ]},
      { id: "annualIncome", label: "Annual Income", type: "number", required: true, placeholder: "Enter your annual income", validation: { min: 0, step: 100 }},
      { id: "taxYear", label: "Tax Year", type: "select", required: true, defaultValue: "2024", options: [
        { value: "2023", label: "2023" }, { value: "2024", label: "2024" }
      ]}
    ],
    outputs: [
      { id: "stateTax", label: "State Tax", format: "currency", description: "Estimated state income tax" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "State tax as percentage of income" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after state tax" }
    ],
    formulas: [
      { id: "state_rates", name: "State Rates", formula: "Varies by state — CA: 1%-13.3%, NY: 4%-10.9%, TX/FL/WA: 0%", description: "Flat or progressive state tax rates" }
    ],
    examples: [
      { title: "California Resident, $100,000 Income", inputs: { state: "CA", annualIncome: 100000, taxYear: "2024" }, outputs: { stateTax: 5834, effectiveRate: 5.8, takeHomePay: 94166 }, explanation: "CA progressive rates from 1% to 13.3% applied to $100,000 income." }
    ]
  },
  // United States - Payroll Tax
  {
    id: "united-states-payroll-tax-payroll-tax-calculator",
    countrySlug: "united-states",
    categorySlug: "payroll-tax",
    calculatorSlug: "payroll-tax-calculator",
    name: "Payroll Tax Calculator",
    description: "Calculate employer and employee payroll tax contributions (FICA).",
    inputs: [
      { id: "annualIncome", label: "Annual Income", type: "number", required: true, placeholder: "Enter your annual income", validation: { min: 0, step: 100 }},
      { id: "employmentType", label: "Employment Type", type: "select", required: true, defaultValue: "employed", options: [
        { value: "employed", label: "Employed (W-2)" }, { value: "self_employed", label: "Self-Employed" }
      ]},
      { id: "taxYear", label: "Tax Year", type: "select", required: true, defaultValue: "2024", options: [
        { value: "2023", label: "2023" }, { value: "2024", label: "2024" }
      ]}
    ],
    outputs: [
      { id: "socialSecurity", label: "Social Security", format: "currency", description: "6.2% up to wage base limit" },
      { id: "medicare", label: "Medicare", format: "currency", description: "1.45% on all earnings" },
      { id: "totalFICA", label: "Total FICA", format: "currency", description: "Total employee payroll tax" },
      { id: "employerMatch", label: "Employer Match", format: "currency", description: "Employer contribution (same rates)" }
    ],
    formulas: [
      { id: "fica", name: "FICA Tax", formula: "Social Security: 6.2% on first $168,600 | Medicare: 1.45% on all earnings", description: "2024 wage base limit for Social Security" }
    ],
    examples: [
      { title: "Employed, $75,000 Annual Income", inputs: { annualIncome: 75000, employmentType: "employed", taxYear: "2024" }, outputs: { socialSecurity: 4650, medicare: 1088, totalFICA: 5738, employerMatch: 5738 }, explanation: "SS: $75,000 x 6.2% = $4,650. Medicare: $75,000 x 1.45% = $1,088." }
    ]
  },
  // United States - Corporate Tax
  {
    id: "united-states-corporate-tax-corporate-tax-calculator",
    countrySlug: "united-states",
    categorySlug: "corporate-tax",
    calculatorSlug: "corporate-tax-calculator",
    name: "Corporate Tax Calculator",
    description: "Estimate corporate income tax liability.",
    inputs: [
      { id: "taxableIncome", label: "Taxable Income", type: "number", required: true, placeholder: "Enter taxable income", validation: { min: 0, step: 1000 }},
      { id: "taxYear", label: "Tax Year", type: "select", required: true, defaultValue: "2024", options: [
        { value: "2023", label: "2023" }, { value: "2024", label: "2024" }
      ]}
    ],
    outputs: [
      { id: "corporateTax", label: "Corporate Tax", format: "currency", description: "21% federal corporate tax" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of income" },
      { id: "afterTaxIncome", label: "After-Tax Income", format: "currency", description: "Income after corporate tax" }
    ],
    formulas: [
      { id: "corporate_rate", name: "Corporate Tax Rate", formula: "Taxable Income x 21%", description: "Flat federal corporate tax rate" }
    ],
    examples: [
      { title: "$500,000 Taxable Income", inputs: { taxableIncome: 500000, taxYear: "2024" }, outputs: { corporateTax: 105000, effectiveRate: 21, afterTaxIncome: 395000 }, explanation: "$500,000 x 21% = $105,000 corporate tax." }
    ]
  },
  // United States - Capital Gains Tax
  {
    id: "united-states-capital-gains-tax-capital-gains-calculator",
    countrySlug: "united-states",
    categorySlug: "capital-gains-tax",
    calculatorSlug: "capital-gains-calculator",
    name: "Capital Gains Tax Calculator",
    description: "Estimate tax on investment gains.",
    inputs: [
      { id: "assetType", label: "Asset Type", type: "select", required: true, defaultValue: "stock", options: [
        { value: "stock", label: "Stocks/Funds" }, { value: "real_estate", label: "Real Estate" }
      ]},
      { id: "gainAmount", label: "Capital Gain", type: "number", required: true, placeholder: "Enter capital gain", validation: { min: 0, step: 100 }},
      { id: "ordinaryIncome", label: "Ordinary Income", type: "number", required: true, placeholder: "Enter your ordinary income", validation: { min: 0, step: 100 }},
      { id: "filingStatus", label: "Filing Status", type: "select", required: true, defaultValue: "single", options: [
        { value: "single", label: "Single" }, { value: "married_joint", label: "Married Filing Jointly" }
      ]},
      { id: "taxYear", label: "Tax Year", type: "select", required: true, defaultValue: "2024", options: [
        { value: "2023", label: "2023" }, { value: "2024", label: "2024" }
      ]}
    ],
    outputs: [
      { id: "capitalGainsTax", label: "Capital Gains Tax", format: "currency", description: "Tax on investment gains" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Capital gains tax rate" },
      { id: "afterTaxGain", label: "After-Tax Gain", format: "currency", description: "Gain after tax" }
    ],
    formulas: [
      { id: "ltcg", name: "Long-Term Capital Gains", formula: "0%/15%/20% depending on income", description: "Assets held > 1 year" },
      { id: "stcg", name: "Short-Term Capital Gains", formula: "Taxed at ordinary income rates", description: "Assets held <= 1 year" }
    ],
    examples: [
      { title: "LTCG, $50,000 Gain, $100,000 Income", inputs: { assetType: "stock", gainAmount: 50000, ordinaryIncome: 100000, filingStatus: "single", taxYear: "2024" }, outputs: { capitalGainsTax: 7500, effectiveRate: 15, afterTaxGain: 42500 }, explanation: "15% LTCG rate applies. $50,000 x 15% = $7,500." }
    ]
  },
  // India - Income Tax
  {
    id: "india-income-tax-income-tax-calculator",
    countrySlug: "india",
    categorySlug: "income-tax",
    calculatorSlug: "income-tax-calculator",
    name: "Income Tax Calculator",
    description: "Calculate your Indian income tax liability.",
    inputs: [
      { id: "regime", label: "Tax Regime", type: "select", required: true, defaultValue: "new", options: [
        { value: "new", label: "New Regime" }, { value: "old", label: "Old Regime" }
      ]},
      { id: "annualIncome", label: "Annual Income", type: "number", required: true, placeholder: "Enter your annual income", validation: { min: 0, step: 1000 }},
      { id: "taxYear", label: "Assessment Year", type: "select", required: true, defaultValue: "2024-25", options: [
        { value: "2023-24", label: "2023-24" }, { value: "2024-25", label: "2024-25" }
      ]}
    ],
    outputs: [
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of gross income" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after tax" }
    ],
    formulas: [
      { id: "new_regime", name: "New Regime", formula: "Slab rates from 0% to 30% with standard deduction of ₹50,000", description: "FY 2024-25 new tax regime slabs" },
      { id: "old_regime", name: "Old Regime", formula: "Slab rates with various deductions (80C, 80D, HRA, etc.)", description: "FY 2024-25 old tax regime with deductions" }
    ],
    examples: [
      { title: "New Regime, ₹10,00,000 Income", inputs: { regime: "new", annualIncome: 1000000, taxYear: "2024-25" }, outputs: { incomeTax: 120750, effectiveRate: 12.1, takeHomePay: 879250 }, explanation: "New regime slabs: 0% up to ₹3L, 5% ₹3-6L, 10% ₹6-9L, 15% ₹9-12L, 20% ₹12-15L, 30% above." }
    ]
  },
  // India - GST
  {
    id: "india-gst-gst-calculator",
    countrySlug: "india",
    categorySlug: "gst",
    calculatorSlug: "gst-calculator",
    name: "GST Calculator",
    description: "Calculate GST inclusive or exclusive amounts in India.",
    inputs: [
      { id: "amount", label: "Amount", type: "number", required: true, placeholder: "Enter amount", validation: { min: 0, step: 0.01 }},
      { id: "gstRate", label: "GST Rate", type: "select", required: true, defaultValue: "18", options: [
        { value: "5", label: "5% GST" }, { value: "12", label: "12% GST" }, { value: "18", label: "18% GST" }, { value: "28", label: "28% GST" }
      ]},
      { id: "calculationType", label: "Calculation Type", type: "select", required: true, defaultValue: "exclusive", options: [
        { value: "exclusive", label: "Add GST (GST Exclusive)" }, { value: "inclusive", label: "Remove GST (GST Inclusive)" }
      ]}
    ],
    outputs: [
      { id: "gstAmount", label: "GST Amount", format: "currency", description: "GST at selected rate" },
      { id: "totalAmount", label: "Total Amount", format: "currency", description: "Amount including GST" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount excluding GST" }
    ],
    formulas: [
      { id: "gst_in", name: "GST Calculation", formula: "Amount x GST Rate%", description: "Standard GST calculation for India" }
    ],
    examples: [
      { title: "₹1,000 with 18% GST", inputs: { amount: 1000, gstRate: "18", calculationType: "exclusive" }, outputs: { gstAmount: 180, totalAmount: 1180, netAmount: 1000 }, explanation: "₹1,000 + ₹180 GST = ₹1,180 total." }
    ]
  },
  // India - TDS
  {
    id: "india-tds-tds-calculator",
    countrySlug: "india",
    categorySlug: "tds",
    calculatorSlug: "tds-calculator",
    name: "TDS Calculator",
    description: "Calculate Tax Deducted at Source for various payment types.",
    inputs: [
      { id: "paymentType", label: "Payment Type", type: "select", required: true, defaultValue: "salary", options: [
        { value: "salary", label: "Salary" }, { value: "professional", label: "Professional Fees" }, { value: "interest", label: "Interest" }, { value: "rent", label: "Rent" }
      ]},
      { id: "amount", label: "Amount", type: "number", required: true, placeholder: "Enter amount", validation: { min: 0, step: 100 }},
      { id: "taxYear", label: "Assessment Year", type: "select", required: true, defaultValue: "2024-25", options: [
        { value: "2023-24", label: "2023-24" }, { value: "2024-25", label: "2024-25" }
      ]}
    ],
    outputs: [
      { id: "tdsAmount", label: "TDS Deducted", format: "currency", description: "Tax deducted at source" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount received after TDS" }
    ],
    formulas: [
      { id: "tds_rates", name: "TDS Rates", formula: "Professional: 10%, Interest: 10%, Rent: 10%", description: "Standard TDS deduction rates" }
    ],
    examples: [
      { title: "₹50,000 Professional Fees", inputs: { paymentType: "professional", amount: 50000, taxYear: "2024-25" }, outputs: { tdsAmount: 5000, netAmount: 45000 }, explanation: "10% TDS on ₹50,000 = ₹5,000." }
    ]
  },
  // Hong Kong - Salaries Tax
  {
    id: "hong-kong-salaries-tax-salaries-tax-calculator",
    countrySlug: "hong-kong",
    categorySlug: "salaries-tax",
    calculatorSlug: "salaries-tax-calculator",
    name: "Salaries Tax Calculator",
    description: "Estimate your Hong Kong salaries tax.",
    inputs: [
      { id: "annualIncome", label: "Annual Income", type: "number", required: true, placeholder: "Enter your annual income", validation: { min: 0, step: 1000 }},
      { id: "taxYear", label: "Tax Year", type: "select", required: true, defaultValue: "2024-25", options: [
        { value: "2023-24", label: "2023-24" }, { value: "2024-25", label: "2024-25" }
      ]}
    ],
    outputs: [
      { id: "salariesTax", label: "Salaries Tax", format: "currency", description: "Tax under progressive or standard rate" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of income" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after salaries tax" }
    ],
    formulas: [
      { id: "hk_rates", name: "HK Salaries Tax", formula: "Progressive: 2%-17% on net chargeable income OR Standard: 15% on total income", description: "Whichever is lower applies" }
    ],
    examples: [
      { title: "HK$500,000 Annual Income", inputs: { annualIncome: 500000, taxYear: "2024-25" }, outputs: { salariesTax: 45000, effectiveRate: 9.0, takeHomePay: 455000 }, explanation: "Progressive rates applied to net chargeable income." }
    ]
  },
  // Hong Kong - Profits Tax
  {
    id: "hong-kong-profits-tax-profits-tax-calculator",
    countrySlug: "hong-kong",
    categorySlug: "profits-tax",
    calculatorSlug: "profits-tax-calculator",
    name: "Profits Tax Calculator",
    description: "Estimate business profits tax in Hong Kong.",
    inputs: [
      { id: "assessableProfits", label: "Assessable Profits", type: "number", required: true, placeholder: "Enter assessable profits", validation: { min: 0, step: 1000 }},
      { id: "businessType", label: "Business Type", type: "select", required: true, defaultValue: "corporation", options: [
        { value: "corporation", label: "Corporation" }, { value: "unincorporated", label: "Unincorporated Business" }
      ]},
      { id: "taxYear", label: "Tax Year", type: "select", required: true, defaultValue: "2024-25", options: [
        { value: "2023-24", label: "2023-24" }, { value: "2024-25", label: "2024-25" }
      ]}
    ],
    outputs: [
      { id: "profitsTax", label: "Profits Tax", format: "currency", description: "Tax on business profits" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of profits" }
    ],
    formulas: [
      { id: "hk_profits", name: "Profits Tax Rate", formula: "Corporations: 16.5% | Unincorporated: 15%", description: "Standard profits tax rates" }
    ],
    examples: [
      { title: "HK$1,000,000 Profits, Corporation", inputs: { assessableProfits: 1000000, businessType: "corporation", taxYear: "2024-25" }, outputs: { profitsTax: 165000, effectiveRate: 16.5 }, explanation: "HK$1,000,000 x 16.5% = HK$165,000." }
    ]
  },
  // Singapore - Income Tax
  {
    id: "singapore-income-tax-income-tax-calculator",
    countrySlug: "singapore",
    categorySlug: "income-tax",
    calculatorSlug: "income-tax-calculator",
    name: "Income Tax Calculator",
    description: "Calculate your Singapore income tax.",
    inputs: [
      { id: "residentStatus", label: "Residency Status", type: "select", required: true, defaultValue: "resident", options: [
        { value: "resident", label: "Resident Individual" }, { value: "non_resident", label: "Non-Resident Individual" }
      ]},
      { id: "annualIncome", label: "Annual Income", type: "number", required: true, placeholder: "Enter your annual income", validation: { min: 0, step: 1000 }},
      { id: "taxYear", label: "Year of Assessment", type: "select", required: true, defaultValue: "2024", options: [
        { value: "2023", label: "2023" }, { value: "2024", label: "2024" }
      ]}
    ],
    outputs: [
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of gross income" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after tax" }
    ],
    formulas: [
      { id: "sg_resident", name: "Resident Rates", formula: "Progressive rates from 0% to 24%", description: "For resident individuals" },
      { id: "sg_non_resident", name: "Non-Resident Rates", formula: "Flat 24% on gross income", description: "For non-residents" }
    ],
    examples: [
      { title: "Resident, S$80,000 Annual Income", inputs: { residentStatus: "resident", annualIncome: 80000, taxYear: "2024" }, outputs: { incomeTax: 2500, effectiveRate: 3.1, takeHomePay: 77500 }, explanation: "Progressive rates with reliefs applied." }
    ]
  },
  // Singapore - GST
  {
    id: "singapore-gst-gst-calculator",
    countrySlug: "singapore",
    categorySlug: "gst",
    calculatorSlug: "gst-calculator",
    name: "GST Calculator",
    description: "Calculate GST inclusive or exclusive amounts in Singapore.",
    inputs: [
      { id: "amount", label: "Amount", type: "number", required: true, placeholder: "Enter amount", validation: { min: 0, step: 0.01 }},
      { id: "calculationType", label: "Calculation Type", type: "select", required: true, defaultValue: "exclusive", options: [
        { value: "exclusive", label: "Add GST (GST Exclusive)" }, { value: "inclusive", label: "Remove GST (GST Inclusive)" }
      ]}
    ],
    outputs: [
      { id: "gstAmount", label: "GST Amount", format: "currency", description: "GST at 9%" },
      { id: "totalAmount", label: "Total Amount", format: "currency", description: "Amount including GST" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount excluding GST" }
    ],
    formulas: [
      { id: "gst_sg", name: "GST Calculation", formula: "Amount x 9%", description: "Singapore GST rate as of 2024" }
    ],
    examples: [
      { title: "S$1,000 with 9% GST", inputs: { amount: 1000, calculationType: "exclusive" }, outputs: { gstAmount: 90, totalAmount: 1090, netAmount: 1000 }, explanation: "S$1,000 + S$90 GST = S$1,090 total." }
    ]
  },
  // Singapore - Stamp Duty
  {
    id: "singapore-stamp-duty-stamp-duty-calculator",
    countrySlug: "singapore",
    categorySlug: "stamp-duty",
    calculatorSlug: "stamp-duty-calculator",
    name: "Stamp Duty Calculator",
    description: "Calculate property stamp duty in Singapore.",
    inputs: [
      { id: "propertyPrice", label: "Property Price", type: "number", required: true, placeholder: "Enter property price", validation: { min: 0, step: 1000 }},
      { id: "buyerType", label: "Buyer Type", type: "select", required: true, defaultValue: "citizen", options: [
        { value: "citizen", label: "Singapore Citizen" }, { value: "pr", label: "Permanent Resident" }, { value: "foreigner", label: "Foreigner" }
      ]},
      { id: "propertyType", label: "Property Type", type: "select", required: true, defaultValue: "residential", options: [
        { value: "residential", label: "Residential" }, { value: "commercial", label: "Commercial" }
      ]}
    ],
    outputs: [
      { id: "stampDuty", label: "Stamp Duty", format: "currency", description: "BSD + ABD (if applicable)" },
      { id: "totalCost", label: "Total Cost", format: "currency", description: "Property price + stamp duty" }
    ],
    formulas: [
      { id: "bsd", name: "BSD", formula: "1% on first S$180,000, 2% on next S$180,000, 3% on remainder", description: "Buyer's Stamp Duty for residential" }
    ],
    examples: [
      { title: "S$1,000,000 Residential, Citizen", inputs: { propertyPrice: 1000000, buyerType: "citizen", propertyType: "residential" }, outputs: { stampDuty: 25000, totalCost: 1025000 }, explanation: "BSD: 1% x $180,000 + 2% x $180,000 + 3% x $640,000 = $25,000." }
    ]
  },
  // Indonesia - Income Tax
  {
    id: "indonesia-income-tax-income-tax-calculator",
    countrySlug: "indonesia",
    categorySlug: "income-tax",
    calculatorSlug: "income-tax-calculator",
    name: "Income Tax Calculator",
    description: "Calculate your Indonesian income tax.",
    inputs: [
      { id: "annualIncome", label: "Annual Income", type: "number", required: true, placeholder: "Enter your annual income", validation: { min: 0, step: 1000 }},
      { id: "taxYear", label: "Tax Year", type: "select", required: true, defaultValue: "2024", options: [
        { value: "2023", label: "2023" }, { value: "2024", label: "2024" }
      ]}
    ],
    outputs: [
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of gross income" }
    ],
    formulas: [
      { id: "id_rates", name: "Indonesia Tax Rates", formula: "Progressive rates from 5% to 35%", description: "2024 tax brackets for individuals" }
    ],
    examples: [
      { title: "IDR 100,000,000 Annual Income", inputs: { annualIncome: 100000000, taxYear: "2024" }, outputs: { incomeTax: 6500000, effectiveRate: 6.5 }, explanation: "Progressive rates applied." }
    ]
  },
  // Indonesia - VAT
  {
    id: "indonesia-vat-vat-calculator",
    countrySlug: "indonesia",
    categorySlug: "vat",
    calculatorSlug: "vat-calculator",
    name: "VAT Calculator",
    description: "Calculate VAT inclusive or exclusive amounts in Indonesia.",
    inputs: [
      { id: "amount", label: "Amount", type: "number", required: true, placeholder: "Enter amount", validation: { min: 0, step: 0.01 }},
      { id: "calculationType", label: "Calculation Type", type: "select", required: true, defaultValue: "exclusive", options: [
        { value: "exclusive", label: "Add VAT (VAT Exclusive)" }, { value: "inclusive", label: "Remove VAT (VAT Inclusive)" }
      ]}
    ],
    outputs: [
      { id: "vatAmount", label: "VAT Amount", format: "currency", description: "11% standard VAT" },
      { id: "totalAmount", label: "Total Amount", format: "currency", description: "Amount including VAT" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount excluding VAT" }
    ],
    formulas: [
      { id: "vat_id", name: "VAT Calculation", formula: "Amount x 11%", description: "Standard VAT rate in Indonesia as of 2024" }
    ],
    examples: [
      { title: "IDR 1,000,000 with 11% VAT", inputs: { amount: 1000000, calculationType: "exclusive" }, outputs: { vatAmount: 110000, totalAmount: 1110000, netAmount: 1000000 }, explanation: "IDR 1,000,000 + IDR 110,000 VAT = IDR 1,110,000 total." }
    ]
  }
];
