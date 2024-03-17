import React, { useState } from "react";
import "../../css/business.css";
import icons from "../../theme";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TransferMoney from "../../components/TransferMoney";
import TransferFxmaster from "../../components/TransferFxmaster";
import Footer from "../../components/Footer";

const RenderImage = () => {
  return (
    <div className="render_image_business">
      <img src={icons.manwith} alt="" className="imgs_element" />
    </div>
  );
};

const RenderCardSection = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <div className="render_business_Card">
      <div className="render_business_card_items">
        <div className="leftside_business_section_content">
          <h1>
            GET MORE <span style={{ color: "blue" }}>EVERYTIME</span>
          </h1>
          <p>
            Offer your Business the flexibility to select unparalleled exchange
            rates in no extra time. The era has passed when you had  to pay a
            hefty amount to make business transactions.
          </p>
          <div className="button_section_business_wrapper">
            <button
              className={activeButton === 1 ? "active" : ""}
              onClick={() => handleButtonClick(1)}
            >
              Pay Invoices
            </button>
            <button
              className={activeButton === 2 ? "active" : ""}
              onClick={() => handleButtonClick(2)}
            >
              View pricing
            </button>
          </div>
        </div>
        <div className="business_card_container">
          {/* First content item */}
          <div className="business_card">
            <div className="business_content_item">
              <div className="business_content_left">
                <h1>Source amount</h1>
                <span>100</span>
              </div>
              <div className="business_content_right">
                <img src={icons.country} alt="" />
              </div>
            </div>
          </div>

          {/* Second content item */}

          <div className="business_card_wrapperss">
            <div className="business_content_left">
              <div className="render_price_business">
                <span>=</span>
                <h1>1000 USD</h1>
                <h2>Account transfer</h2>
              </div>
              <div className="render_price_business">
                <span>-</span>
                <h1>1000 USD</h1>
                <h2>We’ll Convert</h2>
              </div>
              <div className="render_price_business">
                <span>+</span>
                <h1>1000 USD</h1>
                <h2>FXmaster Rate</h2>
              </div>
            </div>
          </div>

          {/* Third content item */}
          <div className="business_card">
            <div className="business_content_item">
              <div className="business_content_left">
                <h1>Target amount</h1>
                <span>1,380.69</span>
              </div>
              <div className="business_content_right">
                <img src={icons.sender} alt="" />
              </div>
            </div>
          </div>
          {/* Fourth content item */}
          <div className="business_card_tax">
            <div className="business_content_left">
              <div className="business_fee_items">
                <h1>our fee</h1>
                <span>24.66 USD</span>
              </div>
              <div className="border_bottoms" />
              <div className="business_tax_section">
                <div className="business_tax_section_items">
                  <h4>e-FIRC</h4>
                  <h4>Tax</h4>
                </div>
                <div className="business_tax_section_prices">
                  <span>2.50 USD</span>
                  <span>3.76 USD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RenderTotalBusinessDone = () => {
  return (
    <div className="render_business_content_third">
      <div className="render_business_content_container_wrapper">
        <div className="render_business_wrapper_content_items_line">
          <img src={icons.auth} alt="" />
          <h1>Authorised service</h1>
        </div>
        <div className="render_business_wrapper_content_items_line">
          <img src={icons.dk1} alt="" />
          <h1>Business users</h1>
        </div>
        <div className="render_business_wrapper_content_items_line">
          <img src={icons.certificate} alt="" />
          <h1>FCA complied</h1>
        </div>
        <div className="render_business_wrapper_content_items_line">
          <img src={icons.ip} alt="" />
          <h1>IPV6 locked</h1>
        </div>
      </div>
    </div>
  );
};

