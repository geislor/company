import React from "react";

const Header = props => {
  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#myPage">
              Logo
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#services">SERVICES</a>
              </li>
              <li>
                <a href="#portfolio">PORTFOLIO</a>
              </li>
              <li>
                <a href="#pricing">PRICING</a>
              </li>
              <li>
                <a href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Header;