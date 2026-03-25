import { z } from 'zod';

export const CinemaFilterSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  location: z.string().optional()
});

export type CinemaFilterDTO = z.infer<typeof CinemaFilterSchema>;