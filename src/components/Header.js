import React from "react";
import "./Header.css";
import ezlogo from "../Assets/ezlogo.png";
import FormComponent from "./FormComponent";

const Header = () => {
  return (
    <div className="grid">
      <header className="header">
        <img src={ezlogo} className="logo" alt="logo" />
        {/* <h1>EZ Works</h1> */}
        <p className="para1">A Suite Of Business Support Services</p>
        <p className="para2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...
        </p>
      </header>
      <FormComponent />
    </div>
  );
};

export default Header;
