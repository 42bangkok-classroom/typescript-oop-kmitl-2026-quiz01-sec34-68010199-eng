const arg = process.argv[2]
const n = Number(arg)

if (!arg || isNaN(n)) {
  process.exit(0)
}

let output: string[] = []
for (let i = 0; i <= n; i++) {
  if (i % 2 === 0) {
    output.push(i.toString())
  }
}

process.stdout.write(output.join("\n"))