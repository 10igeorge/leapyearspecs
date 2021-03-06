describe('leapYear', function() {
  it("is a series of letters" , function() {
    expect(leapYear()).to.equal(false);
  });
  it("is false for a year that is not divisble by 4, 100, or 400", function() {
    expect(leapYear(1993)).to.equal(false);
  });
  it("is divisible by 4", function() {
    expect(leapYear(2004)).to.equal(true);
  });
  it("is divisible by 100", function() {
    expect(leapYear(1900)).to.equal(false);
  });
  it("is divisible by 400", function() {
    expect(leapYear(2000)).to.equal(true);
  });
});
