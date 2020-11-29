var numbers = [1, 2, 3, 4];
var evenNumbers = numbers.filter(function(x){
    return x%2 == 0;    //return true or false
});

console.log(evenNumbers);