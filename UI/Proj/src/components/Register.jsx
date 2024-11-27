import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    childName: "",
    childAge: "",
    parentsEmail: "",
    parentsPhone: "",
    isDyslexic: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/register", formData);

      if (response.data.success) {
        toast.success("Registration successful!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        setFormData({
          username: "",
          email: "",
          password: "",
          childName: "",
          childAge: "",
          parentsEmail: "",
          parentsPhone: "",
          isDyslexic: false,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Registration failed! Please try again.",
        {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        }
      );
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="childName"
          placeholder="Child's Name"
          value={formData.childName}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="childAge"
          placeholder="Child's Age"
          value={formData.childAge}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="parentsEmail"
          placeholder="Parent's Email"
          value={formData.parentsEmail}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="parentsPhone"
          placeholder="Parent's Phone"
          value={formData.parentsPhone}
          onChange={handleChange}
          required
        />
        <label>
          <input
            type="checkbox"
            name="isDyslexic"
            checked={formData.isDyslexic}
            onChange={handleChange}
          />
          Dyslexic
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
