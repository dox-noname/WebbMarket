import React from "react";
import { Navbar } from "../Navigation";
import { CgMenu } from "react-icons/cg";
import './mobilenav.css'
function Nav() {
  return (
    <div>
      <form action="" className="mobile-form-nav">
    <button className="menu-button">
            <CgMenu className="menu" />
          </button>
      </form>
    </div>
  );
}

export default nav;
