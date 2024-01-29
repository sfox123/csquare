import React from "react";
import gpt3Logo from "../../logo.svg";
import logo from "../../assets/sc.png";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>
          <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4 className="gpt3__footer-copyright">Powered by</h4>
        <img src={logo} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      {/* <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>123 UK</p>
        <p>011-123456</p>
        <p>creativesquare.net</p>
      </div> */}
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
