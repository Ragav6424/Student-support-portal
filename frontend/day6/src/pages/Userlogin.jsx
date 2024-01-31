import React, { useState } from "react";
import "../assets/css/userlogin.css"; // Adjust the path based on your project structure
import { Navigate } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate();
  const handleLogin = () => {
    // Reset previous errors
    setError("");

    // Basic form validation
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    // Additional constraints
    if (username.length < 3) {
      setError("Username must be at least 3 characters.");
      return;
    }

    // Password constraint: At least 6 characters
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // You can add more specific constraints for username and password as needed

    // Add your authentication logic here
    console.log("Logging in with", username, password);
    navigate("/userpage")
  };

  return (
    <div className="user-login-container">
      <div className="user-login-form">
        <h2>User Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="error-message">{error}</p>

          <button type="button" onClick={handleLogin}>
          Login
          </button>
          <p><a href="/signup">Sign up here!</a></p>
          </form>
      </div>
    </div>
  );
}

export default UserLogin;
