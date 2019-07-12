import request from 'supertest';
import { expect } from 'chai';
import server from '../index';

describe('Login Controller', () => {
  describe('test POST /api/v1/auth/signin', () => {
    it('should not login a user when email is missing', (done) => {
      request(server)
        .post('/api/v1/auth/signin')
        .send({
          password: 'didier321',
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
    it('should not login a user when email is not in correct format', (done) => {
      request(server)
        .post('/api/v1/auth/signin')
        .send({
          email: 'alabonggmail.com',
          password: 'didier321',
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
    it('should not login a user when email does not exist', (done) => {
      request(server)
        .post('/api/v1/auth/signin')
        .send({
          email: 'beatrice@gmail.com',
          password: 'didier321',
        })
        .set('Accept', 'application/json')
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
    it('should not login a user when password is missing', (done) => {
      request(server)
        .post('/api/v1/auth/signin')
        .send({
          email: 'alabong@gmail.com',
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
    it('should not login a user when password is incorrect', (done) => {
      request(server)
        .post('/api/v1/auth/signup')
        .send({
          email: 'drogba@gmail.com',
          password: 'didier3213',
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
    it('should login a user when all parameters are correctly supplied', (done) => {
      request(server)
        .post('/api/v1/auth/signin')
        .send({
          email: 'dehinde@gmail.com',
          password: 'Dehinde321',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
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
