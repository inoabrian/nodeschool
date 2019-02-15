import { Server, IncomingMessage, ServerResponse } from 'http';
import { createReadStream } from 'fs';

const PORT: string = process.argv[2];
const FILE_PATH: string = process.argv[3];

const server = new Server((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {"content-type": "text/plain"});
    
    createReadStream(FILE_PATH).pipe(res);
});

server.listen(PORT);