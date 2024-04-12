// Traditional function expression
const traditionalFunction = function (a: number, b: number) {
    return a + b;
  };
  
  // Converted to arrow function
  const arrowFunction = (a: number, b: number) => a + b;
  
  console.log(traditionalFunction(5, 3)); // Outputs: 8
  console.log(arrowFunction(5, 3)); // Outputs: 8
  // Demonstrates the conversion of a traditional function expression to an arrow function.