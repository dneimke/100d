import React from 'react';

const StarsDisplay = (props) => {
  return (
    <>
      {Array.from({ length: props.count }, (_, i) => i).map((x) => (
        <div key={x} className="star" />
      ))}
    </>
  );
};

export default StarsDisplay;
