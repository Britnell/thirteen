"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <label>
          Count: {count}
          <button onClick={() => setCount((c) => c + 1)}>+</button>
        </label>
      </div>
    </div>
  );
}
