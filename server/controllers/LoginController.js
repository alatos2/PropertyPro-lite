import validations from '../middlewares/validations';
import utils from '../helpers/commons';
import pool from '../models/database';
import { getUserByEmail } from '../models/queries';

const signin = (req, res) => {
  try {
    const {
      email, password,
    } = req.body;

    const result = validations.validateLogin(req.body);

    if (result.error) {
      const errorMsg = result.error.details[0].message;
      return res.status(400).json({
        status: 400,
        error: errorMsg,
      });
    }

    pool.connect((err, client, done) => {
      client.query(getUserByEmail(email), (error, result) => {
        done();
        const user = result.rows[0];
        if (!user) {
          return res.status(401).json({ status: 401, error: 'Invalid login details, email or password is wrong' });
        }
        if (utils.validatePassword(password, user.password)) {
          const tokenData = {
            id: user.id,
            email: user.email,
            type: user.type,
            is_admin: user.isadmin,
          };
          const token = utils.jwtToken(tokenData);

          const {
            first_name, last_name, email, id,
          } = user;

          return res.status(200).json({
            status: 200,
            data: [{
              token,
              id,
              first_name: first_name,
              last_name: last_name,
              email,
            }],
          });
        }
        return res.status(401).json({
          status: 401,
          error: 'Invalid login details, email or password is wrong',
        });
      });
    });
  } catch (e) {
    return res.status(500).json({ status: 500, error: 'Server Error' });
  }
};

export default signin;
