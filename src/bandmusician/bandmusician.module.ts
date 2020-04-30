import { Module } from '@nestjs/common';
import { BandMusicianController } from './bandmusician.controller';
import { BandMusicianService } from './bandmusician.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Band } from '../band/band.entity';
import { Musician } from '../musician/musician.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Band, Musician])],
  controllers: [BandMusicianController],
  providers: [BandMusicianService]
})
export class BandmusicianModule { }
