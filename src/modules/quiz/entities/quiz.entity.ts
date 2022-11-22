/* eslint-disable import/no-cycle */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Question } from './question.entity';

@Entity('quizes')
export class Quiz {
  @ApiProperty({ description: ' Quiz id', example: 1 })
  @PrimaryGeneratedColumn({
    comment: 'The quiz unique identifier',
  })
  id: number;

  @ApiProperty({ description: ' Quiz title' })
  @Column()
  title: string;

  @ApiProperty({ description: ' Quiz description' })
  @Column({ type: 'text' })
  description: string;

  @ApiProperty({ description: ' Quiz activity' })
  @Column({
    type: 'boolean',
    default: 1,
  })
  isActive: boolean;

  @ApiProperty({
    description: 'List of questions',
  })
  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
