import React, { useState } from "react";

const Preactices = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const [userData, setUserData] = useState([]);

  const handleChange = (e) => {
    const { type, cheaked, value, name } = e.target;

    if (type === "checkbox") {
      setValues((prev) => ({
        ...prev,
        id: Data.now(),
        [name]: cheaked,
      }));
    } else {
        setValues((prev)=> ({...prev, id: Data.now() [name]: value}))
    }
  };

  const handleSubmit = () => {
    e.preventDefault();
    setUserData((prev) => [...prev, values]);
    setValues({
      name: "",
      email: "",
    });
  };

  console.log(userData);

  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter name"
            onChange={handleChange}
            value={values.name}
            name="name"
          />
          <input
            type="email"
            placeholder="enter name"
            onChange={handleChange}
            value={values.email}
            name="email"
          />
          {/* <input
          type="password"
          placeholder="enter name"
          onChange={handleChange}
          name="password"
        />
        <input
          type="text"
          placeholder="enter name"
          onChange={handleChange}
          name="gender"
        />  */}

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Preactices;
