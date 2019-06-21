import express from 'express';
// import AuthController from '../controllers/AuthController';
import signup from '../controllers/RegisterController';

const registerRoute = express.Router();

registerRoute.post('/auth/signup', signup);

export default registerRoute;
