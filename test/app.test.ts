import request from 'supertest';
import app from '../server';  

describe('GET /awesome/applicant', () => {
  it('checks status and fullName', async () => {
    const res = await request(app).get('/awesome/applicant');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('fullName', 'Jesus Del Barrio');
  });
});
