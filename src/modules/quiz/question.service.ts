import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';
import { QuestionRepository } from './question.repository';

@Injectable()
export class QuestionService {
  constructor(private questionRepository: QuestionRepository) {}
  async createQuestion(questionData: CreateQuestionDto) {
    return await this.questionRepository.createQuestion(questionData);
  }
}
