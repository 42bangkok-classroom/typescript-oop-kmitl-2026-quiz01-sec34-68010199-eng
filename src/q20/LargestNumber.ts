const nums = process.argv.slice(2).map(Number)
let max = nums[0]
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i]
  }
}
console.log(max)