export function calcUSFederalIncomeTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const status = inputs.filingStatus || "single";
  const stdDedType = inputs.standardDeduction || "standard";
  const itemized = inputs.itemizedAmount ? parseFloat(inputs.itemizedAmount) : 0;
  const year = inputs.taxYear ? parseInt(inputs.taxYear) : 2025;

  let deduction = itemized;
  if (stdDedType === "standard") {
    if (status === "married_joint") deduction = year >= 2025 ? 30000 : year >= 2024 ? 29200 : 22000;
    else if (status === "head_of_household") deduction = year >= 2025 ? 22500 : year >= 2024 ? 20800 : 15700;
    else if (status === "married_separate") deduction = year >= 2025 ? 15000 : year >= 2024 ? 14600 : 11000;
    else deduction = year >= 2025 ? 15000 : year >= 2024 ? 14600 : 11000;
  }

  const taxable = Math.max(0, income - deduction);
  let tax = 0;

  if (status === "single") {
    if (year >= 2025) tax = pTax(taxable, [[15000, 0.10], [61050, 0.12], [110250, 0.22], [223250, 0.24], [398350, 0.32], [517200, 0.35], [100000000, 0.37]]);
    else if (year >= 2024) tax = pTax(taxable, [[14600, 0.10], [55900, 0.12], [100525, 0.22], [191950, 0.24], [243725, 0.32], [609350, 0.35], [100000000, 0.37]]);
    else tax = pTax(taxable, [[11000, 0.10], [44725, 0.12], [95375, 0.22], [182050, 0.24], [231250, 0.32], [578125, 0.35], [100000000, 0.37]]);
  } else if (status === "married_joint") {
    if (year >= 2025) tax = pTax(taxable, [[30000, 0.10], [122100, 0.12], [220500, 0.22], [398350, 0.24], [517200, 0.32], [731200, 0.35], [100000000, 0.37]]);
    else if (year >= 2024) tax = pTax(taxable, [[29200, 0.10], [111800, 0.12], [201050, 0.22], [383900, 0.24], [487450, 0.32], [731200, 0.35], [100000000, 0.37]]);
    else tax = pTax(taxable, [[22000, 0.10], [89450, 0.12], [190750, 0.22], [364200, 0.24], [462500, 0.32], [693750, 0.35], [100000000, 0.37]]);
  } else if (status === "head_of_household") {
    if (year >= 2025) tax = pTax(taxable, [[22500, 0.10], [89500, 0.12], [156700, 0.22], [253850, 0.24], [517200, 0.32], [100000000, 0.35]]);
    else if (year >= 2024) tax = pTax(taxable, [[20800, 0.10], [83800, 0.12], [150500, 0.22], [229050, 0.24], [470250, 0.32], [610100, 0.35], [100000000, 0.37]]);
    else tax = pTax(taxable, [[15700, 0.10], [59850, 0.12], [95250, 0.22], [182050, 0.24], [231250, 0.32], [578100, 0.35], [100000000, 0.37]]);
  } else if (status === "married_separate") {
    if (year >= 2025) tax = pTax(taxable, [[15000, 0.10], [61050, 0.12], [110250, 0.22], [199675, 0.24], [258600, 0.32], [365600, 0.35], [100000000, 0.37]]);
    else if (year >= 2024) tax = pTax(taxable, [[14600, 0.10], [55900, 0.12], [100525, 0.22], [191950, 0.24], [243725, 0.32], [365600, 0.35], [100000000, 0.37]]);
    else tax = pTax(taxable, [[11000, 0.10], [44725, 0.12], [95375, 0.22], [182050, 0.24], [231250, 0.32], [346875, 0.35], [100000000, 0.37]]);
  }

  const effective = income > 0 ? (tax / income) * 100 : 0;
  const federalTax = tax;
  const takeHomePay = income - federalTax;
  return { taxableIncome: taxable, federalTax, effectiveRate: effective, takeHomePay };
}

