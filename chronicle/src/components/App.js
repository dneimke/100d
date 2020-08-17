import React, { useState } from 'react';
import CounterButton from './CounterButton';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      This is a componentized React application.
      <br />
      <br />
      <CounterButton
        count={count}
        setCount={() => setCount(count + 1)}
      />
    </div>
  );
};

export default App;
