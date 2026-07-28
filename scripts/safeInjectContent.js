const fs=require('fs');
const file='src/config/calculatorContent.ts';
let text=fs.readFileSync(file,'utf8');

const add = `
  "hong-kong-salaries-tax-salary-tax-computation": {
    "howToUse": { "title": "How to Use", "html": "<p>Use this Hong Kong Salary Tax Computation tool to get a detailed breakdown of your salaries tax.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Total Income:</strong> Gross employment income. <strong>Salaries Tax:</strong> Tax computed under progressive or standard rate, whichever is lower.</p>" },
    "formula": { "title": "Formula", "html": "<p>Salaries Tax = min(progressive tax, standard rate x net chargeable income). Progressive rates: 2% / 6% / 10% / 14% / 17%.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Progressive: 2% / 6% / 10% / 14% / 17%. Standard: 15% on net chargeable income.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Forgetting to include MPF contributions.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/hong-kong/salaries-tax/salaries-tax-calculator'>Salaries Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/blogs/hong-kong-salaries-tax-guide'>Salaries Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.ird.gov.hk'>Hong Kong IRD</a>" },
    "faqSchema": { "How are salaries tax deductions applied?":"Deductions and allowances reduce your net chargeable income before tax calculation." }
  },
  "hong-kong-salaries-tax-hk-net-salary-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate your take-home pay after tax and MPF in Hong Kong.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Take-Home Pay:</strong> Income after salaries tax.</p>" },
    "formula": { "title": "Formula", "html": "<p>Net pay = annual income - salaries tax - MPF contributions.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Progressive: 2% / 6% / 10% / 14% / 17%. Standard: 15%.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Ignoring MPF contributions.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/hong-kong/salaries-tax/salaries-tax-calculator'>Salaries Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/blogs/hong-kong-mpf-tax-guide'>MPF Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.ird.gov.hk'>Hong Kong IRD</a>" },
    "faqSchema": { "What affects take-home pay in Hong Kong?":"Salaries tax and MPF contributions reduce your take-home pay." }
  },
  "hong-kong-salaries-tax-hong-kong-tax-calculator-for-expats": {
    "howToUse": { "title": "How to Use", "html": "<p>Estimate your Hong Kong tax as a foreign employee or expat.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Salaries Tax:</strong> Only Hong Kong-sourced income is taxable.</p>" },
    "formula": { "title": "Formula", "html": "<p>Same progressive/standard calculation. Only HK-sourced income is taxable.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Progressive: 2% / 6% / 10% / 14% / 17%. Standard: 15%.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Including overseas income.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/hong-kong/salaries-tax/salaries-tax-calculator'>Salaries Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/blogs/hong-kong-tax-residency'>Tax Residency Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.ird.gov.hk'>Hong Kong IRD</a>" },
    "faqSchema": { "Do expats pay tax in Hong Kong?":"Yes, on Hong Kong-sourced employment income." }
  },
  "hong-kong-salaries-tax-hong-kong-income-tax-for-foreigners-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate income tax for foreigners working in Hong Kong.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Net Chargeable Income:</strong> Income minus allowances and MPF.</p>" },
    "formula": { "title": "Formula", "html": "<p>NAV = assessable income - deductions - allowances. Tax = min(progressive, standard x NAV).</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Progressive: 2% / 6% / 10% / 14% / 17%. Standard: 15%.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Forgetting allowable deductions.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/hong-kong/salaries-tax/salaries-tax-calculator'>Salaries Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/blogs/hong-kong-tax-residency'>Tax Residency Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.ird.gov.hk'>Hong Kong IRD</a>" },
    "faqSchema": { "What taxes do foreigners pay in Hong Kong?":"Foreigners pay salaries tax on HK-sourced employment income and MPF." }
  },
  "hong-kong-profits-tax-hk-corporate-tax-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate corporate tax for Hong Kong limited companies.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Profits Tax:</strong> 16.5% for corporations, 15% for unincorporated.</p>" },
    "formula": { "title": "Formula", "html": "<p>Corporations: 16.5%. First $2M at 8.25%. Unincorporated: 15%.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Two-tiered: 8.25% on first $2M, remainder 16.5%.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Including overseas profits.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/hong-kong/profits-tax/profits-tax-calculator'>Profits Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/hong-kong/profits-tax/profits-tax-guide'>Profits Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.ird.gov.hk'>Hong Kong IRD</a>" },
    "faqSchema": { "What is the corporate tax rate in Hong Kong?":"Corporations pay 16.5%. Unincorporated pay 15%. Only HK-sourced profits are taxable." }
  },
  "hong-kong-profits-tax-profit-tax-computation": {
    "howToUse": { "title": "How to Use", "html": "<p>Get a detailed breakdown of your Hong Kong profit tax computation.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Profits Tax:</strong> Tax on business profits under the territorial system.</p>" },
    "formula": { "title": "Formula", "html": "<p>Profits Tax = assessable profits x rate.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Two-tiered: 8.25% on first $2M, remainder 16.5%.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Double-claiming deductions.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/hong-kong/profits-tax/profits-tax-calculator'>Profits Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/hong-kong/profits-tax'>Profits Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.ird.gov.hk'>Hong Kong IRD</a>" },
    "faqSchema": { "What is assessable profits?":"Net profits arising from or derived from Hong Kong, after allowable deductions." }
  },
  "hong-kong-stamp-duty-hk-property-stamp-duty-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate Hong Kong property stamp duty.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Stamp Duty:</strong> Based on Scale 2 rates.</p>" },
    "formula": { "title": "Formula", "html": "<p>Scale 2: Flat $100 up to $4M, then progressive up to 4.25%.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Tiered rates by price band.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Using wrong buyer category.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/hong-kong/stamp-duty/stamp-duty-calculator'>Stamp Duty Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/blogs/hong-kong-stamp-duty-guide'>Stamp Duty Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.ird.gov.hk'>Hong Kong IRD</a>" },
    "faqSchema": { "What is stamp duty on residential property in Hong Kong?":"Scale 2 rates apply." }
  },
  "hong-kong-stamp-duty-stamp-duty-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Estimate stamp duty for Hong Kong property purchases.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Stamp Duty:</strong> Based on Scale 2.</p>" },
    "formula": { "title": "Formula", "html": "<p>Scale 2 tiered tax.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Flat $100 up to $4M, then 1.5% / 2.25% / 3% / 3.75% / 4.25%.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Missing ABD for non-PR buyers.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/hong-kong/stamp-duty/hk-property-stamp-duty-calculator'>HK Property Stamp Duty</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/blogs/hong-kong-stamp-duty-guide'>Stamp Duty Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.ird.gov.hk'>Hong Kong IRD</a>" },
    "faqSchema": { "How is HK stamp duty calculated?":"It is calculated using Scale 2 rates." }
  },
  "hong-kong-stamp-duty-rental-stamp-duty-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate stamp duty on rental agreements and leases in Hong Kong.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Stamp Duty:</strong> Fixed amount based on lease term.</p>" },
    "formula": { "title": "Formula", "html": "<p>Lease stamp duty is a fixed amount: $5 / $10 / $20 depending on term.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Fixed: $5 / $10 / $20 depending on term.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Using property purchase rates for leases.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/hong-kong/stamp-duty/stamp-duty-calculator'>Stamp Duty Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/blogs/hong-kong-stamp-duty-guide'>Stamp Duty Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.ird.gov.hk'>Hong Kong IRD</a>" },
    "faqSchema": { "What is stamp duty on a rental agreement in Hong Kong?":"It is a fixed amount based on lease term." }
  },
  "hong-kong-stamp-duty-first-registration-tax-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate first registration tax for Hong Kong vehicles.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>First Registration Tax:</strong> One-time tax on vehicle first registration. EVs may qualify for exemptions.</p>" },
    "formula": { "title": "Formula", "html": "<p>FRT is tiered by vehicle value. EVs may receive full or partial waivers.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Tiered by value and fuel type. EVs enjoy concessions.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Using petrol rates for EVs.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/hong-kong/stamp-duty/stamp-duty-calculator'>Stamp Duty Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/blogs/hong-kong-car-tax-guide'>Hong Kong Car Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.gov.hk'>Transport Department</a>" },
    "faqSchema": { "Is there a First Registration Tax exemption for electric vehicles?":"Yes, EVs enjoy full or partial FRT waiver." }
  },
  "hong-kong-property-tax-property-tax-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate Hong Kong property tax on rental income. Enter annual rental income and any irrecoverable rent.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Property Tax:</strong> 15% on net assessable value after standard deduction.</p>" },
    "formula": { "title": "Formula", "html": "<p>NAV = Gross - 20% standard deduction - irrecoverable. Tax = NAV x 15%.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Flat 15% on net assessable value.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Forgetting the 20% standard deduction.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/hong-kong/property-tax/hk-rental-tax-deduction-calculator'>HK Rental Tax Deduction Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/blogs/hong-kong-property-tax-guide'>Property Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.ird.gov.hk'>Hong Kong IRD</a>" },
    "faqSchema": { "What is the property tax rate in Hong Kong?":"Standard rate is 15% on net assessable value after deductions." }
  },
  "hong-kong-property-tax-hk-rental-tax-deduction-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Estimate rental tax deductions and property tax liability.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Net Assessable Value:</strong> After standard deduction and irrecoverable rent. <strong>Property Tax:</strong> 15% of NAV.</p>" },
    "formula": { "title": "Formula", "html": "<p>NAV = gross - 20% standard - irrecoverable. Tax = NAV x 15%.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Flat 15%.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Including capital improvements as repairs.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/hong-kong/property-tax/property-tax-calculator'>Property Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/blogs/hong-kong-property-tax-guide'>Property Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.ird.gov.hk'>Hong Kong IRD</a>" },
    "faqSchema": { "What can I deduct from rental income for HK property tax?":"20% standard deduction plus irrecoverable rent and allowable expenses." }
  },
  "united-states-income-tax-effective-tax-rate": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate your effective tax rate. Enter your income and taxes paid.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Effective Rate:</strong> Total tax divided by gross income.</p>" },
    "formula": { "title": "Formula", "html": "<p>Effective Rate = (Federal + State + FICA) / Gross Income x 100%.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>N/A - summary calculator.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Forgetting to include all tax components.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/united-states/income-tax/federal-income-tax'>Federal Income Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/united-states/income-tax'>Income Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.irs.gov'>IRS</a>" },
    "faqSchema": { "What is effective tax rate?":"Total tax as a percentage of gross income." }
  },
  "united-states-payroll-tax-fica-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate Social Security and Medicare taxes on your wages.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Social Security:</strong> 6.2% up to wage base. <strong>Medicare:</strong> 1.45% on all earnings.</p>" },
    "formula": { "title": "Formula", "html": "<p>SS = min(income, wage base) x 6.2%. Medicare = income x 1.45%. Additional Medicare = 0.9% over $200k.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>SS wage base: $176,100 (2025).</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Applying SS tax above wage base.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/united-states/payroll-tax/payroll-tax-calculator'>Payroll Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/united-states/payroll-tax'>Payroll Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.irs.gov'>IRS</a>" },
    "faqSchema": { "What is FICA tax?":"FICA is 6.2% Social Security + 1.45% Medicare." }
  },
  "united-states-payroll-tax-self-employment-tax": {
    "howToUse": { "title": "How to Use", "html": "<p>Estimate SE tax for freelancers and independent contractors.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>SE Tax:</strong> 15.3% of 92.35% of net earnings.</p>" },
    "formula": { "title": "Formula", "html": "<p>SE Tax = (net income x 92.35%) x 15.3%. Deductible portion = 50%.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>SS wage base: $176,100 (2025).</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Using gross instead of adjusted income.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/united-states/payroll-tax/payroll-tax-calculator'>Payroll Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/united-states/payroll-tax'>Payroll Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.irs.gov'>IRS</a>" },
    "faqSchema": { "What is self-employment tax?":"SE tax is 15.3% of 92.35% of net self-employment earnings." }
  },
  "united-states-corporate-tax-small-business-tax": {
    "howToUse": { "title": "How to Use", "html": "<p>Estimate taxes for pass-through business entities.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Corporate Tax:</strong> 0% for pass-through.</p>" },
    "formula": { "title": "Formula", "html": "<p>Pass-through entities are not taxed at the entity level.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>C-Corp: 21% flat. Pass-through: taxed at individual rates.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Confusing entity-level and owner-level tax.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/united-states/corporate-tax/corporate-tax-calculator'>Corporate Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/united-states/corporate-tax'>Corporate Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.irs.gov'>IRS</a>" },
    "faqSchema": { "Do small businesses pay corporate tax?":"Pass-through entities do not pay entity-level tax." }
  },
  "united-states-capital-gains-tax-ltcg-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate long-term capital gains tax on property or investments.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Capital Gains Tax:</strong> 0%, 15%, or 20% based on holding period and income.</p>" },
    "formula": { "title": "Formula", "html": "<p>Long-term gains: 0%, 15%, or 20%. Short-term: ordinary rates.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>LTCG: 0% up to ~$48k, 15% up to ~$519k, 20% above.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Treating short-term as long-term.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/united-states/capital-gains-tax/capital-gains-calculator'>Capital Gains Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/united-states/capital-gains-tax'>Capital Gains Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.irs.gov'>IRS</a>" },
    "faqSchema": { "What is long-term capital gains tax?":"Gains on assets held >1 year taxed at 0%, 15%, or 20%." }
  },
  "united-states-estate-tax-estate-tax-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Estimate federal estate tax liability. Enter estate value and marital status.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Estate Tax:</strong> 40% on taxable estate above exemption.</p>" },
    "formula": { "title": "Formula", "html": "<p>Taxable Estate = Estate Value - Exemption ($13.61M single / $27.22M married). Tax = 40% x taxable estate.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>40% flat on taxable estate.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Forgetting marital deduction.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/united-states/estate-tax/estate-tax-calculator'>Estate Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/united-states/estate-tax'>Estate Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.irs.gov'>IRS</a>" },
    "faqSchema": { "What is the federal estate tax exemption for 2025?":"$13.61 million per individual ($27.22 million for married couples)." }
  },
  "pakistan-income-tax-salary-tax-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate your Pakistan income tax on salary.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Income Tax:</strong> Progressive FBR slabs.</p>" },
    "formula": { "title": "Formula", "html": "<p>Progressive tax applied to taxable income.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Rates from 0% to 35%.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Using old slabs.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/pakistan/income-tax/income-tax-calculator'>Income Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/pakistan/income-tax'>Income Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.fbr.gov.pk'>FBR Pakistan</a>" },
    "faqSchema": { "How is salary tax calculated in Pakistan?":"Using FBR progressive slabs on annual taxable income." }
  },
  "pakistan-income-tax-business-income-tax-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate income tax for business and freelancers in Pakistan.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Income Tax:</strong> Progressive slabs on net business income.</p>" },
    "formula": { "title": "Formula", "html": "<p>Net business income taxed at applicable slab rates.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Same progressive slabs as salaried individuals.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Not deducting business expenses.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/pakistan/income-tax/income-tax-calculator'>Income Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/pakistan/income-tax'>Income Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.fbr.gov.pk'>FBR Pakistan</a>" },
    "faqSchema": { "How is business income tax calculated?":"Net business income is taxed at applicable progressive slab rates." }
  },
  "pakistan-income-tax-capital-gain-tax-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate capital gains tax on property and shares in Pakistan.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Capital Gains Tax:</strong> Rate depends on asset type and holding period.</p>" },
    "formula": { "title": "Formula", "html": "<p>Short-term: 10%. Long-term residential: 15%. Long-term commercial: 20%.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Rates vary by asset type and holding period.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Applying wrong rate.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/pakistan/property-tax'>Property Tax</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/pakistan/property-tax'>Property Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.fbr.gov.pk'>FBR Pakistan</a>" },
    "faqSchema": { "What is the capital gains tax rate in Pakistan?":"Short-term: 10%. Long-term property: 15%. Long-term shares: 20%." }
  },
  "pakistan-sales-tax-gst-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate GST inclusive or exclusive amounts.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>GST Amount:</strong> 18% of net amount.</p>" },
    "formula": { "title": "Formula", "html": "<p>GST = Amount x 18%.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Standard: 18%.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Using wrong rate for exempt goods.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/pakistan/sales-tax/sales-tax-calculator'>Sales Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/pakistan/sales-tax'>Sales Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.fbr.gov.pk'>FBR Pakistan</a>" },
    "faqSchema": { "What is the GST rate in Pakistan?":"18%." }
  },
  "pakistan-property-tax-property-tax-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate property tax in Pakistan by province.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Property Tax:</strong> Approx 0.5% to 1% of value.</p>" },
    "formula": { "title": "Formula", "html": "<p>Tax = Property Value x rate.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Residential: ~0.5%. Commercial: ~1%.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Using market value instead of annual value.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/pakistan/property-tax/token-tax-calculator'>Token Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/pakistan/property-tax'>Property Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.fbr.gov.pk'>FBR Pakistan</a>" },
    "faqSchema": { "How is property tax calculated?":"Provincial authorities levy tax based on annual value." }
  },
  "pakistan-property-tax-capital-gain-tax-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate capital gains tax on property sales in Pakistan.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Capital Gains Tax:</strong> 15% long-term residential, 20% commercial.</p>" },
    "formula": { "title": "Formula", "html": "<p>Long-term residential: 15%. Commercial: 20%. Short-term: 10%.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Short-term ≤1yr: 10%. Long-term residential: 15%. Commercial: 20%.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Missing cost basis.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/pakistan/property-tax/property-tax-calculator'>Property Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/pakistan/property-tax'>Property Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.fbr.gov.pk'>FBR Pakistan</a>" },
    "faqSchema": { "What is CGT on property?":"Long-term residential: 15%. Commercial: 20%. Short-term: 10%." }
  },
  "pakistan-property-tax-token-tax-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate token tax for property and vehicle registration.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Token Tax:</strong> Fixed fee based on token type.</p>" },
    "formula": { "title": "Formula", "html": "<p>Vehicle token based on engine capacity.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Based on engine capacity.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Wrong engine bracket.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/pakistan/vehicle-tax/vehicle-tax-calculator'>Vehicle Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/pakistan/vehicle-tax'>Vehicle Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.fbr.gov.pk'>FBR Pakistan</a>" },
    "faqSchema": { "What is token tax?":"A fixed fee for vehicle or property registration." }
  },
  "pakistan-property-tax-rental-income-tax-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate tax on rental income from property in Pakistan.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Taxable Income:</strong> Gross rent minus expenses.</p>" },
    "formula": { "title": "Formula", "html": "<p>Net rental = gross rent - expenses. Taxed at slab rates.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Progressive slabs from 0% to 35%.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Not claiming expenses.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/pakistan/income-tax/income-tax-calculator'>Income Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/pakistan/property-tax'>Property Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.fbr.gov.pk'>FBR Pakistan</a>" },
    "faqSchema": { "Is rental income taxable in Pakistan?":"Yes, net rental income is taxable at individual slab rates." }
  },
  "pakistan-vehicle-tax-vehicle-tax-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate vehicle token tax in Pakistan by province.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Vehicle Tax:</strong> Based on engine capacity and province.</p>" },
    "formula": { "title": "Formula", "html": "<p>Token tax = flat fee based on cc and province.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>&lt;800cc: $50. 800-1300cc: $100. 1300-1500cc: $150. 1500-1800cc: $200. 1800-2000cc: $300. 2000-2500cc: $400. &gt;2500cc: $500.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Wrong province rates.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/pakistan/vehicle-tax/sindh-vehicle-tax-calculator'>Sindh Vehicle Tax</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/pakistan/vehicle-tax'>Vehicle Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.fbr.gov.pk'>FBR Pakistan</a>" },
    "faqSchema": { "How much is token tax in Pakistan?":"PKR 50-$500 depending on engine capacity and province." }
  },
  "pakistan-vehicle-tax-sindh-vehicle-tax-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate Sindh vehicle token tax and transfer fees.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Vehicle Tax:</strong> Token tax. <strong>Transfer Fee:</strong> Ownership change fee.</p>" },
    "formula": { "title": "Formula", "html": "<p>Token tax based on engine capacity. Transfer fee based on value.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Engine capacity based tiers.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Confusing token tax with road tax.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/pakistan/vehicle-tax/vehicle-tax-calculator'>Vehicle Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/pakistan/vehicle-tax'>Vehicle Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.fbr.gov.pk'>FBR Pakistan</a>" },
    "faqSchema": { "What is Sindh vehicle token tax?":"Provincial token tax based on engine capacity." }
  },
  "pakistan-vehicle-tax-islamabad-vehicle-tax-calculator": {
    "howToUse": { "title": "How to Use", "html": "<p>Calculate Islamabad vehicle token tax.</p>" },
    "understandingResults": { "title": "Understanding Results", "html": "<p><strong>Vehicle Tax:</strong> Token tax amount.</p>" },
    "formula": { "title": "Formula", "html": "<p>Based on engine capacity and vehicle type.</p>" },
    "taxSlabs": { "title": "Tax Slabs", "html": "<p>Capacity based tiers.</p>" },
    "commonMistakes": { "title": "Common Mistakes", "html": "<ul class='list-disc pl-6 space-y-2'><li>Using wrong province rates.</li></ul>" },
    "relatedCalculators": { "title": "Related Calculators", "html": "<a href='/countries/pakistan/vehicle-tax/vehicle-tax-calculator'>Vehicle Tax Calculator</a>" },
    "suggestedArticles": { "title": "Suggested Articles", "html": "<a href='/countries/pakistan/vehicle-tax'>Vehicle Tax Guide</a>" },
    "officialResources": { "title": "Official Resources", "html": "<a href='https://www.fbr.gov.pk'>FBR Pakistan</a>" },
    "faqSchema": { "What is Islamabad token tax?":"ICT levies token tax on vehicles based on engine capacity." }
  }
`;

const end = text.lastIndexOf('\n};');
if (end === -1) { console.error('No closing }; found'); process.exit(1); }
text = text.slice(0, end) + ',' + add + '\n' + text.slice(end);
fs.writeFileSync(file, text);
console.log('Injected calculatorContent successfully');
