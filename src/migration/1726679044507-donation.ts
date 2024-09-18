import { MigrationInterface, QueryRunner } from "typeorm";

export class Donation1726679044507 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE donations (
              id INT PRIMARY KEY AUTO_INCREMENT,
              user_name VARCHAR(255),
              user_mobile VARCHAR(255),
              amount bigint,
              donation_date DATE,
              purpose VARCHAR(255),
              status VARCHAR(255),
              payment_method VARCHAR(255),
              payment_id VARCHAR(255),
              is_deleted tinyint default 0,
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              updated_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );
          `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
