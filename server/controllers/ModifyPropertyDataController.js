import moment from 'moment';
import properties from '../models/property';

const updatePropertyData = (req, res) => {
  const {
    status, type, state, city, address, price, imageUrl,
  } = req.body;

  const { id } = req.params;

  const found = properties.find(property => property.id === id);

  if (!found) {
    return res.status(404).json({
      status: 404,
      error: 'Property Id does not exist',
    });
  }

  return res.status(200).json({
    status: 200,
    data: {
      id,
      status,
      type,
      state,
      city,
      address,
      price,
      created_on: moment().format(),
      imageUrl,
    },
  });
};

const modifyPropertyData = {
  updatePropertyData,
};

export default modifyPropertyData;
