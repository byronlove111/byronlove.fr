import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    lang: z.enum(["en", "fr"]),
    slug_base: z.string(),
    tags: z.array(z.string()).optional().default([]),
    cover: z.string().optional(),
    word_count: z.number().optional(),
  }),
});

export const collections = { blog };
