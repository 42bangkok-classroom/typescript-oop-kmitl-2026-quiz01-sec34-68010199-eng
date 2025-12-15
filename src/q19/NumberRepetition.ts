const n = Number(process.argv[2])
for (let i = 1; i <= n; i++) {
  console.log(String(i).repeat(n))
}