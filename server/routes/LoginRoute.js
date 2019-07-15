import express from 'express';
import signin from '../controllers/LoginController';
import authentication from '../middlewares/verifications';

const loginRoute = express.Router();

loginRoute.post('/auth/signin', signin);

export default loginRoute;
