import properties from '../models/property';

const deletePropertyAdvert = (req, res) => {
  const { id } = req.params;

  const foundProperty = properties.find(property => property.id === id);

  if (!foundProperty) {
    return res.status(404).json({
      status: 404,
      error: 'Property Id does not exist',
    });
  }

  const index = properties.indexOf(foundProperty);

  properties.splice(index, 1);

  return res.status(200).json({
    status: 200,
    data: 'Property data successfully deleted',
  });
};

export default deletePropertyAdvert;