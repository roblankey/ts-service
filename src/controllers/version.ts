import { Request, Response } from 'express';

export const get = (req: Request, res: Response) => {
  res.json({ version: '0.1.0' });
};
