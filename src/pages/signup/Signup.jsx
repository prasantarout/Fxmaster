import React, { useState } from "react";
import {
  FaArrowLeft,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaInfo,
  FaInfoCircle,
} from "react-icons/fa";
import "../../css/Register.css";
import icons from "../../theme";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
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
      <div className="background_iconss_container">
        <a href="" style={{ textDecoration: "none" }} onClick={handleNaviagte}>
          <FaArrowLeft />
        </a>
        <img src={icons.Logo} alt="" />
        <div></div>
      </div>
      <div className="form_Container_signup">
        <div className="form-container">
          <h2>Create an Account</h2>
          <div className="input-field">
            <label htmlFor="country">
              Country<span className="mandatory">*</span>
            </label>
            <select id="country" className="custom-select">
              <option value="usa" style={{ color: "#ccc" }}>
                Select Country
              </option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="uk">UK</option>
            </select>
          </div>
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
                  className="fa-eye"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  className="fa-eye"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>

            {/* <FaInfoCircle
              style={{
                marginLeft: "20px",
                height: "12px",
                width: "12px",
                color: "grey",
              }}
            /> */}
          </div>

          <div className="terms-condition">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I confirm that I have read and agree with the{" "}
              <a href="#" className="link">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="link">
                Privacy Policy
              </a>
            </label>
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
            Sign Up with Google
          </button>
          <div className="alreay_Account">
            <span>Already have an account?</span>
            <a href="">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
