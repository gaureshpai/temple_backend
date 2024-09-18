import { MigrationInterface, QueryRunner } from "typeorm";

export class PoojaBookings1726677887141 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE devotee_pooja_bookings (
              id INT PRIMARY KEY AUTO_INCREMENT,
              name varchar(255),
              mobile varchar(255),
              address varchar(255),
              description text,
              pooja_seva_id int,
              booking_date DATE,
              status varchar(255),
              FOREIGN KEY (pooja_seva_id) REFERENCES pooja_list(id),
              created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
              updated_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
              is_deleted tinyint DEFAULT 0  
            );
          `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
