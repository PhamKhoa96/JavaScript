var employees = [
    {name: 'Luan', age: 22},
    {name: 'Nam', age: 23},
    {name: 'Hoa', age: 12}
];

for(var employee of employees){
    console.log(employee.name, employee.age);
}

//For... in...: dùng cho key
var myDog = {
    name: 'Ngao',
    age: 1,
    weight: 5
};

for(var key in myDog){
    console.log(key, myDog[key]);   //myDog.name //myDog['name']
}