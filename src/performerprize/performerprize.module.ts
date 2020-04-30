import { Module } from '@nestjs/common';
import { PerformerprizeService } from './performerprize.service';
import { PerformerprizeController } from './performerprize.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prize } from '../prize/prize.entity';
import { Performer } from '../performer/performer.entity';
import { PerformerPrize } from './performerprize.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prize, Performer, PerformerPrize])],
  providers: [PerformerprizeService],
  controllers: [PerformerprizeController]
})
export class PerformerprizeModule { }
