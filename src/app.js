import express from 'express';
import cors from 'cors'
import UsuariosRoutes from './routes/usuarios.routes.js'


const app =express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(UsuariosRoutes);


export default app;