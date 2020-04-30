import { Module } from '@nestjs/common';
import { CollectorPerformerService } from './collectorperformer.service';
import { CollectorPerformerController } from './collectorperformer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collector } from '../collector/collector.entity';
import { Performer } from '../performer/performer.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Collector, Performer])],
    providers: [CollectorPerformerService],
    controllers: [CollectorPerformerController]
})
export class CollectorPerformerModule { }
