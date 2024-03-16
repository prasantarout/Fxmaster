import React from "react";
import "../css/fxmaster.css";
const TransferFxmaster = ({ headerContent }) => {
  const headerWithColoredX = headerContent?.replace(
    /x/gi,
    '<span style="color: blue;">x</span>'
  );
  return (
    <div className="container">
      <div className="content_container">
        <div className="fxmaster_content">
          {headerContent ? (
            <h1 dangerouslySetInnerHTML={{ __html: headerWithColoredX }} />
          ) : (
            <h1>
              Transfer your money with F<span style={{ color: "blue" }}>x</span>
              master now!
            </h1>
          )}
          <p>
            Experience the future of money transfers - clear, cost-effective and
            the best way to transfer money internationally online.
          </p>
        </div>
        <div className="fxmaster_btn">
          <button>TRANSFER NOW</button>
        </div>
      </div>
    </div>
  );
};

export default TransferFxmaster;
