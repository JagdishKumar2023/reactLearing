import React, { useState } from "react";

const InputValue = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="type something..."
      />
    </div>
  );
};

export default InputValue;
