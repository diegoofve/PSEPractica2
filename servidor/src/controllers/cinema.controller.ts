import { Request, Response } from 'express';
import { prisma } from '../lib/db';
import { CinemaFiltersDto } from '../dto/cinema.dto';
import { get } from 'node:http';
import { CinemaService } from '../services/cinema.service';

// TODO revisar los codigos http de respuesta para ver que sean adecuados a cada situacion. 
// El servicio deberia estar devolviendo true/false?=???

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

const createCinema = async (req: Request, res: Response): Promise<void> => {
  try{
    const data = req.body;

    const DBresponse = await CinemaService.createCinema(data);
    
    if(DBresponse){
      res.status(201).json({ result: 'Se ha añadido el cine correctamente.'})
    }else{
      res.status(400).json({ error: 'Datos insuficientes / incorrectos. No se ha podido añadir el cine'})
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const editCinema = async (req: Request, res: Response): Promise<void> => {
  try{
    const data = req.body;

    const DBresponse = await CinemaService.createCinema(data);

    if(DBresponse){
      res.status(200).json({ result: 'Editado correctamente'})
    }else{
      res.status(400).json({ error: 'Datos insuficientes / incorrectos. No se ha podido editar el cine'})
    }
  }catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error interno del servidor '});
  }
};

const deleteCinema = async (req: Request, res: Response): Promise<void> => {
  try{
    const data = req.body;

    const DBresponse = await CinemaService.deleteCinema(data);

    if(DBresponse){
      res.status(204).json({ result: 'Borrado correctamente'})
    }else{
      res.status(400).json({ error: 'Datos insuficientes / incorrectos. No se ha podido borrar el cine'})
    }
  }catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error interno del servidor '});
  }
};

export const CinemaController = {
  getCinemas,
  createCinema,
  editCinema,
  deleteCinema
}