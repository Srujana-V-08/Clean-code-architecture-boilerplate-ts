import { Router } from 'express';
import { MongoUserRepository } from '../../../infrastructure/repositories/MongoUserRepository';
import { CreateUser } from '../../../domain/use-cases/CreateUser';
import { userController } from '../controllers/UserController';

const repo = new MongoUserRepository();
const useCase = new CreateUser(repo);
const router = Router();

router.post('/users', userController(useCase));

export default router;