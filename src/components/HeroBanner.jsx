import React from 'react';
import '../styles/HeroBanner.css';

const HeroBanner = () => {
  return (
    <div>
      <div className='hero-banner-container'>
       <div className='section-a'> 
       <div className='left-span'>
       <img src = "src\assets\images\pedigree-banner.webp"/>
       </div>  
       <div className='left-span'>
       <img src="src\assets\images\Sunglassa.gif"></img>
       </div>
       <div className='left-span'>
       <img src="src\assets\images\Music-offer.jpg"></img>
       </div>
       </div>
       <div className='section-b'> 
       
       <div className='middle-span'>
       <img src="src\assets\images\shoes-women.jpg"/>
       </div>  
       <div className='middle-span'>
       <img src="src\assets\images\kids-toys.jpg"/>
       </div>
       </div>
       <div className='section-c'> 
       
       <div className='right-span'>
       <img src="src\assets\images\christmas-offer.jpg"/>
       </div>  
       <div className='right-span'>
       <img src="src\assets\images\flash-deals.jpg"/>
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
