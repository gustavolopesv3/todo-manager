import {MigrationInterface, QueryRunner} from "typeorm";

export class addColumnDescriptionTask1644125302440 implements MigrationInterface {
    name = 'addColumnDescriptionTask1644125302440'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "description"`);
    }

}
