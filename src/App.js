import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Routes from "./router/Routes";

import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
// comment

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>BelisaCodes | Front-End Developer</title>
        <meta property="og:site_name" content="belisacodes" />
        <meta property="og:url" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BelisaCodes | Front-End Developer" />
        <meta
          name="keywords"
          content="agency, front-end developer, business, portfolio, software company"
        />
        <meta
          name="description"
          content="Self-taught Front-End developer with passion for creating intuitive and creative web pages."
        />
        <meta name="description" content="React Portfolio" />
      </Helmet>
      {/* End Seo Helmt */}

      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
