import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RecordLabelService } from './recordlabel.service';
import { RecordLabelController } from './recordlabel.controller';
import { RecordLabel } from './recordlabel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecordLabel])],
  controllers: [RecordLabelController],
  providers: [RecordLabelService],
})
export class RecordLabelModule { }