export interface TaxYearConfig {
  current: string;
  supported: string[];
  previous: string[];
  future: string[];
}

export const taxYears: Record<string, TaxYearConfig> = {
  "united-states": {
    current: "2024",
    supported: ["2022", "2023", "2024", "2025"],
    previous: ["2022", "2023"],
    future: ["2025"],
  },
  india: {
    current: "2024-25",
    supported: ["2023-24", "2024-25"],
    previous: ["2023-24"],
    future: [],
  },
  "hong-kong": {
    current: "2024/25",
    supported: ["2023/24", "2024/25"],
    previous: ["2023/24"],
    future: [],
  },
  singapore: {
    current: "2024",
    supported: ["2023", "2024"],
    previous: ["2023"],
    future: [],
  },
  indonesia: {
    current: "2024",
    supported: ["2023", "2024"],
    previous: ["2023"],
    future: [],
  },
  malaysia: {
    current: "2024",
    supported: ["2023", "2024"],
    previous: ["2023"],
    future: [],
  },
  "new-zealand": {
    current: "2024-25",
    supported: ["2023-24", "2024-25"],
    previous: ["2023-24"],
    future: [],
  },
  pakistan: {
    current: "2024-25",
    supported: ["2023-24", "2024-25"],
    previous: ["2023-24"],
    future: [],
  },
  philippines: {
    current: "2024",
    supported: ["2023", "2024"],
    previous: ["2023"],
    future: [],
  },
  "united-kingdom": {
    current: "2024-25",
    supported: ["2023-24", "2024-25"],
    previous: ["2023-24"],
    future: [],
  },
};

export function getTaxYears(countrySlug: string): string[] {
  return taxYears[countrySlug]?.supported || ["2023", "2024"];
}

export function getCurrentTaxYear(countrySlug: string): string {
  return taxYears[countrySlug]?.current || "2024";
}
