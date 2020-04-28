import { Module } from '@nestjs/common';
import { MusicianService } from './musician.service';
import { MusicianController } from './musician.controller';
import { Musician } from './musician.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Musician])],
  providers: [MusicianService],
  controllers: [MusicianController]
})
export class MusicianModule { }