import utils from '../helpers/commons';

const users = [
  {
    id: 1,
    email: 'drogba@gmail.com',
    first_name: 'Didier',
    last_name: 'Drogba',
    password: utils.hashPassword('didier321'),
    phone_number: '08124354643',
    address: 'ruxton street alagbado lagos',
    is_admin: true,
  },
  {
    id: 2,
    email: 'lampard@gmail.com',
    first_name: 'Frank',
    last_name: 'Lampard',
    password: utils.hashPassword('frank321'),
    phone_number: '07024354643',
    address: '5 Rex street',
    is_admin: false,
  },
];

export default users;
