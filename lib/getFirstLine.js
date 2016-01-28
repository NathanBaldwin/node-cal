module.exports = (year, month, day) =>  {
  "use strict"
  const longMonth = require('./getMonth');
  //console.log("month:", month);
  //console.log("longMonth:", longMonth(year, month));

  //console.log("year, month:", longMonth(year, month), year);

  return longMonth(year, month) + year;

}
