import { Request, Response } from 'express';

import * as apiservice from '../services/api-service';

export const get = async (req: Request, res: Response) => {
  const users = await apiservice.getUsers();
  res.json(users).end();
};
