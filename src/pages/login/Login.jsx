import React, { useState } from "react";
import {
  FaArrowLeft,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaInfo,
  FaInfoCircle,
} from "react-icons/fa";
import "../../css/Login.css";
import icons from "../../theme";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleNaviagte = () => {
    navigate("/");
  };
  return (
    <div className="background-image">
      <div className="background_icon_container">
      <a href="" style={{ textDecoration: "none" }} onClick={handleNaviagte}>
        <FaArrowLeft
        />
      </a>
       <img src={icons.Logo} alt="" />
       <div></div>
      </div>
      <div className="login_Container">
      <div className="form-container_wrapper">
        <h2>Sign in to your account</h2>
        <div className="input-field">
          <label htmlFor="email">
            Email<span className="mandatory">*</span>
          </label>
          <input type="email" id="email" placeholder="Enter email" />
        </div>
        <div className="input-field">
          <label htmlFor="password">
            Password<span className="mandatory">*</span>
          </label>
          <div className="password-input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Enter Password"
            />
              {passwordVisible ? (
            <FaEyeSlash
              className="fa-icon"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <FaEye className="fa-icon" onClick={togglePasswordVisibility} />
          )}
          </div>
        </div>
        <div className="forgot-password">
          <a href="#">Forgot Password</a>
        </div>
        <button className="signup-button">Sign Up</button>
        <span className="span_Tag">-OR-</span>
        <br />
        <button className="google-signup-button">
          <img
            src={icons.google}
            alt="Google"
            style={{
              height: "20px",
              width: "20px",
              objectFit: "contain",
              marginRight: "5px",
            }}
          />
          Sign In with Google
        </button>
        <div className="alreay_Account">
          <span>Don’t have an account?</span>
          <a href=""> Sign up for FREE</a>
        </div>
      </div>
      </div>
    </div>
  ); 
};

export default Login;
