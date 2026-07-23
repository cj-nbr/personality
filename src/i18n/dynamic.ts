export type LanguageCode = "en" | "hi" | "es" | "fr" | "de" | "zh" | "ja" | "ar" | "pt" | "ru";

export interface CountryData {
  name: string;
  officialTaxAuthority: string;
  continent: string;
  currency: string;
  capital: string;
  overview: string;
  taxCategories: Array<{
    name: string;
    description: string;
    overview: string;
    calculators: Array<{ name: string; description: string }>;
    guides: Array<{ title: string; description: string }>;
    faqs: Array<{ question: string; answer: string }>;
  }>;
  popularCalculators: Array<{ name: string }>;
  latestUpdates: Array<{ title: string; description: string }>;
}

const countryNames: Record<LanguageCode, Record<string, string>> = {
  en: { "United States":"United States","India":"India","Hong Kong":"Hong Kong","Singapore":"Singapore","Indonesia":"Indonesia","Malaysia":"Malaysia","New Zealand":"New Zealand","Pakistan":"Pakistan","Philippines":"Philippines","United Kingdom":"United Kingdom" },
  hi: { "United States":"संयुक्त राज्य","India":"भारत","Hong Kong":"हांग कांग","Singapore":"सिंगापुर","Indonesia":"इंडोनेशिया","Malaysia":"मलेशिया","New Zealand":"न्यूज़ीलैंड","Pakistan":"पाकिस्तान","Philippines":"फिलीपींस","United Kingdom":"यूनाइटेड किंगडम" },
  es: { "United States":"Estados Unidos","India":"India","Hong Kong":"Hong Kong","Singapore":"Singapur","Indonesia":"Indonesia","Malaysia":"Malasia","New Zealand":"Nueva Zelanda","Pakistan":"Pakistán","Philippines":"Filipinas","United Kingdom":"Reino Unido" },
  fr: { "United States":"États-Unis","India":"Inde","Hong Kong":"Hong Kong","Singapore":"Singapour","Indonesia":"Indonésie","Malaysia":"Malaisie","New Zealand":"Nouvelle-Zélande","Pakistan":"Pakistan","Philippines":"Philippines","United Kingdom":"Royaume-Uni" },
  de: { "United States":"Vereinigte Staaten","India":"Indien","Hong Kong":"Hongkong","Singapore":"Singapur","Indonesia":"Indonesien","Malaysia":"Malaysia","New Zealand":"Neuseeland","Pakistan":"Pakistan","Philippines":"Philippinen","United Kingdom":"Vereinigtes Königreich" },
  zh: { "United States":"美国","India":"印度","Hong Kong":"香港","Singapore":"新加坡","Indonesia":"印度尼西亚","Malaysia":"马来西亚","New Zealand":"新西兰","Pakistan":"巴基斯坦","Philippines":"菲律宾","United Kingdom":"英国" },
  ja: { "United States":"アメリカ","India":"インド","Hong Kong":"香港","Singapore":"シンガポール","Indonesia":"インドネシア","Malaysia":"マレーシア","New Zealand":"ニュージーランド","Pakistan":"パキスタン","Philippines":"フィリピン","United Kingdom":"英国" },
  ar: { "United States":"الولايات المتحدة","India":"الهند","Hong Kong":"هونغ كونغ","Singapore":"سنغافورة","Indonesia":"إندونيسيا","Malaysia":"ماليزيا","New Zealand":"نيوزيلندا","Pakistan":"باكستان","Philippines":"الفلبين","United Kingdom":"المملكة المتحدة" },
  pt: { "United States":"Estados Unidos","India":"Índia","Hong Kong":"Hong Kong","Singapore":"Cingapura","Indonesia":"Indonésia","Malaysia":"Malásia","New Zealand":"Nova Zelândia","Pakistan":"Paquistão","Philippines":"Filipinas","United Kingdom":"Reino Unido" },
  ru: { "United States":"США","India":"Индия","Hong Kong":"Гонконг","Singapore":"Сингапур","Indonesia":"Индонезия","Malaysia":"Малайзия","New Zealand":"Новая Зеландия","Pakistan":"Пакистан","Philippines":"Филиппины","United Kingdom":"Великобритания" }
};

