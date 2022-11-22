import { ApiProperty } from '@nestjs/swagger';
import { Quiz } from 'src/modules/quiz/entities/quiz.entity';

interface PaginationMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

class PaginatedDto {
  @ApiProperty()
  meta: PaginationMeta;
  @ApiProperty()
  items: Quiz[];
}

export { PaginationMeta, PaginatedDto };
