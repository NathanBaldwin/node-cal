"use strict"

module.exports = {makeLengthArray: makeLengthArray,
                  arrayToString: arrayToString,
                  createWeeks: createWeeks,
                  headerLabels: headerLabels}


const zellars = require('./zellars.js');
const getFirstLine = require('./getFirstLine.js');
let day = 0;

 function makeLengthArray (year, month, requestedDay) {
  
    const getLength = require('./getLength.js');
    const leapYear = require('./leapYear.js');
    let lengthArray = [];
    let monthLength = getLength(month);
    (leapYear.leapYearTest(year)) && (month ===2)? monthLength ++ : monthLength;
    //"use strict"
    let i=1;
    //console.log("month length", monthLength);
    for (i; i<= monthLength; i++) {
      i <= 9? lengthArray.push(" " + i): lengthArray.push(i.toString());
    }
    //console.log("lengthArray:", lengthArray);
    return lengthArray;

  }


  function headerLabels () {
    return "\nSu Mo Tu We Th Fr Sa\n";

  }

  function createWeeks (year, month, requestedDay, requestedWeek) {
    let numArray = makeLengthArray(year, month);
    let spaces = "";
    day = zellars.getDay(year, month, requestedDay)
    //console.log("day:", day);


    if (day > 0) {
      spaces = " ".repeat((day * 3)-1);
    }

    numArray.unshift(spaces);

    //numarray.unshift("\n");
    var firstLine = getFirstLine(year, month, day);

    //console.log(firstLine);

    //console.log("numArray:", numArray);

    let numString = numArray.join(" ");
    //console.log(header);
    //console.log(numString);

    //console.log("numString.length", numString.length);

    let weeks = {}

    let week1 = numString.substring(0,20);
    let week2 = numString.substring(21,41);
    let week3 = numString.substring(42,62);
    let week4 = numString.substring(63,83);
    let week5 = numString.substring(84,104);
    let week6 = numString.substring(105, 125);

    weeks.week1 = week1;
    weeks.week2 = week2;
    weeks.week3 = week3;
    weeks.week4 = week4;
    weeks.week5 = week5;
    weeks.week6 = week6;

    //console.log('weeks:', weeks)



    return weeks[requestedWeek];

  }

  function arrayToString (year, month, requestedDay) {
    //console.log("################## arrayToString Function ########");
    
    let numArray = makeLengthArray(year, month);
    let spaces = "";
    day = zellars.getDay(year, month, requestedDay)
    //console.log("day:", day);


    if (day > 0) {
      spaces = " ".repeat((day * 3)-1);
    }

    numArray.unshift(spaces);

    //numarray.unshift("\n");
    var firstLine = getFirstLine(year, month, day);

    //console.log(firstLine);

    //console.log("numArray:", numArray);

    let numString = numArray.join(" ");
    //console.log(header);
    //console.log(numString);

    //console.log("numString.length", numString.length);

    let week1 = numString.substring(0,20);
    let week2 = "\n" + numString.substring(21,41);
    let week3 = "\n" + numString.substring(42,62);
    let week4 = "\n" + numString.substring(63,83);
    let week5 = "\n" + numString.substring(84,104);
    let week6 = "\n" + numString.substring(105, 125);
    //console.log("week 5:", week5);
    //console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    //console.log("week 5", week5.toString())
    //console.log("week 6", week6.toString());

    let monthCal = firstLine +
                   headerLabels() +
                   week1 +
                   week2 +
                   week3 +
                   week4 +
                   week5 +
                   week6;
    //console.log(monthCal);
    //console.log(monthCal);

    return monthCal;
  }





