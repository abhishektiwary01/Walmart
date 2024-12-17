const Cart = require('../models/cartModel');

exports.addProductToCart = async (userId, productId, quantity, price) => {
  // Find the cart for the user
  let cart = await Cart.findOne({ userId });

  if (!cart) {
    // Create a new cart if it doesn't exist
    cart = new Cart({ userId, items: [] });
  }

  // Check if the product already exists in the cart
  const productIndex = cart.items.findIndex(item => item.productId.toString() === productId);

  if (productIndex > -1) {
    // Update quantity and price if the product exists
    cart.items[productIndex].quantity += quantity;
    cart.items[productIndex].price = price;
  } else {
    // Add the product to the cart
    cart.items.push({ productId, quantity, price });
  }

  // Save the cart and return
  await cart.save();
  return cart;
};

exports.removeProductFromCart = async (userId, productId) => {
  const cart = await Cart.findOne({ userId });

  if (!cart) {
    throw new Error('Cart not found');
  }

  // Filter out the product to be removed
  cart.items = cart.items.filter(item => item.productId.toString() !== productId);

  await cart.save();
  return cart;
};

exports.getCartDetails = async (userId) => {
  const cart = await Cart.findOne({ userId }).populate('items.productId');
  if (!cart) {
    throw new Error('Cart not found');
  }
  return cart;
};
