import Debug from 'debug';
import moment from 'moment';
import pool from './database';
import utils from '../helpers/commons';
import { addProperty, addUser } from './queries';

const debug = Debug('http');
const userData = {
  id: 1,
  email: 'dehinde@gmail.com',
  first_name: 'Lorenzo',
  last_name: 'Dehinde',
  password: utils.hashPassword('Dehinde321'),
  phone_number: '08122115577',
  address: 'Iyana Iyesi Close',
  is_admin: true,
};

const propertyData = {
  id: 2,
  owner: 1,
  status: 'available',
  type: 'mansion',
  state: 'Rivers',
  city: 'Auchi',
  address: '25 Ajuebor street',
  price: 29000.00,
  created_on: moment().format(),
  image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561569684/house2_kagcwz.jpg',
};

/**
 * Create Tables
 */
const createTables = () => {
  const users = `CREATE TABLE IF NOT EXISTS
    users (
        id SERIAL PRIMARY KEY,      
        email VARCHAR(128) UNIQUE NOT NULL,
        first_name VARCHAR(128) NOT NULL,
        last_name VARCHAR(128) NOT NULL,
        password VARCHAR(128) NOT NULL,
        phone_number VARCHAR(128) NOT NULL,
        address VARCHAR(128) NOT NULL,
        is_admin BOOLEAN
    )`;

  const property = `CREATE TABLE IF NOT EXISTS
    property (
        id SERIAL PRIMARY KEY,
        owner INT NOT NULL,
        status VARCHAR(128) NOT NULL,
        price float8,
        state VARCHAR(128) NOT NULL,
        city VARCHAR(128) NOT NULL,
        address VARCHAR(128) NOT NULL,
        type VARCHAR(128) NOT NULL,
        created_on TIMESTAMP,
        image_url VARCHAR(256) NOT NULL
    )`;

  pool.query(users)
    .then((response) => {
      debug(response);
      pool.end();
    })
    .catch((error) => {
      debug(error);
      pool.end();
    });

  pool.query(property)
    .then((response) => {
      debug(response);
      pool.end();
    })
    .catch((error) => {
      debug(error);
      pool.end();
    });
};

/**
 * Drop Tables
 */
const dropTables = () => {
  pool.query('DROP TABLE IF EXISTS users, property')
    .then(() => {
      debug('Table dropped');
    });
};

const createUser = () => {
  pool.query(addUser(userData), (error, result) => {
    if (error) {
      debug(error);
    }
    debug(result);
  });
};

const createProperty = () => {
  pool.query(addProperty(propertyData), (error, result) => {
    if (error) {
      debug(error);
    }
    debug(result);
  });
};

pool.on('remove', () => {
  debug('client removed');
  process.exit(0);
});

module.exports = {
  dropTables,
  createTables,
  createUser,
  createProperty,
};

require('make-runnable');
