export interface RichCalculatorSection {
  title: string;
  html: string;
}

export interface RichCalculatorContent {
  howToUse: RichCalculatorSection;
  understandingResults: RichCalculatorSection;
  formula: RichCalculatorSection;
  taxSlabs: RichCalculatorSection;
  commonMistakes: RichCalculatorSection;
  relatedCalculators: RichCalculatorSection;
  suggestedArticles: RichCalculatorSection;
  officialResources: RichCalculatorSection;
  faqSchema: Record<string, string>;
}

export const calculatorContent: Record<string, RichCalculatorContent> = {
  "united-states-income-tax-federal-income-tax": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this United States Income Tax calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for United States. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>United States Income Tax slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/united-states\" class=\"block rounded border p-4 hover:border-primary transition\">More United States Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/united-states/income-tax\" class=\"block rounded border p-4 hover:border-primary transition\">Income Tax Guide</a>\n    <a href=\"/countries/united-states\" class=\"block rounded border p-4 hover:border-primary transition\">United States Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.irs.gov\" target=\"_blank\" rel=\"noopener noreferrer\">IRS</a></li><li><a href=\"https://www.usa.gov/taxes\" target=\"_blank\" rel=\"noopener noreferrer\">USAGov Taxes</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard deduction for Income Tax in United States?": "Standard deductions vary by country. Check the latest official guidelines for your jurisdiction.",
        "How to calculate Income Tax on salary in United States?": "Enter your annual income, select your tax year, and use the calculator to get an estimate.",
        "What are the Income Tax slabs in United States?": "Slabs vary by income level and tax year. The calculator shows the applicable rates."
    }
},

  "malaysia-income-tax-income-tax-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this Malaysia Income Tax calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for Malaysia. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>Malaysia Income Tax slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/malaysia\" class=\"block rounded border p-4 hover:border-primary transition\">More Malaysia Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/malaysia/income-tax\" class=\"block rounded border p-4 hover:border-primary transition\">Income Tax Guide</a>\n    <a href=\"/countries/malaysia\" class=\"block rounded border p-4 hover:border-primary transition\">Malaysia Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.hasil.gov.my\" target=\"_blank\" rel=\"noopener noreferrer\">LHDN Malaysia</a></li><li><a href=\"https://www.customs.gov.my\" target=\"_blank\" rel=\"noopener noreferrer\">Royal Malaysian Customs</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard deduction for Income Tax in Malaysia?": "Standard deductions vary by country. Check the latest official guidelines for your jurisdiction.",
        "How to calculate Income Tax on salary in Malaysia?": "Enter your annual income, select your tax year, and use the calculator to get an estimate.",
        "What are the Income Tax slabs in Malaysia?": "Slabs vary by income level and tax year. The calculator shows the applicable rates."
    }
},

  "malaysia-sst-sst-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this Malaysia SST calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for Malaysia. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>Malaysia SST slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/malaysia\" class=\"block rounded border p-4 hover:border-primary transition\">More Malaysia Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/malaysia/sst\" class=\"block rounded border p-4 hover:border-primary transition\">SST Guide</a>\n    <a href=\"/countries/malaysia\" class=\"block rounded border p-4 hover:border-primary transition\">Malaysia Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.hasil.gov.my\" target=\"_blank\" rel=\"noopener noreferrer\">LHDN Malaysia</a></li><li><a href=\"https://www.customs.gov.my\" target=\"_blank\" rel=\"noopener noreferrer\">Royal Malaysian Customs</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard Sst rate in Malaysia?": "Standard rates vary by country and type of goods/services.",
        "How to calculate Sst from total amount?": "Enter the total amount and select reverse calculation to extract the tax component.",
        "What are the different Sst rates in Malaysia?": "Rates may include standard, reduced, zero-rated, and exempt categories."
    }
},

  "new-zealand-income-tax-income-tax-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this New Zealand Income Tax calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for New Zealand. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>New Zealand Income Tax slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/new-zealand\" class=\"block rounded border p-4 hover:border-primary transition\">More New Zealand Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/new-zealand/income-tax\" class=\"block rounded border p-4 hover:border-primary transition\">Income Tax Guide</a>\n    <a href=\"/countries/new-zealand\" class=\"block rounded border p-4 hover:border-primary transition\">New Zealand Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.ird.govt.nz\" target=\"_blank\" rel=\"noopener noreferrer\">IRD NZ</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard deduction for Income Tax in New Zealand?": "Standard deductions vary by country. Check the latest official guidelines for your jurisdiction.",
        "How to calculate Income Tax on salary in New Zealand?": "Enter your annual income, select your tax year, and use the calculator to get an estimate.",
        "What are the Income Tax slabs in New Zealand?": "Slabs vary by income level and tax year. The calculator shows the applicable rates."
    }
},

  "new-zealand-gst-gst-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this New Zealand GST calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for New Zealand. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>New Zealand GST slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/new-zealand\" class=\"block rounded border p-4 hover:border-primary transition\">More New Zealand Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/new-zealand/gst\" class=\"block rounded border p-4 hover:border-primary transition\">GST Guide</a>\n    <a href=\"/countries/new-zealand\" class=\"block rounded border p-4 hover:border-primary transition\">New Zealand Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.ird.govt.nz\" target=\"_blank\" rel=\"noopener noreferrer\">IRD NZ</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard Gst rate in New Zealand?": "Standard rates vary by country and type of goods/services.",
        "How to calculate Gst from total amount?": "Enter the total amount and select reverse calculation to extract the tax component.",
        "What are the different Gst rates in New Zealand?": "Rates may include standard, reduced, zero-rated, and exempt categories."
    }
},

  "pakistan-income-tax-income-tax-calculator": {
    "howToUse": {
        "title": "How to Use the Pakistan Income Tax Calculator",
        "html": "<p>Use this <strong>Pakistan income tax calculator</strong> to estimate your FBR tax liability:</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Enter your <strong>annual income</strong> in PKR from all sources including salary, business, and investments.</li><li>Select your <strong>tax year</strong> (e.g., 2024/25, 2023/24) to apply the correct FBR tax slabs.</li><li>Choose your <strong>taxpayer category</strong>: salaried individual, freelancer, or business.</li><li>Enter any <strong>allowable deductions</strong> such as charitable donations, life insurance premiums, or pension contributions.</li><li>Click <strong>Calculate</strong> to see your income tax, effective tax rate, and take-home pay.</li></ol><p>This <strong>tax calculator Pakistan</strong> supports both salaried individuals and businesses. Use our <a href=\"/countries/pakistan/income-tax\">Pakistan income tax guide</a> for more details on deductions and exemptions.</p>"
    },
    "understandingResults": {
        "title": "Understanding Your Pakistan Income Tax Results",
        "html": "<p><strong>Total Income:</strong> Your gross annual income before deductions.<br><strong>Allowable Deductions:</strong> Donations, insurance, pension, and other deductions under FBR rules.<br><strong>Taxable Income:</strong> Income minus allowable deductions.<br><strong>Income Tax:</strong> Computed using the applicable FBR progressive tax slabs.<br><strong>Effective Rate:</strong> Your total tax as a percentage of your total income.<br><strong>Take-Home Pay:</strong> Your income after income tax. Use our <a href=\"/countries/pakistan/income-tax/income-tax-calculator\">Pakistan tax calculator</a> to explore different scenarios.</p>"
    },
    "formula": {
        "title": "Pakistan Income Tax Formula",
        "html": "<p><strong>Taxable Income = Total Income - Allowable Deductions</strong></p><p>Income Tax is then computed using <strong>progressive tax slabs</strong> announced by FBR for the relevant tax year. Tax rates range from 0% to 35% depending on your taxable income bracket.</p><p>Use our <strong>Pakistan income tax calculator</strong> to apply this formula automatically with the latest FBR rates.</p>"
    },
    "taxSlabs": {
        "title": "Pakistan Income Tax Slabs for Salaried Individuals",
        "html": "<p>Pakistan uses progressive tax slabs for salaried individuals. The tax-free limit is PKR 600,000 per year for FY 2024/25. Tax slabs apply to taxable income after deductions.</p><h3 class=\"text-xl font-semibold mt-4 mb-2\">Example Tax Slabs (Salaried Individuals)</h3><table class=\"w-full text-left border-collapse mt-2\"><thead><tr class=\"border-b\"><th class=\"py-2\">Taxable Income (PKR)</th><th class=\"py-2\">Rate</th></tr></thead><tbody><tr><td class=\"py-2\">Up to 600,000</td><td class=\"py-2\">0%</td></tr><tr><td class=\"py-2\">600,001 - 1,200,000</td><td class=\"py-2\">5%</td></tr><tr><td class=\"py-2\">1,200,001 - 2,400,000</td><td class=\"py-2\">15%</td></tr><tr><td class=\"py-2\">2,400,001 - 3,600,000</td><td class=\"py-2\">25%</td></tr><tr><td class=\"py-2\">3,600,001 - 6,000,000</td><td class=\"py-2\">30%</td></tr><tr><td class=\"py-2\">Above 6,000,000</td><td class=\"py-2\">35%</td></tr></tbody></table><p>Use our <a href=\"/countries/pakistan/income-tax/income-tax-calculator\">Pakistan income tax calculator</a> to compute your exact tax based on the latest FBR slabs.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes to Avoid When Using the Pakistan Tax Calculator",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not including all income sources such as bonuses, dividends, and rental income.</li><li>Missing allowable deductions like charitable donations, life insurance premiums, and pension contributions.</li><li>Confusing the tax year (July 1 to June 30) with the calendar year.</li><li>Not filing a tax return even if you did not receive a notice from FBR.</li><li>Assuming agricultural income is always exempt - only certain types of agricultural income are exempt.</li></ul><p>Use our <strong>Pakistan income tax calculator</strong> to ensure you account for all deductions and calculate your tax accurately.</p>"
    },
    "relatedCalculators": {
        "title": "Related Pakistan Tax Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/pakistan/sales-tax/sales-tax-calculator\" class=\"block rounded border p-4 hover:border-primary transition\">Pakistan Sales Tax Calculator</a>\n    <a href=\"/countries/pakistan/income-tax/income-tax-calculator\" class=\"block rounded border p-4 hover:border-primary transition\">Pakistan Income Tax Calculator</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles on Pakistan Tax",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/blogs/pakistan-income-tax-guide\" class=\"block rounded border p-4 hover:border-primary transition\">Pakistan Income Tax Guide</a>\n    <a href=\"/blogs/pakistan-fbr-tax-slabs\" class=\"block rounded border p-4 hover:border-primary transition\">FBR Tax Slabs Explained</a>\n    <a href=\"/blogs/pakistan-tax-filing-guide\" class=\"block rounded border p-4 hover:border-primary transition\">Pakistan Tax Filing Guide</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.fbr.gov.pk\" target=\"_blank\" rel=\"noopener noreferrer\">FBR Official Website</a></li><li><a href=\"https://iris.fbr.gov.pk\" target=\"_blank\" rel=\"noopener noreferrer\">FBR Iris Portal</a></li><li><a href=\"https://www.fbr.gov.pk/tax-information/income-tax-rates\" target=\"_blank\" rel=\"noopener noreferrer\">FBR Income Tax Rates</a></li></ul>"
    },
    "faqSchema": {
        "How much tax is deducted from salary in Pakistan?": "Tax deduction from salary in Pakistan depends on your taxable income and FBR tax slabs. Monthly tax is calculated based on annual taxable income after deductions.",
        "What is the tax-free limit for salary in Pakistan?": "The tax-free limit for salaried individuals in Pakistan is PKR 600,000 per year for the 2024/25 tax year.",
        "What are the FBR tax slabs for FY 2026–27?": "FBR tax slabs for salaried individuals range from 0% to 35% on annual taxable income. The slabs are progressive, with higher incomes taxed at higher rates.",
        "How is monthly salary tax calculated in Pakistan?": "Monthly salary tax is calculated by dividing your annual taxable income by 12, then applying the applicable FBR tax slab. Employers deduct tax at source under Section 159.",
        "Are medical and house rent allowances taxable?": "Medical allowance and house rent allowance in Pakistan are generally taxable as part of your salary income, though certain exemptions may apply.",
        "How do I calculate tax if I change jobs mid-year?": "If you change jobs mid-year, your total income from both employers is combined for the year, and tax is calculated on the aggregate income.",
        "Who qualifies as a Salaried Individual for FBR?": "A salaried individual for FBR purposes is any person receiving income from employment, pension, or annuity.",
        "What is the tax rate for freelancers and sole proprietors in Pakistan?": "Freelancers and sole proprietors are taxed at the same progressive rates as individuals, ranging from 0% to 35% on net business income.",
        "Can I use an online tax calculator for official tax filing?": "Our online tax calculator Pakistan is for estimation and planning only. For official filing, use the FBR Iris portal.",
        "What is the penalty for non-filing tax in Pakistan?": "FBR may impose penalties up to PKR 100,000 or more for non-filing. Non-filers also face higher withholding tax rates."
    }
  },

  "pakistan-sales-tax-sales-tax-calculator": {
    "howToUse": {
        "title": "How to Use the Pakistan Sales Tax Calculator",
        "html": "<p>Use this <strong>Pakistan sales tax calculator</strong> to estimate sales tax on goods and services:</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Enter the <strong>taxable value</strong> of goods or services in PKR.</li><li>Select the <strong>sales tax rate</strong> (standard 18% or reduced rate if applicable).</li><li>Choose whether you want to add tax to a net amount or extract tax from a gross amount.</li><li>Click <strong>Calculate</strong> to see the sales tax amount and total value.</li></ol><p>This <strong>sales tax calculator pakistan</strong> uses the standard 18% sales tax rate. Use our <a href=\"/countries/pakistan/sales-tax\">Pakistan sales tax guide</a> for more information.</p>"
    },
    "understandingResults": {
        "title": "Understanding Your Pakistan Sales Tax Results",
        "html": "<p><strong>Taxable Value:</strong> The net value of goods or services before tax.<br><strong>Sales Tax Rate:</strong> The applicable rate, typically 18% for most goods and services.<br><strong>Sales Tax Amount:</strong> The tax computed on the taxable value.<br><strong>Total Value:</strong> Taxable value plus sales tax. Use our <a href=\"/countries/pakistan/sales-tax/sales-tax-calculator\">Pakistan GST calculator</a> for your calculations.</p>"
    },
    "formula": {
        "title": "Pakistan Sales Tax Formula",
        "html": "<p><strong>Sales Tax = Taxable Value x Sales Tax Rate</strong></p><p>For example, if the taxable value is PKR 1,000 and the sales tax rate is 18%, the sales tax is PKR 180, and the total amount payable is PKR 1,180.</p><p>Use our <strong>Pakistan sales tax calculator</strong> to apply this formula automatically.</p>"
    },
    "taxSlabs": {
        "title": "Pakistan Sales Tax Rates",
        "html": "<p>Pakistan imposes sales tax on most goods and services at the <strong>standard rate of 18%</strong>. Some items are exempt or taxed at reduced rates.</p><h3 class=\"text-xl font-semibold mt-4 mb-2\">Common Sales Tax Rates</h3><table class=\"w-full text-left border-collapse mt-2\"><thead><tr class=\"border-b\"><th class=\"py-2\">Category</th><th class=\"py-2\">Rate</th></tr></thead><tbody><tr><td class=\"py-2\">Most Goods and Services</td><td class=\"py-2\">18%</td></tr><tr><td class=\"py-2\">Essential Items (e.g., unprocessed food)</td><td class=\"py-2\">Exempt</td></tr><tr><td class=\"py-2\">Reduced Rate Items</td><td class=\"py-2\">Varies by item</td></tr></tbody></table><p>Use our <a href=\"/countries/pakistan/sales-tax/sales-tax-calculator\">Pakistan GST calculator</a> to compute your sales tax.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes to Avoid When Using the Pakistan Sales Tax Calculator",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Applying the wrong sales tax rate to exempt or reduced-rate items.</li><li>Forgetting to register for sales tax when turnover exceeds the FBR threshold.</li><li>Missing sales tax filing deadlines, which can result in penalties.</li><li>Not maintaining proper records of sales tax collected and paid.</li></ul><p>Use our <strong>Pakistan sales tax calculator</strong> to estimate your liability accurately.</p>"
    },
    "relatedCalculators": {
        "title": "Related Pakistan Tax Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/pakistan/income-tax/income-tax-calculator\" class=\"block rounded border p-4 hover:border-primary transition\">Pakistan Income Tax Calculator</a>\n    <a href=\"/countries/pakistan/sales-tax/sales-tax-calculator\" class=\"block rounded border p-4 hover:border-primary transition\">Pakistan Sales Tax Calculator</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles on Pakistan Sales Tax",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/blogs/pakistan-sales-tax-guide\" class=\"block rounded border p-4 hover:border-primary transition\">Pakistan Sales Tax Guide</a>\n    <a href=\"/blogs/pakistan-gst-registration\" class=\"block rounded border p-4 hover:border-primary transition\">Pakistan GST Registration Guide</a>\n    <a href=\"/blogs/pakistan-tax-filing-guide\" class=\"block rounded border p-4 hover:border-primary transition\">Pakistan Tax Filing Guide</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.fbr.gov.pk\" target=\"_blank\" rel=\"noopener noreferrer\">FBR Official Website</a></li><li><a href=\"https://iris.fbr.gov.pk\" target=\"_blank\" rel=\"noopener noreferrer\">FBR Iris Portal</a></li><li><a href=\"https://www.fbr.gov.pk/tax-information/sales-tax\" target=\"_blank\" rel=\"noopener noreferrer\">FBR Sales Tax Information</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard Sales Tax rate in Pakistan?": "The standard sales tax rate in Pakistan is 18% on most goods and services. Some items are exempt or taxed at reduced rates.",
        "How to calculate Sales Tax from total amount?": "To extract sales tax from a gross amount, divide the total by 1 plus the tax rate, then subtract the net amount from the total.",
        "What are the different Sales Tax rates in Pakistan?": "Pakistan has a standard rate of 18%, reduced rates for certain items, and exemptions for essential goods like unprocessed food."
    }
  },

  "philippines-income-tax-income-tax-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this Philippines Income Tax calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for Philippines. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>Philippines Income Tax slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/philippines\" class=\"block rounded border p-4 hover:border-primary transition\">More Philippines Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/philippines/income-tax\" class=\"block rounded border p-4 hover:border-primary transition\">Income Tax Guide</a>\n    <a href=\"/countries/philippines\" class=\"block rounded border p-4 hover:border-primary transition\">Philippines Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.bir.gov.ph\" target=\"_blank\" rel=\"noopener noreferrer\">BIR Philippines</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard deduction for Income Tax in Philippines?": "Standard deductions vary by country. Check the latest official guidelines for your jurisdiction.",
        "How to calculate Income Tax on salary in Philippines?": "Enter your annual income, select your tax year, and use the calculator to get an estimate.",
        "What are the Income Tax slabs in Philippines?": "Slabs vary by income level and tax year. The calculator shows the applicable rates."
    }
},

  "philippines-vat-vat-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this Philippines VAT calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for Philippines. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>Philippines VAT slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/philippines\" class=\"block rounded border p-4 hover:border-primary transition\">More Philippines Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/philippines/vat\" class=\"block rounded border p-4 hover:border-primary transition\">VAT Guide</a>\n    <a href=\"/countries/philippines\" class=\"block rounded border p-4 hover:border-primary transition\">Philippines Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.bir.gov.ph\" target=\"_blank\" rel=\"noopener noreferrer\">BIR Philippines</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard Vat rate in Philippines?": "Standard rates vary by country and type of goods/services.",
        "How to calculate Vat from total amount?": "Enter the total amount and select reverse calculation to extract the tax component.",
        "What are the different Vat rates in Philippines?": "Rates may include standard, reduced, zero-rated, and exempt categories."
    }
},

  "united-kingdom-income-tax-income-tax-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this United Kingdom Income Tax calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for United Kingdom. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>United Kingdom Income Tax slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/united-kingdom\" class=\"block rounded border p-4 hover:border-primary transition\">More United Kingdom Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/united-kingdom/income-tax\" class=\"block rounded border p-4 hover:border-primary transition\">Income Tax Guide</a>\n    <a href=\"/countries/united-kingdom\" class=\"block rounded border p-4 hover:border-primary transition\">United Kingdom Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.gov.uk/pay-income-tax\" target=\"_blank\" rel=\"noopener noreferrer\">HMRC</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard deduction for Income Tax in United Kingdom?": "Standard deductions vary by country. Check the latest official guidelines for your jurisdiction.",
        "How to calculate Income Tax on salary in United Kingdom?": "Enter your annual income, select your tax year, and use the calculator to get an estimate.",
        "What are the Income Tax slabs in United Kingdom?": "Slabs vary by income level and tax year. The calculator shows the applicable rates."
    }
},

  "united-kingdom-vat-vat-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this United Kingdom VAT calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for United Kingdom. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>United Kingdom VAT slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/united-kingdom\" class=\"block rounded border p-4 hover:border-primary transition\">More United Kingdom Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/united-kingdom/vat\" class=\"block rounded border p-4 hover:border-primary transition\">VAT Guide</a>\n    <a href=\"/countries/united-kingdom\" class=\"block rounded border p-4 hover:border-primary transition\">United Kingdom Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.gov.uk/pay-income-tax\" target=\"_blank\" rel=\"noopener noreferrer\">HMRC</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard Vat rate in United Kingdom?": "Standard rates vary by country and type of goods/services.",
        "How to calculate Vat from total amount?": "Enter the total amount and select reverse calculation to extract the tax component.",
        "What are the different Vat rates in United Kingdom?": "Rates may include standard, reduced, zero-rated, and exempt categories."
    }
},

  "united-kingdom-national-insurance-ni-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this United Kingdom National Insurance calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for United Kingdom. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>United Kingdom National Insurance slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/united-kingdom\" class=\"block rounded border p-4 hover:border-primary transition\">More United Kingdom Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/united-kingdom/national-insurance\" class=\"block rounded border p-4 hover:border-primary transition\">National Insurance Guide</a>\n    <a href=\"/countries/united-kingdom\" class=\"block rounded border p-4 hover:border-primary transition\">United Kingdom Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.gov.uk/pay-income-tax\" target=\"_blank\" rel=\"noopener noreferrer\">HMRC</a></li></ul>"
    },
    "faqSchema": {
        "What is the National Insurance rate in United Kingdom?": "Rates vary by income level and employment type.",
        "How to calculate employer National Insurance contributions?": "Enter annual earnings and employment type to get an estimate."
    }
},

  "united-states-income-tax-state-income-tax": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this United States Income Tax calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for United States. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>United States Income Tax slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/united-states\" class=\"block rounded border p-4 hover:border-primary transition\">More United States Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/united-states/income-tax\" class=\"block rounded border p-4 hover:border-primary transition\">Income Tax Guide</a>\n    <a href=\"/countries/united-states\" class=\"block rounded border p-4 hover:border-primary transition\">United States Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.irs.gov\" target=\"_blank\" rel=\"noopener noreferrer\">IRS</a></li><li><a href=\"https://www.usa.gov/taxes\" target=\"_blank\" rel=\"noopener noreferrer\">USAGov Taxes</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard deduction for Income Tax in United States?": "Standard deductions vary by country. Check the latest official guidelines for your jurisdiction.",
        "How to calculate Income Tax on salary in United States?": "Enter your annual income, select your tax year, and use the calculator to get an estimate.",
        "What are the Income Tax slabs in United States?": "Slabs vary by income level and tax year. The calculator shows the applicable rates."
    }
},

  "united-states-payroll-tax-payroll-tax-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this United States Payroll Tax calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for United States. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>United States Payroll Tax slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/united-states\" class=\"block rounded border p-4 hover:border-primary transition\">More United States Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/united-states/payroll-tax\" class=\"block rounded border p-4 hover:border-primary transition\">Payroll Tax Guide</a>\n    <a href=\"/countries/united-states\" class=\"block rounded border p-4 hover:border-primary transition\">United States Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.irs.gov\" target=\"_blank\" rel=\"noopener noreferrer\">IRS</a></li><li><a href=\"https://www.usa.gov/taxes\" target=\"_blank\" rel=\"noopener noreferrer\">USAGov Taxes</a></li></ul>"
    },
    "faqSchema": {
        "What is the Payroll Tax rate in United States?": "Rates vary by income level and employment type.",
        "How to calculate employer Payroll Tax contributions?": "Enter annual earnings and employment type to get an estimate."
    }
},

  "united-states-corporate-tax-corporate-tax-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this United States Corporate Tax calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for United States. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>United States Corporate Tax slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/united-states\" class=\"block rounded border p-4 hover:border-primary transition\">More United States Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/united-states/corporate-tax\" class=\"block rounded border p-4 hover:border-primary transition\">Corporate Tax Guide</a>\n    <a href=\"/countries/united-states\" class=\"block rounded border p-4 hover:border-primary transition\">United States Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.irs.gov\" target=\"_blank\" rel=\"noopener noreferrer\">IRS</a></li><li><a href=\"https://www.usa.gov/taxes\" target=\"_blank\" rel=\"noopener noreferrer\">USAGov Taxes</a></li></ul>"
    },
    "faqSchema": {
        "What is the corporate tax rate in United States?": "Corporate tax rates vary by jurisdiction and business structure.",
        "How to calculate corporate tax?": "Enter taxable income and entity type to estimate corporate tax liability."
    }
},

  "united-states-capital-gains-tax-capital-gains-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this United States Capital Gains Tax calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for United States. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>United States Capital Gains Tax slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/united-states\" class=\"block rounded border p-4 hover:border-primary transition\">More United States Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/united-states/capital-gains-tax\" class=\"block rounded border p-4 hover:border-primary transition\">Capital Gains Tax Guide</a>\n    <a href=\"/countries/united-states\" class=\"block rounded border p-4 hover:border-primary transition\">United States Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.irs.gov\" target=\"_blank\" rel=\"noopener noreferrer\">IRS</a></li><li><a href=\"https://www.usa.gov/taxes\" target=\"_blank\" rel=\"noopener noreferrer\">USAGov Taxes</a></li></ul>"
    },
    "faqSchema": {
        "What is the capital gains tax rate in United States?": "Capital gains tax rates depend on holding period and asset type.",
        "How to calculate capital gains tax?": "Enter your gain amount, cost basis, and holding period to estimate tax."
    }
},

  "india-income-tax-income-tax-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this India Income Tax calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for India. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>India Income Tax slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/india\" class=\"block rounded border p-4 hover:border-primary transition\">More India Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/india/income-tax\" class=\"block rounded border p-4 hover:border-primary transition\">Income Tax Guide</a>\n    <a href=\"/countries/india\" class=\"block rounded border p-4 hover:border-primary transition\">India Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.incometax.gov.in\" target=\"_blank\" rel=\"noopener noreferrer\">Income Tax Department</a></li><li><a href=\"https://www.gstn.org\" target=\"_blank\" rel=\"noopener noreferrer\">GST Portal</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard deduction for Income Tax in India?": "Standard deductions vary by country. Check the latest official guidelines for your jurisdiction.",
        "How to calculate Income Tax on salary in India?": "Enter your annual income, select your tax year, and use the calculator to get an estimate.",
        "What are the Income Tax slabs in India?": "Slabs vary by income level and tax year. The calculator shows the applicable rates."
    }
},

  "india-gst-gst-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this India GST calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for India. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>India GST slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/india\" class=\"block rounded border p-4 hover:border-primary transition\">More India Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/india/gst\" class=\"block rounded border p-4 hover:border-primary transition\">GST Guide</a>\n    <a href=\"/countries/india\" class=\"block rounded border p-4 hover:border-primary transition\">India Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.incometax.gov.in\" target=\"_blank\" rel=\"noopener noreferrer\">Income Tax Department</a></li><li><a href=\"https://www.gstn.org\" target=\"_blank\" rel=\"noopener noreferrer\">GST Portal</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard Gst rate in India?": "Standard rates vary by country and type of goods/services.",
        "How to calculate Gst from total amount?": "Enter the total amount and select reverse calculation to extract the tax component.",
        "What are the different Gst rates in India?": "Rates may include standard, reduced, zero-rated, and exempt categories."
    }
},

  "india-tds-tds-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this India TDS calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for India. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>India TDS slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/india\" class=\"block rounded border p-4 hover:border-primary transition\">More India Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/india/tds\" class=\"block rounded border p-4 hover:border-primary transition\">TDS Guide</a>\n    <a href=\"/countries/india\" class=\"block rounded border p-4 hover:border-primary transition\">India Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.incometax.gov.in\" target=\"_blank\" rel=\"noopener noreferrer\">Income Tax Department</a></li><li><a href=\"https://www.gstn.org\" target=\"_blank\" rel=\"noopener noreferrer\">GST Portal</a></li></ul>"
    },
    "faqSchema": {
        "What is the TDS rate in India?": "TDS rates vary by payment type and recipient status.",
        "When is TDS deducted?": "TDS is deducted at the time of payment by the payer."
    }
},

  "hong-kong-salaries-tax-salaries-tax-calculator": {
    "howToUse": {
        "title": "How to Use the Hong Kong Salaries Tax Calculator",
        "html": "<p>Use this <strong>Hong Kong salaries tax calculator</strong> to estimate your tax liability in just a few steps:</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Enter your <strong>annual employment income</strong> in HKD.</li><li>Input your <strong>MPF or ORSO contributions</strong> for the year.</li><li>Select your <strong>marital status</strong> and enter the number of <strong>dependent children</strong>.</li><li>Choose the relevant <strong>year of assessment</strong> (e.g. 2024/25 or 2025/26).</li><li>Click <strong>Calculate</strong> to see your salaries tax, take-home pay, and effective tax rate.</li></ol><p>This <strong>HK tax calculator</strong> automatically compares the progressive rates and standard rate, then applies whichever is lower. Use our <a href=\"/countries/hong-kong/salaries-tax\">Salaries Tax guide</a> for more details.</p>"
    },
    "understandingResults": {
        "title": "Understanding Your Hong Kong Salaries Tax Results",
        "html": "<p><strong>Total Income:</strong> Your gross annual employment income before deductions.<br><strong>Total Allowances:</strong> Basic allowance, married person allowance, child allowances, and other deductions.<br><strong>Net Chargeable Income:</strong> Income minus MPF contributions and personal allowances.<br><strong>Salaries Tax:</strong> Computed at either progressive rates or the standard rate, whichever is lower.<br><strong>Effective Rate:</strong> Your total tax as a percentage of your total income.<br><strong>Take-Home Pay:</strong> Your income after salaries tax. Use our <a href=\"/countries/hong-kong/salaries-tax/salaries-tax-calculator\">Hong Kong salary tax calculator</a> to explore different scenarios.</p>"
    },
    "formula": {
        "title": "Hong Kong Salaries Tax Formula",
        "html": "<p><strong>Net Chargeable Income = Total Income - Allowable Deductions - Personal Allowances</strong></p><p>Salaries Tax is then computed using the <strong>lower of</strong>:</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Progressive rates:</strong> 2% on first HK$50,000; 6% on next HK$50,000; 10% on next HK$50,000; 14% on next HK$50,000; 17% on the remainder.</li><li><strong>Standard rate:</strong> 15% on net income (16% for income above HK$5,000,000 from 2025/26 onwards).</li></ul><p>Use our <strong>Hong Kong income tax calculator</strong> to apply this formula automatically.</p>"
    },
    "taxSlabs": {
        "title": "Hong Kong Salaries Tax Slabs 2024/25 & 2025/26",
        "html": "<p>Hong Kong salaries tax is calculated at <strong>progressive rates</strong> on net chargeable income or at the <strong>standard rate</strong> on net income, whichever is lower.</p><h3 class=\"text-xl font-semibold mt-4 mb-2\">Progressive Rates (2024/25 & 2025/26)</h3><table class=\"w-full text-left border-collapse mt-2\"><thead><tr class=\"border-b\"><th class=\"py-2\">Net Chargeable Income (HKD)</th><th class=\"py-2\">Rate</th></tr></thead><tbody><tr><td class=\"py-2\">First 50,000</td><td class=\"py-2\">2%</td></tr><tr><td class=\"py-2\">Next 50,000</td><td class=\"py-2\">6%</td></tr><tr><td class=\"py-2\">Next 50,000</td><td class=\"py-2\">10%</td></tr><tr><td class=\"py-2\">Next 50,000</td><td class=\"py-2\">14%</td></tr><tr><td class=\"py-2\">Remainder</td><td class=\"py-2\">17%</td></tr></tbody></table><h3 class=\"text-xl font-semibold mt-4 mb-2\">Standard Rate</h3><table class=\"w-full text-left border-collapse mt-2\"><thead><tr class=\"border-b\"><th class=\"py-2\">Net Income (HKD)</th><th class=\"py-2\">Rate</th></tr></thead><tbody><tr><td class=\"py-2\">First 5,000,000</td><td class=\"py-2\">15%</td></tr><tr><td class=\"py-2\">Remainder</td><td class=\"py-2\">16% (2025/26 onwards)</td></tr></tbody></table><p>Use our <a href=\"/countries/hong-kong/salaries-tax/salaries-tax-calculator\">Hong Kong tax calculator</a> to see which rate applies to your income.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes to Avoid When Using the Hong Kong Tax Calculator",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Forgetting to include all income sources such as bonuses, commissions, and stock options.</li><li>Missing allowable deductions like MPF, charitable donations, and home loan interest.</li><li>Not claiming the correct personal allowances for marital status and dependent children.</li><li>Confusing the year of assessment (April 1 to March 31) with the calendar year.</li><li>Assuming overseas income is always exempt - IRD may challenge source rules.</li><li>Not filing a tax return even if you did not receive one from IRD.</li></ul><p>Use our <strong>Hong Kong tax calculator for expats</strong> to ensure you account for all deductions.</p>"
    },
    "relatedCalculators": {
        "title": "Related Hong Kong Tax Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/hong-kong/profits-tax/profits-tax-calculator\" class=\"block rounded border p-4 hover:border-primary transition\">HK Profits Tax Calculator</a>\n    <a href=\"/countries/hong-kong/salaries-tax/salaries-tax-calculator\" class=\"block rounded border p-4 hover:border-primary transition\">HK Salaries Tax Calculator</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles on Hong Kong Tax",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/blogs/hong-kong-tax-calculator-expats-guide\" class=\"block rounded border p-4 hover:border-primary transition\">Hong Kong Tax Calculator for Expats Guide</a>\n    <a href=\"/blogs/hong-kong-salaries-tax-guide\" class=\"block rounded border p-4 hover:border-primary transition\">Complete Guide to HK Salaries Tax</a>\n    <a href=\"/blogs/hong-kong-stamp-duty-guide\" class=\"block rounded border p-4 hover:border-primary transition\">Hong Kong Stamp Duty Explained</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.gov.hk/en/residents/tax/etax/index.htm\" target=\"_blank\" rel=\"noopener noreferrer\">IRD Hong Kong eTAX Portal</a></li><li><a href=\"https://www.ird.gov.hk/eng/faq/ctr.htm\" target=\"_blank\" rel=\"noopener noreferrer\">IRD FAQ on Completion of Tax Return</a></li><li><a href=\"https://www.gov.hk/en/residents/taxes/stamp/index.htm\" target=\"_blank\" rel=\"noopener noreferrer\">GovHK Stamp Duty Information</a></li></ul>"
    },
    "faqSchema": {
        "How much tax do I pay in Hong Kong?": "Salaries tax in Hong Kong is charged at progressive rates from 2% to 17% on net chargeable income, or at the standard rate of 15% on total income minus deductions, whichever is lower.",
        "How is Hong Kong tax calculated?": "Hong Kong uses a territorial tax system. Salaries tax is calculated on assessable income after allowable deductions and personal allowances. The progressive rates range from 2% to 17%, with a standard rate cap of 15%.",
        "How can I calculate my income tax rate as a foreigner in Hong Kong?": "Foreigners working in Hong Kong can use our Hong Kong tax calculator for expats. Your tax rate depends on employment income, marital status, and deductions. Use our Hong Kong income tax for foreigners calculator to see your tax rate and take-home pay.",
        "How to calculate tax amount in calculator?": "Enter your annual employment income, deductions, and personal allowances into our Hong Kong tax calculator. The tool applies progressive tax rates or the standard rate and shows your total tax liability, effective tax rate, and monthly or annual take-home pay.",
        "Is HK tax free for foreigners?": "Hong Kong tax is not entirely free for foreigners. Employment income sourced in Hong Kong is subject to salaries tax. However, the territorial tax system means overseas income is generally not taxable.",
        "How do I calculate my tax?": "To calculate your Hong Kong tax, input your assessable income, allowable deductions, and personal allowances into our HK tax calculator. The calculator applies current IRD progressive rates and determines whether you pay less under the standard rate or progressive rates system.",
        "Is HK income tax low?": "Yes, Hong Kong has some of the lowest income tax rates in the world. The maximum salaries tax rate is 17% with a standard rate cap of 15%, and only profits sourced in Hong Kong are taxable.",
        "How do I calculate my income tax?": "Use our Hong Kong income tax calculator to estimate your salaries tax. Enter your annual income, deductions, and personal allowances. The calculator applies progressive tax rates and shows your tax burden, effective tax rate, and net salary after tax.",
        "Is Hong Kong a high tax country?": "No, Hong Kong is not a high tax country. It maintains a simple tax regime with low rates, a territorial tax system, and no tax on capital gains, dividends, or overseas income.",
        "Do expats pay tax in Hong Kong?": "Yes, expats pay tax in Hong Kong on employment income sourced in Hong Kong. The Hong Kong tax calculator for expats helps you estimate your tax liability, taking into account the territorial tax system and any available deductions for foreign workers.",
        "How much tax will I get back if I earn $100,000?": "If you earn $100,000 HKD per year, use our Hong Kong tax calculator to estimate your tax refund. With standard deductions and personal allowances, many taxpayers pay little or no salaries tax on moderate incomes.",
        "How to save tax in Hong Kong?": "Save tax in Hong Kong by maximizing allowable deductions such as charitable donations, home loan interest, and MPF contributions. Use our Hong Kong tax calculator to compare your tax under different deduction scenarios.",
        "What is the formula to calculate taxes?": "The Hong Kong salaries tax formula is: Net assessable income = Total income minus allowable deductions minus personal allowances. Tax is then computed at progressive rates (2% to 17%) or the standard rate of 15%.",
        "How much tax for 12 lakhs salary?": "Use our Hong Kong tax calculator to estimate tax on a 12 lakh salary. In Hong Kong, a HKD salary is converted and taxed using the progressive rates system. The actual tax depends on your deductions and personal allowances.",
        "How do I calculate how much tax I have to pay?": "Use our Hong Kong income tax calculator. Enter your annual salary, allowable deductions, and personal allowances to see your total tax liability. Our Hong Kong tax calculator will tell you exactly how much tax you have to pay.",
        "Is Hong Kong still good for expats?": "Hong Kong remains attractive for expats due to its low tax regime, world-class infrastructure, and strategic location. The territorial tax system means you only pay tax on Hong Kong-sourced income.",
        "How to qualify as a Hong Kong tax resident?": "Qualify as a Hong Kong tax resident by being ordinarily resident in Hong Kong or having a permanent place of residence there. The IRD assesses your residential status based on factors such as the 60-day rule.",
        "How can I calculate tax on my salary?": "Use our Hong Kong salary tax calculator to calculate tax on your salary. Enter your employment income, MPF contributions, and other deductions. The tool applies the current IRD progressive rates.",
        "How can I find my tax calculation?": "Find your tax calculation using our Hong Kong tax computation tool. Input your income, deductions, and allowances to see a detailed breakdown of assessable income, tax rates applied, and final tax payable.",
        "How much tax do I pay on a 57000 salary?": "Use our Hong Kong tax calculator to estimate tax on a $57,000 salary. With basic personal allowances and MPF contributions, many individuals on this salary level pay little or no salaries tax.",
        "Who pays salary tax in HK?": "Salary tax in Hong Kong is paid by individuals who derive income from employment sourced in Hong Kong. The Hong Kong salaries tax calculator applies to both local residents and expats working in Hong Kong.",
        "Do people in HK pay taxes?": "Yes, people in Hong Kong pay taxes on income sourced in Hong Kong. However, the tax rates are among the lowest in the world, with a cap of 17% on salaries tax and only territorial profits taxed.",
        "Is Hong Kong zero tax?": "Hong Kong is not zero tax, but it is a low-tax jurisdiction. Salaries tax maxes out at 17%, profits tax is 16.5%, and there is no tax on capital gains, dividends, or overseas income.",
        "How much tax do I pay on 100,000 salary?": "Use our Hong Kong tax calculator to estimate tax on a $100,000 salary. Depending on your deductions and allowances, your actual tax could be minimal due to the progressive rates system.",
        "What is the formula to calculate income tax?": "The Hong Kong income tax formula subtracts allowable deductions and personal allowances from total income to arrive at net assessable income. Tax is then calculated using progressive rates from 2% to 17% or the standard rate of 15%.",
        "Which country has 0% income tax?": "Countries such as the UAE, Saudi Arabia, and Qatar have 0% income tax. Hong Kong maintains low tax rates rather than zero tax, with salaries tax capped at 17% and profits tax at 16.5%.",
        "How much is tax free in Hong Kong?": "Hong Kong offers generous personal allowances including a basic allowance, married person allowance, and child allowances. These allowances determine the tax-free portion of your income.",
        "How to file taxes in Hong Kong?": "File taxes in Hong Kong online through the eTAX portal or by paper return. The IRD sends tax returns annually, typically in May.",
        "How do I calculate my income tax in Hong Kong?": "Calculate your Hong Kong income tax using our Hong Kong income tax calculator. Enter your total income, allowable deductions, and personal allowances. The calculator applies the IRD progressive rates.",
        "Is overseas income taxable in Hong Kong?": "Generally, overseas income is not taxable in Hong Kong due to the territorial tax system, provided it is sourced outside Hong Kong. However, exceptions apply for certain employment income.",
        "How much tax do I pay on $120000?": "Use our Hong Kong tax calculator to estimate tax on a $120,000 salary. With personal allowances and deductions, your actual tax burden may be lower than expected.",
        "How much tax will I pay if I earn $80,000 a year?": "Use our Hong Kong tax calculator to estimate tax on a $80,000 annual salary. With standard deductions and personal allowances, your actual salaries tax may be minimal.",
        "What is the tax rate on $100K?": "The tax rate on $100K in Hong Kong depends on your deductions and allowances. Use our Hong Kong tax calculator to see your exact tax rate. The progressive rates range from 2% to 17%, and the standard rate of 15% may apply if your deductions are low.",
        "Is Hong Kong still a tax haven?": "Hong Kong remains a low-tax jurisdiction with a simple tax system, no tax on capital gains or dividends, and a territorial tax system. While no longer a zero-tax haven, its tax rates and regime continue to attract global businesses and expats.",
        "What are the tax advantages of Hong Kong?": "Hong Kong offers low tax rates, territorial taxation, no capital gains tax, no withholding tax on dividends, and generous deductions. Use our Hong Kong tax calculator to see how much you can save.",
        "What is the minimum salary to pay tax in HK?": "The minimum salary to pay tax in Hong Kong depends on your personal allowances. With basic allowances and deductions, many taxpayers earning below approximately HKD 200,000 per year pay no taxes.",
        "Are taxes in Hong Kong high?": "No, taxes in Hong Kong are not high. The maximum salaries tax rate is 17%, and the standard rate is 15% of net income. With personal allowances, many residents pay little to no tax.",
        "Is $50,000 HKD a good salary?": "Whether $50,000 HKD is a good salary depends on your lifestyle, benefits, and tax obligations. Use our Hong Kong net salary calculator or Hong Kong take home pay calculator to see your actual take-home pay after tax, MPF, and other deductions."
    }
  },

  "hong-kong-profits-tax-profits-tax-calculator": {
    "howToUse": {
        "title": "How to Use the Hong Kong Profits Tax Calculator",
        "html": "<p>Use this <strong>Hong Kong profits tax calculator</strong> to estimate your business tax liability:</p><ol class=\"list-decimal pl-6 space-y-2\"><li>Enter your <strong>assessable profits</strong> after allowable business expenses.</li><li>Select your <strong>business type</strong>: incorporated (limited company) or unincorporated (sole proprietor/partnership).</li><li>Choose the relevant <strong>year of assessment</strong>.</li><li>Click <strong>Calculate</strong> to see your profits tax under the two-tiered rates system.</li></ol><p>This <strong>HK profits tax calculator</strong> supports both corporations and unincorporated businesses. Use our <a href=\"/countries/hong-kong/profits-tax\">Profits Tax guide</a> for more information.</p>"
    },
    "understandingResults": {
        "title": "Understanding Your Hong Kong Profits Tax Results",
        "html": "<p><strong>Assessable Profits:</strong> Net profits after deducting allowable business expenses.<br><strong>Business Type:</strong> Incorporated (limited company) or unincorporated (sole proprietor/partnership).<br><strong>Profits Tax:</strong> Computed at the two-tiered rates: 8.25% on first HK$2 million for corporations (7.5% for unincorporated), and 16.5% (15% for unincorporated) on the remainder.<br><strong>Effective Rate:</strong> Your total tax as a percentage of assessable profits.<br><strong>Take-Home Profit:</strong> Profit after profits tax. Use our <a href=\"/countries/hong-kong/profits-tax/profits-tax-calculator\">HK profit tax calculator</a> to plan your business finances.</p>"
    },
    "formula": {
        "title": "Hong Kong Profits Tax Formula",
        "html": "<p><strong>Profits Tax = Assessable Profits x Applicable Rate</strong></p><p>The two-tiered profits tax rates apply automatically:</p><ul class=\"list-disc pl-6 space-y-2\"><li><strong>Corporations:</strong> 8.25% on the first HK$2,000,000 of assessable profits; 16.5% on any profits above that amount.</li><li><strong>Unincorporated businesses:</strong> 7.5% on the first HK$2,000,000; 15% on the remainder.</li></ul><p>Only one entity within a group of connected entities can benefit from the two-tiered rates. Use our <strong>Hong Kong corporate tax calculator</strong> for accurate estimates.</p>"
    },
    "taxSlabs": {
        "title": "Hong Kong Profits Tax Two-Tiered Rates",
        "html": "<p>Hong Kong operates a territorial tax system. Only profits arising in or derived from Hong Kong are subject to profits tax. The two-tiered profits tax rates are:</p><h3 class=\"text-xl font-semibold mt-4 mb-2\">For Corporations (Limited Companies)</h3><table class=\"w-full text-left border-collapse mt-2\"><thead><tr class=\"border-b\"><th class=\"py-2\">Assessable Profits (HKD)</th><th class=\"py-2\">Rate</th></tr></thead><tbody><tr><td class=\"py-2\">First 2,000,000</td><td class=\"py-2\">8.25%</td></tr><tr><td class=\"py-2\">Remainder</td><td class=\"py-2\">16.50%</td></tr></tbody></table><h3 class=\"text-xl font-semibold mt-4 mb-2\">For Unincorporated Businesses</h3><table class=\"w-full text-left border-collapse mt-2\"><thead><tr class=\"border-b\"><th class=\"py-2\">Assessable Profits (HKD)</th><th class=\"py-2\">Rate</th></tr></thead><tbody><tr><td class=\"py-2\">First 2,000,000</td><td class=\"py-2\">7.50%</td></tr><tr><td class=\"py-2\">Remainder</td><td class=\"py-2\">15.00%</td></tr></tbody></table><p>Use our <a href=\"/countries/hong-kong/profits-tax/profits-tax-calculator\">Hong Kong profits tax calculator</a> to compute your exact tax.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes to Avoid in Hong Kong Profits Tax",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Including foreign-sourced profits that should be excluded under the territorial system.</li><li>Failing to claim allowable business expenses such as rent, salaries, and depreciation.</li><li>Not maintaining proper books and records for at least 7 years.</li><li>Missing filing deadlines for Profits Tax Returns (BIR51 or BIR52).</li><li>Assuming connected entities can all use the two-tiered rates - only one entity in a group can claim the reduced rate.</li><li>Not lodging connected entity elections with IRD when required.</li></ul><p>Use our <strong>Hong Kong corporate tax calculator</strong> to ensure accurate estimates.</p>"
    },
    "relatedCalculators": {
        "title": "Related Hong Kong Tax Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/hong-kong/salaries-tax/salaries-tax-calculator\" class=\"block rounded border p-4 hover:border-primary transition\">HK Salaries Tax Calculator</a>\n    <a href=\"/countries/hong-kong/profits-tax/profits-tax-calculator\" class=\"block rounded border p-4 hover:border-primary transition\">HK Profits Tax Calculator</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles on Hong Kong Business Tax",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/blogs/hong-kong-profits-tax-guide\" class=\"block rounded border p-4 hover:border-primary transition\">Hong Kong Profits Tax Guide</a>\n    <a href=\"/blogs/hong-kong-corporate-tax-rate\" class=\"block rounded border p-4 hover:border-primary transition\">Hong Kong Corporate Tax Rate Explained</a>\n    <a href=\"/blogs/hong-kong-tax-residency\" class=\"block rounded border p-4 hover:border-primary transition\">Hong Kong Tax Residency Rules</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.gov.hk/en/residents/tax/etax/index.htm\" target=\"_blank\" rel=\"noopener noreferrer\">IRD Hong Kong eTAX Portal</a></li><li><a href=\"https://www.ird.gov.hk/eng/tax/pfs.htm\" target=\"_blank\" rel=\"noopener noreferrer\">IRD Profits Tax Information</a></li><li><a href=\"https://www.gov.hk/en/about/address/govhs.htm\" target=\"_blank\" rel=\"noopener noreferrer\">GovHK Business Services</a></li></ul>"
    },
    "faqSchema": {
        "What is the profits tax rate in Hong Kong?": "Profits tax in Hong Kong is charged at two-tiered rates: 8.25% on the first HK$2 million for corporations, and 16.5% on the remainder. For unincorporated businesses, the rates are 7.5% and 15% respectively.",
        "Who needs to pay profits tax?": "All businesses carrying on a trade, profession, or business in Hong Kong may be subject to profits tax on profits arising in or derived from Hong Kong.",
        "What is the territorial tax system in Hong Kong?": "Hong Kong operates a territorial tax system, meaning only profits sourced in Hong Kong are taxable. Overseas profits are generally not subject to Hong Kong profits tax.",
        "How to calculate assessable profits in Hong Kong?": "Assessable profits are computed by starting with your net profits per accounts, then making adjustments for non-deductible expenses, capital allowances, and any other tax adjustments under the Inland Revenue Ordinance.",
        "Can I use the two-tiered rates if I have multiple companies?": "Only one entity within a group of connected entities can elect to use the two-tiered rates. Connected entities must nominate which entity will benefit from the reduced rate.",
        "What are the common deductions for profits tax?": "Common deductions include rent, salaries, utilities, depreciation (capital allowances), charitable donations, and business-related expenses. Use our Hong Kong corporate tax calculator to estimate your deductions."
    }
  },

  "singapore-income-tax-income-tax-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this Singapore Income Tax calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for Singapore. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>Singapore Income Tax slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/singapore\" class=\"block rounded border p-4 hover:border-primary transition\">More Singapore Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles on Hong Kong Business Tax",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/blogs/hong-kong-profits-tax-guide\" class=\"block rounded border p-4 hover:border-primary transition\">Hong Kong Profits Tax Guide</a>\n    <a href=\"/blogs/hong-kong-corporate-tax-rate\" class=\"block rounded border p-4 hover:border-primary transition\">Hong Kong Corporate Tax Rate Explained</a>\n    <a href=\"/blogs/hong-kong-tax-residency\" class=\"block rounded border p-4 hover:border-primary transition\">Hong Kong Tax Residency Rules</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.iras.gov.sg\" target=\"_blank\" rel=\"noopener noreferrer\">IRAS</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard deduction for Income Tax in Singapore?": "Standard deductions vary by country. Check the latest official guidelines for your jurisdiction.",
        "How to calculate Income Tax on salary in Singapore?": "Enter your annual income, select your tax year, and use the calculator to get an estimate.",
        "What are the Income Tax slabs in Singapore?": "Slabs vary by income level and tax year. The calculator shows the applicable rates."
    }
},

  "singapore-gst-gst-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this Singapore GST calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for Singapore. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>Singapore GST slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/singapore\" class=\"block rounded border p-4 hover:border-primary transition\">More Singapore Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/singapore/gst\" class=\"block rounded border p-4 hover:border-primary transition\">GST Guide</a>\n    <a href=\"/countries/singapore\" class=\"block rounded border p-4 hover:border-primary transition\">Singapore Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.iras.gov.sg\" target=\"_blank\" rel=\"noopener noreferrer\">IRAS</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard Gst rate in Singapore?": "Standard rates vary by country and type of goods/services.",
        "How to calculate Gst from total amount?": "Enter the total amount and select reverse calculation to extract the tax component.",
        "What are the different Gst rates in Singapore?": "Rates may include standard, reduced, zero-rated, and exempt categories."
    }
},

  "singapore-stamp-duty-stamp-duty-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this Singapore Stamp Duty calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for Singapore. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>Singapore Stamp Duty slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/singapore\" class=\"block rounded border p-4 hover:border-primary transition\">More Singapore Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/singapore/stamp-duty\" class=\"block rounded border p-4 hover:border-primary transition\">Stamp Duty Guide</a>\n    <a href=\"/countries/singapore\" class=\"block rounded border p-4 hover:border-primary transition\">Singapore Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.iras.gov.sg\" target=\"_blank\" rel=\"noopener noreferrer\">IRAS</a></li></ul>"
    },
    "faqSchema": {
        "What is the stamp duty rate in Singapore?": "Stamp duty rates vary by property price and buyer type.",
        "How is stamp duty calculated?": "Stamp duty is typically calculated as a percentage of the property purchase price with tiered rates."
    }
},

  "indonesia-income-tax-income-tax-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this Indonesia Income Tax calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for Indonesia. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>Indonesia Income Tax slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/indonesia\" class=\"block rounded border p-4 hover:border-primary transition\">More Indonesia Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/indonesia/income-tax\" class=\"block rounded border p-4 hover:border-primary transition\">Income Tax Guide</a>\n    <a href=\"/countries/indonesia\" class=\"block rounded border p-4 hover:border-primary transition\">Indonesia Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.pajak.go.id\" target=\"_blank\" rel=\"noopener noreferrer\">DJP Indonesia</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard deduction for Income Tax in Indonesia?": "Standard deductions vary by country. Check the latest official guidelines for your jurisdiction.",
        "How to calculate Income Tax on salary in Indonesia?": "Enter your annual income, select your tax year, and use the calculator to get an estimate.",
        "What are the Income Tax slabs in Indonesia?": "Slabs vary by income level and tax year. The calculator shows the applicable rates."
    }
},

  "indonesia-vat-vat-calculator": {
    "howToUse": {
        "title": "How to Use",
        "html": "<p>Use this Indonesia VAT calculator to estimate your tax liability. Enter the required details and click Calculate.</p>"
    },
    "understandingResults": {
        "title": "Understanding Results",
        "html": "<p><strong>Taxable Income:</strong> Income subject to tax. <strong>Tax Amount:</strong> Total tax liability. <strong>Effective Rate:</strong> Tax as percentage of income. <strong>Take-Home Pay:</strong> Income after tax.</p>"
    },
    "formula": {
        "title": "Formula",
        "html": "<p>Tax is computed using applicable rates and rules for Indonesia. Review the detailed methodology above for assumptions and calculations.</p>"
    },
    "taxSlabs": {
        "title": "Tax Slabs",
        "html": "<p>Indonesia VAT slabs vary based on income level and taxpayer profile. Use this calculator to determine your exact liability under current rules.</p>"
    },
    "commonMistakes": {
        "title": "Common Mistakes",
        "html": "<ul class=\"list-disc pl-6 space-y-2\"><li>Not updating inputs for the correct tax year.</li><li>Using incorrect residency or employment status.</li><li>Forgetting to account for all income sources.</li><li>Not considering eligible deductions and reliefs.</li></ul>"
    },
    "relatedCalculators": {
        "title": "Related Calculators",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/indonesia\" class=\"block rounded border p-4 hover:border-primary transition\">More Indonesia Calculators</a>\n    <a href=\"/countries\" class=\"block rounded border p-4 hover:border-primary transition\">All Countries</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">Home</a>\n  </div>"
    },
    "suggestedArticles": {
        "title": "Suggested Articles",
        "html": "<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3\">\n    <a href=\"/countries/indonesia/vat\" class=\"block rounded border p-4 hover:border-primary transition\">VAT Guide</a>\n    <a href=\"/countries/indonesia\" class=\"block rounded border p-4 hover:border-primary transition\">Indonesia Tax Overview</a>\n    <a href=\"/\" class=\"block rounded border p-4 hover:border-primary transition\">All Calculators</a>\n  </div>"
    },
    "officialResources": {
        "title": "Official Resources",
        "html": "<ul class=\"space-y-2\"><li><a href=\"https://www.pajak.go.id\" target=\"_blank\" rel=\"noopener noreferrer\">DJP Indonesia</a></li></ul>"
    },
    "faqSchema": {
        "What is the standard Vat rate in Indonesia?": "Standard rates vary by country and type of goods/services.",
        "How to calculate Vat from total amount?": "Enter the total amount and select reverse calculation to extract the tax component.",
        "What are the different Vat rates in Indonesia?": "Rates may include standard, reduced, zero-rated, and exempt categories."
    }
},
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


};
