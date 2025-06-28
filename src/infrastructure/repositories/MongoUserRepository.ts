import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User';
import { UserModel } from '../models/UserModel';

export class MongoUserRepository implements UserRepository {
  async save(user: User): Promise<object> {
    const saved = await new UserModel(user).save();
    return saved.toObject();
  }
  async getById(id: string): Promise<object | undefined> {
    const found = await UserModel.findById(id);
    return found?.toObject();
  }
}