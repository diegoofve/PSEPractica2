/*import { z } from 'zod';

export const MovieFilterSchema = z.object({
  id: z.number().int().optional(),
  cast: z.array(z.string()).optional(),
  sessionBefore: z.iso.datetime().optional(), // formato ISO
  sessionAfter: z.iso.datetime().optional()
});


export type MovieFilterDTO = z.infer<typeof MovieFilterSchema>;
*/
// DTO para los filtros de findMovies
export interface MovieFiltersDto {
  id?: number;
  sessionBefore?: Date;
  sessionAfter?: Date;
  cast?: string[];
}

//DTO para crear nuevas movies
export interface MovieCreationDto {
  title: string;
  cast: string;
  sessions: Array<{
    cinema: string;
    day: string;
    start: string;
    end: string;
  }>;
}

//DTO para editar movies existentes
export interface MovieEditDto {
  id: number;
  title?: string;
  cast?: string;
  sessions?: Array<{
    cinema: string;
    day: string;
    start: string;
    end: string;
  }>;
}

//DTO para borrar movies
export interface MovieDeletionDto {
  id: number;
}

// DTO para la respuesta de findMovies
export interface MovieResponseDto {
  id: number;
  title: string;
  cast: string;
  sessions?: Array<{
    cinema: string;
    day: string;
    start: string;
    end: string;
  }>;
}