import { Poojalist } from "src/poojalist/entities/poojalist.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";


@Entity('devotee_pooja_bookings')
export class Poojabooking {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    mobile: string;

    @Column({ type: 'varchar', length: 255 })
    address: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @Column({ type: 'int' })
    pooja_seva_id: number;

    @ManyToOne(() => Poojalist)
    @JoinColumn({ name: 'pooja_seva_id' })
    poojaSeva: Poojalist;

    @Column({ type: 'date' })
    booking_date: Date;

    @Column({ type: 'varchar', length: 255 })
    status: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @Column({ type: 'tinyint', default: 0 })
    is_deleted: boolean;
}
