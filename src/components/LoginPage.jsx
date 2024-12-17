import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios'; // Import axios
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(false);  // Track if the user is logged in
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(true); // Set user to true if a token exists in localStorage
    }
  }, []);

  const handleAccountClick = () => {
    navigate('/signup');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Both email and password are required.');
      return;
    }

    try {
      // Send login request to backend
      const response = await axios.post('http://localhost:5000/api/user/login', {
        email,
        password,
      });

      // Handle successful login
      toast.success('Login successful! Redirecting to home...');
      setUser(true);
      localStorage.setItem('token', response.data.token); // Store token in localStorage
      setTimeout(() => {
        navigate('/'); // Redirect to home page
      }, 2000);
    } catch (error) {
      toast.error('Invalid email or password.');
    }
  };

  return (
    <div>
      <Header user={user} /> {/* Pass the user state to Header */}
      <div className="container">
        <div className="w-100 d-flex justify-content-center align-items-center mt-5">
          <div className="card p-4 w-100" style={{ maxWidth: '400px' }}>
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
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
              <button type="submit" className="btn btn-danger w-100">Login</button>
              <p className="text-center mt-3">
                Don't have an account? 
                <span onClick={handleAccountClick} className="text-danger cursor-pointer">
                  SignUp
                </span>
              </p>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage ;
