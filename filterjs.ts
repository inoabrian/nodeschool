import fs = require("fs");
import filterModule = require("./filterjs_module");

const directoryPath: string = process.argv[2];

const filterDelimiter: string = process.argv[3];

// fs.readdir(directoryPath, (err, data) => {
//     if(err) {
//         throw new Error();
//     }

//     filterFileTypes(data)
//     .forEach(fileMatched => {
//         console.log(fileMatched);
//     });
// });

// function filterFileTypes(files: Array<string>): Array<string> {
//     return files.filter((_file) => _file.split(".")[1] === filterDelimiter);
// }




filterModule(directoryPath, filterDelimiter, printFilteredFiles);

function printFilteredFiles(err: NodeJS.ErrnoException ,fileList: Array<string>): void {
    if(err) {
        throw err;
    }

    fileList.forEach(fileMatched => {
        console.log(fileMatched);
    });
}