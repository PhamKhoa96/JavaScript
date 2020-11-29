var numbers =[1, 2, 3, 4];

var sum = numbers.reduce(function(a, b){
    console.log(a, b);
    return a + b;
});     // ở vòng lặp đầu tiên: gán 2 phần tử đầu tiên của mảng cho a, b
console.log(sum);

var sumInit = numbers.reduce(function(a, b){
    console.log(a, b);
    return a + b;
}, 0);  // ở vòng lặp đầu tiên: lấy số 0 gán cho a và phần tử đầu tiên của mảng cho a
console.log(sumInit);

var orders = [
    {name: 'A', quantity: 2, unitPrice: 100},
    {name: 'B', quantity: 1, unitPrice: 200},
    {name: 'C', quantity: 3, unitPrice: 400}
];
var total = orders.reduce(function(c, d){
    return c + d.quantity*d.unitPrice
}, 0);  //đặt giá trị init ban đầu là 0
console.log(total);


//bài tập
var items =['Tom', 'Bill', 'Kim'];
var stringItems = items.reduce(function(e, f){
    return e + '<' + f +'>'
},'');
console.log(stringItems);
