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
  const { is_admin } = req.decode;
  if (is_admin) {
    console.log(is_admin);
    next();
  } else {
    return res.status(403).json({
      status: 403,
      error: 'Forbidden: Access is denied',
    });
  }
};
