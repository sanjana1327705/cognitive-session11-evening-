import React, { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button text="+" handleClick={handleIncrement}/>
      <Button  text="-" handleClick={handleDecrement} />
      <Button  text="Reset" handleClick={handleReset} />
    </div>
  );
}



export default Counter;
