/*import { z } from 'zod';

export const CinemaFilterSchema = z.object({
  id: z.number().int().optional(),
  withCatalog: z.boolean().optional(),
  withmovie: z.number().int().optional(),
  sessionBefore: z.iso.datetime().optional(), // formato ISO
  sessionAfter: z.iso.datetime().optional()
});

export type CinemaFilterDTO = z.infer<typeof CinemaFilterSchema>;
*/

// DTO para los filtros a findCinemas
export interface CinemaFiltersDto {
  id?: number;
  sessionBefore?: Date;
  sessionAfter?: Date;
  withMovie?: number;
  withCatalog?: boolean;
}

// DTO para las carteleras
export interface CinemaCatalogDto {
  id: number;
  title: string;
  sessions: Array<{
    date: string;
    start: string;
    end: string;
  }>;
}

// DTO para la respuesta de findCinemas
export interface CinemaResponseDto {
  id: number;
  name: string;
  capacity: number;
  catalog?: CinemaCatalogDto[]; 
}