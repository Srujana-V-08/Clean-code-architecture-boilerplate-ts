import { User } from '../entities/User';

export interface UserRepository {
  save(user: User): Promise<object>;
  getById(id: string): Promise<object | undefined>;
}