import moment from 'moment';

const properties = [
  {
    id: '2',
    owner: '1',
    status: 'available',
    type: '2 bedroom flat',
    state: 'Lagos',
    city: 'Alagbado',
    address: '25 Ogurinde Street',
    price: 25000.00,
    created_on: moment().format(),
    image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561056992/samples/people/boy-snow-hoodie.jpg',
  },
  {
    id: '2',
    owner: '2',
    status: 'sold',
    type: '3 bedroom flat',
    state: 'Ogun',
    city: 'Ota',
    address: '25 Ogurinde Street',
    price: 25000.00,
    created_on: moment().format(),
    image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561056992/samples/people/boy-snow-hoodie.jpg',
  },
  {
    id: '1',
    owner: '2',
    status: 'sold',
    type: '3 bedroom flat',
    state: 'Ogun',
    city: 'Ota',
    address: '25 Ogurinde Street',
    price: 25000.00,
    created_on: moment().format(),
    image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561056992/samples/people/boy-snow-hoodie.jpg',
  },
];

export default properties;
