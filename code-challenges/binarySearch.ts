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

/*
following assumes that an api called isBadVersion is avaliable
takes in version (n)
=> boolean
*/

function isBadVersion(version) {
  return version >= 2
}

function check(n) {
  var start = 1,
    end = n
  while (start < end) {
    var mid = Math.floor(start + (end - start) / 2)
    if (isBadVersion(mid)) {
      end = mid // look on left side of mid
    } else {
      start = mid + 1 // look on the right side of mid
    }
  }
  return start
}
