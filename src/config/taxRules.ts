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
    description: "Calculate your US federal income tax liability based on current IRS tax brackets.",
    inputs: [
      {
        id: "annualIncome",
        label: "Total Annual Income",
        type: "number",
        required: true,
        placeholder: "Enter your total annual income",
        helpText: "Wages, salaries, tips, interest, dividends, capital gains, rental income, etc.",
        validation: { min: 0, step: 100 }
      },
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
        validation: { min: 0, step: 100 }
      },
      {
        id: "taxYear",
        label: "Tax Year",
        type: "select",
        required: true,
        defaultValue: "2025",
        options: [
          { value: "2024", label: "2024" },
          { value: "2025", label: "2025" },
          { value: "2026", label: "2026" },
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
        title: "Single Filer, $75,000 Income, 2025",
        inputs: { annualIncome: 75000, filingStatus: "single", standardDeduction: "standard", taxYear: "2025" },
        outputs: { taxableIncome: 60000, federalTax: 8966, effectiveRate: 12.0, marginalRate: 12, takeHomePay: 66034 },
        explanation: "Standard deduction of $15,000 applied for 2025. Tax calculated using 2025 single filer brackets. This is an estimate; actual tax may vary."
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
      {
        id: "residentStatus",
        label: "Residency Status",
        type: "select",
        required: true,
        defaultValue: "resident",
        options: [
          { value: "resident", label: "Resident Individual" },
          { value: "non_resident", label: "Non-Resident Individual" },
        ],
      },
      {
        id: "maritalStatus",
        label: "Marital Status",
        type: "select",
        required: true,
        defaultValue: "single",
        options: [
          { value: "single", label: "Single" },
          { value: "married", label: "Married" },
        ],
      },
      {
        id: "annualIncome",
        label: "Annual Income",
        type: "number",
        required: true,
        placeholder: "Enter your annual income",
        helpText: "Include employment, business, rental, and other income",
        validation: { min: 0, step: 1000 },
      },
      {
        id: "taxYear",
        label: "Year of Assessment",
        type: "select",
        required: true,
        defaultValue: "2025",
        options: [
          { value: "2024", label: "2024 (YA 2024)" },
          { value: "2025", label: "2025 (YA 2025)" },
          { value: "2026", label: "2026 (YA 2026)" },
        ],
      },
    ],
    outputs: [
      { id: "taxableIncome", label: "Taxable Income", format: "currency", description: "Income after reliefs" },
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Tax Rate", format: "percentage", description: "Tax as percentage of gross income" },
    ],
    formulas: [
      { id: "resident_rates", name: "Resident Rates", formula: "Progressive rates from 0% to 30%", description: "For resident individuals with personal reliefs" },
      { id: "non_resident_rates", name: "Non-Resident Rates", formula: "Flat 30% on worldwide income", description: "For non-residents, no personal reliefs" },
    ],
    examples: [
      {
        title: "Resident, RM 80,000 Annual Income, Single, 2024",
        inputs: { residentStatus: "resident", maritalStatus: "single", annualIncome: 80000, taxYear: "2024" },
        outputs: { taxableIncome: 80000, incomeTax: 4100, effectiveRate: 5.1 },
        explanation: "Progressive rates with reliefs applied. First RM50k at 0%, next RM10k at 1%, next RM10k at 3%, next RM10k at 6%."
      },
    ],
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
      {
        id: "amount",
        label: "Amount",
        type: "number",
        required: true,
        placeholder: "Enter amount",
        validation: { min: 0, step: 0.01 },
      },
      {
        id: "taxType",
        label: "Tax Type",
        type: "select",
        required: true,
        defaultValue: "sales",
        options: [
          { value: "sales_5", label: "Sales Tax (5%) - Essential goods" },
          { value: "sales_10", label: "Sales Tax (10%) - Standard goods" },
          { value: "service_6", label: "Service Tax (6%) - Specified services" },
          { value: "service_8", label: "Service Tax (8%) - Most services" },
        ],
      },
      {
        id: "calculationType",
        label: "Calculation Type",
        type: "select",
        required: true,
        defaultValue: "exclusive",
        options: [
          { value: "exclusive", label: "Add Tax (Tax Exclusive)" },
          { value: "inclusive", label: "Remove Tax (Tax Inclusive)" },
        ],
      },
    ],
    outputs: [
      { id: "taxAmount", label: "SST Amount", format: "currency", description: "SST at applicable rate" },
      { id: "totalAmount", label: "Total Amount", format: "currency", description: "Amount including tax" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount excluding tax" },
    ],
    formulas: [
      { id: "sales_tax", name: "Sales Tax", formula: "Amount × 5% or 10% depending on goods", description: "Standard sales tax rates for Malaysia" },
      { id: "service_tax", name: "Service Tax", formula: "Amount × 6% or 8% depending on service", description: "Service tax on specified services" },
    ],
    examples: [
      {
        title: "RM 1,000 with 10% Sales Tax",
        inputs: { amount: 1000, taxType: "sales_10", calculationType: "exclusive" },
        outputs: { taxAmount: 100, totalAmount: 1100, netAmount: 1000 },
        explanation: "RM 1,000 + RM 100 SST = RM 1,100 total."
      },
    ],
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
      {
        id: "annualIncome",
        label: "Annual Income",
        type: "number",
        required: true,
        placeholder: "Enter your annual income",
        validation: { min: 0, step: 1000 },
      },
      {
        id: "taxYear",
        label: "Tax Year",
        type: "select",
        required: true,
        defaultValue: "2025-26",
        options: [
          { value: "2024-25", label: "2024-25" },
          { value: "2025-26", label: "2025-26" },
        ],
      },
    ],
    outputs: [
      { id: "taxableIncome", label: "Taxable Income", format: "currency", description: "Income subject to tax" },
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Tax Rate", format: "percentage", description: "Tax as percentage of gross income" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after tax" },
    ],
    formulas: [
      { id: "nz_rates", name: "NZ Tax Rates", formula: "Progressive rates: 10.5% up to $14,000, 17.5% up to $48,000, 30% up to $70,000, 33% up to $180,000, 39% above", description: "2024-25 resident tax rates" },
    ],
    examples: [
      {
        title: "NZ$80,000 Annual Income, 2024-25",
        inputs: { annualIncome: 80000, taxYear: "2024-25" },
        outputs: { taxableIncome: 80000, incomeTax: 16720, effectiveRate: 20.9, takeHomePay: 63280 },
        explanation: "Progressive tax applied: $14,000 x 10.5% + $34,000 x 17.5% + $32,000 x 30% = $16,720."
      },
    ],
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
      {
        id: "amount",
        label: "Amount",
        type: "number",
        required: true,
        placeholder: "Enter amount",
        validation: { min: 0, step: 0.01 },
      },
      {
        id: "gstType",
        label: "GST Type",
        type: "select",
        required: true,
        defaultValue: "standard",
        options: [
          { value: "standard", label: "Standard GST (15%)" },
          { value: "zero", label: "Zero-Rated (0%)" },
          { value: "exempt", label: "Exempt / GST-Free" },
        ],
      },
      {
        id: "calculationType",
        label: "Calculation Type",
        type: "select",
        required: true,
        defaultValue: "exclusive",
        options: [
          { value: "exclusive", label: "Add GST (GST Exclusive)" },
          { value: "inclusive", label: "Remove GST (GST Inclusive)" },
        ],
      },
    ],
    outputs: [
      { id: "gstAmount", label: "GST Amount", format: "currency", description: "GST at selected rate" },
      { id: "totalAmount", label: "Total Amount", format: "currency", description: "Amount including GST" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount excluding GST" },
    ],
    formulas: [
      { id: "gst_nz", name: "GST Calculation", formula: "Amount x 15%", description: "New Zealand standard GST rate" },
    ],
    examples: [
      {
        title: "NZ$100 with 15% GST",
        inputs: { amount: 100, gstType: "standard", calculationType: "exclusive" },
        outputs: { gstAmount: 15, totalAmount: 115, netAmount: 100 },
        explanation: "NZ$100 + NZ$15 GST = NZ$115 total."
      },
    ],
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
      {
        id: "annualIncome",
        label: "Annual Income",
        type: "number",
        required: true,
        placeholder: "Enter your annual income",
        validation: { min: 0, step: 1000 },
      },
      {
        id: "taxYear",
        label: "Tax Year",
        type: "select",
        required: true,
        defaultValue: "2025-26",
        options: [
          { value: "2024-25", label: "2024-25" },
          { value: "2025-26", label: "2025-26" },
        ],
      },
    ],
    outputs: [
      { id: "taxableIncome", label: "Taxable Income", format: "currency", description: "Income after deductions" },
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Tax Rate", format: "percentage", description: "Tax as percentage of gross income" },
    ],
    formulas: [
      { id: "pk_rates", name: "Pakistan Tax Rates", formula: "Progressive rates from 0% to 35% for salaried individuals", description: "2024-25 tax brackets for salaried persons" },
    ],
    examples: [
      {
        title: "PKR 1,200,000 Annual Salary, 2024-25",
        inputs: { annualIncome: 1200000, taxYear: "2024-25" },
        outputs: { taxableIncome: 1200000, incomeTax: 95000, effectiveRate: 7.9 },
        explanation: "Progressive rates applied for salaried individuals."
      },
    ],
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
      {
        id: "amount",
        label: "Amount",
        type: "number",
        required: true,
        placeholder: "Enter amount",
        validation: { min: 0, step: 0.01 },
      },
      {
        id: "calculationType",
        label: "Calculation Type",
        type: "select",
        required: true,
        defaultValue: "exclusive",
        options: [
          { value: "exclusive", label: "Add Sales Tax (Tax Exclusive)" },
          { value: "inclusive", label: "Remove Sales Tax (Tax Inclusive)" },
        ],
      },
    ],
    outputs: [
      { id: "taxAmount", label: "Sales Tax Amount", format: "currency", description: "18% standard sales tax" },
      { id: "totalAmount", label: "Total Amount", format: "currency", description: "Amount including tax" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount excluding tax" },
    ],
    formulas: [
      { id: "sales_tax_pk", name: "Sales Tax Calculation", formula: "Amount × 18%", description: "Standard sales tax rate in Pakistan" },
    ],
    examples: [
      {
        title: "PKR 1,000 with 18% Sales Tax",
        inputs: { amount: 1000, calculationType: "exclusive" },
        outputs: { taxAmount: 180, totalAmount: 1180, netAmount: 1000 },
        explanation: "PKR 1,000 + PKR 180 tax = PKR 1,180 total."
      },
    ],
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
      {
        id: "annualIncome",
        label: "Annual Income",
        type: "number",
        required: true,
        placeholder: "Enter your annual income",
        validation: { min: 0, step: 1000 },
      },
      {
        id: "employmentType",
        label: "Employment Type",
        type: "select",
        required: true,
        defaultValue: "employed",
        options: [
          { value: "employed", label: "Employed (Compensation Income)" },
          { value: "self_employed", label: "Self-Employed / Professional" },
        ],
      },
      {
        id: "taxYear",
        label: "Tax Year",
        type: "select",
        required: true,
        defaultValue: "2025",
        options: [
          { value: "2024", label: "2024" },
          { value: "2025", label: "2025" },
          { value: "2026", label: "2026" },
        ],
      },
    ],
    outputs: [
      { id: "taxableIncome", label: "Taxable Income", format: "currency", description: "Income after deductions" },
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Tax Rate", format: "percentage", description: "Tax as percentage of gross income" },
    ],
    formulas: [
      { id: "ph_rates", name: "Philippines Tax Rates", formula: "Graduated rates from 0% to 35%", description: "2024 tax brackets for individuals" },
    ],
    examples: [
      {
        title: "PHP 500,000 Annual Income, 2024",
        inputs: { annualIncome: 500000, employmentType: "employed", taxYear: "2024" },
        outputs: { taxableIncome: 500000, incomeTax: 102500, effectiveRate: 20.5 },
        explanation: "Graduated rates applied for compensation income."
      },
    ],
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
      {
        id: "amount",
        label: "Amount",
        type: "number",
        required: true,
        placeholder: "Enter amount",
        validation: { min: 0, step: 0.01 },
      },
      {
        id: "vatType",
        label: "VAT Type",
        type: "select",
        required: true,
        defaultValue: "vat",
        options: [
          { value: "vat", label: "VAT (12%)" },
          { value: "percentage_tax", label: "Percentage Tax (3%) - Optional for non-VAT registered" },
          { value: "zero", label: "Zero-Rated (0%)" },
          { value: "exempt", label: "VAT Exempt" },
        ],
      },
      {
        id: "calculationType",
        label: "Calculation Type",
        type: "select",
        required: true,
        defaultValue: "exclusive",
        options: [
          { value: "exclusive", label: "Add VAT (VAT Exclusive)" },
          { value: "inclusive", label: "Remove VAT (VAT Inclusive)" },
        ],
      },
    ],
    outputs: [
      { id: "vatAmount", label: "VAT Amount", format: "currency", description: "VAT at selected rate" },
      { id: "totalAmount", label: "Total Amount", format: "currency", description: "Amount including VAT" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount excluding VAT" },
    ],
    formulas: [
      { id: "vat_ph", name: "VAT Calculation", formula: "Amount × 12%", description: "Standard VAT rate in the Philippines" },
    ],
    examples: [
      {
        title: "PHP 1,000 with 12% VAT",
        inputs: { amount: 1000, vatType: "vat", calculationType: "exclusive" },
        outputs: { vatAmount: 120, totalAmount: 1120, netAmount: 1000 },
        explanation: "PHP 1,000 + PHP 120 VAT = PHP 1,120 total."
      },
    ],
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
      {
        id: "annualIncome",
        label: "Annual Income",
        type: "number",
        required: true,
        placeholder: "Enter your annual income",
        validation: { min: 0, step: 100 },
      },
      {
        id: "taxYear",
        label: "Tax Year",
        type: "select",
        required: true,
        defaultValue: "2025-26",
        options: [
          { value: "2024-25", label: "2024-25" },
          { value: "2025-26", label: "2025-26" },
        ],
      },
    ],
    outputs: [
      { id: "taxableIncome", label: "Taxable Income", format: "currency", description: "Income after personal allowance" },
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Tax Rate", format: "percentage", description: "Tax as percentage of gross income" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after tax" },
    ],
    formulas: [
      { id: "uk_rates", name: "UK Tax Rates", formula: "Personal allowance: 0% up to £12,570, Basic: 20% up to £50,270, Higher: 40% up to £125,140, Additional: 45% above", description: "2024-25 rates for England, Wales, Northern Ireland" },
    ],
    examples: [
      {
        title: "£50,000 Annual Income, 2024-25",
        inputs: { annualIncome: 50000, taxYear: "2024-25" },
        outputs: { taxableIncome: 50000, incomeTax: 7486, effectiveRate: 15.0, takeHomePay: 42514 },
        explanation: "Personal allowance: £12,570. Basic rate: £37,430 x 20% = £7,486."
      },
    ],
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
      {
        id: "amount",
        label: "Amount",
        type: "number",
        required: true,
        placeholder: "Enter amount",
        validation: { min: 0, step: 0.01 },
      },
      {
        id: "vatRate",
        label: "VAT Rate",
        type: "select",
        required: true,
        defaultValue: "20",
        options: [
          { value: "20", label: "20% Standard" },
          { value: "5", label: "5% Reduced" },
          { value: "0", label: "0% Zero Rated / Exempt" },
        ],
      },
      {
        id: "calculationType",
        label: "Calculation Type",
        type: "select",
        required: true,
        defaultValue: "exclusive",
        options: [
          { value: "exclusive", label: "Add VAT (VAT Exclusive)" },
          { value: "inclusive", label: "Remove VAT (VAT Inclusive)" },
        ],
      },
    ],
    outputs: [
      { id: "vatAmount", label: "VAT Amount", format: "currency", description: "VAT at selected rate" },
      { id: "totalAmount", label: "Total Amount", format: "currency", description: "Amount including VAT" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount excluding VAT" },
    ],
    formulas: [
      { id: "vat_uk", name: "VAT Calculation", formula: "Amount × VAT Rate%", description: "UK standard VAT rate is 20%, reduced rate 5%" },
    ],
    examples: [
      {
        title: "£100 with 20% VAT",
        inputs: { amount: 100, vatRate: "20", calculationType: "exclusive" },
        outputs: { vatAmount: 20, totalAmount: 120, netAmount: 100 },
        explanation: "£100 + £20 VAT = £120 total."
      },
    ],
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
      {
        id: "annualIncome",
        label: "Annual Earnings",
        type: "number",
        required: true,
        placeholder: "Enter your annual earnings",
        validation: { min: 0, step: 100 },
      },
      {
        id: "employmentType",
        label: "Employment Type",
        type: "select",
        required: true,
        defaultValue: "employed",
        options: [
          { value: "employed", label: "Employed (Class 1)" },
          { value: "self_employed", label: "Self-Employed (Class 2 & 4)" },
        ],
      },
      {
        id: "taxYear",
        label: "Tax Year",
        type: "select",
        required: true,
        defaultValue: "2025-26",
        options: [
          { value: "2024-25", label: "2024-25" },
          { value: "2025-26", label: "2025-26" },
        ],
      },
    ],
    outputs: [
      { id: "niContributions", label: "NI Contributions", format: "currency", description: "Total National Insurance contributions" },
      { id: "effectiveRate", label: "Effective NI Rate", format: "percentage", description: "NI as percentage of income" },
    ],
    formulas: [
      { id: "class1", name: "Class 1 NI (Employed)", formula: "8% on earnings between £12,570 and £50,270, then 2% above", description: "For employees earning above primary threshold" },
      { id: "class2_4", name: "Class 2/4 NI (Self-Employed)", formula: "Class 2: £3.45/week, Class 4: 6% on profits between £12,570 and £50,270, then 2%", description: "For self-employed individuals" },
    ],
    examples: [
      {
        title: "Employed, £30,000 Annual Income, 2024-25",
        inputs: { annualIncome: 30000, employmentType: "employed", taxYear: "2024-25" },
        outputs: { niContributions: 2296, effectiveRate: 7.7 },
        explanation: "NI calculated on earnings between £12,570 and £50,270 at 8%."
      },
    ],
  },
  // United States - State Income Tax
  {
    id: "united-states-income-tax-state-income-tax",
    countrySlug: "united-states",
    categorySlug: "income-tax",
    calculatorSlug: "state-income-tax",
    name: "State Income Tax Calculator",
    description: "Compare estimated state income tax across major US states.",
    inputs: [
      {
        id: "state",
        label: "State",
        type: "select",
        required: true,
        defaultValue: "CA",
        options: [
          { value: "AL", label: "Alabama" },
          { value: "AZ", label: "Arizona" },
          { value: "CA", label: "California" },
          { value: "CO", label: "Colorado" },
          { value: "FL", label: "Florida" },
          { value: "GA", label: "Georgia" },
          { value: "IL", label: "Illinois" },
          { value: "NY", label: "New York" },
          { value: "TX", label: "Texas" },
          { value: "WA", label: "Washington" },
        ],
      },
      {
        id: "annualIncome",
        label: "Annual Income",
        type: "number",
        required: true,
        placeholder: "Enter your annual income",
        validation: { min: 0, step: 100 },
      },
      {
        id: "filingStatus",
        label: "Filing Status",
        type: "select",
        required: true,
        defaultValue: "single",
        options: [
          { value: "single", label: "Single" },
          { value: "married_joint", label: "Married Filing Jointly" },
        ],
      },
      {
        id: "taxYear",
        label: "Tax Year",
        type: "select",
        required: true,
        defaultValue: "2025",
        options: [
          { value: "2024", label: "2024" },
          { value: "2025", label: "2025" },
          { value: "2026", label: "2026" },
        ],
      },
    ],
    outputs: [
      { id: "stateTax", label: "State Tax", format: "currency", description: "Estimated state income tax" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "State tax as percentage of income" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after state tax" },
    ],
    formulas: [
      { id: "state_rates", name: "State Rates", formula: "Varies by state — flat or progressive", description: "Some states have no income tax" },
    ],
    examples: [
      {
        title: "California Resident, $100,000 Income, 2025",
        inputs: { state: "CA", annualIncome: 100000, filingStatus: "single", taxYear: "2025" },
        outputs: { stateTax: 5743, effectiveRate: 5.7, takeHomePay: 94257 },
        explanation: "CA progressive rates from 1% to 12.3% applied to $100,000 income."
      },
    ],
  },
  // United States - Payroll Tax
  {
    id: "united-states-payroll-tax-payroll-tax-calculator",
    countrySlug: "united-states",
    categorySlug: "payroll-tax",
    calculatorSlug: "payroll-tax-calculator",
    name: "Payroll Tax Calculator",
    description: "Calculate employer and employee FICA contributions.",
    inputs: [
      {
        id: "annualIncome",
        label: "Annual Wages / Self-Employment Earnings",
        type: "number",
        required: true,
        placeholder: "Enter annual earnings",
        helpText: "Include salary, wages, and tips for FICA calculations",
        validation: { min: 0, step: 100 },
      },
      {
        id: "employmentType",
        label: "Employment Type",
        type: "select",
        required: true,
        defaultValue: "employed",
        options: [
          { value: "employed", label: "Employed (W-2)" },
          { value: "self_employed", label: "Self-Employed (1099)" },
        ],
      },
      {
        id: "pretaxBenefits",
        label: "Pre-Tax Benefits & Retirement",
        type: "number",
        required: false,
        placeholder: "Enter 401(k) and other pre-tax deductions",
        helpText: "Amount deducted before FICA taxes (401k, 125 plan, etc.)",
        validation: { min: 0, step: 100 },
      },
      {
        id: "taxYear",
        label: "Tax Year",
        type: "select",
        required: true,
        defaultValue: "2025",
        options: [
          { value: "2024", label: "2024" },
          { value: "2025", label: "2025" },
          { value: "2026", label: "2026" },
        ],
      },
    ],
    outputs: [
      { id: "socialSecurity", label: "Social Security (SS)", format: "currency", description: "6.2% up to wage base limit" },
      { id: "medicare", label: "Medicare (Med)", format: "currency", description: "1.45% on all earnings" },
      { id: "additionalMedicare", label: "Additional Medicare", format: "currency", description: "0.9% on earnings over $200,000 (single)" },
      { id: "totalFICA", label: "Total FICA", format: "currency", description: "Total employee payroll tax" },
      { id: "employerMatch", label: "Employer Match", format: "currency", description: "Employer contribution (same rates)" },
    ],
    formulas: [
      { id: "fica_ss", name: "Social Security", formula: "6.2% on first $176,100 (2025)", description: "Wage base limit applies" },
      { id: "fica_medicare", name: "Medicare", formula: "1.45% on all earnings", description: "Additional 0.9% over threshold" },
    ],
    examples: [
      {
        title: "Employed, $100,000 Earnings, $22,000 Pre-Tax, 2025",
        inputs: { annualIncome: 100000, employmentType: "employed", pretaxBenefits: 22000, taxYear: "2025" },
        outputs: { socialSecurity: 4826, medicare: 1127, additionalMedicare: 0, totalFICA: 5953, employerMatch: 5953 },
        explanation: "SS: $78,000 x 6.2% = $4,826. Medicare: $78,000 x 1.45% = $1,131."
      },
    ],
  },
  // United States - Corporate Tax
  {
    id: "united-states-corporate-tax-corporate-tax-calculator",
    countrySlug: "united-states",
    categorySlug: "corporate-tax",
    calculatorSlug: "corporate-tax-calculator",
    name: "Corporate Tax Calculator",
    description: "Estimate US federal corporate income tax liability.",
    inputs: [
      {
        id: "taxableIncome",
        label: "Taxable Income",
        type: "number",
        required: true,
        placeholder: "Enter taxable income",
        helpText: "Revenue minus allowable business deductions and expenses",
        validation: { min: 0, step: 1000 },
      },
      {
        id: "entityType",
        label: "Entity Type",
        type: "select",
        required: true,
        defaultValue: "c_corp",
        options: [
          { value: "c_corp", label: "C-Corporation (Flat 21%)" },
          { value: "s_corp", label: "S-Corporation (Pass-Through)" },
          { value: "llc", label: "LLC (Pass-Through)" },
        ],
      },
      {
        id: "taxYear",
        label: "Tax Year",
        type: "select",
        required: true,
        defaultValue: "2025",
        options: [
          { value: "2024", label: "2024" },
          { value: "2025", label: "2025" },
          { value: "2026", label: "2026" },
        ],
      },
    ],
    outputs: [
      { id: "corporateTax", label: "Federal Tax", format: "currency", description: "21% federal corporate tax for C-corps" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of income" },
      { id: "afterTaxIncome", label: "After-Tax Income", format: "currency", description: "Income after corporate tax" },
    ],
    formulas: [
      { id: "c_corp", name: "C-Corp Tax", formula: "Taxable Income x 21%", description: "Flat federal corporate tax rate" },
      { id: "pass_through", name: "Pass-Through", formula: "Income passes to owners — taxed at individual rates", description: "S-corps and LLCs" },
    ],
    examples: [
      {
        title: "C-Corp, $1,000,000 Taxable Income, 2025",
        inputs: { taxableIncome: 1000000, entityType: "c_corp", taxYear: "2025" },
        outputs: { corporateTax: 210000, effectiveRate: 21, afterTaxIncome: 790000 },
        explanation: "$1,000,000 x 21% = $210,000 federal corporate tax."
      },
    ],
  },
  // United States - Capital Gains Tax
  {
    id: "united-states-capital-gains-tax-capital-gains-calculator",
    countrySlug: "united-states",
    categorySlug: "capital-gains-tax",
    calculatorSlug: "capital-gains-calculator",
    name: "Capital Gains Tax Calculator",
    description: "Estimate tax on investment gains based on holding period and income.",
    inputs: [
      {
        id: "gainAmount",
        label: "Capital Gain",
        type: "number",
        required: true,
        placeholder: "Enter your capital gain",
        helpText: "Selling price minus cost basis and selling costs",
        validation: { min: 0, step: 100 },
      },
      {
        id: "costBasis",
        label: "Cost Basis",
        type: "number",
        required: true,
        placeholder: "Enter original purchase price",
        validation: { min: 0, step: 100 },
      },
      {
        id: "holdingPeriod",
        label: "Holding Period",
        type: "select",
        required: true,
        defaultValue: "long_term",
        options: [
          { value: "long_term", label: "Long-Term ( > 1 year)" },
          { value: "short_term", label: "Short-Term (≤ 1 year)" },
        ],
      },
      {
        id: "assetType",
        label: "Asset Type",
        type: "select",
        required: true,
        defaultValue: "stock",
        options: [
          { value: "stock", label: "Stocks / ETFs / Mutual Funds" },
          { value: "real_estate", label: "Real Estate" },
          { value: "collectibles", label: "Collectibles" },
        ],
      },
      {
        id: "ordinaryIncome",
        label: "Ordinary Income",
        type: "number",
        required: true,
        placeholder: "Enter your ordinary income",
        helpText: "Used to determine applicable capital gains bracket",
        validation: { min: 0, step: 100 },
      },
      {
        id: "filingStatus",
        label: "Filing Status",
        type: "select",
        required: true,
        defaultValue: "single",
        options: [
          { value: "single", label: "Single" },
          { value: "married_joint", label: "Married Filing Jointly" },
          { value: "head_of_household", label: "Head of Household" },
        ],
      },
      {
        id: "taxYear",
        label: "Tax Year",
        type: "select",
        required: true,
        defaultValue: "2025",
        options: [
          { value: "2024", label: "2024" },
          { value: "2025", label: "2025" },
          { value: "2026", label: "2026" },
        ],
      },
    ],
    outputs: [
      { id: "capitalGainsTax", label: "Capital Gains Tax", format: "currency", description: "Tax on investment gains" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Capital gains tax rate" },
      { id: "afterTaxGain", label: "After-Tax Gain", format: "currency", description: "Gain after tax" },
    ],
    formulas: [
      { id: "ltcg", name: "Long-Term Capital Gains", formula: "0%/15%/20% depending on income", description: "Assets held > 1 year" },
      { id: "stcg", name: "Short-Term Capital Gains", formula: "Taxed at ordinary income rates", description: "Assets held ≤ 1 year, added to ordinary income" },
      { id: "collectibles", name: "Collectibles Rate", formula: "28% max rate", description: "Art, antiques, coins, etc." },
    ],
    examples: [
      {
        title: "LTCG, $50,000 Gain, $100,000 Income, Single, 2025",
        inputs: { gainAmount: 50000, costBasis: 50000, holdingPeriod: "long_term", assetType: "stock", ordinaryIncome: 100000, filingStatus: "single", taxYear: "2025" },
        outputs: { capitalGainsTax: 7500, effectiveRate: 15, afterTaxGain: 42500 },
        explanation: "15% LTCG rate applies. $50,000 x 15% = $7,500."
      },
    ],
  },
  // India - Income Tax
  {
    id: "india-income-tax-income-tax-calculator",
    countrySlug: "india",
    categorySlug: "income-tax",
    calculatorSlug: "income-tax-calculator",
    name: "Income Tax Calculator",
    description: "Calculate your Indian income tax liability under Old or New Tax Regime.",
    inputs: [
      {
        id: "regime",
        label: "Tax Regime",
        type: "select",
        required: true,
        defaultValue: "new",
        options: [
          { value: "new", label: "New Tax Regime (Default)" },
          { value: "old", label: "Old Tax Regime" },
        ],
      },
      {
        id: "ageGroup",
        label: "Age Group",
        type: "select",
        required: true,
        defaultValue: "below_60",
        options: [
          { value: "below_60", label: "Below 60 Years" },
          { value: "senior", label: "60 Years or More (Senior Citizen)" },
          { value: "super_senior", label: "80 Years or More (Super Senior)" },
        ],
      },
      {
        id: "annualSalary",
        label: "Annual Salary",
        type: "number",
        required: true,
        placeholder: "Enter annual salary",
        validation: { min: 0, step: 1000 },
      },
      {
        id: "otherIncome",
        label: "Other Income",
        type: "number",
        required: true,
        defaultValue: 0,
        placeholder: "Interest, rental, or other income",
        validation: { min: 0, step: 1000 },
      },
      {
        id: "hraReceived",
        label: "HRA Received",
        type: "number",
        required: false,
        defaultValue: 0,
        placeholder: "Enter HRA received (Old regime only)",
        helpText: "Only applicable for Old Tax Regime",
        validation: { min: 0, step: 1000 },
      },
      {
        id: "section80C",
        label: "Section 80C Deductions",
        type: "number",
        required: false,
        defaultValue: 0,
        placeholder: "PF, PPF, ELSS, LIC, home loan principal (max ₹1.5L)",
        helpText: "Only applicable for Old Tax Regime",
        validation: { min: 0, max: 150000, step: 1000 },
      },
      {
        id: "section80D",
        label: "Section 80D (Health Insurance)",
        type: "number",
        required: false,
        defaultValue: 0,
        placeholder: "Health insurance premium",
        helpText: "Only applicable for Old Tax Regime",
        validation: { min: 0, step: 1000 },
      },
      {
        id: "homeLoanInterest",
        label: "Home Loan Interest (Section 24)",
        type: "number",
        required: false,
        defaultValue: 0,
        placeholder: "Interest on self-occupied house (max ₹2L)",
        helpText: "Only applicable for Old Tax Regime",
        validation: { min: 0, max: 200000, step: 1000 },
      },
      {
        id: "taxYear",
        label: "Assessment Year",
        type: "select",
        required: true,
        defaultValue: "2025-26",
        options: [
          { value: "2024-25", label: "2024-25 (AY 2025-26)" },
          { value: "2025-26", label: "2025-26 (AY 2026-27)" },
        ],
      },
    ],
    outputs: [
      { id: "grossIncome", label: "Gross Total Income", format: "currency", description: "Salary + other income" },
      { id: "totalDeductions", label: "Total Deductions", format: "currency", description: "Applicable deductions under chosen regime" },
      { id: "taxableIncome", label: "Taxable Income", format: "currency", description: "Income subject to tax" },
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax before cess" },
      { id: "cess", label: "Health & Education Cess", format: "currency", description: "4% on income tax" },
      { id: "totalTax", label: "Total Tax Liability", format: "currency", description: "Tax + cess" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of gross income" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Gross income minus total tax" },
    ],
    formulas: [
      { id: "new_regime", name: "New Regime (Default)", formula: "Slab: 0% up to ₹4L | 5% ₹4-8L | 10% ₹8-12L | 15% ₹12-16L | 20% ₹16-20L | 25% ₹20-24L | 30% above | Std Ded ₹75k | Cess 4%", description: "FY 2024-25 new tax regime slabs with standard deduction for salaried" },
      { id: "old_regime", name: "Old Regime", formula: "Slab: 0% up to ₹2.5L | 5% ₹2.5-5L | 20% ₹5-10L | 30% above | Std Ded ₹50k | Cess 4% | Plus 80C/80D deductions", description: "FY 2024-25 old tax regime with standard deductions" },
    ],
    examples: [
      {
        title: "New Regime, ₹10,00,000 Salary, ₹50,000 Other, Age <60, AY 2024-25",
        inputs: { regime: "new", ageGroup: "below_60", annualSalary: 1000000, otherIncome: 50000, hraReceived: 0, section80C: 0, section80D: 0, homeLoanInterest: 0, taxYear: "2024-25" },
        outputs: { grossIncome: 1050000, totalDeductions: 75000, taxableIncome: 975000, incomeTax: 87000, cess: 3480, totalTax: 90480, effectiveRate: 8.6, takeHomePay: 959520 },
        explanation: "New regime: gross ₹10.5L - std ded ₹75k = ₹9.75L. Tax: ₹60k + ₹15k + ₹25k + ₹13.5k = ₹87k. Cess: ₹87k x 4% = ₹3.48k."
      },
    ],
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
      {
        id: "amount",
        label: "Amount",
        type: "number",
        required: true,
        placeholder: "Enter amount",
        validation: { min: 0, step: 0.01 },
      },
      {
        id: "gstRate",
        label: "GST Rate",
        type: "select",
        required: true,
        defaultValue: "18",
        options: [
          { value: "0", label: "0% - GST Exempt" },
          { value: "0.25", label: "0.25% - Precious Stones" },
          { value: "3", label: "3% - Gold & Silver" },
          { value: "5", label: "5% - Essential Goods" },
          { value: "12", label: "12% - Standard Items" },
          { value: "18", label: "18% - Most Goods & Services" },
          { value: "28", label: "28% - Luxury / Sin Goods" },
        ],
      },
      {
        id: "calculationType",
        label: "Calculation Type",
        type: "select",
        required: true,
        defaultValue: "exclusive",
        options: [
          { value: "exclusive", label: "Add GST (GST Exclusive)" },
          { value: "inclusive", label: "Remove GST (GST Inclusive)" },
        ],
      },
    ],
    outputs: [
      { id: "gstAmount", label: "GST Amount", format: "currency", description: "GST at selected rate" },
      { id: "totalAmount", label: "Total Amount", format: "currency", description: "Amount including GST" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount excluding GST" },
    ],
    formulas: [
      { id: "gst_in", name: "GST Calculation", formula: "Amount × GST Rate%", description: "Standard GST calculation for India" },
    ],
    examples: [
      {
        title: "₹1,000 with 18% GST",
        inputs: { amount: 1000, gstRate: "18", calculationType: "exclusive" },
        outputs: { gstAmount: 180, totalAmount: 1180, netAmount: 1000 },
        explanation: "₹1,000 + ₹180 GST = ₹1,180 total."
      },
    ],
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
      {
        id: "paymentType",
        label: "Payment Type",
        type: "select",
        required: true,
        defaultValue: "professional",
        options: [
          { value: "professional", label: "Professional / Technical Fees (Section 194J)" },
          { value: "interest", label: "Interest (Section 194A)" },
          { value: "rent", label: "Rent (Section 194I)" },
          { value: "contractor", label: "Contractor / Sub-contractor (Section 194C)" },
          { value: "salary", label: "Salary (Section 192)" },
          { value: "dividend", label: "Dividend (Section 194)" },
        ],
      },
      {
        id: "amount",
        label: "Gross Amount",
        type: "number",
        required: true,
        placeholder: "Enter gross amount",
        validation: { min: 0, step: 100 },
      },
      {
        id: "panAvailable",
        label: "PAN Available",
        type: "select",
        required: true,
        defaultValue: "yes",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
      {
        id: "taxYear",
        label: "Assessment Year",
        type: "select",
        required: true,
        defaultValue: "2025-26",
        options: [
          { value: "2024-25", label: "2024-25" },
          { value: "2025-26", label: "2025-26" },
        ],
      },
    ],
    outputs: [
      { id: "tdsRate", label: "TDS Rate", format: "percentage", description: "Applicable TDS percentage" },
      { id: "tdsAmount", label: "TDS Deducted", format: "currency", description: "Tax deducted at source" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount received after TDS" },
    ],
    formulas: [
      { id: "tds_194j", name: "Professional Fees", formula: "10% (20% if no PAN)", description: "Section 194J" },
      { id: "tds_194a", name: "Interest", formula: "10% (20% if no PAN)", description: "Section 194A" },
      { id: "tds_194i", name: "Rent", formula: "10% (20% if no PAN)", description: "Section 194I" },
      { id: "tds_194c", name: "Contractor", formula: "1% (individual/HUF) or 2% (others)", description: "Section 194C" },
    ],
    examples: [
      {
        title: "₹50,000 Professional Fees, PAN Available",
        inputs: { paymentType: "professional", amount: 50000, panAvailable: "yes", taxYear: "2024-25" },
        outputs: { tdsRate: 10, tdsAmount: 5000, netAmount: 45000 },
        explanation: "10% TDS on ₹50,000 = ₹5,000."
      },
    ],
  },
  // Hong Kong - Salaries Tax
  {
    id: "hong-kong-salaries-tax-salaries-tax-calculator",
    countrySlug: "hong-kong",
    categorySlug: "salaries-tax",
    calculatorSlug: "salaries-tax-calculator",
    name: "Salaries Tax Calculator",
    description: "Estimate your Hong Kong salaries tax with MPF and allowances.",
    inputs: [
      {
        id: "annualIncome",
        label: "Annual Employment Income",
        type: "number",
        required: true,
        placeholder: "Enter annual income from employment",
        validation: { min: 0, step: 1000 },
      },
      {
        id: "mpfContributions",
        label: "MPF / ORSO Contributions",
        type: "number",
        required: true,
        defaultValue: 0,
        placeholder: "Enter mandatory contributions",
        helpText: "Mandatory Provident Fund or occupational retirement scheme contributions",
        validation: { min: 0, step: 1000 },
      },
      {
        id: "maritalStatus",
        label: "Marital Status",
        type: "select",
        required: true,
        defaultValue: "single",
        options: [
          { value: "single", label: "Single" },
          { value: "married", label: "Married" },
        ],
      },
      {
        id: "dependentChildren",
        label: "Number of Dependent Children",
        type: "number",
        required: true,
        defaultValue: 0,
        validation: { min: 0, max: 9, step: 1 },
      },
      {
        id: "taxYear",
        label: "Year of Assessment",
        type: "select",
        required: true,
        defaultValue: "2025-26",
        options: [
          { value: "2024-25", label: "2024-25" },
          { value: "2025-26", label: "2025-26" },
          
        ],
      },
    ],
    outputs: [
      { id: "totalIncome", label: "Total Income", format: "currency", description: "Gross employment income" },
      { id: "allowances", label: "Total Allowances", format: "currency", description: "Basic + dependent deductions" },
      { id: "netChargeableIncome", label: "Net Chargeable Income", format: "currency", description: "Income minus allowances and MPF" },
      { id: "salariesTax", label: "Salaries Tax", format: "currency", description: "Progressive or standard rate, whichever is lower" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of income" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after salaries tax" },
    ],
    formulas: [
      { id: "hk_salaries", name: "Salaries Tax", formula: "Progressive: 2% on first $50k, 6% next $50k, 10% next $50k, 14% next $50k, 17% remainder OR Standard: 15% on net income", description: "Whichever is lower applies" },
    ],
    examples: [
      {
        title: "HK$500,000 Income, MPF $18,000, Married, 1 Child, 2024/25",
        inputs: { annualIncome: 500000, mpfContributions: 18000, maritalStatus: "married", dependentChildren: 1, taxYear: "2024-25" },
        outputs: { totalIncome: 500000, allowances: 276000, netChargeableIncome: 206000, salariesTax: 11640, effectiveRate: 2.3, takeHomePay: 488360 },
        explanation: "Basic allowance $132k + Married $264k + Child $74k = $264k (capped). Net chargeable = $500k - $18k - $264k = $218k. Progressive: $50k×2% + $50k×6% + $50k×10% + $50k×14% + $18k×17% = $12,640. Standard: $218k×15% = $32,700. Lower: $12,640."
      },
    ],
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
      {
        id: "assessableProfits",
        label: "Assessable Profits",
        type: "number",
        required: true,
        placeholder: "Enter assessable profits",
        helpText: "Net profits after deductions",
        validation: { min: 0, step: 1000 },
      },
      {
        id: "businessType",
        label: "Business Type",
        type: "select",
        required: true,
        defaultValue: "corporation",
        options: [
          { value: "corporation", label: "Corporation" },
          { value: "unincorporated", label: "Unincorporated Business" },
        ],
      },
      {
        id: "taxYear",
        label: "Tax Year",
        type: "select",
        required: true,
        defaultValue: "2025-26",
        options: [
          { value: "2024-25", label: "2024-25" },
          { value: "2025-26", label: "2025-26" },
          
        ],
      },
    ],
    outputs: [
      { id: "profitsTax", label: "Profits Tax", format: "currency", description: "Tax on business profits" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of profits" },
    ],
    formulas: [
      { id: "hk_profits", name: "Profits Tax Rate", formula: "Corporations: 16.5% | Unincorporated: 15%", description: "Standard profits tax rates" },
    ],
    examples: [
      {
        title: "HK$1,000,000 Profits, Corporation",
        inputs: { assessableProfits: 1000000, businessType: "corporation", taxYear: "2024-25" },
        outputs: { profitsTax: 165000, effectiveRate: 16.5 },
        explanation: "HK$1,000,000 x 16.5% = HK$165,000."
      },
    ],
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
      {
        id: "residentStatus",
        label: "Residency Status",
        type: "select",
        required: true,
        defaultValue: "resident",
        options: [
          { value: "resident", label: "Resident Individual" },
          { value: "non_resident", label: "Non-Resident Individual" },
        ],
      },
      {
        id: "annualIncome",
        label: "Annual Income",
        type: "number",
        required: true,
        placeholder: "Enter your annual income",
        validation: { min: 0, step: 1000 },
      },
      {
        id: "donations",
        label: "Qualifying Donations",
        type: "number",
        required: false,
        defaultValue: 0,
        placeholder: "Enter qualifying donations (2.5x deductible)",
        helpText: "Donations to approved institutions are deductible at 250% for resident taxpayers",
        validation: { min: 0, step: 1000 },
      },
      {
        id: "taxYear",
        label: "Year of Assessment",
        type: "select",
        required: true,
        defaultValue: "2025",
        options: [
          { value: "2024", label: "2024 (YA 2025)" },
          { value: "2025", label: "2025 (YA 2026)" },
          { value: "2026", label: "2026 (YA 2027)" },
        ],
      },
    ],
    outputs: [
      { id: "incomeTax", label: "Income Tax", format: "currency", description: "Total tax liability" },
      { id: "effectiveRate", label: "Effective Rate", format: "percentage", description: "Tax as percentage of gross income" },
      { id: "takeHomePay", label: "Take-Home Pay", format: "currency", description: "Income after tax" },
    ],
    formulas: [
      { id: "sg_resident", name: "Resident Rates", formula: "Progressive rates from 0% to 24%", description: "For resident individuals" },
      { id: "sg_non_resident", name: "Non-Resident Rates", formula: "Flat 24% on gross income", description: "For non-residents" },
    ],
    examples: [
      {
        title: "Resident, S$80,000 Annual Income, 2024",
        inputs: { residentStatus: "resident", annualIncome: 80000, donations: 0, taxYear: "2024" },
        outputs: { incomeTax: 2500, effectiveRate: 3.1, takeHomePay: 77500 },
        explanation: "Progressive rates with reliefs applied."
      },
    ],
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
      {
        id: "amount",
        label: "Amount",
        type: "number",
        required: true,
        placeholder: "Enter amount",
        validation: { min: 0, step: 0.01 },
      },
      {
        id: "gstRate",
        label: "GST Rate",
        type: "select",
        required: true,
        defaultValue: "9",
        options: [
          { value: "0", label: "0% - GST Exempt / Zero-Rated" },
          { value: "9", label: "9% - Standard GST (2024+)" },
        ],
      },
      {
        id: "calculationType",
        label: "Calculation Type",
        type: "select",
        required: true,
        defaultValue: "exclusive",
        options: [
          { value: "exclusive", label: "Add GST (GST Exclusive)" },
          { value: "inclusive", label: "Remove GST (GST Inclusive)" },
        ],
      },
    ],
    outputs: [
      { id: "gstAmount", label: "GST Amount", format: "currency", description: "GST at selected rate" },
      { id: "totalAmount", label: "Total Amount", format: "currency", description: "Amount including GST" },
      { id: "netAmount", label: "Net Amount", format: "currency", description: "Amount excluding GST" },
    ],
    formulas: [
      { id: "gst_sg", name: "GST Calculation", formula: "Amount × 9%", description: "Singapore GST rate as of 2024" },
    ],
    examples: [
      {
        title: "S$1,000 with 9% GST",
        inputs: { amount: 1000, gstRate: "9", calculationType: "exclusive" },
        outputs: { gstAmount: 90, totalAmount: 1090, netAmount: 1000 },
        explanation: "S$1,000 + S$90 GST = S$1,090 total."
      },
    ],
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
      {
        id: "propertyPrice",
        label: "Property Price",
        type: "number",
        required: true,
        placeholder: "Enter property price",
        validation: { min: 0, step: 1000 },
      },
      {
        id: "buyerType",
        label: "Buyer Type",
        type: "select",
        required: true,
        defaultValue: "citizen",
        options: [
          { value: "citizen", label: "Singapore Citizen" },
          { value: "pr", label: "Permanent Resident" },
          { value: "foreigner", label: "Foreigner" },
        ],
      },
      {
        id: "propertyType",
        label: "Property Type",
        type: "select",
        required: true,
        defaultValue: "residential",
        options: [
          { value: "residential", label: "Residential" },
          { value: "commercial", label: "Commercial" },
        ],
      },
    ],
    outputs: [
      { id: "stampDuty", label: "Stamp Duty", format: "currency", description: "BSD + ABD (if applicable)" },
      { id: "totalCost", label: "Total Cost", format: "currency", description: "Property price + stamp duty" },
    ],
    formulas: [
      { id: "bsd", name: "BSD", formula: "1% on first S$180,000, 2% on next S$180,000, 3% on remainder", description: "Buyer's Stamp Duty for residential" },
      { id: "abd", name: "ABD", formula: "Additional Buyer's Stamp Duty for citizens (0-15%), PRs (5-15%), foreigners (15-20%)", description: "Applies to residential property purchases" },
    ],
    examples: [
      {
        title: "S$1,000,000 Residential, Citizen",
        inputs: { propertyPrice: 1000000, buyerType: "citizen", propertyType: "residential" },
        outputs: { stampDuty: 25000, totalCost: 1025000 },
        explanation: "BSD: 1% x $180,000 + 2% x $180,000 + 3% x $640,000 = $25,000."
      },
    ],
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
      { id: "taxYear", label: "Tax Year", type: "select", required: true, defaultValue: "2025", options: [
        { value: "2025", label: "2025" }, { value: "2026", label: "2026" }
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
  },

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
      { id: "taxYear", label: "Year of Assessment", type: "select", required: false, defaultValue: "2025-26", options: [ { value: "2024/25", label: "2024/25" }, { value: "2025/26", label: "2025/26" } ] }
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
  },

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
      { id: "taxYear", label: "Year of Assessment", type: "select", required: true, defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" } ] }
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
      { id: "taxYear", label: "Year of Assessment", type: "select", required: true, defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" } ] }
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
      { id: "taxYear", label: "Year of Assessment", type: "select", required: true, defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" } ] }
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
      { id: "taxYear", label: "Year of Assessment", type: "select", required: true, defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" } ] }
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
      { id: "taxYear", label: "Year of Assessment", type: "select", required: true, defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" } ] }
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
      { id: "taxYear", label: "Year of Assessment", type: "select", required: true, defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" } ] }
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
  },

  // Hong Kong - Stamp Duty Calculator
  {
    id: "hong-kong-stamp-duty-stamp-duty-calculator",
    countrySlug: "hong-kong",
    categorySlug: "stamp-duty",
    calculatorSlug: "stamp-duty-calculator",
    name: "Stamp Duty Calculator",
    description: "Calculate stamp duty for Hong Kong property purchases using Scale 2 rates.",
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
      { id: "hk_stamp", name: "Stamp Duty Scale 2", formula: "Flat $100 up to $4M, then 1.5% / 2.25% / 3% / 3.75% / 4.25% progressive", description: "Residential property stamp duty" }
    ],
    examples: [
      { title: "HK$5,000,000 Residential, Citizen", inputs: { propertyPrice: 5000000, buyerType: "citizen", propertyType: "residential" }, outputs: { stampDuty: 87500, totalCost: 5087500 }, explanation: "Scale 2: $100 + 1.5% on $500k + 2.25% on $500k + 3% on $500k = $87,500." }
    ]
  },
];
