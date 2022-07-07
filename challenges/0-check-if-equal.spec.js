const isEqual = require('./0-check-if-equal')

test("isEqual finds the longest string in an array", () => {
  expect(isEqual(["it", "is", "a", "nice", "day"])).toBe("nice");
  expect(isEqual(["why", "hello", "to", "you"])).toBe("hello");
});

test("isEqual returns the earlier string in cases of joint longest strings", () => {
  expect(isEqual(["brave", "dance"])).toBe("brave");
});