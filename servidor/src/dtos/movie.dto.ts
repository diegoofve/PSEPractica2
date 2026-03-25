import { z } from 'zod';

export const MovieFilterSchema = z.object({
  id: z.number().int().optional(),
  cast: z.array(z.string()).optional(),
  sessionBefore: z.string().datetime().optional(), // formato ISO
  sessionAfter: z.string().datetime().optional()
});


export type MovieFilterDTO = z.infer<typeof MovieFilterSchema>;