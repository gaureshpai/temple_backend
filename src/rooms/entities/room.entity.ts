import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('rooms')
export class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 10 })
    room_number: string;

    @Column({ type: 'varchar', length: 50 })
    room_type: string;

    @Column({ type: 'int' })
    capacity: number;

    @Column({ type: 'varchar', length: 30 })
    status: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @Column({ type: 'tinyint', default: 0 })
    is_deleted: boolean;
}