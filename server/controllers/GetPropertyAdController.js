import pool from '../models/database';
import { getPropertyById, getProperties, getPropertyByType } from '../models/queries';

const specificPropertyAdvert = (req, res) => {
  try {
    const { id } = req.params;

    pool.connect((err, client, done) => {
      client.query(getPropertyById(id), (error, result) => {
        done();
        if (result.rowCount === 0) {
          return res.status(404).json({
            status: 404,
            error: 'Property Id not found',
          });
        }

        const property = result.rows[0];
        return res.status(200).json({
          status: 200,
          data: property,
        });
      });
    });
  } catch (e) {
    return res.status(500).json({ status: 500, error: 'Server Error' });
  }
};

const specificPropertyAdvertType = (req, res) => {
  const {
    type,
  } = req.query;

  const specificPropertyAdsType = properties.filter(property => type === property.type);

  if (specificPropertyAdsType === undefined || specificPropertyAdsType.length === 0) {
    return res.status(404).json({
      status: 404,
      error: 'Property type does not exist',
    });
  }

  return res.status(200).json({
    status: 200,
    data: specificPropertyAdsType,
  });
};

const allPropertyAdverts = (req, res) => res.status(200).json({
  status: 200,
  data: properties,
});

const getAll = {
  specificPropertyAdvert,
  specificPropertyAdvertType,
  allPropertyAdverts,
};

export default getAll;
