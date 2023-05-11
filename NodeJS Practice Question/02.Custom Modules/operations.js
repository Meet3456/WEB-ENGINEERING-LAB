exports.add = (a, b) => {
    return a + b;
  };
  
  exports.subtract = (a, b) => {
    return a - b;
  };
  
  exports.multiply = (a, b) => {
    return a * b;
  };
  
  exports.divide = (a, b) => {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  };
  