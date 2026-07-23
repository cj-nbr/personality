export interface CurrencyConfig {
  code: string;
  symbol: string;
  name: string;
  locale: string;
  minimumFractionDigits: number;
  maximumFractionDigits: number;
}

export const currencies: Record<string, CurrencyConfig> = {
  USD: {
    code: "USD",
    symbol: "$",
    name: "US Dollar",
    locale: "en-US",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
  INR: {
    code: "INR",
    symbol: "₹",
    name: "Indian Rupee",
    locale: "en-IN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  },
  HKD: {
    code: "HKD",
    symbol: "HK$",
    name: "Hong Kong Dollar",
    locale: "en-HK",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
  SGD: {
    code: "SGD",
    symbol: "S$",
    name: "Singapore Dollar",
    locale: "en-SG",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
  IDR: {
    code: "IDR",
    symbol: "Rp",
    name: "Indonesian Rupiah",
    locale: "id-ID",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  },
  MYR: {
    code: "MYR",
    symbol: "RM",
    name: "Malaysian Ringgit",
    locale: "ms-MY",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
  NZD: {
    code: "NZD",
    symbol: "NZ$",
    name: "New Zealand Dollar",
    locale: "en-NZ",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
  PKR: {
    code: "PKR",
    symbol: "Rs",
    name: "Pakistani Rupee",
    locale: "en-PK",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  },
  PHP: {
    code: "PHP",
    symbol: "₱",
    name: "Philippine Peso",
    locale: "en-PH",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    name: "British Pound",
    locale: "en-GB",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
};

export function getCurrency(countryCode: string): CurrencyConfig {
  return currencies[countryCode] || currencies.USD;
}

export function formatCurrency(amount: number, countryCode: string): string {
  const currency = getCurrency(countryCode);
  try {
    return new Intl.NumberFormat(currency.locale, {
      style: "currency",
      currency: currency.code,
      minimumFractionDigits: currency.minimumFractionDigits,
      maximumFractionDigits: currency.maximumFractionDigits,
    }).format(amount);
  } catch {
    return `${currency.symbol}${amount.toLocaleString(currency.locale, {
      minimumFractionDigits: currency.minimumFractionDigits,
      maximumFractionDigits: currency.maximumFractionDigits,
    })}`;
  }
}
