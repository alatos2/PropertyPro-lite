import request from 'supertest';
import { expect } from 'chai';
import server from '../index';

describe('GET Specific Property Adverts Type', () => {
  describe('test GET /api/v1/property-specific/:<property-id>', () => {
    it('should not get specific property adverts type if id cannot be found', (done) => {
      request(server)
        .get('/api/v1/property-specific/123?duplex')
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
    it('should not get specific property adverts type if TYPE cannot be found', (done) => {
      request(server)
        .get('/api/v1/property-specific/1?duplexes')
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
