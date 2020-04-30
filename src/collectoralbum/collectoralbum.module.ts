import { Module } from '@nestjs/common';
import { CollectorAlbumService } from './collectoralbum.service';
import { CollectorAlbumController } from './collectoralbum.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collector } from '../collector/collector.entity';
import { Album } from '../album/album.entity';
import { CollectorAlbum } from './collectoralbum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Collector, Album, CollectorAlbum])],
  providers: [CollectorAlbumService],
  controllers: [CollectorAlbumController]
})
export class CollectorAlbumModule { }
