import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity } from "typeorm";

@Entity('temple_functions')
export class Templefunction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    function_name: string;

    @Column({ type: 'varchar', length: 255 })
    sevadar_name: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @Column({ type: 'date' })
    event_date: Date;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @Column({ type: 'tinyint', default: 0 })
    is_deleted: boolean;
}
