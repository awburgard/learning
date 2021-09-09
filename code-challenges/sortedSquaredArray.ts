/*
Write a function that takes a non-empty array of integers that are sorted in ascending order
and return a new array of the same length with the squares of the original intergers
also sorted in ascending order
*/

function sortedSquaredArray(arr) {
  const newArr = []
  for (const value of arr) {
    newArr.push(Math.pow(value, 2))
  }

  return newArr.sort((a, b) => a - b)
}
