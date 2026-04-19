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
    
//devuelvo el cine, si se llega aqui no ha habido errores al crearlo
    res.status(201).json(DBresponse);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const editCinema = async (req: Request, res: Response): Promise<void> => {
  try{
    const data = req.body;

    const DBresponse = await CinemaService.editCinema(data);

    //devuelvo el cine, si se llega aqui no ha habido errores al editarlo
    res.status(200).json(DBresponse);
  }catch (error: any) {
    console.log(error);

    if(error.message === 'NOT_FOUND'){
      res.status(404).json({ error: 'Cine no encontrado'});
    }else{
      res.status(500).json({ error: 'Error interno del servidor '});
    }
  }
};

const deleteCinema = async (req: Request, res: Response): Promise<void> => {
  try{
    const data = req.body;

    await CinemaService.deleteCinema(data);

    //Si algo saliera mal, lo coge el catch
    res.status(204).send();
  }catch (error: any) {
    console.log(error);

    if(error.message === 'NOT_FOUND'){
      res.status(404).json({ error: 'Cine no encontrado'});
    }else{
      res.status(500).json({ error: 'Error interno del servidor '});
    }
  }
};

export const CinemaController = {
  getCinemas,
  createCinema,
  editCinema,
  deleteCinema
}