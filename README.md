# Javascript '+' operator unexpected behavior
This repository demonstrates an unexpected behavior of the '+' operator in Javascript when dealing with string concatenation.  The `+` operator, when used with a string and a number, will perform string concatenation instead of numerical addition. This is a common source of error for developers unfamiliar with Javascript's type coercion rules.

## How to reproduce
1. Clone this repository.
2. Run `node bug.js`.
3. Observe the unexpected output.

## Solution
The solution involves using the `parseInt()` or `parseFloat()` functions to explicitly convert the string to a number before performing the addition, or using the ES6 `+` operator with template literals.
