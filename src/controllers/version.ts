import { Request, Response } from 'express';
import { VERSION } from '../util/secrets';

export const get = (req: Request, res: Response) => {
  res.json({ version: VERSION }).end();
};
