import { Request, Response } from 'express';

import * as secrets from '../util/secrets';

export const get = (req: Request, res: Response) => {
  res.json({ version: secrets.VERSION });
};
