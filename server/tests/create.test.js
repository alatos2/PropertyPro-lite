import request from 'supertest';
import { expect } from 'chai';
import moment from 'moment';
import server from '../index';
import utils from '../helpers/commons';

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

describe('Create Property Advert Controller', () => {
  describe('test POST /api/v1/property', () => {
    it('should not create a property advert when user is not authenticated', (done) => {
      request(server)
        .post('/api/v1/property')
        .send({
          status: 'available',
          type: '2 bedroom flat',
          state: 'Lagos',
          city: 'Alagbado',
          address: '25 Ogurinde Street',
          price: 25000.00,
          image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561056992/samples/people/boy-snow-hoodie.jpg',
        })
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
    it('should not create a property advert when status is missing', (done) => {
      request(server)
        .post('/api/v1/property')
        .send({
          type: '2 bedroom flat',
          state: 'Lagos',
          city: 'Alagbado',
          address: '25 Ogurinde Street',
          price: 25000.00,
          image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561056992/samples/people/boy-snow-hoodie.jpg',
        })
        .set('Authorization', userToken)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) throw err;
          else {
            const responseData = JSON.parse(res.text);
            expect(responseData).to.be.an('object');
          }
          done();
        });
    });
    it('should not create a property advert when property type is missing', (done) => {
      request(server)
        .post('/api/v1/property')
        .send({
          status: 'available',
          state: 'Lagos',
          city: 'Alagbado',
          address: '25 Ogurinde Street',
          price: 25000.00,
          image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561056992/samples/people/boy-snow-hoodie.jpg',
        })
        .set('Authorization', userToken)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) throw err;
          else {
            const responseData = JSON.parse(res.text);
            expect(responseData).to.be.an('object');
          }
          done();
        });
    });
    it('should not create a property advert when state is missing', (done) => {
      request(server)
        .post('/api/v1/property')
        .send({
          status: 'sold',
          type: '2 bedroom flat',
          city: 'Alagbado',
          address: '25 Ogurinde Street',
          price: 25000.00,
          image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561056992/samples/people/boy-snow-hoodie.jpg',
        })
        .set('Authorization', userToken)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) throw err;
          else {
            const responseData = JSON.parse(res.text);
            expect(responseData).to.be.an('object');
          }
          done();
        });
    });
    it('should not create a property advert when city is missing', (done) => {
      request(server)
        .post('/api/v1/property')
        .send({
          status: 'available',
          type: '2 bedroom flat',
          state: 'Lagos',
          address: '25 Ogurinde Street',
          price: 25000.00,
          image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561056992/samples/people/boy-snow-hoodie.jpg',
        })
        .set('Authorization', userToken)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) throw err;
          else {
            const responseData = JSON.parse(res.text);
            expect(responseData).to.be.an('object');
          }
          done();
        });
    });
    it('should not create a property advert when address is missing', (done) => {
      request(server)
        .post('/api/v1/property')
        .send({
          status: 'sold',
          type: '2 bedroom flat',
          state: 'Lagos',
          city: 'Alagbado',
          price: 25000.00,
          image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561056992/samples/people/boy-snow-hoodie.jpg',
        })
        .set('Authorization', userToken)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) throw err;
          else {
            const responseData = JSON.parse(res.text);
            expect(responseData).to.be.an('object');
          }
          done();
        });
    });
    it('should not create a property advert when price is missing', (done) => {
      request(server)
        .post('/api/v1/property')
        .send({
          status: 'sold',
          type: '2 bedroom flat',
          state: 'Lagos',
          city: 'Alagbado',
          address: '25 Ogurinde Street',
          image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561056992/samples/people/boy-snow-hoodie.jpg',
        })
        .set('Authorization', userToken)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) throw err;
          else {
            const responseData = JSON.parse(res.text);
            expect(responseData).to.be.an('object');
          }
          done();
        });
    });
    it('should not create a property advert when image url is missing', (done) => {
      request(server)
        .post('/api/v1/property')
        .send({
          status: 'sold',
          type: '2 bedroom flat',
          state: 'Lagos',
          city: 'Alagbado',
          address: '25 Ogurinde Street',
          price: 25000.00,
        })
        .set('Authorization', userToken)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) throw err;
          else {
            const responseData = JSON.parse(res.text);
            expect(responseData).to.be.an('object');
          }
          done();
        });
    });
    it('should not create a property advert when price is a string', (done) => {
      request(server)
        .post('/api/v1/property')
        .send({
          status: 'sold',
          type: '2 bedroom flat',
          state: 'Lagos',
          city: 'Alagbado',
          address: '25 Ogurinde Street',
          price: 'fgfgfg',
          image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561056992/samples/people/boy-snow-hoodie.jpg',
        })
        .set('Authorization', userToken)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) throw err;
          else {
            const responseData = JSON.parse(res.text);
            expect(responseData).to.be.an('object');
          }
          done();
        });
    });
    it('should not create property advert when token is invalid', (done) => {
      request(server)
        .post('/api/v1/property')
        .send({
          status: 'available',
          type: '2 bedroom flat',
          state: 'Lagos',
          city: 'Alagbado',
          address: '25 Ogurinde Street',
          price: 25000.00,
          image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561056992/samples/people/boy-snow-hoodie.jpg',
        })
        .set('Authorization', 'ab12er34')
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
    it('should create property advert when all parameters are correctly supplied', (done) => {
      request(server)
        .post('/api/v1/property')
        .send({
          status: 'available',
          type: '2 bedroom flat',
          state: 'Lagos',
          city: 'Alagbado',
          address: '25 Ogurinde Street',
          price: 25000.00,
          image_url: 'https://res.cloudinary.com/daealmvag/image/upload/v1561056992/samples/people/boy-snow-hoodie.jpg',
        })
        .set('Authorization', userToken)
        .expect('Content-Type', /json/)
        .expect(201)
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
