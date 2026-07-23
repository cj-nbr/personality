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
    id: "us-federal-income-tax",
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
    id: "malaysia-income-tax",
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
    id: "malaysia-sst",
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
    id: "newzealand-income-tax",
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
    id: "newzealand-gst",
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
    id: "pakistan-income-tax",
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
    id: "pakistan-sales-tax",
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
    id: "philippines-income-tax",
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
    id: "philippines-vat",
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
    id: "uk-income-tax",
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
    id: "uk-vat",
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
    id: "uk-national-insurance",
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
  }
];
