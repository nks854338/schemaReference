import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3300/users/register", formData);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="Container">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div>
            <div>Name</div>
            <div>
              <input type="text" name="name" onChange={handleChange} required />
            </div>
          </div>
          <div>
            <div>email</div>
            <div>
              <input type="email" name="email" onChange={handleChange} required />
            </div>
          </div>
          <div>
            <div>Password</div>
            <div>
              <input type="password" name="password" onChange={handleChange} required />
            </div>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;
