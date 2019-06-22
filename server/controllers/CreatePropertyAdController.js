import uuid from 'uuid';
import moment from 'moment';
import properties from '../models/property';
import validations from '../middlewares/validations';

/**
 * @function createPropertyAd
 * @param {object} req - express request object
 * @param {object} res - express response object
 * @returns json
 */

const createPropertyAd = (req, res) => {
  const {
    status, price, state, city, address, type, imageUrl,
  } = req.body;

  const {
    id,
  } = req.decode;

  const result = validations.validateCreatePropertyAd(req.body);

  if (result.error) {
    const errorMessage = result.error.details[0].message;

    return res.status(400).json({
      status: 400,
      error: errorMessage.replace(/[^a-zA-Z ]/g, ''),
    });
  }

  const propertyAdData = {
    id: uuid.v4(),
    owner: id,
    status,
    type,
    state,
    city,
    address,
    price,
    created_on: moment().format(),
    imageUrl,
  };

  properties.push(propertyAdData);

  return res.status(201).json({
    status: 201,
    data: {
      id: propertyAdData.id,
      status,
      type,
      state,
      city,
      address,
      price,
      created_on: propertyAdData.created_on,
      imageUrl,
    },
  });
};

export default createPropertyAd;
