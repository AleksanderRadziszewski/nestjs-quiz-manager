import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[];
}
