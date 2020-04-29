import { Module } from '@nestjs/common';
import { MusicianAlbumController } from './musicianalbum.controller';
import { MusicianAlbumService } from './musicianalbum.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Musician } from '../musician/musician.entity';
import { Album } from '../album/album.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Musician, Album])],
  controllers: [MusicianAlbumController],
  providers: [MusicianAlbumService]
})
export class MusicianAlbumModule { }
