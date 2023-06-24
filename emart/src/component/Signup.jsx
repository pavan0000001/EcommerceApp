import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const Signup = () => {
 



  return (
    <div className="signup-container">
      <h1 className="signup-heading">Sign Up</h1>
     
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string().required('Username is required'),
          email: Yup.string().email('Invalid email address').required('Email is required'),
          password: Yup.string().required('Password is required'),
        })}
       
      >
        <Form className="signup-form">
          <div className="form-group">
            <Field
              type="text"
              className="signup-input"
              name="username"
              placeholder="Username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-group">
            <Field
              type="email"
              className="signup-input"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>
          <div className="form-group">
            <Field
              type="password"
              className="signup-input"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </Form>
      </Formik>
      <p className="login-link">
        Already have an account?{' '}
        <NavLink to="/login" className="login-text">
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default Signup;