import { Module } from '@nestjs/common';
import { BandmusicianController } from './bandmusician.controller';
import { BandmusicianService } from './bandmusician.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Band } from '../band/band.entity';
import { Musician } from '../musician/musician.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Band, Musician])],
  controllers: [BandmusicianController],
  providers: [BandmusicianService]
})
export class BandmusicianModule { }
