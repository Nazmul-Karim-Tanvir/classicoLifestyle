import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: false },
  category: { type: String, required: true },
  stock: { type: Number, required: true, default: 0 },
  rating: { type: Number, required: true, default: 0 },
});

const Product = mongoose.model('Product', productSchema);
export default Product;