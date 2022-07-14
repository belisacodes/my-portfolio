import React, { useState } from "react";
import { Helmet } from "react-helmet";
import WorkTogether from "../components/WorkTogether";
import HeaderLanding from "../components/HeaderLanding";
import HeroBanner from "../components/HeroBanner";
import CopyRight from "../components/CopyRight";
import FancyFeature from "../components/FancyFeature";
import Portfolio from "../components/Portfolio";

const PortfolioLanding = () => {
  // For header select menu
  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);
  return (
    <div className="main-page-wrapper font-gordita">
      <Helmet>
        <title> Belisa | Front End Developer </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLanding />
      {/* End Header Landing*/}

      {/* 	=============================================
				Theme Hero Banner
			==============================================  */}
      <HeroBanner />

      {/* =============================================
				Portfolio
			==============================================  */}
      <div className="portfolio pt-120 md-pt-80" id="portfolio">
        <div className="bg-wrapper">
          <div className="container">
            <div className="sldier-wrapper">
              <Portfolio />
            </div>
            {/* /.sldier-wrapper */}
          </div>
          <img
            src="images/shape/168.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src="images/shape/169.svg"
            alt="shape"
            className="shapes shape-two"
          />
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/*  /.portfolio */}

      {/* 	=============================================
				Skills & About me
			==============================================  */}
      <div className="skills-about pt-200 md-pt-100">
        <div className="container">
          <div className="block-skills-about" id="skills">
            <div className="row align-items-center">
              <div
                className="col-lg-5"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>My Skills</h6>
                  <h3 className="title">
                    <span>self-taught</span>
                  </h3>
                  <p>
                    I started programming 3 months ago.<br></br>I began with
                    HTML, CSS, JavaScript, and Vue. I am currently starting
                    ReactJS. <br></br>I've passion for creating intuitive,
                    dynamic user experience{" "}
                  </p>
                </div>
                {/*  /.text-wrapper */}
              </div>
              <div
                className="col-lg-7"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div
                  className="
                    screen-holder-one
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <div
                    className="
                      round-bg
                      big_g
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                    style={{ width: "193px", height: "193px" }}
                  >
                    <img src="images/logo/logo-26.png" alt="logo" />
                  </div>
                  <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-one
                    "
                    style={{ width: "65px", height: "65px" }}
                  >
                    <img src="images/logo/logo-27.png" alt="logo" />
                  </div>
                  <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-two
                    "
                    style={{ width: "105px", height: "105px" }}
                  >
                    <img src="images/logo/logo-28.png" alt="logo" />
                  </div>
                  <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-three
                    "
                    style={{ width: "81px", height: "81px" }}
                  >
                    <img src="images/logo/logo-29.png" alt="logo" />
                  </div>
                  <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-four
                    "
                    style={{ width: "148px", height: "148px" }}
                  >
                    <img src="images/logo/logo-30.png" alt="logo" />
                  </div>
                  <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-five
                    "
                    style={{ width: "148px", height: "148px" }}
                  >
                    <img src="images/logo/logo-31.png" alt="logo" />
                  </div>
                  <img
                    src="images/shape/170.svg"
                    alt=""
                    className="shapes shape-one"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /.block-skills-about */}

          <div className="block-skills-about mt-200 pt-50 md-mt-80" id="about">
            <div className="row align-items-center">
              <div
                className="col-lg-5 order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>About me</h6>
                  <h3 className="title">
                    passion<span>for creating.</span>
                  </h3>
                  <p>
                    After studying economics and logistics, I spent a year in
                    the startup ecosystem. Together with 3 other colleagues we
                    founded the startup Pecolo, the marketplace for local
                    purchases online. During that time we were accelerated by
                    Lanzadera, the best startup accelerator in
                    Spain. Multitasking is a key element and a must have skill if
                    you run a startup, and because of that I came across
                    programming. Since then, I have enjoyed the sector.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
              <div
                className="col-lg-7 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="screen-holder-two">
                  <img src="images/assets/screen_12.png" alt="screen" />
                  <img
                    src="images/assets/screen_13.png"
                    alt=""
                    className="shapes screen-one"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /.block-skills-about */}

          <div className="block-skills-about mt-200 pt-50 md-mt-80" id="follow">
            <div className="row align-items-center">
              <div
                className="col-lg-5"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>Welcome to Belisa's World</h6>
                  <h3 className="title">
                    <span>Follow me</span> on Social Media
                  </h3>
                  <p>
                    I created an account on Instagram to share my journey and
                    connect with everyone!
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
              <div
                className="col-lg-7"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div
                  className="
                    screen-holder-three
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <img src="images/assets/screen_14.png" alt="screen" />
                </div>
              </div>
            </div>
          </div>
          {/* /.block-skills-about */}
        </div>
      </div>
      {/*  /.skills-about */}

      {/* =====================================================
				Work with me
			===================================================== */}
      <div
        className="block-work-with-me lg-container pt-200 md-pt-120"
        id="work"
      >
        <div className="container">
          <WorkTogether />
        </div>
      </div>
      {/* /.block-work-with-me */}

      {/* =====================================================
				Fancy Feature
			===================================================== */}
      <div className="fancy-feature mt-150 md-mt-90" id="product">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <FancyFeature />
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-feature */}

      {/* 			=====================================================
				Footer 
			===================================================== */}
      <footer className="footer-portfolio mt-120 md-mt-100">
        <div className="lg-container">
          <div className="container">
            <div className="bottom-footer">
              <CopyRight />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.footer-portfolio */}
    </div>
  );
};

export default PortfolioLanding;
