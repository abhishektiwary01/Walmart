import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import { Header } from "../../components/Header";
import { useAuth } from "../authContext/index"
import "./styles/LoginPage.css"

function LoginPage() {
  const { userLoggedIn } = useAuth(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError("Failed to log in. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  if (userLoggedIn) {
    return <div className="text-center mt-10 text-lg">You are already logged in!</div>;
  }

  return (
    <div>
    <Header></Header>
    <div class="login-container">
      
    <div class="login-card">
      <h1 class="text-center mb-4">Login</h1>

      <p id="error" class="text-danger text-center mb-3 d-none"></p>

     
      <form onsubmit="handleLogin(event)">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            id="password"
            class="form-control"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          id="login-btn"
          class="btn btn-primary w-100"
          disabled="false"
        >
          Login
        </button>
      </form>


      <p class="text-center text-muted mt-3">
        Don’t have an account? 
        <a href="/signup" class="text-primary text-decoration-underline">
          Sign Up
        </a>
      </p>
    </div>
  </div></div>
  );
}

export default LoginPage;
