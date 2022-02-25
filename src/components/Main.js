import React from "react";
import { Link } from "react-router-dom";
import Google from "../images/download-google.svg";
import Apple from "../images/download-apple.svg";

const IncomeExpense = () => {
  return (
    <div className="row p-3">
      <div
        className="card col"
        style={{ borderRadius: "20px !important", maxWidth: "140px" }}
      >
        <div style={{ padding: "10px 10px" }}>
          <img
            style={{ color: "#41dc65" }}
            src="./Images/web-backarrow.svg"
            alt=""
          />
        </div>
        <p style={{ marginLeft: "10px", color: "#1d2025" }}>Income</p>
        <h5
          style={{
            padding: "0px 10px 10px",
            marginTop: "-15px",
            color: "#41dc65",
          }}
        >
          $6,593.75
        </h5>
      </div>

      <div
        className="card col mx-3"
        style={{ borderRadius: "20px !important", maxWidth: "140px" }}
      >
        <div style={{ padding: "10px 10px" }}>
          <img src="./Images/webforwardarrow.svg" alt="" />
        </div>
        <p style={{ marginLeft: "20px", color: "#1d2025" }}>Expense</p>
        <h5
          style={{
            padding: "0px 10px 10px",
            marginTop: "-15px",
            color: "#ff5460",
          }}
        >
          $2,645.50
        </h5>
      </div>
    </div>
  );
};

const Balance = () => {
  return (
    <div
      className="card p-3"
      style={{ backgroundColor: "#3ec3d5", borderRadius: "20px" }}
    >
      <div className="d-inline-flex">
        <span>
          <h6 style={{ color: "white" }}>My Balance</h6>

          <h4 style={{ color: "white" }}>$25,520</h4>
        </span>

        <span className="" style={{ marginLeft: "auto" }}>
          <img src="./images/calender.svg" alt="" />
        </span>
      </div>
    </div>
  );
};

const Activities = () => {
  return (
    <div className="col card border-0">
      <div className="card-body">
        <h4 className="card-title">View recent activities</h4>

        <h5 className="card-subtitle mt-4">
          RECENT ACTIVITIES
          <Link to="/">
            <img
              style={{ marginLeft: "110px" }}
              src="./Images/dots-icon.svg"
              alt=""
            />
          </Link>
        </h5>

        <div className="card-text">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td>
                  <img src="./images/medicine-icon.svg" alt="" />
                </td>
                <td>
                  Gaurthier Grewitt <br />
                  Friday, 11:08 PM
                </td>
                <td style={{ fontWeight: "bold", color: "green" }}>$340.00</td>
              </tr>
              <tr>
                <td>
                  <img src="./Images/medicine-icon.svg" alt="" />
                </td>
                <td>
                  Sukhbirpal Dhalan <br />
                  Thursday, 01:00 AM
                </td>
                <td style={{ fontWeight: "bold", color: "green" }}>$328.22</td>
              </tr>
              <tr>
                <td>
                  <img src="./Images/medicine-icon.svg" alt="" />
                </td>
                <td>
                  Lia Castro <br />
                  Tuesday, 07:12 AM
                </td>
                <td style={{ fontWeight: "bold", color: "red" }}>$2561.34</td>
              </tr>
              <tr>
                <td>
                  <img src="./Images/medicine-icon.svg" alt="" />
                </td>
                <td>
                  Xu Xuefeng <br />
                  Tuesday, 10:34 PM
                </td>
                <td style={{ fontWeight: "bold", color: "green" }}>$931.12</td>
              </tr>
              <tr>
                <td>
                  <img src="./Images/medicine-icon.svg" alt="" />
                </td>
                <td>
                  Lia Castro <br />
                  Sunday, 05:40 PM
                </td>
                <td style={{ fontWeight: "bold", color: "green" }}>$128.43</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div>
      <div className="">
        <div className="d-flex-xs card home-card pt-2 px-2 pe-2 mt-4 mb-5">
          <div className=" card-body d-flex justify-content-between px-1 pb-1">
            <div className="">
              <h3
                className="card-title"
                style={{ textAlign: "left", color: "white" }}
              >
                Home
              </h3>
              <h5
                className=""
                style={{ textAlign: "left", color: "#fcfcfd80" }}
              >
                Hello, Maria
              </h5>
            </div>
            <div className="card-text" style={{ display: "flex" }}>
              <img
                style={{ width: "100px", marginLeft: "auto" }}
                src="./Images/custmer-img.svg"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col d-none d-md-block">
              <IncomeExpense />
            </div>
            <div className="col">
              <Balance />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="d-none d-md-block">
            <Activities />
          </div>

          <div className="col card border-0">
            <div className="card-body">
              <h4 className="card-title">Download the mobile App</h4>
              <div>
                <Link to="/">
                  <img src={Google} alt="google-playstore" />
                </Link>{" "}
                <Link to="/">
                  <img src={Apple} alt="Apple-store" />
                </Link>
              </div>

              <h5 className="card-subtitle mt-4">
                Total Categories
                <span style={{ marginLeft: "110px" }}>
                  <Link to="/">See all</Link>
                </span>
              </h5>

              <div className="card-text">
                <table style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <td>
                        <img src="./Images/grocery.svg" alt="" />
                      </td>
                      <td>
                        Grocery <br />
                        15 Aug, 2020
                      </td>
                      <td style={{ fontWeight: "bold" }}>$243.00</td>
                    </tr>
                    <tr>
                      <td>
                        <img src="./Images/Ipadpro.svg" alt="" />
                      </td>
                      <td>
                        ipad Pro 2020 <br />
                        10 Aug, 2020
                      </td>
                      <td style={{ fontWeight: "bold" }}>-$799.00</td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          style={{ width: "30px", height: "30px" }}
                          src="./Images/Uber.svg"
                          alt=""
                        />
                      </td>
                      <td>
                        Uber <br />5 Mar 2020
                      </td>
                      <td style={{ fontWeight: "bold" }}>+$50.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
