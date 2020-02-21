import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VinylArtistController } from './vinylartist.controller';
import { VinylArtistService } from './vinylartist.service';

import { Artist } from '../artist/artist.entity';
import { Vinyl } from '../vinyl/vinyl.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Artist, Vinyl])],
  controllers: [VinylArtistController],
  providers: [VinylArtistService]
})
export class VinylArtistModule { }
