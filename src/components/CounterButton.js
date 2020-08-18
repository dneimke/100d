import React from 'react';

const CounterButton = (props) => {
  const updateCount = () => props.setCount(props.count);

  return <button onClick={updateCount}>+1</button>;
};

export default CounterButton;
