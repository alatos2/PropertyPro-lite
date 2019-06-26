import request from 'supertest';
import { expect } from 'chai';
import server from '../index';

describe('GET Specific Property Adverts', () => {
  describe('test GET /api/v1/property/:<property-id>', () => {
    it('should get specific property adverts', (done) => {
      request(server)
        .get('/api/v1/property/1')
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
    it('should not get specific property adverts if id cannot be found', (done) => {
      request(server)
        .get('/api/v1/property/123')
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
  });
});
