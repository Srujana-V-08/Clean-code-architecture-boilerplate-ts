export class User {
  public readonly id: string | null;
  public readonly name: string;
  public email: string;
  public readonly createdAt: Date;

  constructor({ id = null, name, email }: { id?: string | null; name: string; email: string }) {
    if (!name) throw new Error('Name is required');
    if (!this.isValidEmail(email)) throw new Error('Invalid email');
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }

  private isValidEmail(email: string): boolean {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }
}