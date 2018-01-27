function add(){
    var sum=0;
    for(var i=0;i<arguments.length; i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log(add(1,2,4,5));
console.log(add(1,2,4));
console.log(add(5));
console.log(add(1,2,4,5,6,7,8,9));


var values = [1,2,3,4,5,6,7,8,9,10];

console.log(add.apply(null,values));