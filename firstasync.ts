import fs = require("fs");
import { error } from "util";

const filePath: string = process.argv[2];

const fileBuffer: any = () => {
    fs.readFile(filePath, {"encoding" : "utf-8"}, (err: NodeJS.ErrnoException, data: string) => {
        if(err) {
            throw new error();
        }

        console.log(data.split("\n").length - 1);
    });
};

fileBuffer();