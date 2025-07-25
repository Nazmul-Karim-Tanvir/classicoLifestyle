import Product from '../models/productModel.js';
import fs from 'fs';

// Add product controller
export const addProduct = async (req, res) => {
  try {
    // Handle image
    const image_filename = req.file?.filename || '';

    // Create new product
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
      image: image_filename,
      category: req.body.category,
      sizes: req.body.sizes,
      productId: req.body.productId,
      stock: req.body.stock,
      rating: req.body.rating,
      tags: req.body.tags,
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: 'Product added successfully',
      product,
    });

  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({
      success: false,
      message: 'Error while adding product',
    });
  }
};