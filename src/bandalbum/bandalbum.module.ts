import { Module } from '@nestjs/common';
import { BandAlbumService } from './bandalbum.service';
import { BandAlbumController } from './bandalbum.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from '../album/album.entity';
import { Band } from '../band/band.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Band, Album])],
  providers: [BandAlbumService],
  controllers: [BandAlbumController]
})
export class BandAlbumModule { }
