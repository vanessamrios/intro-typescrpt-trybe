import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import { validateClasse, validateLevel, 
  validatePassword, validateUsername } from '../middlewares/users.middleware';

const userValidations = [validateClasse, validateLevel, validatePassword, validateUsername];

const router = Router();
const usersController = new UsersController();

router.post('/users', userValidations, usersController.create);

export default router;