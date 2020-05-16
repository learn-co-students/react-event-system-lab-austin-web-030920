import React from "react";

const Keypad = () => {
  const handleKeyUp = () => {
    console.log("Entering password...");
  };

  return (
    <div>
      <input onKeyUp={handleKeyUp} type="password" />
    </div>
  );
};

export default Keypad;
