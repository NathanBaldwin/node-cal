const {expect} = require('chai');

const {execSync} = require('child_process');

describe('test suite', () => {
  it('hould handle the current month', () => {
    const goal = execSync('cal').toString();
    const output = execSync('./cal.js').toString();

    expect(output).to.equal(goal);
  });
});

