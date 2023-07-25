function time() {
  var date = new Date();
  var day = date.getDay();
  var days = {0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday"};

  console.log("Today is", days[day]);
  console.log(`Time is ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
}
