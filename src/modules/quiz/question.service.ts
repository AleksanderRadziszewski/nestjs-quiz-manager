import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { Question } from './question.entity';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}
  async createQuestion(
    questionData: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const question = await this.questionRepository.create({
      ...questionData,
      quiz,
    });
    return await this.questionRepository.save(question);
  }
}
