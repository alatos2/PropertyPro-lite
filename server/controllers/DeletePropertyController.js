import pool from '../models/database';
import { deleteProperty } from '../models/queries';

const deletePropertyAdvert = (req, res) => {
  try {
    const { id } = req.params;

    pool.connect((err, client, done) => {
      client.query(deleteProperty(id), (error, result) => {
        done();
        if (!result) {
          return res.status(404).json({
            status: 404,
            error: 'Property Id does not exist',
          });
        }

        if (result.rowCount === 0) {
          return res.status(404).json({
            status: 404,
            error: 'Property Id does not exist',
          });
        }

        return res.status(200).json({
          status: 200,
          data: [{ message: 'Property Data successfully deleted' }],
        });
      });
    });
  } catch (e) {
    return res.status(500).json({ status: 500, error: 'Server Error' });
  }
};

export default deletePropertyAdvert;
