import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import '../styles/Header.css'
import { useNavigate } from 'react-router-dom';
import { LiaStoreAltSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";

export const Header = () => {

  const navigate = useNavigate();

  const handlehomeclick = () => {
    // Navigate to a different route
    navigate('/');
  };

  const handlesignIn = () =>{
    navigate('/login')
  }

  return (
    <div className='header-container'>
     {/* logo  */}
    
    
     <div className='logo-holder' role='button'>
     <img src ='https://s3.amazonaws.com/www-inside-design/uploads/2018/04/walmart-square.jpg' onClick={handlehomeclick}/>
     </div>     
     
     {/* Header Section  */}
     
     {/* address-bar */}
         <div className="dropdown">
         <button 
             className="btn btn-primary dropdown-toggle custom-button" 
             type="button" 
             data-bs-toggle="dropdown" 
             aria-expanded="false"
>
            <img 
               className="store-image" 
               src="src\assets\images\shipping.jpg" 
               alt="Store" 
             />
             <div className="button-content">
               <p>How do you want your items?</p>
               <p><LiaStoreAltSolid className='store-icon' />Alp Supercenter</p>
             </div>
         </button>

           <ul className="dropdown-menu">
            <span className='address-image-span'>
                <span className='address-image'> 
                <img className = 'ship-image'src ='.\src\assets\images\shipping.jpg'/>
                <p className='address-label'>Shipping</p>
                </span>
                <span className='address-image'>
                <img className = 'ship-image' src ='src\assets\images\car-pickup.jpg'/> 
                <p className='address-label'> Pickup</p>
                </span>
                <span className='address-image'>
                <img className = 'ship-image' src = 'src\assets\images\shopping-bag-icon.jpg'/>
                <p  className='address-label'> Delivery</p>
                </span>
            </span>
            <span className='address-store'>
              <p className='address-detail'> <CiLocationOn  className='store-icon' /> Add an address for shipping </p>
              <button className='address-button'> Add Address</button>
            </span>
            <span className='address-store'>
              <p className='address-detail'> <LiaStoreAltSolid  className='store-icon'/> Nearest Store:</p>
              <p className='address-detail-small'>Alp Supercenter,Gerber Raod,Ottawa,Canada,96473</p>
            </span>
            </ul>
  </div>
    {/* SearchBar  */}

    <div className="search-box">
  <input 
    id="search-input" 
    type="search" 
    className="form-control" 
    placeholder="Search everything at Walmart online and in store"
  />
  <button id="search-box button" type="button" className="btn-one">
  <img 
      src="https://tse2.mm.bing.net/th?id=OIP.l49NVOjxGUb7NTFQiFGzhwHaHa&pid=Api&P=0&h=180" 
      alt="Search" 
      className="search-icon"
    />
  </button>
</div>

    {/* Cart Section  */}

    <div className='cart'>
        <span>
            
            <button className='cart-buttons'>   
            Reorder 
            <p className='cart-label'>My Items</p></button>
        </span>
        
        <span>
       
            <button className='cart-buttons' onClick={handlesignIn }>
            Sign In   
            <p className='cart-label'>
            Accounts</p>
            </button>
        </span>
        
        <span>
            <button className='cart-buttons'>
              <IoCartOutline className='cart-icon'></IoCartOutline>
                <p>$ 1.00</p>
            </button>
        </span>
    </div>
    
    {/* Navbar */}

    
    </div>
 
  )
}
