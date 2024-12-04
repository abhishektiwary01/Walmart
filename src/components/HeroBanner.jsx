import React from 'react'
import '../styles/HeroBanner.css'
const HeroBanner = () => {
  return (
    <div>
    <div className='hero-container' role='button'>
     <span className='hero-span-small'> 
        <span className='card-span-small'>
        <img className='hero-img' src='src\assets\images\pedigree-banner.webp'></img>
        </span>
        
        <span className='card-span-large'>
        <img className='hero-img' src='src\assets\images\Camera-banner.webp'></img>
        
        </span>
        
        <span className='card-span-small'>
        <img className='hero-img' src='src\assets\images\styles-banner.webp'></img>
        
        </span>

     </span>
        
     git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/abhishektiwary01/Walmart.git
git push -u origin main
     <span className='hero-span'>
        <span className='hero-span-card' style={{ height: '400px'}}>
            
        </span>
        
        <span className='hero-span-card' style={{ height: '300px'}}>
            
        </span>
        
        <span className='hero-span-card'style={{ height: '200px'}}>
            
        </span>

     </span>
       
     <span className='hero-span-small'>
        <span className='card-span-small'>
            
        </span>
        <span className='card-span-small'>
            
        </span>
        <span className='card-span-large'>
            
        </span>
      </span>
      </div>
    {/* Discount Banner  */}
    <div className='discount-banner'>
     Sign in for personalized recommendation and more <button>Sign in or Create Accout</button>
    </div>
    

    </div>
  )
}

export default HeroBanner