import React, { useState } from "react";

const AdvancedForm = () => {
  const [value, setValues] = useState({
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

  console.log(setValues);
};

export default AdvancedForm;
