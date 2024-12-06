import React, { useState } from 'react';
import './styles/SignUp.css';

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSignup = (event) => {
    event.preventDefault(); // Prevent form submission
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    setError(''); // Clear error
    alert(`Welcome, ${name}! Your account has been created.`);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="text-center mb-4">Sign Up</h1>
        {error && <p id="error" className="text-danger text-center mb-3">{error}</p>}

        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            id="signup-btn"
            className="btn btn-primary w-100"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-muted mt-3">
          Already have an account?{' '}
          <a href="/login" className="text-primary text-decoration-underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};
