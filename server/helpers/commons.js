import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config();

const { SECRET } = process.env;

const utils = {
  /**
     * @description assign token
     * @param {object} payload
     * @returns {object} token
     */
  jwtToken(payload) {
    const token = jwt.sign(payload, SECRET, { expiresIn: '24h' });
    return token;
  },

  /**
   * @description hash password
   * @param {object} password
   * @returns {object} hashPassword
   */
  hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
  },

  /**
   * @description validate email
   * @param {object} email
   * @returns {object} isValid
   */
  validateEmail(email) {
    const expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = expression.test(email);
    return isValid;
  },

  /**
   * @description - search by email
   * @param {string} email
   * @param {object} data
   * @returns {object} foundEmail
   */
  searchByEmail(searchEmail, data) {
    const foundEmail = data.find(eachData => eachData.email === searchEmail);
    return foundEmail;
  },

  /**
   * @description validate password
   * @param {string} password
   * @param {string} hashpassword
   * @returns {boolean} boolean
   */
  validatePassword(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword);
  },
};

export default utils;
