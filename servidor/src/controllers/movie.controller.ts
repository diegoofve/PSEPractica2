import { Request, Response } from 'express';
import { prisma } from '../lib/db';
import { MovieFiltersDto } from '../dto/movie.dto';
import { MovieService } from '../services/movie.service';

// TODO revisar los codigos http de respuesta para ver que sean adecuados a cada situacion. 
// El servicio deberia estar devolviendo true/false?=???

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

const createMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;

    const DBresponse = await MovieService.createMovie(data);

    if(DBresponse){
      res.status(201).json({ result: 'Se ha añadido el cine correctamente.'})
    }else{
      res.status(400).json({ error: 'Datos insuficientes / incorrectos. No se ha podido añadir el cine'})
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const editMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;

    const DBresponse = await MovieService.editMovie(data);
    
    if(DBresponse){
      res.status(200).json({ result: 'Editado correctamente'})
    }else{
      res.status(400).json({ error: 'Datos insuficientes / incorrectos. No se ha podido editar el cine'})
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const deleteMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;

    const DBresponse = await MovieService.deleteMovie(data);
    
    if(DBresponse){
      res.status(204).json({ result: 'Borrado correctamente'})
    }else{
      res.status(400).json({ error: 'Datos insuficientes / incorrectos. No se ha podido borrar el cine'})
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const MovieController = {
  getMovies,
  createMovie,
  editMovie,
  deleteMovie
}