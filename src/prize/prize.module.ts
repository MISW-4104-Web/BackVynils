import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrizeController } from './prize.controller';
import { PrizeService } from './prize.service';
import { Prize } from './prize.entity';
import { Organization } from '../organization/organization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prize, Organization])],
  controllers: [PrizeController],
  providers: [PrizeService]
})
export class PrizeModule { }
