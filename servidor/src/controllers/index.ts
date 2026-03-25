import express from 'express';
import cors from 'cors';
import type { Request, Response } from 'express';
//import{ prisma } from './lib/db';

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

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})