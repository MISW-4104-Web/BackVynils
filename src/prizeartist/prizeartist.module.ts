import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrizeArtistController } from './prizeartist.controller';
import { PrizeArtistService } from './prizeartist.service';
import { Prize } from '../prize/prize.entity';
import { Artist } from '../artist/artist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prize, Artist])],
  controllers: [PrizeArtistController],
  providers: [PrizeArtistService]
})
export class PrizeArtistModule { }
