export interface TaxYearConfig {
  current: string;
  supported: string[];
  previous: string[];
  future: string[];
}

export const taxYears: Record<string, TaxYearConfig> = {
  "united-states": {
    current: "2026",
    supported: ["2023", "2024", "2025", "2026"],
    previous: ["2023", "2024", "2025"],
    future: [],
  },
  india: {
    current: "2026-27",
    supported: ["2024-25", "2025-26", "2026-27"],
    previous: ["2024-25", "2025-26"],
    future: [],
  },
  "hong-kong": {
    current: "2026/27",
    supported: ["2024/25", "2025/26", "2026/27"],
    previous: ["2024/25", "2025/26"],
    future: [],
  },
  singapore: {
    current: "2025",
    supported: ["2024", "2025"],
    previous: ["2024"],
    future: [],
  },
  indonesia: {
    current: "2025",
    supported: ["2024", "2025"],
    previous: ["2024"],
    future: [],
  },
  malaysia: {
    current: "2025",
    supported: ["2024", "2025"],
    previous: ["2024"],
    future: [],
  },
  "new-zealand": {
    current: "2025-26",
    supported: ["2024-25", "2025-26"],
    previous: ["2024-25"],
    future: [],
  },
  pakistan: {
    current: "2025-26",
    supported: ["2024-25", "2025-26"],
    previous: ["2024-25"],
    future: [],
  },
  philippines: {
    current: "2025",
    supported: ["2024", "2025"],
    previous: ["2024"],
    future: [],
  },
  "united-kingdom": {
    current: "2025-26",
    supported: ["2024-25", "2025-26"],
    previous: ["2024-25"],
    future: [],
  },
};

export function getTaxYears(countrySlug: string): string[] {
  return taxYears[countrySlug]?.supported || ["2024", "2025", "2026"];
}

export function getCurrentTaxYear(countrySlug: string): string {
  return taxYears[countrySlug]?.current || "2026";
}
