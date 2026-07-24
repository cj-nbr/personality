export type LanguageCode = "en" | "hi" | "es" | "fr" | "de" | "zh" | "zh-TW" | "ja" | "ar" | "pt" | "ru";

export type TranslationDict = Record<string, string>;

export type LocaleBundle = {
  [K in LanguageCode]?: TranslationDict;
};

let currentLang: LanguageCode = "en";
let dictCache: Record<LanguageCode, TranslationDict> = {} as Record<LanguageCode, TranslationDict>;
let listeners: Set<() => void> = new Set();

const countryNames: Record<LanguageCode, Record<string, string>> = {
  en: { "United States":"United States","India":"India","Hong Kong":"Hong Kong","Singapore":"Singapore","Indonesia":"Indonesia","Malaysia":"Malaysia","New Zealand":"New Zealand","Pakistan":"Pakistan","Philippines":"Philippines","United Kingdom":"United Kingdom" },
  hi: { "United States":"संयुक्त राज्य","India":"भारत","Hong Kong":"हांग कांग","Singapore":"सिंगापुर","Indonesia":"इंडोनेशिया","Malaysia":"मलेशिया","New Zealand":"न्यूज़ीलैंड","Pakistan":"पाकिस्तान","Philippines":"फिलीपींस","United Kingdom":"यूनाइटेड किंगडम" },
  es: { "United States":"Estados Unidos","India":"India","Hong Kong":"Hong Kong","Singapore":"Singapur","Indonesia":"Indonesia","Malaysia":"Malasia","New Zealand":"Nueva Zelanda","Pakistan":"Pakistán","Philippines":"Filipinas","United Kingdom":"Reino Unido" },
  fr: { "United States":"États-Unis","India":"Inde","Hong Kong":"Hong Kong","Singapore":"Singapour","Indonesia":"Indonésie","Malaysia":"Malaisie","New Zealand":"Nouvelle-Zélande","Pakistan":"Pakistan","Philippines":"Philippines","United Kingdom":"Royaume-Uni" },
  de: { "United States":"Vereinigte Staaten","India":"Indien","Hong Kong":"Hongkong","Singapore":"Singapur","Indonesia":"Indonesien","Malaysia":"Malaysia","New Zealand":"Neuseeland","Pakistan":"Pakistan","Philippines":"Philippinen","United Kingdom":"Vereinigtes Königreich" },
  zh: { "United States":"美国","India":"印度","Hong Kong":"香港","Singapore":"新加坡","Indonesia":"印度尼西亚","Malaysia":"马来西亚","New Zealand":"新西兰","Pakistan":"巴基斯坦","Philippines":"菲律宾","United Kingdom":"英国" },
  "zh-TW": { "United States":"美國","India":"印度","Hong Kong":"香港","Singapore":"新加坡","Indonesia":"印度尼西亞","Malaysia":"馬來西亞","New Zealand":"紐西蘭","Pakistan":"巴基斯坦","Philippines":"菲律賓","United Kingdom":"英國" },
  ja: { "United States":"アメリカ","India":"インド","Hong Kong":"香港","Singapore":"シンガポール","Indonesia":"インドネシア","Malaysia":"マレーシア","New Zealand":"ニュージーランド","Pakistan":"パキスタン","Philippines":"フィリピン","United Kingdom":"英国" },
  ar: { "United States":"الولايات المتحدة","India":"الهند","Hong Kong":"هونغ كونغ","Singapore":"سنغافورة","Indonesia":"إندونيسيا","Malaysia":"ماليزيا","New Zealand":"نيوزيلندا","Pakistan":"باكستان","Philippines":"الفلبين","United Kingdom":"المملكة المتحدة" },
  pt: { "United States":"Estados Unidos","India":"Índia","Hong Kong":"Hong Kong","Singapore":"Cingapura","Indonesia":"Indonésia","Malaysia":"Malásia","New Zealand":"Nova Zelândia","Pakistan":"Paquistão","Philippines":"Filipinas","United Kingdom":"Reino Unido" },
  ru: { "United States":"США","India":"Индия","Hong Kong":"Гонконг","Singapore":"Сингапур","Indonesia":"Индонезия","Malaysia":"Малайзия","New Zealand":"Новая Зеландия","Pakistan":"Пакистан","Philippines":"Филиппины","United Kingdom":"Великобритания" }
};

