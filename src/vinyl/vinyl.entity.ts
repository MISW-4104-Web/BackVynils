import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { RecordLabel } from "../recordlabel/recordlabel.entity";
import { Artist } from "../artist/artist.entity";
import { Review } from "../review/review.entity";

@Entity()
export class Vinyl {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cover: string;

    @Column()
    releaseDate: Date;

    @Column()
    description: string;

    @ManyToOne(type => RecordLabel, recordLabel => recordLabel.vinyls)
    recordLabel: RecordLabel;

    @ManyToMany(type => Artist, artist => artist.vinyls)
    @JoinTable()
    artists: Artist[];

    @OneToMany(type => Review, review => review.vinyl, {
        cascade: true
    })
    reviews: Review[];
}