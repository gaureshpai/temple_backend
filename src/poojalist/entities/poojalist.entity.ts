import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity } from "typeorm";

@Entity('pooja_list')
export class Poojalist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    seva_name: string;

    @Column()
    description?: string;

    @Column()
    price: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    is_deleted: boolean;
}
