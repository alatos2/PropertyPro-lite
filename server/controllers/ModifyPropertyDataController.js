import moment from 'moment';
import { updateProperty, updatePropertyStatus, updatePropertyPrice } from '../models/queries';
import pool from '../models/database';

const updatePropertyData = (req, res) => {
  try {
    const {
      price,
    } = req.body;

    const { id } = req.params;

    const {
      email, is_admin,
    } = req.decode;

    pool.connect((err, client, done) => {
      client.query(updatePropertyPrice(price, id), (error, result) => {
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
            price,
            created_on: moment().format(),
            owner_email: email,
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
            created_on: moment().format(),
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
