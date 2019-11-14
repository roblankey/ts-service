import request from 'supertest';
import app from '../src/app';

describe('GET /external', () => {
  it('should respond with data', done => {
    return request(app)
        .get('/external')
        .expect(200, /\[{.*}\]/, done);
  });
});
