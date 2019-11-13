import request from 'supertest';
import app from '../src/app';

describe('GET /health', () => {
  it('should respond with healthy status', done => {
    return request(app)
      .get('/health')
      .expect(200, '{"status":"pass"}', done);
  });
});
