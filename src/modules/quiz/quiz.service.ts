import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { Quiz } from './quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>,
  ) {}
  async getAllQuizes(): Promise<Quiz[]> {
    return await this.quizRepository.find();
  }
  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne({
      where: { id: id },
      relations: { questions: true },
    });
  }
  async createNewQuiz(quizData: CreateQuizDto) {
    const quiz = await this.quizRepository.create(quizData);
    return await this.quizRepository.save(quiz);
  }
}
