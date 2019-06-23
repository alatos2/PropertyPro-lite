import express from 'express';
import createPropertyAd from '../controllers/CreatePropertyAdController';
import deletePropertyAdvert from '../controllers/DeletePropertyController';
import authentication from '../middlewares/verifications';

const propertyRoute = express.Router();

propertyRoute.post('/property', authentication, createPropertyAd);
propertyRoute.delete('/property/:id', authentication, deletePropertyAdvert);

export default propertyRoute;
