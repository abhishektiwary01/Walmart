import Product from "../models/product.model.js";

// Create a new product
const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get products by title
const getProductByTitle = async (req, res) => {
  try {
    // Retrieve the title query parameter from the request
    const title = req.query.title;

    if (!title) {
      return res.status(400).json({ message: 'Title query parameter is required' });
    }

    // Find products with a title matching the query parameter (case-insensitive)
    const products = await Product.find({ 
      title: { $regex: title, $options: 'i' } // 'i' makes it case-insensitive
    });

    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found with the given title' });
    }

    // Return the matching products
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update product details
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createProduct,
  getProducts,
  getProductByTitle,
  updateProduct,
  deleteProduct
};
