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
      setValues((prev) => ({ ...prev, id: Date.now(), [name]: value }));
    } else {
      setValues((prev) => ({ ...prev, id: Date.now(), [name]: checked }));
    }
  };

  //   third step

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prev) => [...prev, values]); // doubt
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
            placeholder="enter name"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="enter email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="enter password"
            value={values.password}
            name="password"
            onChange={handleChange}
          />
          <input
            type="gender"
            placeholder="enter your gender"
            value={values.gender}
            name="gender"
            onChange={handleChange}
          />

          <label htmlFor="">Are you an Indian?</label>
          <input
            type="checkbox"
            checked={values.isIndian}
            name="isIndian"
            onChange={handleChange}
          />

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PracticeForm;
