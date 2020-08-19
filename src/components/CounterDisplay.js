import React from 'react';

const CounterDisplay = (props) => {
  return (
    <div className="counter-label">
      Current value is:{' '}
      <span className="counter-label-value">{props.count}</span>
    </div>
  );
};

export default CounterDisplay;
