import { Product } from '../database/db.js';

const createProductService = async (productData) => {
  try {
    const { name, description, price, productImage } = productData;

    const newProduct = {
      id: Product.length + 1,
      name,
      description,
      price,
      imageUrl: 'http://localhost:8080/' + productImage,
    };

    Product.push(newProduct);

    return newProduct;
  } catch (error) {
    console.log(error);
    throw new Error('Error al crear el producto');
  }
};

export { createProductService };