export function calcStateTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const state = inputs.state || "CA";
  const status = inputs.filingStatus || "single";

  const rates: Record<string, number[][]> = {
    CA: status === "married_joint"
      ? [[0, 0], [17618, 0.01], [41726, 0.02], [65306, 0.04], [91538, 0.06], [115648, 0.08], [590742, 0.093], [1000000, 0.103], [1000001, 0.113], [1000002, 0.123], [1000003, 0.133]]
      : [[0, 0], [10099, 0.01], [23942, 0.02], [37788, 0.04], [52455, 0.06], [68523, 0.08], [406176, 0.093], [1000000, 0.103], [1000001, 0.113], [1000002, 0.123], [1000003, 0.133]],
    NY: status === "married_joint"
      ? [[0, 0], [17000, 0.04], [26000, 0.045], [44000, 0.0525], [77500, 0.059], [215400, 0.0645], [500000, 0.0685], [500001, 0.0965], [1000000, 0.103], [1000001, 0.109]]
      : [[0, 0], [8500, 0.04], [11700, 0.045], [25000, 0.0525], [50000, 0.059], [100000, 0.0645], [250000, 0.0685], [250001, 0.0965], [500000, 0.103], [500001, 0.109]],
    TX: [[0, 0]], FL: [[0, 0]], WA: [[0, 0]], AZ: [[0, 0]], CO: [[0, 0]], GA: [[0, 0]], IL: [[0, 0]], AL: [[0, 0]]
  };

  const brackets = rates[state] || rates["CA"];
  const stateTax = pTax(income, brackets);
  const effectiveRate = income > 0 ? (stateTax / income) * 100 : 0;
  return { stateTax, effectiveRate, takeHomePay: income - stateTax };
}

export function calcFICA(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const type = inputs.employmentType || "employed";
  const pretax = inputs.pretaxBenefits ? parseFloat(inputs.pretaxBenefits) : 0;
  const year = inputs.taxYear ? parseInt(inputs.taxYear) : 2025;
  const ssWageBase = year >= 2025 ? 176100 : year >= 2024 ? 168600 : 160200;
  const taxableForSS = Math.max(0, income - pretax);
  const ss = Math.min(taxableForSS, ssWageBase) * (type === "self_employed" ? 0.124 : 0.062);
  const medicare = taxableForSS * (type === "self_employed" ? 0.029 : 0.0145);
  const additionalMedicare = type === "employed" && taxableForSS > 200000 ? (taxableForSS - 200000) * 0.009 : type === "self_employed" && taxableForSS > 200000 ? (taxableForSS - 200000) * 0.018 : 0;
  const totalFICA = ss + medicare + additionalMedicare;
  const employerMatch = type === "employed" ? totalFICA : 0;
  return { socialSecurity: ss, medicare, additionalMedicare, totalFICA, employerMatch };
}

export function calcCorporate(inputs: Record<string, any>) {
  const income = inputs.taxableIncome || 0;
  const entityType = inputs.entityType || "c_corp";
  const year = inputs.taxYear ? parseInt(inputs.taxYear) : 2024;
  if (entityType === "c_corp") {
    const corporateTax = income * 0.21;
    return { corporateTax, effectiveRate: 21, afterTaxIncome: income - corporateTax };
  }
  return { corporateTax: 0, effectiveRate: 0, afterTaxIncome: income, note: "Income passes through to owners and is taxed at individual rates." };
}

export function calcCapitalGains(inputs: Record<string, any>) {
  const gain = inputs.gainAmount || 0;
  const ordinary = inputs.ordinaryIncome || 0;
  const status = inputs.filingStatus || "single";
  const holding = inputs.holdingPeriod || "long_term";
  const asset = inputs.assetType || "stock";
  const year = inputs.taxYear ? parseInt(inputs.taxYear) : 2025;
  let tax = 0;
  if (holding === "short_term") {
    tax = gain * 0.37;
  } else if (asset === "collectibles") {
    tax = gain * 0.28;
  } else {
    if (status === "single") {
      if (ordinary + gain <= 47025) tax = 0;
      else if (ordinary + gain <= 518900) tax = gain * 0.15;
      else tax = gain * 0.20;
    } else {
      if (ordinary + gain <= 94300) tax = 0;
      else if (ordinary + gain <= 584750) tax = gain * 0.15;
      else tax = gain * 0.20;
    }
  }
  const effectiveRate = gain > 0 ? (tax / gain) * 100 : 0;
  return { capitalGainsTax: tax, effectiveRate, afterTaxGain: gain - tax };
}

