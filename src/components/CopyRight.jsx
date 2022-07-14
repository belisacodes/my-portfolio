import React from "react";
import { Link } from "react-router-dom";

const socialContent = [
  {
    icon: "fa-instagram",
    link: "https://www.instagram.com/belisacodes/",
  },
  {
    icon: "fa-twitter",
    link: "https://twitter.com/belisacodes",
  },
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/in/belisa-rus-08803a1bb/",
  },
];

const CopyRight = () => {
  return (
    <div className="row">
      <div className="col-lg-4 order-lg-3 mb-20">
        <ul
          className=" d-flex
              justify-content-center justify-content-lg-end
              social-icon"
        >
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <i className={`fa ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
        {/* End .social-icon */}
      </div>
      <div className="col-lg-4 order-lg-2 mb-20">
        <p className="copyright text-center">
          Copyright @{new Date().getFullYear()}{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
          >
            BelisaCodes
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default CopyRight;
