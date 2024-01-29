import React, { useState } from "react";
import axios from "axios";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
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
          Let&apos;s Build Something amazing with Creative Square
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
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

        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>6+ Engineers from world wide</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} />
      </div>
    </div>
  );
};
export default Header;
