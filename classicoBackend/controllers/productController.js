import Product from '../models/productModel.js';
import fs from 'fs';

export const addProduct = async (req, res) => {
  try {
    const image_filename = req.file?.filename || '';

    // Safely parse array fields (in case sent as strings)
    const parseArray = (field) => {
      if (!field) return [];
      return Array.isArray(field) ? field : JSON.parse(field);
    };

    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
      image: image_filename,
      category: parseArray(req.body.category),
      sizes: parseArray(req.body.sizes),
      colour: parseArray(req.body.colour), // ✅ Added this
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