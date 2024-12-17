import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Validate fields
    if (!name || !email || !password || !confirmPassword) {
      toast.error('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    setLoading(true);
    try {
      // Send signup request to backend
      const response = await axios.post('http://localhost:5000/api/user/register', {
        name,
        email,
        password,
      });

      // Show success toast and navigate to login page
      toast.success('Account created successfully! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Something went wrong. Please try again.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="w-100 d-flex justify-content-center align-items-center mt-5">
          <div className="card p-4 w-100" style={{ maxWidth: '400px' }}>
            <h2 className="text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSignup}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-danger w-100"
                disabled={loading}
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
              </button>
              <p className="text-center mt-3">
                Already have an account?{' '}
                <span
                  onClick={() => navigate('/login')}
                  className="text-danger cursor-pointer"
                >
                  Login
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

export default SignUp;
