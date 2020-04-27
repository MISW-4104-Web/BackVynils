import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PerformerPrize } from '../performerprize/performerprize.entity';

@Entity()
export class Prize {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    organization: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(type => PerformerPrize, performerPrize => performerPrize.prize)
    performerPrizes: PerformerPrize[];
}