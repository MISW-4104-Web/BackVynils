import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';

import { Vinyl } from '../vinyl/vinyl.entity';
import { Track } from '../track/track.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vinyl, Track])],
  controllers: [TrackController],
  providers: [TrackService]
})
export class TrackModule { }