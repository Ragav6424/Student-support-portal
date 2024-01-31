import React, { useState } from "react";
import "../assets/css/stafflogin.css"; // Adjust the path based on your project structure

function StaffLogin() {
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

    // Password constraint: At least 8 characters, including one uppercase letter, one lowercase letter, and one number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters and include one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }

    // Add your authentication logic here
    console.log("Logging in with", username, password);
  };

  return (
    <div className="staff-login-container">
      <div className="staff-login-form">
        <h2>Staff Login</h2>
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
        </form>
      </div>
    </div>
  );
}

export default StaffLogin;
