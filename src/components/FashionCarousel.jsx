import React, { useState, useEffect } from 'react';
import "../styles/FashionCarousel.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from 'react-router-dom';


const FashionCarousel = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  // Fetch products data from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data.slice(0, 12)); // Limit to the first 12 products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // const handleFashionclick =()=>{
  //   navigate('./products')
  // }

  return (
    <div className="fashion-carousel-container" role='button' >
      <div
        id="carouselFashion"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <p className="festive-heading">Fashion Hub</p>
        <div className="carousel-inner">
          {/* Carousel Item 1 */}
          <div className="carousel-item active">
            <div className="cards-wrapper d-flex flex-wrap justify-content-around">
              {/* Map over the first 6 products */}
              {products.slice(0, 6).map((product) => (
                <div className="card" key={product.id}>
                  <img
                    src={product.images[0]}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Item 2 */}
          <div className="carousel-item">
            <div className="cards-wrapper d-flex flex-wrap justify-content-around">
              {/* Map over the next 6 products */}
              {products.slice(6, 12).map((product) => (
                <div className="card" key={product.id}>
                  <img
                    src={product.images[0]}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselFashion"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselFashion"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default FashionCarousel;
