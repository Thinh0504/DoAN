import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    slug: { type: String, require: true, unique: true },
    image: { type: String, require: true },
    brand: { type: String, require: true },
    category: { type: String, require: true },
    price: { type: Number, require: true },
    description: { type: String, require: true },
    countInStock: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
