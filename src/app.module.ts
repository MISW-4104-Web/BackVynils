import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Album } from "./album/album.entity";
import { Comment } from "./comment/comment.entity";
import { Prize } from "./prize/prize.entity";
import { Track } from "./track/track.entity";
import { AlbumCollector } from './albumcollector/albumcollector.entity';
import { Band } from './band/band.entity';
import { Collector } from './collector/collector.entity';
import { Musician } from './musician/musician.entity';
import { Performer } from './performer/performer.entity';
import { PerformerPrize } from './performerprize/performerprize.entity';

import { RecordLabelModule } from './recordlabel/recordlabel.module';
import { PrizeModule } from './prize/prize.module';
import { TrackModule } from './track/track.module';
import { CollectorModule } from './collector/collector.module';
import { PerformerModule } from './performer/performer.module';
import { BandModule } from './band/band.module';
import { MusicianModule } from './musician/musician.module';
import { AlbumModule } from './album/album.module';
import { GenreModule } from './genre/genre.module';
import { CommentModule } from './comment/comment.module';
import { AlbumcollectorModule } from './albumcollector/albumcollector.module';
import { AlbumstatusModule } from './albumstatus/albumstatus.module';
import { PerformerprizeModule } from './performerprize/performerprize.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'vinyls',
      entities: [Album, AlbumCollector, Band, Collector, Comment, Musician, Performer, PerformerPrize, Prize, Track,],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true
    }),
    RecordLabelModule,
    PrizeModule,
    TrackModule,
    CollectorModule,
    PerformerModule,
    BandModule,
    MusicianModule,
    AlbumModule,
    GenreModule,
    CommentModule,
    AlbumcollectorModule,
    AlbumstatusModule,
    PerformerprizeModule],
})
export class AppModule { }
