import type { Country, TaxCategory } from "../types";

const taxCategories: TaxCategory[] = [
  {
    slug: "income-tax",
    name: "Income Tax",
    description: "Federal and state income tax obligations for individuals and businesses in the United States.",
    overview: "The United States imposes a progressive federal income tax system with rates ranging from 10% to 37% for the highest earners. Tax residents are taxed on worldwide income, while non-residents are taxed only on US-source income. State and local taxes may also apply depending on your jurisdiction.",
    calculators: [
      { slug: "federal-income-tax", name: "Federal Income Tax Calculator", description: "Estimate your federal income tax liability based on current IRS tax brackets." },
      { slug: "state-income-tax", name: "State Income Tax Calculator", description: "Compare state income tax rates and estimates across major US states." },
      { slug: "effective-tax-rate", name: "Effective Tax Rate Calculator", description: "Calculate your effective tax rate and understand your true tax burden." }
    ],
    guides: [
      {
        slug: "how-to-file",
        title: "How to File Your Income Tax Return",
        description: "Step-by-step guide to filing your US federal income tax return, including form selection, deadlines, and common mistakes to avoid.",
        image: "/images/guides/united-states/how-to-file.jpg",
        sections: [
          {
            title: "Choosing the Right Tax Form",
            content: "The most common tax forms for individuals are Form 1040 (the standard form), Form 1040-SR (for seniors aged 65 and older), and Form 1040-NR (for nonresident aliens). Most taxpayers will use Form 1040. If your tax situation is simple with only W-2 income and the standard deduction, the 1040 form is straightforward to complete."
          },
          {
            title: "Gathering Your Documents",
            content: "Before you begin filing, collect all necessary documents including W-2 forms from employers, 1099 forms for freelance or investment income, receipts for deductible expenses, records of charitable donations, mortgage interest statements (Form 1098), and prior year tax returns for reference. Having all documents organized before starting will significantly reduce filing time and errors."
          },
          {
            title: "Filing Methods and Deadlines",
            content: "The federal tax filing deadline is typically April 15th of each year. You can file electronically through IRS Free File (for eligible taxpayers), commercial tax preparation software, or by mailing a paper return. Electronic filing is faster, more secure, and provides confirmation of receipt. If you cannot meet the deadline, file Form 4868 for an automatic six-month extension."
          }
        ],
        steps: [
          { step: 1, title: "Determine Your Filing Status", description: "Choose from Single, Married Filing Jointly, Married Filing Separately, Head of Household, or Qualifying Surviving Spouse. Your filing status affects your standard deduction, tax brackets, and eligibility for credits." },
          { step: 2, title: "Calculate Your Gross Income", description: "Sum all taxable income including wages, salaries, tips, freelance income, investment income, and other earnings. Some income types may be excluded, such as certain gifts or inheritances." },
          { step: 3, title: "Adjustments to Income", description: "Apply above-the-line deductions such as contributions to a traditional IRA, student loan interest deduction, educator expenses, or health savings account contributions to arrive at your adjusted gross income (AGI)." },
          { step: 4, title: "Apply Deductions", description: "Choose between the standard deduction and itemized deductions. Compare both to determine which approach reduces your taxable income more. Standard deduction amounts are adjusted annually for inflation." },
          { step: 5, title: "Calculate Your Tax", description: "Apply the progressive tax brackets to your taxable income. Use the IRS tax rate schedule for your filing status to determine your total tax liability." },
          { step: 6, title: "Claim Credits and Payments", description: "Apply any eligible tax credits such as the Earned Income Tax Credit, Child Tax Credit, American Opportunity Credit, or Lifetime Learning Credit. Subtract any estimated tax payments or withholding credits." },
          { step: 7, title: "File Your Return", description: "Submit your completed return electronically or by mail. Keep a copy of your filed return and all supporting documents for at least three years in case of an audit." }
        ],
        tips: [
          "File electronically for faster processing and immediate confirmation of receipt.",
          "Keep organized records of all income documents and receipts throughout the year.",
          "Consider using tax preparation software to maximize deductions and credits you may overlook.",
          "Review your withholding regularly using the IRS Withholding Estimator to avoid surprises at filing time."
        ]
      },
      {
        slug: "tax-brackets",
        title: "Understanding US Tax Brackets",
        description: "Learn how progressive tax brackets work, how marginal rates apply, and practical strategies to minimize your tax liability.",
        image: "/images/guides/united-states/tax-brackets.jpg",
        sections: [
          {
            title: "How Progressive Taxation Works",
            content: "The US federal income tax system uses progressive rates, meaning higher portions of income are taxed at higher rates. For 2025, there are seven brackets: 10%, 12%, 22%, 24%, 32%, 35%, and 37%. Importantly, you do not pay the highest rate on all your income — only the portion that falls within each bracket is taxed at that rate. For example, if your taxable income puts you in the 22% bracket, only the income above the 22% threshold is taxed at 22%, while income below that threshold is taxed at the lower 10% or 12% rates."
          },
          {
            title: "Marginal vs Effective Tax Rate",
            content: "Your marginal tax rate is the rate applied to your last dollar of income, while your effective tax rate is the average rate across all your income. Many taxpayers mistakenly believe that moving into a higher bracket means all their income is taxed at the higher rate. Understanding the difference between marginal and effective rates helps make better financial decisions about deductions, retirement contributions, and income timing."
          },
          {
            title: "Strategies to Manage Your Tax Bracket",
            content: "Contributing to tax-advantaged accounts like 401(k)s, traditional IRAs, and Health Savings Accounts (HSAs) can reduce your taxable income and potentially keep you in a lower bracket. Timing income and deductions strategically — such as bunching charitable contributions or deferring income — can also help manage your bracket positioning from year to year."
          }
        ],
        steps: [
          { step: 1, title: "Identify Your Taxable Income", description: "Calculate your taxable income by taking your gross income minus adjustments to income (AGI) and either the standard deduction or itemized deductions." },
          { step: 2, title: "Find Your Bracket Thresholds", description: "Locate the 2025 tax bracket thresholds for your filing status on the IRS website or in your tax software. The thresholds are adjusted annually for inflation." },
          { step: 3, title: "Apply Rates to Each Bracket", description: "Multiply the income in each bracket by the corresponding rate. The sum of these calculations gives you your total tax liability." },
          { step: 4, title: "Calculate Your Effective Rate", description: "Divide your total tax by your taxable income to find your effective tax rate. This is the true picture of your average tax burden." }
        ],
        tips: [
          "Always compare the standard deduction to itemized deductions to ensure you are using the most beneficial option.",
          "Tax brackets and standard deduction amounts change annually — review updates each year during tax planning.",
          "Contributing to retirement accounts before year-end can shift income into the next tax year if timed carefully."
        ]
      },
      {
        slug: "itemized-vs-standard",
        title: "Itemized Deductions vs Standard Deduction",
        description: "Compare standard and itemized deductions to determine which option reduces your taxable income more effectively.",
        image: "/images/guides/united-states/itemized-vs-standard.jpg",
        sections: [
          {
            title: "Overview of the Standard Deduction",
            content: "The standard deduction is a fixed dollar amount that reduces your taxable income. For 2025, the standard deduction is $15,000 for single filers, $30,000 for married filing jointly, $22,500 for heads of household, and $15,000 for married filing separately. The standard deduction is adjusted annually for inflation and is available to all taxpayers without requiring any documentation of specific expenses."
          },
          {
            title: "When to Itemize Deductions",
            content: "Itemizing makes sense when your total eligible deductions exceed the standard deduction. Common itemized deductions include state and local taxes (SALT, capped at $10,000), mortgage interest on home loans up to $750,000 of acquisition debt, charitable contributions, medical expenses exceeding 7.5% of AGI, and casualty or theft losses. Tax preparation software can help you determine whether itemizing provides a greater benefit than the standard deduction."
          },
          {
            title: "Impact of Tax Reform on Itemizing",
            content: "The Tax Cuts and Jobs Act (TCJA) significantly increased the standard deduction and capped the SALT deduction at $10,000, making it harder for many taxpayers to benefit from itemizing. These provisions are set to expire after 2025 unless Congress extends them. Taxpayers should evaluate their options each year as these rules may change."
          }
        ],
        steps: [
          { step: 1, title: "Calculate the Standard Deduction", description: "Find the standard deduction amount for your filing status for the current tax year." },
          { step: 2, title: "Tally Potential Itemized Deductions", description: "Add up all eligible itemized deductions including SALT, mortgage interest, charitable contributions, and medical expenses." },
          { step: 3, title: "Compare Both Options", description: "If your itemized deductions exceed the standard deduction, itemizing will reduce your taxable income more. If not, the standard deduction is the better choice." },
          { step: 4, title: "Document Your Choice", description: "Keep records supporting either the standard deduction or each itemized deduction in case of an IRS audit." }
        ],
        tips: [
          "Consider bunching charitable contributions into a single year to exceed the standard deduction threshold in alternating years.",
          "State and local tax deductions are capped at $10,000, which limits the benefit for residents of high-tax states.",
          "Medical expenses are only deductible if they exceed 7.5% of your AGI — track expenses carefully throughout the year."
        ]
      },
      {
        slug: "fica-guide",
        title: "Complete FICA Tax Guide",
        description: "Understanding Social Security and Medicare taxes, wage base limits, and additional Medicare tax obligations.",
        image: "/images/guides/united-states/fica-guide.jpg",
        sections: [
          {
            title: "What is FICA?",
            content: "FICA (Federal Insurance Contributions Act) is the payroll tax that funds Social Security and Medicare. Employees pay 6.2% for Social Security and 1.45% for Medicare, totaling 7.65%. Employers match these exact amounts, making the total FICA contribution 15.3% (7.65% employee + 7.65% employer). Self-employed individuals pay the full 15.3% through SE tax but can deduct the employer-equivalent portion."
          },
          {
            title: "Social Security Wage Base Limit",
            content: "The Social Security tax of 6.2% only applies to earnings up to the annual wage base cap. In 2025, the cap is $176,100. Any earnings above this threshold are not subject to Social Security tax. This creates a natural ceiling on the maximum Social Security tax you will pay in a year, and for high earners, it effectively becomes a lower effective rate."
          },
          {
            title: "Additional Medicare Tax",
            content: "An Additional Medicare Tax of 0.9% applies to wages, compensation, and self-employment income exceeding $200,000 for single filers, $250,000 for married filing jointly, and $125,000 for married filing separately. Unlike the Social Security cap, there is no income ceiling for the Additional Medicare Tax — it applies to all earnings above the threshold."
          }
        ],
        steps: [
          { step: 1, title: "Identify Your Earned Income", description: "Determine your total wages, salaries, tips, and net self-employment earnings subject to FICA tax." },
          { step: 2, title: "Check the Wage Base Cap", description: "Compare your earnings to the current year Social Security wage base cap. Income above the cap is not subject to the 6.2% Social Security tax." },
          { step: 3, title: "Calculate Regular FICA", description: "Apply 6.2% Social Security tax (up to the cap) and 1.45% Medicare tax to your eligible earnings." },
          { step: 4, title: "Check for Additional Medicare Tax", description: "If your earnings exceed $200,000 (single) or $250,000 (married filing jointly), calculate the 0.9% Additional Medicare Tax on the excess." },
          { step: 5, title: "Verify Withholding", description: "Check your pay stub or Form W-2 to confirm the correct amount of FICA was withheld or remitted." }
        ],
        tips: [
          "Self-employed individuals should set aside 15.3% of net self-employment income to cover both the employee and employer FICA portions.",
          "The Additional Medicare Tax is reported on Form 8959 and may trigger a tax liability even when your employer has already withheld the standard rate."
        ]
      },
      {
        slug: "se-tax-guide",
        title: "Self-Employment Tax Guide",
        description: "How SE tax works, the deductible portion, and guidance on quarterly estimated payments.",
        image: "/images/guides/united-states/se-tax-guide.jpg",
        sections: [
          {
            title: "Understanding SE Tax",
            content: "Self-employment tax (SE tax) is the Social Security and Medicare tax for individuals who work for themselves. It is calculated at 15.3% of your net self-employment income (92.35% of net earnings from self-employment). The rate is composed of 12.4% for Social Security and 2.9% for Medicare — the same total rate as FICA, but both the employee and employer portions are paid by the self-employed individual."
          },
          {
            title: "The Deductible Portion",
            content: "Since self-employed individuals pay both the employee and employer portions of FICA, they can deduct the employer-equivalent portion (50% of the total SE tax) as an above-the-line deduction on Form 1040. This deduction reduces your adjusted gross income (AGI) and is available regardless of whether you itemize deductions."
          },
          {
            title: "Quarterly Estimated Payments",
            content: "Unlike employees who have FICA withheld from each paycheck, self-employed individuals must make quarterly estimated tax payments to the IRS. These payments are due April 15, June 15, September 15, and January 15 of the following year. Failure to make adequate quarterly payments may result in underpayment penalties."
          }
        ],
        steps: [
          { step: 1, title: "Calculate Net Self-Employment Income", description: "Subtract all legitimate business expenses from your gross self-employment earnings to arrive at net earnings." },
          { step: 2, title: "Apply the 92.35% Adjustment", description: "Multiply net earnings by 92.35% (half of 1% reduction for the deduction adjustment). This gives your net earnings subject to SE tax." },
          { step: 3, title: "Calculate Total SE Tax", description: "Apply 15.3% to the adjusted net earnings. The Social Security portion only applies up to the annual wage base cap." },
          { step: 4, title: "Deduct the Employer Equivalent", description: "Subtract 50% of your SE tax from your AGI as the above-the-line deduction for the employer-equivalent portion." },
          { step: 5, title: "Make Quarterly Estimated Payments", description: "Use IRS Form 1040-ES to calculate and pay your estimated taxes each quarter to avoid underpayment penalties." }
        ],
        tips: [
          "Use Schedule C to properly categorize and deduct all legitimate business expenses from your self-employment income.",
          "Consider forming an LLC or S-Corp for liability protection and potential tax savings on self-employment tax.",
          "Keep meticulous records of business expenses, mileage, and home office usage to maximize deductions legally."
        ]
      },
      {
        slug: "business-entities",
        title: "Business Entity Tax Guide",
        description: "Compare tax obligations by business entity type: C-Corp, S-Corp, LLC, and sole proprietorship.",
        image: "/images/guides/united-states/business-entities.jpg",
        sections: [
          {
            title: "C-Corporation",
            content: "A C-Corporation is a separate legal entity that pays corporate tax on its profits at a flat 21% rate. When profits are distributed as dividends to shareholders, those dividends are taxed again at the individual level, resulting in double taxation. C-Corporations are the best choice for businesses planning to reinvest most profits, seek outside investors, or go public. They offer the most robust liability protection and can deduct employee benefits like health insurance and retirement plans."
          },
          {
            title: "S-Corporation",
            content: "An S-Corporation is a pass-through entity where income, losses, deductions, and credits flow through to shareholders' personal tax returns. The entity itself does not pay federal income tax. This avoids double taxation. S-Corps have limitations: shareholders must be US citizens or residents, the number of shareholders is capped at 100, and only one class of stock is permitted. Reasonable shareholder salaries must be paid before distributing the remaining profit as distributions, which are not subject to self-employment tax."
          },
          {
            title: "LLC and Sole Proprietorship",
            content: "A Single-Member LLC is treated as a sole proprietorship by default for tax purposes, with all profits and losses reported on the owner's personal return. A Multi-Member LLC is treated as a partnership by default. Both pass through income to owners, avoiding corporate-level tax. LLCs provide liability protection while maintaining tax simplicity. The key trade-off is self-employment tax on all net earnings, which S-Corps can partially avoid through strategic salary distributions."
          }
        ],
        steps: [
          { step: 1, title: "Evaluate Your Business Goals", description: "Consider whether you need to attract investors, retain earnings, distribute profits, or maintain operational simplicity." },
          { step: 2, title: "Compare Tax Implications", description: "Understand how each entity type affects your tax liability, including pass-through taxation, double taxation, and self-employment tax." },
          { step: 3, title: "Assess Liability and Compliance Requirements", description: "Consider liability protection needs, state filing requirements, annual fees, and ongoing compliance obligations for each entity type." },
          { step: 4, title: "Consult a Professional", description: "Business entity selection has long-term tax and legal implications. Consult with a tax advisor or attorney to make the best decision for your situation." }
        ],
        tips: [
          "An S-Corp election can save significant self-employment tax if your business generates substantial profit beyond a reasonable salary.",
          "LLC members should be aware that all net earnings are subject to self-employment tax unless an S-Corp election is made.",
          "State-level taxes and fees vary significantly by entity type and state — consider both federal and state implications."
        ]
      },
      {
        slug: "capital-gains-guide",
        title: "Capital Gains Tax Guide",
        description: "Understand short-term vs long-term capital gains, tax rates, and strategies to minimize your tax liability.",
        image: "/images/guides/united-states/capital-gains-guide.jpg",
        sections: [
          {
            title: "Short-Term vs Long-Term Capital Gains",
            content: "Capital gains are classified based on how long you held the asset before selling. Short-term capital gains apply to assets held for one year or less and are taxed at your ordinary income tax rate. Long-term capital gains apply to assets held for more than one year and receive preferential tax rates of 0%, 15%, or 20% depending on your taxable income and filing status. This distinction creates a strong incentive for buy-and-hold investment strategies."
          },
          {
            title: "Capital Gains Tax Rates by Income",
            content: "For the 2025 tax year, the long-term capital gains rate is 0% for single filers with taxable income up to $48,350 and married filing jointly up to $97,500. The 15% rate applies to incomes between those thresholds and up to $518,900 (single) or $583,750 (married filing jointly). The 20% rate applies to incomes above those thresholds. High-income taxpayers may also be subject to the Net Investment Income Tax (NIIT) of 3.8% on investment income."
          },
          {
            title: "Strategies to Minimize Capital Gains Tax",
            content: "Tax-loss harvesting involves selling investments at a loss to offset gains elsewhere in your portfolio. Holding assets for more than one year qualifies them for the lower long-term rates. Donating appreciated assets to charity allows you to avoid capital gains tax entirely while receiving a fair market value deduction. Gifting assets to family members can shift future gains to recipients in lower tax brackets."
          }
        ],
        steps: [
          { step: 1, title: "Classify Each Gain by Holding Period", description: "Determine whether each investment was held for more than one year (long-term) or one year or less (short-term). This determines the applicable tax rate." },
          { step: 2, title: "Calculate Total Gains and Losses", description: "Sum all short-term gains and losses separately, and long-term gains and losses separately. Net each category to determine your overall capital gain or loss." },
          { step: 3, title: "Apply the Correct Tax Rate", description: "Apply ordinary income rates to net short-term gains and preferential rates (0%, 15%, or 20%) to net long-term gains based on your taxable income." },
          { step: 4, title: "Report on Your Tax Return", description: "Report capital gains and losses on Schedule D and Form 8949 of your federal tax return. Keep detailed records of each transaction for audit purposes." }
        ],
        tips: [
          "Tax-loss harvesting can offset up to $3,000 in ordinary income annually with capital losses, with unused losses carried forward indefinitely.",
          "The Wash Sale Rule prohibits claiming a loss if you repurchase the same or substantially identical security within 30 days before or after the sale.",
          "Qualified dividends are taxed at long-term capital gains rates rather than ordinary income rates, making them more tax-efficient."
        ]
      },
      {
        slug: "property-sale-tax",
        title: "Tax Implications of Selling Property",
        description: "Guide to capital gains on real estate, depreciation recapture, 1031 exchanges, and primary residence exclusions.",
        image: "/images/guides/united-states/property-sale-tax.jpg",
        sections: [
          {
            title: "Capital Gains on Real Estate",
            content: "When selling real estate, the profit is calculated as the sale price minus your cost basis (purchase price plus improvements and selling costs). If the property was held for more than one year, it qualifies for long-term capital gains rates. Rental properties that have depreciated over time present an additional tax consideration: when you sell, you must recapture the depreciation deductions you previously claimed, which is taxed at a maximum rate of 25%."
          },
          {
            title: "Primary Residence Exclusion",
            content: "Homeowners can exclude up to $250,000 in capital gains ($500,000 for married filing jointly) from the sale of their primary residence, provided they have lived in the home for at least two of the previous five years. The property does not need to be your primary residence for both years, but it does not need to be your primary residence for the entire two-year period — just meet the ownership and use tests."
          },
          {
            title: "1031 Exchange",
            content: "A Section 1031 exchange allows investors to defer all capital gains tax by reinvesting the proceeds from a property sale into a like-kind replacement property. Both the relinquished property and the replacement property must be used for business or investment purposes. The exchange must be completed within 180 days of the sale, and a qualified intermediary must facilitate the transaction."
          }
        ],
        steps: [
          { step: 1, title: "Determine Your Cost Basis", description: "Add the original purchase price to all capital improvements (not routine repairs) and subtract any depreciation taken to arrive at your adjusted cost basis." },
          { step: 2, title: "Calculate the Gain or Loss", description: "Subtract the adjusted cost basis and selling expenses (commission, closing costs, etc.) from the sale price to determine your capital gain or loss." },
          { step: 3, title: "Depreciation Recapture", description: "If the property was a rental, calculate the total depreciation claimed and recognize it as unrecaptured Section 1250 gain taxed at up to 25%." },
          { step: 4, title: "Apply Exclusion If Eligible", description: "If the property was your primary residence, calculate whether you qualify for the $250,000/$500,000 exclusion." },
          { step: 5, title: "Consider a 1031 Exchange", description: "If reinvesting in another investment property, explore using a Section 1031 exchange to defer capital gains tax entirely." },
          { step: 6, title: "Report on Tax Return", description: "Report the sale on Schedule D and Form 8949. Depreciation recapture may require additional schedules and forms." }
        ],
        tips: [
          "Keep all records of home improvements to maximize your cost basis and minimize taxable gain when selling.",
          "1031 exchanges are complex transactions — use a qualified intermediary and consult a tax professional to ensure compliance.",
          "If you are selling your primary residence, timing the sale to maximize the two-year ownership and use test is critical for qualifying for the full exclusion."
        ]
      },
      {
        slug: "estate-planning",
        title: "Estate Planning Tax Guide",
        description: "Strategies to minimize estate tax including gifting, trusts, and charitable giving.",
        image: "/images/guides/united-states/estate-planning.jpg",
        sections: [
          {
            title: "Federal Estate Tax Exemption",
            content: "The federal estate tax applies to the transfer of property at death. For 2025, the basic exclusion amount is $13.61 million per individual ($27.22 million for married couples). Only estates exceeding this threshold owe federal estate tax, which means the vast majority of estates are not subject to the tax. The rate for taxable estates is 40% on the amount exceeding the exemption."
          },
          {
            title: "Gift Tax and Annual Exclusion",
            content: "The annual gift tax exclusion allows you to give up to $18,000 per recipient per year without incurring gift tax or reducing your lifetime exemption. This amount is indexed for inflation and can be used for education or medical expenses paid directly to institutions without any limit. Strategic gifting during your lifetime can reduce your taxable estate over time while allowing you to see the benefits of your generosity."
          },
          {
            title: "Trusts for Estate Planning",
            content: "Revocable living trusts allow you to manage assets during your lifetime and specify distribution upon death while avoiding probate. Irrevocable trusts remove assets from your taxable estate entirely, providing both estate tax reduction and asset protection. Qualified Personal Residence Trusts (QPRTs), Grantor Retained Annuity Trusts (GRATs), and Charitable Remainder Trusts (CRTs) are specialized tools for high-net-worth individuals seeking to minimize estate tax exposure."
          }
        ],
        steps: [
          { step: 1, title: "Assess Your Estate", description: "Take inventory of all assets including real estate, investments, retirement accounts, life insurance, and business interests to determine your total estate value." },
          { step: 2, title: "Determine Estate Tax Exposure", description: "Compare your total estate value against the current federal exemption. Consider state estate or inheritance taxes which may have much lower thresholds." },
          { step: 3, title: "Develop Gifting Strategy", description: "Plan annual gifts to reduce your estate over time. Consider larger gifts for education or medical expenses which do not count against annual limits." },
          { step: 4, title: "Establish Trusts If Needed", description: "Consult with an estate planning attorney to determine which types of trusts may benefit your situation, such as revocable living trusts, irrevocable trusts, or charitable trusts." },
          { step: 5, title: "Review and Update Regularly", description: "Life changes such as marriage, divorce, births, and significant asset changes require regular review and updating of your estate plan." }
        ],
        tips: [
          "Life insurance proceeds are generally included in your taxable estate — consider placing policies in an irrevocable life insurance trust (ILIT).",
          "Charitable bequests from your estate reduce the taxable estate dollar-for-dollar and can significantly lower estate tax liability.",
          "Spouses can transfer unlimited assets to each other tax-free, making joint estate planning essential for maximizing the combined exemption."
        ]
      }
    ],
    faqs: [
      { question: "When is the federal tax filing deadline?", answer: "The federal tax filing deadline is typically April 15th. Extensions are available until October 15th by filing Form 4868." },
      { question: "Do I need to file if I live abroad?", answer: "US citizens and green card holders must file federal tax returns regardless of where they live abroad. Foreign earned income exclusion may apply." },
      { question: "What is the standard deduction for 2025?", answer: "The 2025 standard deduction is $15,000 for single filers, $30,000 for married filing jointly, and $22,500 for heads of household." },
      { question: "What are the 2025 federal tax brackets?", answer: "The 2025 federal income tax brackets are 10%, 12%, 22%, 24%, 32%, 35%, and 37% depending on your taxable income and filing status." }
    ]
  },
  {
    slug: "payroll-tax",
    name: "Payroll Tax",
    description: "Employer and employee payroll tax obligations including FICA and self-employment taxes.",
    overview: "Payroll taxes fund Social Security and Medicare through FICA (Federal Insurance Contributions Act). Employees pay 6.2% for Social Security and 1.45% for Medicare, while employers match these contributions. Self-employed individuals pay both the employee and employer portions through SECA.",
    calculators: [
      { slug: "payroll-tax-calculator", name: "Payroll Tax Calculator", description: "Calculate employer and employee payroll tax contributions including FICA and SE tax." },
      { slug: "fica-calculator", name: "FICA Tax Calculator", description: "Calculate Social Security and Medicare taxes on your wages." },
      { slug: "self-employment-tax", name: "Self-Employment Tax Calculator", description: "Estimate SE tax for freelancers and independent contractors." }
    ],
    guides: [
      { slug: "fica-guide", title: "Complete FICA Tax Guide", description: "Understanding Social Security and Medicare taxes, wage base limits, and additional Medicare tax.", image: "/images/guides/united-states/fica-guide.jpg", sections: [ { title: "What is FICA?", content: "FICA (Federal Insurance Contributions Act) is the payroll tax that funds Social Security and Medicare. Employees pay 6.2% for Social Security and 1.45% for Medicare, totaling 7.65%. Employers match these exact amounts, making the total FICA contribution 15.3% (7.65% employee + 7.65% employer). Self-employed individuals pay the full 15.3% through SE tax but can deduct the employer-equivalent portion." }, { title: "Social Security Wage Base Limit", content: "The Social Security tax of 6.2% only applies to earnings up to the annual wage base cap. In 2025, the cap is $176,100. Any earnings above this threshold are not subject to Social Security tax. This creates a natural ceiling on the maximum Social Security tax you will pay in a year, and for high earners, it effectively becomes a lower effective rate." }, { title: "Additional Medicare Tax", content: "An Additional Medicare Tax of 0.9% applies to wages, compensation, and self-employment income exceeding $200,000 for single filers, $250,000 for married filing jointly, and $125,000 for married filing separately. Unlike the Social Security cap, there is no income ceiling for the Additional Medicare Tax — it applies to all earnings above the threshold." } ], steps: [ { step: 1, title: "Identify Your Earned Income", description: "Determine your total wages, salaries, tips, and net self-employment earnings subject to FICA tax." }, { step: 2, title: "Check the Wage Base Cap", description: "Compare your earnings to the current year Social Security wage base cap. Income above the cap is not subject to the 6.2% Social Security tax." }, { step: 3, title: "Calculate Regular FICA", description: "Apply 6.2% Social Security tax (up to the cap) and 1.45% Medicare tax to your eligible earnings." }, { step: 4, title: "Check for Additional Medicare Tax", description: "If your earnings exceed $200,000 (single) or $250,000 (married filing jointly), calculate the 0.9% Additional Medicare Tax on the excess." }, { step: 5, title: "Verify Withholding", description: "Check your pay stub or Form W-2 to confirm the correct amount of FICA was withheld or remitted." } ], tips: [ "Self-employed individuals should set aside 15.3% of net self-employment income to cover both the employee and employer FICA portions.", "The Additional Medicare Tax is reported on Form 8959 and may trigger a tax liability even when your employer has already withheld the standard rate." ] },
      { slug: "se-tax-guide", title: "Self-Employment Tax Guide", description: "How SE tax works, deductible portion, and quarterly estimated payments.", image: "/images/guides/united-states/se-tax-guide.jpg", sections: [ { title: "Understanding SE Tax", content: "Self-employment tax (SE tax) is the Social Security and Medicare tax for individuals who work for themselves. It is calculated at 15.3% of your net self-employment income (92.35% of net earnings from self-employment). The rate is composed of 12.4% for Social Security and 2.9% for Medicare — the same total rate as FICA, but both the employee and employer portions are paid by the self-employed individual." }, { title: "The Deductible Portion", content: "Since self-employed individuals pay both the employee and employer portions of FICA, they can deduct the employer-equivalent portion (50% of the total SE tax) as an above-the-line deduction on Form 1040. This deduction reduces your adjusted gross income (AGI) and is available regardless of whether you itemize deductions." }, { title: "Quarterly Estimated Payments", content: "Unlike employees who have FICA withheld from each paycheck, self-employed individuals must make quarterly estimated tax payments to the IRS. These payments are due April 15, June 15, September 15, and January 15 of the following year. Failure to make adequate quarterly payments may result in underpayment penalties." } ], steps: [ { step: 1, title: "Calculate Net Self-Employment Income", description: "Subtract all legitimate business expenses from your gross self-employment earnings to arrive at net earnings." }, { step: 2, title: "Apply the 92.35% Adjustment", description: "Multiply net earnings by 92.35% (half of 1% reduction for the deduction adjustment). This gives your net earnings subject to SE tax." }, { step: 3, title: "Calculate Total SE Tax", description: "Apply 15.3% to the adjusted net earnings. The Social Security portion only applies up to the annual wage base cap." }, { step: 4, title: "Deduct the Employer Equivalent", description: "Subtract 50% of your SE tax from your AGI as the above-the-line deduction for the employer-equivalent portion." }, { step: 5, title: "Make Quarterly Estimated Payments", description: "Use IRS Form 1040-ES to calculate and pay your estimated taxes each quarter to avoid underpayment penalties." } ], tips: [ "Use Schedule C to properly categorize and deduct all legitimate business expenses from your self-employment income.", "Consider forming an LLC or S-Corp for liability protection and potential tax savings on self-employment tax.", "Keep meticulous records of business expenses, mileage, and home office usage to maximize deductions legally." ] }
    ],
    faqs: [
      { question: "What is the FICA tax rate for employees?", answer: "7.65% total (6.2% Social Security + 1.45% Medicare). The employer matches the same amount." },
      { question: "When does the Social Security wage base cap apply?", answer: "In 2025, the Social Security wage base cap is $176,100. Earnings above this are not subject to Social Security tax." }
    ]
  },
  {
    slug: "corporate-tax",
    name: "Corporate Tax",
    description: "Federal corporate income tax and business entity taxes.",
    overview: "The federal corporate tax rate is a flat 21% on taxable income for C-Corporations. Pass-through entities such as S-Corporations, LLCs, and partnerships are not taxed at the entity level; instead, income flows through to owners who report it on their personal returns.",
    calculators: [
      { slug: "corporate-tax-calculator", name: "Corporate Tax Calculator", description: "Estimate corporate income tax liability for C-Corporations." },
      { slug: "small-business-tax", name: "Small Business Tax Calculator", description: "Estimate taxes for pass-through business entities." }
    ],
    guides: [
      { slug: "business-entities", title: "Business Entity Tax Guide", description: "Compare tax obligations by business entity type: C-Corp, S-Corp, LLC, and sole proprietorship.", image: "/images/guides/united-states/business-entities.jpg", sections: [ { title: "C-Corporation", content: "A C-Corporation is a separate legal entity that pays corporate tax on its profits at a flat 21% rate. When profits are distributed as dividends to shareholders, those dividends are taxed again at the individual level, resulting in double taxation. C-Corporations are the best choice for businesses planning to reinvest most profits, seek outside investors, or go public. They offer the most robust liability protection and can deduct employee benefits like health insurance and retirement plans." }, { title: "S-Corporation", content: "An S-Corporation is a pass-through entity where income, losses, deductions, and credits flow through to shareholders' personal tax returns. The entity itself does not pay federal income tax. This avoids double taxation. S-Corps have limitations: shareholders must be US citizens or residents, the number of shareholders is capped at 100, and only one class of stock is permitted. Reasonable shareholder salaries must be paid before distributing the remaining profit as distributions, which are not subject to self-employment tax." }, { title: "LLC and Sole Proprietorship", content: "A Single-Member LLC is treated as a sole proprietorship by default for tax purposes, with all profits and losses reported on the owner's personal return. A Multi-Member LLC is treated as a partnership by default. Both pass through income to owners, avoiding corporate-level tax. LLCs provide liability protection while maintaining tax simplicity. The key trade-off is self-employment tax on all net earnings, which S-Corps can partially avoid through strategic salary distributions." } ], steps: [ { step: 1, title: "Evaluate Your Business Goals", description: "Consider whether you need to attract investors, retain earnings, distribute profits, or maintain operational simplicity." }, { step: 2, title: "Compare Tax Implications", description: "Understand how each entity type affects your tax liability, including pass-through taxation, double taxation, and self-employment tax." }, { step: 3, title: "Assess Liability and Compliance Requirements", description: "Consider liability protection needs, state filing requirements, annual fees, and ongoing compliance obligations for each entity type." }, { step: 4, title: "Consult a Professional", description: "Business entity selection has long-term tax and legal implications. Consult with a tax advisor or attorney to make the best decision for your situation." } ], tips: [ "An S-Corp election can save significant self-employment tax if your business generates substantial profit beyond a reasonable salary.", "LLC members should be aware that all net earnings are subject to self-employment tax unless an S-Corp election is made.", "State-level taxes and fees vary significantly by entity type and state — consider both federal and state implications." ] },
      { slug: "capital-gains-guide", title: "Capital Gains Tax Guide", description: "Understand short-term vs long-term capital gains, tax rates, and strategies to minimize tax.", image: "/images/guides/united-states/capital-gains-guide.jpg", sections: [ { title: "Short-Term vs Long-Term Capital Gains", content: "Capital gains are classified based on how long you held the asset before selling. Short-term capital gains apply to assets held for one year or less and are taxed at your ordinary income tax rate. Long-term capital gains apply to assets held for more than one year and receive preferential tax rates of 0%, 15%, or 20% depending on your taxable income and filing status. This distinction creates a strong incentive for buy-and-hold investment strategies." }, { title: "Capital Gains Tax Rates by Income", content: "For the 2025 tax year, the long-term capital gains rate is 0% for single filers with taxable income up to $48,350 and married filing jointly up to $97,500. The 15% rate applies to incomes between those thresholds and up to $518,900 (single) or $583,750 (married filing jointly). The 20% rate applies to incomes above those thresholds. High-income taxpayers may also be subject to the Net Investment Income Tax (NIIT) of 3.8% on investment income." }, { title: "Strategies to Minimize Capital Gains Tax", content: "Tax-loss harvesting involves selling investments at a loss to offset gains elsewhere in your portfolio. Holding assets for more than one year qualifies them for the lower long-term rates. Donating appreciated assets to charity allows you to avoid capital gains tax entirely while receiving a fair market value deduction. Gifting assets to family members can shift future gains to recipients in lower tax brackets." } ], steps: [ { step: 1, title: "Classify Each Gain by Holding Period", description: "Determine whether each investment was held for more than one year (long-term) or one year or less (short-term). This determines the applicable tax rate." }, { step: 2, title: "Calculate Total Gains and Losses", description: "Sum all short-term gains and losses separately, and long-term gains and losses separately. Net each category to determine your overall capital gain or loss." }, { step: 3, title: "Apply the Correct Tax Rate", description: "Apply ordinary income rates to net short-term gains and preferential rates (0%, 15%, or 20%) to net long-term gains based on your taxable income." }, { step: 4, title: "Report on Your Tax Return", description: "Report capital gains and losses on Schedule D and Form 8949 of your federal tax return. Keep detailed records of each transaction for audit purposes." } ], tips: [ "Tax-loss harvesting can offset up to $3,000 in ordinary income annually with capital losses, with unused losses carried forward indefinitely.", "The Wash Sale Rule prohibits claiming a loss if you repurchase the same or substantially identical security within 30 days before or after the sale.", "Qualified dividends are taxed at long-term capital gains rates rather than ordinary income rates, making them more tax-efficient." ] }
    ],
    faqs: [
      { question: "What is the federal corporate tax rate?", answer: "21% flat rate on taxable income for C-Corporations. Pass-through entities are taxed at individual rates." },
      { question: "Are state corporate taxes different from federal?", answer: "Yes, most states impose separate corporate income taxes with varying rates and rules." }
    ]
  },
  {
    slug: "capital-gains-tax",
    name: "Capital Gains Tax",
    description: "Tax on profits from the sale of investments and property.",
    overview: "Capital gains tax rates depend on your holding period and income level. Short-term gains (assets held less than one year) are taxed at your ordinary income tax rate. Long-term gains (assets held more than one year) receive preferential rates of 0%, 15%, or 20% depending on your taxable income.",
    calculators: [
      { slug: "capital-gains-calculator", name: "Capital Gains Tax Calculator", description: "Estimate tax on investment gains from stocks, real estate, and other assets." },
      { slug: "ltcg-calculator", name: "Long-Term Capital Gains Calculator", description: "Calculate long-term capital gains tax with indexation benefits for property sales." }
    ],
    guides: [
      { slug: "capital-gains-guide", title: "Capital Gains Tax Guide", description: "Understand short-term vs long-term capital gains, tax rates, and strategies to minimize tax." },
      { slug: "property-sale-tax", title: "Tax Implications of Selling Property", description: "Guide to capital gains on real estate, depreciation recapture, and 1031 exchanges." }
    ],
    faqs: [
      { question: "What is the long-term capital gains tax rate?", answer: "0%, 15%, or 20% depending on your taxable income. Most taxpayers pay 15%." },
      { question: "How long do I need to hold an asset for long-term treatment?", answer: "Assets must be held for more than one year to qualify for long-term capital gains rates." }
    ]
  },
  {
    slug: "estate-tax",
    name: "Estate & Inheritance Tax",
    description: "Federal estate tax and state inheritance taxes.",
    overview: "The federal estate tax applies to the transfer of property at death. For 2025, the exemption is $13.61 million per individual. Only estates exceeding this threshold owe federal estate tax. Some states also impose their own estate or inheritance taxes.",
    calculators: [
      { slug: "estate-tax-calculator", name: "Estate Tax Calculator", description: "Estimate federal estate tax liability and understand the exemption threshold." }
    ],
    guides: [
      { slug: "estate-planning", title: "Estate Planning Tax Guide", description: "Strategies to minimize estate tax including gifting, trusts, and charitable giving.", image: "/images/guides/united-states/estate-planning.jpg", sections: [ { title: "Federal Estate Tax Exemption", content: "The federal estate tax applies to the transfer of property at death. For 2025, the basic exclusion amount is $13.61 million per individual ($27.22 million for married couples). Only estates exceeding this threshold owe federal estate tax, which means the vast majority of estates are not subject to the tax. The rate for taxable estates is 40% on the amount exceeding the exemption." }, { title: "Gift Tax and Annual Exclusion", content: "The annual gift tax exclusion allows you to give up to $18,000 per recipient per year without incurring gift tax or reducing your lifetime exemption. This amount is indexed for inflation and can be used for education or medical expenses paid directly to institutions without any limit. Strategic gifting during your lifetime can reduce your taxable estate over time while allowing you to see the benefits of your generosity." }, { title: "Trusts for Estate Planning", content: "Revocable living trusts allow you to manage assets during your lifetime and specify distribution upon death while avoiding probate. Irrevocable trusts remove assets from your taxable estate entirely, providing both estate tax reduction and asset protection. Qualified Personal Residence Trusts (QPRTs), Grantor Retained Annuity Trusts (GRATs), and Charitable Remainder Trusts (CRTs) are specialized tools for high-net-worth individuals seeking to minimize estate tax exposure." } ], steps: [ { step: 1, title: "Assess Your Estate", description: "Take inventory of all assets including real estate, investments, retirement accounts, life insurance, and business interests to determine your total estate value." }, { step: 2, title: "Determine Estate Tax Exposure", description: "Compare your total estate value against the current federal exemption. Consider state estate or inheritance taxes which may have much lower thresholds." }, { step: 3, title: "Develop Gifting Strategy", description: "Plan annual gifts to reduce your estate over time. Consider larger gifts for education or medical expenses which do not count against annual limits." }, { step: 4, title: "Establish Trusts If Needed", description: "Consult with an estate planning attorney to determine which types of trusts may benefit your situation, such as revocable living trusts, irrevocable trusts, or charitable trusts." }, { step: 5, title: "Review and Update Regularly", description: "Life changes such as marriage, divorce, births, and significant asset changes require regular review and updating of your estate plan." } ], tips: [ "Life insurance proceeds are generally included in your taxable estate — consider placing policies in an irrevocable life insurance trust (ILIT).", "Charitable bequests from your estate reduce the taxable estate dollar-for-dollar and can significantly lower estate tax liability.", "Spouses can transfer unlimited assets to each other tax-free, making joint estate planning essential for maximizing the combined exemption." ] }
    ],
    faqs: [
      { question: "What is the federal estate tax exemption for 2025?", answer: "The 2025 federal estate tax exemption is $13.61 million per individual." },
      { question: "Does everyone pay estate tax when they die?", answer: "No. Only estates exceeding the exemption threshold owe federal estate tax. Most estates are below the threshold." }
    ]
  }
];

