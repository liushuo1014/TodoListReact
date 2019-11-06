// const square = function(x) {
//   return x * x;
// };
// console.log(square(8));

// // const squareArrow = x => {
// //   return x * x;
// // };

// const squareArrow = x => x * x;
// const fullName = "Shuo Liu";
// // const getFirstName = name => name.split(" ")[0];
// const getFirstName = fullName => {
//   return fullName.split(" ")[0];
// };
// console.log(getFirstName(fullName));
// const user = {
//   name: "shuo",
//   cities: ["San Jose", "Fremont", "San Diego"],
//   printEachCity() {
//     return this.cities.map(city => this.name + " has lived in " + city);
//   }
// };
// console.log(user.printEachCity());

const multiplier = {
  nums: [1, 2, 3, 4],
  multiplyBy: 4,
  mutiFunc: function() {
    return this.nums.map(n => n * this.multiplyBy);
  }
};
console.log(multiplier.mutiFunc()[0]);
