const isEqual = require("./0-check-if-equal");

/*
test cases:
===========
isEqual(4, 4) should be True
isEqual(0, 0) should be True
isEqual(-4, -4) should be True
isEqual(4, -4) should be False
isEqual(0, 1) should be False
*/

test("isEqual returns true for input values that are equal", () => {
  expect(isEqual(0, 0)).toBe(true);
  expect(isEqual(4, 4)).toBe(true);
});

test("isEqual returns true for input values that not equal", () => {
  expect(isEqual(-4, -4)).toBe(true);
  expect(isEqual(4, -4)).toBe(false);
  expect(isEqual(0, 1)).toBe(false);
});
