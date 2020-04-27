import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ALBUM_STATUS } from '../albumstatus/albumstatus.enum';
import { Album } from '../album/album.entity';
import { Collector } from '../collector/collector.entity';

@Entity()
export class AlbumCollector {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @Column({
        type: "enum",
        enum: ALBUM_STATUS
    })
    status: ALBUM_STATUS

    @ManyToOne(type => Album, album => album.albumCollectors)
    album: Album;

    @ManyToOne(type => Collector, collector => collector.albumCollectors)
    collector: Collector;
}