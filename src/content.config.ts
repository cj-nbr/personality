import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const guideCollection = defineCollection({
  loader: glob({ base: "./src/content/guides", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    lastUpdated: z.string(),
    readTime: z.string(),
    heroTitle: z.string().optional(),
    heroSubtitle: z.string().optional(),
    toc: z.boolean().optional().default(true),
    featured: z.boolean().optional().default(false),
    categorySlug: z.string().optional(),
    relatedGuides: z.array(z.string()).optional().default([]),
    relatedCalculators: z.array(z.string()).optional().default([]),
    relatedCountries: z.array(z.string()).optional().default([]),
    relatedGlossary: z.array(z.string()).optional().default([]),
  }),
});

const glossaryCollection = defineCollection({
  loader: glob({ base: "./src/content/glossary", pattern: "**/*.md" }),
  schema: z.object({
    term: z.string(),
    pronunciation: z.string().optional(),
    category: z.string(),
    definition: z.string(),
    examples: z.array(z.string()).optional().default([]),
    relatedGuides: z.array(z.string()).optional().default([]),
    relatedCalculators: z.array(z.string()).optional().default([]),
    relatedGlossary: z.array(z.string()).optional().default([]),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    lastUpdated: z.string(),
    readTime: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  guides: guideCollection,
  glossary: glossaryCollection,
};
