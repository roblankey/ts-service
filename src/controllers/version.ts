import { Request, Response } from 'express';
import pjson from 'pjson';

export const get = (req: Request, res: Response) => {
  res.json({ version: `${pjson.version}` }).end();
};
