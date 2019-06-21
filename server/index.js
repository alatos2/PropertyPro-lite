import express from 'express';
import Debug from 'debug';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello! My API is working...');
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

dotenv.config();

const debug = Debug('http');
const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  debug(`Server running on port ${PORT}`);
});

export default server;