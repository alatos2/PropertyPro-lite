/**
 * @name addProperty
 * @description - adds a new property
 * @param {object} data
 * @returns the object query
 */

export const addProperty = data => ({
  text: `INSERT INTO property (
      owner,
      status,
      price,
      state,
      city,
      address,
      type,
      createdOn,
      imageUrl
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
  values: [data.owner, data.status, data.price, data.state, data.city, data.address, data.type, data.createdOn, data.imageUrl],
});

/**
     * @name updatePropertyStatus
     * @description - updates property status
     * @param {string} status
     * @param {int} id
     * @returns the object query
     */

export const updatePropertyStatus = (status, id) => ({
  text: 'UPDATE property SET status = $1 WHERE id = $2 RETURNING id, status',
  values: [status, id],
});

/**
     * @name updateProperty
     * @description - updates property status
     * @param {string} status
     * @param {int} id
     * @returns the object query
     */

export const updateProperty = (status, price, state, city, address, type, createdOn, imageUrl, id) => ({
  text: 'UPDATE property SET status = $1, price = $2, state = $3, city = $4, address = $5, type = $6, createdOn = $7, imageUrl = $8 WHERE id = $9 RETURNING id, status, price, state, city, address, type, imageUrl',
  values: [status, price, state, city, address, type, createdOn, imageUrl, id],
});

/**
     * @name DeleteProperty
     * @description - deletes a property
     * @param {int} id
     * @returns the query
     */

export const deleteProperty = id => ({
  text: 'DELETE FROM property WHERE id = $1 RETURNING id',
  values: [id],
});

/**
     * @name getPropertyById
     * @description - gets a single property
     * @param {int} id
     * @returns the query
     */

export const getPropertyById = id => ({
  text: 'SELECT * FROM property WHERE id = $1',
  values: [id],
});

/**
     * @name getProperties
     * @description - gets all properties
     * @returns the query
     */

export const getProperties = () => ({
  text: 'SELECT * FROM property',
  values: [],
});

/**
     * @name getPropertyByType
     * @description - gets all dormant account
     * @param {string} status
     * @returns the query
     */

export const getPropertyByType = type => ({
  text: 'SELECT * FROM property WHERE type = $1',
  values: [type],
});

/**
     * @name addUser
     * @description - adds a new user
     * @param {object} data
     * @returns the object query
     */

export const addUser = data => ({
  text: `INSERT INTO users (     
          email,
          firstName,
          lastName,
          password,
          phoneNumber,
          address,
          isAdmin
          ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
  values: [
    data.email,
    data.firstName,
    data.lastName,
    data.password,
    data.phoneNumber,
    data.address,
    data.isAdmin],
});

/**
     * @name getUserByEmail
     * @description - gets a single user
     * @param {string} email
     * @returns the query
     */

export const getUserByEmail = email => ({
  text: 'SELECT * FROM users WHERE email = $1',
  values: [email],
});

/**
     * @name getUserById
     * @description - gets a single user
     * @param {int} id
     * @returns the query
     */

export const getUserById = userId => ({
  text: 'SELECT * FROM users WHERE id = $1',
  values: [userId],
});
