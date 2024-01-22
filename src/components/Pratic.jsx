import React, { useState } from "react";

const Pratic = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const [userData, setUserData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
    console.log(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([...userData, inputValue]);
    setInputValue({ name: "", email: "", password: "", gender: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="enter you name"
          name="name"
          onChange={handleChange}
          value={inputValue.name}
        />
        <input
          type="email"
          placeholder="enter you email"
          name="email"
          onChange={handleChange}
          value={inputValue.email}
        />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          onChange={handleChange}
          value={inputValue.password}
        />
        <input
          type="gender"
          placeholder="enter you gender"
          onChange={handleChange}
          name="gender"
          value={inputValue.gender}
        />
        <button>submit</button>
      </div>
    </form>
  );
};

export default Pratic;
