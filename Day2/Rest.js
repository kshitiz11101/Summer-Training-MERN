function x(...args){
return 1;
}
function x(...agrs){
console.log(args);
}
x(10,20,30,40,50);
//output:  (5) [10, 20, 30, 40, 50]
// 0: 101: 202: 303: 404: 50
//   length: 5
//     [[Prototype]]: Array(0)
function x(a,b,c,d,...agrs){
console.log(args);
}
x(10,20,30,40,50,60,70);
// output: (3) [50, 60, 70]0: 501: 602: 70
//   length: 3
//     [[Prototype]]: Array(0)

