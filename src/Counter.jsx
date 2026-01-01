import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0); // stop at 0
    }
  };

  const handleReset = () => setCount(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement} disabled={count === 0}>
        -
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Counter;
