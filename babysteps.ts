const solve: any = (numbers: string[]): number => {
    return numbers.map((s) => Number(s)).reduce((p, c) => p + c);
};

console.log(solve(process.argv.slice(2)));