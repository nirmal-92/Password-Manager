import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="login-container">
      <h1>LOGIN</h1>
      <form action="#" method="POST">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="signup">
        <span>Don't have an account?</span>
        <a href="#">Sign Up</a>
      </div>
    </div>
  );
}

export default Login;
