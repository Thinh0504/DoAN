import express from 'express';
import Product from '../model/ProductModel.js';
import Users from '../model/UserModel.js';
import data from '../data.js';

const InitRouter = express.Router();

InitRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createProduct = await Product.insertMany(data.products);
  await Users.remove({});
  const createUser = await Users.insertMany(data.user);
  res.send({ createUser, createProduct });
});

export default InitRouter;
