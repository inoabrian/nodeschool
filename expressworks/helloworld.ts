const PORT: string = process.argv[2];

import * as express from 'express';

const app: express.Express = express();

const helloworld: express.RequestHandler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send(`Hello World!`);
};

app.get(`/home`, helloworld);
 
app.listen(PORT);