import { IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty({
    description: 'text of question',
    example: 'What is you favourite IDE?',
  })
  @IsNotEmpty()
  @Length(3, 255)
  question: string;

  @IsNotEmpty()
  quizId: number;
}
