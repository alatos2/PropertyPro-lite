/**
   * Check if user is a staff
   * @param {object} request express request object
   * @param {object} response express response object
   * @param {object} next express next object
   *
   * @returns {json} json
   */
// eslint-disable-next-line import/prefer-default-export
export const isAdmin = (req, res, next) => {
  const { id, email, is_admin } = req.decode;
  if (is_admin) {
    next();
  } else { console.log(is_admin);
    return res.status(403).json({
      status: 403,
      error: 'Forbidden: Access is denied',
    });
  }
};
