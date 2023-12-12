import React, { useState } from "react";

// second step

const PracticeForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
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

  //   third step

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prev) => [...prev, values]);
    setValues({
      name: "",
      email: "",
      password: "",
      gender: "",
      isIndian: false,
    });
  };

  console.log(userData);

  // first step

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
            type="gender"
            placeholder="enter your gender"
            onChange={handleChange}
            name="gender"
            value={values.gender}
          />

          <label htmlFor="">Are you an Indian?</label>
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
