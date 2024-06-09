import React, { useState } from "react";
import axios from "axios";
import "./FormComponent.css";

const FormComponent = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Invalid email format");
      return;
    }
    try {
      const response = await axios.post("http://3.228.97.110:9000/api", {
        email,
      });
      if (response.status === 200) {
        setMessage("Form Submitted");
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setMessage("Invalid email domain");
      } else {
        setMessage("An error occurred");
      }
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="button" type="submit">
          Contact Me
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FormComponent;
