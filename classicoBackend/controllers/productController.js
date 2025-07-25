import Product from '../models/productModel.js';

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  const saved = await product.save();
  res.status(201).json(saved);
};
