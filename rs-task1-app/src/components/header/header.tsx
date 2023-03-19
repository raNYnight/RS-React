import React, { Component } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <div className="header">
      <ul className="header-list">
        <li>
          <button
            className="header-button"
            onClick={handleHomeClick}
            disabled={location.pathname === "/"}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="header-button"
            onClick={handleAboutClick}
            disabled={location.pathname === "/about"}
          >
            About Us
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
