import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnsTask1644289129833 implements MigrationInterface {
    name = 'addColumnsTask1644289129833'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" ADD "start_at" date`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "end_at" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "end_at"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "start_at"`);
    }

}
