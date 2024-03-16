import React, { useState } from "react";
import "../../css/payment.css";
import icons from "../../theme";
import TransferMoney from "../../components/TransferMoney";
import TransferFxmaster from "../../components/TransferFxmaster";
import Footer from "../../components/Footer";

const RenderCardContent = () => {
  return (
    <div className="render_card_content_container">
      <div className="row2">
        <div className="content_wrapper_card">
          <div className="leftside_content_cards">
            <img src={icons.man} alt="Man" />
          </div>
        </div>
        <div className="rightside_content_card">
          <h1>Every Payment Possible</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio. Lorem ipsum
            dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu
            sit massa. Volutpat massa rhoncus odio
          </p>
        </div>
      </div>
      <div className="second_content_card">
        <div className="content_wrapper_item">
          <h1>Every Payment Possible</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio. Lorem ipsum
            dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu
            sit massa. Volutpat massa rhoncus odio
          </p>
        </div>
        <div className="leftside_content_cards_content">
          <div className="card_item_content">
            <img src={icons.stark} alt="Man" />
            <h1>Super Quick</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consevenenatis, eu sit massa. Lorem
              ipsum dolor sit amet consevenenatis, eu sit massa.Lorem ipsum
              dolor sit amet consevenenatis, eu sit massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

let dataitem = [
  {
    id: 1,
    title: "all-in-one finance for growth",
    para: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus odio.",
    subitem: [
      {
        id: 1,
        icon: icons.close,
        title: "No hidden fees",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel vene",
      },
      {
        id: 2,
        icon: icons.globe,
        title: "Global coverage",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel vene",
      },
      {
        id: 3,
        icon: icons.mic,
        title: "Local support",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel vene",
      },
      {
        id: 4,
        icon: icons.action,
        title: "Unified payment",
        subtitle:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel vene",
      },
    ],
  },
];

const RenderWrapper = () => {
  return (
    <div className="wrapper_content_card">
      {dataitem.map((item) => (
        <div className="wrapper_content_section" key={item.id}>
          <h2>{item.title}</h2>
          <span>{item.para}</span>
          <div className="subitem_container">
            {item.subitem.map((sub) => (
              <div className="subitem" key={sub.id}>
                <img src={sub.icon} alt="Icon" />
                <div>
                  <h3>{sub.title}</h3>
                  <p>{sub.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

let globalItem = [
  {
    id: 1,
    icon: icons.blacksecure,
    title: "Security as top priority",
    para: "loreum ipsum doler itsu per se intuit loreum ipsum doler itsu per se intuit",
  },
  {
    id: 2,
    icon: icons.blackkey,
    title: "Privacy at each step",
    para: "loreum ipsum doler itsu per se intuit loreum ipsum doler itsu per se intuit",
  },
  {
    id: 3,
    icon: icons.blackrock,
    title: "Top notch customer service",
    para: "loreum ipsum doler itsu per se intuit loreum ipsum doler itsu per se intuit",
  },
];

const RenderGlobal = () => {
  return (
    <div className="computer_container_global">
      <div className="computer_wrapper_global">
        <div className="leftside_computer_global">
          <h2>PARTNERS</h2>
          <h1>DO BUSINESS WITH CONFIDENCE</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio.
          </span>
          <div className="computer_wrapper_global_item">
            {globalItem.map((item) => (
              <div className="computer_wrapper_items_section">
                <img src={item?.icon} alt="" />
                <div className="computer_items">
                  <h3>{item.title}</h3>
                  <p>{item?.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="bludeDot"
        />
        <div className="rightside_computer_global">
          <div className="img_container_global">
            <img src={icons.women} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const RenderGlobeMap = () => {
  return (
    <div className="render_globe_map">
      <div className="render_globe_map_content">
        <img src={icons.globemap} alt="" />
        <div className="render_cotainer_wrapper_items">
          <h1>ACCEPT PAYMENTS FROM EVERYWHERE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio. Lorem ipsum
            dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu
            sit massa. Volutpat massa rhoncus odio.Lorem ips
          </p>
        </div>
      </div>
    </div>
  );
};

const Payment = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <>
      <div className="container_payment_section">
        <div className="container_payment_section_wrapper">
          <div className="content_section_payment">
            <h1>
              MAKING <span style={{ color: "blue" }}>GLOBAL</span> PAYMENTS
              SIMPLE AND QUICK
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
          </div>
          <div className="button_section_payment">
            <button
              className={activeButton === 1 ? "active" : ""}
              onClick={() => handleButtonClick(1)}
            >
              Open account
            </button>
            <button
              className={activeButton === 2 ? "active" : ""}
              onClick={() => handleButtonClick(2)}
            >
              See how it works
            </button>
          </div>
        </div>
      </div>
      <RenderCardContent />
      <RenderWrapper />
      <RenderGlobal />
      <RenderGlobeMap />
      <TransferMoney
        backgroundColor="#007bff"
        buttonColor="#ffffff"
        textColor="#ffffff"
        btnTextColor="#007bff"
        btnborder="1px solid #ffffff"
        btnoutline="none"
        headerContent="OUR GLOBAL NETWORK"
        marginTop="10em"
      />
      <TransferFxmaster headerContent="MAKE GLOBAL PAYMENTS SIMPLE with FXmaster now!"/>
      <Footer/>
    </>
  );
};

export default Payment;
