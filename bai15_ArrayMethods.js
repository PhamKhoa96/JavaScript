/**
 * a.concat(b)
 * a.push(b)
 * a.pop()
 * a.shift()
 * a.unshift()
 * 
 * tự đọc trên MDN (Mozilla Developer Network)
 * google keyword: array method
 * a.slice
 * a.splice
 */

 var a = [1, 2, 3];
 var b = [10, 20];
 var c = b.concat(a);
 console.log(c);

 a.push(5);
 console.log(a);

 a.pop();
 console.log(a);

 a.shift();
 console.log(a);

 a.unshift(9);
 console.log(a);

