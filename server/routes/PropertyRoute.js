import express from 'express';
import createPropertyAd from '../controllers/CreatePropertyAdController';
import getAll from '../controllers/GetPropertyAdController';
import deletePropertyAdvert from '../controllers/DeletePropertyController';
import authentication from '../middlewares/verifications';

const propertyRoute = express.Router();

propertyRoute.get('/property/:id', getAll.specificPropertyAdvert);
propertyRoute.post('/property', authentication, createPropertyAd);
propertyRoute.delete('/property/:id', authentication, deletePropertyAdvert);

export default propertyRoute;
