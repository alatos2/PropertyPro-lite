import validations from '../middlewares/validations';
import utils from '../helpers/commons';
import pool from '../models/database';
import { addUser } from '../models/queries';

/**
 * @function signup
 * @param {object} req - express request object
 * @param {object} res - express response object
 * @returns json
 */

const signup = (req, res) => {
  try {
    const {
      email, firstName, lastName, password, confirmPassword, phoneNumber, address,
    } = req.body;

    const result = validations.validateRegister(req.body);
    if (result.error) {
      const errorMessage = result.error.details[0].message;
      return res.status(400).json({
        status: 400,
        error: errorMessage.replace(/[^a-zA-Z ]/g, ''),
      });
    }

    const isValid = utils.validateEmail(email);
    if (!isValid) {
      return res.status(400).json({
        status: 400,
        error: 'Email is not valid',
      });
    }

    const userData = {
      email, firstName, lastName, password: utils.hashPassword(password), phoneNumber, address, isAdmin: true,
    };

    pool.connect((err, client, done) => {
      client.query(addUser(userData), (error, result) => {
        done();
        if (error) {
          if (error.code === '23505') {
            return res.status(400).json({
              status: 400,
              error: 'Email already exists',
            });
          }
        }
        const user = result.rows[0];
        const tokenData = {
          id: user.id, firstName: user.firstname, lastName: user.lastname, email: user.email, phoneNumber: user.phoneNumber, address: user.address, isAdmin: true,
        };
        const token = utils.jwtToken(tokenData);
        const {
          firstname, lastname, email, id,
        } = user;
        return res.status(201).json({
          status: 201,
          data: [{
            token, id, firstName: firstname, lastName: lastname, email,
          }],
        });
      });
    });
  } catch (e) {
    return res.status(500).json({ status: 500, error: 'Server Error' });
  }
};

export default signup;
