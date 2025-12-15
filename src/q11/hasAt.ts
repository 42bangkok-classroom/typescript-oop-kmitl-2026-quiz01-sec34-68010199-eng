const input = process.argv[2] || ""
if (input.includes("@")) {
  console.log("Has @")
} else {
  console.log("No @")
}