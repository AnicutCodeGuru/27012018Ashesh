var a = 10;
console.log(a);
function abc(){
    console.log(a); // Variable hoisting
    var a =20;
    b=30;
}
abc()
console.log(b);

   
  /***
   * All the variables declared will be brought on to the top. We can use the  variable before its declared.
   * this is called varibale hoisting in Javascript
   */

/**
 * 10  -> 2
 * 10  -> 4
 * undefined -> 9
 * 
 */


