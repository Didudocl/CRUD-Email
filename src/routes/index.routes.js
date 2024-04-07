'use strict';

import express from 'express';
import userRoutes from './user.routes.js';
import reportRoutes from './reports.routes.js';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/report', reportRoutes);

export default router;