export function calcIndiaIncomeTax(inputs: Record<string, any>) {
  const regime = inputs.regime || "new";
  const ageGroup = inputs.ageGroup || "below_60";
  const salary = inputs.annualSalary || 0;
  const otherIncome = inputs.otherIncome ? parseFloat(inputs.otherIncome) : 0;
  const hra = inputs.hraReceived ? parseFloat(inputs.hraReceived) : 0;
  const section80C = inputs.section80C ? parseFloat(inputs.section80C) : 0;
  const section80D = inputs.section80D ? parseFloat(inputs.section80D) : 0;
  const homeLoanInterest = inputs.homeLoanInterest ? parseFloat(inputs.homeLoanInterest) : 0;
  const year = inputs.taxYear || "2024-25";

  const grossIncome = salary + otherIncome;
  let totalDeductions = 0;
  let taxableIncome = grossIncome;

  if (regime === "new") {
    totalDeductions = 75000;
    taxableIncome = Math.max(0, grossIncome - totalDeductions);
  } else {
    const standardDeduction = 50000;
    let ageExemption = 0;
    if (ageGroup === "below_60") ageExemption = 250000;
    else if (ageGroup === "senior") ageExemption = 300000;
    else ageExemption = 500000;
    totalDeductions = standardDeduction + Math.min(section80C, 150000) + Math.min(section80D, 25000) + Math.min(homeLoanInterest, 200000) + hra;
    taxableIncome = Math.max(0, grossIncome - totalDeductions - Math.max(0, grossIncome - salary - hra - standardDeduction - Math.min(section80C, 150000) - Math.min(section80D, 25000) - Math.min(homeLoanInterest, 200000)) - ageExemption);
  }

  let incomeTax = 0;
  if (regime === "new") {
    incomeTax = pTax(taxableIncome, [[400000, 0], [800000, 0.05], [1200000, 0.10], [1600000, 0.15], [2000000, 0.20], [2400000, 0.25], [10000000, 0.30]]);
  } else {
    incomeTax = pTax(taxableIncome, [[250000, 0], [500000, 0.05], [1000000, 0.20], [10000000, 0.30]]);
  }
  const cess = incomeTax * 0.04;
  const totalTax = incomeTax + cess;
  const effectiveRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;
  return { grossIncome, totalDeductions, taxableIncome, incomeTax, cess, totalTax, effectiveRate, takeHomePay: grossIncome - totalTax };
}

export function calcGSTOrVAT(inputs: Record<string, any>, defaultRate: number) {
  const amount = inputs.amount || 0;
  const rate = inputs.gstRate || inputs.vatRate || defaultRate;
  const type = inputs.calculationType || "exclusive";
  const rateFloat = parseFloat(rate) || defaultRate;

  let gstAmount = 0, totalAmount = 0, netAmount = 0;
  if (type === "inclusive") {
    gstAmount = amount - (amount / (1 + rateFloat));
    netAmount = amount / (1 + rateFloat);
    totalAmount = amount;
  } else {
    gstAmount = amount * rateFloat;
    netAmount = amount;
    totalAmount = amount * (1 + rateFloat);
  }
  return { gstAmount: gstAmount, totalAmount, netAmount };
}

