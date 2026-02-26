import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ──────────────────────────────
   Prints Collection
   ────────────────────────────── */
const prints = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prints' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    price: z.number(),                         // base price in dollars
    salePrice: z.number().optional(),           // sale price (omit if no sale)
    saleEnds: z.string().optional(),            // ISO date string, e.g. "2026-03-15"
    medium: z.string().default('Digital Print on Matte Paper'),
    size: z.string(),
    buyLink: z.string().optional(),             // Stripe payment link
    featured: z.boolean().default(false),       // show on homepage
    sortOrder: z.number().default(0),           // lower = first
    published: z.boolean().default(true),       // set false to hide
  }),
});

/* ──────────────────────────────
   Originals Collection
   ────────────────────────────── */
const originals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/originals' }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    price: z.number().optional(),               // omit if not for sale / sold
    salePrice: z.number().optional(),
    saleEnds: z.string().optional(),
    medium: z.string(),
    size: z.string(),
    sold: z.boolean().default(false),
    inquireEmail: z.string().default('hello@darkbloomstudio.com'),
    featured: z.boolean().default(false),
    sortOrder: z.number().default(0),
    published: z.boolean().default(true),
  }),
});

/* ──────────────────────────────
   Events Collection
   ────────────────────────────── */
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),                           // display date text
    sortDate: z.string(),                       // ISO date for sorting, e.g. "2026-03-15"
    location: z.string(),
    description: z.string().optional(),
    link: z.string().optional(),
    image: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = { prints, originals, events };
