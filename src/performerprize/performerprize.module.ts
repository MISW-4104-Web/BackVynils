import { Module } from '@nestjs/common';
import { PerformerPrizeService } from './performerprize.service';
import { PerformerPrizeController, PerformerPrizesController } from './performerprize.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prize } from '../prize/prize.entity';
import { Performer } from '../performer/performer.entity';
import { PerformerPrize } from './performerprize.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prize, Performer, PerformerPrize])],
  providers: [PerformerPrizeService],
  controllers: [PerformerPrizeController, PerformerPrizesController]
})
export class PerformerprizeModule { }
