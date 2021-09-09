function power(num, pwr) {
  if (pwr === 0) return 1
  return num * power(num, pwr - 1)
}

function factorial(num) {
  if (num === 0) return 1
  return num * factorial(num - 1)
}

console.log(power(3, 5))
console.log(factorial(5))
