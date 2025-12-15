const p = process.argv[2] || ""

const hasUpper = /[A-Z]/.test(p)
const hasLower = /[a-z]/.test(p)
const hasNumber = /[0-9]/.test(p)
const validLength = p.length >= 8

if (hasUpper && hasLower && hasNumber && validLength) {
  console.log("Valid")
} else {
  console.log("Invalid")
}