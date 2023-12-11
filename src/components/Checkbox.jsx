import React, { useState } from "react";

const Checkbox = () => {
  const [check, setCheck] = useState(false);

  console.log(check);
  return (
    <div>
      <div className="checkbox">
        Are you an India?
        <input
          type="checkbox"
          checked={check}
          onChange={(e) => {
            console.log(e);
            setCheck(!check);
          }}
        />
      </div>
    </div>
  );
};

export default Checkbox;
