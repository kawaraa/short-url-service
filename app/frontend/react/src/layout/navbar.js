import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default (props) => {
  return (
    <div className="navbar-outer">
      <nav className="navbar container">
        <NavLink to="/create-url" className="navbar link hover">
          Create URL
        </NavLink>
        <NavLink to="/url-list" className="navbar link hover">
          URL List
        </NavLink>
      </nav>
    </div>
  );
};
