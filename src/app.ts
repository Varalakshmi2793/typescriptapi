import express from 'express';

import todoroute from './routes/todos';
import bodyParser from 'body-parser';

const app= express();
app.use(bodyParser.json())
app.use(todoroute)
app.listen(2000);