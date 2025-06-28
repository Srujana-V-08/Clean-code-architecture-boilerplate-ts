import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

export class CreateUser {
  constructor(private repo: UserRepository) {}

  async execute({ name, email }: { name: string; email: string }) {
    const user = new User({ name, email });
    return this.repo.save(user);
  }
}