import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async findQuestionById(id: number): Promise<Question> {
    return await this.questionRepository.findOne({
      where: { id: id },
      relations: { quiz: true, options: true },
    });
  }
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
