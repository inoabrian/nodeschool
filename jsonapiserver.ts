import { Server, createServer, IncomingMessage, ServerResponse } from 'http';
import { parse, UrlWithStringQuery } from 'url';

const PORT = process.argv[2];

interface UnixTimeStamp {
    unixtime: number;
};

interface ParsedTime {
    hour: number;
    minute: number;
    second: number;
};

const extractParameter = (query: string): string => {
    return query.split('iso=').pop();
};

const getUnixTime = (date: string): UnixTimeStamp => {
    return { "unixtime": new Date(date).getTime() };
};

const getParseTime = (date: string): ParsedTime => {
    let newDate: Date = new Date(date);

    return { "hour": newDate.getHours(), "minute": newDate.getMinutes(), "second": newDate.getSeconds() };
};

let server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    let pathQuery: UrlWithStringQuery = parse(req.url);
    let route: string = pathQuery.pathname.split('/')[2];

    switch(route) {
        case 'parsetime':
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify(getParseTime(extractParameter(pathQuery.query))));
        case 'unixtime':
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify(getUnixTime(extractParameter(pathQuery.query))));
        default:
            res.writeHead(404, "Route is not supported", {"Content-Type": "text/plain"});
            res.end("404: Route Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Listening @ ${PORT}`)
});
