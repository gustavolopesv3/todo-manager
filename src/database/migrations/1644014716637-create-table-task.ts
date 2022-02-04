import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableTask1644014716637 implements MigrationInterface {
  name = 'createTableTask1644014716637';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."tasks_status_enum" AS ENUM('TODO', 'DONE', 'DOING', 'CANCELED', 'PAUSED')`,
    );
    await queryRunner.query(
      `CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "status" "public"."tasks_status_enum" NOT NULL DEFAULT 'TODO', CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tasks"`);
    await queryRunner.query(`DROP TYPE "public"."tasks_status_enum"`);
  }
}
