import * as React from 'react';
// Importamos las herramientas de enrutamiento
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import { Button, Typography } from '@mui/material';

// Importamos tu componente
import CinesList from './components/CinesList';

// Creamos un componente rápido para la página de inicio
function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Bienvenido a la App de Cines
      </Typography>
      
      {/* Esto funciona como una etiqueta <a> de HTML, pero para React */}
      <Link to="/cines" style={{ textDecoration: 'none' }}>
        <Button variant="contained" size="large">
          Ver la Cartelera de Cines
        </Button>
      </Link>
    </div>
  );
}

export default function App() {
  return (
    // Envolvemos toda la app en el Router [cite: 921]
    <Router>
      <Routes>
        {/* Si la URL es la raíz ("/"), cargamos el componente Home */}
        <Route path="/" element={<Home />} />
        
        {/* Si la URL es "/cines", cargamos tu CinesList  */}
        <Route path="/cines" element={<CinesList />} />
      </Routes>
    </Router>
  );
}