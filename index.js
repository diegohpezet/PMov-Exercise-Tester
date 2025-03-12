import 'dotenv/config';

import express from 'express';
import router from './routes/index.js';

const app = express();
const port = process.env.PORT || 35678;

app.use(router);

app.listen(port, function () {
  console.log(`App listening on http://localhost:${port}`);
});