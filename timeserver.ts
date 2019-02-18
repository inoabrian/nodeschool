import net = require('net');

const PORT = process.argv[2];
const MONTH_MAPPING = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

let leftPad: (str: string) => string = (str: string): string => {
    if(str.length < 2) {
        return `0${str}`;
    }

    return str;
};

let formatDateTime: (dateToFormat: Date) => string = (dateToFormat: Date): string => {
    let year: string = dateToFormat.getFullYear().toString();
    let month: string = leftPad(MONTH_MAPPING[dateToFormat.getMonth()]);
    let day: string = leftPad(dateToFormat.getDate().toString());
    let hours: string = leftPad(dateToFormat.getHours().toString());
    let minutes: string = leftPad(dateToFormat.getMinutes().toString());

    return `${year}-${month}-${day} ${hours}:${minutes}`;
};

let handleConnection: (socketConnected: net.Socket) => void = (socketConnected: net.Socket): void => {
    let response: string = `${formatDateTime(new Date())}\n`;

    socketConnected.end(new Buffer(response));
    socketConnected.emit("close");
};

let tcpServer: net.Server = net.createServer(handleConnection);

tcpServer.listen(PORT);