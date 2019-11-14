import { NextFunction } from 'connect';
import { Request, Response } from 'express';
import logger from '../util/logger';

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.path}`);
  next();
};

export = requestLogger;
