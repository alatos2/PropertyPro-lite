import express from 'express';
import signin from '../controllers/LoginController';

const loginRoute = express.Router();

loginRoute.post('/auth/signin', signin);

export default loginRoute;
