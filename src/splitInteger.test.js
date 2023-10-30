'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts
  if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(20, 4))
    .toEqual([5, 5, 5, 5]);
});

test(`should return a part equals to a value
  when splitting into 1 part`, () => {
  expect(splitInteger(2, 1))
    .toEqual([2]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(10, 4))
    .toEqual([2, 2, 3, 3]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(3, 5))
    .toEqual([0, 0, 1, 1, 1]);
});
