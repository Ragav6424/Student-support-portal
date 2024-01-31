import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '..//assets/css/login.css'


const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'user', // Default role is user
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    authentication: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
      authentication: '', 
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    } else if (formData.username.length < 4) {
      newErrors.username = 'Username must be at least 4 characters';
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const navigate = useNavigate();

  const allowedUsers = ['user1', 'user2', 'user3']; // Add the usernames you want to allow

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, you can proceed with login logic
      if (
        formData.role === 'user'){ 

       if( formData.username === 'user' &&
        formData.password === 'userpassword' ){

          console.log('Login successful as User:', formData);
        
          navigate('/Ucourse', { replace: true });
        }
        else {
          setErrors({
            ...errors,
            authentication: 'Invalid user credentials', // Set authentication error
          });
        }
      
      } else if (formData.role === 'admin') {
        // Admin-specific verification
        if (
          formData.username === 'admin' &&
          formData.password === 'adminpassword'
        ) {
          console.log('Login successful as Admin:', formData);
          
          navigate('/admin', { replace: true });
        } else {
          setErrors({
            ...errors,
            authentication: 'Invalid admin credentials', 
          });
        }
      } 
    } else {
      
      console.log('Form validation failed');
    }
  };

  return (
    <div className="signup-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <span className="error-message">{errors.username}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span className="error-message">{errors.password}</span>
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit">Login</button>
        {errors.authentication && (
          <div className="error-message">{errors.authentication}</div>
        )}
      </form>
        <p>
        Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
  );
};

export default LoginPage;