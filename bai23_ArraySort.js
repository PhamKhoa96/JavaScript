var numbers = [2, 9, 3, 4, 1];

var ascendingNumbers = numbers.sort(function(a, b){
    return a - b;   // giá trị trả về < 0 thì a sẽ xếp trước b
                    //                > 0               sau
                    //                = 0               giữ nguyên
});
console.log(ascendingNumbers);

var decendingNumbers = numbers.sort(function(a, b){
    return b - a;
});
console.log(decendingNumbers);

//Ví dụ
