"use strict"
module.exports = (month) =>  {
  
  //console.log("month:", month);
  var days31 = [1, 3, 5, 7, 8, 9, 10];
  var days30 = [4, 6, 9, 11];
  var days28 = [2];

  if (days31.indexOf(month) !== -1) {
    return 31;
  }
  if (days30.indexOf(month) !== -1) {
    return 30;
  }
  if (days28.indexOf(month) !== -1) {
    return 28;
  }
}
