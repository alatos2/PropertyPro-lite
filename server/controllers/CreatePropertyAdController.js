import moment from 'moment';
import validations from '../middlewares/validations';
import utils from '../helpers/commons';
import pool from '../models/database';
import { addProperty } from '../models/queries';

/**
 * @function createPropertyAd
 * @param {object} req - express request object
 * @param {object} res - express response object
 * @returns json
 */

const createPropertyAd = (req, res) => {
  try {
    const {
      status, price, state, city, address, type, image_url,
    } = req.body;

    const {
      id, email, is_admin,
    } = req.decode;

    // const result = validations.validateCreatePropertyAd(req.body);

    // if (result.error) {
    //   const errorMessage = result.error.details[0].message;

    //   return res.status(400).json({
    //     status: 400,
    //     error: errorMessage.replace(/[^a-zA-Z ]/g, ''),
    //   });
    // }

    const propertyData = {
      owner: id,
      status,
      price,
      state,
      city,
      address,
      type,
      created_on: moment().format(),
      image_url,
    };

    pool.connect((err, client, done) => {
      client.query(addProperty(propertyData), (error, result) => {
        done();
        if (error) {
          if (error.code === '23505') {
            res.status(400).json({
              status: 400,
              error: 'An error has occured!',
            });
          }
        }

        const property = result.rows[0];
        
        const tokenData = {
          id,
          email,
          is_admin,
        };

        const propertyToken = utils.jwtToken(tokenData);

        return res.header('authorization', `${propertyToken}`).status(201).json({
          status: 201,
          data: {
            token: propertyToken,
            type: property.type,
            state: property.state,
            city: property.city,
            address: property.address,
            price: property.price,
            image_url: propertyData.image_url,
          },
        });
      });
    });
  } catch (e) {
    return res.status(500).json({ status: 500, error: 'Server Error' });
  }
};

export default createPropertyAd;
