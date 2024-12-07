import React from 'react';
import '../styles/HeroBanner.css';

const HeroBanner = () => {
  return (
    <div>
      <div className='hero-banner-container'>
       <div className='section-a'> 
       <div className='left-span'>
       <img src = "https://i2.wp.com/dogfood.guide/wp-content/uploads/2019/02/pedigree-banner-2.jpg"/>
       </div>  
       <div className='left-span'>
       <img src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1331,w_2000,x_0,y_625/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_auto/Sun-glasses_8691-1_cmyk_bhskwf.jpg"></img>
       </div>
       <div className='left-span'>
       <img src="src\assets\images\Music-offer.jpg"></img>
       </div>
       </div>
       <div className='section-b'> 
       
       <div className='middle-span'>
       <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/8b3340124597183.6107d0ce1bad7.jpg"/>
       </div>  
       <div className='middle-span'>
       <img src="https://thumbs.dreamstime.com/z/kids-toys-banner-colorful-icons-set-circle-kids-toys-banner-children-playroom-icons-set-circle-stacking-tumbler-163263104.jpg"/>
       </div>
       </div>
       <div className='section-c'> 
       
       <div className='right-span'>
       <img src="https://static.vecteezy.com/system/resources/previews/001/951/330/large_2x/special-offer-christmas-sale-up-to-50-off-beautiful-green-discount-banner-with-christmas-tree-branches-garlands-and-cookies-with-a-glass-of-milk-for-santa-claus-vector.jpg"/>
       </div>  
       <div className='right-span'>
       <img src="https://static.vecteezy.com/system/resources/previews/011/594/206/non_2x/flash-sale-banner-template-on-red-background-free-vector.jpg"/>
       </div>
       <div className='right-span'>
       <img src="src\assets\images\gift-sale.jpg"/>
       </div>
       </div>
      </div>
    </div>
  );
};

export default HeroBanner;
