import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @ApiProperty({ description: ' User id', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: ' User name', example: 'Alex Kowalski' })
  @Column()
  name: string;

  @ApiProperty({
    description: 'User email',
    example: 'alex.kowalsski@gmail.com',
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    description: ' Hashed user password',
    example: 'some encrypted value',
  })
  @Column({ type: 'text' })
  password: string;

  @ApiProperty({ description: 'When user was created' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: ' When user was updated' })
  @UpdateDateColumn()
  updateAt: Date;

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
