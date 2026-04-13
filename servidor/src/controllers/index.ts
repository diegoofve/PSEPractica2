import express from 'express';
import cors from 'cors';
import type { Request, Response } from 'express';
import protectedRouter from '../middlewares/protectedRouter';
import publicRouter from '../middlewares/publicRouter';
import passport from 'passport';
import { JWTStrategy } from '../lib/auth';

const PORT = 3000;

//Instanciamos express
const app = express();

//JSON
app.use(express.json());
app.use(cors());

//Definimos la ruta raíz (/) que devolverá una respuesta basada en texto
app.get('/', (req: Request, res: Response) => {
    res.send(`Soy el servidor respondiendo`);
})

passport.use('jwt', JWTStrategy); // <-- Configuramos Passport con nuestra estrategia JWT personalizada
app.use(passport.initialize()); // <-- Middleware #3: Passport (para autenticación)
app.use(publicRouter); // <-- Middleware #4: Router de rutas públicas (sin autenticación)
app.use(protectedRouter); // <-- Middleware #5: Router de rutas protegidas (con autenticación)


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})
