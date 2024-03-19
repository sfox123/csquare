import React, { useState } from "react";
import axios from "axios";
import tv from "../../assets/tv.png";
import footage from "../../assets/tv.mp4";
import "./header.css";

const Header = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (email === "") {
      setError(true);
      setLoading(false);
    } else {
      try {
        await axios.post(
          "https://us-central1-bute-backend.cloudfunctions.net/app/cMail",
          {
            email: email,
            name: email,
            message: "Interested in News Letter !!!",
          }
        );
        setSubmitted(true);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    }
  };

  const buttonText = () => {
    if (loading) {
      return "Loading...";
    } else if (submitted) {
      return "✔️";
    } else if (error) {
      return "❌ Retry";
    } else {
      return "Let's Talk !";
    }
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let&apos;s Build Something amazing with Shara solutions
        </h1>
        <p>
          Cutting-edge websites and lightning-fast mobile apps – that's our
          React specialty. Sprinkle in some CSS magic, a dash of Figma/Adobe
          mastery, plus potent online marketing, and your digital presence
          explodes!
        </p>

        <div className="gpt3__header-content__input">
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <button type="button" onClick={handleSubmit}>
            {buttonText()}
          </button>
          <br />
        </div>
        {error && <span style={{ color: "orangered" }}>Input valid email</span>}
      </div>

      <div className="gpt3__header-image relative">
        <video
          className="absolute top-[48%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%]"
          src={footage}
          autoPlay
          loop
          muted
        />
        <img className="" src={tv} alt="footage" />
      </div>
    </div>
  );
};
export default Header;
