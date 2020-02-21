import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VinylController } from './vinyl.controller';
import { VinylService } from './vinyl.service';
import { Vinyl } from './vinyl.entity';
import { RecordLabel } from '../recordlabel/recordlabel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vinyl, RecordLabel])],
  controllers: [VinylController],
  providers: [VinylService]
})
export class VinylModule { }
