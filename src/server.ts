import express, { response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

function loggerMiddleware(req: express.Request, res: express.Response, next: express.NextFunction) {
  console.log(`${req.method} ${req.path}`);
  next();
}

const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World! /');
});

router.get('/hello', (req, res) => {
  res.send('Hello World! /hello');
});

app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