const continentNames: Record<LanguageCode, Record<string, string>> = {
  en: { "North America":"North America","Asia":"Asia","Europe":"Europe","Oceania":"Oceania" },
  hi: { "North America":"उत्तरी अमेरिका","Asia":"एशिया","Europe":"यूरोप","Oceania":"ओशेनिया" },
  es: { "North America":"América del Norte","Asia":"Asia","Europe":"Europa","Oceania":"Oceanía" },
  fr: { "North America":"Amérique du Nord","Asia":"Asie","Europe":"Europe","Oceania":"Océanie" },
  de: { "North America":"Nordamerika","Asia":"Asien","Europe":"Europa","Oceania":"Ozeanien" },
  zh: { "North America":"北美洲","Asia":"亚洲","Europe":"欧洲","Oceania":"大洋洲" },
  "zh-TW": { "North America":"北美洲","Asia":"亞洲","Europe":"歐洲","Oceania":"大洋洲" },
  ja: { "North America":"北アメリカ","Asia":"アジア","Europe":"ヨーロッパ","Oceania":"オセアニア" },
  ar: { "North America":"أمريكا الشمالية","Asia":"آسيا","Europe":"أوروبا","Oceania":"أوقيانوسيا" },
  pt: { "North America":"América do Norte","Asia":"Ásia","Europe":"Europa","Oceania":"Oceania" },
  ru: { "North America":"Северная Америка","Asia":"Азия","Europe":"Европа","Oceania":"Океания" }
};

const currencyNames: Record<LanguageCode, Record<string, string>> = {
  en: { "USD":"USD","INR":"INR","HKD":"HKD","SGD":"SGD","IDR":"IDR","MYR":"MYR","NZD":"NZD","PKR":"PKR","PHP":"PHP","GBP":"GBP" },
  hi: { "USD":"USD","INR":"INR","HKD":"HKD","SGD":"SGD","IDR":"IDR","MYR":"MYR","NZD":"NZD","PKR":"PKR","PHP":"PHP","GBP":"GBP" },
  es: { "USD":"USD","INR":"INR","HKD":"HKD","SGD":"SGD","IDR":"IDR","MYR":"MYR","NZD":"NZD","PKR":"PKR","PHP":"PHP","GBP":"GBP" },
  fr: { "USD":"USD","INR":"INR","HKD":"HKD","SGD":"SGD","IDR":"IDR","MYR":"MYR","NZD":"NZD","PKR":"PKR","PHP":"PHP","GBP":"GBP" },
  de: { "USD":"USD","INR":"INR","HKD":"HKD","SGD":"SGD","IDR":"IDR","MYR":"MYR","NZD":"NZD","PKR":"PKR","PHP":"PHP","GBP":"GBP" },
  zh: { "USD":"美元","INR":"印度卢比","HKD":"港币","SGD":"新加坡元","IDR":"印尼盾","MYR":"马来西亚林吉特","NZD":"新西兰元","PKR":"巴基斯坦卢比","PHP":"菲律宾比索","GBP":"英镑" },
  "zh-TW": { "USD":"美元","INR":"印度盧比","HKD":"港幣","SGD":"新加坡元","IDR":"印尼盾","MYR":"馬來西亞林吉特","NZD":"紐西蘭元","PKR":"巴基斯坦盧比","PHP":"菲律賓比索","GBP":"英鎊" },
  ja: { "USD":"米ドル","INR":"インドルピー","HKD":"香港ドル","SGD":"シンガポールドル","IDR":"インドネシアルピア","MYR":"マレーシアリンギット","NZD":"ニュージーランドドル","PKR":"パキスタンルピー","PHP":"フィリピンペソ","GBP":"英ポンド" },
  ar: { "USD":"دولار أمريكي","INR":"روبية هندية","HKD":"دولار هونغ كونغ","SGD":"دولار سنغافوري","IDR":"روبية إندونيسية","MYR":"رينغيت ماليزي","NZD":"دولار نيوزيلندي","PKR":"روبية باكستانية","PHP":"بيزو فلبيني","GBP":"جنيه إسترليني" },
  pt: { "USD":"USD","INR":"INR","HKD":"HKD","SGD":"SGD","IDR":"IDR","MYR":"MYR","NZD":"NZD","PKR":"PKR","PHP":"PHP","GBP":"GBP" },
  ru: { "USD":"USD","INR":"INR","HKD":"HKD","SGD":"SGD","IDR":"IDR","MYR":"MYR","NZD":"NZD","PKR":"PKR","PHP":"PHP","GBP":"GBP" }
};

