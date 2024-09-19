import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('feedback')
export class Feedback {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    user_name: string;

    @Column({ type: 'varchar', length: 255 })
    user_mobile: string;

    @Column({ type: 'text' })
    message: string;

    @Column({ type: 'text', nullable: true })
    response?: string;

    @Column({ type: 'varchar', length: 255 })
    status: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @Column({ type: 'tinyint', default: 0 })
    is_deleted: boolean;
}
