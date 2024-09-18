import { MigrationInterface, QueryRunner } from "typeorm";

export class HallBooking1726678775927 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE hall_bookings (
              id INT PRIMARY KEY AUTO_INCREMENT,
              user_name VARCHAR(255),
              user_mobile VARCHAR(255),
              booking_date DATE,
              event_description TEXT,
              status VARCHAR(255),
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              updated_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
              is_deleted tinyint default 0
            );
          `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
