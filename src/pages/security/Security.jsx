import React from "react";
import "../../css/Security.css";
import icons from "../../theme";
import TransferFxmaster from "../../components/TransferFxmaster";
import Footer from "../../components/Footer";

const RenderCardWithData = () => {
  return (
    <div className="card_container">
      {/* 1st wrapper */}
      <div className="card_wrapper_section">
        <div className="leftside_card_swapper">
          <img src={icons.auth} alt="" />
          <h2>Two-factor authentication</h2>
          <p>Lorem ipsum dolor sit amet consevenenatis, eu sit massa.</p>
        </div>
        <div className="rightside_card_swrapper">
          <h2>extra secure for you</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio.
          </p>
        </div>
      </div>

      {/* 2nd wrapper */}
      <div className="card_wrapper_section_second">
        <div className="rightside_wrappr_context">
          <h2>easy security inteGration</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio.
          </p>
        </div>
        <div className="leftside_wrapper_context">
          <img src={icons.security} alt="" />
          <h2>Security Integrations</h2>
          <p>Lorem ipsum dolor sit amet consevenenatis, eu sit massa.</p>
        </div>
      </div>
      {/* 3rd wrapper */}
      <div className="card_wrapper_section_third">
        <div className="leftside_third">
          <img src={icons.ip} alt="" />
          <h2> IPv6 Protocol</h2>
          <p>Lorem ipsum dolor sit amet consevenenatis, eu sit massa.</p>
        </div>
        <div className="rightside_third">
          <h2>safe in all devices</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio.
          </p>
        </div>
      </div>
      {/* 4th wrapper */}
      <div className="card_wrapper_section_fourth">
        <div className="content_rightside">
          <h2>alert fraud team</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio.
          </p>
        </div>
        <div className="content_leftside">
          <img src={icons.people} alt="" />
          <h2>Dedicated Fraud team</h2>
          <p>Lorem ipsum dolor sit amet consevenenatis, eu sit massa.</p>
        </div>
      </div>
    </div>
  );
};

const RenderFriend = () => {
  return (
    <div className="friend_container">
      <div className="friend_with_wwapper">
        <h1>TRANSFER WITH SAFETY</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
          venenatis, eu sit massa. Volutpat massa rhoncus odio.
        </p>
      </div>
    </div>
  );
};

const RenderComputer = () => {
  return (
    <div className="computer_container">
      <div className="computer_wrapper">
        <div className="leftside_computer">
          <h2>AUDIT</h2>
          <h1>SECURITY AUDITS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio.
          </p>
          <div className="btn_computer">
            <button>View our certificates</button>
          </div>
        </div>

        <div className="rightside_computer">
          <div
            style={{
              height: "50px",
              width: "50px",
              backgroundColor: "blue",
              borderRadius: "50%",
              right: "5%",
            }}
          />
          <div className="img_container">
            <img src={icons.roundedCirlce} alt="" />
            <img src={icons.computer} alt="" style={{ marginRight: "10%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const HaveMoreQuestions = () => {
  return (
    <div className="know_container_wrapper">
      <div className="container_wrapper_known">
          <div className="circle_known">
            <img src={icons.dk} alt="contact" className="circle-img1" />
          </div>
          <div className="leftside_wrapper_known">
            <h1>KNOW MORE DETAILS?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
            <div className="getinfo_btn_know">
              <button>Get in touch</button>
            </div>
          </div>
      </div>
    </div>
  );
};

const Security = () => {
  return (
    <>
      <div className="container_security">
        <div className="security_content">
          <div className="security_content_wrapper">
            <h1>
              Your Money : <span>Fortified and Secure</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio. e vel
              venenatis, eu sit massa. Volutpat massa rhonc
            </p>
          </div>
        </div>
      </div>
      <RenderCardWithData />
      <RenderFriend />
      <RenderComputer />
      <HaveMoreQuestions/>
      <TransferFxmaster/>
      <Footer/>
    </>
  );
};

export default Security;
