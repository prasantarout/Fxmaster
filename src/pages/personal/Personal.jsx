import React, { useState } from "react";
import icons from "../../theme";
import TransferMoney from "../../components/TransferMoney";
import TransferFxmaster from "../../components/TransferFxmaster";
import Footer from "../../components/Footer";
import "../../css/personal.css";
import Testimonial from "../../components/Testimonal";

// import TestimonialCarousel from "../../components/TestimonialCarousel";
const dataItem = [
  {
    id: 1,
    symbol: "-",
    price: "1000 usd",
    seller: "We’ll Convert",
  },
  {
    id: 2,
    symbol: "=",
    price: "1000 usd",
    seller: "We’ll Convert",
  },
  {
    id: 3,
    symbol: "*",
    price: "1000 usd",
    seller: "FXmaster Rate",
  },
];

const ContentCard = () => {
  return (
    <div className="cardStyle">
      <div className="contentStyle">
        <h2 className="numberStyle">50+</h2>
        <p>Supported Currencies</p>
      </div>
      <div className="contentStyle">
        <h2 className="numberStyle">100+</h2>
        <p>Available Countries</p>
      </div>
      <div className="contentStyle">
        <h2 className="numberStyle">70+</h2>
        <p>Payment Methods</p>
      </div>
      <div className="contentStyle">
        <h2 className="numberStyle">24/7</h2>
        <p>Support Team</p>
      </div>
    </div>
  );
};

