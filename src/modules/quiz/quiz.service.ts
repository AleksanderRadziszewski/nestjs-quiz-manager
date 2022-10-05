import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QuizRepository } from './quiz.respository';

@Injectable()
export class QuizService {
  constructor(private quizRepository: QuizRepository) {}
  getAllQuiz() {
    return [1, 2, 3, 'from service'];
  }
  async createNewQuiz(quizData: CreateQuizDto) {
    return await this.quizRepository.createQuiz(quizData);
  }
}
