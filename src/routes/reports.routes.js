'use strict';

import express from 'express';
import { createReport } from '../controllers/reports.controller.js';

const router = express.Router();

router.post('/', createReport);

export default router;