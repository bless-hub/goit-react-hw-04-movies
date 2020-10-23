import ReactLoading from "react-loading";
import React from "react";

const Loader = () => (
  <div style={{ marginLeft: "auto", marginRight: "auto", width: "10px" }}>
    <ReactLoading type="bubbles" color="#FF4500" height={50} width={50} />
  </div>
);
export default Loader;
