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
  // console.log('foundPropertyId');
  const specificPropertyAds = properties.filter(property => id === property.id);

  return res.status(200).json({
    status: 200,
    data: specificPropertyAds,
  });
};

const specificPropertyAdvertType = (req, res) => {
  const {
    id,
  } = req.params;

  const {
    type,
  } = req.query;

  const foundPropertyId = properties.find(property => id === property.id);
  if (!foundPropertyId) {
    return res.status(404).json({
      status: 404,
      error: 'Property Id does not exist',
    });
  }

  const specificPropertyAds = properties.filter(property => id === property.id);

  const specificPropertyAdsType = specificPropertyAds.filter(specificPropertyAd => type === specificPropertyAd.type);

  if (specificPropertyAdsType === undefined || specificPropertyAdsType.length === 0) {
    return res.status(404).json({
      status: 404,
      error: 'Property type does not exist',
    });
  }

  return res.status(200).json({
    status: 200,
    data: specificPropertyAdsType,
  });
};

const getAll = {
  specificPropertyAdvert,
  specificPropertyAdvertType,
};

export default getAll;
