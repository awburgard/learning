function isValidSubsequence(array, sequence) {
  let subIdx = 0
  for (const value of array) {
    if (subIdx === sequence.legnth) break
    if (sequence[subIdx] === value) subIdx++
  }

  return subIdx === sequence.length
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
