import React from 'react';
import utils from '../utils';

const StarsDisplay = (props) => {
  return (
    <>
      {utils.range(1, props.count).map((x) => (
        <div key={x} className="star" />
      ))}
    </>
  );
};

export default StarsDisplay;
