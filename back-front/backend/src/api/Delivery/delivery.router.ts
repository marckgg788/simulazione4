import { Router } from 'express';
import { getCategories } from './delivery.controller';


const router = Router();

router.get('/listCategory', getCategories);

export default router;
