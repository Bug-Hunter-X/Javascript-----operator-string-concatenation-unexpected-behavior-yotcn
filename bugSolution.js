```javascript
function myFunction(a, b) {
  return parseInt(a) + parseInt(b);
}

console.log(myFunction(5, '5')); // Expected output: 10

//Alternative solution using ES6 template literals
function myFunction2(a,b){
  return a + Number(b);
}
console.log(myFunction2(5,'5')); // Expected output: 10
```