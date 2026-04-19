import axios from 'axios';

// Creamos una instancia de axios con la URL base de tu servidor
export const api = axios.create({
    baseURL: 'http://localhost:3000/api' // Ajusta esto si tu backend usa otro puerto/ruta
});

// Interceptor para inyectar el token en cada petición
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
});