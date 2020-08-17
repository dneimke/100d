import React from 'react';

const CounterButton = (props) => {
  const updateCount = () => props.setCount(props.count);

  return <button onClick={updateCount}>{props.count}</button>;
};

export default CounterButton;
