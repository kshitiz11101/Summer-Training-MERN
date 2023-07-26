// functions types
// Q! WAP to print area and perimeter of a rectangle by taking inputs from the user using prompt .
// 1.Normal function:
function Area_and_Perimeter() {
    let a=parseInt(prompt("Enter the length"));
    // length=window.prompt();
     let b=parseInt(prompt("Enter the width"));
    // width=window.prompt();
    area=a*b;
   perimeter=2*(a+b);
    console.log("area is:",area)
        console.log("and perimeter is: ",perimeter);
}
// output: Area_and_perimeter
// area is: 20
 // and perimeter is:  18


//2.Arrow function:
const Area_Perimeter=()=>{
    let a=parseFloat(prompt("Enter the length"));
 let b=parseFloat(prompt("Enter the width"));
    area=a*b;
    perimeter=2*(a+b);
    console.log("Area is :",area);
    console.log("Perimeter is :",perimeter);
};
// output:Area_Perimeter()
// Area is : 36
// Perimeter is : 24 


// 3.Anonymous Functions
function area_and_perimeter() {
   
    var area=function(x,y) {
        return x*y;
    }
    var perimeter=function(x,y) {
        return 2*(x+y);
    }
    var cal=function(x,y) {
        
        return [area,perimeter];
    }
    return {cal};
}
// function calls:
//  area_and_perimeter().cal()[0](2,2);
// area_and_perimeter().cal()[1](2,2);
// output:4
// 8

// 4. Name Functions

function area_and_perimeter() {
   
    var area=function area(x,y) {
        return x*y;
    }
    var perimeter=function perimeter(x,y) {
        return 2*(x+y);
    }
    var cal=function result(x,y) {
        
        return [area,perimeter];
    }
    return {cal};
}

// function calls:
//  area_and_perimeter().cal()[0](2,4);
// area_and_perimeter().cal()[1](2,4);
// output:8
// 12

// Q2 importance of arrow functions?
// ans-->Arrow functions have a shorter syntax compared to traditional function expressions, which makes the code more readable.
 // One of the most significant advantages of arrow functions is the way they handle the this keyword. In regular functions, the value of this is dynamically determined based on how the function is called, which can lead to confusion and bugs. Arrow functions, on the other hand, do not bind their own this value but instead inherit it from the surrounding code. This behavior is known as lexical scoping, and it simplifies the context in which this is used within a function.
// Arrow functions do not have their own arguments object. Instead, they inherit the arguments from the enclosing scope, typically the nearest non-arrow function. This can be beneficial in avoiding conflicts and creating clearer code.
// As mentioned earlier, arrow functions can have an implicit return for concise single-expression functions. If the function body contains only one expression, that expression's result is automatically returned without needing to use the return keyword.



// Q3 WAP to print date using 4 types of functions

// 1.Tradition Function
function time(){
let d=new Date();
let y=d.getFullYear();
let m=String(d.getMonth() + 1).padStart(2, '0');
let day = String(d.getDate()).padStart(2, '0');
let formattedDate = `${y}-${m}-${day}`;
 console.log(formattedDate);
  
}

  
// 2. Arrow Functions
const time = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate);
};

// 3 Anonymous Function




