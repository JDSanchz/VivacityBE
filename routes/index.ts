import { Router } from 'express';
import applicantRoute from './applicantRoute'; 

const routes = Router();

routes.use('/awesome/applicant', applicantRoute());

export default routes;
