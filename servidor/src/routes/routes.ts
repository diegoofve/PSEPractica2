import { Router } from 'express';
import { getMovies } from '../controllers/movie.controller';
import { getCinemas } from '../controllers/cinema.controller'; 
import { login } from '../controllers/login.controller';
import { register } from '../controllers/register.controller';

const router = Router();

router.post('/movies', getMovies);
router.post('/cinemas', getCinemas); 
router.get('/login', login);
router.get('/register', register);

export default router;