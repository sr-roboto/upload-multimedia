import { Router } from 'express';
import { uploadImage } from '../middlewares/upload.middleware.js';
import { createProductController } from '../controllers/product.controller.js';

const productRouter = Router();

productRouter.post('/', uploadImage('productImage'), createProductController);

export { productRouter };
