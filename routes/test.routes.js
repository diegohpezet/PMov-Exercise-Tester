import express from 'express';
import TestController from '../controllers/test.controller.js';

const router = express.Router();

router.get('/:githubUsername/:path', TestController.runTests);

export default router;