const RenderCardContent = () => {
  return (
    <div className="render_card_content_container_Wrpper">
      <div className="row1">
        <div className="content_wrapper_card1">
          <div className="leftside_content_cards1">
            <img src={icons.student} alt="Man" />
          </div>
        </div>
        <div className="rightside_content_card1">
          <h1>SAVE 6X ON EVERY TRANSFER</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio.
          </p>
        </div>
      </div>
      <div className="second_content_card1">
        <div className="content_wrapper_item1">
          <h1>INTEGRATE WITH ANY SOFTWARE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
            venenatis, eu sit massa. Volutpat massa rhoncus odio. Lorem ipsum
            dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu
            sit massa. Volutpat massa rhoncus odio
          </p>
        </div>
        <div className="leftside_content_cards_content1">
          <div className="card_item_content">
            <img src={icons.gateway} alt="Man" />
            <h1>Security Integrations</h1>
            <p> Lorem ipsum dolor sit amet consevenenatis, eu sit massa.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCarousel = () => {
  // const carouselRef = useRef(null);

  // const testimonials = [
  //   {
  //     id: 1,
  //     image: icons.testi,
  //     message:
  //       "“Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel venenatis, eu sit massa. Volutpat massa rhoncus venenatis, eu sit massas odio.”",
  //     name: "John Doe",
  //   },
  // ];
  // // Add more testimonials as needed

  // const goToPrev = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  //   }
  // };

  // const goToNext = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  //   }
  // };

  return (
    <div className="testimonial_section">
      <div className="testimonial-carousel">
        <h2>TESTIMONIALS</h2>
        <h3>WHAT OUR CUSTOMERS SAY</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
          venenatis, eu sit massa. Volutpat massa rhoncus odio.
        </p>

        <div className="testimonial_content">
          <div className="leftside_content_carousel">
            <img src={icons.testi} alt="" />
          </div>
          <div className="rightside_cotnent_carousel">
            <div className="rightside_content_testi">
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit posuere
                vel venenatis, eu sit massa. Volutpat massa rhoncus venenatis,
                eu sit massas odio.
              </p>
              <h5>&mdash; John Doe</h5>
            </div>
          </div>
        </div>
        <div className="pagination_testil">
          <FaArrowLeft style={{ color: "white", cursor: "pointer" }} />

          <FaArrowRight
            style={{ color: "white", cursor: "pointer" }}
            size={35}
          />
        </div>
      </div>
    </div>
  );
};

const RenderSearchPaymentWithIntegration = () => {
  return (
    <div className="render_cards_transfer_container1">
      <div className="row3">
        <div className="leftside_content_items_section1">
          <div className="leftside_transfer_cards1">
            <h1>GROUP TRANSFERS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
            {/* <div className="btn_content">
              <button>See More</button>
            </div> */}
          </div>
        </div>
        <div className="content_wrapper_cards_item1">
          <div className="leftside_content_cards_image1">
            <img src={icons.groupgirl} alt="Man" />
          </div>
        </div>
      </div>
      <div className="second_content_cards_item1">
        <div className="leftside_content_cards_contents1">
          <img src={icons.outlineacc} alt="Man" />
          <h1>Dedicated Fraud team</h1>
          <p> Lorem ipsum dolor sit amet consevenenatis, eu sit massa.</p>
        </div>
        <div className="content_wrapper_item_view1">
          <div className="content_Wrapper_items_views1">
            <h1>SAFE AND SECURE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
            {/* <div className="btn_content_wrapper">
              <button>See More</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Business = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <>
      <div className="business_container">
        <div className="business_container_wrapper">
          <div className="business_container_content">
            <h1>
              Effortless , Affordable transfers for{" "}
              <span>Every Enterprise</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio. e vel
              venenatis, eu sit massa. Volutpat massa rhonc
            </p>
            <div className="button_section_business">
              <button
                className={activeButton === 1 ? "active" : ""}
                onClick={() => handleButtonClick(1)}
              >
                Register now
              </button>
              <button
                className={activeButton === 2 ? "active" : ""}
                onClick={() => handleButtonClick(2)}
              >
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </div>
      <RenderImage />
      <RenderCardSection />
      <RenderTotalBusinessDone />
      <RenderCardContent />
      <TestimonialCarousel />
      <RenderSearchPaymentWithIntegration />
      <TransferMoney
        backgroundColor="#007bff"
        buttonColor="#ffffff"
        textColor="#ffffff"
        btnTextColor="#007bff"
        btnborder="1px solid #ffffff"
        btnoutline="none"
        // headerContent="OUR GLOBAL NETWORK"
        marginTop="10em"
      />
      <TransferFxmaster />
      <Footer />
    </>
  );
};

export default Business;
