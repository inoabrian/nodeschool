const arg = process.argv.slice(2);

let min: number = Math.min(...arg.map(num => Number(num)));

console.log(`The minimum of [${arg}] is ${min}`);