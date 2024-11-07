

import { Router } from 'express';
import { searchRestaurants } from '../controllers/searchController';

const router = Router();

router.get('/search', searchRestaurants);

export default router;
