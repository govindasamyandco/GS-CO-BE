import { Product } from "../models/productModel.mjs";

//All Product
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addProduct = async (req, res) => {
  const { name, category, stock, price, image } = req.body;

  if (!name ) {
    return res.status(400).json({ message: 'Name are required' });
  }

  try {
    const newProduct = new Product({
      name,
      category,
      stock,
      price,
      image,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add product' });
  }
};

// DELETE a product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete product' });
  }
};

// UPDATE a product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, category, stock, price, image } = req.body;

  try {
    const updated = await Product.findByIdAndUpdate(
      id,
      { name, category, stock, price, image },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product updated successfully', product: updated });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update product' });
  }
};
