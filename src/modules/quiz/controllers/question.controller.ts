import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}
  @Get(':id')
  async getQuestionById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Question> {
    return this.questionService.findQuestionById(id);
  }
  @Get()
  async getAllQuestions(): Promise<Question[]> {
    return await this.questionService.getAllQuestions();
  }
  @Post()
  async saveQuestion(
    @Body() questionData: CreateQuestionDto,
  ): Promise<Question> {
    const quiz = await this.quizService.getQuizById(questionData.quizId);
    return await this.questionService.createQuestion(questionData, quiz);
  }
}
