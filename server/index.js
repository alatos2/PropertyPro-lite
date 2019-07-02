import express from 'express';
import Debug from 'debug';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './docs/swagger.json';
import registerRoute from './routes/RegisterRoute';
import loginRoute from './routes/LoginRoute';
import createRoute from './routes/PropertyRoute';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! Hey');
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());

app.use('/api/v1', registerRoute);
app.use('/api/v1', loginRoute);
app.use('/api/v1', createRoute);

dotenv.config();

const debug = Debug('http');
const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  debug(`Server running on port ${PORT}`);
});

export default server;
