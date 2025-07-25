import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number },
  image: { type: String, required: false },
  category: { type: [String], required: true },   
  sizes: { type: [String], required: false },
  productId: { type: String, required: true, unique: true },  
  stock: { type: Number, required: true, default: 0 },
  rating: { type: Number, default: 0 },
  tags: { type: [String] },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;
