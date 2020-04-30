import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';
import { Performer } from '../performer/performer.entity';
import { Comment } from '../comment/comment.entity';
import { CollectorAlbum } from '../collectoralbum/collectoralbum.entity';

@Entity()
export class Collector {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    telephone: string;

    @Column()
    email: string;

    @ManyToMany(type => Performer, performer => performer.collectors)
    favoritePerformers: Performer[];

    @OneToMany(type => Comment, comment => comment.collector)
    comments: Comment[];

    @OneToMany(type => CollectorAlbum, collectorAlbum => collectorAlbum.collector)
    collectorAlbums: CollectorAlbum[];
}