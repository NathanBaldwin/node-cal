(function() {
"use strict"
module.exports = {
  modifiedMonth: modifiedMonth,
  modifiedYear: modifiedYear,
  getDay: getDay
};

  function modifiedMonth (month) {
    if (month < 3) {
      return month + 12;
    } else {
      return month;
    }
  }

  function modifiedYear (year, month) {
   if (month < 3) {
    return year - 1;
   } else {
    return year;
   }
  }

  function getDay (year, month, day) {
    let updatedYear = modifiedYear(year, month);
    let updatedMonth = modifiedMonth(month);
    var h = (day + parseInt(((updatedMonth + 1) * 26) / 10) + updatedYear
             + parseInt(updatedYear / 4) + 6 * parseInt(updatedYear / 100)
             + parseInt(updatedYear / 400) - 1) % 7;
    return h;
  }
})();

