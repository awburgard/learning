/*
Given an array of integers nums which is sorted in ascending order, 
and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.
 */

function binarySearch(nums, target) {
  let lo = 0,
    hi = nums.length - 1
  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo + 1) / 2)
    if (target < nums[mid]) {
      hi = mid - 1
    } else {
      lo = mid
    }
  }
  return nums[lo] == target ? lo : -1
}

console.log(binarySearch([1, 2, 3, 4, 33, 56, 90, 100], 4))