const taxAuthorityNames: Record<LanguageCode, Record<string, string>> = {
  en: { "IRS":"Internal Revenue Service (IRS)","CBDT":"Central Board of Direct Taxes (CBDT)","IRD_hk":"Inland Revenue Department (IRD)","IRAS":"Inland Revenue Authority of Singapore (IRAS)","DJP":"Direktorat Jenderal Pajak (DJP)","LHDNM":"Lembaga Hasil Dalam Negeri Malaysia (LHDNM)","IRD_nz":"Inland Revenue Department (IRD)","FBR":"Federal Board of Revenue (FBR)","BIR":"Bureau of Internal Revenue (BIR)","HMRC":"HM Revenue & Customs (HMRC)" },
  hi: { "IRS":"आंतरिक राजस्व सेवा (IRS)","CBDT":"केन्द्रीय प्रत्यक्ष कर बोर्ड (CBDT)","IRD_hk":"आंतरिक राजस्व विभाग (IRD)","IRAS":"सिंगापुर आंतरिक राजस्व प्राधिकरण (IRAS)","DJP":"डायरेक्टोरेट जेनरल पजक (DJP)","LHDNM":"लेम्बागा हसिल दाम नेगेरी मलेशिया (LHDNM)","IRD_nz":"आंतरिक राजस्व विभाग (IRD)","FBR":"संघीय राजस्व बोर्ड (FBR)","BIR":"आंतरिक राजसventy वादा ब्यूरो (BIR)","HMRC":"एचएम राजस्व और कस्टम (HMRC)" },
  es: { "IRS":"Servicio de Impuestos Internos (IRS)","CBDT":"Junta Central de Impuestos Directos (CBDT)","IRD_hk":"Departamento de Impuestos Internos (IRD)","IRAS":"Administración Tributaria de Singapur (IRAS)","DJP":"Dirección General de Impuestos (DJP)","LHDNM":"Consejo de Ingresos Internos de Malasia (LHDNM)","IRD_nz":"Departamento de Impuestos Internos (IRD)","FBR":"Junta Federal de Ingresos (FBR)","BIR":"Oficina de Impuestos Internos (BIR)","HMRC":"Hacienda y Aduanas del Reino Unido (HMRC)" },
  fr: { "IRS":"Internal Revenue Service (IRS)","CBDT":"Conseil central des impôts directs (CBDT)","IRD_hk":"Department of Inland Revenue (IRD)","IRAS":"Inland Revenue Authority of Singapore (IRAS)","DJP":"Direction Générale des Impôts (DJP)","LHDNM":"Conseil des revenus intérieurs de Malaisie (LHDNM)","IRD_nz":"Department of Inland Revenue (IRD)","FBR":"Commission fédérale des recettes (FBR)","BIR":"Bureau of Internal Revenue (BIR)","HMRC":"HM Revenue & Customs (HMRC)" },
  de: { "IRS":"Internal Revenue Service (IRS)","CBDT":"Central Board of Direct Taxes (CBDT)","IRD_hk":"Inland Revenue Department (IRD)","IRAS":"Inland Revenue Authority of Singapore (IRAS)","DJP":"Direktorat Jenderal Pajak (DJP)","LHDNM":"Lembaga Hasil Dalam Negeri Malaysia (LHDNM)","IRD_nz":"Inland Revenue Department (IRD)","FBR":"Federal Board of Revenue (FBR)","BIR":"Bureau of Internal Revenue (BIR)","HMRC":"HM Revenue & Customs (HMRC)" },
  zh: { "IRS":"美国国税局（IRS）","CBDT":"中央直接税委员会（CBDT）","IRD_hk":"税务局（IRD）","IRAS":"新加坡税务局（IRAS）","DJP":"税务总局（DJP）","LHDNM":"马来西亚国内税收局（LHDNM）","IRD_nz":"税务局（IRD）","FBR":"联邦税收委员会（FBR）","BIR":"国内税务局（BIR）","HMRC":"英国税务海关总署（HMRC）" },
  "zh-TW": { "IRS":"美國國稅局 (IRS)","CBDT":"中央直接稅委員會 (CBDT)","IRD_hk":"香港稅務局 (IRD)","IRAS":"新加坡稅務局 (IRAS)","DJP":"印尼稅務總局 (DJP)","LHDNM":"馬來西亞國內稅收局 (LHDNM)","IRD_nz":"紐西蘭稅務局","FBR":"巴基斯坦稅務委員會 (FBR)","BIR":"菲律賓國內稅務局 (BIR)","HMRC":"英國稅務海關總署 (HMRC)" },
  ja: { "IRS":"内国歳入局（IRS）","CBDT":"中央直接税委員会（CBDT）","IRD_hk":"内国歳入部（IRD）","IRAS":"シンガポール内国歳入庁（IRAS）","DJP":"総 Directorat Pajak（DJP)","LHDNM":"マレーシア内国歳入庁（LHDNM)","IRD_nz":"内国歳入部（IRD)","FBR":"連邦歳入委員会（FBR)","BIR":"内国歳入局（BIR)","HMRC":"英国歳入関税庁（HMRC)" },
  ar: { "IRS":"مصلحة الضرائب الداخلية (IRS)","CBDT":"المجلس المركزي للضرائب المباشرة (CBDT)","IRD_hk":"إدارة الإيرادات الداخلية (IRD)","IRAS":"هيئة الإيرادات الداخلية سنغافورة (IRAS)","DJP":"المديرية العامة للضرائب (DJP)","LHDNM":"مجلس الإيرادات الداخلية الماليزي (LHDNM)","IRD_nz":"إدارة الإيرادات الداخلية (IRD)","FBR":"مجلس الإيرادات الفيدرالي (FBR)","BIR":"مكتب الإيرادات الداخلية (BIR)","HMRC":"إدارة HM للإيرادات والجمارك (HMRC)" },
  pt: { "IRS":"Receita Federal (IRS)","CBDT":"Conselho Central de Impostos Diretos (CBDT)","IRD_hk":"Departamento de Receita Interna (IRD)","IRAS":"Autoridade Fiscal de Singapura (IRAS)","DJP":"Direção Geral de Impostos (DJP)","LHDNM":"Conselho de Receita Interna da Malásia (LHDNM)","IRD_nz":"Departamento de Receita Interna (IRD)","FBR":"Conselho Federal de Receitas (FBR)","BIR":"Escritório de Receita Interna (BIR)","HMRC":"HM Receita & Alfândega (HMRC)" },
  ru: { "IRS":"Налоговая служба (IRS)","CBDT":"Центральный совет прямых налогов (CBDT)","IRD_hk":"Налоговое управление (IRD)","IRAS":"Налоговое управление Сингапура (IRAS)","DJP":"Генеральное управление налогообложения (DJP)","LHDNM":"Совет внутренних доходов Малайзии (LHDNM)","IRD_nz":"Налоговое управление (IRD)","FBR":"Федеральный совет по доходам (FBR)","BIR":"Бюро внутренних доходов (BIR)","HMRC":"HM Налоговая и таможенная (HMRC)" }
};

