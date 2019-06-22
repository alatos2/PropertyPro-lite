import express from 'express';
import Debug from 'debug';
import dotenv from 'dotenv';
import cors from 'cors';
import registerRoute from './routes/RegisterRoute';
import loginRoute from './routes/LoginRoute';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! Hey');
});

// app.post('/auth/signup/api/v1', AuthController.signUp);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use('/api/v1', registerRoute);
app.use('/api/v1', loginRoute);

dotenv.config();

const debug = Debug('http');
const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  debug(`Server running on port ${PORT}`);
});

export default server;
