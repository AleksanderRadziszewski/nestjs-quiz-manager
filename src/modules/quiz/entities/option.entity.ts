import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
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

  // @ApiProperty({ type: () => Question })
  // @ManyToOne(() => Question, (question) => question.options)
  question: any;
}