export function calcSST(inputs: Record<string, any>) {
  const amount = inputs.amount || 0;
  const taxType = inputs.taxType || "sales_10";
  const type = inputs.calculationType || "exclusive";

  const rate = taxType === "sales_5" ? 0.05 : taxType === "sales_10" ? 0.10 : taxType === "service_6" ? 0.06 : 0.08;

  let taxAmount = 0, totalAmount = 0, netAmount = 0;
  if (type === "inclusive") {
    taxAmount = amount - (amount / (1 + rate));
    netAmount = amount / (1 + rate);
    totalAmount = amount;
  } else {
    taxAmount = amount * rate;
    netAmount = amount;
    totalAmount = amount * (1 + rate);
  }
  return { taxAmount, totalAmount, netAmount };
}

export function calcTDS(inputs: Record<string, any>) {
  const amount = inputs.amount || 0;
  const type = inputs.paymentType || "professional";
  const pan = inputs.panAvailable || "yes";

  let rate = 0;
  if (type === "professional") rate = pan === "no" ? 0.20 : 0.10;
  else if (type === "interest") rate = pan === "no" ? 0.20 : 0.10;
  else if (type === "rent") rate = pan === "no" ? 0.20 : 0.10;
  else if (type === "contractor") rate = pan === "no" ? 0.20 : 0.02;
  else if (type === "salary") rate = 0;
  else if (type === "dividend") rate = 0;

  const tdsAmount = amount * rate;
  const netAmount = amount - tdsAmount;
  return { tdsRate: rate * 100, tdsAmount, netAmount };
}

export function calcUKIncomeTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const year = inputs.taxYear ? parseInt(inputs.taxYear.split("-")[0]) : 2024;
  const personalAllowance = year >= 2024 ? 12570 : 12570;
  const taxableIncome = Math.max(0, income - personalAllowance);
  let incomeTax = 0;

  if (year >= 2024) {
    const basic = Math.min(taxableIncome, 37700) * 0.20;
    const higher = Math.min(Math.max(taxableIncome - 37700, 0), 100170) * 0.40;
    const additional = Math.max(0, taxableIncome - 37700 - 100170) * 0.45;
    incomeTax = basic + higher + additional;
  } else {
    const basic = Math.min(taxableIncome, 37700) * 0.20;
    const higher = Math.min(Math.max(taxableIncome - 37700, 0), 100000) * 0.40;
    const additional = Math.max(0, taxableIncome - 37700 - 100000) * 0.45;
    incomeTax = basic + higher + additional;
  }

  const effectiveRate = income > 0 ? (incomeTax / income) * 100 : 0;
  return { taxableIncome, incomeTax, effectiveRate, takeHomePay: income - incomeTax };
}

export function calcNIContributions(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const type = inputs.employmentType || "employed";
  const year = inputs.taxYear ? parseInt(inputs.taxYear.split("-")[0]) : 2024;

  const primaryThreshold = year >= 2025 ? 13000 : year >= 2024 ? 12570 : 242;
  const upperThreshold = year >= 2025 ? 52300 : year >= 2024 ? 50270 : 967;

  let ni = 0;
  if (type === "employed") {
    if (income <= primaryThreshold) ni = 0;
    else ni = Math.min(income - primaryThreshold, upperThreshold - primaryThreshold) * 0.08 + Math.max(0, income - upperThreshold) * 0.02;
  } else {
    const class2 = 52 * 3.45;
    const class4 = Math.max(0, income - primaryThreshold) * 0.06 + Math.max(0, income - upperThreshold) * 0.02;
    ni = class2 + class4;
  }
  const rate = income > 0 ? (ni / income) * 100 : 0;
  return { niContributions: ni, effectiveRate: rate };
}

export function calcHKSalariesTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const mpf = inputs.mpfContributions ? parseFloat(inputs.mpfContributions) : 0;
  const marital = inputs.maritalStatus || "single";
  const children = inputs.dependentChildren ? parseInt(inputs.dependentChildren) : 0;

  let basicAllowance = 132000;
  let marriedAllowance = 0;
  let childAllowance = 0;

  if (marital === "married") {
    marriedAllowance = 264000;
  }
  childAllowance = Math.min(children, 9) * 74000;
  const totalAllowances = basicAllowance + marriedAllowance + childAllowance;
  const netChargeableIncome = Math.max(0, income - mpf - totalAllowances);
  const progressive = pTax(netChargeableIncome, [[50000, 0.02], [100000, 0.06], [150000, 0.10], [200000, 0.14], [10000000, 0.17]]);
  const standard = income * 0.15;
  const salariesTax = Math.min(progressive, standard);
  const effectiveRate = income > 0 ? (salariesTax / income) * 100 : 0;
  return { totalIncome: income, allowances: totalAllowances, netChargeableIncome, salariesTax, effectiveRate, takeHomePay: income - salariesTax };
}