const categoryNames: Record<LanguageCode, Record<string, string>> = {
  en: { "Income Tax":"Income Tax","Payroll Tax":"Payroll Tax","Corporate Tax":"Corporate Tax","Capital Gains Tax":"Capital Gains Tax","GST":"GST","TDS":"TDS","Salaries Tax":"Salaries Tax","Profits Tax":"Profits Tax","Stamp Duty":"Stamp Duty","VAT":"VAT","SST":"SST","Sales Tax":"Sales Tax","National Insurance":"National Insurance" },
  hi: { "Income Tax":"आय कर","Payroll Tax":"पेरोल कर","Corporate Tax":"कॉर्पोरेट कर","Capital Gains Tax":"पूंजी लाभ कर","GST":"जीएसटी","TDS":"टीडीएस","Salaries Tax":"वेतन कर","Profits Tax":"लाभ कर","Stamp Duty":"स्टाम्प ड्यूटी","VAT":"वैट","SST":"एसएसटी","Sales Tax":"सेल्स टैक्स","National Insurance":"नैशनल इंश्योरेंस" },
  es: { "Income Tax":"Impuesto sobre la Renta","Payroll Tax":"Impuesto de Nómina","Corporate Tax":"Impuesto Corporativo","Capital Gains Tax":"Impuesto sobre Ganancias de Capital","GST":"GST","TDS":"TDS","Salaries Tax":"Impuesto de Salarios","Profits Tax":"Impuesto de Beneficios","Stamp Duty":"Impuesto de Timbre","VAT":"IVA","SST":"SST","Sales Tax":"Impuesto sobre Ventas","National Insurance":"Seguro Nacional" },
  fr: { "Income Tax":"Impôt sur le Revenu","Payroll Tax":"Taxe sur les Salaires","Corporate Tax":"Impôt sur les Sociétés","Capital Gains Tax":"Impôt sur les Plus-Values","GST":"GST","TDS":"TDS","Salaries Tax":"Impôt sur les Salaires","Profits Tax":"Impôt sur les Bénéfices","Stamp Duty":"Droit de Timbre","VAT":"TVA","SST":"SST","Sales Tax":"Taxe de Vente","National Insurance":"Assurance Nationale" },
  de: { "Income Tax":"Einkommensteuer","Payroll Tax":"Lohnsteuer","Corporate Tax":"Körperschaftsteuer","Capital Gains Tax":"Kapitalertragsteuer","GST":"GST","TDS":"TDS","Salaries Tax":"Gehaltssteuer","Profits Tax":"Gewinnsteuer","Stamp Duty":"Stempelsteuer","VAT":"MwSt","SST":"SST","Sales Tax":"Umsatzsteuer","National Insurance":"Nationalversicherung" },
  zh: { "Income Tax":"所得税","Payroll Tax":"工资税","Corporate Tax":"企业税","Capital Gains Tax":"资本利得税","GST":"GST","TDS":"TDS","Salaries Tax":"薪水税","Profits Tax":"利得税","Stamp Duty":"印花税","VAT":"增值税","SST":"SST","Sales Tax":"销售税","National Insurance":"国民保险" },
  "zh-TW": { "Income Tax":"所得稅","Payroll Tax":"工資稅","Corporate Tax":"企業稅","Capital Gains Tax":"資本利得稅","GST":"GST","TDS":"TDS","Salaries Tax":"薪水稅","Profits Tax":"利得稅","Stamp Duty":"印花稅","VAT":"增值責任 NO -> 增值稅","SST":"SST","Sales Tax":"銷售稅","National Insurance":"國民保險" },
  ja: { "Income Tax":"所得税","Payroll Tax":"給与税","Corporate Tax":"法人税","Capital Gains Tax":"キャピタルゲイン税","GST":"GST","TDS":"TDS","Salaries Tax":"給与税","Profits Tax":"利益税","Stamp Duty":"印紙税","VAT":"付加価値税","SST":"SST","Sales Tax":"売上税","National Insurance":"国民保険" },
  ar: { "Income Tax":"ضريبة الدخل","Payroll Tax":"ضريبة الرواتب","Corporate Tax":"ضريبة الشركات","Capital Gains Tax":"ضريبة الأرباح الرأسمالية","GST":"ضريبة القيمة المضافة الموحدة","TDS":"الضريبة المخصومة عند المصدر","Salaries Tax":"ضريبة الرواتب","Profits Tax":"ضريبة الأرباح","Stamp Duty":"ضريبة الدمغة","VAT":"ضريبة القيمة المضافة","SST":"ضريبة المبيعات والخدمات","Sales Tax":"ضريبة المبيعات","National Insurance":"التأمين الوطني" },
  pt: { "Income Tax":"Imposto de Renda","Payroll Tax":"Imposto sobre Salários","Corporate Tax":"Imposto Corporativo","Capital Gains Tax":"Imposto sobre Ganhos de Capital","GST":"GST","TDS":"TDS","Salaries Tax":"Imposto sobre Salários","Profits Tax":"Imposto sobre Lucros","Stamp Duty":"Imposto de Selo","VAT":"IVA","SST":"SST","Sales Tax":"Imposto sobre Vendas","National Insurance":"Seguro Nacional" },
  ru: { "Income Tax":"Подоходный налог","Payroll Tax":"Налог на фонд заработной платы","Corporate Tax":"Корпоративный налог","Capital Gains Tax":"Налог на прирост капитала","GST":"GST","TDS":"TDS","Salaries Tax":"Налог на зарплату","Profits Tax":"Налог на прибыль","Stamp Duty":"Гербовый сбор","VAT":"НДС","SST":"SST","Sales Tax":"Налог на продажи","National Insurance":"Национальное страхование" }
};

