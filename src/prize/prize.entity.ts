import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import { Organization } from "../organization/organization.entity";
import { Artist } from "../artist/artist.entity";

@Entity()
export class Prize {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    premiationDate: Date;

    @OneToOne(type => Organization, organization => organization.prize)
    @JoinColumn()
    organization: Organization;

    @ManyToOne(type => Artist, artist => artist.prizes)
    artist: Artist;
}