import React from 'react';

const CounterDisplay = (props) => {
  return (
    <div class="counter-label">
      Current value is:{' '}
      <span class="counter-label-value">{props.count}</span>
    </div>
  );
};

export default CounterDisplay;
