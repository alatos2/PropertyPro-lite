import uuid from 'uuid';
import users from '../models/users';
import validations from '../middlewares/validations';
import utils from '../helpers/commons';

/**
 * @function signup
 * @param {object} req - express request object
 * @param {object} res - express response object
 * @returns json
 */

const signup = (req, res) => {
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

  const foundEmail = utils.searchByEmail(email, users);
  if (foundEmail) {
    return res.status(400).json({
      status: 400,
      error: 'Email already exist',
    });
  }

  const userData = {
    id: uuid.v4(),
    email,
    firstName,
    lastName,
    password: utils.hashPassword(password),
    phoneNumber,
    address,
    IsAdmin: true,
  };

  users.push(userData);

  const token = utils.jwtToken(userData);

  return res.header('Authorization', `${token}`).status(201).json({
    status: 201,
    data: {
      token,
      id: userData.id,
      firstName,
      lastName,
      email,
      address,
    },
  });
};

export default signup;
