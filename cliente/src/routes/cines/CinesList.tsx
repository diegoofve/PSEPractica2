import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';
import  Grid  from '@mui/material/Grid';

// 1. Definimos la "forma" de los datos que esperamos recibir del backend
interface Cine {
  id: number;
  name: string;
  capacity: number;
}

export default function CinesList() {
  // 2. useState: Creamos una variable 'cines' (que empieza como un array vacío) 
  // y una función 'setCines' para actualizarla cuando lleguen los datos.
  const [cines, setCines] = useState<Cine[]>([]);

  // 3. useEffect: Se ejecuta una sola vez al cargar el componente (gracias al [] del final)
  useEffect(() => {
    // Hacemos un POST a nuestro backend (asegúrate de que el puerto sea el 3000 o el que estés usando)
    // Le pasamos un body vacío {} porque queremos todos los cines
    axios.post('http://localhost:3000/cinemas', {})
      .then((response) => {
        // Si va bien, guardamos los datos en el estado
        setCines(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los cines:", error);
      });
  }, []);

  // 4. Renderizado condicional en bucle (.map) para dibujar cada cine
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Nuestros Cines
      </Typography>
      
      <Grid container spacing={2}>
      {cines.map((cine) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cine.id}>  {/* ← Sin "item", usa "size" */}
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" color="primary">
                {cine.name}
              </Typography>
              <Typography color="textSecondary">
                Capacidad: {cine.capacity} butacas
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  );
}