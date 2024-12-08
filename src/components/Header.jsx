import React, { useState, useEffect } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { LiaStoreAltSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '..//firebase/Firebase'; // Adjust based on your Firebase setup

export const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null); // Store user state

  // Firebase authentication listener to track user's login state
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set user data if logged in
      } else {
        setUser(null); // Set user to null if not logged in
      }
    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleSignIn = () => {
    if (user) {
      // Navigate to account page if the user is logged in
      navigate('/account');
    } else {
      // Navigate to login page if the user is not logged in
      navigate('/login');
    }
  };

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
      window.location.href = `https://www.walmart.com/search/?query=${query}`;
    }
  };
 const handlecartclick=()=>{
  navigate('./cart')
 }
  return (
    <div className='header-container'>
      {/* Logo */}
      <div className='logo-holder' role='button'>
        <img
          src='https://static.vecteezy.com/system/resources/previews/018/930/243/original/walmart-transparent-logo-free-png.png'
          onClick={handleHomeClick}
          alt="Walmart Logo"
        />
      </div>

      {/* Header Section */}
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
              <img className='ship-image' src='https://img.freepik.com/premium-vector/bus-import-icon-outline-vector-cargo-truck-car-ship-color-flat_96318-120313.jpg?w=826' alt="Shipping" />
              <p className='address-label'>Shipping</p>
            </span>
            <span className='address-image'>
              <img className='ship-image' src='https://cdn-icons-png.flaticon.com/512/1032/1032921.png' alt="Pickup" />
              <p className='address-label'>Pickup</p>
            </span>
            <span className='address-image'>
              <img className='ship-image' src='https://static.vecteezy.com/system/resources/previews/000/338/421/original/vector-shopping-bag-icon.jpg' alt="Delivery" />
              <p className='address-label'>Delivery</p>
            </span>
          </span>
          <span className='address-store'>
            <p className='address-detail'><CiLocationOn className='store-icon' /> Add an address for shipping </p>
            <button className='address-button'>Add Address</button>
          </span>
          <span className='address-store'>
            <p className='address-detail'><LiaStoreAltSolid className='store-icon' /> Nearest Store:</p>
            <p className='address-detail-small'>Alp Supercenter, Gerber Road, Ottawa, Canada, 96473</p>
          </span>
        </ul>
      </div>

      {/* Search Bar */}
      <div className="search-box">
        <input
          id="search-input"
          type="search"
          className="form-control"
          placeholder="Search everything at Walmart online and in store"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <button
          id="search-box button"
          type="button"
          className="btn-one"
          onClick={handleSearch}
        >
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.l49NVOjxGUb7NTFQiFGzhwHaHa&pid=Api&P=0&h=180"
            alt="Search"
            className="search-icon"
          />
        </button>
      </div>

      {/* Cart Section */}
      <div className='cart'>
        <span>
          <button className='cart-buttons'>
            Reorder
            <p className='cart-label'>My Items</p>
          </button>
        </span>

        <span>
          <button className='cart-buttons' onClick={handleSignIn}>
            {user ? 'Your' : 'Sign In'}
            <p className='cart-label'>{user ? 'Account' : 'Accounts'}</p>
          </button>
        </span>

        <span>
          <button className='cart-buttons' onClick={handlecartclick}>
            <IoCartOutline className='cart-icon' />
            <p>$ 0.00</p>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Header;
