/* eslint-disable import/no-cycle */
import {
  Column,
  Entity,
  IsNull,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Quiz } from './quiz.entity';
import { Option } from './option.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('questions')
export class Question {
  @ApiProperty({ description: ' Question id', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({
    description: 'question content',
    example: 'What is your favourite IDE?',
  })
  @Column()
  question: string;

  @ApiProperty({
    description: 'Quiz of the question',
  })
  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;

  @ApiProperty({ description: 'Options of the question' })
  @OneToMany(() => Option, (option) => option.question)
  options: Option[];
}
