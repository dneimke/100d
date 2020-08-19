import React from 'react';

const CounterButton = (props) => {
  const updateCount = () => props.setCount(props.value);

  return (
    <button className="btn btn-info mr-2" onClick={updateCount}>
      {props.value}
    </button>
  );
};

export default CounterButton;
