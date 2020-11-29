var numbers = [1, 2, 3, 4];
var evenNumbers = numbers.find(function(x){         //trả ra phần tử đầu tiên trong mảng thỏa mãn function
    return x%2 == 0;    //return true or false
});

console.log(evenNumbers);