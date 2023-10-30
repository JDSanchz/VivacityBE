import { Router } from 'express';
import * as applicantController from '../controllers/applicantController'; 

const router = Router();

router.get('/', applicantController.getFunInformation);

export default function applicantRoute() {
    return router;
}
