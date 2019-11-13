import {Request,Response} from 'express';

export const get = (req: Request, res: Response) => {
    res.json({ status: 'pass' });
};
