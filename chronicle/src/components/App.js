import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      This is a sample stateful React application.
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
