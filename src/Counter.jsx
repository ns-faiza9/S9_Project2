import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => setCount(0);

  return (
    <div className="card">
      <h2 className="title">COUNTER</h2>

      <div className="count">{count}</div>

      <div className="counterBtns">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>

      <button className="resetBtn" onClick={reset}>
        RESET
      </button>
    </div>
  );
};

export default Counter;
