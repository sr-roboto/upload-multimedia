import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// inicializamos nuestra aplicación
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

export { app };
