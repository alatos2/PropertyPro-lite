import express from 'express';
import createPropertyAd from '../controllers/CreatePropertyAdController';
import modifyPropertyData from '../controllers/ModifyPropertyDataController';
import getAll from '../controllers/GetPropertyAdController';
import deletePropertyAdvert from '../controllers/DeletePropertyController';
import verification from '../middlewares/verifications';
// import { isAdmin } from '../middlewares/permission';

const propertyRoute = express.Router();

propertyRoute.get('/property', getAll.allPropertyAdverts);
propertyRoute.get('/property/:id', getAll.specificPropertyAdvert);
propertyRoute.get('/property-specific/?', getAll.specificPropertyAdvertType);
propertyRoute.post('/property', verification.authenticate, verification.isAdmin, createPropertyAd);
// propertyRoute.patch('/property/:id', authentication, modifyPropertyData.updatePropertyData);
// propertyRoute.patch('/property/:id/sold', authentication, modifyPropertyData.markPropertyData);
// propertyRoute.delete('/property/:id', authentication, deletePropertyAdvert);

export default propertyRoute;
