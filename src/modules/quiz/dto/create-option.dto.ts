import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @ApiProperty({ description: ' Option name', example: 'unlock' })
  @IsNotEmpty()
  @Length(3, 255)
  text: string;

  @ApiProperty({ description: 'related question', example: 1 })
  @IsNotEmpty()
  questionId: number;

  @ApiProperty({ description: 'correctness of option', example: true })
  @IsNotEmpty()
  isCorrect: boolean;
}
