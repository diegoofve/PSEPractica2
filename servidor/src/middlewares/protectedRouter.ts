import { Router } from 'express';
import { MovieController } from '../controllers/movie.controller'; 
import passport from 'passport';
import { CinemaController } from '../controllers/cinema.controller';
import { Role } from "../../generated/prisma";
import { authorize } from './auth';

/**
 * Middleware: Protected Router
 * 
 * Implementación de un Express Router personalizado para rutas protegidas
 * 
 */

const protectedRouter = Router();

// POST /movies (ruta, middleware de autenticación, controller)
protectedRouter.post('/movies', passport.authenticate('jwt', { session: false }), authorize([Role.CINEMA, Role.ADMIN]), MovieController.getMovies);

// POST /cinemas (ruta, middleware de autenticación, controller)
protectedRouter.post('/cinemas', passport.authenticate('jwt', { session: false }), authorize([Role.CINEMA, Role.ADMIN]), CinemaController.getCinemas);

export default protectedRouter;