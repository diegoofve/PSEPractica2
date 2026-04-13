import { Request, Response } from 'express';
import { prisma } from '../lib/db';
import { MovieFiltersDto } from '../dto/movie.dto';

const getMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const validation = MovieFiltersDto.safeParse(req.body); //TODO mismo fix que cinema.controller

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

export const MovieController = {
  getMovies
  //TODO el resto de movidas de crud aqui tmb
}