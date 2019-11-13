import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';

import * as healthController from './controllers/health';
import * as versionController from './controllers/version';

const app: express.Application = express();

// express settings
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/health', healthController.get);
app.get('/version', versionController.get);

export = app;
