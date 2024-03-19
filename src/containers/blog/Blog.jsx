import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "./blog.css";
import { styles } from "../../styles";
import { slideIn } from "../../utils/motion";
import EarthCanvas from "../../components/Earth";
import SectionWrapper from "../../hoc/SectionWrapper";

const Blog = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const response = await axios.post(
        // "http://localhost:5000/bute-backend/us-central1/app/cMail",
        "https://us-central1-bute-backend.cloudfunctions.net/app/cMail",
        form
      );
      setloading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error(error);
      setloading(false);
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.5, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          className="mt-12 flex flex-col gap-8"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to discuss?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            type="submit"
          >
            {loading ? "Sending ..." : "Submit"}
          </button>
        </form>
      </motion.div>
      <motion.div
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        variants={slideIn("right", "tween", 0.2, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Blog, "contact");
