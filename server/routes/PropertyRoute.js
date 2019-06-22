import express from 'express';
import createPropertyAd from '../controllers/CreatePropertyAdController';
import authentication from '../middlewares/verifications';

const createRoute = express.Router();

createRoute.post('/property', authentication, createPropertyAd);

export default createRoute;
