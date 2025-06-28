import { Request, Response } from 'express';
import { CreateUser } from '../../../domain/use-cases/CreateUser';

export const userController = (createUser: CreateUser) => async (req: Request, res: Response) => {
  try {
    const user = await createUser.execute(req.body);
    res.status(201).json(user);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
};