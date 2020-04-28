import { Module } from '@nestjs/common';
import { BandController } from './band.controller';
import { BandService } from './band.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Band } from './band.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Band])],
  controllers: [BandController],
  providers: [BandService]
})
export class BandModule { }
