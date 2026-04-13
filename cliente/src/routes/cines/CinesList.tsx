/*
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
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cine.id}>  { ← Sin "item", usa "size" }
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
}*/
import { useEffect, useState } from "react";
import axios, { type AxiosResponse } from "axios";
import { Container, Typography, Grid, Box, CircularProgress } from "@mui/material";
import type { CinemaResponseDto } from "../../types/cines.types";
import { CineCard } from "./CinesCard";

export const CinesList = () => {
    const [cines, setCines] = useState<CinemaResponseDto[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Llamada a la API con cartelera (implementación simple no, lo siguiente)
        axios.post('http://localhost:3000/cinemas', { withCatalog: true }).then((res: AxiosResponse) => {
            const { data } = res;
            if (data && data.length > 0) {
                setCines(data as CinemaResponseDto[]);
            }
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }, []);

    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <Box sx={{ mb: 6, textAlign: 'center' }}>
                <Typography variant="h3" component="h1" fontWeight="800" color="primary.main" gutterBottom>
                    Nuestros Cines
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                    Descubre la cartelera en nuestros cines y no te pierdas ningún estreno.
                </Typography>
            </Box>

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
                    <CircularProgress size={60} thickness={4} />
                </Box>
            ) : (!cines || cines.length === 0) ? (
                <Typography variant="h6" color="text.secondary" align="center" sx={{ py: 8 }}>
                    No hay cines disponibles en este momento.
                </Typography>
            ) : (
                <Grid container spacing={4} alignItems="stretch">
                    {cines.map((cinema: CinemaResponseDto) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={cinema.id}>
                            <CineCard cinema={cinema} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
}