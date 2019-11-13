import errorHandler from 'errorhandler';

import * as app from './app';
import logger from './util/logger';

app.use(errorHandler());

// start express
const server = app.listen(app.get('port'), () => {
  const port = app.get('port');
  const env = app.get('env');
  logger.info(`App is running at http://localhost:${port} in ${env} mode`);
});

export = server;
