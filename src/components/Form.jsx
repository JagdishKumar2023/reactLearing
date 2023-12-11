import React, { useState } from "react";
import Users from "./Users";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  //   to save users data:-

  const [userData, setUserData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData([
      ...userData,
      { id: Date.now(), name, email, tel, gender, age },
    ]);
    // to black value
    setName("");
    setEmail("");
    setTel("");
    setGender("");
    setAge("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="enter phone number"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <input
          type="gender"
          placeholder="enter gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <Users userData={userData} />
    </div>
  );
};

export default Form;