export function calcHKSalariesTax202526(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const mpf = inputs.mpfContributions ? parseFloat(inputs.mpfContributions) : 0;
  const marital = inputs.maritalStatus || "single";
  const children = inputs.dependentChildren ? parseInt(inputs.dependentChildren) : 0;

  let basicAllowance = 132000;
  let marriedAllowance = 0;
  let childAllowance = 0;

  if (marital === "married") {
    marriedAllowance = 264000;
  }
  childAllowance = Math.min(children, 9) * 74000;
  const totalAllowances = basicAllowance + marriedAllowance + childAllowance;
  const netChargeableIncome = Math.max(0, income - mpf - totalAllowances);
  const progressive = pTax(netChargeableIncome, [[50000, 0.02], [100000, 0.06], [150000, 0.10], [200000, 0.14], [10000000, 0.17]]);
  const standard = income * 0.15;
  const salariesTax = Math.min(progressive, standard);
  const effectiveRate = income > 0 ? (salariesTax / income) * 100 : 0;
  return { totalIncome: income, allowances: totalAllowances, netChargeableIncome, salariesTax, effectiveRate, takeHomePay: income - salariesTax };
}

export function calcHKProfitsTax(inputs: Record<string, any>) {
  const profits = inputs.assessableProfits || 0;
  const businessType = inputs.businessType || "corporation";
  const rate = businessType === "corporation" ? 0.165 : 0.15;
  const profitsTax = profits * rate;
  const effectiveRate = profits > 0 ? rate * 100 : 0;
  return { profitsTax, effectiveRate };
}

export function calcSGIncomeTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const resident = inputs.residentStatus === "resident";
  const donations = inputs.donations ? parseFloat(inputs.donations) : 0;
  const year = inputs.taxYear || "2024";

  let taxableIncome = income;
  if (resident && donations > 0) {
    taxableIncome = Math.max(0, income - donations * 2.5);
  } else if (!resident) {
    taxableIncome = income;
  }

  let incomeTax = 0;
  if (resident) {
    incomeTax = pTax(taxableIncome, [[20000, 0], [30000, 0.02], [40000, 0.035], [80000, 0.07], [120000, 0.115], [160000, 0.15], [200000, 0.18], [240000, 0.19], [280000, 0.205], [320000, 0.22], [10000000, 0.24]]);
  } else {
    incomeTax = taxableIncome * 0.24;
  }

  const effectiveRate = income > 0 ? (incomeTax / income) * 100 : 0;
  return { incomeTax, effectiveRate, takeHomePay: income - incomeTax };
}

export function calcSGStampDuty(inputs: Record<string, any>) {
  const price = inputs.propertyPrice || 0;
  const buyer = inputs.buyerType || "citizen";
  const propType = inputs.propertyType || "residential";

  let bsd = 0;
  if (propType === "residential") {
    if (buyer === "citizen") {
      bsd = 0.01 * Math.min(price, 180000) + 0.02 * Math.max(0, Math.min(price, 360000) - 180000) + 0.03 * Math.max(0, price - 360000);
    } else if (buyer === "pr") {
      bsd = 0.05 * price;
    } else {
      bsd = 0.25 * price;
    }
  } else {
    bsd = price * 0.04;
  }

  let abd = 0;
  if (propType === "residential") {
    if (buyer === "citizen") {
      if (price <= 1000000) abd = 0.00;
      else if (price <= 3000000) abd = (price - 1000000) * 0.03;
      else abd = 2000000 * 0.03 + (price - 3000000) * 0.04;
    } else if (buyer === "pr") {
      if (price <= 1000000) abd = 0.05 * price;
      else abd = 50000 + (price - 1000000) * 0.075;
    } else {
      abd = 0.25 * price;
    }
  }

  const stampDuty = bsd + abd;
  return { stampDuty, totalCost: price + stampDuty };
}

