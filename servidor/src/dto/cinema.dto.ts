// DTO para los filtros a findCinemas
export interface CinemaFiltersDto {
  id?: number;
  sessionBefore?: Date;
  sessionAfter?: Date;
  withMovie?: number;
  withCatalog?: boolean;
}

//DTO para crear nuevos cinemas
export interface CinemaCreationDto {
  name: string;
  capacity: number;
  catalog?: CinemaCatalogDto[]; 
}

//DTO para editar cinemas existentes
export interface CinemaEditDto {
  id: number;
  name?: string;
  capacity?: number;
  catalog?: CinemaCatalogDto[]; 
}

//DTO para borrar cinemas
export interface CinemaDeletionDto{
  id: number;
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