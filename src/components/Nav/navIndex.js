import React from "react";
import "./navCss.css";
import logo from "../../assets/images/bearboxlogo.jpg";

function Nav(props) {
  const { pages = [], activePage, setActivePage } = props;

  return (
    <header className="flex-row">
      <img src={logo} alt="logo" className="brand-logo" />
      
      <nav>
        <ul className="flex-row">
          <li className={`${activePage === "home" && "nav-active"}`}>
            <span onClick={() => setActivePage("home")}>
              <a href="#about">Home</a>
            </span>
          </li>

          <li className={`${activePage === "gallery" && "nav-active"}`}>
            <span onClick={() => setActivePage("gallery")}>Gallery</span>
          </li>

          <li className={`${activePage === "services" && "nav-active"}`}>
            <span onClick={() => setActivePage("services")}>Services</span>
          </li>

          <li className={`${activePage === "tutorials" && "nav-active"}`}>
            <span onClick={() => setActivePage("tutorials")}>Tutorials</span>
          </li>

          <li className={`${activePage === "contact" && "nav-active"}`}>
            <span onClick={() => setActivePage("contact")}>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
