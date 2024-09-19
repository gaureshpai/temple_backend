import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('donations')
export class Donation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    user_name: string;

    @Column({ type: 'varchar', length: 255 })
    user_mobile: string;

    @Column({ type: 'bigint' })
    amount: number;

    @Column({ type: 'date' })
    donation_date: Date;

    @Column({ type: 'varchar', length: 255 })
    purpose: string;

    @Column({ type: 'varchar', length: 255 })
    status: string;

    @Column({ type: 'varchar', length: 255 })
    payment_method: string;

    @Column({ type: 'varchar', length: 255 })
    payment_id: string;

    @Column({ type: 'tinyint', default: 0 })
    is_deleted: boolean;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
