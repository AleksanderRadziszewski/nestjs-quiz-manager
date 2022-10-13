import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async validateUserCreds(email: string, password: string): Promise<User> {
    const user = await this.userService.getUserByEmail(email);
    if (!user) throw new BadRequestException();
    if (!(await bcrypt.compare(password, user.password)))
      throw new UnauthorizedException();
    return user;
  }
}
