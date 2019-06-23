import request from 'supertest';
import { expect } from 'chai';
import server from '../index';

describe('GET All Property Adverts', () => {
  describe('test GET /api/v1/property', () => {
    it('should get all property adverts', (done) => {
      request(server)
        .get('/api/v1/property')
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
