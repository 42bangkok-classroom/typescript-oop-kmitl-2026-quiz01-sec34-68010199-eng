const n = Number(process.argv[2])
for (let i = 1; i <= n; i++) {
  let line = ""
  for (let j = 1; j <= n; j++) {
    line += i % 2 === 1 ? "1" : "0"
  }
  console.log(line)
}