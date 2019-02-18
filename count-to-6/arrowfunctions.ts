const args: string[] = process.argv.slice(2);

let mutated = args.map((element) => element[0])
.reduce((p, c) => p + c);

console.log(`[${args}] becomes \"${mutated}\"`);