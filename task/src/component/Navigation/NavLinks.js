import React from "react";

import "../../assets/css/NavLinks.css";
import { NavLink } from "react-router-dom";
const NavLinks = () => {
  return (
    <ul className="nav-links">
      {
        <React.Fragment>
          <li>
            <NavLink exact to="/">
              Task 1
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/task2">
              Task 2
            </NavLink>
          </li>
        </React.Fragment>
      }
    </ul>
  );
};

export default NavLinks;
