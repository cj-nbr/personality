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
          { value: "2023", label: "2023" },
          { value: "2024", label: "2024" },
          { value: "2025", label: "2025" },
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
        defaultValue: "2024",
        options: [
          { value: "2023", label: "2023 (YA 2023)" },
          { value: "2024", label: "2024 (YA 2024)" },
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
        defaultValue: "2024-25",
        options: [
          { value: "2023-24", label: "2023-24" },
          { value: "2024-25", label: "2024-25" },
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
        defaultValue: "2024-25",
        options: [
          { value: "2023-24", label: "2023-24" },
          { value: "2024-25", label: "2024-25" },
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
        defaultValue: "2024",
        options: [
          { value: "2023", label: "2023" },
          { value: "2024", label: "2024" },
          { value: "2025", label: "2025" },
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
        defaultValue: "2024-25",
        options: [
          { value: "2023-24", label: "2023-24" },
          { value: "2024-25", label: "2024-25" },
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
        defaultValue: "2024-25",
        options: [
          { value: "2023-24", label: "2023-24" },
          { value: "2024-25", label: "2024-25" },
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
        defaultValue: "2024",
        options: [
          { value: "2023", label: "2023" },
          { value: "2024", label: "2024" },
          { value: "2025", label: "2025" },
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
        defaultValue: "2024-25",
        options: [
          { value: "2023-24", label: "2023-24 (AY 2024-25)" },
          { value: "2024-25", label: "2024-25 (AY 2025-26)" },
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
        defaultValue: "2024-25",
        options: [
          { value: "2023-24", label: "2023-24" },
          { value: "2024-25", label: "2024-25" },
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
        defaultValue: "2024-25",
        options: [
          { value: "2023-24", label: "2023-24" },
          { value: "2024-25", label: "2024-25" },
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
        defaultValue: "2024-25",
        options: [
          { value: "2023-24", label: "2023-24" },
          { value: "2024-25", label: "2024-25" },
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
        defaultValue: "2024",
        options: [
          { value: "2023", label: "2023 (YA 2024)" },
          { value: "2024", label: "2024 (YA 2025)" },
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
