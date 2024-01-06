import React, { useState } from "react";

const Practic2 = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    tel: "",
  });

  let { type, name, email } = useState([]);

  const handleChange = (e) => {
    let { values, email, type } = e.target;
    setValues((prev) => ({ ...prev, id: Date.now(), [name]: setValues }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues((prev) => [...prev, values]);
    setValues({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="tel"
          placeholder="enter your phone number"
          name="phone"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Practic2;
