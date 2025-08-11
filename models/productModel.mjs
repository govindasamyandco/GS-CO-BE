import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  stock: { type: String },
  price: { type: Number},
  image:{type: String}
});

export const Product = mongoose.model("Product", productSchema);
