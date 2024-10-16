import { Router } from 'express';
import { uploadImage } from '../middlewares/upload.middleware.js';
import { createProductController } from '../controllers/product.controller.js';
import { applyValidations } from '../middlewares/validation.middleware.js';
import { createProductSchema } from '../validations/product.schema.js';

const productRouter = Router();

productRouter.post(
  '/',
  uploadImage('productImage'),
  applyValidations(createProductSchema),
  createProductController
);

export { productRouter };
