const censorMessage = require("./2-censor-message");

/*
test cases:
===========
censorMessage("don't mess with cats", ["mess"]) should be "don't ***** with cats"
censorMessage("Are you sure that this is safe", ["are", "is"]) should be "***** you sure that this ***** safe"
censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"]) should be "I CANNOT ***** *****"
*/

test("censorMessage returns true for input values that are equal", () => {
  expect(censorMessage("don't mess with cats", ["mess"])).toBe(
    `don't ****** with cats`
  );
  expect(censorMessage("Are you sure that this is safe", ["are", "is"])).toBe(
    `****** you sure that this ****** safe`
  );
  expect(
    censorMessage("I CANNOT HELP YOU", ["can", "not", "help", "you"])
  ).toBe(`I CANNOT ****** ******`);
});
