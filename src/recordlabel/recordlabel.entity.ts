import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Vinyl } from "../vinyl/vinyl.entity";

@Entity()
export class RecordLabel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Vinyl, vinyl => vinyl.recordLabel)
    vinyls: Vinyl[];
}