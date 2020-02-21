import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordLabelVinylController } from './recordlabelvinyl.controller';
import { RecordLabelVinylService } from './recordlabelvinyl.service';
import { RecordLabel } from '../recordlabel/recordlabel.entity';
import { Vinyl } from '../vinyl/vinyl.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecordLabel, Vinyl])],
  controllers: [RecordLabelVinylController],
  providers: [RecordLabelVinylService]
})
export class RecordLabelVinylModule { }
