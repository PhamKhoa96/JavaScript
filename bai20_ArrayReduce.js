var numbers = [1, 3, 6, 8];

var sumNumbers = numbers.reduce(function(a, b){
    console.log(a, b);
    return a+b;
});

console.log('sum of elements in array: ', sumNumbers);

//giỏ hàng
var orders = [
    {name: 'A', quantity: 2, unitPrice: 100},
    {name: 'B', quantity: 1, unitPrice: 200},
    {name: 'C', quantity: 3, unitPrice: 400}
];
//dùng reduce để tính tổng giá đơn hàng
var priceEachItem = orders.map(function(x){
    return x.quantity * x.unitPrice;
});

var sum = priceEachItem.reduce(function(c, d){
    return c+d;
});

console.log(sum);

/**
 * không làm theo cách dưới đây được mà muốn làm như vậy thì phải dùng reduce + init
var sum = priceEachItem.reduce(function(c, d){
    return c.quantity*c.unitPrice + d.quantity*d.unitPrice;
});
 */
