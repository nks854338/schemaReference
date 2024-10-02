import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://schema-reference-backend.vercel.app/users/login",
        formData
      );
      if (response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        setIsLoggedIn(true); // Update login state
        navigate("/home");
      } else {
        setErrorMessage("Login failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Invalid email or password :", error);
    }
  };

  return (
    <div className="Container">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div>
            <div>Email</div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div>
            <div>Password</div>
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        <div style={{ textAlign: "center" }}>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
