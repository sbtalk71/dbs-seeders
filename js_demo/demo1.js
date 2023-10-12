/*
function add(a,b){
    return a+b;
}*/


var add = function (a, b) {
    return a + b;
}

var multiply=(function(a,b){
                return a*b;
                })(4,5);

console.log(multiply);

var result = add(4, 6);

console.log(result);


var add2=(x,y)=>x+y;

console.log(add2(7,9));

var subham='Hello';
console.log(subham.length)
console.log(Math.max(3,4,5,7,9))