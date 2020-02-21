import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VinylRecordLabelController } from './vinylrecordlabel.controller';
import { VinylRecordLabelService } from './vinylrecordlabel.service';
import { RecordLabel } from '../recordlabel/recordlabel.entity';
import { Vinyl } from '../vinyl/vinyl.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecordLabel, Vinyl])],
  controllers: [VinylRecordLabelController],
  providers: [VinylRecordLabelService]
})
export class VinylRecordLabelModule { }
