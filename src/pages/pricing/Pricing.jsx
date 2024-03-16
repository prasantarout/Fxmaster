import React, { useState } from "react";
import "../../css/pricing.css";
import icons from "../../theme";
import TransferMoney from "../../components/TransferMoney";
import TransferFxmaster from "../../components/TransferFxmaster";
import Footer from "../../components/Footer";

const RenderImage = () => {
  return (
    <div className="render_image">
      <img src={icons.money} alt="" className="img_element" />
    </div>
  );
};

const RenderPriceSection = ({ activeButton, handleButtonClick }) => {
  return (
    <div className="price_section_container">
      <div className="second_price_section_container">
        <h1>AFFORDABLE AND TRANSPARENT PRICING</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
          venenatis, eu sit massa. Volutpat massa rhoncus odio.
        </p>
        <div className="pricing_btn_container">
          <button
            className={activeButton === 0 ? "active" : ""}
            onClick={() => handleButtonClick(0)}
          >
            Personal
          </button>
          <button
            className={activeButton === 1 ? "active" : ""}
            onClick={() => handleButtonClick(1)}
          >
            Business
          </button>
          <button
            className={activeButton === 2 ? "active" : ""}
            onClick={() => handleButtonClick(2)}
          >
            MSB
          </button>
        </div>
      </div>
    </div>
  );
};

export const RenderCircleMap = () => {
  let cirlceItem = [
    {
      id: 1,
      title: "Lowest price",
      paragraph: "Lorem ipsum dolor sit amet consevenenatis, eu sit massa.",
      icon: icons.graph,
    },
    {
      id: 2,
      title: "Transparent Transaction",
      paragraph: "Lorem ipsum dolor sit amet consevenenatis, eu sit massa.",
      icon: icons.search,
    },
    {
      id: 3,
      title: "Safe and Secure",
      paragraph: "Lorem ipsum dolor sit amet consevenenatis, eu sit massa.",
      icon: icons.secure,
    },
  ];
  return (
    <div className="render_cirlce_map">
      <div className="render_circle_container">
        {cirlceItem?.map((item, index) => (
          <div className="render_circle_content" key={index}>
            <div className="render_content_circle">
              <img src={item?.icon} alt="" />
              <h1>{item?.title}</h1>
              <p>{item?.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const PricingTable = ({ dataitem }) => {
  return (
    <>
      <div className="pricing_table_container">
        <div className="pricing_card">
          {dataitem.map((item) => (
            <div className="pricing_section" key={item.id}>
              <div className="pricing_header">
                <h2>{item.title}</h2>
              </div>
              <div className="pricing_content">
                <div className="left_content">
                  {item.icon && (
                    <div className="tick_icon">
                      <img src={item.icon} alt="Tick Icon" />
                    </div>
                  )}
                  <div className="register_info">
                    <h4>{item.sub_title}</h4>
                    <p>{item.paragraph}</p>
                  </div>
                </div>
                <div className="status">
                  {item.status && <p>{item.status}</p>}
                </div>
              </div>
              {item.subitem && (
                <div className="sub_items">
                  {item.subitem.map((subItem) => (
                    <div className="pricing_content">
                      <div className="left_content">
                        {subItem.icon && (
                          <div className="tick_icon">
                            <img src={subItem.icon} alt="Tick Icon" />
                          </div>
                        )}
                        <div className="subitem_info">
                          <h4>{subItem.title}</h4>
                          <p>{subItem.paragraph}</p>
                        </div>
                      </div>
                      <div className="status">
                        {subItem.status && <p>{subItem.status}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <RenderCircleMap />
    </>
  );
};


const HaveMoreQuestions = () => {
  return (
    <div className="More_container">
      <div className="container_wrapper_more">
        <div className="leftside_wrapper">
          <h1>HAVE MORE QUESTIONS?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio.
          </p>
          <div className="getinfo_btn">
            <button>GET IN TOUCH</button>
          </div>
        </div>
        <div className="rightside_Wrapper">
          <div className="circle">
            <img
              src={icons.dk}
              alt="contact"
              className="circle-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  let pricingTable = [
    {
      id: 1,
      title: "Registering with FXmasters",
      sub_title: "Register for a FXmaster account",
      icon: icons.tick,
      paragraph: "first account is always free",
      status: "free",
    },
    {
      id: 2,
      title: "Sending money",
      subitem: [
        {
          title: "Register for a FXmaster account",
          icon: icons.tick,
          paragraph: "loreum ipsum doler itsu per se intuit",
          status: "From 0.43%",
        },
        {
          title: "Bulk payments",
          icon: icons.tick,
          paragraph: "loreum ipsum doler itsu per se intuit",
          status: "free",
        },
      ],
    },
    {
      id: 3,
      title: "Holding money",
      sub_title: "Hold money in FXmaster account",
      icon: icons.tick,
      paragraph: "loreum ipsum doler itsu per se intuit",
      status: "free",
    },
    {
      id: 4,
      title: "Receiving money",
      subitem: [
        {
          id: 1,
          title: "Getting account details in 10 currencies",
          paragraph: "loreum ipsum doler itsu per se intuit",
          icon: icons.tick,
          status: "Free",
        },
        {
          id: 2,
          title: "Receiving money",
          paragraph: "loreum ipsum doler itsu per se intuit",
          icon: icons.tick,
          status: "Free",
        },
        {
          id: 3,
          title: "Receiving wire payments",
          paragraph: "loreum ipsum doler itsu per se intuit",
          icon: icons.tick,
          status: "1%",
        },
        {
          id: 4,
          title: "Receiving CAD SWIFT payments",
          paragraph: "loreum ipsum doler itsu per se intuit",
          icon: icons.tick,
          status: "4 CAD",
        },
      ],
    },
  ];

  return (
    <>
      <div className="pricing_container">
        <div className="pricing_container_wrapper">
          <div className="pricing_container_content">
            <h1>
              START<span> FREE</span> . PAY AS YOU GROW
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio. e vel
              venenatis, eu sit massa. Volutpat massa rhonc
            </p>
          </div>
          <RenderImage />
        </div>
      </div>
      <RenderPriceSection
        activeButton={activeButton}
        handleButtonClick={handleButtonClick}
      />
      <PricingTable dataitem={pricingTable} />
     <div style={{marginTop:'5em'}}>
      <TransferMoney pricingPadding={10} headerContent="JOIN OVER 50M+ CUSTOMERS WORLDWIDE"/>
       <HaveMoreQuestions/>
      </div>
      <TransferFxmaster/>
      <Footer/>
    </>
  );
};

export default Pricing;
