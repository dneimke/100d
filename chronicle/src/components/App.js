import React, { useState } from 'react';
import CounterButton from './CounterButton';
import CounterDisplay from './CounterDisplay';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div class="wrapper">
      <header class="page-header">
        <div class="app-logo">Logo</div>
        <div class="app-menu">
          <span>Menu Item 1</span>
          <span>Menu Item 2</span>
          <span>Menu Item 3</span>
        </div>
        <div class="app-profile-link">Profile Link</div>
      </header>
      <div class="content">
        <CounterButton
          count={count}
          setCount={() => setCount(count + 1)}
        />
        <CounterDisplay count={count} />
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
