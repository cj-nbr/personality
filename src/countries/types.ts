export interface TaxCategory {
  slug: string;
  name: string;
  description: string;
  overview: string;
  calculators: Array<{
    slug: string;
    name: string;
    description: string;
  }>;
  guides: Array<{
      slug: string;
      title: string;
      description: string;
      image?: string;
      sections?: Array<{
        title: string;
        content: string;
      }>;
      steps?: Array<{
        step: number;
        title: string;
        description: string;
      }>;
      tips?: string[];
    }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface TaxBracket {
  label: string;
  rate: string;
  threshold: string;
  notes?: string;
}

export interface TaxDeduction {
  name: string;
  description: string;
}

export interface TaxCredit {
  name: string;
  description: string;
}

export interface OfficialResource {
  name: string;
  url: string;
  description: string;
}

export interface ImportantDate {
  date: string;
  title: string;
  description: string;
}

export interface CountryFAQ {
  question: string;
  answer: string;
}

export interface TaxConcept {
  title: string;
  description: string;
}

export interface Country {
  slug: string;
  name: string;
  flag: string;
  continent: string;
  officialTaxAuthority: string;
  taxAuthorityUrl: string;
  currency: string;
  capital: string;
  population: string;
  gdp: string;
  officialLanguage: string;
  overview: string;
  lastUpdated: string;
  taxYear: string;
  filingDeadline: string;
  paymentDeadline: string;
  taxSystemOverview: {
    incomeTax: string;
    capitalGainsTax: string;
    vatGstSalesTax: string;
    corporateTax: string;
    payrollTax: string;
  };
  taxSystemDetails: {
    howTaxationWorks: string;
    whoPaysTax: string;
    residentVsNonResident: string;
    personalIncomeTax: string;
    businessTaxOverview: string;
    importantConcepts: TaxConcept[];
  };
  currentTaxBrackets: TaxBracket[];
  standardDeductions: string;
  majorDeductions: TaxDeduction[];
  credits: TaxCredit[];
  exemptions?: TaxDeduction[];
  importantDates: ImportantDate[];
  officialResources: OfficialResource[];
  taxCategories: TaxCategory[];
  popularCalculators: Array<{ slug: string; name: string; category: string }>;
  salaryCalculators: Array<{ slug: string; name: string; category: string }>;
  capitalGainsCalculators: Array<{ slug: string; name: string; category: string }>;
  corporateCalculators: Array<{ slug: string; name: string; category: string }>;
  relatedCountries: string[];
  latestUpdates: Array<{ date: string; title: string; description: string }>;
  countryFAQs: CountryFAQ[];
  educationalDisclaimer: string;
  dataSources: string[];
  calculationMethodology: string;
}