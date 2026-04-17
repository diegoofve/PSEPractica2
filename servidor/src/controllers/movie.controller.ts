import { Request, Response } from 'express';
import { prisma } from '../lib/db';
import { MovieFiltersDto } from '../dto/movie.dto';
import { MovieService } from '../services/movie.service';

const getMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const filters = req.body;

    const movies = await MovieService.getMovies(filters);
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