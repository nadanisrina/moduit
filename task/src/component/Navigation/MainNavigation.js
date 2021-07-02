import React, { useState } from "react";

import "../../assets/css/MainNavigation.css";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

const MainNavigation = (props) => {
  return (
    <React.Fragment>
      <SideDrawer show={true}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
    </React.Fragment>
  );
};

export default MainNavigation;
