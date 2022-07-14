import React from "react";

import PortfolioLanding from "../views/PortfolioLanding";

// Not Found Page

// Route Specific
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route path="/" element={<PortfolioLanding />}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
