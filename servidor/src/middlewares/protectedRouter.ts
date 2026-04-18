import { Router } from 'express';
import { MovieController } from '../controllers/movie.controller'; 
import passport from 'passport';
import { CinemaController } from '../controllers/cinema.controller';
import { Role } from "@prisma/client";
import { authorize } from './auth';

/**
 * Middleware: Protected Router
 * 
 * Implementación de un Express Router personalizado para rutas protegidas
 * 
 */

const protectedRouter = Router();

// POST /movies (ruta, middleware de autenticación, controller)
protectedRouter.get('/movies', //passport.authenticate('jwt', { session: false }), authorize([Role.CINEMA, Role.ADMIN]), 
MovieController.getMovies);

protectedRouter.post('/movies', //autenticacion
MovieController.createMovie
);

protectedRouter.put('/movies', //autenticacion
MovieController.editMovie
);

protectedRouter.delete('/movies', //autenticacion
MovieController.deleteMovie
);

// POST /cinemas (ruta, middleware de autenticación, controller)
protectedRouter.get('/cinemas', //passport.authenticate('jwt', { session: false }), authorize([Role.CINEMA, Role.ADMIN]), 
CinemaController.getCinemas);

protectedRouter.post('/cinemas',// autenticacion
CinemaController.createCinema
);

protectedRouter.put('/cinemas',// autenticacion
CinemaController.editCinema
);

protectedRouter.delete('/cinemas',// autenticacion
CinemaController.deleteCinema
);

export default protectedRouter;