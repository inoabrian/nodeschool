import http = require("http");
import bl = require("bl");
import fetch = require("node-fetch");

let [ requestOneURL, requestTwoURL, requestThreeURL ] = process.argv.slice(2);
let requestQueue: string[] = [requestOneURL, requestTwoURL, requestThreeURL];
let currentRequest: 0;

const getRemoteData: (url: string) => Promise<string> =  async (url: string): Promise<string> => {
    let result: fetch.Response = await fetch.default(url);

    return await result.text();
};

const sendMultipleRequests: (requestUrls: string[]) => Promise<any> = async (requestUrls: string[]): Promise<any> => {
    for(currentRequest = 0; currentRequest < requestUrls.length; currentRequest++) {
        let response:string = await getRemoteData(requestUrls[currentRequest]);

        console.log(response);
    }
};

sendMultipleRequests(requestQueue);