export function setLang(lang: LanguageCode): void {
  currentLang = lang;
  try {
    localStorage.setItem("lang", lang);
  } catch {}
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "auto");
  listeners.forEach(fn => fn());
}

export function getLang(): LanguageCode {
  return currentLang;
}

export function getDict(lang?: LanguageCode): TranslationDict {
  const l = lang || currentLang;
  return dictCache[l] || dictCache.en || {};
}

export function loadLocales(locales: LocaleBundle): void {
  (Object.keys(locales) as LanguageCode[]).forEach(code => {
    const dict = locales[code];
    if (dict) dictCache[code] = dict;
  });
  const initial = detectLanguage();
  currentLang = initial;
  const dict = getDict(initial);
  applyToDocument(dict, initial);
  translateDynamicContent(initial);
}

export function detectLanguage(): LanguageCode {
  try {
    const stored = localStorage.getItem("lang");
    if (stored === "zh-TW") return "zh-TW";
    if (stored && isValidLang(stored)) return stored as LanguageCode;
  } catch {}
  try {
    const browser = navigator.languages?.[0] || navigator.language || "en";
    const lower = browser.toLowerCase();
    if (lower.startsWith("zh-tw") || lower.startsWith("zh-hk")) return "zh-TW";
    const code = lower.slice(0, 2) as LanguageCode;
    if (isValidLang(code)) return code;
  } catch {}
  return "en";
}

