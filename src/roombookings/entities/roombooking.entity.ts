import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Room } from 'src/rooms/entities/room.entity';

@Entity('room_bookings')
export class Roombooking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    user_name: string;

    @Column({ type: 'varchar', length: 255 })
    user_mobile: string;

    @Column({ type: 'text' })
    address: string;

    @Column({ type: 'int' })
    room_id: number;

    @ManyToOne(() => Room, (room) => room.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'room_id' })
    room: Room;

    @Column({ type: 'date' })
    booking_start_date: Date;

    @Column({ type: 'date' })
    booking_end_date: Date;

    @Column({ type: 'varchar', length: 30 })
    status: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @Column({ type: 'tinyint', default: 0 })
    is_deleted: boolean;
}
