import { MigrationInterface, QueryRunner } from "typeorm";

export class Poojalist1726677741184 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE pooja_list (
              id INT PRIMARY KEY AUTO_INCREMENT,
              seva_name VARCHAR(255),
              description TEXT,
              price int,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              updated_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
              is_deleted tinyint DEFAULT 0  
            );
          `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
