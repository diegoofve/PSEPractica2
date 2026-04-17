import { Request, Response } from 'express';
import { prisma } from '../lib/db';
import { CinemaFiltersDto } from '../dto/cinema.dto';
import { get } from 'node:http';
import { CinemaService } from '../services/cinema.service';

const getCinemas = async (req: Request, res: Response): Promise<void> => {
  try {
    const filters = req.body;

    const cinemas = await CinemaService.getCinemas(filters);
    res.status(200).json(cinemas);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const CinemaController = {
  getCinemas
  //TODO resto de movidas del CRUD
}