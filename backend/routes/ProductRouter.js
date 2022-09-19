import express from 'express';
import Product from '../model/ProductModel.js';

const ProductRoute = express.Router();

ProductRoute.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

export default ProductRoute;
