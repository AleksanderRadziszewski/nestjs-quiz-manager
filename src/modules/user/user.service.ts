import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRegisterRequestDto } from './dto/user-register.req.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async doUserRegistration(userRegister: UserRegisterRequestDto) {
    const newUser = this.userRepository.create({ ...userRegister });
    return await this.userRepository.save(newUser);
  }
}
