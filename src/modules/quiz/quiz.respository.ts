import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizRepository {
  constructor(
    @InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>,
  ) {}

  async createQuiz(quizData: CreateQuizDto): Promise<Quiz> {
    const quiz = this.quizRepository.create(quizData);
    return this.quizRepository.save(quiz);
  }
}
