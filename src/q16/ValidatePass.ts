const p = process.argv[2] || ""
const len = p.length >= 8
const num = /[0-9]/.test(p)
const up = /[A-Z]/.test(p)
if (len && num && up) {
  console.log("Valid")
} else {
  console.log("Invalid")
}