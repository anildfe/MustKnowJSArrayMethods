// The reduce() method executes a reducer function (that you provide) on each element of the array, 
// resulting in a single output value.

const arr1 = [1, 2, 3, 4, 5];

console.log(arr1.reduce((accumulator, currentValue) => accumulator + currentValue)); 

// 1 (initial value)
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

// output: 15

console.log(arr1.reduce((accumulator, currentValue) => accumulator * currentValue, 2));

// 2 (initial value)
// 2 * 2 = 4
// 4 * 3 = 12
// 12 * 4 = 48
// 48 * 5 = 240

// output: 240
