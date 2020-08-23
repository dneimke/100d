const utils = {
  sum: (arr) => arr.reduce((acc, curr) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i),
};

export default utils;
