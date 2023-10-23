const dates = require("./funksjoner")

test("return true for years divisible by 4 but not by 100", () => {
    expect(dates.isLeapYear(2004)).toBe(true);
    expect(dates.isLeapYear(2012)).toBe(true);
});

test("return for years divisble by 400", () => {
    expect(dates.isLeapYear(2000)).toBe(true);
    expect(dates.isLeapYear(2400)).toBe(true);
});

test("return false for years not divisible by 4", () => {
    expect(dates.isLeapYear(2003)).toBe(false);
    expect(dates.isLeapYear(2017)).toBe(false);
});

test("return false for years divisible by 100 but not by 400", () => {
    expect(dates.isLeapYear(100)).toBe(false);
    expect(dates.isLeapYear(300)).toBe(false);
});