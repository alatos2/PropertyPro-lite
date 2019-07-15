import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// const { SECRET } = process.env;

// const authentication = (req, res, next) => {
//   try {
//     const header = req.headers.authorization || req.headers.token || req.header('token');
    
//     if (!header || header === '') return res.status(401).json({ status: 401, error: 'Authentication failed' });

//     const token = jwt.verify(header, SECRET);

//     req.decode = token;
//     next();
//   } catch (e) {
//     return res.status(401).json({ status: 401, error: 'Invalid token!' });
//   }
// };

// export default authentication;

const jwtSecret = process.env.SECRET;

const authenticate = (req, res, next) => {
  try {
    const token = req.header('token') || req.headers.authorization;

    if (!token) return res.status(401).json({ status: 401, error: 'No token provided' });

    req.decode = jwt.verify(token, jwtSecret);
    next();
  } catch (error) {
    return res.status(401).json({ status: 401, error: 'Invalid token' });
  }
};

const isAdmin = (req, res, next) => {
  if (req.decode.is_admin === false) return res.status(401).json({ status: 401, error: 'Invalid token!' });
  console.log(req.decode);
  next();
};

const verification = {
  isAdmin,
  authenticate,
};
export default verification;
