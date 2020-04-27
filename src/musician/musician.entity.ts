import { Entity, Column, ManyToOne } from 'typeorm';
import { Performer } from '../performer/performer.entity';
import { Band } from '../band/band.entity';

@Entity()
export class Musician extends Performer {

    @Column()
    birthDate: Date;

    @ManyToOne(type => Band, band => band.musicians)
    band: Band;
}