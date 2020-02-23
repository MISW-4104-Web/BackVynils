import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Vinyl } from "../vinyl/vinyl.entity";

@Entity()
export class Track {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    duration: string;

    @ManyToOne(type => Vinyl, vinyl => vinyl.tracks)
    vinyl: Vinyl;
}