import { unitedStates } from "./united-states/data";
import { india } from "./india/data";
import { hongKong } from "./hong-kong/data";
import { singapore } from "./singapore/data";
import { indonesia } from "./indonesia/data";
import { malaysia } from "./malaysia/data";
import { newZealand } from "./new-zealand/data";
import { pakistan } from "./pakistan/data";
import { philippines } from "./philippines/data";
import { unitedKingdom } from "./united-kingdom/data";
import type { Country } from "./types";

export const countries: Country[] = [
  unitedStates,
  india,
  hongKong,
  singapore,
  indonesia,
  malaysia,
  newZealand,
  pakistan,
  philippines,
  unitedKingdom
];

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find(c => c.slug === slug);
}

export function getCategoryBySlug(countrySlug: string, categorySlug: string) {
  const country = getCountryBySlug(countrySlug);
  if (!country) return null;
  return country.taxCategories.find(c => c.slug === categorySlug) ?? null;
}

export function getCalculatorBySlug(countrySlug: string, categorySlug: string, calculatorSlug: string) {
  const category = getCategoryBySlug(countrySlug, categorySlug);
  if (!category) return null;
  return category.calculators.find(c => c.slug === calculatorSlug) ?? null;
}