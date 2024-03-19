```typescript
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserSchema } from '../schemas/UserSchema';

export class Security {
  private static instance: Security;

  private constructor() {}

  public static getInstance(): Security {
    if (!Security.instance) {
      Security.instance = new Security();
    }
    return Security.instance;
  }

  public async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  public async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  public generateToken(user: UserSchema): string {
    return jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: '1d',
    });
  }

  public verifyToken(token: string): string | object {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  }
}
```