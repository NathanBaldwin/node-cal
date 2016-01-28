(function() {
"use strict"

module.exports = {makeLengthArray: makeLengthArray,
                  arrayToString: arrayToString}


const zellars = require('./zellars.js');
const getFirstLine = require('./getFirstLine.js');
let day = 0;

 function makeLengthArray (year, month, requestedDay) {
  "use strict"
    const getLength = require('./getLength.js');
    let lengthArray = [];
    let monthLength = getLength(month);
    let i=1;
    console.log("month length", monthLength);
    for (i; i<= monthLength; i++) {
      i <= 9? lengthArray.push(" " + i): lengthArray.push(i.toString());
    }
    //console.log("lengthArray:", lengthArray);
    return lengthArray;

  }


  function arrayToString (year, month, requestedDay) {
    "use strict"
    let numArray = makeLengthArray(year, month);

    day = zellars.getDay(year, month, requestedDay)
    console.log("day:", day);

    let spaces = " ".repeat((day * 3)-1);
    numArray.unshift(spaces);

    //numarray.unshift("\n");
    var firstLine = getFirstLine(year, month, day);

    console.log(firstLine);
    let headerLabels = "\nSu Mo Tu We Th Fr Sa\n"

    //console.log("numArray:", numArray);

    let numString = numArray.join(" ");
    //console.log(header);
    console.log(numString);

    console.log("numString[7]", numString[7]);

    let monthCal = firstLine + headerLabels + numString;
    console.log(monthCal);

    return numString;
  }
})();





