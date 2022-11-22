/* eslint-disable import/no-cycle */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Question } from './question.entity';

@Entity('options')
export class Option {
  @ApiProperty({ description: ' Option id', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Option content',
    example: 'VSC',
  })
  @Column()
  text: string;

  @ApiProperty({ description: 'Whether option is correct', example: true })
  @Column()
  isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.options)
  question: Question;
}
