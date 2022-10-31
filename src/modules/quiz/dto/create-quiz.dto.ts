import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @ApiProperty({
    description: 'text of title',
    example: 'Preferences',
  })
  @IsNotEmpty({ message: 'The quiz should have a title' })
  @Length(3, 255)
  title: string;
  @ApiProperty({
    description: 'User Preferences ...',
  })
  @IsNotEmpty()
  @Length(3)
  description: string;
}
