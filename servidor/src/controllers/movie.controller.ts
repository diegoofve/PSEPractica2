import { Request, Response } from 'express';
import { prisma } from '../lib/db';
import { MovieFilterSchema } from '../dtos/movie.dto';

export const getMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const validation = MovieFilterSchema.safeParse(req.body);

    if (!validation.success) {
       res.status(400).json({ errors: validation.error.issues });
       return;
    }

    const filters = validation.data;

    const whereClause: any = {};

    if (filters.id) {
        whereClause.id = filters.id;
    }
    
    // añadir mas lógica?

    const movies = await prisma.movie.findMany({
        where: whereClause
    });


    res.status(200).json(movies);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};