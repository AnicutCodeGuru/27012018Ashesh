function add(a,b){
     var sum = a+b;
     return sum;
}

console.log(add(2,4));
console.log(add(4,6));
console.log(add(1,9));


//Diffrent ways of calling a function

console.log(add(10,20));
console.log(add.call(null,20,30));
console.log(add.apply(null,[25,30]));
