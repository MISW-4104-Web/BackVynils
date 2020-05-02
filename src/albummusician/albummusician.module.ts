import { Module } from '@nestjs/common';
import { AlbumMusicianService } from './albummusician.service';
import { AlbumMusicianController } from './albummusician.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Musician } from '../musician/musician.entity';
import { Album } from '../album/album.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Musician, Album])],
  providers: [AlbumMusicianService],
  controllers: [AlbumMusicianController]
})
export class AlbumMusicianModule { }
