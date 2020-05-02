import { Module } from '@nestjs/common';
import { AlbumBandController } from './albumband.controller';
import { AlbumBandService } from './albumband.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Band } from '../band/band.entity';
import { Album } from '../album/album.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Band, Album])],
  controllers: [AlbumBandController],
  providers: [AlbumBandService]
})
export class AlbumBandModule { }
