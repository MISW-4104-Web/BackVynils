import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Prize } from '../prize/prize.entity';
import { Performer } from '../performer/performer.entity';

@Entity()
export class PerformerPrize {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    premiationDate: Date;

    @ManyToOne(type => Prize, prize => prize.performerPrizes)
    prize: Prize;

    @ManyToOne(type => Performer, performer => Performer)
    performer: Performer;
}