import validations from '../middlewares/validations';
import utils from '../helpers/commons';
import users from '../models/users';

const signin = (req, res) => {
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

  const storedUser = users.find(user => user.email === email);

  if (!storedUser) {
    return res.status(400).json({
      status: 400,
      error: 'Email does not exist',
    });
  }

  if (storedUser) {
    if (utils.validatePassword(password, storedUser.password)) {
      const token = utils.jwtToken(storedUser);
      return res.header('Authorization', `${token}`).status(200).json({
        status: 200,
        data: {
          token,
          id: storedUser.id,
          first_name: storedUser.firstName,
          last_name: storedUser.lastName,
          email: storedUser.email,
        },
      });
    }
  }

  return res.status(401).json({
    status: 401,
    error: 'Invalid login details, email or password is wrong',
  });
};

export default signin;
