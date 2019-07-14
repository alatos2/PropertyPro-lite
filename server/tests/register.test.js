import request from 'supertest';
import { expect } from 'chai';
import server from '../index';

describe('Register Controller', () => {
  describe('test POST /api/v1/auth/signup', () => {
    it('should not register a user when email is missing', (done) => {
      request(server)
        .post('/api/v1/auth/signup')
        .send({
          firstName: 'Tosin',
          lastName: 'Alabi',
          password: 'didier321',
          confirmPassword: 'didier321',
          phoneNumber: '08137733203',
          address: 'Nnamani Adewusi Street',
        })
        .set('Accept', 'application/json')
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
    it('should not register a user when email is not in correct format', (done) => {
      request(server)
        .post('/api/v1/auth/signup')
        .send({
          email: 'alabonggmail.com',
          firstName: 'Tosin',
          lastName: 'Alabi',
          password: 'didier321',
          confirmPassword: 'didier321',
          phoneNumber: '08137733203',
          address: 'Nnamani Adewusi Street',
        })
        .set('Accept', 'application/json')
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
    it('should not register a user when email already exists', (done) => {
      request(server)
        .post('/api/v1/auth/signup')
        .send({
          email: 'dehinde@gmail.com',
          firstName: 'Tosin',
          lastName: 'Alabi',
          password: 'didier321',
          confirmPassword: 'didier321',
          phoneNumber: '08137733203',
          address: 'Nnamani Adewusi Street',
        })
        .set('Accept', 'application/json')
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
    it('should not register a user when first name is missing', (done) => {
      request(server)
        .post('/api/v1/auth/signup')
        .send({
          email: 'alabong@gmail.com',
          lastName: 'Alabi',
          password: 'didier321',
          confirmPassword: 'didier321',
          phoneNumber: '08137733203',
          address: 'Nnamani Adewusi Street',
        })
        .set('Accept', 'application/json')
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
    it('should not register a user when last name is missing', (done) => {
      request(server)
        .post('/api/v1/auth/signup')
        .send({
          email: 'alabong@gmail.com',
          firstname: 'Tosin',
          password: 'didier321',
          confirmPassword: 'didier321',
          phoneNumber: '08137733203',
          address: 'Nnamani Adewusi Street',
        })
        .set('Accept', 'application/json')
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
    it('should not register a user when password is missing', (done) => {
      request(server)
        .post('/api/v1/auth/signup')
        .send({
          email: 'alabong@gmail.com',
          firstName: 'Tosin',
          lastName: 'Alabi',
          confirmPassword: 'didier321',
          phoneNumber: '08137733203',
          address: 'Nnamani Adewusi Street',
        })
        .set('Accept', 'application/json')
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
    it('should not register a user when confirm password is missing', (done) => {
      request(server)
        .post('/api/v1/auth/signup')
        .send({
          email: 'alabong@gmail.com',
          firstName: 'Tosin',
          lastName: 'Alabi',
          password: 'didier321',
          phoneNumber: '08137733203',
          address: 'Nnamani Adewusi Street',
        })
        .set('Accept', 'application/json')
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
    it('should not register a user when password does not equal confirm password', (done) => {
      request(server)
        .post('/api/v1/auth/signup')
        .send({
          email: 'alabong@gmail.com',
          firstName: 'Tosin',
          lastName: 'Alabi',
          password: 'didier3210',
          confirmPassword: 'didier321',
          phoneNumber: '08137733203',
          address: 'Nnamani Adewusi Street',
        })
        .set('Accept', 'application/json')
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
    it('should not register a user when phone number is missing', (done) => {
      request(server)
        .post('/api/v1/auth/signup')
        .send({
          email: 'alabong@gmail.com',
          firstName: 'Tosin',
          lastName: 'Alabi',
          password: 'didier321',
          confirmPassword: 'didier321',
          address: 'Nnamani Adewusi Street',
        })
        .set('Accept', 'application/json')
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
    it('should not register a user when address is missing', (done) => {
      request(server)
        .post('/api/v1/auth/signup')
        .send({
          email: 'alabong@gmail.com',
          firstName: 'Tosin',
          lastName: 'Alabi',
          password: 'didier321',
          confirmPassword: 'didier321',
          phoneNumber: '08137733203',
        })
        .set('Accept', 'application/json')
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
    it('should register a user when all parameters are supplied', (done) => {
      request(server)
        .post('/api/v1/auth/signup')
        .send({
          email: 'alabong@gmail.com',
          first_name: 'Tosin',
          last_name: 'Alabi',
          password: 'didier321',
          phone_number: '08137733203',
          address: '11 Nnamani Adewusi Street',
        })
        .set('Accept', 'application/json')
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