export function onChange(fn: () => void): () => void {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}

const countryToLanguage: Record<string, LanguageCode | null> = {
  "united-states": "en",
  "india": "hi",
  "hong-kong": "zh",
  "singapore": "en",
  "indonesia": null,
  "malaysia": null,
  "new-zealand": "en",
  "pakistan": null,
  "philippines": null,
  "united-kingdom": "en"
};

const countryToLanguageByFullName: Record<string, LanguageCode | null> = {
  "United States": "en",
  "India": "hi",
  "Hong Kong": "zh",
  "Singapore": "en",
  "Indonesia": null,
  "Malaysia": null,
  "New Zealand": "en",
  "Pakistan": null,
  "Philippines": null,
  "United Kingdom": "en"
};

export function getLanguageForCountry(countrySlug: string): LanguageCode | null {
  return countryToLanguage[countrySlug] || null;
}

export function getLanguageForCountryName(countryName: string): LanguageCode | null {
  return countryToLanguageByFullName[countryName] || null;
}

export function t(key: string, vars?: Record<string, string | number>): string {
  const dict = getDict();
  let text = dict[key] || key;
  if (vars) {
    text = text.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? String(vars[k]) : _));
  }
  return text;
}

export function translateCountryName(name: string, lang?: LanguageCode): string {
  const l = lang || currentLang;
  return countryNames[l]?.[name] || name;
}

