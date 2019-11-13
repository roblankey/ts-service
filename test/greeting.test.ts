import request from 'supertest';
import app from '../src/app';

describe('GET /greeting', () => {
  it('should respond with correct name', done => {
    const name = 'Farnsworth';
    return request(app)
      .get(`/greeting/${name}`)
      .expect(200, `Hello ${name}`, done);
  });
});
