import React from "react";
import Background from "../images/bg-img.jpg";
import Logo from "../images/Logo.svg";
import Reveal from "../images/reveal-pass.svg";
import Google from "../images/icons8-google.svg";
import { Link, Route, Routes } from "react-router-dom";
import SignUp from "./signUp/SignUp";
import LandingPage from "./landingPage/LandingPage";
import Home from "./Home";
import { useState } from "react";

const MyForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
};

const SignIn = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${Background})`,
        minHeight: "100%",
        minWidth: "100%",
        position: "fixed",
        width: "100%",
        height: "auto",
        top: "0",
        left: "0",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section
        className="d-block container d-flex flex-column justify-content-center"
        style={{ maxWidth: "400px" }}
      >
        <div className="text-center">
          <Link style={{ textDecoration: "none" }} to="/index">
            <img style={{ width: "80px" }} src={Logo} alt="logo" />{" "}
            <h6 className="text-light">SPENDITURE</h6>{" "}
          </Link>

          <Routes>
            <Route path="/index" element={<LandingPage />}></Route>
          </Routes>
        </div>
        <div className="card p-3" style={{ borderRadius: "20px" }}>
          <div className="card-body">
            <div className="card-title">
              <h4 className="text-center text-danger">
                Sign In to your Account
              </h4>
            </div>
            <div className="card-subtitle text-center">
              <h6 className="fw-bold">
                Don't have an Account?{" "}
                <Link className="text-danger" to="/signup">
                  Sign Up
                </Link>
              </h6>
              <Routes>
                <Route path="/signup*" element={<SignUp />}></Route>
              </Routes>
            </div>
            <div className="card-text mt-3">
              <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit()} className="form w-100">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control border-0 border-bottom shadow-none"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="name@domain.com"
                      name="email"
                      value={inputs.email || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 position-relative">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control border-0 border-bottom shadow-none"
                      id="exampleInputPassword1"
                      placeholder="***********"
                      name="password"
                      value={inputs.password || ""}
                      onChange={handleChange}
                    />{" "}
                    <span
                      style={{ right: "30px", cursor: "pointer" }}
                      className="position-absolute top-50 translate-end"
                    >
                      {" "}
                      <img src={Reveal} alt="reveal" />{" "}
                    </span>
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Remember me
                    </label>
                    <span className="float-end">
                      <a style={{ textDecoration: "none" }} href="/">
                        Forgot Password?
                      </a>
                    </span>
                  </div>

                  
                    <button
                      type="submit"
                      className="btn btn-info mt-3"
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        backgroundColor: "#3CB8C9",
                      }}
                    >
                      Login
                    </button>
                  <p className="text-center mt-3">or</p>

                  <div className="text-center d-flex justify-content-center">
                    <button
                      className="btn-google p-1 w-100 text-dark"
                      style={{ borderRadius: "10px" }}
                    >
                      <span>
                        <a className="text-center" href="/Bio">
                          <img
                            className="me-3"
                            style={{ width: "20px" }}
                            src={Google}
                            alt=""
                          />
                        </a>
                      </span>
                      Sign in with Google
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
      <section className="d-block d-sm-block d-md-none">
        <nav>
          <img src="./Images/Spenditure.svg" alt="" />
          <a style="text-decoration: none" href="#">
            Sign In
          </a>
        </nav>
        <section className="sign-up">
          <img className="signup-img" src="./Images/sign-up.svg" alt="" />

          <div>
            <h1 className="signup-desc">Sign in to your account</h1>

            <form action="" className="form">
              <label for="">Email/Mobile number</label>
              <input
                className="form-control"
                type="text"
                placeholder="name@domain.com"
              />
              <label for="">Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="************"
              />
              <div
                style="
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
              "
              >
                <span className="remember">
                  Remember me
                  <input s type="checkbox" />
                </span>

                <span className="forget">
                  <a style="text-decoration: none" href="">
                    Forgot Password?
                  </a>
                </span>
              </div>

              <button className="get-btn">Login</button>
              <span style="margin-top: -25px">or</span>
              <button
                className="btn-google"
                style="
                margin-top: 16px;
                width: 100%;
                background-color: white;
                color: black;
              "
              >
                Sign in with google
              </button>

              <img src="./Images/face-id.svg" alt="" />
            </form>
          </div>
        </section>
      </section> */}
    </div>
  );
};

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
  crossorigin="anonymous"
></script>;

export default SignIn;
