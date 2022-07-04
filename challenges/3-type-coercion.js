'use strict';

console.log("5 === 50 -> ", 5 === 50, 'should be ', false) //  since 5 is not equal to 50
console.log("50 === 50 -> ", 50 === 50, 'should be ', true)
console.log("50 === '50' -> ", 50 === '50', 'should be ', false) //  since the number 50 is not equal to the string '50'
console.log("1 === true -> ", 1 === true, 'should be ', false) //  since the number 1 is not equal to the boolean true

// Grouped Data Structures
console.log('\n')
console.log("[1, 2, 3] === [1, 2, 3] -> ", [1, 2, 3] === [1, 2, 3], 'is false in JavaScript') //  ? Why
console.log("[1, 2, 3] == [1, 2, 3] -> ", [1, 2, 3] == [1, 2, 3], 'is true in JavaScript') //  ? Why

// Type Coercion
console.log('\n')
console.log("1 + 50 ->", 1 + 50, 'should be', 51)
console.log("'1' + '50' ->", '1' + '50', 'should be', '150')

// Type Coercion with the `.repeat` example
console.log('\n')
console.log('"hi".repeat("3")', "hi".repeat("3"), '// => "hihihi", since "3" is coerced into the number 3')
console.log('"hi".repeat("p")', "hi".repeat("p"), '// => "", since "p" is coerced into a number, and JS designers decided that non-obvious number strings should be 0')
console.log('"hi".repeat([3])', "hi".repeat([3]), '// => "hihihi", since the array [3] is coerced into the number 3')
console.log('"hi".repeat([3, 4])', "hi".repeat([3, 4]), '// => "", since the array [3, 4] is coerced into the number 0')
console.log('"hi".repeat(null)', "hi".repeat(null), '// => "", since the array null is coerced into the number 0')
// non-number values are considered 0


// strict
console.log('\nstrict')
console.log("5 === 5", 5 === 5, '=>', true) // normal case
console.log("5 === '5'", 5 === '5', '=>', false) // since the number 5 is not equal to the string '5'
console.log("5 === '6'", 5 === '6', '=>', false) // since the number 5 is not equal to the string '6'
console.log("1 === true", 1 === true, '=>', false) // since the number 1 is not equal to the boolean true
console.log("2 === true", 2 === true, '=>', false) // since the number 2 is not equal to the boolean true

// loose
console.log('\nloose')
console.log("5 == 5", 5 == 5, '=>', true) // normal case
console.log("5 == '5'", 5 == '5', '=>', true,) //due to type coercion of '5' into 5
console.log("5 == '6'", 5 == '6', '=>', false) // since '6' is coerced into 6, which is not equal to 5
console.log("1 == true", 1 == true, '=>', true,) //since true is coerced into the number 1
console.log("2 == true", 2 == true, '=>', false) // since true is coerced into the number 1

// famous counter-intuitive examples
console.log('\ncounter-intuitive examples')
console.log("![] == []", '->', ![] == [], '=>', true) // true, bizarrely:
// a. The ! (NOT) operator coerces a value into a boolean
// b. ![] is coerced into false
// c. Comparing boolean to an array (which is an Object): different types
// d. Since Type(x) is Boolean, by #6, convert it to a number
// e. The value false is coerced into the number 0, so we now compare 0 and []
// f. Since Type(x) is now Number and Type(y) is Object, by #8 convert y, [], into a primitive value
// g. Turns out that the empty array, [], is converted into a primitive value as the empty string, ""
// h. Now comparing 0 and "", so by #4, convert "" into a number
// i. The empty string, "", is coerced into the number 0
// j. Comparing 0 and 0 - yes, they are equal!

console.log("[] == []", '->', [] == [], '=>', false) // still false, sadly
// a. Same type, so no coercion
// b. Comparing two arrays (objects), a grouped data structure - look for reference equality, or identity
// c. They're actually two different arrays in memory, so they're not referentially equal


// === is more predictable and so it best practice to use this.