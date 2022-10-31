import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './question.entity';
import { ApiProperty } from '@nestjs/swagger';

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
  @ApiProperty({
    description: 'correctness',
    example: 'True',
  })
  @Column()
  isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.options)
  question: Question;
}
