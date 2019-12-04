// The every() method tests whether all elements in the array pass the test implemented by the provided function. 
// It returns a Boolean value.  

const products = [
    { item: 'item 1', price: 10 },
    { item: 'item 2', price: 20 },
    { item: 'item 3', price: 30 },
    { item: 'item 4', price: 40 },
    { item: 'item 5', price: 50 },
    { item: 'item 6', price: 60 }
];

products.every(item => item.price > 30); // output: false (false because the price of item 1, item 2 and item 3 are not greater than 30)

products.every(item => item.price < 100); // output: true (true because the price of all the items in the array are less than 100)