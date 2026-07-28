const fs=require('fs');
const file='src/pages/countries/[country]/[category]/[calculator].astro';
let text=fs.readFileSync(file,'utf8');

const jsInjection=`
      function calcEffectiveRate() {
        var income = getInput('annualIncome') || 0;
        var federal = getInput('federalTax') || 0;
        var state = getInput('stateTax') || 0;
        var fica = getInput('ficaTax') || 0;
        var total = federal + state + fica;
        var rate = income > 0 ? (total / income * 100) : 0;
        setOutput('totalTax', total, 'currency');
        setOutput('effectiveRate', rate, 'percentage');
        setOutput('takeHomePay', income - total, 'currency');
      }

      function calcEstateTax() {
        var estate = getInput('estateValue') || 0;
        var status = getInput('maritalStatus') || 'single';
        var exemption = status === 'married' ? 27220000 : 13610000;
        var taxable = Math.max(0, estate - exemption);
        var tax = taxable * 0.40;
        var rate = estate > 0 ? (tax / estate * 100) : 0;
        setOutput('taxableEstate', taxable, 'currency');
        setOutput('estateTax', tax, 'currency');
        setOutput('effectiveRate', rate, 'percentage');
      }

      function calcHKPropertyTax() {
        var rent = getInput('annualIncome') || 0;
        var irrecoverable = getInput('irrecoverableRent') || 0;
        var standard = rent * 0.20;
        var nav = Math.max(0, rent - standard - irrecoverable);
        var tax = nav * 0.15;
        var rate = rent > 0 ? (tax / rent * 100) : 0;
        setOutput('grossRentalIncome', rent, 'currency');
        setOutput('standardDeduction', standard, 'currency');
        setOutput('netAssessableValue', nav, 'currency');
        setOutput('propertyTax', tax, 'currency');
        setOutput('effectiveRate', rate, 'percentage');
      }

      function calcHKFirstRegTax() {
        var value = getInput('vehicleValue') || 0;
        var fuel = getInput('fuelType') || 'petrol';
        var type = getInput('vehicleType') || 'passenger';
        var tax = 0;
        if(fuel==='electric') { tax=0; }
        else if(type==='passenger'){
          if(value<=200000) tax = value*0.05;
          else if(value<=600000) tax = 100000 + (value-200000)*0.10;
          else if(value<=1100000) tax = 100000 + 40000 + (value-600000)*0.15;
          else if(value<=2100000) tax = 100000 + 40000 + 75000 + (value-1100000)*0.20;
          else tax = 100000 + 40000 + 75000 + 200000 + (value-2100000)*0.25;
        } else { tax = value * 0.10; }
        var rate = value>0 ? (tax/value*100) : 0;
        setOutput('firstRegistrationTax', tax, 'currency');
        setOutput('effectiveRate', rate, 'percentage');
      }

      function calcPKCapitalGain() {
        var gain = getInput('gainAmount') || 0;
        var holding = getInput('holdingPeriod') || 'long_term';
        var asset = getInput('assetType') || 'property';
        var rate = 0;
        if(holding==='short_term') rate = 0.10;
        else if(asset==='property') rate = 0.15;
        else rate = 0.20;
        var tax = gain * rate;
        var effectiveRate = gain>0 ? rate*100 : 0;
        setOutput('capitalGainsTax', tax, 'currency');
        setOutput('effectiveRate', effectiveRate, 'percentage');
        setOutput('afterTaxGain', gain - tax, 'currency');
      }

      function calcPKPropertyTax() {
        var value = getInput('propertyValue') || 0;
        var province = getInput('province') || 'punjab';
        var type = getInput('propertyType') || 'residential';
        var rate = type==='residential' ? 0.005 : 0.01;
        var tax = value * rate * 0.01;
        var effectiveRate = value>0 ? (tax/value*100) : 0;
        setOutput('propertyTax', tax, 'currency');
        setOutput('effectiveRate', effectiveRate, 'percentage');
      }

      function calcPKTokenTax() {
        var tokenType = getInput('tokenType') || 'vehicle';
        var cc = getInput('engineCapacity') || 0;
        var val = getInput('vehicleValue') || 0;
        var tax = 0;
        if(tokenType==='vehicle') {
          if(cc<800) tax=50; else if(cc<=1300) tax=100; else if(cc<=1500) tax=150; else if(cc<=1800) tax=200; else if(cc<=2000) tax=300; else if(cc<=2500) tax=400; else tax=500;
        } else { tax = val * 0.001; }
        setOutput('tokenTax', tax, 'currency');
      }

      function calcPKVehicleTax() {
        var cc = getInput('engineCapacity') || 0;
        var province = getInput('province') || 'punjab';
        var vtype = getInput('vehicleType') || 'car';
        var tax = 0;
        if(cc<800) tax=50; else if(cc<=1300) tax=100; else if(cc<=1500) tax=150; else if(cc<=1800) tax=200; else if(cc<=2000) tax=300; else if(cc<=2500) tax=400; else tax=500;
        setOutput('vehicleTax', tax, 'currency');
      }

      function calcPKSindhVehicleTax() {
        var cc = getInput('engineCapacity') || 0;
        var age = getInput('vehicleAge') || 0;
        var tax = 0;
        if(cc<800) tax=50; else if(cc<=1300) tax=100; else if(cc<=1500) tax=150; else if(cc<=1800) tax=200; else if(cc<=2000) tax=300; else if(cc<=2500) tax=400; else tax=500;
        var transfer = 5000 + age*500;
        setOutput('vehicleTax', tax, 'currency');
        setOutput('transferFee', transfer, 'currency');
      }

      function calcPKIslamabadVehicleTax() {
        var cc = getInput('engineCapacity') || 0;
        var vtype = getInput('vehicleType') || 'car';
        var tax = 0;
        if(cc<800) tax=50; else if(cc<=1300) tax=100; else if(cc<=1500) tax=150; else if(cc<=1800) tax=200; else if(cc<=2000) tax=300; else if(cc<=2500) tax=400; else tax=500;
        setOutput('vehicleTax', tax, 'currency');
      }

`;

