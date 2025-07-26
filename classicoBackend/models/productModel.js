import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number },
  image: { type: String, required: true },
  category: { type: [String], required: true },
  sizes: { type: [String], default: [] },
  colour: { type: [String], default: [] },
  productId: { type: Number, required: true, unique: true },
  stock: { type: Number, required: true, default: 0 },
  rating: { type: Number, default: 0 },
  tags: { type: [String], default: [] },
}, { timestamps: true });

const productModel = mongoose.models.product || mongoose.model('Product', productSchema);
export default productModel;