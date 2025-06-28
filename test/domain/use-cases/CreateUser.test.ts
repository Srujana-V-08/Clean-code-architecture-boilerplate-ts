import { CreateUser } from '../../../src/domain/use-cases/CreateUser';
import { User } from '../../../src/domain/entities/User';

describe('CreateUser Use Case', () => {
  const mockRepo = {
    save: jest.fn().mockImplementation(async (user: User) => ({ id: '123', ...user })),
    getById: jest.fn()
  };

  it('should create a user', async () => {
    const useCase = new CreateUser(mockRepo);
    const result = await useCase.execute({ name: 'Test', email: 'test@example.com' });
    expect(result.name).toBe('Test');
    expect(mockRepo.save).toHaveBeenCalled();
  });

  it('should throw on invalid email', async () => {
    const useCase = new CreateUser(mockRepo);
    await expect(useCase.execute({ name: 'Test', email: 'bademail' }))
      .rejects.toThrow('Invalid email');
  });
});