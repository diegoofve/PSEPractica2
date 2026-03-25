import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { MovieFilterSchema } from '../dtos/movie.dto';

const prisma = new PrismaClient();

export const getMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    // 1. Parsear y validar el body usando el esquema de Zod
    const validation = MovieFilterSchema.safeParse(req.body);

    if (!validation.success) {
       // Si los datos no cumplen el formato, devolvemos un error 400 (Bad Request)
       res.status(400).json({ errors: validation.error.errors });
       return;
    }

    const filters = validation.data;

    // 2. Ejecutar la consulta en Prisma
    // Empezamos con un objeto 'where' vacío y lo vamos llenando según los filtros que lleguen
    const whereClause: any = {};

    if (filters.id) {
        whereClause.id = filters.id;
    }
    
    // (Aquí tendrías que añadir más lógica condicional para 'cast' o las fechas si vienen en el body, 
    // lo cual implica buscar en tablas relacionadas usando Prisma).

    const movies = await prisma.movie.findMany({
        where: whereClause
    });

    // 3 y 4. Mapeo (si fuera necesario) y devolver respuesta
    res.status(200).json(movies);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};