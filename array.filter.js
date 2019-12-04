// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const products = [
    { item: 'item 1', price: 10 },
    { item: 'item 2', price: 20 },
    { item: 'item 3', price: 30 },
    { item: 'item 4', price: 40 },
    { item: 'item 5', price: 50 },
    { item: 'item 6', price: 60 }
];

const result = products.filter(item => item.price <= 30);

console.log(result);

// output
//  [
//      { item: 'item 1', price: 10 },
//      { item: 'item 2', price: 20 },
//      { item: 'item 3', price: 30 }
//  ]