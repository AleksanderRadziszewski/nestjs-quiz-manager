import { setSeederFactory } from 'typeorm-extension';
import { User } from '../../modules/user/user.entity';

export default setSeederFactory(User, async (faker) => {
  const user = new User();
  user.name = faker.name.fullName();
  user.email = faker.internet.email(user.name);
  user.password = faker.internet.password();
  user.createdAt = faker.date.between(
    '2020-01-01T00:00:00.000Z',
    '2023-01-01T00:00:00.000Z',
  );
  user.updateAt = faker.date.between(
    '2020-01-01T00:00:00.000Z',
    '2023-01-01T00:00:00.000Z',
  );

  return user;
});
