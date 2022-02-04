import { MigrationInterface, QueryRunner } from 'typeorm';

export class relationUserTasks1644016280076 implements MigrationInterface {
  name = 'relationUserTasks1644016280076';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tasks" ADD "userId" integer`);
    await queryRunner.query(
      `ALTER TABLE "tasks" ADD CONSTRAINT "FK_166bd96559cb38595d392f75a35" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tasks" DROP CONSTRAINT "FK_166bd96559cb38595d392f75a35"`,
    );
    await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "userId"`);
  }
}
