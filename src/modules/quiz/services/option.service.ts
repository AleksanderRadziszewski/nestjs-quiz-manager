import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOptionDto } from '../dto/create-option.dto';
import { Option } from '../entities/option.entity';
import { Question } from '../entities/question.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option) private optionRepository: Repository<Option>,
  ) {}

  async createOption(createOption: CreateOptionDto, question: Question) {
    const newOption = this.optionRepository.create({
      ...createOption,
      question,
    });
    return this.optionRepository.save(newOption);
  }
}