const categoryNames: Record<LanguageCode, Record<string, string>> = {
  en: { "Income Tax":"Income Tax","Payroll Tax":"Payroll Tax","Corporate Tax":"Corporate Tax","Capital Gains Tax":"Capital Gains Tax","GST":"GST","TDS":"TDS","Salaries Tax":"Salaries Tax","Profits Tax":"Profits Tax","Stamp Duty":"Stamp Duty","VAT":"VAT","SST":"SST","Sales Tax":"Sales Tax","National Insurance":"National Insurance" },
  es: { "Income Tax":"Impuesto sobre la Renta","Payroll Tax":"Impuesto de Nómina","Corporate Tax":"Impuesto Corporativo","Capital Gains Tax":"Impuesto sobre Ganancias de Capital","GST":"GST","TDS":"TDS","Salaries Tax":"Impuesto de Salarios","Profits Tax":"Impuesto de Beneficios","Stamp Duty":"Impuesto de Timbre","VAT":"IVA","SST":"SST","Sales Tax":"Impuesto sobre Ventas","National Insurance":"Seguro Nacional" },
  fr: { "Income Tax":"Impôt sur le Revenu","Payroll Tax":"Taxe sur les Salaires","Corporate Tax":"Impôt sur les Sociétés","Capital Gains Tax":"Impôt sur les Plus-Values","GST":"GST","TDS":"TDS","Salaries Tax":"Impôt sur les Salaires","Profits Tax":"Impôt sur les Bénéfices","Stamp Duty":"Droit de Timbre","VAT":"TVA","SST":"SST","Sales Tax":"Taxe de Vente","National Insurance":"Assurance Nationale" },
  de: { "Income Tax":"Einkommensteuer","Payroll Tax":"Lohnsteuer","Corporate Tax":"Körperschaftsteuer","Capital Gains Tax":"Kapitalertragsteuer","GST":"GST","TDS":"TDS","Salaries Tax":"Gehaltssteuer","Profits Tax":"Gewinnsteuer","Stamp Duty":"Stempelsteuer","VAT":"MwSt","SST":"SST","Sales Tax":"Umsatzsteuer","National Insurance":"Nationalversicherung" },
  zh: { "Income Tax":"所得税","Payroll Tax":"工资税","Corporate Tax":"企业税","Capital Gains Tax":"资本利得税","GST":"GST","TDS":"TDS","Salaries Tax":"薪水税","Profits Tax":"利得税","Stamp Duty":"印花税","VAT":"增值税","SST":"SST","Sales Tax":"销售税","National Insurance":"国民保险" },
  ja: { "Income Tax":"所得税","Payroll Tax":"給与税","Corporate Tax":"法人税","Capital Gains Tax":"キャピタルゲイン税","GST":"GST","TDS":"TDS","Salaries Tax":"給与税","Profits Tax":"利益税","Stamp Duty":"印紙税","VAT":"付加価値税","SST":"SST","Sales Tax":"売上税","National Insurance":"国民保険" },
  ar: { "Income Tax":"ضريبة الدخل","Payroll Tax":"ضريبة الرواتب","Corporate Tax":"ضريبة الشركات","Capital Gains Tax":"ضريبة الأرباح الرأسمالية","GST":"ضريبة القيمة المضافة الموحدة","TDS":"الضريبة المخصومة عند المصدر","Salaries Tax":"ضريبة الرواتب","Profits Tax":"ضريبة الأرباح","Stamp Duty":"ضريبة الدمغة","VAT":"ضريبة القيمة المضافة","SST":"ضريبة المبيعات والخدمات","Sales Tax":"ضريبة المبيعات","National Insurance":"التأمين الوطني" },
  pt: { "Income Tax":"Imposto de Renda","Payroll Tax":"Imposto sobre Salários","Corporate Tax":"Imposto Corporativo","Capital Gains Tax":"Imposto sobre Ganhos de Capital","GST":"GST","TDS":"TDS","Salaries Tax":"Imposto sobre Salários","Profits Tax":"Imposto sobre Lucros","Stamp Duty":"Imposto de Selo","VAT":"IVA","SST":"SST","Sales Tax":"Imposto sobre Vendas","National Insurance":"Seguro Nacional" },
  ru: { "Income Tax":"Подоходный налог","Payroll Tax":"Налог на фонд заработной платы","Corporate Tax":"Корпоративный налог","Capital Gains Tax":"Налог на прирост капитала","GST":"GST","TDS":"TDS","Salaries Tax":"Налог на зарплату","Profits Tax":"Налог на прибыль","Stamp Duty":"Гербовый сбор","VAT":"НДС","SST":"SST","Sales Tax":"Налог на продажи","National Insurance":"Национальное страхование" }
};

export function translateCountryName(name: string, lang: LanguageCode): string {
  return countryNames[lang]?.[name] || name;
}

export function translateCategoryName(name: string, lang: LanguageCode): string {
  return categoryNames[lang]?.[name] || name;
}

export function translateCountryData(country: CountryData, lang: LanguageCode): CountryData {
  const cName = translateCountryName(country.name, lang);
  const cDict = categoryNames[lang] || categoryNames.en;

  return {
    ...country,
    name: cName,
    officialTaxAuthority: country.officialTaxAuthority,
    continent: country.continent,
    currency: country.currency,
    capital: country.capital,
    overview: country.overview,
    taxCategories: country.taxCategories.map(cat => ({
      ...cat,
      name: cDict[cat.name] || cat.name,
      description: cat.description,
      overview: cat.overview,
      calculators: cat.calculators.map(calc => ({
        ...calc,
        name: calc.name,
        description: calc.description
      })),
      guides: cat.guides.map(guide => ({
        ...guide,
        title: guide.title,
        description: guide.description
      })),
      faqs: cat.faqs.map(faq => ({
        question: faq.question,
        answer: faq.answer
      }))
    })),
    popularCalculators: country.popularCalculators.map(pc => ({
      ...pc,
      name: pc.name
    })),
    latestUpdates: country.latestUpdates.map(u => ({
      ...u,
      title: u.title,
      description: u.description
    }))
  };
}
