import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="hero-banner-portfolio lg-container">
      <div className="container">
        <div className="illustration-container">
          <img src="images/assets/ils_20.png" alt="ils" />
        </div>
        {/* End .illustration-container */}

        <div className="row">
          <div className="col-lg-6">
            <h3>Hello, I'm a</h3>
            <h1 className="hero-heading">
              <span>Front-End</span> Developer.
            </h1>
            <p className="hero-sub-heading">
              Hi I'm Belisa Rus, a 23 years-old passionate programmer based in
              Mallorca.{" "}
            </p>
            <Link
              to={{ pathname: "https://www.instagram.com/belisacodes/" }}
              target="_parent"
              rel="noopener noreferer"
              className="btn-portfolio-contact"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              {" "}
              <a
                href={"https://www.instagram.com/belisacodes/"}
                target="_blank"
                rel="noreferrer"
              >
                Let's talk!
              </a>
            </Link>{" "}
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </div>
  );
};

export default HeroBanner;
