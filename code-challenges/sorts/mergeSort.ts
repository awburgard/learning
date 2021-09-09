let count = 0

function merge(left, right) {
  count++
  const sorted = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift())
    } else {
      sorted.push(right.shift())
    }
  }

  const results = [...sorted, ...left, ...right]

  return results
}

function mergeSort(array) {
  count++
  const { length } = array

  if (length < 2) {
    return array
  }

  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}