export const unitedStates: Country = {
  slug: "united-states",
  name: "United States",
  flag: "/logos/united-states.png",
  continent: "North America",
  officialTaxAuthority: "Internal Revenue Service (IRS)",
  taxAuthorityUrl: "https://www.irs.gov",
  currency: "USD",
  capital: "Washington, D.C.",
  population: "331 million",
  gdp: "$25.5 trillion",
  officialLanguage: "English (no official language at federal level)",
  overview: "The United States has the world's largest economy and the most complex tax system. The federal government imposes a progressive income tax, payroll taxes, corporate taxes, capital gains taxes, and estate taxes. State and local governments add their own tax layers. Tax residents are taxed on worldwide income, while non-residents are taxed only on US-source income. The tax year follows the calendar year, with returns due April 15th.",
  taxSystemOverview: {
    incomeTax: "Progressive federal rates from 10% to 37%. State income tax varies (0% to 13.3%). Local taxes may also apply in some jurisdictions.",
    capitalGainsTax: "0%, 15%, or 20% for long-term gains based on income level. Short-term gains taxed at ordinary income rates. Collectibles taxed at 28%.",
    vatGstSalesTax: "No federal VAT/GST. Sales tax varies by state (0% to 7.25% average). Some states have no sales tax (Alaska, Delaware, Montana, New Hampshire, Oregon).",
    corporateTax: "Flat 21% federal corporate tax rate for C-Corporations. Pass-through entities taxed at individual rates.",
    payrollTax: "7.65% FICA (6.2% Social Security + 1.45% Medicare). Additional 0.9% Medicare tax on earnings above $200,000. Self-employed pay both halves (15.3% total)."
  },
  taxCategories,
  popularCalculators: [
    { slug: "federal-income-tax", name: "Federal Income Tax Calculator", category: "income-tax" },
    { slug: "capital-gains-calculator", name: "Capital Gains Tax Calculator", category: "capital-gains-tax" },
    { slug: "payroll-tax-calculator", name: "Payroll Tax Calculator", category: "payroll-tax" }
  ],
  relatedCountries: ["united-kingdom", "canada"],
  latestUpdates: [
    { date: "2025-01-01", title: "2025 Tax Brackets Updated", description: "IRS released updated tax brackets for 2025 with adjusted standard deductions and bracket thresholds." },
    { date: "2024-12-31", title: "SECURE 2.0 Act Provisions", description: "New retirement account rules and increased catch-up contributions for 2025." },
    { date: "2024-01-01", title: "2024 Tax Brackets Updated", description: "IRS released updated tax brackets and inflation adjustments for tax year 2024." }
  ]
};
