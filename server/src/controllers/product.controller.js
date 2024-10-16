import { createProductService } from '../services/product.service.js';

const createProductController = async (req, res) => {
  try {
    const productData = req.body;

    const newProduct = await createProductService(productData);
    console.log(newProduct);
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ msg: 'Error interno del servidor' });
    console.log(error);
  }
};

export { createProductController };
