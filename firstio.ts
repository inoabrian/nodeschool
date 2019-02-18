import fs = require("fs");

const filePath: string = process.argv[2];

const fileBuffer:string = fs.readFileSync(filePath, {"encoding" : "utf-8"});

console.log(fileBuffer.split("\n").length - 1);