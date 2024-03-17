import React, { useState, useRef } from "react";
import "../css/Navbar.css"; // Import CSS file for styling
import icons from "../theme";
import Personal from "../pages/personal/Personal";
import Business from "../pages/business/Business";
import Msg from "../pages/msb/Msg";
import Help from "../pages/help/Help";
import Security from "../pages/security/Security";
import Pricing from "../pages/pricing/Pricing";
import Blog from "../pages/blog/Blog";
import { Link } from "react-router-dom";
import Payment from "../pages/payment/Payment";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("personal");
  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: "#FFCE32",
  });
  const [textColor, setTextColor] = useState("#333333");
  const [bottomLineColor, setBottomLineColor] = useState("#FFCE32");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setTextColor("blue");
    // Set the style of the navbar based on the active menu item
    switch (menu) {
      case "personal":
        setNavbarStyle({ backgroundColor: "#FFCE32" });
        break;
      case "business":
        setNavbarStyle({ backgroundColor: "#1D63FF" });
        setBottomLineColor("#FFCE32");
        break;
      case "msb":
        setNavbarStyle({});
        break;
      case "blog":
        setNavbarStyle({ backgroundColor: "#FFCE32" });
        break;
      case "pricing":
        setNavbarStyle({ backgroundColor: "#121722" });
        break;
      case "security":
        setNavbarStyle({ backgroundColor: "#1D63FF" });
        setBottomLineColor("#FFCE32");
        break;
      case "payments":
        setNavbarStyle({});
        break;
      case "help":
        setNavbarStyle({ backgroundColor: "#FFFFFF" });
        break;
      default:
        setNavbarStyle({ backgroundColor: "#FFCE32" });
    }
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const renderMenuScreen = () => {
    switch (activeMenu) {
      case "personal":
        return <Personal backgroundColor={navbarStyle.backgroundColor} />;
      case "business":
        return <Business />;
      case "msb":
        return <Msg />;
      case "blog":
        return <Blog />;
      case "pricing":
        return <Pricing />;
      case "security":
        return <Security />;
      case "payments":
        return <Payment />;
      case "help":
        return <Help />;
      default:
        return null;
    }
  };

  const navRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  let styes =
    activeMenu === "business" ||
    activeMenu === "pricing" ||
    activeMenu === "payments" ||
    activeMenu === "security"
      ? { color: "white" }
      : { color: "black" };

  return (
    <header>
      <nav
        className={`navbar ${activeMenu ? "active-" + activeMenu : ""}`}
        style={{ ...navbarStyle, color: textColor }}
      >
        <div className="navbar-logo">
          <img
            src={
              activeMenu === "business"
                ? icons.LogoBlue
                : activeMenu === "pricing"
                ? icons?.LogoBlack
                : activeMenu === "security"
                ? icons.LogoBlue
                : activeMenu === "payments"
                ? icons?.LogoBlack
                : icons.Logo
            }
            alt="Logo"
          />
          <div className="mobile_menu_icon"
          styles={{ color:activeMenu === "pricing" ?'white':'black'}}
          >
            <FaBars
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              size={24}
            />
          </div>
          <div className={`navbar-sections`}>
            <a
              href="#personal"
              onClick={() => handleMenuClick("personal")}
              className={activeMenu === "personal" ? "active" : ""}
              style={styes}
            >
              Personal
            </a>
            <a
              href="#business"
              onClick={() => handleMenuClick("business")}
              className={
                activeMenu === "business" ? "active navbar_yellow" : ""
              }
              style={styes}
            >
              Business
            </a>
            <a
              href="#msb"
              onClick={() => handleMenuClick("msb")}
              className={activeMenu === "msb" ? "active" : ""}
              style={styes}
            >
              MSB
            </a>
          </div>
        </div>

        <div
          className={`navbar-menu ${
            ["security", "pricing", "payments", "business"].includes(activeMenu)
              ? "white-text"
              : ""
          }`}
        >
          <a
            href="#blog"
            onClick={() => handleMenuClick("blog")}
            className={activeMenu === "blog" ? "active" : ""}
            style={styes}
          >
            Blog
          </a>
          <a
            href="#pricing"
            onClick={() => handleMenuClick("pricing")}
            style={styes}
            className={activeMenu === "pricing" ? "active" : ""}
          >
            Pricing
          </a>
          <a
            href="#security"
            onClick={() => handleMenuClick("security")}
            className={activeMenu === "security" ? "active navbar_yellow" : ""}
            style={styes}
          >
            Security
          </a>
          <a
            href="#payments"
            onClick={() => handleMenuClick("payments")}
            className={activeMenu === "payments" ? "active" : ""}
            style={styes}
          >
            Payments
          </a>
          <a
            href="#help"
            onClick={() => handleMenuClick("help")}
            className={activeMenu === "help" ? "active " : ""}
            style={styes}
          >
            Help
          </a>
        </div>
        <div className="navbar-auth">
          <Link to="/login">
            <button
              className={
                activeMenu === "security" || activeMenu === "business"
                  ? "yellow_btn_outline"
                  : "login-btn"
              }
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button
              className={
                activeMenu === "security" || activeMenu === "business"
                  ? "yellow_btn"
                  : "signup-btn"
              }
            >
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
      {isMenuOpen && ( // Render menu screen only if menu is open
        <div className="mobile-menu" onClick={closeMenu}>
          <div
            className="mobile-menu-items"
            onClick={(e) => e.stopPropagation()}
            style={{
              opacity: isMenuOpen ? "100%" : "0",
              zIndex: isMenuOpen ? "1000" : "-1000",
              transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
            }}
          >
            <FaTimes className="close-icon" onClick={toggleMenu} size={45} />
            <a
              href="#personal"
              onClick={() => {
                handleMenuClick("personal");
                closeMenu();
              }}
              className={activeMenu === "personal" ? "active blue-text" : ""}
              style={{ color: activeMenu === "personal" ? textColor : "#333333" }}
            >
              Personal
            </a>
            <a
              href="#business"
              onClick={() => {
                handleMenuClick("business");
                closeMenu();
              }}
              className={activeMenu === "business" ? "active" : ""}
              style={{ color: activeMenu === "business" ? textColor : "#333333" }}
            >
              Business
            </a>
            <a
              href="#msb"
              onClick={() => {
                handleMenuClick("msb");
                closeMenu();
              }}
              className={activeMenu === "msb" ? "active" : ""}
              style={{ color: activeMenu === "msb" ? textColor : "#333333" }}
            >
              MSB
            </a>
            <div className="border_bottom" />
            <a
              href="#blog"
              onClick={() => {
                handleMenuClick("blog");
                closeMenu();
              }}
              className={activeMenu === "blog" ? "active" : ""}
              style={{ color: activeMenu === "blog" ? textColor : "#333333" }}
            >
              Blog
            </a>
            <a
              href="#pricing"
              onClick={() => {
                handleMenuClick("pricing");
                closeMenu();
              }}
              className={activeMenu === "pricing" ? "active" : ""}
              style={{ color: activeMenu === "pricing" ? textColor : "#333333" }}
            >
              Pricing
            </a>
            <a
              href="#security"
              onClick={() => {
                handleMenuClick("security");
                closeMenu();
              }}
              className={activeMenu === "security" ? "active" : ""}
              style={{ color: activeMenu === "security" ? textColor : "#333333" }}
            >
              Security
            </a>
            <a
              href="#payments"
              onClick={() => {
                handleMenuClick("payments");
                closeMenu();
              }}
              className={activeMenu === "payments" ? "active" : ""}
              style={{ color: activeMenu === "payments" ? textColor : "#333333" }}
            >
              Payments
            </a>
            <a
              href="#help"
              onClick={() => {
                handleMenuClick("help");
                closeMenu();
              }}
              className={activeMenu === "help" ? "active" : ""}
              style={{ color: activeMenu === "help" ? textColor : "#333333" }}
            >
              Help
            </a>
            {/* <div className="border_bottom"/> */}
            <div className="btn_Wrapper">
              <Link to="/login" onClick={closeMenu}>
                <button
                  className={
                    "login-btn"
                  }
                 
                >
                  Login
                </button>
              </Link>
              <Link to="/register" onClick={closeMenu}>
                <button
                  className={
                   
                    "signup-btn"
                  }
                 
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="hero-section">
        {(activeMenu === "msb" || activeMenu === "payments") && (
          <div
            className={
              activeMenu === "msb" ? "msb-background" : "payments-background"
            }
          />
        )}
        {renderMenuScreen()}
      </div>
    </header>
  );
};

export default Navbar;
