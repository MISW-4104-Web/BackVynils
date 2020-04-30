import { Column, OneToMany, ChildEntity } from 'typeorm';
import { Performer } from '../performer/performer.entity';
import { Musician } from '../musician/musician.entity';

@ChildEntity()
export class Band extends Performer {

    @Column()
    creationDate: Date;

    @OneToMany(type => Musician, musician => musician.band)
    musicians: Musician[];
}