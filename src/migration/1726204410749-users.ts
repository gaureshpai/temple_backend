import { MigrationInterface, QueryRunner } from "typeorm";

export class Users1726204410749 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE users (
              id INT PRIMARY KEY AUTO_INCREMENT,
              name VARCHAR(255),
              email VARCHAR(255) UNIQUE,
              password VARCHAR(255),
              phone_number VARCHAR(15),
              role  VARCHAR(255),
              user_status tinyint DEFAULT 1,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              updated_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
          `);

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
