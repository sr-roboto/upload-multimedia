import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { productRouter } from './routes/product.routes.js';
import path from 'node:path';

// inicializamos nuestra aplicación
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(path.resolve(), 'src', 'uploads')));

// rutas
app.use('/api/products', productRouter);

export { app };
