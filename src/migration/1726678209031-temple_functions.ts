import { MigrationInterface, QueryRunner } from "typeorm";

export class TempleFunctions1726678209031 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE temple_functions (
              id INT PRIMARY KEY AUTO_INCREMENT,
              function_name VARCHAR(255),
              sevadar_name VARCHAR(255),
              description TEXT,
              event_date DATE,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              updated_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
              is_deleted tinyint DEFAULT 0  
            );
          `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
