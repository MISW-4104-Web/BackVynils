import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, JoinTable, TableInheritance } from 'typeorm';
import { Collector } from '../collector/collector.entity';
import { Album } from '../album/album.entity';
import { PerformerPrize } from '../performerprize/performerprize.entity';

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Performer {
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