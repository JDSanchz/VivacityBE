import request from 'supertest';
import express from 'express';
import { getFunInformation } from '../controllers/applicantController';  // Import the function from the file where it's defined

const app = express();
app.get('/awesome/applicant', getFunInformation);  // Mimic the routing in your main app

describe('GET /awesome/applicant', () => {
  it('should return some fun information', async () => {
    const res = await request(app)
      .get('/awesome/applicant')
      .set('Accept', 'application/json');
    
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('fullName', 'Jesus Del Barrio');
    expect(res.body).toHaveProperty('favoriteLanguages', ["TypeScript", "JavaScript", "Python"]);
    expect(res.body).toHaveProperty('top3Hobbies', ["Learning", "Reading", "Soccer"]);
    expect(res.body).toHaveProperty('helloIn7Languages');
  });

  // Another test to simulate a server error and expect a 500 status code
  it('should return an error', async () => {
    // Here you'd mock the function to throw an error
    // Then call the API and expect the status code to be 500
  });
});
