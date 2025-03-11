import express from 'express';
import testRouter from './test.routes.js';

const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));
router.use('/tests', testRouter);

export default router;