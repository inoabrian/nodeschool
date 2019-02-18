import http = require("http");
import bl = require("bl");
const requestURL: string = process.argv[2];

const printNumberOfCharacters: (responseString: string) => void = (responseString: string): void => {
    console.log(responseString.length);
};

const printResponseString: (responseString: string) => void = (responseString: string): void => {
    console.log(responseString);
};

const pipeToBuffer: any = (): bl => {
    return new bl((err: NodeJS.ErrnoException, data: Buffer) => {
        if(err) {
            throw err;
        }

        let response: string = data.toString();

        printNumberOfCharacters(response);
        printResponseString(response);
    });
};

// we pipe to a bufferlist to allow ourselves to let the chunking occur
// and we receive a callback after all of the data has been received
http.get(requestURL, (stream: http.IncomingMessage) => {
    stream.pipe(pipeToBuffer());
});
