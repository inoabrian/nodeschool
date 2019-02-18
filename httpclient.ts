import http = require("http");
import { RequestOptions } from "https";

const requestURL: string = process.argv[2];

const handleResponse: (res: http.IncomingMessage) => void = (res: http.IncomingMessage) => {
    res.setEncoding("utf-8");

    res.on("data", handleData);
    res.on("error", handleError);
};

let handleData: (...args: any[]) => void = (data: any): void => {
    console.log(data);
};

let handleError: (...args: any[]) => void = (err: any): void => {
    console.error(err);
};

http.get(requestURL, handleResponse);