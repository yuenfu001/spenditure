import React from "react";
import Logo from "../../images/footer-logo.svg";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import Linkedin from "../../images/linkedin.svg";
import Arrow from "../../images/forward-arrow.svg";

import "./footer.css";

const CompanyMenu = () => (
  <div className="menu-content">
    <h1>Company</h1>
    <p>
      <a href="/">About us</a>
    </p>
    <p>
      <a href="/">Contact us</a>
    </p>
    <p>
      <a href="/">Security</a>
    </p>
    <p>
      <a href="/">Goals</a>
    </p>
    <p>
      <a href="/">Our Terms</a>
    </p>
    <p>
      <a href="/">Terms of Service</a>
    </p>
  </div>
);
const FeatureMenu = () => (
  <div className="menu-content">
    <h1>Features</h1>
    <p>
      <a href="/">Budgeting</a>
    </p>
    <p>
      <a href="/">Save with Friends</a>
    </p>
    <p>
      <a href="/">Tracker</a>
    </p>
    <p>
      <a href="/">Mobile App</a>
    </p>
    <p>
      <a href="/">Credit Score</a>
    </p>
  </div>
);

const HelpMenu = () => (
  <div className="menu-content">
    <h1>Spenditure Help</h1>
    <p>
      <a href="/">FAQs</a>
    </p>
    <p>
      <a href="/">Privacy</a>
    </p>
    <p>
      <a href="/">Terms</a>
    </p>
    <p>
      <a href="/">Account Management</a>
    </p>
    <p>
      <a href="/">Accounts & Transactions</a>
    </p>
  </div>
);
const ContactMenu = () => (
  <div className="menu-content">
    <h1>Contact Us</h1>
    <p>
      <a href="/">spenditure01@gmail.com</a>
    </p>
    <p>
      <a href="/">+2349032559169</a>
    </p>
    <div className="contact-us-icons">
      <a
        href="https://www.facebook.com/Spenditure-101039145805966/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer-icon" src={Facebook} alt="facebook" />
      </a>
      <a
        href="https://instagram.com/spenditure_"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer-icon" src={Instagram} alt="instagram" />
      </a>{" "}
      <a
        href="https://www.linkedin.com/company/spenditure/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer-icon" src={Linkedin} alt="linkedin" />
      </a>
    </div>
  </div>
);
const NewsletterMenu = () => (
  <div className="menu-content">
    <h1>Stay up to date</h1>
    <p className="subscribe">
      <a href="/">Subscribe to our newsletter</a>
    </p>
    <div className="position-relative">
      <input type="text" className="footer-input" placeholder="Email" />
      <img
        className="input-arrow position-absolute"
        style={{ left: "230px", top: "10px" }}
        src={Arrow}
        alt="arrow"
      />
    </div>
  </div>
);



const Footer = () => {

let today = new Date();
let thisYear = today.getFullYear();

  return (
    <div className="spenditure__footer section__padding">
      <div className="spenditure__footer-container">
        <div className="footer-logo-container">
          <img className="footer-logo" src={Logo} alt="logo" />
        </div>
        <div className="spenditure__footer-menu">
          <CompanyMenu />
          <FeatureMenu />
          <HelpMenu />
          <ContactMenu />

          <NewsletterMenu />
        </div>
        <div className="spenditure__footer-mobile-container">
          <div className="spenditure__footer-mobile">
            <div className="first-row">
              <CompanyMenu />
              <FeatureMenu />
            </div>
            <div className="second-row">
              <HelpMenu />
              <ContactMenu />

              <NewsletterMenu />
            </div>
          </div>
          <div className="footer-logo-container-mobile">
            <img className="footer-logo" src={Logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className="text-center">
        <p>&copy; Copyright Spenditure {thisYear}</p>
      </div>
    </div>
  );
};

export default Footer;
