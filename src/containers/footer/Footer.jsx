import React from "react";
import gpt3Logo from "../../logo.svg";
import logo from "../../assets/logo.png";
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
        {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
        <p>
          <br /> "The future is already here, it's just not evenly distributed"
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        {/* <h4 className="gpt3__footer-copyright">Powered by</h4> */}
        <img src={logo} alt="gpt3_logo" />
      </div>
      {/* <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div> */}
      <div className="gpt3__footer-links_div">
        <h4>Address - 60 Crawford Road | Hatfield | Hertfordshire | AL10 0PE | UK</h4>
        <br/>
        <h4>Contact No. +44 7494 043147</h4>
        <br/>
        <h4>Email – info@sharasolutions.co.uk</h4>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024. Shara Solutions Ltd. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
