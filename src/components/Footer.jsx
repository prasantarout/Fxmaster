import React from "react";
import "../css/Footer.css";
import icons from "../theme";

const Footer = () => {
  return (
    <div className="container_wrapper_footer">
      <div className="footer_container">
        <div className="footer_content">
          <p>2023 ⓒ Money solutions</p>
        </div>
        <div className="footer_wrapper">
          <div className="leftside">
            <span>
              FXmaster 30 Churchill Place, Canary Wharf, E14 5RE London, United
              Kingdom.
            </span>
          </div>
          <div className="center">
            <div className="center_cotnent">
              <a href="">Privacy policy</a>
              <a href="">Terms and condition</a>
              <a href="">Cookie policy</a>
            </div>
            <div className="icon_section">
              <a href="">
                <img
                  src={icons.twitter}
                  alt=""
                  style={{ height: "25px", width: "25px" }}
                />
              </a>
              <a href="">
                <img
                  src={icons.linkedin}
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
              </a>
            </div>
          </div>
          <div className="rightside">
            <a href="">Merchant Support</a>
            <a href="">Customer Support</a>
            <a href="">Sales</a>
          </div>
        </div>
        <div className="footer_lastitem">
          <p>
            FX Master Limited, trading as FXMaster, is a company registered in
            England (registration number 05248673). Registered address: 30
            Churchill Place, Canary Wharf, E14 5RE London, United Kingdom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