export function translateCategoryName(name: string, lang?: LanguageCode): string {
  const l = lang || currentLang;
  return categoryNames[l]?.[name] || name;
}

function isValidLang(lang: string | null | undefined): boolean {
  return !!lang && ["en", "hi", "es", "fr", "de", "zh", "zh-TW", "ja", "ar", "pt", "ru"].includes(lang);
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function translateDynamicContent(lang: LanguageCode) {
  const cDict = countryNames[lang] || countryNames.en;
  const catDict = categoryNames[lang] || categoryNames.en;
  const contDict = continentNames[lang] || continentNames.en;
  const currDict = currencyNames[lang] || currencyNames.en;
  const taxDict = taxAuthorityNames[lang] || taxAuthorityNames.en;

  const walk = (root: Node) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const nodes: Text[] = [];
    let node: Text | null;
    while ((node = walker.nextNode() as Text | null)) {
      nodes.push(node);
    }
    nodes.forEach((textNode) => {
      let text = textNode.textContent || "";
      let changed = false;
      let newText = text;

      for (const [enName, translated] of Object.entries(cDict)) {
        if (newText.includes(enName)) {
          newText = newText.replace(new RegExp(escapeRegExp(enName), 'g'), translated);
          changed = true;
        }
      }

      for (const [enName, translated] of Object.entries(catDict)) {
        if (newText.includes(enName)) {
          newText = newText.replace(new RegExp(escapeRegExp(enName), 'g'), translated);
          changed = true;
        }
      }

      for (const [enName, translated] of Object.entries(contDict)) {
        if (newText.includes(enName)) {
          newText = newText.replace(new RegExp(escapeRegExp(enName), 'g'), translated);
          changed = true;
        }
      }

      for (const [enName, translated] of Object.entries(currDict)) {
        if (newText.includes(enName)) {
          newText = newText.replace(new RegExp("\\b" + escapeRegExp(enName) + "\\b", 'g'), translated);
          changed = true;
        }
      }

      for (const [enName, translated] of Object.entries(taxDict)) {
        if (newText.includes(enName)) {
          newText = newText.replace(new RegExp(escapeRegExp(enName), 'g'), translated);
          changed = true;
        }
      }

      if (changed && textNode.parentElement) {
        textNode.textContent = newText;
      }
    });
  };

  walk(document.body);
}

function applyToDocument(dict: TranslationDict, lang: LanguageCode) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const text = dict[key];
    if (text) {
      let final = text;
      const varsAttr = el.getAttribute('data-i18n-vars');
      if (varsAttr) {
        try {
          const vars = JSON.parse(varsAttr);
          final = final.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? String(vars[k]) : _));
        } catch {}
      }
      el.textContent = final;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (!key) return;
    const text = dict[key];
    if (text) el.setAttribute('placeholder', text);
  });
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (!key) return;
    const text = dict[key];
    if (text) el.setAttribute('title', text);
  });
}
