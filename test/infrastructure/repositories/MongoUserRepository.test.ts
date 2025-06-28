import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoUserRepository } from '../../../src/infrastructure/repositories/MongoUserRepository';
import { User } from '../../../src/domain/entities/User';

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('MongoUserRepository', () => {
  const repo = new MongoUserRepository();

  it('should save and retrieve user', async () => {
    const user = new User({ name: 'Test', email: 'test@example.com' });
    const saved = await repo.save(user);
    expect(saved.name).toBe('Test');

    const found = await repo.getById(saved._id);
    expect(found.name).toBe('Test');
  });
});