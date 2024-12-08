import React from 'react';
import '../styles/HeroBanner.css';
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
  const navigate = useNavigate();

  // Function to handle navigation for each button (span)
  const handleleftspan = () => {
    window.location.href = "https://www.walmart.com/shop/gift-finder?facet=gf_occasion%3AChristmas%7C%7Cgf_interests%3APets&athAsset=eyJhdGhjcGlkIjoiNGY4MTQxYjYtMzA1OC00ZDYxLTlkM2EtYjkwMGZkYjFkNjk1In0=&athena=true";
  };

  const handlerightspan = () => {
    window.location.href = "https://www.walmart.com/shop/savings";
  };

  const handlemiddlespan = () => {
    window.location.href = "https://www.walmart.com/shop/gift-finder?facet=gf_occasion%3AChristmas%7C%7Cgf_persona%3AHost%2FHostess&athAsset=eyJhdGhjcGlkIjoiMWY0NDY2NWYtZTIwMS00ZjgyLTk1MmMtMGY2NjYzMzRmOTgzIn0=&athena=true";
  };

  return (
    <div>
      <div className='hero-banner-container'>
        <div className='section-a'>
          <div className='left-span'>
            <img
              src="https://i2.wp.com/dogfood.guide/wp-content/uploads/2019/02/pedigree-banner-2.jpg"
              role='button'
              onClick={handleleftspan}
              alt="Pedigree banner"
            />
          </div>
          <div className='left-span'>
            <img
              src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1331,w_2000,x_0,y_625/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_auto/Sun-glasses_8691-1_cmyk_bhskwf.jpg"
              alt="Sunglasses Banner"
            />
          </div>
          <div className='left-span'>
            <img
              src="https://cdn.dribbble.com/userupload/7524016/file/original-3a45f4881c719851f1b639e55de64df3.jpg?resize=1000x1000"
              role='button'
              onClick={handlemiddlespan}
              alt="Gift Finder Banner"
            />
          </div>
        </div>

        <div className='section-b'>
          <div className='middle-span'>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/8b3340124597183.6107d0ce1bad7.jpg"
              role='button'
              onClick={handlerightspan}
              alt="Christmas Sale Banner"
            />
          </div>
          <div className='middle-span'>
            <img
              src="https://media.istockphoto.com/id/1267056880/vector/banner-and-cute-kids-toys.jpg?s=1024x1024&w=is&k=20&c=2LcILxQ0n-Qnhoy82dO1qumBbH0Pd-xo8dClnvVvs1k="
              role='button'
              onClick={handlerightspan}
              alt="Toys Sale Banner"
            />
          </div>
        </div>

        <div className='section-c'>
          <div className='right-span'>
            <img
              src="https://static.vecteezy.com/system/resources/previews/001/951/330/large_2x/special-offer-christmas-sale-up-to-50-off-beautiful-green-discount-banner-with-christmas-tree-branches-garlands-and-cookies-with-a-glass-of-milk-for-santa-claus-vector.jpg"
              role='button'
              onClick={handlerightspan}
              alt="Special Offer Christmas Sale"
            />
          </div>
          <div className='right-span'>
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/594/206/non_2x/flash-sale-banner-template-on-red-background-free-vector.jpg"
              role='button'
              onClick={handlemiddlespan}
              alt="Flash Sale Banner"
            />
          </div>
          <div className='right-span'>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.aLuCfDeXSJ6jDzkjGAttawHaEm&pid=Api&P=0&h=180"
              role='button'
              onClick={handlemiddlespan}
              alt="Holiday Offer Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
