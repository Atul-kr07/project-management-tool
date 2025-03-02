import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome Back!</h2>
        <p>Please log in to continue</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
        <a href="#">Forgot Password?</a>
        <a href="#">Create Account</a>
      </div>
    </div>
  );
};

export default Login;
