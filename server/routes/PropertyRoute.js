import express from 'express';
import createPropertyAd from '../controllers/CreatePropertyAdController';
import modifyPropertyData from '../controllers/ModifyPropertyDataController';
import getAll from '../controllers/GetPropertyAdController';
import deletePropertyAdvert from '../controllers/DeletePropertyController';
import authentication from '../middlewares/verifications';

const propertyRoute = express.Router();

propertyRoute.get('/property', getAll.allPropertyAdverts);
propertyRoute.get('/property/:id', getAll.specificPropertyAdvert);
propertyRoute.get('/property-specific/:id?', getAll.specificPropertyAdvertType);
propertyRoute.post('/property', authentication, createPropertyAd);
propertyRoute.patch('/property/:id', authentication, modifyPropertyData.updatePropertyData);
propertyRoute.delete('/property/:id', authentication, deletePropertyAdvert);

export default propertyRoute;
