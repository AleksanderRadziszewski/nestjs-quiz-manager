import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get()
  getAllQuizzes() {
    return this.quizService.getAllQuiz();
  }
  @Post('/create')
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto): Promise<Quiz> {
    return await this.quizService.createNewQuiz(quizData);
  }
}
