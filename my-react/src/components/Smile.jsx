import React, { useState } from "react";
import "./Smile.css";

function Smile({ src, counterClick }) {
  const [counter, setCounter] = useState(0);

  const handleClickSmile = () => {
    const updatedCounter = counter + 1;
    setCounter(updatedCounter);
    counterClick(updatedCounter, src);
  };

  return (
    <div>
      <img className="image" src={src} onClick={handleClickSmile} alt="smile" />
      <p>Counter: {counter}</p>
    </div>
  );
}

export default Smile;