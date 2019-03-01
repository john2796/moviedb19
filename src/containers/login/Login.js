import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-item login-left">
        <div className="dark-login-section">
          <img
            className="login-logo"
            src="https://www.shareicon.net/download/2016/11/03/849428_movie_512x512.png"
            alt="logo"
          />
          <h1>Log In</h1>
          <p>FILM CLOUD</p>
        </div>

        <div className="user-login">
          <p className="login-btn main-btn">Log In</p>
          <p className="guest-btn main-btn">Browse as Guest</p>

          <p className="info">Guest users have access to limited features</p>
        </div>
      </div>

      <div className="login-item login-right ">
        <h2>Browse and Rate your favorite shows</h2>
      </div>
    </div>
  );
};

export default Login;
