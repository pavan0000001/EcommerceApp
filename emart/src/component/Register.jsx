//create register page and link with navbar as register

import React from "react";
import { Link } from "react-router-dom";
import "./Register.css"; // Import the CSS file for styling

function Register() {
  return (
    <div className="register-container">
      <h1 className="register-heading">Register</h1>

      <form className="register-form">
        <div className="form-group">
          <label className="form-label" htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input type="email" id="email" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input type="password" id="password" className="form-input" />
        </div>

        <button type="submit" className="register-button">Register</button>
      </form>

      <p className="register-login-link">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default Register;



