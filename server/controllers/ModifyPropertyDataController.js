import moment from 'moment';
import { updateProperty, updatePropertyStatus } from '../models/queries';
import pool from '../models/database';

const updatePropertyData = (req, res) => {
  try {
    const {
      status, type, state, city, address, price, imageUrl,
    } = req.body;

    const { id } = req.params;

    pool.connect((err, client, done) => {
      client.query(updateProperty(status, price, state, city, address, type, moment().format(), imageUrl, id), (error, result) => {
        done();
        if (result.rowCount === 0) {
          return res.status(404).json({
            status: 404,
            error: 'Property Id does not exist',
          });
        }

        return res.status(200).json({
          status: 200,
          data: {
            id,
            status,
            type,
            state,
            city,
            address,
            price,
            created_on: moment().format(),
            imageUrl,
          },
        });
      });
    });
  } catch (e) {
    return res.status(500).json({ status: 500, error: 'Server Error' });
  }
};

const markPropertyData = (req, res) => {
  const { id } = req.params;

  const found = properties.find(property => property.id === id);
  if (!found) {
    return res.status(404).json({
      status: 404,
      error: 'Property Id does not exist',
    });
  }

  return res.status(200).json({
    status: 200,
    data: {
      id: found.id,
      status: 'sold',
      type: found.type,
      state: found.state,
      city: found.city,
      address: found.address,
      price: found.price,
      create_on: found.created_on,
      image_url: found.image_url,
    },
  });
};

const modifyPropertyData = {
  updatePropertyData,
  markPropertyData,
};

export default modifyPropertyData;
