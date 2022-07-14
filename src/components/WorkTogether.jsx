import React, { useState } from "react";
import { Link } from "react-router-dom";

const WorkTogether = () => {
  return (
    <>
      <div className="row align-items-center">
        <div
          className="col-xl-5 col-lg-6 order-lg-last"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="text-wrapper md-pt-50">
            <div className="title-work-together">
              <h2>
                What can we <span>do together?</span>
              </h2>
            </div>
            {/* /.title-work-together */}
            <p>
              Do you have an idea that you don't know how to implement? Let's do
              it!{" "}
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
                href={"https://calendly.com/belisacodes/30min"}
                target="_blank"
                rel="noreferrer"
              >
                Let's meet!
              </a>
            </Link>{" "}
          </div>
          {/* /.text-wrapper */}
        </div>
        {/* End .col */}

        <div
          className="col-xl-7 col-lg-6 col-md-8 m-auto order-lg-first"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="illustration-holder">
            <img src="images/assets/ils_21.png" alt="about" />
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default WorkTogether;
