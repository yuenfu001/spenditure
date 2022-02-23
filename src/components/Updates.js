import React from "react";
import BG from "../images/update-bg.svg";
import ENVELOP from "../images/envelop.svg";

const Updates = () => {
  return (
    <div
      className="text-light text-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="p-5">
        <h1>Want our Latest Updates?</h1>

        <p className="mt-4">Subscribe to our newsletter</p>
        <form className="position-relative mt-5 d-flex justify-content-center">
          <span
            className="position-absolute start-10 translate-start"
            style={{ left: "480px", top: "8px" }}
          >
            <img src={ENVELOP} alt="envelop" />
          </span>
          <input
            className="ps-5 float-left form-control w-25 py-2"
            type="text"
            placeholder="Your Email"
          />
          <span
            className="position-absolute start-50 translate-end"
            style={{ right: "395px", top: "2px" }}
          >
            <button className="btn btn-dark  top-50 text-light">Submit</button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Updates;
