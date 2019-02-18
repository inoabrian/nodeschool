import { Server, IncomingMessage, ServerResponse } from 'http';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';
import { WriteStream } from 'tty';

const PORT: string = process.argv[2];

const server: Server = new Server((req: IncomingMessage, res: ServerResponse) => {
    if(req.method === "POST") {
        let chunks: Array<string> = new Array();
        res.writeHead(200, {"Content-Type": "text/plain"});
        req.on("data", (chunk: string) => {
            chunks.push(chunk.toString());
        });

        req.on("end", () => {
            res.write(chunks.join('').toUpperCase());
            res.end();
        });
    }
});

server.listen(PORT);