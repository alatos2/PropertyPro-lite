import express from 'express';
import createPropertyAd from '../controllers/CreatePropertyAdController';
import modifyPropertyData from '../controllers/ModifyPropertyDataController';
import getAll from '../controllers/GetPropertyAdController';
import deletePropertyAdvert from '../controllers/DeletePropertyController';
import authentication from '../middlewares/verifications';
import { isAdmin } from '../middlewares/permission';

const propertyRoute = express.Router();

propertyRoute.post('/property', authentication, isAdmin, createPropertyAd);
propertyRoute.patch('/property/:id', authentication, isAdmin, modifyPropertyData.updatePropertyData);
propertyRoute.get('/property', getAll.allPropertyAdverts);
propertyRoute.get('/property/:id', getAll.specificPropertyAdvert);
propertyRoute.get('/property-specific/?', getAll.specificPropertyAdvertType);
propertyRoute.patch('/property/:id/sold', authentication, modifyPropertyData.markPropertyData);
propertyRoute.delete('/property/:id', authentication, deletePropertyAdvert);

export default propertyRoute;
