import { Request, Response } from 'express';
import { prisma } from '../lib/db';
import { CinemaFilterSchema } from '../dtos/cinema.dto';

export const getCinemas = async (req: Request, res: Response): Promise<void> => {
  try {
    // 1. Validar body
    const validation = CinemaFilterSchema.safeParse(req.body);

    if (!validation.success) {
       res.status(400).json({ errors: validation.error.issues });
       return;
    }

    const filters = validation.data;
    const whereClause: any = {};

//filtros
    if (filters.id) {
        whereClause.id = filters.id;
    }

    // 3. Ejecutar consulta en Prisma (Recuerda: la tabla es 'theater')
    const cinemas = await prisma.theater.findMany({
        where: whereClause,
        // cd incluir relaciones si se pide conCatalog o withMovie??
    });

    res.status(200).json(cinemas);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};