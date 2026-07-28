const fs = require('fs');
const file = 'src/config/taxRules.ts';
let text = fs.readFileSync(file, 'utf8');

// Fix existing HK salaries tax rule: change defaultValue to match option value, remove 2026/27
text = text.replace(
  /(hong-kong-salaries-tax-salaries-tax-calculator[\s\S]*?defaultValue: "2025\/26",[\s\S]*?options: \[[\s\S]*?)(\{ value: "2026\/27", label: "2026\/27" \},)/,
  '$1'
);
text = text.replace(
  /(hong-kong-salaries-tax-salaries-tax-calculator[\s\S]*?)defaultValue: "2025\/26"/,
  '$1defaultValue: "2025-26"'
);

// Fix existing HK profits tax rule if it has 2026/27
text = text.replace(
  /(hong-kong-profits-tax-profits-tax-calculator[\s\S]*?defaultValue: "2025\/26",[\s\S]*?options: \[[\s\S]*?)(\{ value: "2026\/27", label: "2026\/27" \},)/,
  '$1'
);
text = text.replace(
  /(hong-kong-profits-tax-profits-tax-calculator[\s\S]*?)defaultValue: "2025\/26"/,
  '$1defaultValue: "2025-26"'
);

// Fix existing HK property tax rule
text = text.replace(
  /(hong-kong-property-tax-property-tax-calculator[\s\S]*?defaultValue: "2025\/26",[\s\S]*?options: \[[\s\S]*?)(\{ value: "2026\/27", label: "2026\/27" \},)/,
  '$1'
);
text = text.replace(
  /(hong-kong-property-tax-property-tax-calculator[\s\S]*?)defaultValue: "2025\/26"/,
  '$1defaultValue: "2025-26"'
);

// Fix newly added HK rules: change slash values to dashes
text = text.replace(
  /(hong-kong-salaries-tax-salary-tax-computation[\s\S]*?)defaultValue: "2025\/26", options: \[ \{ value: "2024\/25", label: "2024-25" \}, \{ value: "2025\/26", label: "2025-26" \}/,
  '$1defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" }'
);
text = text.replace(
  /(hong-kong-salaries-tax-salary-tax-computation[\s\S]*?taxYear: "2025\/26")/g,
  '$1'.replace(/taxYear: "2025\/26"/g, 'taxYear: "2025-26"')
);

text = text.replace(
  /(hong-kong-salaries-tax-hk-net-salary-calculator[\s\S]*?)defaultValue: "2025\/26", options: \[ \{ value: "2024\/25", label: "2024-25" \}, \{ value: "2025\/26", label: "2025-26" \}/,
  '$1defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" }'
);

text = text.replace(
  /(hong-kong-salaries-tax-hong-kong-tax-calculator-for-expats[\s\S]*?)defaultValue: "2025\/26", options: \[ \{ value: "2024\/25", label: "2024-25" \}, \{ value: "2025\/26", label: "2025-26" \}/,
  '$1defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" }'
);

text = text.replace(
  /(hong-kong-salaries-tax-hong-kong-income-tax-for-foreigners-calculator[\s\S]*?)defaultValue: "2025\/26", options: \[ \{ value: "2024\/25", label: "2024-25" \}, \{ value: "2025\/26", label: "2025-26" \}/,
  '$1defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" }'
);

text = text.replace(
  /(hong-kong-profits-tax-hk-corporate-tax-calculator[\s\S]*?)defaultValue: "2025\/26", options: \[ \{ value: "2024\/25", label: "2024-25" \}, \{ value: "2025\/26", label: "2025-26" \}/,
  '$1defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" }'
);

text = text.replace(
  /(hong-kong-profits-tax-profit-tax-computation[\s\S]*?)defaultValue: "2025\/26", options: \[ \{ value: "2024\/25", label: "2024-25" \}, \{ value: "2025\/26", label: "2025-26" \}/,
  '$1defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" }'
);

text = text.replace(
  /(hong-kong-stamp-duty-hk-property-stamp-duty-calculator[\s\S]*?)defaultValue: "2025\/26", options: \[ \{ value: "2024\/25", label: "2024-25" \}, \{ value: "2025\/26", label: "2025-26" \}/,
  '$1defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" }'
);

text = text.replace(
  /(hong-kong-stamp-duty-rental-stamp-duty-calculator[\s\S]*?)defaultValue: "2025\/26", options: \[ \{ value: "2024\/25", label: "2024-25" \}, \{ value: "2025\/26", label: "2025-26" \}/,
  '$1defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" }'
);

text = text.replace(
  /(hong-kong-stamp-duty-first-registration-tax-calculator[\s\S]*?)defaultValue: "2025\/26", options: \[ \{ value: "2024\/25", label: "2024-25" \}, \{ value: "2025\/26", label: "2025-26" \}/,
  '$1defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" }'
);

// Fix HK property tax new rules
text = text.replace(
  /(hong-kong-property-tax-property-tax-calculator[\s\S]*?)defaultValue: "2025\/26", options: \[ \{ value: "2024\/25", label: "2024-25" \}, \{ value: "2025\/26", label: "2025-26" \}/,
  '$1defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" }'
);

text = text.replace(
  /(hong-kong-property-tax-hk-rental-tax-deduction-calculator[\s\S]*?)defaultValue: "2025\/26", options: \[ \{ value: "2024\/25", label: "2024-25" \}, \{ value: "2025\/26", label: "2025-26" \}/,
  '$1defaultValue: "2025-26", options: [ { value: "2024-25", label: "2024-25" }, { value: "2025-26", label: "2025-26" }'
);

// Add missing HK stamp duty calculator rule before the last rule
const lastIdx = text.lastIndexOf('];');
if (lastIdx !== -1) {
  const missingRule = `
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
`;
  text = text.slice(0, lastIdx) + missingRule + text.slice(lastIdx);
}

fs.writeFileSync(file, text);
console.log('Fixed HK tax rules: standardized taxYear values to dashes, removed 2026/27, added missing stamp duty calculator');
