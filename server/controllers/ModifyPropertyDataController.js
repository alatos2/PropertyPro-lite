import moment from 'moment';
import { updateProperty, updatePropertyStatus } from '../models/queries';
import pool from '../models/database';

const updatePropertyData = (req, res) => {
  try {
    // const {
    //   status, type, state, city, address, price, image_url,
    // } = req.body;

    const {
      price,
    } = req.body;

    const { id } = req.params;

    console.log(req.params);
    console.log(req.body);

    pool.connect((err, client, done) => {
      client.query(updateProperty('Available', price, 'Lagos', 'Ikoyi', 'Ruxton street', 'Duplex', moment().format(), 'image_url', id), (error, result) => {
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
            status: 'Available',
            type: '',
            state: 'Lagos',
            city: 'Ikoyi',
            address: 'Ruxton street',
            price,
            created_on: moment().format(),
            image_url: 'image_url',
          },
        });
      });
    });
  } catch (e) {
    return res.status(500).json({ status: 500, error: 'Server Error' });
  }
};

const markPropertyData = (req, res) => {
  try {
    const { id } = req.params;

    pool.connect((err, client, done) => {
      client.query(updatePropertyStatus('sold', id), (error, result) => {
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
            status: 'sold',
          },
        });
      });
    });
  } catch (e) {
    return res.status(500).json({ status: 500, error: 'Server Error' });
  }
};

const modifyPropertyData = {
  updatePropertyData,
  markPropertyData,
};

export default modifyPropertyData;
