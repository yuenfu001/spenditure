import React from "react";
import Navbar from "./navbar/Navbar";
import ABOUTIMG1 from "../images/aboutus1.png";
import ABOUTIMG2 from "../images/aboutus2.png";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import Linkedin from "../images/linkedin.svg";
import Footer from "./footer/Footer";
import Updates from "./Updates";

const AboutUs = () => {
  return (
    <div>
      <div className=" fixed-top navbarScroll bg-light shadow-sm">
        <Navbar />
      </div>

      <section className="container text-center d-flex flex-column justify-content-center" style={{marginTop: '100px'}}>
        <div className="about-logo1 mt-5">
          <img src={ABOUTIMG1} alt="aboutus1" className="about-logo11" />
        </div>

        <div className="px-5 text-center card mt-5 border-0">
          <div className="card-body px-5">
            <h1 className="card-title">Our Mission</h1>
            <div className="card-text px-5">
              <p style={{ padding: "0px 230px" }}>
                To help you keep track of your finances through smart budgeting
                wise investments and savings as well as to help you reach your
                goals faster through consistent tracking.
              </p>
            </div>
          </div>
        </div>

        <div className="px-5 border-0 card mt-5">
          <div className="card-body px-5">
            <h1 className="card-title">About Us</h1>
            <div className="card-text px-5">
              <p style={{ padding: "0px 150px" }}>
                Spenditure is a finance app built by a team of intellectuals to
                help its users perform periodic financial activities without
                constrictions or complications. Research has it that Nigeria has
                over 200 million people and over 40% of the population are poor.
                Spenditure aims to make at least 50% of the populace financially
                independent. Spenditure helps users set short and long term
                financial goals, track budget(s) efficiently and also encourage
                users by giving rewards after meeting targeted goals. Spenditure
                affords you the opportunity to save conveniently. It deducts 10%
                of your income and divert it to your savings. <br />
                “Save and invest more, spend less and secure the future”
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col card mt-5 px-5 border-0">
            <h2 className="card-title">Our Believe</h2>
            <div className="card-body bg-dark text-light text-start px-4 shadow-lg rounded">
              <p className="card-text px-4">
                Our belief is that spenditure will make many people financially
                free due to the budgeting feature embedded in our app; it will
                make people to control how they spend theirmoney and direct
                their finances to a fertile soil where the money can grow into
                sustainable wealth.
              </p>
            </div>
          </div>

          <div className="col card mt-5 px-5 border-0">
            <h2 className="card-title">Our Goal</h2>
            <div className="card-body bg-danger text-light text-start px-4 shadow-lg rounded">
              <p className="card-text px-4">
                Research has it that Nigeria has over 200 million people and
                over 40% of the population are poor. Spenditure aims to make at
                least 50% of the populace financially independent.
              </p>
            </div>
          </div>

          <div className="col card mt-5 px-5 border-0">
            <h2 className="card-title">Our Vision</h2>
            <div className="card-body bg-success text-light px-4 text-start shadow-lg rounded">
              <p className="card-text px-4">
                To be the ultimate and financial app that will help 1 million
                people to be financially free
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 row">
          <div className="col">
            <img src={ABOUTIMG2} alt="aboutus2" />
          </div>
          <div className="col d-flex flex-column text-start align-items-center justify-content-center">
            <div>
              <h1 className="">Contact Us</h1>
              <p>
                Email: Spenditure@gmail.com <br />
                Call: +2349000000000
              </p>
            </div>

            <div className="text-start">
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
        </div>
      </section>
      <div className="mt-5">
        <Updates />
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
