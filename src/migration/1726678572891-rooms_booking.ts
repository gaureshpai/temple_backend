import { MigrationInterface, QueryRunner } from "typeorm";

export class RoomsBooking1726678572891 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE room_bookings (
              id INT PRIMARY KEY AUTO_INCREMENT,
              user_name VARCHAR(255),
              user_mobile VARCHAR(255),
              address text,
              room_id INT,
              booking_start_date DATE,
              booking_end_date DATE,
              status VARCHAR(30),
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              updated_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
              is_deleted tinyint default 0,
              FOREIGN KEY (room_id) REFERENCES rooms(id)
            );
          `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
