import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Quiz } from './quiz.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
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

  @ApiProperty({ type: () => Quiz })
  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;

  // @ApiProperty({ type: () => Option })
  // @OneToMany(() => Option, (option) => option.question)
  options: any[];
}
