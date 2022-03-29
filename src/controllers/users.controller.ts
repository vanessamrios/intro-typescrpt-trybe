import { Request, Response } from 'express';
import UserService from '../services/users.service';

class UsersController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(200).json(users);
  };

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const token = {
      token: 'eyJhbGciOiJIUzI1NiIsIxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    };

    await this.userService.create(user);
    res.status(201).json(token);
  };
}

export default UsersController;