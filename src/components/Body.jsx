import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Body.css"; 
import MiddleBanner from "./MiddleBanner";
import FashionCarousel from "./FashionCarousel";
import { useNavigate } from "react-router-dom";




const Body = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]); // Store fetched products
  const [loading, setLoading] = useState(true); // Loading state
  const [cart, setCart] = useState([]); // Cart items


  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);
   

  const productClick =( )=> {
  navigate('/products')
  }
  // Add product to the cart
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.title} added to the cart!`);
  };

const handlefeedback =()=>{
  navigate('./feedback');
}
  return (
    <div>
      {/* Card Section Heading */}
      
      {/* Bootstrap Carousel */}
      <div
  id="carouselExampleControls"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <p className="card-heading">Shoe Corner</p>
  <div className="carousel-inner">
    {/* Carousel Item 1 */}
    <div className="carousel-item active">
      <div className="cards-wrapper d-flex flex-wrap justify-content-around">
        {/* Card 1 */}
        <div className="card">
          <img
            src="https://academy.scene7.com/is/image/academy/20950855?$pdp-gallery-ng$"
            className="card-img-top"
            alt="Placeholder"
          />
          <div className="card-body" role='button' onClick={productClick}>
            <h5 className="card-title">Nike Kids Gallai</h5>
            <p className="card-text">$43</p>
            <button className="btn btn-primary btn-sm custom-btn" onClick={addToCart}>Add to Cart</button>

          </div>
        </div>
        {/* Card 2 */}
        <div className="card" role='button' onClick={productClick}>
          <img
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d73d824c991b45c1a436ae940143b34b_9366/D_Rose_Son_of_Chi_2.0_Shoes_Black_GY6497_01_standard.jpg"
            className="card-img-top"
            alt="Placeholder"
          />
          <div className="card-body">
            <h5 className="card-title">Amiri LaMelo</h5>
            <p className="card-text">$56</p>
            <button className="btn btn-primary btn-sm custom-btn">Add to Cart</button>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card" role='button' onClick={productClick}>
          <img
            src="https://staticc.sportskeeda.com/editor/2023/02/59a86-16769779330644-1920.jpg"
            className="card-img-top"
            alt="Placeholder"
          />
          <div className="card-body">
            <h5 className="card-title">Nike Jordan Shoes</h5>
            <p className="card-text">$73</p>
            <button className="btn btn-primary btn-sm custom-btn">Add to Cart</button>
          </div>
        </div>

        <div className="card">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.DNzOxXd_vTwdV6wB9sh6uQHaHa&pid=Api&P=0&h=180"
            className="card-img-top"
            alt="Placeholder"
          />
          <div className="card-body">
            <h5 className="card-title">Nike Air</h5>
            <p className="card-text">$42</p>
            <button className="btn btn-primary btn-sm custom-btn">Add to Cart</button>
          </div>
        </div>

        <div className="card">
          <img
            src="https://cdn.fashdirect.com/webadmin/items/website/2581129/image_2_185547328315_2.jpg"
            className="card-img-top"
            alt="Placeholder"
          />
          <div className="card-body">
            <h5 className="card-title">Brook's Ghost 11</h5>
            <p className="card-text">$47</p>
            <button className="btn btn-primary btn-sm custom-btn">Add to Cart</button>
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
            src="https://images.asics.com/is/image/asics/1011B974_500_SR_RT_GLB?$sfcc-product$"
            className="card-img-top"
            alt="Placeholder"
          />
          <div className="card-body">
            <h5 className="card-title">Asics Gladiator</h5>
            <p className="card-text">$33</p>
            <button className="btn btn-primary btn-sm custom-btn">Add to Cart</button>
          </div>
        </div>

        <div className="card">
          <img
            src="https://tse4.mm.bing.net/th?id=OIF.cz7FTAR0EcWlvpjSnaNH6Q&pid=Api&P=0&h=180"
            className="card-img-top"
            alt="Placeholder"
          />
          <div className="card-body">
            <h5 className="card-title">FootJoy Vertel 12</h5>
            <p className="card-text">$55</p>
            <button className="btn btn-primary btn-sm custom-btn">Add to Cart</button>
          </div>
        </div>

        <div className="card">
          <img
            src="https://images.asics.com/is/image/asics/1011B440_002_SR_RT_GLB?$sfcc-product$"
            className="card-img-top"
            alt="Placeholder"
          />
          <div className="card-body">
            <h5 className="card-title">ASICS 14 Neo</h5>
            <p className="card-text">$29</p>
            <button className="btn btn-primary btn-sm custom-btn">Add to Cart</button>
          </div>
        </div>

        <div className="card">
          <img
            src="https://assets.brownsshoes.com/1320x1200/filters:no_upscale(1)/images/catalog2024/278792_2.jpg"
            className="card-img-top"
            alt="Placeholder"
          />
          <div className="card-body">
            <h5 className="card-title">Puma Speedcat 3</h5>
            <p className="card-text">$61</p>
            <button className="btn btn-primary btn-sm custom-btn">Add to Cart</button>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card">
          <img
            src="https://cdn.mantel.com/images/product.php?image_id=221039&w=760&h=570"
            className="card-img-top"
            alt="Placeholder"
          />
          <div className="card-body">
            <h5 className="card-title">NW Dunk Low</h5>
            <p className="card-text">$63</p>
            <button className="btn btn-primary btn-sm custom-btn">Add to Cart</button>
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


      <p className="card-heading">Sports accessories</p>
      
      {/* Bootstrap Carousel */}
      <div
        id="carouselExampleControl"
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
                  src="https://images-na.ssl-images-amazon.com/images/I/81rmOGQoDkL._SL1500_.jpg"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Nike SkateBaord</h5>
                  <p className="card-text">$43</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="card">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.h0et5xfnuvKrteGWEdOTdQHaHa&pid=Api&P=0&h=180"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Cosco FootBall</h5>
                  <p className="card-text">$22</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="card">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.XJWbmx-P834LDXrQ0bFqowHaD-&pid=Api&P=0&h=180"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">SkyNet Tennis Racket</h5>
                  <p className="card-text">$23</p>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.XTkQrL9-9VHTmmq66sLkEgHaEK&pid=Api&P=0&h=180"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Nike Shuttle Cock</h5>
                  <p className="card-text">$12</p>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.BxXZf5h2qgcBhY6_C0mkswHaEb&pid=Api&P=0&h=180"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">DumbBell 30kg</h5>
                  <p className="card-text">$13</p>
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
                  src="https://tse3.mm.bing.net/th?id=OIP.suBK0IrA_O-ZDh5eyPg4PgHaHL&pid=Api&P=0&h=180"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Skipping Rope</h5>
                  <p className="card-text">$7</p>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP._fFWXAuED440joQDyl30JAHaHa&pid=Api&P=0&h=180"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">HY_road Bowling Ball</h5>
                  <p className="card-text">$13</p>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.wKOeeHsly78zJ4u8PkDzlwHaHa&pid=Api&P=0&h=180"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Reta Swimming Glasses</h5>
                  <p className="card-text">$27</p>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.4Fdjgo9wFDWY03YQi4smRQHaGS&pid=Api&P=0&h=180"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">RDX Gym Belt</h5>
                  <p className="card-text">$14</p>
                </div>
              </div>
              
              {/* Card 5 */}
              <div className="card">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.3gBn3Yx1QElarhjVsqCyCQHaHa&pid=Api&P=0&h=180"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Gym Gloves</h5>
                  <p className="card-text">$15</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControl"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControl"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      <p className="card-heading"> Get it all right here </p>
{/* Category Cards */}
<div className="center-cards" role="button">



<div className="category">
  
  <div className="category-card">
    <img src="https://png.pngtree.com/png-clipart/20230118/original/pngtree-grocery-png-image_8919443.png" alt="Grocery" />
    <p>Grocery</p>
  </div>
  <div className="category-card">
    <img src="https://www.gudangrak.com/wp-content/uploads/2020/02/luxury-chair.jpg" alt="Chair" />
    <p>Home</p>
  </div>
  <div className="category-card">
    <img src="https://tse4.mm.bing.net/th?id=OIP.e0Ho01svGIN36yWS5B-9igHaHa&pid=Api&P=0&h=180" alt="Fashion" />
    <p>Fashion</p>
  </div>
  <div className="category-card">
    <img src="https://www.brilliantnews.com/wp-content/uploads/2016/02/laptop.jpg" alt="Electronics" />
    <p>Electronics</p>
  </div>
  <div className="category-card">
    <img src="https://i5.walmartimages.com/asr/b85edd1a-0009-49c8-8e36-0bf77141aabe.4e892737621d6fdd225559732a7af740.jpeg" alt="Toys" />
    <p>Toys</p>
  </div>
  <div className="category-card">
    <img src="https://cf.shopee.com.my/file/f51c6264182098cf62a72f0b7946afbf" alt="Personal Care" />
    <p>Personal Care</p>
  </div>
  
  <div className="category-card">
    <img src="https://tse3.mm.bing.net/th?id=OIP.4AdBNoGlIN6u8yFXojj1JQHaHN&pid=Api&P=0&h=180" alt="Baby" />
    <p>Baby</p>
  </div>
  <div className="category-card">
    <img src="https://www.pngarts.com/files/3/Lipstick-PNG-Picture.png" alt="Beauty" />
    <p>Beauty</p>
  </div>
  <div className="category-card">
    <img src="https://dgaddcosprod.blob.core.windows.net/b2c-experience-production/attachments/cjfuxg5tp0kzp0hqmlhv0088b-auto-tyres-pilot-sport-4-persp.full.png" alt="Tyre" />
    <p>Tyre</p>
  </div>
  <div className="category-card">
    <img src="https://i5.walmartimages.com/asr/0afa29e4-8e1f-414c-a458-022d00c7dec9.5c06cff2bb1e65a6649ee556d611d2e4.png" alt="Fitness" />
    <p>Fitness</p>
  </div>

 </div>
 </div>

 {/* Carousel Starts Here  */}

 <p className="card-heading">Beauty Arena</p>
 <div
        id="carouselExampleControl-a"
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
                  src="https://i5.walmartimages.com/asr/3e91ae89-0624-4ab4-9790-d722e4f297fd_1.55d10be6d50a77cb3254aee1c9892fa5.jpeg"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Olay Moisturizing Cream</h5>
                  <p className="card-text">$11</p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="card">
                <img
                  src="https://cdn11.bigcommerce.com/s-iw1z8eqogn/images/stencil/2560w/products/526/1764/LOreal_Paris_Revitalift_Night_Cream_Anti-Wrinkle_Firming_50_Ml__73267.1561527903.jpg?c=2"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">loreal revitalift</h5>
                  <p className="card-text">$22</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="card">
                <img
                  src="https://m.media-amazon.com/images/I/51Yu3lwEPLL._SL1000_.jpg"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Lakme Perfect Radiance</h5>
                  <p className="card-text">$27</p>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://www.kiehls.com/on/demandware.static/-/Sites-kiehls-master-catalog/default/dwdb74d768/nextgen/skin-care/face-moisturizers/ultra-facial/ultra-facial-cream-spf30/kiehls-face-cream-ultra-facial-cream-spf30-50ml-000-3605971220999-whip.png"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">KHIEL'S SPF 30</h5>
                  <p className="card-text">$23</p>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.AntWz6CvRvwUBzAxIYILbgHaHQ&pid=Api&P=0&h=180"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Neutragena Face Cream</h5>
                  <p className="card-text">$17</p>
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
                  src="https://tse2.mm.bing.net/th?id=OIP.cf-1UPQuGfc4S--R801JTwHaHa&pid=Api&P=0&h=180"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Elemis Anti-Wrinkle Cream</h5>
                  <p className="card-text">$19</p>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/51rcsQZc38L._SL1000_.jpg"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Vitamin C Cream</h5>
                  <p className="card-text">$15</p>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.zXE7IJX8AVb51keCrOYTUgHaHa&pid=Api&P=0&h=180"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Loreal Collagen</h5>
                  <p className="card-text">$23</p>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.19NzodP6j-CFsqUFpXhaRgHaHa&pid=Api&P=0&h=180"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">DP Hydrating Facial Cream</h5>
                  <p className="card-text">$24</p>
                </div>
              </div>
              
              {/* Card 5 */}
              <div className="card">
                <img
                  src="https://i5.walmartimages.com/asr/5b18ebe7-c8ec-4179-b9ef-820431d05ccc_1.d71d69b2ca0bc382a0540e7badf47a2c.jpeg"
                  className="card-img-top"
                  alt="Placeholder"
                />
                <div className="card-body">
                  <h5 className="card-title">Olay Retinol</h5>
                  <p className="card-text">$31</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControl-a"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControl-a"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

<p className="festive-heading">Festive Corner</p>
<MiddleBanner></MiddleBanner>
{/* Carousel Starts  */}

<FashionCarousel/>

 

      <div className="feedback">
        <div><p>We’d love to hear what you think!</p></div>
        <div><button className="feed-button" onClick={handlefeedback}>Give Feedback</button></div>
      </div>
    </div>
  );
};

export default Body;
