import { z } from 'zod';

export const CinemaFilterSchema = z.object({
  id: z.number().int().optional(),
  withCatalog: z.boolean().optional(),
  withmovie: z.number().int().optional(),
  sessionBefore: z.iso.datetime().optional(), // formato ISO
  sessionAfter: z.iso.datetime().optional()
});

export type CinemaFilterDTO = z.infer<typeof CinemaFilterSchema>;