import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrizeController } from './prize.controller';
import { PrizeService } from './prize.service';
import { Prize } from './prize.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prize])],
  controllers: [PrizeController],
  providers: [PrizeService]
})
export class PrizeModule { }
