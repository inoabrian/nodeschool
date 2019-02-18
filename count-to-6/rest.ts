export = function average(...values: number[]) {
    return values.reduce((previouseValue: number, currentValue: number) => previouseValue + currentValue, 0) / values.length;
}