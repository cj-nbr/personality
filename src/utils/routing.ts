export function getBaseUrl() {
  return "https://taxportal.com";
}

export function getCountryUrl(slug: string) {
  return `${getBaseUrl()}/countries/${slug}`;
}

export function getCategoryUrl(countrySlug: string, categorySlug: string) {
  return `${getCountryUrl(countrySlug)}/${categorySlug}`;
}

export function getCalculatorUrl(countrySlug: string, categorySlug: string, calculatorSlug: string) {
  return `${getCategoryUrl(countrySlug, categorySlug)}/${calculatorSlug}`;
}
