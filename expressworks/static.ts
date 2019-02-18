import { join } from 'path';
import * as express from 'express';

const PORT: string = process.argv[2];
const publicFilePath: string = process.argv[3] || join(__dirname, `public`);

const app: express.Express = express();

app.use(express.static(publicFilePath));

app.listen(PORT);