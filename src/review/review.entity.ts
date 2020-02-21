import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Vinyl } from "../vinyl/vinyl.entity";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    source: string;

    @ManyToOne(type => Vinyl, vinyl => vinyl.reviews)
    vinyl: Vinyl;
}