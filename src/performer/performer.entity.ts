import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, JoinTable } from 'typeorm';
import { Collector } from '../collector/collector.entity';
import { Album } from '../album/album.entity';
import { PerformerPrize } from '../performerprize/performerprize.entity';

@Entity()
export abstract class Performer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    description: string;

    @ManyToMany(type => Collector, collector => collector.favoritePerformers)
    @JoinTable()
    collectors: Collector[];

    @ManyToMany(type => Album, album => album.performers)
    @JoinTable()
    albums: Album[];

    @OneToMany(type => PerformerPrize, performerPrize => performerPrize.performer)
    performerPrizes: PerformerPrize[];
}