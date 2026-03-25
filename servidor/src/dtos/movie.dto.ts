import { z } from 'zod';

export const MovieFilterSchema = z.object({
  id: z.number().int().optional(),
  cast: z.array(z.string()).optional(),
  sessionBefore: z.iso.datetime().optional(), // formato ISO
  sessionAfter: z.iso.datetime().optional()
});


export type MovieFilterDTO = z.infer<typeof MovieFilterSchema>;