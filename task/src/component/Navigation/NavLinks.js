import React from "react";

import "../../assets/css/NavLinks.css";
import { NavLink } from "react-router-dom";
//assets
import logoModuit from "../../assets/img/logo-moduit.svg";
const NavLinks = () => {
  return (
    <ul className="nav-links">
      {
        <React.Fragment>
          <li className="mb-2">
            <img src={logoModuit} />
          </li>
          <li>
            <NavLink exact to="/">
              Question 1
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/task2">
              Question 2
            </NavLink>
          </li>
        </React.Fragment>
      }
    </ul>
  );
};

export default NavLinks;
