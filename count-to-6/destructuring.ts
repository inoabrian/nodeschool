const argArray: any[] = process.argv.slice(2);

let data: any = {};

[, data.username, data.email] = argArray;

console.log(data);