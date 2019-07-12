import moment from 'moment';

const properties = [
  {
    id: '1',
    owner: '1',
    status: 'available',
    type: 'duplex',
    state: 'Lagos',
    city: 'Alagbado',
    address: '25 Ogurinde Street',
    price: 25000.00,
    created_on: moment().format(),
    image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561569684/house2_kagcwz.jpg',
  },
  {
    id: '2',
    owner: '2',
    status: 'sold',
    type: 'terrace',
    state: 'Ogun',
    city: 'Ota',
    address: '29 Ogunjimi Close',
    price: 5000.00,
    created_on: moment().format(),
    image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561569684/house1_r7ltr5.jpg',
  },
  {
    id: '3',
    owner: '2',
    status: 'sold',
    type: '3 bedroom flat',
    state: 'Osun',
    city: 'Iwo',
    address: 'Ruxton Street',
    price: 2570000.00,
    created_on: moment().format(),
    image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561569685/house3_ah7w7f.jpg',
  },
  {
    id: '4',
    owner: '2',
    status: 'sold',
    type: '2 bedroom flat',
    state: 'Ogun',
    city: 'Ota',
    address: '25 Ogurinde Street',
    price: 25000.00,
    created_on: moment().format(),
    image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561569685/house3_ah7w7f.jpg',
  },
];

export default properties;