const HowITWorks = () => {
  return (
    <div className="how_it_work_section">
      <div className="content_section">
        <h1 className="headingContent">HOW IT WORKS?</h1>
        <div className="paragraphText">
          <p className="paragraphStyle">
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio.
          </p>
        </div>
      </div>
      {/* <div className="imageSection">
        <img src={icons.wokring} alt="" className="image12" />
        <img src={icons.mobileViews} alt="" className="mobileview"/>
      </div> */}
      <div className="cards_sections">
        <div className="hiw_card">
          <div className="hiw_head">
            <div className="hiw_head_icon">
              <img src={icons.hiw_icon1} alt="HIW I1" />
            </div>
            <div className="hiw_head_no">1</div>
          </div>
          <p className="hiw_title">Register for Free</p>
          <p className="hiw_para">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="hiw_icon">
          <ion-icon
            name="arrow-forward-outline"
            style={{ fontSize: "48px", fontWeight: "bold" }}
            class="showDesktopOnly"
          ></ion-icon>
          <ion-icon
            name="arrow-down-outline"
            style={{ fontSize: "48px", fontWeight: "bold" }}
            class="showMobileOnly"
          ></ion-icon>
        </div>
        <div className="hiw_card">
          <div className="hiw_head">
            <div className="hiw_head_icon">
              <img src={icons.hiw_icon2} alt="HIW I2" />
            </div>
            <div className="hiw_head_no">2</div>
          </div>
          <p className="hiw_title">Set up Transfer</p>
          <p className="hiw_para">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div className="hiw_icon">
          <ion-icon
            name="arrow-forward-outline"
            style={{ fontSize: "48px", fontWeight: "bold" }}
            class="showDesktopOnly"
          ></ion-icon>
          <ion-icon
            name="arrow-down-outline"
            style={{ fontSize: "48px", fontWeight: "bold" }}
            class="showMobileOnly"
          ></ion-icon>
        </div>
        <div className="hiw_card">
          <div className="hiw_head">
            <div className="hiw_head_icon">
              <img src={icons.hiw_icon3} alt="HIW I3" />
            </div>
            <div className="hiw_head_no">3</div>
          </div>
          <p className="hiw_title">Make Payment</p>
          <p className="hiw_para">Lorem ipsum dolor sit amet lorem.</p>
        </div>
      </div>
      <div className="thirdSection_content">
        <div className="third_content_section">
          <div className="third_content_section_paragraph_wrapper">
            <img src={icons.paper} alt="arraow" className="img_arraow" />
            <h1>Thats all . Its done!</h1>
            <p style={{ maxWidth: "800px", textAlign: "center" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
          </div>
        </div>
        {/* <img src={icons.group} alt="" className="third_img_cirlce" /> */}
      </div>
    </div>
  );
};

const RenderAppDownload = () => {
  return (
    <div className="container_wrapper1">
      <div className="firstSection_content">
        <p style={{ fontSize: "15px" }}>APP DOWNLOAD</p>
        <h1 style={contentText}>FAST, SECURE TRANSFERS</h1>
        <p style={{ marginTop: "20px" }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
          venenatis, eu sit massa. Volutpat massa rhoncus odio.
        </p>
        <div className="button_cotiner">
          <a href="#!">
            <img src={icons.playstore} alt="" className="playstore" />
          </a>
          <a href="#!">
            <img src={icons.appstore} alt="" className="appstore_img" />
          </a>
        </div>
      </div>
      <div className="second_content_Wrapper_items_circle_img">
        <img src={icons.showcase_desk} alt="" className="showDesktopOnly" />
        <img src={icons.showcase_mobile} alt="" className="showMobileOnly" />
      </div>
    </div>
  );
};

const RenderTransfer = () => {
  const [createAccountClicked, setCreateAccountClicked] = useState(false);

  const handleCreateAccountClick = () => {
    setCreateAccountClicked(true);
  };

  const handleSendNowClick = () => {
    setCreateAccountClicked(false);
  };

  const dataItem = [
    {
      id: 1,
      icon: icons.camera,
      title: "Cost Reduction",
      desc: "Lorem ipsum dolor sit amet consevenenatis, eu sit massa.",
    },
    {
      id: 2,
      icon: icons.icon1,
      title: "Boost your Payments",
      desc: "Lorem ipsum dolor sit amet consevenenatis, eu sit massa.",
    },
    {
      id: 3,
      icon: icons.purse,
      title: "Pay Out & Refund",
      desc: "Lorem ipsum dolor sit amet consevenenatis, eu sit massa.",
    },
    {
      id: 4,
      icon: icons.badge,
      title: "Payments security",
      desc: "Lorem ipsum dolor sit amet consevenenatis, eu sit massa.",
    },
    {
      id: 5,
      icon: icons.badge,
      title: "Payments security",
      desc: "Lorem ipsum dolor sit amet consevenenatis, eu sit massa.",
    },
  ];

  return (
    <div className="container_transfer">
      <h1 className="titleStyle">MERCHANTS</h1>
      <h3 className="secondTitle">
        Transfer with F<span style={{ color: "#FFCE32" }}>X</span>masters
      </h3>
      <p className="subtitleStyle">
        Integrate FXmasters on your website to offer fast, secure and seamless
        online bank transfer payment method.
        <br /> You could receive payments straight into your company bank
        account or open a FX masters merchant account and collect funds there.
      </p>
      <div className="botton_container_Wrapper_personal">
        <button
          style={{
            ...buttonStyleWrapper,
            backgroundColor:
              createAccountClicked !== false ? "transparent" : "white",
            color: createAccountClicked ? "white" : "#1D63FF",
            border: "2px solid",
            borderRadius: "50px",
            outline: "none",
            borderColor: createAccountClicked ? "white" : "#1D63FF",
            borderWidth: 1,
          }}
          onClick={handleSendNowClick}
        >
          Send Now
        </button>

        <button
          style={{
            ...buttonStyleWrapper,
            color: createAccountClicked ? "blue" : "white",
            backgroundColor: createAccountClicked ? "white" : "transparent",
            borderRadius: "50px",
            outline: "none",
            borderColor: createAccountClicked ? "#1D63FF" : "white",
            border: "2px solid",
          }}
          onClick={handleCreateAccountClick}
        >
          Create Account
        </button>
      </div>
      <div className="card_personal_wrapper">
        <div className="personal_services scroll">
          {dataItem?.map((item, index) => (
            <div className="personal_content" key={index}>
              <div className="personal_content_wrapper">
                <img src={item.icon} alt="" className="personal_icon" />
                <h1 className="heading_tag">{item?.title}</h1>
                <p className="personal_para">{item?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Personal = ({ backgroundColor }) => {
  return (
    <div className="personalStyles">
      <div className="main_personal_Section">
        <div className="leftSection_personal">
          <div className="leftsection_personal_wrapper">
            {/* <h1 className="home-heading">
              Redefining International Money transfers
            </h1>
            <div className="scrolltext_container">
              <div className="scrolltext">
                <h1>This is scrolling text.</h1>
                <br />
                <h1>This is scrolling text.</h1>
                <br />
                <h1>This is scrolling text.</h1>
              </div>
            </div> */}
            <div>
              <h1 className="home-heading">
                Redefining International Money transfers
              </h1>
              <div className="scrolltext_container">
                <div className="scrolltext">
                  <h2>best rate.</h2>
                  <h2>This is scrolling text.</h2>
                </div>
              </div>
            </div>
            <span className="paragraph_personal">
              Experience the future of money transfers - clear, cost-effective
              and the best way to transfer money internationally online.
            </span>
            <div className="second_button_personal">
              <button style={{ ...buttonStyle, ...sendButton }}>
                Send Now
              </button>
              <button style={{ ...buttonStyle, ...createButton }}>
                Create Account
              </button>
            </div>
          </div>
        </div>

        <div className="rightsection_personal">
          <img
            src={icons.personal}
            alt="Image1"
            className="rightsection_img_personal"
          />
          <div className="cardview-home">
            <div className="card_View_home_wrapper">
              <div className="cardview_home_Wrapper_Section">
                <div className="cardview_container_section">
                  <span>You Send</span>
                  <h3>100</h3>
                </div>
                <img src={icons.country} alt="" className="country_img" />
              </div>
              <div className="country_img_wrapper">
                {dataItem?.map((item, index) => (
                  <div
                    key={index}
                    className="cardview_container_section_country"
                  >
                    <div className="cardview_container_section_country_div">
                      <div className="cardview_container_section_country_div_img">
                        <span>{item?.symbol}</span>
                      </div>
                    </div>
                    <div></div>
                    <p>
                      <span className="span_item">{item?.price}</span>
                    </p>
                    <span className="seller_Span">{item?.seller}</span>
                  </div>
                ))}
              </div>
              <div className="receipent_items">
                <div className="recept_items_Section">
                  <span>Recipient gets</span>
                  <h3>1,380.69</h3>
                </div>
                <img src={icons.sender} alt="" className="sender_img" />
              </div>
            </div>
            <div className="btn_personal">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="third_personal_container">
        <div className="third_personal_container_circle" />

        <div className="third_personal_container_content">
          <ContentCard />
        </div>
      </div>
      <img src={icons.frame1} alt="" className="frame_img" />
      <img src={icons.cirlceView} alt="" className="frame_img1" />
      <div style={{ marginTop: "5em" }}>
        <HowITWorks />
      </div>
      <div style={{ marginTop: "5em" }}>
        <RenderAppDownload />
      </div>
      <RenderTransfer />
      <Testimonial />
      <TransferMoney
        backgroundColor="#007bff"
        buttonColor="#ffffff"
        textColor="#ffffff"
        btnTextColor="#007bff"
        btnborder="1px solid #ffffff"
        btnoutline="none"
      />
      <div>
        <TransferFxmaster />
        <Footer />
      </div>
    </div>
  );
};

const buttonStyle = {
  width: "150px", // Adjust the width as needed
  borderRadius: "50px",
  textAlign: "center",
  marginRight: "10px", // Add margin between buttons
};

const sendButton = {
  backgroundColor: "#1D63FF",
  color: "#FFFFFF",
  border: "none",
  padding: "10px 20px",
  cursor: "pointer",
};

const createButton = {
  backgroundColor: "transparent",
  color: "#1D63FF",
  border: "1px solid #1D63FF",
  padding: "10px 20px",
  cursor: "pointer",
};

const contentText = {
  fontSize: "50px",
  fontFamily: "Barlow, sans-serif",
};

const buttonStyleWrapper = {
  padding: "10px 20px",
  fontSize: "14px",
  cursor: "pointer",
  marginRight: "20px",
};

export default Personal;
