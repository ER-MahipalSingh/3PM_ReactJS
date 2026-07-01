import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    city: "surat",
  });

  const inputChangeHaler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={formHandler}>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            onChange={inputChangeHaler}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="text"
            placeholder="Enter your password"
            name="password"
            onChange={inputChangeHaler}
          />
        </div>

        <div>
          <label>City</label>
          <select name="city" onChange={inputChangeHaler}>
            <option value="surat">Surat</option>
            <option value="rajkot">Rajkot</option>
            <option value="baroda">Baroda</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
