import React, { useState } from "react";
import "../css/Transfer.css";
import icons from "../theme";

const TransferMoney = ({
  backgroundColor,
  buttonColor,
  textColor,
  btnborder,
  btnTextColor,
  btnoutline,
  headerContent,
  newclass,
  marginTop
}) => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const dataItem = [
    {
      id: 1,
      country: icons.uk,
      countryName: "British pound",
      desc: "UK sort code, Account number, and IBAN",
      //   accountDetails: "Get GBP account details",
    },
    {
      id: 2,
      country: icons.europe,
      countryName: "Euro",
      desc: "Bank code (SWIFT/BIC) and IBAN",
      accountDetails: "Get EUR account details",
    },
    {
      id: 3,
      country: icons.australia,
      countryName: "Australian dollar",
      desc: "BSB code and Account number",
      accountDetails: "Get AUD account details",
    },
    {
      id: 4,
      country: icons.newzeland,
      countryName: "New Zealand dollar",
      desc: "Account number",
      accountDetails: "Get NZD account details",
    },
    {
      id: 5,
      country: icons.singapore,
      countryName: "Singapore dollar",
      desc: "Bank code, Bank name, and Account number",
      accountDetails: "Get SGD account details",
    },
    {
      id: 6,
      country: icons.romania,
      countryName: "Romanian lei",
      desc: "Bank code (SWIFT/BIC) and Account number",
      accountDetails: "Get RON account details",
    },
    {
      id: 7,
      country: icons.canada,
      countryName: "Canadian dollar",
      desc: "Institution number, Transit number, and Account number",
      accountDetails: "Get CAD account details",
    },
    {
      id: 8,
      country: icons.hungrey,
      countryName: "Hungarian forint",
      desc: "Account number",
      accountDetails: "Get HUF account details",
    },
    {
      id: 9,
      country: icons.turkey,
      countryName: "Turkish lira",
      desc: "Bank name and IBAN",
      accountDetails: "Get TRY account details",
    },
  ];

  const CountryDetails = ({ country, countryName, desc, accountDetails }) => (
    <div className="country-details">
      <img src={country} alt={countryName} />
      <h3 style={{ color: textColor }}>{countryName}</h3>
      <p style={{ color: textColor }}>{desc}</p>
      <a href="#" className="account-details-link" style={{ color: textColor }}>
        {accountDetails}
      </a>
    </div>
  );

  return (
    <div className={`transfer_container ${newclass ?? ""}`} style={{ backgroundColor,marginTop:marginTop }}>
      <div className="transfer_Child">
        <div className="transfer_content">
          <h2 className="heding_tag" style={{ color: textColor }}>
            {headerContent ? headerContent:"Transfer ANYWHERE"}
          </h2>
          <p className="paragraph" style={{ color: textColor }}>
            Integrate FXmasters on your website to offer fast, secure and
            seamless online bank transfer payment method.
            <br /> You could receive payments straight into your company bank
            account or open a FX masters merchant account and collect funds
            there.
          </p>
          <div className="btn_section">
            <button
              className={activeButton === 0 ? "active" : ""}
              onClick={() => handleButtonClick(0)}
              style={{
                backgroundColor: activeButton === 0 ? buttonColor : "transparent",
                color: activeButton === 0 ? btnTextColor : textColor,
                border: activeButton === 0 ? "none" : btnborder,
                outline:btnoutline
              }}
            >
              Account Details
            </button>
            <button
              className={activeButton === 1 ? "active" : ""}
              onClick={() => handleButtonClick(1)}
              style={{
                backgroundColor: activeButton === 1 ? buttonColor : "transparent",
                color: activeButton === 1? btnTextColor : textColor,
                border: activeButton === 1 ? "none" : btnborder,
                outline:btnoutline
              }}
            >
              Hold and Convert Money
            </button>
            <button
              className={activeButton === 2 ? "active" : ""}
              onClick={() => handleButtonClick(2)}
              style={{
                backgroundColor: activeButton === 2 ? buttonColor : "transparent",
                color: activeButton === 2 ? btnTextColor : textColor,
                border: activeButton === 2 ? "none" : btnborder,
                outline:btnoutline
              }}
            >
              Send Money
            </button>
          </div>
          <div className="country-details-container">
            <div className="column">
              {dataItem.map((item) => (
                <CountryDetails key={item.id} {...item} />
              ))}
            </div>
            {/* <div className="column">
              {dataItem.slice(5).map((item) => (
                <CountryDetails key={item.id} {...item} />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferMoney;
