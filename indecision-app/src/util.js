console.log("util.js is running");
const square = x => x * x;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
//only one emthod can be default
export { square, add, subtract as default };
 