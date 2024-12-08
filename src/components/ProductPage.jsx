import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ProductPage = () => {
  const [product, setProduct] = useState(null); // State for a single product
  const [cart, setCart] = useState([]); // State for the cart

  // Fetch a single product from the API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products/1'); // Fetch product with ID 1
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched product data:", data); // Debugging log
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, []);

  // Add product to the cart
  const handleAddToCart = () => {
    if (product) {
      setCart((prevCart) => [...prevCart, product]);
      alert('Product added to cart!');
      console.log("Cart:", cart); // Debugging log
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Product Details</h1>
      {product ? (
        <div className="card">
          <img
            src={product.images[0]} 
            alt={product.title} 
            className="card-img-top"
            style={{ height: '300px', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text"><strong>Price:</strong> ${product.price}</p>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
};

export default ProductPage;
