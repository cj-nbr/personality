export function generateBreadcrumbs(items: Array<{ label: string; href?: string }>) {
  return items;
}

export function generateSchema(type: string, data: Record<string, unknown>) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };
}
