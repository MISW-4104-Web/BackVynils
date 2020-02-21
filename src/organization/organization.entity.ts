import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { Prize } from "../prize/prize.entity";

@Entity()
export class Organization {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @OneToOne(type => Prize, prize => prize.organization)
    prize: Prize;

}