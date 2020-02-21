import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';

import { Vinyl } from "../vinyl/vinyl.entity";
import { Prize } from "../prize/prize.entity";

@Entity()
export class Artist {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    birthDate: Date;

    @Column()
    description: string;

    @ManyToMany(type => Vinyl, vinyl => vinyl.artists)
    vinyls: Vinyl[];

    @OneToMany(type => Prize, prize => prize.artist)
    prizes: Prize[];
}