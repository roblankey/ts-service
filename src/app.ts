import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import flash from 'express-flash';
import session from 'express-session';
import lusca from 'lusca';

import { ENVIRONMENT, SESSION_SECRET } from './util/secrets';

// controllers
import * as externalController from './controllers/external';
import * as greetingController from './controllers/greeting';
import * as healthController from './controllers/health';
import * as versionController from './controllers/version';

import { Request, Response } from 'express';

const app: express.Application = express();

// express settings
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());

app.use(
  lusca({
    xframe: 'SAMEORIGIN',
    xssProtection: true,
  })
);

const sess = {
  cookie: {
    secure: false,
  },
  resave: true,
  secret: `${SESSION_SECRET}`,
  saveUninitialized: true,
};

if (ENVIRONMENT === 'production') {
  sess.cookie.secure = true; // serve secure cookies
}

app.use(session(sess));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World').end();
});

app.get('/external', externalController.get);
app.get('/greeting/:name', greetingController.get);
app.get('/health', healthController.get);
app.get('/version', versionController.get);

export = app;
