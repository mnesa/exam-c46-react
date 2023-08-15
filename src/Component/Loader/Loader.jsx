/* eslint-disable no-unused-vars */
import React from "react";
import loader from "../../assets/loading.gif";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
