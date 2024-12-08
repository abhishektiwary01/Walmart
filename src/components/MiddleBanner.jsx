import React from "react";
import "../styles/MiddleBanner.css";

const MiddleBanner = () => {
  return (
    <div className="middle-banner-container">
      
      {/* First Banner */}
      <div className="banner">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/6f704160193483.5a4132925d935.gif"
          alt="Honey Infused Perfume"
          className="banner-image"
        />
      </div>

      {/* Second Banner */}
      <div className="banner">
        <img
          src="https://thumbs.dreamstime.com/z/christmas-tree-banner-background-xmas-design-horizontal-poster-greeting-cards-headers-website-260883025.jpg"
          alt="Christmas Tree"
          className="banner-image"
        />
      </div>
    </div>
  );
};

export default MiddleBanner;
