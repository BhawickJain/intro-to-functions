"use strict";

/*
Write a function that, given two numbers, returns a boolean representing whether or not the two numbers are equal.

You may assume that the numbers are always integers (i.e. whole numbers).

function:
=========
name: isEqual

parameters:
	- NUM_ONE: number
	- NUM_TWO: number

return: boolean

pseudocode:
============
if NUM_ONE is equal to NUM_TWO
	return True
else
	return False

*/

/**
 *
 * @param {number} NUM_ONE - first number
 * @param {number} NUM_TWO - second number
 * @returns {boolean} - boolean of whether they are equal
 */
function isEqual(NUM_ONE, NUM_TWO) {
  if (NUM_ONE == NUM_TWO) {
    return true;
  } else {
    return false;
  }
}

module.exports = isEqual;
