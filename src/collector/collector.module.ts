import { Module } from '@nestjs/common';
import { CollectorService } from './collector.service';
import { CollectorController } from './collector.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collector } from './collector.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Collector])],
  providers: [CollectorService],
  controllers: [CollectorController]
})
export class CollectorModule { }
