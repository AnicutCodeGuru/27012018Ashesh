/* Clousers is an approach in Javascript where we try to retain the state of a funciton even after its excution. 
   With the help of clousers we can bring in the concept of dynamic programming. */

   function counterCreator(incrementBy){
        count=0;
        return function(){
              count+=incrementBy;
              return count;
             }
   }

   var incrementBy1 = counterCreator(1);
   console.log(incrementBy1());
   console.log(incrementBy1());
   console.log(incrementBy1());
   console.log(incrementBy1());
   console.log(incrementBy1());
   
   
   var incrementBy5 = counterCreator(5);
   console.log(incrementBy5());
   console.log(incrementBy5());
   console.log(incrementBy5());
   console.log(incrementBy5());
   console.log(incrementBy5());




