/**
 * In Javascript we create classes using constructor functions
 */

 function Person(fname,lname,age){
    this.fname = fname;
    this.lname=lname;
    this.age = age;

    this.sleep=function(){
        console.log("Person is sleeping");
    }
    
    this.eat=function(){
        console.log("Person is eating");
    }
 }

var ravi = new Person("Ravi","Kumar",23);
ravi.sleep();


function Employee(fname,lname,age,empId,salary){
    Person.call(this,fname,lname,age) ;
    this.empId=empId;
    this.salary=salary;

    this.eat=function(){
        console.log("Employee is eating");
    }
}


var emp1 = new Employee("Vijay","Reddy",40,1001,10000);
console.log(emp1);
emp1.eat()
emp1.sleep();



