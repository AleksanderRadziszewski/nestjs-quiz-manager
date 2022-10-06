import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { Question } from './question.entity';

@Injectable()
export class QuestionRepository {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async createQuestion(questionData: CreateQuestionDto): Promise<Question> {
    const question = this.questionRepository.create(questionData);
    return await this.questionRepository.save(question);
  }
}
