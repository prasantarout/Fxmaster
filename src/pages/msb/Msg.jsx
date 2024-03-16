import React, { useState } from "react";
import "../../css/msb.css";
import icons from "../../theme";
import TransferMoney from "../../components/TransferMoney";
import TransferFxmaster from "../../components/TransferFxmaster";
import Footer from "../../components/Footer";

const RenderCardContainer = () => {
  return (
    <div className="hero_Sectgion">
      <div className="rendrer_card_wrapper_container">
        {/* Content for the card */}
        <div className="render_card_items_section">
          <h2>50+</h2>
          <h4>Supported Currencies</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere</p>
        </div>
        <div className="render_card_items_section">
          <h2>100+</h2>
          <h4>Available Countries</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere</p>
        </div>
        <div className="render_card_items_section">
          <h2>10x</h2>
          <h4>Speed</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit posuere</p>
        </div>
      </div>
    </div>
  );
};

const RenderTransferGlobal = () => {
  return (
    <div className="render_globe_tranfer_container">
      <div className="render_globe_transfer_content">
        <img src={icons.itemsWrapper} alt="" />
        <div className="render_cotainer_wrapper_transfer">
          <h1>TRANSFORM YOUR INTERNATIONAL PAYMENTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio. Lorem ipsum
            dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu
            sit massa. Volutpat massa rhoncus odio.Lorem ipsum dolor sit amet
            consectetur adipiscing elit posuere vel venenatis, eu sit massa.
            Volutpat massa rhoncus odio. Lorem ipsum dolor sit amet consectetur
            adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa
            rhoncus odio.
          </p>
        </div>
      </div>
    </div>
  );
};

const RenderTransfer = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const dataItem = [
    {
      id: 1,
      icon: icons.instruments,
      title: "Plug & Play Integration",
      desc: "Lorem ipsum dolor sit amet consevenenatis, eu sit massa.",
    },
    {
      id: 2,
      icon: icons.handshake,
      title: "White Labelled or  Co-Branded",
      desc: "Lorem ipsum dolor sit amet consevenenatis, eu sit massa.",
    },
    {
      id: 3,
      icon: icons.building,
      title: "Scalable Solutions",
      desc: "Lorem ipsum dolor sit amet consevenenatis, eu sit massa.",
    },
    {
      id: 4,
      icon: icons.process,
      title: "Regulatory Compliance",
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
    <div className="container_transfer_wrapper">
      <div className="transfer_wrapper_content_item">
        <h5 className="title">BANKS</h5>
        <h3 className="secondTitle">BUILT FOR YOUR NEEDS</h3>
        <p>
          Integrate FXmasters on your web-site to offer fast, secure and
          seamless online bank transfer payment method.
          <br />
          You could receive payments straight into your company bank account or
          open a FX masters merchant account and collect funds there.
        </p>
        <div className="msb__btn__wrapper">
          <button
            className={activeButton === 1 ? "active" : ""}
            onClick={() => handleButtonClick(1)}
          >
            Check all Integrations
          </button>
          <button
            className={activeButton === 2 ? "active" : ""}
            onClick={() => handleButtonClick(2)}
          >
            Enquire for more
          </button>
        </div>
      </div>
      <div className="cardsContainer">
        {dataItem?.map((item, index) => (
          <div className="card_wrapper_solution" key={index}>
            <div className="card_solution_section">
              <img src={item.icon} alt="" className="cardIcon" />
              <h1 className="cardTitle">{item.title}</h1>
              <p className="cardDesc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const RenderSearchPaymentWithIntegration = () => {
  return (
    <div className="render_cards_transfer_container">
      <div className="row">
        <div className="leftside_content_items_section">
          <div className="leftside_transfer_cards">
            <h1>SOLUTION OVERVIEW</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
            <div className="btn_content">
              <button>See More</button>
            </div>
          </div>
        </div>
        <div className="content_wrapper_cards_item">
          <div className="leftside_content_cards_image">
            <img src={icons.ladies} alt="Man" />
          </div>
        </div>
      </div>
      <div className="second_content_cards_item">
        <div className="leftside_content_cards_contents">
          <img src={icons.netwokring} alt="Man" />
          <h1>Safety integrations</h1>
          <p> Lorem ipsum dolor sit amet consevenenatis, eu sit massa.</p>
        </div>
        <div className="content_wrapper_item_view">
          <div className="content_Wrapper_items_views">
            <h1>Every Payment Possible</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
            <div className="btn_content_wrapper">
              <button>See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RenderCompanyDetails = () => {
  return (
    <div className="computer_company_details">
      <div className="computer_company_details_wrapper">
        <div className="leftside_computer_wrapper_details">
          <h2>PARTNERS</h2>
          <h1>TRUSTED GLOBAL BANKING PARTNERS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio.
          </p>
          <div className="btn_company_details_wrapper">
            <button>View list</button>
          </div>
        </div>

        <div className="rightside_company_wrapper_details">
          <div className="img_container_wrapper_details">
            <img src={icons.slice} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Msg = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <>
      <div className="msb__container__wrapper">
        <div className="msb__wrapper_section">
          <div className="msb__wrappers_content">
            <h1>
              TAKE YOUR BUSINESS{" "}
              <span style={{ color: "blue" }}>EVERYWHERE</span> WITH FX
              INTEGRATIONS
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>

            <div className="msb__btn__wrapper">
              <button
                className={activeButton === 1 ? "active" : ""}
                onClick={() => handleButtonClick(1)}
              >
                Check all Integrations
              </button>
              <button
                className={activeButton === 2 ? "active" : ""}
                onClick={() => handleButtonClick(2)}
              >
                Enquire for more
              </button>
            </div>
          </div>
        </div>
      </div>
      <RenderCardContainer />
      <RenderTransferGlobal />
      <RenderTransfer />
      <RenderSearchPaymentWithIntegration />
      <RenderCompanyDetails />
      <TransferMoney
        backgroundColor="#007bff"
        buttonColor="#ffffff"
        textColor="#ffffff"
        btnTextColor="#007bff"
        btnborder="1px solid #ffffff"
        btnoutline="none"
        // headerContent="OUR GLOBAL NETWORK"
        marginTop="35em"
      />
      <TransferFxmaster headerContent="MAKE GLOBAL PAYMENTS SIMPLE with FXmaster now!"/>
      <Footer/>
    </>
  );
};

export default Msg;
