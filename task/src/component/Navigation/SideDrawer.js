import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
//css
import "../../assets/css/SideDrawer.css";
const SideDrawer = (props) => {
  const content = (
    <CSSTransition classNames={`slide-enter`} in={props.show} timeout={200} mountOnEnter unmountOnExit>
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
