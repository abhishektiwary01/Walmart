import express from 'express';
import {
  createProduct,
  getProducts,
  getProductByTitle, 
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';

const productRouter = express.Router();

// Route to create a new product
productRouter.post('/addproduct', createProduct);

// Route to fetch all products
productRouter.get('/products', getProducts);

productRouter.get('/products/title', getProductByTitle); 

// Route to update an existing product
productRouter.put('/updateproduct/:id', updateProduct);

// Route to delete a product by ID
productRouter.delete('/deleteproduct/:id', deleteProduct);

export default productRouter; // Export the router
