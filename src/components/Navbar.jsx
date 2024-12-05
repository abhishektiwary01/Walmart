import React from 'react';
import '../styles/Navbar.css'
import { CiGrid41 } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="d-flex">
          
          <div className="dropdown mr-3">
            <button className="btn-nav btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <IoGridOutline /> Department
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>

          <div className="dropdown">
            <button className="btn-nav btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <CiGrid41 /> Services
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
         |
        {/* Navbar brand and collapsible items */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav" >
          <ul className="navbar-nav" style={{ height: '40px' ,width: '1200px'}}>
            <li className="nav-item active">
              <a className="nav-link" href="#">Holiday Savings</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Grocery & Essentials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Christmas Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gift Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">ToyShop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">New and Trending</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">Fashion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">Electronics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">One Cash</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">Walmart+</a>
            </li>
           
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
