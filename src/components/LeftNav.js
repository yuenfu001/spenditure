import React from "react";

const LeftNav = () => {
  <>
    <div
      className="ms-2"
      id="dots"
      style={{ display: "flex", padding: "20px" }}
    >
      <div
        style={{
          borderRadius: "50%",
          backgroundColor: "#3ec3d5",
          width: "16px",
          height: "16px",
          margin: "0px",
        }}
      ></div>
      <div
        style={{
          borderRadius: "50%",
          backgroundColor: "#ff5460",
          width: "16px",
          height: "16px",
          margin: "0px 10px",
        }}
      ></div>
      <div
        style={{
          borderRadius: "50%",
          backgroundColor: "#41dc65",
          width: "16px",
          height: "16px",
          margin: "0px",
        }}
      ></div>
    </div>
  </>;
};

export default LeftNav;
