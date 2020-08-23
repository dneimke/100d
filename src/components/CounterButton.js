import React from 'react';

const CounterButton = (props) => {
  return (
    <button
      className="btn btn-info mr-2"
      onClick={() => props.setCount(props.value)}
    >
      {props.value}
    </button>
  );
};

export default CounterButton;
