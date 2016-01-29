#!/usr/bin/env node --harmony_destructuring

'use strict';

const [,, ...args] = process.argv;
const getCalendar = require('./lib/makeMonth.js');
const makeMonthCal = getCalendar.arrayToString;

if (args.length === 2) {
   const [month, year] = args;
   let requestedMonth = args[1];
   //console.log("requestedMonth:", requestedMonth);
   let requestedYear = args[0];
   //console.log("requestedYear", requestedYear);
} else if (args.length === 1) {
  const [year] = args;

  //console.log(`generateYear(${year}`);
}else {
  let today = new Date();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getYear() + 1900;
  let currentMonthCal =  makeMonthCal(currentYear, currentMonth, 1);
  console.log(currentMonthCal);
}

//console.log(args);

//console.log("process.argv", process.argv);

