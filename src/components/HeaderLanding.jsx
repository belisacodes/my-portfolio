import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";

const HeaderLanding = () => {
  // For header select menu
  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);

  // For Mobile  menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-portfolio fixed"
            : "theme-main-menu sticky-menu theme-menu-portfolio"
        }
      >
        <div className="d-flex align-items-center justify-content-center">
          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div className="mob-header">
                <button className="toggler-menu" onClick={handleClick}>
                  <div className={click ? "active" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              {/* End Header */}

              <div
                className="navbar-collapse collapse landing-menu-onepage"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                  <Scrollspy
                    className="navbar-nav  main-side-nav font-gordita"
                    items={["portfolio", "skills", "about", "follow", "work"]}
                    currentClassName="active"
                    offset={-90}
                  >
                    <li className="nav-item">
                      <a className="nav-link">Portfolio</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Skills</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">About</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link">Follow me</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Work Together</a>
                    </li>
                  </Scrollspy>
                </div>
              </div>
            </div>
          </nav>
          {/* End Navbar */}
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          <Link to="/doc-landing">
            <img src="images/logo/logo.svg" alt="brand" />
          </Link>
          <div className="fix-icon text-dark" onClick={handleClick}>
            <img src="images/icon/close.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}
        </div>

        <Scrollspy
          className="navbar-nav font-gordita"
          items={["product", "skills", "work", "pricing", "feedback"]}
          currentClassName="active"
          offset={-90}
        >
          <li className="nav-item">
            <a className="nav-link" onClick={handleClick}>
              Product
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={handleClick}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={handleClick}>
              Work
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" onClick={handleClick}>
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={handleClick}>
              Feedback
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* Mobile Menu End */}
    </>
  );
};

export default HeaderLanding;
