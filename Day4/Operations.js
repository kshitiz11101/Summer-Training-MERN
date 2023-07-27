// Arrow functions:
// 1.Short hand function
// 2.Recommmended for single line function
// 3.Lexical this it use.
// 4.Not behave like function constructor(cannot create object using arrow function)
// 5.Arrow fuctions used in Declarative statements. 


// Number of operations:

// Q1.Create an Array of Salaries.Now do the sum of salaries greater than 10000(only declarative).
// hint: reduce function
var salary=[5000,6000,10000,12000,15000,20000];
const i=0;
const sum = salary.reduce((accumulator, currentValue) => {
  if (currentValue > 10000) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}, i);
console.log(sum);
// Output: 47000

// Q2.Get the maximum salary from the array
// hint: reduce function
var maxi = salary.reduce((accumulator, initialValue)=>{
return Math.max(accumulator,initialValue);
});

// Output: 20000

// Q3.Count those salaries whose>10000(Note: don't use filter)
// Hint: reduce function

var count=0;
count=salary.reduce((accumulator,currentvalue)=>{
    if(currentvalue>10000){
       return count=count+1;
    }
    else{
        return accumulator;
    }
},i);

//Output: 3


// 4.Maintain an array of employee {array of objects}
// Now sort the employee by name and salary

var emp=[{name:"aman",salary:10000},
         {name:"tushar",salary:2000},
         {name:"akhil",salary:12000},
         {name:"akshat",salary:3000}
         ]
let emp2=emp.sort((a,b)=>a.name.localeCompare(b.name));

// Output:
// 0: {name: 'akhil', salary: 12000}
// 1: {name: 'akshat', salary: 3000}
// 2: {name: 'aman', salary: 10000}
// 3: {name: 'tushar', salary: 2000}
// length: 4

let emp3=emp.sort((a,b)=>a.salary-b.salary);

// Output: 
// 0: {name: 'tushar', salary: 2000}
// 1: {name: 'akshat', salary: 3000}
// 2: {name: 'aman', salary: 10000}
// 3: {name: 'akhil', salary: 12000}
// length: 4



// Q5.In employee salary,add the 10% tax in each employee salary and store in a new array.So don't modify the original array
// Hint: filter,map

var hike = emp.map(function(employee) {
  return {salary: employee.salary + (employee.salary * 0.10) };
});

// Output: 
// 0: {salary: 2200}
// 1: {salary: 3300}
// 2: {salary: 11000}
// 3: {salary: 13200}












 
