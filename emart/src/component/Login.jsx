import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={Yup.object({
          username: Yup.string().required('Username is required'),
          password: Yup.string().required('Password is required'),
        })}
        onSubmit={(values) => {
          // Handle form submission
          console.log(values);
        }}
      >
        <Form className="login-form">
          <div className="form-group">
            <Field
              type="text"
              className="login-input"
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
              type="password"
              className="login-input"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </Form>
      </Formik>
      <p className="signup-link">
        Don't have an account?{' '}
        <NavLink to="/signup" className="signup-text">
          Sign Up
        </NavLink>
      </p>
    </div>
  );
};

export default Login;