import request from 'supertest';
import { expect } from 'chai';
import moment from 'moment';
import server from '../index';
import utils from '../helpers/commons';
import properties from '../models/property';

const testUser = {
  id: 1,
  email: 'drogba@gmail.com',
  first_name: 'Didier',
  last_name: 'Drogba',
  password: utils.hashPassword('didier321'),
  phone_number: '08124354643',
  address: 'ruxton street alagbado lagos',
  is_admin: true,
};

const userToken = utils.jwtToken(testUser);

describe('Delete Property Advert Controller', () => {
  describe('test DELETE /api/v1/property/:<property-id>', () => {
    it('should not delete a property data when user is not authenticated', (done) => {
      request(server)
        .delete(`/api/v1/property/${properties.id}`)
        .expect('Content-Type', /json/)
        .expect(401)
        .end((err, res) => {
          if (err) throw err;
          else {
            const responseData = JSON.parse(res.text);
            expect(responseData).to.be.an('object');
          }
          done();
        });
    });
    it('should not delete property data when property id cannot be found', (done) => {
      request(server)
        .delete('/api/v1/property/123')
        .set('Authorization', userToken)
        .expect('Content-Type', /json/)
        .expect(404)
        .end((err, res) => {
          if (err) throw err;
          else {
            const responseData = JSON.parse(res.text);
            expect(responseData).to.be.an('object');
          }
          done();
        });
    });
    it('should not delete a property data when token is invalid', (done) => {
      request(server)
        .delete(`/api/v1/property/${properties.id}`)
        .set('Authorization', 'ertyrqw')
        .expect('Content-Type', /json/)
        .expect(401)
        .end((err, res) => {
          if (err) throw err;
          else {
            const responseData = JSON.parse(res.text);
            expect(responseData).to.be.an('object');
          }
          done();
        });
    });
  });
});
