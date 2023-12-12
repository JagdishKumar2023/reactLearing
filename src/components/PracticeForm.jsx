import React, { useState } from "react";

const PracticeForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    isIndian: false,
  });

  const [userData, setUserData] = useState([]);

  const handleChange = (e) => {
    const { type, checked, value, name } = e.target;
    // console.log(name, value);

    if (type === "checkbox") {
      setValues((prev) => ({ ...prev, id: Date.now(), [name]: checked }));
    } else {
      setValues((prev) => ({ ...prev, id: Date.now(), [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prev) => [...prev, values]);
    setValues({
      name: "",
      email: "",
      password: "",
      isIndian: false,
    });
  };

  console.log(userData);

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
            placeholder="enter name"
          />
          <input
            type="email"
            value={values.email}
            name="email"
            onChange={handleChange}
            placeholder="enter email"
          />
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="enter password"
          />

          <input
            type="checkbox"
            checked={values.isIndian}
            onChange={handleChange}
            name="isIndian"
          />

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PracticeForm;
