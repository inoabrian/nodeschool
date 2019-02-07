import fs = require("fs");

export = (directoryPath: string, fileTypeDelimiter: string, cb: any) => {
    fs.readdir(directoryPath, (err, data) => {
        if(err) {
            return cb(err);
        }

        cb(null, filterFileTypes(data, fileTypeDelimiter));
    });
};

function filterFileTypes(files: Array<string>, fileTypeDelimiter: string): Array<string> {
    return files.filter((_file) => _file.split(".")[1] === fileTypeDelimiter);
}