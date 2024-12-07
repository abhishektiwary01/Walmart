import React, { useState, useEffect } from 'react';
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

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
      // For example, redirect to a search results page or call an API.
      window.location.href = `https://www.walmart.com/search/?query=${query}`;
    }
  };
  

  return (
    <div className='header-container'>
     {/* logo  */}
    
    
     <div className='logo-holder' role='button'>
     <img src ='https://static.vecteezy.com/system/resources/previews/018/930/243/original/walmart-transparent-logo-free-png.png' onClick={handlehomeclick}/>
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
               src="https://img.freepik.com/premium-vector/bus-import-icon-outline-vector-cargo-truck-car-ship-color-flat_96318-120313.jpg?w=826" 
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
                <img className = 'ship-image'src ='https://img.freepik.com/premium-vector/bus-import-icon-outline-vector-cargo-truck-car-ship-color-flat_96318-120313.jpg?w=826'/>
                <p className='address-label'>Shipping</p>
                </span>
                <span className='address-image'>
                <img className = 'ship-image' src ='https://cdn-icons-png.flaticon.com/512/1032/1032921.png'/> 
                <p className='address-label'> Pickup</p>
                </span>
                <span className='address-image'>
                <img className = 'ship-image' src = 'https://static.vecteezy.com/system/resources/previews/000/338/421/original/vector-shopping-bag-icon.jpg'/>
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
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state
        onKeyPress={(e) => { // Add onKeyPress to handle "Enter" key
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button
        id="search-box button"
        type="button"
        className="btn-one"
        onClick={handleSearch} // Call search function on click
      >
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
