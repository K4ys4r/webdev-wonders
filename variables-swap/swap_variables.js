// By function
function byFunction(a, b) {
  console.log(`\nSwapping ${arguments.callee.name}`);

  console.log(`\tInitial values : a = ${a}, b = ${b} `);

  function swap_variables(a, b) {
    return { a: b, b: a };
  }
  ({ a, b } = swap_variables(a, b));

  console.log(`\tAfter swapping : a  = ${a}, b = ${b}`);
}

//By temporary variable
function byTemporaryVariable(a, b) {
  console.log(`\nSwapping ${arguments.callee.name} `);
  console.log(`\tInitial values : a = ${a}, b = ${b} `);
  let temp = a;
  a = b;
  b = temp;
  console.log(`\tAfter swapping : a  = ${a}, b = ${b} `);
}

// By array expression
function byArrayExpression(a, b) {
  console.log(`\nSwapping ${arguments.callee.name} `);
  console.log(`\tInitial values : a = ${a}, b = ${b} `);
  [a, b] = [b, a];
  console.log(`\tAfter swapping : a  = ${a}, b = ${b} `);
}

// By  (+) & (-)  operators
function byAddAndSubtraction(a, b) {
  console.log(`\nSwapping ${arguments.callee.name} `);
  console.log(`\tInitial values : a = ${a}, b = ${b} `);
  b = a + b;
  a = b - a;
  b = b - a;
  console.log(`\tAfter swapping : a  = ${a}, b = ${b} `);
}

// By (*) & (/) operators
// Attention of floating-point precision issues
// Attention of for nul number to avoid dividing by 0
function byMultiplicationAndDivision(a, b) {
  if (a == 0 || b == 0) throw Error("Number must be not nul");
  console.log(`\nSwapping ${arguments.callee.name} `);
  console.log(`\tInitial values : a = ${a}, b = ${b} `);
  b = a * b;
  a = b / a;
  b = b / a;
  console.log(`\tAfter swapping : a  = ${a}, b = ${b} `);
}
// By XOR (^) operator
function byXor(a, b) {
  console.log(`\nSwapping ${arguments.callee.name} `);
  console.log(`\tInitial values : a = ${a}, b = ${b} `);
  b = b ^ a;
  a = a ^ b;
  b = b ^ a;
  console.log(`\tAfter swapping : a  = ${a}, b = ${b} `);
}

// Swapping variables
// An example
let a = 7;
let b = 5;

byFunction(a, b);
byAddAndSubtraction(a, b);
byArrayExpression(a, b);
byMultiplicationAndDivision(a, b);
byXor(a, b);
