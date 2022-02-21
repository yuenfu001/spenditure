import React, { useState } from "react";
import logo from "../../images/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <p>
        <a href="https://dev-spenditure.pantheonsite.io/blog/">Blog</a>
      </p>
      <p>Services</p>
      <p>
        <a href="#about">About</a>
      </p>
      <p>
        <a href="#contact">Contact</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="spenditure__navbar">
      <div className="spenditure__navbar-links">
        <div className="spenditure__navbar-links-logo">
          <img className="logo-img" src={logo} alt="spenditure-logo" />
          <span className="spenditure__logo-text">
            <h3>Spenditure</h3>
          </span>
        </div>
        <div className="spenditure__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="spenditure__navbar-sign">
        <Link to="/login">
          {" "}
          <button
            className="btn"
            style={{
              width: "63px",
              backGround: "white",
              color: "black",
              borderColor: "red",
            }}
          >
            Sign in
          </button>{" "}
        </Link>
        <Link to="/signup">
          <button type="button" className="btn btn-danger">
            Create a free account{" "}
          </button>
        </Link>
      </div>
      <div className="spenditure__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#666"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#666"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="spenditure__navbar-menu_container">
            <div className="spenditure__navbar-menu_container-links">
              <Menu />
              <div className="spenditure__navbar-menu_container-links-sign">
                <Link to="/login"> Sign in</Link>
                <Link to="/signup">
                  <button type="button">Create a free account</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
