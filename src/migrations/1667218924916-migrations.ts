import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1667218924916 implements MigrationInterface {
  name = 'migrations1667218924916';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT '1'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "quizes" ALTER COLUMN "isActive" SET DEFAULT true`,
    );
  }
}
