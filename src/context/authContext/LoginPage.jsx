import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doSignInwithEmailAndPassword } from '../../firebase/Auth';
import Header from '../../components/Header';

const LoginPage = () => {
  // State variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Hook to programmatically navigate to different routes
  const navigate = useNavigate();

  // Handler function for the "Your Account" link click
  const handleAccountClick = () => {
    navigate('/account'); // Navigate to the account/profile page
  };

  // Handler function for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Basic validation to check if email and password are provided
    if (!email || !password) {
      toast.error('Both email and password are required.');
      return;
    }

    try {
      // Attempt to sign in with the provided email and password using Firebase Authentication
      await doSignInwithEmailAndPassword(email, password); // Using the helper function
      console.log('Login successful');
      toast.success('Login successful! Redirecting to home...');
      setTimeout(() => {
        navigate('/'); // Redirect to the home page after successful login
      }, 2000); // Delay the redirection to show the success message
    } catch (error) {
      // Display error message if login fails
      toast.error('Invalid email or password.');
    }
  };

  return (
 <div><Header></Header>
    <div className="container">
      
      {/* Login Form Container */}
      <div className="w-100 d-flex justify-content-center align-items-center mt-5">
        <div className="card p-4 w-100" style={{ maxWidth: '400px' }}>
          <h2 className="text-center mb-4">Login</h2>
          
          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                required
              />
            </div>
            
            {/* Password Input Field */}
            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                required
              />
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-danger w-100"
            >
              Login
            </button>
            
            {/* Account Prompt */}
            <p className="text-center mt-3">
              Don't have an account? 
              <span
                onClick={handleAccountClick}
                className="text-danger cursor-pointer"
              >
                SignUp
              </span>
            </p>
          </form>
        </div>
      </div>

      {/* Toast Container for displaying notifications */}
      <ToastContainer />
    </div></div>
  );
};

export default LoginPage;
