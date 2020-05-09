import { MigrationInterface, QueryRunner } from 'typeorm';

export class Maratona1588969540634 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE maratona (id INTEGER PRIMARY KEY AUTOINCREMENT, aula VARCHAR NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
