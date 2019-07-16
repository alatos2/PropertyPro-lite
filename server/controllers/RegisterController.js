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
      email, first_name, last_name, password, phone_number, address,
    } = req.body;

    // const result = validations.validateRegister(req.body);
    // if (result.error) {
    //   const errorMessage = result.error.details[0].message;
    //   return res.status(400).json({
    //     status: 400,
    //     error: errorMessage.replace(/[^a-zA-Z ]/g, ''),
    //   });
    // }

    // const isValid = utils.validateEmail(email);
    // if (!isValid) {
    //   return res.status(400).json({
    //     status: 400,
    //     error: 'Email is not valid',
    //   });
    // }

    const userData = {
      email, first_name, last_name, password: utils.hashPassword(password), phone_number, address, is_admin: true,
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
          id: user.id, first_name: user.firstname, last_name: user.lastname, email: user.email, phone_number: user.phoneNumber, address: user.address, is_admin: true,
        };
        const token = utils.jwtToken(tokenData);
        const {
          first_name, last_name, email, id,
        } = user;
        return res.status(201).json({
          status: 201,
          data: {
            token: token, id: id, first_name: first_name, last_name: last_name, email: email,
          },
        });
      });
    });
  } catch (e) {
    return res.status(500).json({ status: 500, error: 'Server Error' });
  }
};

export default signup;
