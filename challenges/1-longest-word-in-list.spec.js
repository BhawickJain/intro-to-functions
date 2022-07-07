const longestInList = require("./1-longest-word-in-list");

/*
test cases:
===========
longestInList(["England", "Wales", "Scotland", "Northern Ireland"]) should be "Northern Ireland"
longestInList(["the", "quick", "brown", "fox"]) should be "quick"
longestInList(["hello", "hi", "greetings", "hey"]) should be "greetings"
*/

test("longestInList returns longest string among array of strings", () => {
  expect(
    longestInList(["England", "Wales", "Scotland", "Northern Ireland"])
  ).toBe("Northern Ireland");
  expect(longestInList(["the", "quick", "brown", "fox"])).toBe("quick");
  expect(longestInList(["hello", "hi", "greetings", "hey"])).toBe("greetings");
});
