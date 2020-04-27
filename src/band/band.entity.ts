import { Entity, Column, OneToMany } from 'typeorm';
import { Performer } from '../performer/performer.entity';
import { Musician } from '../musician/musician.entity';

@Entity()
export class Band extends Performer {

    @Column()
    creationDate: Date;

    @OneToMany(type => Musician, musician => musician.band)
    musicians: Musician[];
}