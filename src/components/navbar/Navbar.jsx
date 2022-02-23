import React, { useState } from "react";
import Logo from "../../images/nav-logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <p className="fw-bold">
        <a
          href="https://dev-spenditure.pantheonsite.io/blog/"
          target="_blank"
          rel="noreferrer"
        >
          Blog
        </a>
      </p>
      <p className="fw-bold">
        <a href="/">Services</a>{" "}
      </p>
      <p className="fw-bold">
        <Link to="/about">About</Link>
      </p>
      <p className="fw-bold">
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
        <div id="logo" className="me-5">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
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
              border: "1px solid red",
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
                <Link to="/login">
                  {" "}
                  <button
                    className="btn w-100"
                    style={{
                      width: "63px",
                      backGround: "white",
                      color: "black",
                      border: "1px solid red",
                      borderColor: "red",
                    }}
                  >
                    Sign in
                  </button>{" "}
                </Link>
                <Link to="/signup">
                  <button
                    type="button"
                    className="btn btn-danger w-100"
                    style={{ fontSize: "10px" }}
                  >
                    Create a free account
                  </button>
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
