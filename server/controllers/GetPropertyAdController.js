import properties from '../models/property';

const specificPropertyAdvert = (req, res) => {
  const { id } = req.params;

  const foundPropertyId = properties.find(property => id === property.id);
  if (!foundPropertyId) {
    return res.status(404).json({
      status: 404,
      error: 'Property Id does not exist',
    });
  }

  const specificPropertyAds = properties.filter(property => id === property.id);

  return res.status(200).json({
    status: 200,
    data: specificPropertyAds,
  });
};

const getAll = {
  specificPropertyAdvert,
};

export default getAll;
