import { z } from 'zod';

const createProductSchema = z.object({
  name: z.string().min(3).max(255),
  description: z.string().min(3).max(255),
  price: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val > 0, {
      message: 'El precio debe ser un número positivo',
    }),
  productImage: z.string(),
});

export { createProductSchema };
