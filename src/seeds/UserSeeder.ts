import { User } from '../modules/user/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import * as bcrypt from 'bcrypt';

export class UserSeeder implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    const userRepository = dataSource.getRepository(User);
    const salt = await bcrypt.genSalt();

    const userData = {
      name: 'Alex Kowalski',
      email: 'kowalski@email.com',
      password: await bcrypt.hash('teste', salt),
    };

    const userExist = await userRepository.findOneBy({ email: userData.email });

    if (!userExist) {
      const newUser = userRepository.create(userData);
      await userRepository.save(newUser);
    }
  }
}
