import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", inputs);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          onChange={handleChange}
          required
          type="text"
          name="username"
          placeholder="username"
        />
        <input
          onChange={handleChange}
          required
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          onChange={handleChange}
          required
          type="password"
          name="password"
          placeholder="password"
        />
        <button onClick={handleSubmit}>Register</button>
        {error && <p>{error}</p>}
        <span>
          Do you have an account? <Link to="/login">Login</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Register;
