// The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
// It returns a Boolean value. 

const products = [
    { item: 'item 1', price: 10 },
    { item: 'item 2', price: 20 },
    { item: 'item 3', price: 30 },
    { item: 'item 4', price: 40 },
    { item: 'item 5', price: 50 },
    { item: 'item 6', price: 60 }
];

products.some(item => item.price > 30); // output: true (true beacuse the price of item 4, item 5 and item 6 are greater than 30)

products.some(item => item.price > 100); // output: false (there is no item in the array which which has price greater than 100)