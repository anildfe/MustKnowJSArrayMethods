// The forEach() method executes a provided function once for each array element.

const products = [
    { item: 'item 1', price: 10 },
    { item: 'item 2', price: 20 },
    { item: 'item 3', price: 30 },
    { item: 'item 4', price: 40 },
    { item: 'item 5', price: 50 },
    { item: 'item 6', price: 60 }
];

products.forEach(item => {
    console.log(item.price);
});

// output
// 10
// 20
// 30
// 40
// 50
// 60

// No operation for uninitialized values (sparse arrays)

const products2 = [
    { item: 'item 1', price: 10 },
    { item: 'item 2', price: 20 },
    { item: 'item 3', price: 30 },
    ,
    { item: 'item 4', price: 40 },
    { item: 'item 5', price: 50 },
    { item: 'item 6', price: 60 }
];

arproducts2r1.forEach(item => {
    console.log(item.price);
});

// output
// 10
// 20
// 30
// 40
// 50
// 60