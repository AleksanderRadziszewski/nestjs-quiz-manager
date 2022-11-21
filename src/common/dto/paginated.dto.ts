import { ApiProperty } from '@nestjs/swagger';

interface PaginationMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

class PaginatedDto<TData> {
  @ApiProperty()
  items: TData[];
  @ApiProperty()
  meta: PaginationMeta;
}

export { PaginationMeta, PaginatedDto };
