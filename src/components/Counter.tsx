import { useState } from "react";

import "./Counter.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
};
