import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Album } from '../album/album.entity';

@Entity()
export class Track {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    duration: string;

    @ManyToOne(type => Album, album => album.tracks)
    album: Album;
}