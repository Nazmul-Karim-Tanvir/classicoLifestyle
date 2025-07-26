import productModel from '../models/productModel.js';
import fs from 'fs';


// add product item
const addProduct = async (req, res) => {
  try {
    const image_filename = req.file?.filename || '';
    // Safely parse array fields (in case sent as strings)
    const parseArray = (field) => {
      if (!field) return [];
      return Array.isArray(field) ? field : JSON.parse(field);
    };

    const product = new productModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
      image: image_filename,
      category: parseArray(req.body.category),
      sizes: parseArray(req.body.sizes),
      colour: parseArray(req.body.colour),
      productId: req.body.productId,
      stock: req.body.stock || 0,
      rating: req.body.rating || 0,
      tags: parseArray(req.body.tags),
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: 'Product added successfully',
      product,
    });

  } catch (error) {
    console.error('Error adding product:', error.message);
    res.status(500).json({
      success: false,
      message: 'Error while adding product',
    });
  }
};

// all product list
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({
      success: true,
      data: products
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: 'Error while fetching products',
    });
  }
};

// remove product
const removeProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.id);
    fs.unlink(`uploads/${product.image}`, () => { });
    await productModel.findByIdAndDelete(req.body.id);
    res.json({
      success: true,
      message: 'Product removed successfully',
    });
  } catch (error) {
    console.error('Error removing product:', error.message);
    res.status(500).json({
      success: false,
      message: 'Error while removing product',
    });
  }
}

export { addProduct, listProduct, removeProduct };