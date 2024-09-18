import { MigrationInterface, QueryRunner } from "typeorm";

export class Rooms1726678370406 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE rooms (
              id INT PRIMARY KEY AUTO_INCREMENT,
              room_number VARCHAR(10),
              room_type VARCHAR(50),
              capacity INT,
              status VARCHAR(30),
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              updated_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
              is_deleted tinyint DEFAULT 0
            );
          `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
