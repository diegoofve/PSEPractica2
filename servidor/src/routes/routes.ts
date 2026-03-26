import { Router } from 'express';
import { getMovies } from '../controllers/movie.controller';
import { getCinemas } from '../controllers/cinema.controller'; 

const router = Router();

router.post('/movies', getMovies);
router.post('/cinemas', getCinemas); 
router.get('/login', 

export default router;