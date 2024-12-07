import React, { useState, useEffect } from 'react';
import "../styles/FashionCarousel.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const FashionCarousel = () => {
  const [products, setProducts] = useState([]);

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

  return (

<div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      > <p className="card-heading">Savings on Gifts</p>
        <div className="carousel-inner">
          {/* Carousel Item 1 */}
          <div className="carousel-item active">
            <div className="cards-wrapper d-flex flex-wrap justify-content-around">
              {/* Card 1 */}
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Card Title 1</h5>
                  <p className="card-text">Card 1</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Card Title 2</h5>
                  <p className="card-text">Card 2</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Card Title 3</h5>
                  <p className="card-text">Card 3</p>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Card Title 3</h5>
                  <p className="card-text">Card 3</p>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Card Title 3</h5>
                  <p className="card-text">Card 3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Item 2 */}
          <div className="carousel-item">
            <div className="cards-wrapper d-flex flex-wrap justify-content-around">
              {/* Card 4 */}
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Card Title 4</h5>
                  <p className="card-text">Card 4</p>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Card Title 3</h5>
                  <p className="card-text">Card 3</p>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Card Title 3</h5>
                  <p className="card-text">Card 3</p>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Card Title 3</h5>
                  <p className="card-text">Card 3</p>
                </div>
              </div>
              
              {/* Card 5 */}
              <div className="card">
                <img
                  src="https://via.placeholder.com/150"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Card Title 5</h5>
                  <p className="card-text">Card 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>







    // <div className="fashion-carousel-container">
    //   <div
    //     id="carouselExampleControls"
    //     className="carousel slide"
    //     data-bs-ride="carousel"
    //   >
    //     <p className="card-heading">Fashion Hub</p>
    //     <div className="carousel-inner">
    //       {/* Carousel Item 1 */}
    //       <div className="carousel-item active">
    //         <div className="cards-wrapper d-flex flex-wrap justify-content-around">
    //           {/* Map over the first 6 products */}
    //           {products.slice(0, 6).map((product) => (
    //             <div className="card" key={product.id}>
    //               <img
    //                 src={product.images[0]}
    //                 className="card-img-top"
    //                 alt={product.title}
    //               />
    //               <div className="card-body">
    //                 <h5 className="card-title">{product.title}</h5>
    //                 <p className="card-text">${product.price}</p>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>

    //       {/* Carousel Item 2 */}
    //       <div className="carousel-item">
    //         <div className="cards-wrapper d-flex flex-wrap justify-content-around">
    //           {/* Map over the next 6 products */}
    //           {products.slice(6, 12).map((product) => (
    //             <div className="card" key={product.id}>
    //               <img
    //                 src={product.images[0]}
    //                 className="card-img-top"
    //                 alt={product.title}
    //               />
    //               <div className="card-body">
    //                 <h5 className="card-title">{product.title}</h5>
    //                 <p className="card-text">${product.price}</p>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>

    //     {/* Carousel Controls */}
    //     <button
    //       className="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExampleControls"
    //       data-bs-slide="prev"
    //     >
    //       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       className="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExampleControls"
    //       data-bs-slide="next"
    //     >
    //       <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>
  );
}

export default FashionCarousel;
