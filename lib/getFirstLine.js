module.exports = (year, monthNum, day) =>  {
  "use strict"
  const longMonth = require('./getMonth');
  //console.log("month:", month);
  //console.log("longMonth:", longMonth(year, month));

  //console.log("year, month:", longMonth(year, month), year);

  const monthsObj = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  }
  const monthString = monthsObj[monthNum];
  let yearString = year || '';
  if (year !== undefined) {
    yearString = " " + yearString;
  }

  let headerString = monthString + yearString;

  let stringLength = headerString.length;
  let numOfSpaces = parseInt((20 - stringLength)/2);
  let spaces = " ".repeat(numOfSpaces);
  let firstLine = spaces + headerString;
  //console.log("################################################");
  //console.log(firstLine);
  return firstLine;

}
