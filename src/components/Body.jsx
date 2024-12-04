import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Body.css"; // Include your custom styles here

const Body = () => {
  return (
    <div>
      {/* Card Section Heading */}
      <p className="card-heading">Savings on Gifts</p>

      {/* Bootstrap Carousel */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
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



      <p className="card-heading">Savings on Gifts</p>

      {/* Bootstrap Carousel */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
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





    </div>
  );
};

export default Body;
