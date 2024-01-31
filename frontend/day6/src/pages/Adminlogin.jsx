import React, { useState } from "react";
import "../assets/css/adminlogin.css"; // Adjust the path based on your project structure

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Reset previous errors
    setError("");

    // Basic form validation
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    // Additional constraints
    if (username.length < 5) {
      setError("Username must be at least 5 characters.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    // You can add more specific constraints here, e.g., regex for valid email format

    // Add your authentication logic here
    console.log("Logging in with", username, password);
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-form">
        <h2>Admin Login</h2>
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
            <a href="/adminpanel">Login</a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