export function calcMYIncomeTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const resident = inputs.residentStatus === "resident";
  const year = inputs.taxYear || "2024";

  let taxableIncome = income;
  if (resident) {
    const personalRelief = 9000;
    const spouseRelief = 4000;
    const taxRelief = 10000;
    taxableIncome = Math.max(0, income - personalRelief);
  }

  let incomeTax = 0;
  if (resident) {
    incomeTax = pTax(taxableIncome, [[5000, 0], [20000, 0.01], [35000, 0.03], [50000, 0.06], [70000, 0.11], [100000, 0.19], [250000, 0.25], [400000, 0.26], [600000, 0.28], [1000000, 0.30], [10000000, 0.30]]);
  } else {
    incomeTax = taxableIncome * 0.30;
  }

  const effectiveRate = income > 0 ? (incomeTax / income) * 100 : 0;
  return { taxableIncome, incomeTax, effectiveRate };
}

export function calcNZIncomeTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;
  const year = inputs.taxYear || "2024-25";

  let tax = 0;
  tax = pTax(income, [[14000, 0.105], [48000, 0.175], [70000, 0.30], [180000, 0.33], [10000000, 0.39]]);

  const effectiveRate = income > 0 ? (tax / income) * 100 : 0;
  return { taxableIncome: income, incomeTax: tax, effectiveRate, takeHomePay: income - tax };
}

export function calcPKIncomeTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;

  const tax = pTax(income, [[600000, 0], [1200000, 0.05], [2400000, 0.10], [3600000, 0.15], [6000000, 0.20], [9600000, 0.25], [10000000, 0.30], [10000001, 0.35]]);

  const effectiveRate = income > 0 ? (tax / income) * 100 : 0;
  return { taxableIncome: income, incomeTax: tax, effectiveRate };
}

export function calcPHIncomeTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;

  const tax = pTax(income, [[250000, 0], [400000, 0.15], [800000, 0.20], [2000000, 0.25], [8000000, 0.30], [10000000, 0.35]]);

  const effectiveRate = income > 0 ? (tax / income) * 100 : 0;
  return { taxableIncome: income, incomeTax: tax, effectiveRate };
}

export function calcIDIncomeTax(inputs: Record<string, any>) {
  const income = inputs.annualIncome || 0;

  const tax = pTax(income, [[60000000, 0], [250000000, 0.05], [500000000, 0.15], [2000000000, 0.25], [2500000000, 0.30], [10000000, 0.35]]);

  const effectiveRate = income > 0 ? (tax / income) * 100 : 0;
  return { taxableIncome: income, incomeTax: tax, effectiveRate };
}

function pTax(income: number, brackets: number[][]) {
  let tax = 0;
  let prev = 0;
  for (let i = 0; i < brackets.length; i++) {
    const lim = brackets[i][0];
    const r = brackets[i][1];
    if (income > prev) {
      const taxable = Math.min(income, lim) - prev;
      tax += taxable * r;
    }
    prev = lim;
  }
  return tax;
}

export const calculatorLogic = {
  calcUSFederalIncomeTax,
  calcStateTax,
  calcFICA,
  calcCorporate,
  calcCapitalGains,
  calcIndiaIncomeTax,
  calcGSTOrVAT,
  calcSST,
  calcTDS,
  calcUKIncomeTax,
  calcNIContributions,
  calcHKSalariesTax,
  calcHKSalariesTax202526,
  calcHKProfitsTax,
  calcSGIncomeTax,
  calcSGStampDuty,
  calcMYIncomeTax,
  calcNZIncomeTax,
  calcPKIncomeTax,
  calcPHIncomeTax,
  calcIDIncomeTax,
};

export type CalculatorFunction = keyof typeof calculatorLogic;
