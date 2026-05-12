import { defineCollection } from 'astro:content';
import { z } from 'zod';

import { glob } from 'astro/loaders';

// 공통 기본 스키마
const baseSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()),
});

// 강의노트 컬렉션
const courseworkCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/coursework' }),
  schema: baseSchema.extend({
    description: z.string().optional(),
    course: z.string().optional(),
    pdfUrl: z.string().regex(/^https?:\/\//).optional(),
    draft: z.boolean().default(false),
  }),
});

// 연구이력 컬렉션
const researchCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: baseSchema.extend({
    venue: z.string().optional(),       // 학회/저널명
    doi: z.string().optional(),         // DOI URL
    arxiv: z.string().optional(),       // arXiv ID (e.g. "2301.00001")
    abstract: z.string().optional(),
    authors: z.array(z.string()).optional(),
    pdfUrl: z.string().regex(/^https?:\/\//).optional(),
    draft: z.boolean().default(false),
  }),
});

// 아티클 컬렉션 (연구 철학, 기술 에세이)
const articleCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/article' }),
  schema: baseSchema.extend({
    description: z.string(),
    subtitle: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  coursework: courseworkCollection,
  research: researchCollection,
  article: articleCollection,
};
