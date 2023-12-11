import React from "react";

// display data for maps

const Users = ({ userData }) => {
  console.log("userdata in users ", userData);
  return (
    <div>
      <div className="users">
        {userData.map((ele, idx) => (
          <div key={idx}>
            <h2>{ele.name}</h2>
            <h3>{ele.email}</h3>
            <h2>{ele.tel}</h2>
            <h3>{ele.gender}</h3>
            <h3>{ele.age}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
