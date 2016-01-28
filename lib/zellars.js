module.exports = {
  test: "this is a test",
  modifiedMonth: function(month) {
    if (month < 3) {
      return month + 12;
    } else {
      return month;
    }
  },
  modifiedYear: (year, month) => {
   if (month < 3) {
    return year - 1;
   } else {
    return year;
   }
  },
  getDay: (year, month, day) => {
    var h = (day + parseInt(((month + 1) * 26) / 10) + year
             + parseInt(year / 4) + 6 * parseInt(year / 100)
             + parseInt(year / 400) - 1) % 7;
    return h;
  }

};
