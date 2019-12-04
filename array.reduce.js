// The reduce() method executes a reducer function (that you provide) on each element of the array, 
// resulting in a single output value.

const arr1 = [1, 2, 3, 4, 5];

console.log(arr1.reduce((accumulator, currentValue) => accumulator + currentValue)); 

// 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

// output: 15

console.log(arr1.reduce((accumulator, currentValue) => accumulator * currentValue, 2));

// 1
// 1 * 2 = 2
// 2 * 3 = 6
// 6 * 4 = 24
// 24 * 5 = 120
// 120 * 3 = 240

// output: 240