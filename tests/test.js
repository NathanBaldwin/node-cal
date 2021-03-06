"use strict"
const {expect} = require('chai');

const {execSync} = require('child_process');

describe('test suite', () => {
  
  describe('CLI', () => {
      it('should handle the current month', () => {
        const goal = execSync('cal').toString();
        const output = execSync('./cal.js').toString();
        expect(output).to.equal(goal);
    });
  });
  describe("Zeller's congruence", () => {
    const zellers = require('../lib/zellars.js');
    console.log("zellars.test", zellers.test);

    const getMonth = require('../lib/getMonth.js');
    console.log("get month module:", getMonth());
    const makeMonth = require('../lib/makeMonth.js');

    
    const getFirstLine = require('../lib/getFirstLine.js')

    describe('.modifiedMonth', () => {
      it('return 13 for January', () => {
        expect(zellers.modifiedMonth(1)).to.equal(13);
      });
      it('return 14 for February', () => {
        expect(zellers.modifiedMonth(2)).to.equal(14);
      });
       it('return 3 for March', () => {
        expect(zellers.modifiedMonth(3)).to.equal(3);
      });
    });

    describe('.modifiedYear', () => {
      it('returns 2015 for Jan 2015', () => {
        expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      });
       it('returns 2015 for Feb 2016', () => {
        expect(zellers.modifiedYear(2016, 2)).to.equal(2015);
      });
       it('returns 2017 for Mar 2017', () => {
        expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
      });
    });

    describe('.getDay', () => {
      it('returns 2 (Tuesday) for March 1, 2016', () => {
        expect(zellers.getDay(2016, 3, 1)).to.equal(2);
      });
      it('returns 3 (Wednesday) for March 1, 2000', () => {
        expect(zellers.getDay(2000, 3, 1)).to.equal(3);
      });
      it('returns 1 (Monday) for March 1, 2100', () => {
        expect(zellers.getDay(2100, 3, 1)).to.equal(1);
      });
      it('returns 0 (Sunday) for March 1, 2200', () => {
        expect(zellers.getDay(2200, 3, 2)).to.equal(0);
      });
      it('returns 4 (Thurs) for March 1, 2300', () => {
        expect(zellers.getDay(2300, 3, 1)).to.equal(4);
      });
      it('returns 3 (Wed) for January 1, 2014', () => {
        expect(zellers.getDay(2014, 1, 1)).to.equal(3);
      });
      describe('get month', () => {
      it('returns ......January for 2016, 1', () => {
        expect(getFirstLine(2016, 1)).to.equal("    January 2016");
       });
      it('returns ......February for 2016, 2', () => {
        expect(getFirstLine(2016, 2)).to.equal("   February 2016");
       });
      it('returns ......March for 2016, 3', () => {
        expect(getFirstLine(2016, 3)).to.equal("     March 2016");
       });
     });
     describe('get month AND year', () => {
      it('returns Febrary 2016 for 2016 2', () => {
        expect(getFirstLine(2016, 2)).to.equal("   February 2016");
      });
     });
     describe('get length of month', () => {
      const getLength = require('../lib/getLength.js');
      it('returns 28 for February', () => {
        expect(getLength(2)).to.equal(28);
      });
       it('returns 30 for February', () => {
        expect(getLength(3)).to.equal(31);
      });
       it('returns 31 for February', () => {
        expect(getLength(4)).to.equal(30);
      });
     });
     describe('Inject correct number of spaces on first week', () => {
       const makeMonth = require('../lib/makeMonth.js');

        xit('returns an array of 1-31 for January', () => {
        expect(makeMonth.makeLengthArray(2015, 1, 1)).to.equal([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])
      });
      xit('returns a string, replacing commas with spaces', () => {
        expect(makeMonth.arrayToString(2015, 1, 1)).to.equal(" 1,  2,  3,  4,  5,  6");
      });
     });
     describe('Should be able to handle leap years', () => {
      const leapYear = require('../lib/leapYear.js');
      it('return 29 days in Feb 2012', () => {
        expect(leapYear.leapYearTest(2012)).to.equal(true);
      });
      it('returns 28 days in Feb 2014', () => {
        expect(leapYear.leapYearTest(2014)).to.equal(false);
      });
      it('displays 29 days for Feb 2012', () => {
        expect(makeMonth.arrayToString(2012, 2, 1) + "\n").to.equal(execSync('cal February 2012').toString());
      });
      it('displays 28 days for Feb 2014', () => {
        expect(makeMonth.arrayToString(2014, 2, 1) + "\n").to.equal(execSync('cal February 2014').toString());
      });
    });
    describe('Should be able to handle 5 week months', () => {

       it('returns 6 "week lines" for five week month', () => {
       expect(makeMonth.arrayToString(2015, 10, 1) + "\n").to.equal(execSync('cal October 2015').toString());
      });
      it('returns 6 "week lines" for four week month', () => {
       expect(makeMonth.arrayToString(2014, 2, 1) + "\n").to.equal(execSync('cal February 2014').toString());
      });
    });
   });
  });
describe('Make Year', () => {
  const createYear = require('../lib/createYear.js');
  it('should handle a specified year', () => {
    let goal = execSync('cal 2016').toString().split("\n");
    let output = execSync('./cal.js 2016').toString().split("\n");
        expect(output).to.equal(goal);
    });
  it('should create an array of month headers', () => {
      expect(createYear.createMonthHeaders(2016)).to.equal(execSync('cal 2016').toString());
    });
  it('should create arrays for each week', () => {
      expect(createYear.createMonthNumStrings(2016)).to.equal(execSync('cal 2016').toString());
    });
  it('should display 4 rows of 3 weeks', () => {
      expect(createYear.createYearCal(2016)).to.equal(execSync('cal 2016').toString());
    });
  });

});

