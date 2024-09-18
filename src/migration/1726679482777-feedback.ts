import { MigrationInterface, QueryRunner } from "typeorm";

export class Feedback1726679482777 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE feedback (
                id INT PRIMARY KEY AUTO_INCREMENT,
                user_name VARCHAR(255),
                user_mobile VARCHAR(255),
                message TEXT,
                response TEXT,
                status varchar(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                is_deleted tinyint default 0
               
            );
        `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
