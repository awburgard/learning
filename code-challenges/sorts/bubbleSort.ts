/*
has time complexity of O(n^2)
*/

function bubbleSort(nums) {
  let swapped = true
  do {
    swapped = false
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return nums
}

console.log(bubbleSort([45, 60, 1, 4, 90, 32]))
