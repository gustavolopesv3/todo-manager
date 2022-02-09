import { MigrationInterface, QueryRunner } from 'typeorm';

export class password1644366449731 implements MigrationInterface {
  name = 'password1644366449731';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "UQ_0adc0a8834ea0f252e96d154de9"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "UQ_0adc0a8834ea0f252e96d154de9" UNIQUE ("full_name")`,
    );
  }
}
