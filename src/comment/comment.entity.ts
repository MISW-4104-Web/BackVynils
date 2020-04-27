import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Album } from '../album/album.entity';
import { Collector } from '../collector/collector.entity';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    rating: number;

    @ManyToOne(type => Album, album => album.comments)
    album: Album;

    @ManyToOne(type => Collector, collector => collector.comments)
    collector: Collector;
}