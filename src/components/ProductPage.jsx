import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `http://localhost:5000/api/product/products/${productId}`; // API endpoint with product ID

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError("Failed to load product. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [API_URL]);

  const handleAddToCart = () => {
    if (product) {
      setCart((prevCart) => {
        const updatedCart = [...prevCart, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
      alert("Product added to cart!");
    }
  };

  if (loading) return <p className="text-center mt-5">Loading product...</p>;
  if (error) return <p className="text-danger text-center mt-5">{error}</p>;

  return (
    <div className="container mt-5">
      <h1 className="my-4 text-center">Product Details</h1>
      {product ? (
        <div className="card shadow-lg mx-auto" style={{ maxWidth: "600px" }}>
          <img
            src={product.images && product.images.length > 0 ? product.images[0] : "https://via.placeholder.com/600x400"}
            alt={product.title || "Product Image"}
            className="card-img-top"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title || "No Title Available"}</h5>
            <p className="card-text">{product.description || "No description provided."}</p>
            <p className="card-text">
              <strong>Price:</strong> ${product.price ? product.price.toFixed(2) : "N/A"}
            </p>
            <button className="btn btn-primary w-100" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-muted">No product data available.</p>
      )}
    </div>
  );
};

export default ProductPage;
