import request from 'supertest';
import app from '../src/app';

describe('GET /version', () => {
  it('should respond with a valid version', done => {
    return request(app)
      .get('/version')
      .expect(200, /"version":".*"/, done);
  });
});
