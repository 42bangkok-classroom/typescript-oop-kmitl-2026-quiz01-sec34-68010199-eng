const n = Number(process.argv[2])
if (!Number.isInteger(n) || n < 0) {
  process.exit(0)
}
for (let i = 0; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}