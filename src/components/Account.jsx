import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
// import { signOut } from 'firebase/auth'; // Firebase sign-out method
// import { auth } from '../firebase/Firebase'; // Assuming you have Firebase initialized in this file
import Header from './Header';
import '../styles/Accounts.css';

const Account = () => {
  const navigate = useNavigate(); // useNavigate hook

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Firebase sign-out
      navigate('/login'); // Redirect to login page after sign-out
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className='account-container'>
        <p className='centered-text'>Add Product to your cart....</p>
        <button className='signout' onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Account;
