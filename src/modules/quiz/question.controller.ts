import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { Question } from './question.entity';
import { QuestionService } from './question.service';

@Controller('question')
export class QuestionController {
  constructor(private questionService: QuestionService) {}
  @Post()
  @UsePipes(ValidationPipe)
  async saveQuestion(
    @Body() questionData: CreateQuestionDto,
  ): Promise<Question> {
    return await this.questionService.createQuestion(questionData);
  }
}
