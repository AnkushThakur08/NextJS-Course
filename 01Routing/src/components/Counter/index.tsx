"use client";

import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>value of Counter {counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>Click Me</button>
    </div>
  );
};

export default Counter;
