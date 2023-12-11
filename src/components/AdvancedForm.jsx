import React, { useState } from "react";

const AdvancedForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    isIndian: false,
    gender: "",
  });

  const handleChange = (e) => {
    let { value, name, checked, type } = e.target;

    if (type === "checkbox") {
      setValues((prev) => {
        return { ...prev, [name]: checked };
      });
    } else {
      setValues((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  console.log(values);

  return (
    <div>
      <form>
        <input
          type="text"
          value={values.name}
          onChange={handleChange}
          name="name"
          placeholder="enter name"
        />
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          name="email"
          placeholder="enter email"
        />
        <input
          type="password"
          value={values.password}
          placeholder="enter password"
          onChange={handleChange}
          name="password"
        />
        <label htmlFor="">Are you an Indian?</label>
        <input
          type="checkbox"
          checked={values.isIndian}
          onChange={handleChange}
          name="isIndian"
        />
        gender:
        <label htmlFor="">
          Male
          <input
            type="radio"
            name="gender"
            value="male"
            checked={values.gender === "male"}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          female
          <input
            type="radio"
            name="gender"
            value="female"
            checked={values.gender === "female"}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AdvancedForm;
