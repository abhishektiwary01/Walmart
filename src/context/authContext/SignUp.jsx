import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from "../../firebase/Firebase"; 
import './styles/SignUp.css';

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // To track loading state

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Validate that passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // Clear any previous errors
    setError('');

    // Set loading state to true
    setLoading(true);

    try {
      // Use Firebase Authentication to create a user
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);

      // Once the user is created, show a success message
      alert(`Welcome, ${name}! Your account has been created.`);
      
      // Redirect to login page or home page after sign-up
      window.location.href = '/login';  // Or you can use `useNavigate` for SPA navigation

    } catch (error) {
      setError(error.message); // Set the error state if something goes wrong
    } finally {
      setLoading(false); // Reset loading state after processing
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="text-center mb-4">Sign Up</h1>

        {/* Show error message if any */}
        {error && <p id="error" className="text-danger text-center mb-3">{error}</p>}

        <form onSubmit={handleSignup}>
          {/* Full Name Field */}
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

          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Confirm Password Field */}
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

          {/* Sign Up Button */}
          <button
            type="submit"
            id="signup-btn"
            className="btn btn-primary w-100"
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        {/* Login Redirect */}
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
