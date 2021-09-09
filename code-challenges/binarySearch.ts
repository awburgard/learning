/*
Given an array of integers nums which is sorted in ascending order, 
and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.
 */

function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1)
}

function binarySearchHelper(array, target, left, right) {
  if (left > right) return -1
  const middle = Math.floor((left + right) / 2)
  const potentialMatch = array[middle]
  if (target === potentialMatch) {
    return middle
  } else if (target < potentialMatch) {
    return binarySearchHelper(array, target, left, middle - 1)
  } else {
    return binarySearchHelper(array, target, middle + 1, right)
  }
}

console.log(binarySearch([1, 2, 3, 4, 33, 56, 90, 100], 102))