// Find the end of the calculate() function before the closing `}` of the IIFE
const calculateEnd=text.indexOf("      if (resultDiv) resultDiv.classList.remove('hidden');");
const afterCalculate=text.indexOf("      if (resultDiv) resultDiv.classList.remove('hidden');");
if(afterCalculate===-1){ console.error('Could not find calculate() end'); process.exit(1); }
// Insert new functions before calculate()
const beforeCalculate=text.lastIndexOf('      function calculate() {', afterCalculate);
text=text.slice(0,beforeCalculate)+jsInjection+text.slice(beforeCalculate);

// Now insert dispatch cases before default branch
const defaultBranch=text.indexOf("else { hideError(); return; }");
if(defaultBranch===-1){ console.error('Could not find default dispatch'); process.exit(1); }
const dispatchCases=`
          if (ruleId === 'united-states-income-tax-effective-tax-rate') calcEffectiveRate();
          else if (ruleId === 'united-states-estate-tax-estate-tax-calculator') calcEstateTax();
          else if (ruleId === 'united-states-payroll-tax-fica-calculator') calcFICA();
          else if (ruleId === 'united-states-payroll-tax-self-employment-tax') calcFICA();
          else if (ruleId === 'united-states-corporate-tax-small-business-tax') calcCorporate();
          else if (ruleId === 'united-states-capital-gains-tax-ltcg-calculator') calcCapitalGains();
          else if (ruleId === 'hong-kong-salaries-tax-salary-tax-computation') calcHKSalariesTax();
          else if (ruleId === 'hong-kong-salaries-tax-hk-net-salary-calculator') calcHKSalariesTax();
          else if (ruleId === 'hong-kong-salaries-tax-hong-kong-tax-calculator-for-expats') calcHKSalariesTax();
          else if (ruleId === 'hong-kong-salaries-tax-hong-kong-income-tax-for-foreigners-calculator') calcHKSalariesTax();
          else if (ruleId === 'hong-kong-profits-tax-hk-corporate-tax-calculator') calcHKProfitsTax();
          else if (ruleId === 'hong-kong-profits-tax-profit-tax-computation') calcHKProfitsTax();
          else if (ruleId === 'hong-kong-stamp-duty-hk-property-stamp-duty-calculator') calcStampDuty();
          else if (ruleId === 'hong-kong-stamp-duty-stamp-duty-calculator') calcStampDuty();
          else if (ruleId === 'hong-kong-stamp-duty-rental-stamp-duty-calculator') calcStampDuty();
          else if (ruleId === 'hong-kong-stamp-duty-first-registration-tax-calculator') calcHKFirstRegTax();
          else if (ruleId === 'hong-kong-property-tax-property-tax-calculator') calcHKPropertyTax();
          else if (ruleId === 'hong-kong-property-tax-hk-rental-tax-deduction-calculator') calcHKPropertyTax();
          else if (ruleId === 'pakistan-income-tax-salary-tax-calculator') calcGenericIncomeTax([[600000,0],[1200000,0.05],[2400000,0.10],[3600000,0.15],[6000000,0.20],[9600000,0.25],[10000000,0.30],[10000001,0.35]]);
          else if (ruleId === 'pakistan-income-tax-business-income-tax-calculator') calcGenericIncomeTax([[600000,0],[1200000,0.05],[2400000,0.10],[3600000,0.15],[6000000,0.20],[9600000,0.25],[10000000,0.30],[10000001,0.35]]);
          else if (ruleId === 'pakistan-income-tax-capital-gain-tax-calculator') calcPKCapitalGain();
          else if (ruleId === 'pakistan-sales-tax-gst-calculator') calcGenericVATorGST(0.18, getInput('calculationType') || 'exclusive');
          else if (ruleId === 'pakistan-property-tax-property-tax-calculator') calcPKPropertyTax();
          else if (ruleId === 'pakistan-property-tax-capital-gain-tax-calculator') calcPKCapitalGain();
          else if (ruleId === 'pakistan-property-tax-token-tax-calculator') calcPKTokenTax();
          else if (ruleId === 'pakistan-property-tax-rental-income-tax-calculator') calcGenericIncomeTax([[600000,0],[1200000,0.05],[2400000,0.10],[3600000,0.15],[6000000,0.20],[9600000,0.25],[10000000,0.30],[10000001,0.35]]);
          else if (ruleId === 'pakistan-vehicle-tax-vehicle-tax-calculator') calcPKVehicleTax();
          else if (ruleId === 'pakistan-vehicle-tax-sindh-vehicle-tax-calculator') calcPKSindhVehicleTax();
          else if (ruleId === 'pakistan-vehicle-tax-islamabad-vehicle-tax-calculator') calcPKIslamabadVehicleTax();
          else if (ruleId === 'singapore-stamp-duty-stamp-duty-calculator') calcStampDuty();
`;
text=text.replace("else { hideError(); return; }",dispatchCases+"else { hideError(); return; }");
fs.writeFileSync(file,text);
console.log('Injected JS dispatch into calculator.astro');
